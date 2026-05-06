import { permissionGrants, plans, roles, tenants, userAssignments } from "../domain/seed";
import type { EntityId, ModuleKey, PermissionAction, PermissionGrant, PermissionScope } from "../domain/types";
import type { AuthenticatedSession } from "./auth";

export type AuthorizationRequest = {
  module: ModuleKey;
  action: PermissionAction;
  branchId?: EntityId;
  areaId?: EntityId;
};

export class AuthorizationError extends Error {
  constructor(message = "No autorizado para ejecutar esta accion") {
    super(message);
    this.name = "AuthorizationError";
  }
}

const scopeRank: Record<PermissionScope, number> = {
  own: 1,
  area: 2,
  branch: 3,
  tenant: 4,
  system: 5,
};

function tenantHasModule(tenantId: EntityId, module: ModuleKey) {
  const tenant = tenants.find((candidate) => candidate.id === tenantId);
  const plan = plans.find((candidate) => candidate.id === tenant?.planId);

  return Boolean(plan?.enabledModules.includes(module));
}

function grantMatchesRequest(grant: PermissionGrant, request: AuthorizationRequest) {
  if (grant.module !== request.module || !grant.actions.includes(request.action)) {
    return false;
  }

  if (grant.branchId && grant.branchId !== request.branchId) {
    return false;
  }

  if (grant.areaId && grant.areaId !== request.areaId) {
    return false;
  }

  return true;
}

export function getEffectivePermissions(session: AuthenticatedSession) {
  const assignments = userAssignments.filter(
    (assignment) => assignment.tenantId === session.tenantId && assignment.userId === session.user.id,
  );
  const roleIds = new Set(assignments.map((assignment) => assignment.roleId));

  return permissionGrants
    .filter((grant) => grant.tenantId === session.tenantId && roleIds.has(grant.roleId))
    .sort((left, right) => scopeRank[right.scope] - scopeRank[left.scope]);
}

export function canAccess(session: AuthenticatedSession, request: AuthorizationRequest) {
  if (!tenantHasModule(session.tenantId, request.module)) {
    return false;
  }

  return getEffectivePermissions(session).some((grant) => grantMatchesRequest(grant, request));
}

export function requirePermission(session: AuthenticatedSession, request: AuthorizationRequest) {
  if (!canAccess(session, request)) {
    const roleNames = userAssignments
      .filter((assignment) => assignment.tenantId === session.tenantId && assignment.userId === session.user.id)
      .map((assignment) => roles.find((role) => role.id === assignment.roleId)?.name)
      .filter(Boolean)
      .join(", ");

    throw new AuthorizationError(`No autorizado para ${request.action} en ${request.module}. Roles: ${roleNames || "sin roles"}`);
  }
}

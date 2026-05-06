import { branches, permissionGrants, userAssignments, users } from "./seed";
import type { EntityId, ModuleKey, PermissionAction } from "./types";

export function getBranchesForTenant(tenantId: EntityId) {
  return branches.filter((branch) => branch.tenantId === tenantId);
}

export function getUsersForTenant(tenantId: EntityId) {
  return users.filter((user) => user.tenantId === tenantId);
}

export function getAssignmentsForUser(userId: EntityId) {
  return userAssignments.filter((assignment) => assignment.userId === userId);
}

export function getRolePermissions(roleId: EntityId) {
  return permissionGrants.filter((grant) => grant.roleId === roleId);
}

export function roleCan(roleId: EntityId, module: ModuleKey, action: PermissionAction) {
  return permissionGrants.some(
    (grant) => grant.roleId === roleId && grant.module === module && grant.actions.includes(action),
  );
}

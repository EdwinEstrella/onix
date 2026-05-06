import { tenants, users } from "../domain/seed";
import type { EntityId, User } from "../domain/types";

export type AuthenticatedSession = {
  token: string;
  user: User;
  tenantId: EntityId;
  defaultBranchId: EntityId;
  issuedAt: string;
};

export class AuthenticationError extends Error {
  constructor(message = "Sesion no autenticada") {
    super(message);
    this.name = "AuthenticationError";
  }
}

export function signInWithEmail(email: string): AuthenticatedSession {
  const user = users.find((candidate) => candidate.email.toLowerCase() === email.toLowerCase());

  if (!user || user.status !== "active") {
    throw new AuthenticationError("Credenciales invalidas o usuario inactivo");
  }

  const tenant = tenants.find((candidate) => candidate.id === user.tenantId);
  if (!tenant || tenant.status !== "active") {
    throw new AuthenticationError("Hospital inactivo o no disponible");
  }

  return {
    token: `mock.jwt.${user.id}.${tenant.id}`,
    user,
    tenantId: tenant.id,
    defaultBranchId: user.defaultBranchId,
    issuedAt: new Date().toISOString(),
  };
}

export function requireSession(session?: AuthenticatedSession | null): AuthenticatedSession {
  if (!session?.token) {
    throw new AuthenticationError();
  }

  return session;
}

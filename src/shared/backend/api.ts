import { auditLogs, branches, tenants, users } from "../domain/seed";
import type { ModuleKey, PermissionAction } from "../domain/types";
import { requireSession, signInWithEmail, type AuthenticatedSession } from "./auth";
import { requirePermission } from "./authorization";
import { getFinancialSummary, getIncomeReport, getPatientReport } from "./reports";

function authenticatedRequest<T>(
  session: AuthenticatedSession | null,
  module: ModuleKey,
  action: PermissionAction,
  resolve: (session: AuthenticatedSession) => T,
) {
  const activeSession = requireSession(session);

  requirePermission(activeSession, { module, action, branchId: activeSession.defaultBranchId });
  return resolve(activeSession);
}

export const backendApi = {
  auth: {
    signInWithEmail,
  },
  tenants: {
    list(session: AuthenticatedSession | null) {
      return authenticatedRequest(session, "tenants", "read", () => tenants);
    },
  },
  branches: {
    list(session: AuthenticatedSession | null) {
      return authenticatedRequest(session, "branches", "read", (activeSession) =>
        branches.filter((branch) => branch.tenantId === activeSession.tenantId),
      );
    },
  },
  users: {
    list(session: AuthenticatedSession | null) {
      return authenticatedRequest(session, "users", "read", (activeSession) =>
        users.filter((user) => user.tenantId === activeSession.tenantId),
      );
    },
  },
  audit: {
    list(session: AuthenticatedSession | null) {
      return authenticatedRequest(session, "audit", "read", (activeSession) =>
        auditLogs.filter((log) => log.tenantId === activeSession.tenantId),
      );
    },
  },
  reports: {
    income(session: AuthenticatedSession | null) {
      return authenticatedRequest(session, "reports", "read", (activeSession) => getIncomeReport(activeSession.tenantId));
    },
    patients(session: AuthenticatedSession | null) {
      return authenticatedRequest(session, "reports", "read", (activeSession) => getPatientReport(activeSession.tenantId));
    },
    financialSummary(session: AuthenticatedSession | null) {
      return authenticatedRequest(session, "reports", "read", (activeSession) => getFinancialSummary(activeSession.tenantId));
    },
  },
};

# Onix ERP Data Model

Phase 2 defines the app contracts for a multi-tenant hospital ERP. The UI is still mock-based, but the data now has the fields required by a future backend.

## Core Rules

- Every operational entity must include `tenantId`.
- Every branch-specific entity must include `branchId`.
- Permissions are granted through roles using module, action and scope.
- User access is resolved through `UserAssignment`.
- Sensitive actions must create an `AuditLog`.

## Main Entities

- `Plan`: modules and limits available to a hospital.
- `Tenant`: hospital group or clinic customer.
- `Branch`: physical or virtual site under a tenant.
- `Area`: operational area inside a branch.
- `Role`: reusable permission profile.
- `PermissionGrant`: actions allowed for a role.
- `User`: authenticated person.
- `UserAssignment`: role assignment by tenant, branch or area.
- `Patient`: branch-scoped patient record.
- `Doctor`: medical profile linked to a user.
- `Appointment`: scheduled service between patient and doctor.
- `ClinicalEncounter`: clinical note for an appointment.
- `Invoice`: billed services.
- `Payment`: money collected against invoices.
- `AuditLog`: immutable action trail.

## Implementation Files

- `src/shared/domain/types.ts`
- `src/shared/domain/seed.ts`
- `src/shared/domain/selectors.ts`
- `src/features/administration/DataModel.tsx`

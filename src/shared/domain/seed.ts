import type {
  Appointment,
  Area,
  AuditLog,
  Branch,
  ClinicalEncounter,
  DataModelEntity,
  Doctor,
  Invoice,
  Patient,
  Payment,
  PermissionGrant,
  Plan,
  Role,
  Tenant,
  User,
  UserAssignment,
} from "./types";

const now = "2026-05-05T12:00:00.000Z";

export const plans: Plan[] = [
  {
    id: "plan_professional",
    name: "Professional",
    branchLimit: 5,
    userLimit: 150,
    storageGbLimit: 250,
    enabledModules: ["branches", "users", "patients", "appointments", "clinical_records", "billing", "payments", "reports", "audit"],
    createdAt: now,
    updatedAt: now,
  },
];

export const tenants: Tenant[] = [
  {
    id: "tenant_trustcare",
    name: "Grupo Clinico Trustcare",
    legalName: "Trustcare Salud SpA",
    taxId: "76.555.123-8",
    planId: "plan_professional",
    status: "active",
    defaultBranchId: "branch_las_condes",
    createdAt: now,
    updatedAt: now,
  },
];

export const branches: Branch[] = [
  {
    id: "branch_las_condes",
    tenantId: "tenant_trustcare",
    branchId: "branch_las_condes",
    name: "Casa Matriz Las Condes",
    code: "TRU-LC",
    city: "Santiago",
    address: "Av. Apoquindo 4500",
    status: "active",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "branch_providencia",
    tenantId: "tenant_trustcare",
    branchId: "branch_providencia",
    name: "Sucursal Providencia",
    code: "TRU-PV",
    city: "Santiago",
    address: "Av. Providencia 1200",
    status: "active",
    createdAt: now,
    updatedAt: now,
  },
];

export const areas: Area[] = [
  { id: "area_cashier_lc", tenantId: "tenant_trustcare", branchId: "branch_las_condes", name: "Caja", type: "finance", createdAt: now, updatedAt: now },
  { id: "area_frontdesk_lc", tenantId: "tenant_trustcare", branchId: "branch_las_condes", name: "Recepcion", type: "operations", createdAt: now, updatedAt: now },
  { id: "area_cardiology_pv", tenantId: "tenant_trustcare", branchId: "branch_providencia", name: "Cardiologia", type: "clinical", createdAt: now, updatedAt: now },
];

export const roles: Role[] = [
  { id: "role_tenant_admin", tenantId: "tenant_trustcare", name: "Administrador Hospital", description: "Gestion completa del hospital.", scope: "tenant", isSystemRole: true, createdAt: now, updatedAt: now },
  { id: "role_branch_admin", tenantId: "tenant_trustcare", name: "Administrador Sucursal", description: "Gestion operativa por sede.", scope: "branch", isSystemRole: false, createdAt: now, updatedAt: now },
  { id: "role_doctor", tenantId: "tenant_trustcare", name: "Doctor", description: "Atencion clinica de pacientes asignados.", scope: "own", isSystemRole: false, createdAt: now, updatedAt: now },
  { id: "role_cashier", tenantId: "tenant_trustcare", name: "Caja", description: "Cobros, pagos y facturacion de sede.", scope: "area", isSystemRole: false, createdAt: now, updatedAt: now },
];

export const permissionGrants: PermissionGrant[] = [
  { id: "perm_admin_all", tenantId: "tenant_trustcare", roleId: "role_tenant_admin", module: "users", actions: ["read", "create", "update", "delete", "export"], scope: "tenant" },
  { id: "perm_admin_tenants", tenantId: "tenant_trustcare", roleId: "role_tenant_admin", module: "tenants", actions: ["read", "update", "export"], scope: "tenant" },
  { id: "perm_admin_branches", tenantId: "tenant_trustcare", roleId: "role_tenant_admin", module: "branches", actions: ["read", "create", "update", "delete", "export"], scope: "tenant" },
  { id: "perm_admin_reports", tenantId: "tenant_trustcare", roleId: "role_tenant_admin", module: "reports", actions: ["read", "export"], scope: "tenant" },
  { id: "perm_admin_audit", tenantId: "tenant_trustcare", roleId: "role_tenant_admin", module: "audit", actions: ["read", "export"], scope: "tenant" },
  { id: "perm_doctor_clinical", tenantId: "tenant_trustcare", roleId: "role_doctor", module: "clinical_records", actions: ["read", "create", "update"], scope: "own" },
  { id: "perm_cashier_billing", tenantId: "tenant_trustcare", roleId: "role_cashier", module: "billing", actions: ["read", "create", "update", "export"], scope: "area", areaId: "area_cashier_lc" },
  { id: "perm_cashier_payments", tenantId: "tenant_trustcare", roleId: "role_cashier", module: "payments", actions: ["read", "create", "approve", "export"], scope: "area", areaId: "area_cashier_lc" },
];

export const users: User[] = [
  { id: "user_admin", tenantId: "tenant_trustcare", fullName: "Mariana Fuentes", email: "mariana@trustcare.cl", status: "active", defaultBranchId: "branch_las_condes", createdAt: now, updatedAt: now },
  { id: "user_cashier", tenantId: "tenant_trustcare", fullName: "Carlos Rivas", email: "carlos@trustcare.cl", status: "active", defaultBranchId: "branch_las_condes", createdAt: now, updatedAt: now },
  { id: "user_doctor", tenantId: "tenant_trustcare", fullName: "Dra. Paula Vidal", email: "paula@trustcare.cl", status: "active", defaultBranchId: "branch_providencia", createdAt: now, updatedAt: now },
];

export const userAssignments: UserAssignment[] = [
  { id: "assign_admin", tenantId: "tenant_trustcare", userId: "user_admin", roleId: "role_tenant_admin", createdAt: now, updatedAt: now },
  { id: "assign_cashier", tenantId: "tenant_trustcare", userId: "user_cashier", roleId: "role_cashier", branchId: "branch_las_condes", areaId: "area_cashier_lc", createdAt: now, updatedAt: now },
  { id: "assign_doctor", tenantId: "tenant_trustcare", userId: "user_doctor", roleId: "role_doctor", branchId: "branch_providencia", areaId: "area_cardiology_pv", createdAt: now, updatedAt: now },
];

export const patients: Patient[] = [
  {
    id: "patient_001",
    tenantId: "tenant_trustcare",
    branchId: "branch_providencia",
    medicalRecordNumber: "TRU-PV-0001",
    fullName: "Alberto Ripley",
    birthDate: "1999-02-12",
    gender: "male",
    primaryDoctorId: "doctor_001",
    createdAt: "2026-02-24T10:15:00.000Z",
    updatedAt: now,
  },
  {
    id: "patient_002",
    tenantId: "tenant_trustcare",
    branchId: "branch_las_condes",
    medicalRecordNumber: "TRU-LC-0002",
    fullName: "Susan Babin",
    birthDate: "2004-09-03",
    gender: "female",
    createdAt: "2026-04-15T14:10:00.000Z",
    updatedAt: now,
  },
  {
    id: "patient_003",
    tenantId: "tenant_trustcare",
    branchId: "branch_las_condes",
    medicalRecordNumber: "TRU-LC-0003",
    fullName: "Carol Lam",
    birthDate: "1997-11-19",
    gender: "female",
    createdAt: "2026-05-01T09:20:00.000Z",
    updatedAt: now,
  },
];

export const doctors: Doctor[] = [
  {
    id: "doctor_001",
    tenantId: "tenant_trustcare",
    branchId: "branch_providencia",
    userId: "user_doctor",
    licenseNumber: "MED-CL-44127",
    specialty: "Cardiologia",
    publicBookingEnabled: true,
    createdAt: now,
    updatedAt: now,
  },
];

export const appointments: Appointment[] = [
  {
    id: "appt_001",
    tenantId: "tenant_trustcare",
    branchId: "branch_providencia",
    patientId: "patient_001",
    doctorId: "doctor_001",
    serviceId: "service_cardio",
    startsAt: "2026-05-08T13:00:00.000Z",
    endsAt: "2026-05-08T13:30:00.000Z",
    status: "confirmed",
    createdAt: now,
    updatedAt: now,
  },
];

export const clinicalEncounters: ClinicalEncounter[] = [
  {
    id: "encounter_001",
    tenantId: "tenant_trustcare",
    branchId: "branch_providencia",
    appointmentId: "appt_001",
    patientId: "patient_001",
    doctorId: "doctor_001",
    reason: "Control cardiologico",
    diagnosis: "Hipertension controlada",
    lockedAt: "2026-05-08T14:00:00.000Z",
    createdAt: "2026-05-08T13:05:00.000Z",
    updatedAt: "2026-05-08T14:00:00.000Z",
  },
];

export const invoices: Invoice[] = [
  {
    id: "invoice_001",
    tenantId: "tenant_trustcare",
    branchId: "branch_las_condes",
    invoiceNumber: "F-000125",
    patientId: "patient_001",
    appointmentId: "appt_001",
    subtotal: 80000,
    tax: 15200,
    total: 95200,
    status: "issued",
    createdAt: now,
    updatedAt: now,
  },
];

export const payments: Payment[] = [
  {
    id: "payment_001",
    tenantId: "tenant_trustcare",
    branchId: "branch_las_condes",
    invoiceId: "invoice_001",
    amount: 95200,
    method: "card",
    status: "completed",
    paidAt: "2026-05-05T15:20:00.000Z",
    createdAt: now,
    updatedAt: now,
  },
];

export const auditLogs: AuditLog[] = [
  {
    id: "audit_001",
    tenantId: "tenant_trustcare",
    actorUserId: "user_cashier",
    branchId: "branch_las_condes",
    module: "payments",
    action: "create",
    entityName: "Payment",
    entityId: "payment_001",
    occurredAt: "2026-05-05T15:20:00.000Z",
  },
];

export const dataModelEntities: DataModelEntity[] = [
  { name: "Tenant", scope: "system", owner: "Super Admin", keyFields: ["id", "planId", "status"], relations: ["Plan", "Branch", "User", "Role"] },
  { name: "Branch", scope: "tenant", owner: "Administrador Hospital", keyFields: ["tenantId", "branchId", "code"], relations: ["Area", "Appointment", "Invoice", "Payment"] },
  { name: "User", scope: "tenant", owner: "Administrador Hospital", keyFields: ["tenantId", "defaultBranchId", "status"], relations: ["UserAssignment", "AuditLog"] },
  { name: "Role", scope: "tenant", owner: "Administrador Hospital", keyFields: ["tenantId", "scope"], relations: ["PermissionGrant", "UserAssignment"] },
  { name: "Patient", scope: "branch", owner: "Recepcion", keyFields: ["tenantId", "branchId", "medicalRecordNumber"], relations: ["Appointment", "ClinicalEncounter", "Invoice"] },
  { name: "Appointment", scope: "branch", owner: "Recepcion", keyFields: ["tenantId", "branchId", "patientId", "doctorId"], relations: ["ClinicalEncounter", "Invoice"] },
  { name: "Invoice", scope: "branch", owner: "Caja", keyFields: ["tenantId", "branchId", "invoiceNumber"], relations: ["Payment", "Patient"] },
  { name: "AuditLog", scope: "tenant", owner: "Sistema", keyFields: ["tenantId", "actorUserId", "entityId"], relations: ["User"] },
];

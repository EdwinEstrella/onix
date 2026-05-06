export type EntityId = string;

export type TenantStatus = "active" | "implementation" | "paused";
export type BranchStatus = "active" | "inactive";
export type UserStatus = "active" | "pending" | "suspended";
export type AppointmentStatus = "scheduled" | "confirmed" | "completed" | "cancelled";
export type InvoiceStatus = "draft" | "issued" | "paid" | "partial" | "void";
export type PaymentStatus = "completed" | "pending" | "failed" | "refunded";

export type PermissionAction =
  | "read"
  | "create"
  | "update"
  | "delete"
  | "approve"
  | "export";

export type PermissionScope = "system" | "tenant" | "branch" | "area" | "own";

export type ModuleKey =
  | "tenants"
  | "branches"
  | "users"
  | "patients"
  | "appointments"
  | "clinical_records"
  | "billing"
  | "payments"
  | "inventory"
  | "reports"
  | "audit";

export type TenantScoped = {
  tenantId: EntityId;
};

export type BranchScoped = TenantScoped & {
  branchId: EntityId;
};

export type Timestamped = {
  createdAt: string;
  updatedAt: string;
};

export type Plan = Timestamped & {
  id: EntityId;
  name: string;
  branchLimit: number | null;
  userLimit: number | null;
  storageGbLimit: number | null;
  enabledModules: ModuleKey[];
};

export type Tenant = Timestamped & {
  id: EntityId;
  name: string;
  legalName: string;
  taxId: string;
  planId: EntityId;
  status: TenantStatus;
  defaultBranchId: EntityId;
};

export type Branch = BranchScoped &
  Timestamped & {
    id: EntityId;
    name: string;
    code: string;
    city: string;
    address: string;
    status: BranchStatus;
  };

export type Area = BranchScoped &
  Timestamped & {
    id: EntityId;
    name: string;
    type: "clinical" | "finance" | "operations" | "support";
  };

export type Role = TenantScoped &
  Timestamped & {
    id: EntityId;
    name: string;
    description: string;
    scope: PermissionScope;
    isSystemRole: boolean;
  };

export type PermissionGrant = TenantScoped & {
  id: EntityId;
  roleId: EntityId;
  module: ModuleKey;
  actions: PermissionAction[];
  scope: PermissionScope;
  branchId?: EntityId;
  areaId?: EntityId;
};

export type User = TenantScoped &
  Timestamped & {
    id: EntityId;
    fullName: string;
    email: string;
    status: UserStatus;
    defaultBranchId: EntityId;
  };

export type UserAssignment = TenantScoped &
  Timestamped & {
    id: EntityId;
    userId: EntityId;
    roleId: EntityId;
    branchId?: EntityId;
    areaId?: EntityId;
  };

export type Patient = BranchScoped &
  Timestamped & {
    id: EntityId;
    medicalRecordNumber: string;
    fullName: string;
    birthDate: string;
    gender: "female" | "male" | "other";
    primaryDoctorId?: EntityId;
  };

export type Doctor = BranchScoped &
  Timestamped & {
    id: EntityId;
    userId: EntityId;
    licenseNumber: string;
    specialty: string;
    publicBookingEnabled: boolean;
  };

export type Appointment = BranchScoped &
  Timestamped & {
    id: EntityId;
    patientId: EntityId;
    doctorId: EntityId;
    serviceId: EntityId;
    startsAt: string;
    endsAt: string;
    status: AppointmentStatus;
  };

export type ClinicalEncounter = BranchScoped &
  Timestamped & {
    id: EntityId;
    appointmentId: EntityId;
    patientId: EntityId;
    doctorId: EntityId;
    reason: string;
    diagnosis?: string;
    lockedAt?: string;
  };

export type Invoice = BranchScoped &
  Timestamped & {
    id: EntityId;
    invoiceNumber: string;
    patientId: EntityId;
    appointmentId?: EntityId;
    subtotal: number;
    tax: number;
    total: number;
    status: InvoiceStatus;
  };

export type Payment = BranchScoped &
  Timestamped & {
    id: EntityId;
    invoiceId: EntityId;
    amount: number;
    method: "cash" | "card" | "transfer" | "insurance";
    status: PaymentStatus;
    paidAt?: string;
  };

export type AuditLog = TenantScoped & {
  id: EntityId;
  actorUserId: EntityId;
  branchId?: EntityId;
  module: ModuleKey;
  action: PermissionAction;
  entityName: string;
  entityId: EntityId;
  occurredAt: string;
};

export type DataModelEntity = {
  name: string;
  scope: PermissionScope;
  owner: string;
  keyFields: string[];
  relations: string[];
};

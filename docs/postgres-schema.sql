create schema if not exists private;

create extension if not exists pgcrypto;

create table public.plans (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  branch_limit integer,
  user_limit integer,
  storage_gb_limit integer,
  enabled_modules text[] not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  legal_name text not null,
  tax_id text not null,
  plan_id uuid not null references public.plans(id),
  status text not null default 'implementation' check (status in ('active', 'implementation', 'paused')),
  default_branch_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.branches (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  name text not null,
  code text not null,
  city text not null,
  address text not null,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, code)
);

alter table public.tenants
  add constraint tenants_default_branch_id_fkey foreign key (default_branch_id) references public.branches(id);

create table public.areas (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete cascade,
  name text not null,
  type text not null check (type in ('clinical', 'finance', 'operations', 'support')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.roles (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  name text not null,
  description text not null,
  scope text not null check (scope in ('system', 'tenant', 'branch', 'area', 'own')),
  is_system_role boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.permission_grants (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  role_id uuid not null references public.roles(id) on delete cascade,
  module text not null,
  actions text[] not null,
  scope text not null check (scope in ('system', 'tenant', 'branch', 'area', 'own')),
  branch_id uuid references public.branches(id),
  area_id uuid references public.areas(id)
);

create table public.users (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid not null unique references auth.users(id) on delete cascade,
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  full_name text not null,
  email text not null,
  status text not null default 'pending' check (status in ('active', 'pending', 'suspended')),
  default_branch_id uuid references public.branches(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, email)
);

create table public.user_assignments (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  role_id uuid not null references public.roles(id) on delete cascade,
  branch_id uuid references public.branches(id),
  area_id uuid references public.areas(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.patients (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete cascade,
  medical_record_number text not null,
  full_name text not null,
  birth_date date not null,
  gender text not null check (gender in ('female', 'male', 'other')),
  primary_doctor_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, branch_id, medical_record_number)
);

create table public.doctors (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete cascade,
  user_id uuid not null references public.users(id),
  license_number text not null,
  specialty text not null,
  public_booking_enabled boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.patients
  add constraint patients_primary_doctor_id_fkey foreign key (primary_doctor_id) references public.doctors(id);

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete cascade,
  patient_id uuid not null references public.patients(id),
  doctor_id uuid not null references public.doctors(id),
  service_id uuid,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status text not null check (status in ('scheduled', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.invoices (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete cascade,
  invoice_number text not null,
  patient_id uuid not null references public.patients(id),
  appointment_id uuid references public.appointments(id),
  subtotal numeric(12, 2) not null,
  tax numeric(12, 2) not null,
  total numeric(12, 2) not null,
  status text not null check (status in ('draft', 'issued', 'paid', 'partial', 'void')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (tenant_id, invoice_number)
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  branch_id uuid not null references public.branches(id) on delete cascade,
  invoice_id uuid not null references public.invoices(id),
  amount numeric(12, 2) not null,
  method text not null check (method in ('cash', 'card', 'transfer', 'insurance')),
  status text not null check (status in ('completed', 'pending', 'failed', 'refunded')),
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  actor_user_id uuid not null references public.users(id),
  branch_id uuid references public.branches(id),
  module text not null,
  action text not null,
  entity_name text not null,
  entity_id uuid not null,
  occurred_at timestamptz not null default now()
);

create index on public.users (auth_user_id);
create index on public.users (tenant_id);
create index on public.user_assignments (user_id, tenant_id);
create index on public.permission_grants (tenant_id, role_id, module);
create index on public.branches (tenant_id);
create index on public.patients (tenant_id, branch_id);
create index on public.appointments (tenant_id, branch_id);
create index on public.invoices (tenant_id, branch_id);
create index on public.payments (tenant_id, branch_id);
create index on public.audit_logs (tenant_id, occurred_at desc);

create or replace function private.current_user_tenant_ids()
returns setof uuid
language sql
security definer
set search_path = public
as $$
  select tenant_id
  from public.users
  where auth_user_id = (select auth.uid())
    and status = 'active'
$$;

create or replace function private.user_has_permission(
  target_tenant_id uuid,
  target_module text,
  target_action text,
  target_branch_id uuid default null,
  target_area_id uuid default null
)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.users u
    join public.tenants t on t.id = u.tenant_id
    join public.plans p on p.id = t.plan_id
    join public.user_assignments ua on ua.user_id = u.id and ua.tenant_id = u.tenant_id
    join public.permission_grants pg on pg.role_id = ua.role_id and pg.tenant_id = u.tenant_id
    where u.auth_user_id = (select auth.uid())
      and u.status = 'active'
      and t.status = 'active'
      and u.tenant_id = target_tenant_id
      and target_module = any(p.enabled_modules)
      and pg.module = target_module
      and target_action = any(pg.actions)
      and (pg.branch_id is null or pg.branch_id = target_branch_id)
      and (pg.area_id is null or pg.area_id = target_area_id)
  )
$$;

create view public.financial_summary
with (security_invoker = true)
as
select
  tenant_id,
  coalesce(sum(amount) filter (where status = 'completed'), 0)::numeric(12, 2) as total_income,
  round((coalesce(sum(amount) filter (where status = 'completed'), 0) * 0.42)::numeric, 2) as estimated_expenses,
  round((coalesce(sum(amount) filter (where status = 'completed'), 0) * 0.58)::numeric, 2) as net_profit,
  case
    when coalesce(sum(amount) filter (where status = 'completed'), 0) = 0 then 0
    else 58.0
  end as margin
from public.payments
group by tenant_id;

alter table public.plans enable row level security;
alter table public.tenants enable row level security;
alter table public.branches enable row level security;
alter table public.areas enable row level security;
alter table public.roles enable row level security;
alter table public.permission_grants enable row level security;
alter table public.users enable row level security;
alter table public.user_assignments enable row level security;
alter table public.patients enable row level security;
alter table public.doctors enable row level security;
alter table public.appointments enable row level security;
alter table public.invoices enable row level security;
alter table public.payments enable row level security;
alter table public.audit_logs enable row level security;

create policy "active users can read own tenant plans"
on public.plans for select
to authenticated
using (
  id in (
    select plan_id
    from public.tenants
    where id in (select private.current_user_tenant_ids())
  )
);

create policy "active users can read own tenant"
on public.tenants for select
to authenticated
using (id in (select private.current_user_tenant_ids()));

create policy "active users can read tenant branches"
on public.branches for select
to authenticated
using (tenant_id in (select private.current_user_tenant_ids()));

create policy "active users can read tenant areas"
on public.areas for select
to authenticated
using (tenant_id in (select private.current_user_tenant_ids()));

create policy "tenant admins can manage branches"
on public.branches for all
to authenticated
using (private.user_has_permission(tenant_id, 'branches', 'update', id, null))
with check (private.user_has_permission(tenant_id, 'branches', 'update', id, null));

create policy "users can read tenant users with permission"
on public.users for select
to authenticated
using (private.user_has_permission(tenant_id, 'users', 'read', default_branch_id, null));

create policy "users can read own profile"
on public.users for select
to authenticated
using (auth_user_id = (select auth.uid()));

create policy "users can read tenant roles"
on public.roles for select
to authenticated
using (tenant_id in (select private.current_user_tenant_ids()));

create policy "users can read tenant grants"
on public.permission_grants for select
to authenticated
using (tenant_id in (select private.current_user_tenant_ids()));

create policy "users can read own assignments"
on public.user_assignments for select
to authenticated
using (
  user_id in (
    select id
    from public.users
    where auth_user_id = (select auth.uid())
  )
);

create policy "users can read patients by permission"
on public.patients for select
to authenticated
using (private.user_has_permission(tenant_id, 'patients', 'read', branch_id, null));

create policy "users can manage patients by permission"
on public.patients for all
to authenticated
using (private.user_has_permission(tenant_id, 'patients', 'update', branch_id, null))
with check (private.user_has_permission(tenant_id, 'patients', 'create', branch_id, null));

create policy "users can read doctors by tenant"
on public.doctors for select
to authenticated
using (tenant_id in (select private.current_user_tenant_ids()));

create policy "users can read appointments by permission"
on public.appointments for select
to authenticated
using (private.user_has_permission(tenant_id, 'appointments', 'read', branch_id, null));

create policy "users can read invoices by permission"
on public.invoices for select
to authenticated
using (private.user_has_permission(tenant_id, 'billing', 'read', branch_id, null));

create policy "users can read payments by permission"
on public.payments for select
to authenticated
using (private.user_has_permission(tenant_id, 'payments', 'read', branch_id, null));

create policy "users can read reports by permission"
on public.payments for select
to authenticated
using (private.user_has_permission(tenant_id, 'reports', 'read', branch_id, null));

create policy "users can read audit logs by permission"
on public.audit_logs for select
to authenticated
using (private.user_has_permission(tenant_id, 'audit', 'read', branch_id, null));

grant usage on schema public to authenticated;
grant select, insert, update, delete on all tables in schema public to authenticated;
grant select on public.financial_summary to authenticated;

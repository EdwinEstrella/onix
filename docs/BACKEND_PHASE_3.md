# Onix ERP Supabase Backend Phase 3

Phase 3 adds the Supabase backend contract that the desktop client will consume when local seed data is moved to managed Postgres.

## Delivered Scope

- Supabase client dependency and lazy client factory.
- Supabase Auth identity linked through `public.users.auth_user_id`.
- Tenant and plan-aware role authorization in Postgres RLS.
- Supabase/Postgres schema contract in `docs/postgres-schema.sql`.
- Report aggregations based on invoices, payments, patients and appointments.
- Audit-log endpoint contract for sensitive actions.

## Implementation Files

- `src/shared/backend/auth.ts`
- `src/shared/backend/authorization.ts`
- `src/shared/backend/api.ts`
- `src/shared/backend/reports.ts`
- `src/shared/backend/supabase.ts`
- `src/shared/backend/database.types.ts`
- `docs/postgres-schema.sql`

## Supabase Rules

- Use `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env.local`.
- Never expose a service-role key in the Vite/Electron client.
- Every exposed table in `public` has RLS enabled.
- Authorization data lives in tables, not editable user metadata.
- Private helper functions live in the `private` schema, outside exposed API schemas.
- Views use `security_invoker = true` so RLS still applies.

## Migration Path

The current `backendApi` remains in-process so the app is usable without credentials. The Supabase migration has been applied to project `Onix` (`wjyahfhtqzdnnfspzadf`) as `20260506002258_phase_3_supabase_backend`.

Next, set the Vite env vars and replace screen data reads with `getSupabaseClient().from(...)`.

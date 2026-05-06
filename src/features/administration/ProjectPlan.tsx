import { CalendarDays, CheckCircle2, Circle, Database, GitBranch, KeyRound, Server, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { Badge } from "../../shared/ui/badge";
import { Card } from "../../shared/ui/card";
import { Progress } from "../../shared/ui/progress";
import { backendApi } from "../../shared/backend/api";
import { isSupabaseConfigured } from "../../shared/backend/supabase";

const phases = [
  { name: "Fase 1 - UI ERP completa", status: "Completada", progress: 100, items: ["Multi-hospital y sucursales", "Usuarios y perfiles", "Permisos en cascada", "Planes y limites"] },
  { name: "Fase 2 - Modelo de datos", status: "Completada", progress: 100, items: ["Tenant ID en entidades", "Sedes y areas", "Roles y permisos", "Auditoria"] },
  { name: "Fase 3 - Backend", status: "Completada", progress: 100, items: ["API autenticada", "PostgreSQL", "Autorizacion por rol", "Reportes reales"] },
  { name: "Fase 4 - Operacion hospitalaria", status: "Pendiente", progress: 0, items: ["Admisiones", "Consulta medica", "Caja", "Inventario y farmacia"] },
];

const modules = [
  { name: "Pacientes", owner: "Recepcion / Doctor", priority: "Alta" },
  { name: "Agenda", owner: "Recepcion", priority: "Alta" },
  { name: "Caja", owner: "Finanzas", priority: "Alta" },
  { name: "Historia clinica", owner: "Doctor / Enfermeria", priority: "Alta" },
  { name: "Usuarios y permisos", owner: "Administrador", priority: "Alta" },
  { name: "Reportes", owner: "Direccion", priority: "Media" },
];

const principles = [
  { icon: GitBranch, title: "Multi-tenant desde la base", desc: "Cada dato pertenece a un hospital y opcionalmente a una sucursal." },
  { icon: ShieldCheck, title: "Permisos por cascada", desc: "Plan, hospital, sede, area y usuario reducen o conceden capacidades." },
  { icon: Database, title: "Datos reales antes de mas pantallas", desc: "Primero conectar pacientes, citas y pagos de punta a punta." },
  { icon: Stethoscope, title: "Flujos por area", desc: "Recepcion, doctor, caja, farmacia y administracion deben tener vistas propias." },
];

const backendSession = backendApi.auth.signInWithEmail("mariana@trustcare.cl");
const financialSummary = backendApi.reports.financialSummary(backendSession);
const backendEvidence = [
  { icon: KeyRound, label: "Supabase Auth", value: isSupabaseConfigured() ? "Configurado" : "Pendiente env", detail: "Usa publishable key y sesion del cliente" },
  { icon: ShieldCheck, label: "RLS multi-tenant", value: "Rol + plan", detail: "Modulo y accion validados en Postgres" },
  { icon: Database, label: "Supabase Postgres", value: "Schema SQL", detail: "RLS listo en docs/postgres-schema.sql" },
  { icon: Server, label: "Reportes", value: `$${financialSummary.totalIncome.toLocaleString("es-CL")}`, detail: "Agregados desde pagos/facturas" },
];

function priorityBadge(priority: string) {
  const className =
    priority === "Alta"
      ? "bg-rose-100 text-rose-700 hover:bg-rose-100"
      : "bg-amber-100 text-amber-700 hover:bg-amber-100";
  return <Badge className={className}>{priority}</Badge>;
}

export function ProjectPlan() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Plan Maestro Onix ERP</h1>
          <p className="text-xs text-slate-500">Ruta recomendada para pasar de UI a ERP hospitalario multi-tenant.</p>
        </div>
        <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100 gap-1.5"><Sparkles className="w-3.5 h-3.5" />UI actualizada</Badge>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        {principles.map((principle) => {
          const Icon = principle.icon;
          return (
            <Card key={principle.title} className="p-4">
              <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <div style={{ fontWeight: 600 }} className="text-sm">{principle.title}</div>
              <p className="text-xs text-slate-500 mt-1">{principle.desc}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-4">
        <Card className="p-5">
          <h2 style={{ fontWeight: 600 }} className="text-sm mb-4">Roadmap recomendado</h2>
          <div className="space-y-4">
            {phases.map((phase, index) => (
              <div key={phase.name} className="rounded-lg border p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center ${phase.status === "Completada" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"}`}>
                      {phase.status === "Completada" ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600 }} className="text-sm">{phase.name}</div>
                      <div className="text-xs text-slate-500">{phase.status}</div>
                    </div>
                  </div>
                  <Badge variant="secondary">{phase.progress}%</Badge>
                </div>
                <Progress value={phase.progress} className="mt-3 bg-violet-100 [&>div]:bg-violet-600" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                  {phase.items.map((item) => <div key={item} className="text-xs text-slate-600 rounded-md bg-slate-50 px-3 py-2">{item}</div>)}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="w-4 h-4 text-violet-700" />
            <h2 style={{ fontWeight: 600 }} className="text-sm">Prioridad de modulos</h2>
          </div>
          <div className="space-y-3">
            {modules.map((module) => (
              <div key={module.name} className="flex items-center justify-between gap-3 border-b last:border-0 pb-3 last:pb-0">
                <div>
                  <div className="text-sm">{module.name}</div>
                  <div className="text-xs text-slate-500">{module.owner}</div>
                </div>
                {priorityBadge(module.priority)}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-4 h-4 text-violet-700" />
            <h2 style={{ fontWeight: 600 }} className="text-sm">Entregables fase 3</h2>
          </div>
          <div className="space-y-3">
            {backendEvidence.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3 border-b last:border-0 pb-3 last:pb-0">
                  <div className="w-8 h-8 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div style={{ fontWeight: 600 }} className="text-sm truncate">{item.value}</div>
                    <div className="text-xs text-slate-500">{item.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
}

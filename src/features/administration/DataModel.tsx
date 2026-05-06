import { Activity, CheckCircle2, Database, GitBranch, KeyRound, ShieldCheck } from "lucide-react";
import { Badge } from "../../shared/ui/badge";
import { Card } from "../../shared/ui/card";
import { Progress } from "../../shared/ui/progress";
import {
  appointments,
  auditLogs,
  branches,
  dataModelEntities,
  invoices,
  payments,
  permissionGrants,
  roles,
  tenants,
  users,
} from "../../shared/domain/seed";

const totals = [
  { label: "Tenants", value: tenants.length, icon: GitBranch, color: "bg-violet-100 text-violet-700" },
  { label: "Sucursales", value: branches.length, icon: Database, color: "bg-sky-100 text-sky-700" },
  { label: "Roles", value: roles.length, icon: ShieldCheck, color: "bg-emerald-100 text-emerald-700" },
  { label: "Permisos", value: permissionGrants.length, icon: KeyRound, color: "bg-amber-100 text-amber-700" },
];

const samples = [
  { name: "Usuarios", rows: users.length, scope: "tenantId", status: "Listo" },
  { name: "Citas", rows: appointments.length, scope: "tenantId + branchId", status: "Listo" },
  { name: "Facturas", rows: invoices.length, scope: "tenantId + branchId", status: "Listo" },
  { name: "Pagos", rows: payments.length, scope: "tenantId + branchId", status: "Listo" },
  { name: "Auditoria", rows: auditLogs.length, scope: "tenantId", status: "Listo" },
];

const rules = [
  "Toda entidad operativa lleva tenantId.",
  "Todo dato de sucursal lleva branchId.",
  "Los permisos se asignan por rol, modulo, accion y alcance.",
  "Las excepciones por usuario se modelan con UserAssignment.",
  "Toda accion sensible debe producir AuditLog.",
];

export function DataModel() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Modelo de Datos</h1>
          <p className="text-xs text-slate-500">Contratos base para pasar de UI mock a backend multi-tenant.</p>
        </div>
        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Fase 2 lista
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {totals.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{item.label}</div>
                  <div style={{ fontWeight: 600 }} className="text-2xl">{item.value}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-4">
        <Card className="p-0">
          <div className="px-5 py-3 border-b">
            <h2 style={{ fontWeight: 600 }} className="text-sm">Entidades principales</h2>
            <p className="text-xs text-slate-500">Cada entidad queda preparada para aislar datos por hospital y sucursal.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b bg-slate-50/50" style={{ fontWeight: 600 }}>
                  <th className="py-3 px-5">Entidad</th>
                  <th className="py-3 px-3">Alcance</th>
                  <th className="py-3 px-3">Responsable</th>
                  <th className="py-3 px-3">Campos clave</th>
                  <th className="py-3 px-5">Relaciones</th>
                </tr>
              </thead>
              <tbody>
                {dataModelEntities.map((entity) => (
                  <tr key={entity.name} className="border-b last:border-0 hover:bg-slate-50/50">
                    <td className="py-3 px-5">{entity.name}</td>
                    <td className="py-3 px-3">
                      <Badge variant="secondary">{entity.scope}</Badge>
                    </td>
                    <td className="py-3 px-3 text-slate-600">{entity.owner}</td>
                    <td className="py-3 px-3 text-slate-600">{entity.keyFields.join(", ")}</td>
                    <td className="py-3 px-5 text-slate-600">{entity.relations.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-violet-700" />
            <h2 style={{ fontWeight: 600 }} className="text-sm">Reglas del modelo</h2>
          </div>
          <div className="space-y-3">
            {rules.map((rule, index) => (
              <div key={rule} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                  {index + 1}
                </div>
                <p className="text-sm text-slate-600">{rule}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-slate-500">Cobertura fase 2</span>
              <span>100%</span>
            </div>
            <Progress value={100} className="bg-emerald-100 [&>div]:bg-emerald-600" />
          </div>
        </Card>
      </div>

      <Card className="p-0">
        <div className="px-5 py-3 border-b">
          <h2 style={{ fontWeight: 600 }} className="text-sm">Datos semilla</h2>
          <p className="text-xs text-slate-500">Estos mocks ya siguen el formato que deberia devolver la API.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {samples.map((sample) => (
            <div key={sample.name} className="p-5 border-b md:border-b-0 md:border-r last:border-r-0">
              <div className="text-xs text-slate-500">{sample.name}</div>
              <div style={{ fontWeight: 600 }} className="text-2xl mt-1">{sample.rows}</div>
              <div className="text-xs text-slate-500 mt-1">{sample.scope}</div>
              <Badge className="mt-3 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">{sample.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

import { Check, Copy, LockKeyhole, Plus, ShieldCheck, SlidersHorizontal, X } from "lucide-react";
import { Badge } from "../../shared/ui/badge";
import { Button } from "../../shared/ui/button";
import { Card } from "../../shared/ui/card";
import { Switch } from "../../shared/ui/switch";

const scopes = [
  { level: "Sistema", owner: "Super Admin Onix", desc: "Define planes, limites y hospitales." },
  { level: "Hospital", owner: "Administrador Hospital", desc: "Hereda permisos del plan y gobierna todas las sedes." },
  { level: "Sucursal", owner: "Administrador de Sede", desc: "Puede reducir permisos para su sede." },
  { level: "Area", owner: "Jefe de Area", desc: "Caja, recepcion, farmacia, laboratorio o enfermeria." },
  { level: "Usuario", owner: "Usuario Final", desc: "Excepciones puntuales por persona." },
];

const modules = [
  { name: "Pacientes", admin: true, doctor: true, cashier: false, reception: true },
  { name: "Historia clinica", admin: true, doctor: true, cashier: false, reception: false },
  { name: "Agenda y citas", admin: true, doctor: true, cashier: false, reception: true },
  { name: "Caja y pagos", admin: true, doctor: false, cashier: true, reception: false },
  { name: "Reportes financieros", admin: true, doctor: false, cashier: false, reception: false },
  { name: "Usuarios y permisos", admin: true, doctor: false, cashier: false, reception: false },
];

const roles = [
  { name: "Administrador Hospital", users: 8, scope: "Todas las sucursales", color: "bg-violet-100 text-violet-700" },
  { name: "Doctor", users: 64, scope: "Pacientes asignados", color: "bg-emerald-100 text-emerald-700" },
  { name: "Caja", users: 19, scope: "Sucursal asignada", color: "bg-sky-100 text-sky-700" },
  { name: "Recepcion", users: 31, scope: "Agenda y admision", color: "bg-amber-100 text-amber-700" },
];

function PermissionIcon({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 items-center justify-center">
      <Check className="w-4 h-4" />
    </span>
  ) : (
    <span className="inline-flex w-7 h-7 rounded-full bg-slate-100 text-slate-400 items-center justify-center">
      <X className="w-4 h-4" />
    </span>
  );
}

export function AccessControl() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Permisos en Cascada</h1>
          <p className="text-xs text-slate-500">Modelo visual para decidir que puede hacer cada rol, sede, area y usuario.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1.5"><Copy className="w-4 h-4" />Duplicar Rol</Button>
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nuevo Rol</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <LockKeyhole className="w-4 h-4 text-violet-700" />
            <h2 style={{ fontWeight: 600 }} className="text-sm">Jerarquia de permisos</h2>
          </div>
          <div className="space-y-3">
            {scopes.map((scope, index) => (
              <div key={scope.level} className="relative pl-8">
                {index < scopes.length - 1 && <span className="absolute left-[13px] top-8 h-[calc(100%-8px)] w-px bg-slate-200" />}
                <span className="absolute left-0 top-1 w-7 h-7 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs">
                  {index + 1}
                </span>
                <div className="rounded-md border p-3">
                  <div style={{ fontWeight: 600 }} className="text-sm">{scope.level}</div>
                  <div className="text-xs text-slate-500">{scope.owner}</div>
                  <div className="text-xs text-slate-500 mt-1">{scope.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-0">
          <div className="px-5 py-3 border-b flex items-center justify-between">
            <div>
              <h2 style={{ fontWeight: 600 }} className="text-sm">Matriz de permisos base</h2>
              <p className="text-xs text-slate-500">Esto representa permisos de lectura/escritura por modulo.</p>
            </div>
            <Button variant="outline" size="sm" className="gap-1.5"><SlidersHorizontal className="w-4 h-4" />Ajustes avanzados</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b bg-slate-50/50" style={{ fontWeight: 600 }}>
                  <th className="py-3 px-5">Modulo</th>
                  <th className="py-3 px-3 text-center">Admin</th>
                  <th className="py-3 px-3 text-center">Doctor</th>
                  <th className="py-3 px-3 text-center">Caja</th>
                  <th className="py-3 px-3 text-center">Recepcion</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module) => (
                  <tr key={module.name} className="border-b last:border-0 hover:bg-slate-50/50">
                    <td className="py-3 px-5">{module.name}</td>
                    <td className="py-3 px-3 text-center"><PermissionIcon value={module.admin} /></td>
                    <td className="py-3 px-3 text-center"><PermissionIcon value={module.doctor} /></td>
                    <td className="py-3 px-3 text-center"><PermissionIcon value={module.cashier} /></td>
                    <td className="py-3 px-3 text-center"><PermissionIcon value={module.reception} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        {roles.map((role) => (
          <Card key={role.name} className="p-4">
            <div className="flex items-start justify-between gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${role.color}`}>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <Switch defaultChecked />
            </div>
            <div className="mt-3">
              <div style={{ fontWeight: 600 }} className="text-sm">{role.name}</div>
              <div className="text-xs text-slate-500">{role.scope}</div>
            </div>
            <Badge variant="secondary" className="mt-3">{role.users} usuarios</Badge>
          </Card>
        ))}
      </div>
    </div>
  );
}

import {
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  MapPin,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Badge } from "../../shared/ui/badge";
import { Button } from "../../shared/ui/button";
import { Card } from "../../shared/ui/card";
import { Progress } from "../../shared/ui/progress";

const tenants = [
  { name: "Grupo Clinico Trustcare", plan: "Enterprise", status: "Activo", branches: 6, users: 184, usage: 74 },
  { name: "Hospital San Gabriel", plan: "Professional", status: "Implementacion", branches: 3, users: 68, usage: 42 },
  { name: "Centro Medico Andes", plan: "Clinic", status: "Activo", branches: 2, users: 39, usage: 58 },
];

const branches = [
  { name: "Casa Matriz Las Condes", code: "TRU-LC", city: "Santiago", areas: "Urgencia, Caja, Farmacia, Laboratorio", users: 72, default: true },
  { name: "Sucursal Providencia", code: "TRU-PV", city: "Santiago", areas: "Consultas, Imagenologia, Caja", users: 44 },
  { name: "Sucursal Vina del Mar", code: "TRU-VM", city: "Valparaiso", areas: "Consultas, Procedimientos, Bodega", users: 31 },
  { name: "Sucursal Online", code: "TRU-TM", city: "Telemedicina", areas: "Agenda, Video consulta, Pagos", users: 18 },
];

const setup = [
  "Crear hospital/tenant",
  "Definir sucursales",
  "Configurar areas clinicas",
  "Asignar usuarios por sede",
  "Activar reglas de permisos",
];

function statusBadge(status: string) {
  const className =
    status === "Activo"
      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
      : "bg-amber-100 text-amber-700 hover:bg-amber-100";
  return <Badge className={className}>{status}</Badge>;
}

export function Organizations() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
            <span>Administracion</span>
            <ChevronRight className="w-3 h-3" />
            <span>Hospitales y Sucursales</span>
          </div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Organizacion Multi-sucursal</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1.5"><ClipboardList className="w-4 h-4" />Plantilla de Sede</Button>
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nuevo Hospital</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {tenants.map((tenant) => (
          <Card key={tenant.name} className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div style={{ fontWeight: 600 }} className="text-sm">{tenant.name}</div>
                  <div className="text-xs text-slate-500">Plan {tenant.plan}</div>
                </div>
              </div>
              {statusBadge(tenant.status)}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="rounded-md bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Sucursales</div>
                <div style={{ fontWeight: 600 }} className="text-xl">{tenant.branches}</div>
              </div>
              <div className="rounded-md bg-slate-50 p-3">
                <div className="text-xs text-slate-500">Usuarios</div>
                <div style={{ fontWeight: 600 }} className="text-xl">{tenant.users}</div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Uso del plan</span>
                <span>{tenant.usage}%</span>
              </div>
              <Progress value={tenant.usage} className="bg-violet-100 [&>div]:bg-violet-600" />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-4">
        <Card className="p-0">
          <div className="px-5 py-3 border-b flex items-center justify-between">
            <div>
              <h2 style={{ fontWeight: 600 }} className="text-sm">Sucursales del Hospital Activo</h2>
              <p className="text-xs text-slate-500">Cada sede puede tener areas, cajas, bodegas y agendas propias.</p>
            </div>
            <Button size="sm" className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nueva Sucursal</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b bg-slate-50/50" style={{ fontWeight: 600 }}>
                  <th className="py-3 px-5">Sucursal</th>
                  <th className="py-3 px-3">Codigo</th>
                  <th className="py-3 px-3">Ciudad</th>
                  <th className="py-3 px-3">Areas</th>
                  <th className="py-3 px-3">Usuarios</th>
                  <th className="py-3 px-5"></th>
                </tr>
              </thead>
              <tbody>
                {branches.map((branch) => (
                  <tr key={branch.code} className="border-b last:border-0 hover:bg-slate-50/50">
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-violet-600" />
                        <span>{branch.name}</span>
                        {branch.default && <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-xs">Principal</span>}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-slate-600">{branch.code}</td>
                    <td className="py-3 px-3 text-slate-600">{branch.city}</td>
                    <td className="py-3 px-3 text-slate-600">{branch.areas}</td>
                    <td className="py-3 px-3">{branch.users}</td>
                    <td className="py-3 px-5"><MoreHorizontal className="w-4 h-4 text-slate-400" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-5">
          <h2 style={{ fontWeight: 600 }} className="text-sm mb-3">Configuracion base</h2>
          <div className="space-y-3">
            {setup.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm">{item}</div>
                  <div className="text-xs text-slate-500">Paso {index + 1} de 5</div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5">
            <div className="rounded-md bg-violet-50 p-3">
              <ShieldCheck className="w-4 h-4 text-violet-700 mb-2" />
              <div style={{ fontWeight: 600 }} className="text-lg">24</div>
              <div className="text-xs text-slate-500">Roles activos</div>
            </div>
            <div className="rounded-md bg-sky-50 p-3">
              <UsersRound className="w-4 h-4 text-sky-700 mb-2" />
              <div style={{ fontWeight: 600 }} className="text-lg">184</div>
              <div className="text-xs text-slate-500">Usuarios</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

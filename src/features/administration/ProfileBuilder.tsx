import { Check, ChevronRight, Copy, LockKeyhole, Plus, Save, ShieldCheck, UserCog } from "lucide-react";
import { Badge } from "../../shared/ui/badge";
import { Button } from "../../shared/ui/button";
import { Card } from "../../shared/ui/card";
import { Checkbox } from "../../shared/ui/checkbox";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/ui/select";
import { Switch } from "../../shared/ui/switch";

const profiles = [
  { name: "Administrador Hospital", scope: "Hospital completo", users: 8, locked: true },
  { name: "Administrador de Sucursal", scope: "Sucursal asignada", users: 12, locked: false },
  { name: "Doctor", scope: "Pacientes asignados", users: 64, locked: false },
  { name: "Caja", scope: "Caja y pagos", users: 19, locked: false },
  { name: "Recepcion", scope: "Agenda y admision", users: 31, locked: false },
  { name: "Farmacia", scope: "Inventario y despacho", users: 14, locked: false },
];

const permissions = [
  { module: "Pacientes", read: true, create: true, edit: true, approve: false, export: true },
  { module: "Agenda", read: true, create: true, edit: true, approve: false, export: false },
  { module: "Historia clinica", read: true, create: false, edit: false, approve: false, export: false },
  { module: "Caja", read: true, create: true, edit: true, approve: true, export: true },
  { module: "Inventario", read: true, create: false, edit: false, approve: false, export: false },
  { module: "Reportes", read: true, create: false, edit: false, approve: false, export: true },
];

const inheritance = [
  "Heredar limites del plan contratado",
  "Restringir a sucursal asignada",
  "Restringir a area operativa",
  "Permitir excepciones por usuario",
];

function PermissionCheck({ checked }: { checked: boolean }) {
  return (
    <div className="flex justify-center">
      <Checkbox checked={checked} />
    </div>
  );
}

export function ProfileBuilder() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
            <span>Administracion</span>
            <ChevronRight className="w-3 h-3" />
            <span>Constructor de Perfiles</span>
          </div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Creacion de Perfiles</h1>
          <p className="text-xs text-slate-500">Define roles reutilizables antes de asignarlos a usuarios, areas o sucursales.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-1.5"><Copy className="w-4 h-4" />Duplicar</Button>
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Save className="w-4 h-4" />Guardar Perfil</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-4">
        <Card className="p-0">
          <div className="px-5 py-3 border-b flex items-center justify-between">
            <h2 style={{ fontWeight: 600 }} className="text-sm">Perfiles existentes</h2>
            <Button size="icon" variant="outline"><Plus className="w-4 h-4" /></Button>
          </div>
          <div className="p-3 space-y-2">
            {profiles.map((profile, index) => (
              <button
                key={profile.name}
                className={`w-full text-left rounded-md border p-3 transition ${index === 3 ? "border-violet-300 bg-violet-50" : "hover:bg-slate-50"}`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center ${index === 3 ? "bg-violet-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    {profile.locked ? <LockKeyhole className="w-4 h-4" /> : <UserCog className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm truncate" style={{ fontWeight: 600 }}>{profile.name}</div>
                    <div className="text-xs text-slate-500 truncate">{profile.scope}</div>
                  </div>
                </div>
                <Badge variant="secondary" className="mt-2">{profile.users} usuarios</Badge>
              </button>
            ))}
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-4 h-4 text-violet-700" />
              <h2 style={{ fontWeight: 600 }} className="text-sm">Perfil: Caja</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-600">Nombre del perfil</Label>
                <Input defaultValue="Caja" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-600">Alcance</Label>
                <Select defaultValue="branch">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tenant">Hospital completo</SelectItem>
                    <SelectItem value="branch">Sucursal asignada</SelectItem>
                    <SelectItem value="area">Area asignada</SelectItem>
                    <SelectItem value="self">Solo usuario</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs text-slate-600">Area sugerida</Label>
                <Select defaultValue="cashier">
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cashier">Caja</SelectItem>
                    <SelectItem value="frontdesk">Recepcion</SelectItem>
                    <SelectItem value="medical">Consulta medica</SelectItem>
                    <SelectItem value="pharmacy">Farmacia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {inheritance.map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-md bg-slate-50 p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-emerald-600" />
                    {item}
                  </div>
                  <Switch defaultChecked={index < 3} />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-0">
            <div className="px-5 py-3 border-b">
              <h2 style={{ fontWeight: 600 }} className="text-sm">Permisos del perfil</h2>
              <p className="text-xs text-slate-500">La UI queda lista para conectar acciones reales por modulo.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b bg-slate-50/50" style={{ fontWeight: 600 }}>
                    <th className="py-3 px-5">Modulo</th>
                    <th className="py-3 px-3 text-center">Ver</th>
                    <th className="py-3 px-3 text-center">Crear</th>
                    <th className="py-3 px-3 text-center">Editar</th>
                    <th className="py-3 px-3 text-center">Aprobar</th>
                    <th className="py-3 px-3 text-center">Exportar</th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map((permission) => (
                    <tr key={permission.module} className="border-b last:border-0 hover:bg-slate-50/50">
                      <td className="py-3 px-5">{permission.module}</td>
                      <td className="py-3 px-3"><PermissionCheck checked={permission.read} /></td>
                      <td className="py-3 px-3"><PermissionCheck checked={permission.create} /></td>
                      <td className="py-3 px-3"><PermissionCheck checked={permission.edit} /></td>
                      <td className="py-3 px-3"><PermissionCheck checked={permission.approve} /></td>
                      <td className="py-3 px-3"><PermissionCheck checked={permission.export} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

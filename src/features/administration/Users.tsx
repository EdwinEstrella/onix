import { Filter, MoreHorizontal, Plus, Search, ShieldCheck, UserCog, UsersRound } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";
import { Badge } from "../../shared/ui/badge";
import { Button } from "../../shared/ui/button";
import { Card } from "../../shared/ui/card";
import { Input } from "../../shared/ui/input";

const users = [
  { name: "Mariana Fuentes", email: "mariana@trustcare.cl", role: "Administrador Hospital", branch: "Todas las sedes", area: "Direccion", status: "Activo", img: 32 },
  { name: "Carlos Rivas", email: "carlos@trustcare.cl", role: "Jefe de Caja", branch: "Las Condes", area: "Caja", status: "Activo", img: 12 },
  { name: "Dra. Paula Vidal", email: "paula@trustcare.cl", role: "Doctor", branch: "Providencia", area: "Cardiologia", status: "Activo", img: 44 },
  { name: "Andrea Torres", email: "andrea@trustcare.cl", role: "Recepcion", branch: "Vina del Mar", area: "Agenda", status: "Pendiente", img: 25 },
  { name: "Hector Silva", email: "hector@trustcare.cl", role: "Bodega", branch: "Las Condes", area: "Inventario", status: "Suspendido", img: 18 },
];

const roleSummary = [
  { label: "Administradores", value: 8, icon: ShieldCheck, color: "bg-violet-100 text-violet-700" },
  { label: "Doctores", value: 64, icon: UserCog, color: "bg-emerald-100 text-emerald-700" },
  { label: "Operativos", value: 112, icon: UsersRound, color: "bg-sky-100 text-sky-700" },
];

function statusBadge(status: string) {
  const map: Record<string, string> = {
    Activo: "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
    Pendiente: "bg-amber-100 text-amber-700 hover:bg-amber-100",
    Suspendido: "bg-rose-100 text-rose-700 hover:bg-rose-100",
  };
  return <Badge className={map[status]}>{status}</Badge>;
}

export function Users() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Usuarios y Perfiles</h1>
          <p className="text-xs text-slate-500">Alta de usuarios, asignacion por sucursal y perfil operativo.</p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nuevo Usuario</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roleSummary.map((item) => {
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

      <Card className="p-0">
        <div className="px-5 py-3 border-b flex items-center justify-between flex-wrap gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <Input placeholder="Buscar usuario, rol o sede" className="w-72 pl-9" />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1.5"><Filter className="w-4 h-4" />Filtrar</Button>
            <span className="text-xs text-slate-500">184 usuarios registrados</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b bg-slate-50/50" style={{ fontWeight: 600 }}>
                <th className="py-3 px-5">Usuario</th>
                <th className="py-3 px-3">Rol</th>
                <th className="py-3 px-3">Sucursal</th>
                <th className="py-3 px-3">Area</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} className="border-b last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-5">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-9 h-9">
                        <AvatarImage src={`https://i.pravatar.cc/36?img=${user.img}`} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div>{user.name}</div>
                        <div className="text-xs text-slate-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3">{user.role}</td>
                  <td className="py-3 px-3 text-slate-600">{user.branch}</td>
                  <td className="py-3 px-3 text-slate-600">{user.area}</td>
                  <td className="py-3 px-3">{statusBadge(user.status)}</td>
                  <td className="py-3 px-5"><MoreHorizontal className="w-4 h-4 text-slate-400" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

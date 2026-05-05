import { Download, Play, ChevronLeft, ChevronRight, X, Users, UserPlus, BookMarked, UserCheck, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";

const stats = [
  { label: "Pacientes Totales", value: "1,240", trend: "5.62% vs mes anterior", up: true, color: "bg-violet-600", icon: Users },
  { label: "Pacientes Nuevos", value: "210", trend: "11.4% vs mes anterior", up: true, color: "bg-emerald-500", icon: UserPlus },
  { label: "Citas Reservadas", value: "500", trend: "8.52% vs mes anterior", up: true, color: "bg-amber-500", icon: BookMarked },
  { label: "Pacientes Recurrentes", value: "380", trend: "7.45% vs mes anterior", up: false, color: "bg-rose-500", icon: UserCheck },
];

const rows = [
  { patient: "Alberto Ripley", age: "26/Masculino", phone: "+1 43554 54584", email: "james@example.com", doc: "Dr. Mick Thompson", loc: "California", visit: "30 Abr 2026", status: "Disponible" },
  { patient: "Susan Babin", age: "21/Femenino", phone: "+1 47554 54585", email: "emily@example.com", doc: "Dr. Sarah Johnson", loc: "Texas", visit: "15 Abr 2026", status: "No Disponible" },
  { patient: "Carol Lam", age: "28/Masculino", phone: "+1 54114 54586", email: "robert@example.com", doc: "Dra. Emily Carter", loc: "Florida", visit: "02 Abr 2026", status: "Disponible" },
  { patient: "Marsha Noland", age: "25/Femenino", phone: "+1 51247 54587", email: "sophia@example.com", doc: "Dr. David Lee", loc: "Nueva York", visit: "27 Mar 2026", status: "No Disponible" },
  { patient: "Irma Armstrong", age: "32/Masculino", phone: "+1 41452 54588", email: "daniel@example.com", doc: "Dra. Anna Kim", loc: "Illinois", visit: "12 Mar 2026", status: "Disponible" },
  { patient: "Jesus Adams", age: "27/Femenino", phone: "+1 51425 54589", email: "olivia@example.com", doc: "Dr. John Smith", loc: "Ohio", visit: "05 Mar 2026", status: "No Disponible" },
  { patient: "Ezra Belcher", age: "28/Masculino", phone: "+1 42565 54590", email: "michael@example.com", doc: "Dra. Lisa White", loc: "Georgia", visit: "24 Feb 2026", status: "Disponible" },
  { patient: "Glen Lentz", age: "22/Femenino", phone: "+1 51425 54589", email: "isabella@example.com", doc: "Dra. Patricia Brown", loc: "Carolina del Norte", visit: "16 Feb 2026", status: "No Disponible" },
  { patient: "Bernard Griffith", age: "34/Masculino", phone: "+1 45214 54591", email: "trade@example.com", doc: "Dra. Rachel Green", loc: "Pensilvania", visit: "01 Feb 2026", status: "Disponible" },
  { patient: "John Elsass", age: "23/Femenino", phone: "+1 41245 54592", email: "ava@example.com", doc: "Dr. Michael Smith", loc: "Washington", visit: "25 Ene 2026", status: "No Disponible" },
];

function chip(text: string) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-xs">
      {text}<X className="w-3 h-3" />
    </span>
  );
}

function statusBadge(s: string) {
  return (
    <span className={`px-2 py-0.5 rounded-md text-xs ${s === "Disponible" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>{s}</span>
  );
}

export function PatientReport() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Reporte de Pacientes</h1>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label} className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                  <div className="text-lg mt-1" style={{ fontWeight: 600 }}>{s.value}</div>
                </div>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${s.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className={`flex items-center gap-1 mt-2 text-xs ${s.up ? "text-emerald-600" : "text-rose-600"}`}>
                {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {s.trend}
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-5 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label className="text-xs text-slate-600">Fecha</Label>
            <Input placeholder="dd/mm/aaaa - dd/mm/aaaa" />
          </div>
          <div>
            <Label className="text-xs text-slate-600">Paciente</Label>
            <Input placeholder="Seleccionar" />
          </div>
          <div>
            <Label className="text-xs text-slate-600">Sede</Label>
            <Input placeholder="Seleccionar" />
          </div>
          <div>
            <Label className="text-xs text-slate-600">Practicante</Label>
            <Input placeholder="Seleccionar" />
          </div>
          <div>
            <Label className="text-xs text-slate-600">Cargo</Label>
            <Input placeholder="Seleccionar" />
          </div>
          <div>
            <Label className="text-xs text-slate-600">Estado</Label>
            <div className="border rounded-md px-2 py-2 flex flex-wrap gap-1 min-h-9">
              {chip("Pendiente")}{chip("Completa")}
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-slate-900 hover:bg-slate-800 gap-1.5"><Play className="w-3.5 h-3.5" fill="white" />Ejecutar Reporte</Button>
        </div>
      </Card>

      <Card className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b bg-slate-50/50" style={{ fontWeight: 600 }}>
                <th className="py-3 px-5">Paciente</th>
                <th className="py-3 px-3">Edad/Género</th>
                <th className="py-3 px-3">Información de Contacto</th>
                <th className="py-3 px-3">Practicante</th>
                <th className="py-3 px-3">Sede</th>
                <th className="py-3 px-3">Última Visita</th>
                <th className="py-3 px-5">Estado</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3 px-5">{r.patient}</td>
                  <td className="py-3 px-3 text-slate-600">{r.age}</td>
                  <td className="py-3 px-3 text-xs">
                    <div>{r.phone}</div>
                    <div className="text-violet-600">{r.email}</div>
                  </td>
                  <td className="py-3 px-3">{r.doc}</td>
                  <td className="py-3 px-3 text-slate-600">{r.loc}</td>
                  <td className="py-3 px-3 text-slate-600">{r.visit}</td>
                  <td className="py-3 px-5">{statusBadge(r.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-3 border-t">
          <div className="text-xs text-slate-500">Mostrar 10 Resultados</div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded-md border flex items-center justify-center"><ChevronLeft className="w-3.5 h-3.5" /></button>
            {[1, 2, 3].map((p) => (
              <button key={p} className={`w-7 h-7 rounded-md text-xs ${p === 2 ? "bg-violet-600 text-white" : "border hover:bg-slate-100"}`}>{p}</button>
            ))}
            <span className="px-1 text-xs text-slate-500">...</span>
            <button className="w-7 h-7 rounded-md border text-xs">12</button>
            <button className="w-7 h-7 rounded-md border flex items-center justify-center"><ChevronRight className="w-3.5 h-3.5" /></button>
          </div>
        </div>
      </Card>
    </div>
  );
}


import { Download, Play, ChevronLeft, ChevronRight, X, Calendar as CalIcon, CheckCircle2, XCircle, RotateCw } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";

const stats = [
  { label: "Citas Totales", value: "850", trend: "+10%", color: "bg-violet-100 text-violet-700", icon: CalIcon, bars: "bg-violet-500" },
  { label: "Completadas", value: "720", trend: "+11.5%", color: "bg-emerald-100 text-emerald-700", icon: CheckCircle2, bars: "bg-emerald-500" },
  { label: "Canceladas", value: "65", trend: "+8.43%", color: "bg-amber-100 text-amber-700", icon: XCircle, bars: "bg-amber-500" },
  { label: "Reagendadas", value: "40", trend: "+6.58%", color: "bg-rose-100 text-rose-700", icon: RotateCw, bars: "bg-rose-500" },
];

const rows = [
  { patient: "Alberto Ripley", date: "27 May 2026 - 09:30 AM", invoice: "#INV0020", doc: "Dr. Mick Thompson", loc: "California", status: "Atendido" },
  { patient: "Susan Babin", date: "27 May 2026 - 09:30 AM", invoice: "#INV0019", doc: "Dr. Sarah Johnson", loc: "Texas", status: "Confirmada" },
  { patient: "Carol Lam", date: "27 May 2026 - 10:00 AM", invoice: "#INV0018", doc: "Dra. Emily Carter", loc: "Nueva York", status: "Cancelada" },
  { patient: "Marsha Noland", date: "28 May 2026 - 10:00 AM", invoice: "#INV0017", doc: "Dr. David Lee", loc: "Florida", status: "Programada" },
  { patient: "Irma Armstrong", date: "28 May 2026 - 10:30 AM", invoice: "#INV0016", doc: "Dra. Anna Kim", loc: "Illinois", status: "Confirmada" },
  { patient: "Jesus Adams", date: "28 May 2026 - 11:15 AM", invoice: "#INV0015", doc: "Dr. John Smith", loc: "Pensilvania", status: "Confirmada" },
  { patient: "Ezra Belcher", date: "29 May 2026 - 11:30 AM", invoice: "#INV0014", doc: "Dra. Lisa White", loc: "Ohio", status: "Cancelada" },
  { patient: "Glen Lentz", date: "30 May 2026 - 09:30 AM", invoice: "#INV0013", doc: "Dra. Patricia Brown", loc: "Georgia", status: "Confirmada" },
  { patient: "Bernard Griffith", date: "30 May 2026 - 10:00 AM", invoice: "#INV0012", doc: "Dra. Rachel Green", loc: "Carolina del Norte", status: "Atendido" },
  { patient: "John Elsass", date: "30 May 2026 - 11:00 AM", invoice: "#INV0011", doc: "Dr. Michael Smith", loc: "Michigan", status: "Programada" },
];

function chip(text: string) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-xs">
      {text}<X className="w-3 h-3" />
    </span>
  );
}

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Atendido: "bg-sky-100 text-sky-700",
    Confirmada: "bg-emerald-100 text-emerald-700",
    Cancelada: "bg-rose-100 text-rose-700",
    Programada: "bg-amber-100 text-amber-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s] ?? "bg-slate-100"}`}>{s}</span>;
}

function MiniBars({ color }: { color: string }) {
  return (
    <div className="flex items-end gap-0.5 h-8">
      {[5, 8, 6, 12, 9, 14, 11, 18, 16, 22].map((h, i) => (
        <span key={i} className={`w-1 rounded-sm ${color}`} style={{ height: h }} />
      ))}
    </div>
  );
}

export function AppointmentReport() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Reporte de Citas</h1>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label} className="p-4">
              <div className="flex items-start justify-between">
                <div className={`w-9 h-9 rounded-md flex items-center justify-center ${s.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs text-emerald-600">{s.trend} ↗</span>
              </div>
              <div className="text-xs text-slate-500 mt-2">{s.label}</div>
              <div className="flex items-end justify-between mt-1">
                <div className="text-lg" style={{ fontWeight: 600 }}>{s.value}</div>
                <MiniBars color={s.bars} />
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
                <th className="py-3 px-3">Fecha y Hora</th>
                <th className="py-3 px-3">ID Factura</th>
                <th className="py-3 px-3">Practicante</th>
                <th className="py-3 px-3">Sede</th>
                <th className="py-3 px-5">Estado</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3 px-5">{r.patient}</td>
                  <td className="py-3 px-3 text-slate-600">{r.date}</td>
                  <td className="py-3 px-3 text-slate-600">{r.invoice}</td>
                  <td className="py-3 px-3">{r.doc}</td>
                  <td className="py-3 px-3 text-slate-600">{r.loc}</td>
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




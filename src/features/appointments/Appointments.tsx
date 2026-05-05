import { Filter, Plus, Calendar as CalIcon, Download, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";
import { Badge } from "../../shared/ui/badge";

const rows = [
  { date: "30 Abr 2026 - 09:30 AM", patient: "Alberto Ripley", pid: 11, doc: "Dr. Mick Thompson", spec: "Cardiólogo", dimg: 11, mode: "Presencial", status: "Atendido" },
  { date: "15 Abr 2026 - 11:30 AM", patient: "Susan Babin", pid: 22, doc: "Dr. Sarah Johnson", spec: "Cirujano Ortopédico", dimg: 12, mode: "En Línea", status: "Atendido" },
  { date: "07 Abr 2026 - 08:15 AM", patient: "Carol Lam", pid: 23, doc: "Dra. Emily Carter", spec: "Pediatra", dimg: 13, mode: "Presencial", status: "Cancelada" },
  { date: "27 Mar 2026 - 02:00 PM", patient: "Marsha Noland", pid: 24, doc: "Dr. David Lee", spec: "Ginecólogo", dimg: 14, mode: "En Línea", status: "Programada" },
  { date: "12 Mar 2026 - 05:40 PM", patient: "Irma Armstrong", pid: 25, doc: "Dra. Anna Kim", spec: "Psiquiatra", dimg: 19, mode: "En Línea", status: "Confirmada" },
  { date: "05 Mar 2026 - 11:15 AM", patient: "Jesus Adams", pid: 12, doc: "Dr. John Smith", spec: "Neurocirujano", dimg: 15, mode: "En Línea", status: "Confirmada" },
  { date: "24 Feb 2026 - 09:20 AM", patient: "Ezra Belcher", pid: 13, doc: "Dra. Lisa White", spec: "Oncóloga", dimg: 26, mode: "Presencial", status: "Cancelada" },
  { date: "16 Feb 2026 - 01:00 PM", patient: "Glen Lentz", pid: 14, doc: "Dra. Patricia Brown", spec: "Pulmonóloga", dimg: 27, mode: "En Línea", status: "Atendido" },
  { date: "11 Feb 2026 - 04:00 PM", patient: "Bernard Griffith", pid: 15, doc: "Dr. Rachel Green", spec: "Uróloga", dimg: 28, mode: "En Línea", status: "Atendido" },
  { date: "23 Ene 2026 - 03:10 PM", patient: "John Elsass", pid: 16, doc: "Dr. Michael Smith", spec: "Cardiólogo", dimg: 16, mode: "En Línea", status: "Programada" },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Atendido: "bg-emerald-100 text-emerald-700",
    Confirmada: "bg-sky-100 text-sky-700",
    Cancelada: "bg-rose-100 text-rose-700",
    Programada: "bg-amber-100 text-amber-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s] ?? "bg-slate-100"}`}>{s}</span>;
}

export function Appointments({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Citas</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
          <Button onClick={onAdd} className="bg-violet-600 hover:bg-violet-700 gap-1.5">
            <Plus className="w-4 h-4" />Nueva Cita
          </Button>
        </div>
      </div>

      <Card className="p-0">
        <div className="px-5 py-3 border-b flex items-center justify-between flex-wrap gap-2">
          <Input placeholder="Buscar" className="w-64" />
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="gap-1.5"><CalIcon className="w-3.5 h-3.5" />27 May 2026 - 02 Jun 2026</Badge>
            <Button variant="outline" size="sm" className="gap-1.5"><Filter className="w-4 h-4" />Filtrar</Button>
            <span className="text-xs text-slate-500">Ordenar por: Recientes</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-left border-b bg-slate-50/50">
                <th className="py-3 px-5">Fecha y Hora</th>
                <th className="py-3 px-3">Paciente</th>
                <th className="py-3 px-3">Doctor</th>
                <th className="py-3 px-3">Modalidad</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-5 text-slate-600">{r.date}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${r.pid}`} /><AvatarFallback>{r.patient[0]}</AvatarFallback></Avatar>
                      <span>{r.patient}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${r.dimg}`} /><AvatarFallback>D</AvatarFallback></Avatar>
                      <div>
                        <div>{r.doc}</div>
                        <div className="text-xs text-slate-500">{r.spec}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-3">{r.mode}</td>
                  <td className="py-3 px-3">{statusBadge(r.status)}</td>
                  <td className="py-3 px-5"><MoreHorizontal className="w-4 h-4 text-slate-400" /></td>
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




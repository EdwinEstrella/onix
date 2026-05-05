import { Filter, Plus, Download, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const rows = [
  { name: "Consulta General", amount: "$800", date: "30 Abr 2026", from: "James Carter", img: 12, method: "PayPal", status: "Recibido" },
  { name: "Análisis de Sangre", amount: "$930", date: "15 Abr 2026", from: "Emily Johnson", img: 22, method: "Tarjeta Débito", status: "Pendiente" },
  { name: "Resonancia Magnética", amount: "$850", date: "02 Abr 2026", from: "Robert Mitchell", img: 13, method: "Cheque", status: "Recibido" },
  { name: "Tomografía", amount: "$700", date: "27 Mar 2026", from: "Sophia Miller", img: 23, method: "Tarjeta Débito", status: "Recibido" },
  { name: "Panel de Alergias", amount: "$650", date: "12 Mar 2026", from: "Daniel Anderson", img: 14, method: "PayPal", status: "Pendiente" },
  { name: "PET Scan", amount: "$430", date: "05 Mar 2026", from: "Olivia Davis", img: 24, method: "Cheque", status: "Recibido" },
  { name: "Examen Ortopédico", amount: "$300", date: "24 Feb 2026", from: "Michael Thompson", img: 15, method: "Tarjeta Débito", status: "Recibido" },
  { name: "Prueba de Tiroides", amount: "$450", date: "16 Feb 2026", from: "Isabella Wilson", img: 25, method: "Cheque", status: "Pendiente" },
  { name: "Consulta Otorrino", amount: "$570", date: "01 Feb 2026", from: "Michael Trade", img: 16, method: "Tarjeta Débito", status: "Recibido" },
  { name: "Cirugía de Cataratas", amount: "$800", date: "25 Ene 2026", from: "Ava Robinson", img: 26, method: "PayPal", status: "Recibido" },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Recibido: "bg-emerald-100 text-emerald-700",
    Pendiente: "bg-amber-100 text-amber-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s]}`}>{s}</span>;
}

function Pager() {
  return (
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
  );
}

export function Income() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h1 style={{ fontWeight: 600 }} className="text-xl">Ingresos</h1>
          <span className="px-2 py-1 rounded-md bg-violet-50 text-violet-700 text-xs">Total Ingresos : 565</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nuevo Ingreso</Button>
        </div>
      </div>

      <Card className="p-0">
        <div className="px-5 py-3 border-b flex items-center justify-between">
          <Input placeholder="Buscar" className="w-64" />
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1.5"><Filter className="w-4 h-4" />Filtrar</Button>
            <span className="text-xs text-slate-500">Ordenar por: Recientes</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b bg-slate-50/50" style={{ fontWeight: 600 }}>
                <th className="py-3 px-5">Nombre Ingreso</th>
                <th className="py-3 px-3">Monto</th>
                <th className="py-3 px-3">Fecha</th>
                <th className="py-3 px-3">Recibido De</th>
                <th className="py-3 px-3">Método de Pago</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-5">{r.name}</td>
                  <td className="py-3 px-3">{r.amount}</td>
                  <td className="py-3 px-3 text-slate-600">{r.date}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${r.img}`} /><AvatarFallback>{r.from[0]}</AvatarFallback></Avatar>
                      <span>{r.from}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-600">{r.method}</td>
                  <td className="py-3 px-3">{statusBadge(r.status)}</td>
                  <td className="py-3 px-5"><MoreHorizontal className="w-4 h-4 text-slate-400" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pager />
      </Card>
    </div>
  );
}


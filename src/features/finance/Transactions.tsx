import { Filter, Download, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const rows = [
  { id: "#TNX0025", patient: "James Carter", img: 12, desc: "Consulta General", date: "30 Abr 2026", method: "PayPal", amount: "$200", status: "Completado" },
  { id: "#TNX0024", patient: "Emily Johnson", img: 22, desc: "Limpieza Dental", date: "15 Abr 2026", method: "Tarjeta Débito", amount: "$180", status: "Pendiente" },
  { id: "#TNX0023", patient: "Robert Mitchell", img: 13, desc: "Examen Visual", date: "02 Abr 2026", method: "Cheque", amount: "$150", status: "Completado" },
  { id: "#TNX0022", patient: "Sophia Miller", img: 23, desc: "Rayos X", date: "27 Mar 2026", method: "Tarjeta Débito", amount: "$80", status: "Completado" },
  { id: "#TNX0021", patient: "Daniel Anderson", img: 14, desc: "Sesión de Fisioterapia", date: "12 Mar 2026", method: "PayPal", amount: "$130", status: "Completado" },
  { id: "#TNX0020", patient: "Olivia Davis", img: 24, desc: "Tamizaje Cardíaco", date: "05 Mar 2026", method: "Cheque", amount: "$300", status: "Completado" },
  { id: "#TNX0019", patient: "Michael Thompson", img: 15, desc: "Prueba Alergias Cutáneas", date: "24 Feb 2026", method: "Tarjeta Débito", amount: "$220", status: "Pendiente" },
  { id: "#TNX0018", patient: "Isabella Wilson", img: 25, desc: "Análisis de Sangre", date: "16 Feb 2026", method: "Cheque", amount: "$150", status: "Completado" },
  { id: "#TNX0017", patient: "Michael Trade", img: 16, desc: "Consulta Otorrino", date: "01 Feb 2026", method: "Tarjeta Débito", amount: "$230", status: "Completado" },
  { id: "#TNX0016", patient: "Ava Robinson", img: 26, desc: "Asesoría Nutricional", date: "25 Ene 2026", method: "PayPal", amount: "$250", status: "Completado" },
];

function statusBadge(s: string) {
  return <span className={`px-2 py-0.5 rounded-md text-xs ${s === "Completado" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>{s}</span>;
}

export function Transactions() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h1 style={{ fontWeight: 600 }} className="text-xl">Transacciones</h1>
          <span className="px-2 py-1 rounded-md bg-violet-50 text-violet-700 text-xs">Total Transacciones : 565</span>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
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
                <th className="py-3 px-5">ID Transacción</th>
                <th className="py-3 px-3">Paciente</th>
                <th className="py-3 px-3">Descripción</th>
                <th className="py-3 px-3">Fecha de Pago</th>
                <th className="py-3 px-3">Método de Pago</th>
                <th className="py-3 px-3">Monto</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-5 text-slate-600">{r.id}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${r.img}`} /><AvatarFallback>{r.patient[0]}</AvatarFallback></Avatar>
                      <span>{r.patient}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">{r.desc}</td>
                  <td className="py-3 px-3 text-slate-600">{r.date}</td>
                  <td className="py-3 px-3 text-slate-600">{r.method}</td>
                  <td className="py-3 px-3">{r.amount}</td>
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


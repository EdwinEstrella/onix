import { Filter, Plus, Download, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const rows = [
  { id: "#INV0025", patient: "James Carter", img: 12, created: "30 Abr 2026", due: "30 Abr 2026", amount: "$800", status: "Pagado" },
  { id: "#INV0024", patient: "Emily Johnson", img: 22, created: "15 Abr 2026", due: "15 Abr 2026", amount: "$930", status: "Pago Parcial" },
  { id: "#INV0023", patient: "Robert Mitchell", img: 13, created: "02 Abr 2026", due: "02 Abr 2026", amount: "$850", status: "No Pagado" },
  { id: "#INV0022", patient: "Sophia Miller", img: 23, created: "27 Mar 2026", due: "27 Mar 2026", amount: "$700", status: "Pagado" },
  { id: "#INV0021", patient: "Daniel Anderson", img: 14, created: "12 Mar 2026", due: "12 Mar 2026", amount: "$650", status: "Pago Parcial" },
  { id: "#INV0020", patient: "Olivia Davis", img: 24, created: "05 Mar 2026", due: "05 Mar 2026", amount: "$430", status: "No Pagado" },
  { id: "#INV0019", patient: "Michael Thompson", img: 15, created: "24 Feb 2026", due: "24 Feb 2026", amount: "$300", status: "Pagado" },
  { id: "#INV0018", patient: "Isabella Wilson", img: 25, created: "16 Feb 2026", due: "16 Feb 2026", amount: "$450", status: "No Pagado" },
  { id: "#INV0017", patient: "Michael Trade", img: 16, created: "01 Feb 2026", due: "01 Feb 2026", amount: "$570", status: "Pagado" },
  { id: "#INV0016", patient: "Ava Robinson", img: 26, created: "25 Ene 2026", due: "25 Ene 2026", amount: "$800", status: "No Pagado" },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Pagado: "bg-emerald-100 text-emerald-700",
    "Pago Parcial": "bg-amber-100 text-amber-700",
    "No Pagado": "bg-rose-100 text-rose-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s]}`}>{s}</span>;
}

export function Invoices({
  onAdd,
  onSelect,
}: {
  onAdd: () => void;
  onSelect: () => void;
}) {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h1 style={{ fontWeight: 600 }} className="text-xl">Facturas</h1>
          <span className="px-2 py-1 rounded-md bg-violet-50 text-violet-700 text-xs">Total Facturas : 565</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
          <Button onClick={onAdd} className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nueva Factura</Button>
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
                <th className="py-3 px-5">ID Factura</th>
                <th className="py-3 px-3">Paciente</th>
                <th className="py-3 px-3">Fecha de Creación</th>
                <th className="py-3 px-3">Fecha de Vencimiento</th>
                <th className="py-3 px-3">Monto</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} onClick={onSelect} className="border-b last:border-0 hover:bg-slate-50/50 cursor-pointer">
                  <td className="py-3 px-5 text-slate-600">{r.id}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${r.img}`} /><AvatarFallback>{r.patient[0]}</AvatarFallback></Avatar>
                      <span>{r.patient}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3 text-slate-600">{r.created}</td>
                  <td className="py-3 px-3 text-slate-600">{r.due}</td>
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


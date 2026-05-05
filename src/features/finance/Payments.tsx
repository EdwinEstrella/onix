import { Filter, Plus, Download, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const rows = [
  { id: "#INV0025", patient: "James Carter", pimg: 12, doc: "Dr. Mick Thompson", spec: "Cardiólogo", dimg: 11, date: "30 Abr 2026", amount: "$800", method: "PayPal", status: "Pagado" },
  { id: "#INV0024", patient: "Emily Johnson", pimg: 22, doc: "Dra. Sarah Johnson", spec: "Cirujano Ortopédico", dimg: 12, date: "15 Abr 2026", amount: "$930", method: "Tarjeta Débito", status: "Pago Parcial" },
  { id: "#INV0023", patient: "Robert Mitchell", pimg: 13, doc: "Dra. Emily Carter", spec: "Pediatra", dimg: 13, date: "02 Abr 2026", amount: "$850", method: "Cheque", status: "No Pagado" },
  { id: "#INV0022", patient: "Sophia Miller", pimg: 23, doc: "Dr. David Lee", spec: "Ginecólogo", dimg: 14, date: "27 Mar 2026", amount: "$700", method: "Tarjeta Débito", status: "Pagado" },
  { id: "#INV0021", patient: "Daniel Anderson", pimg: 14, doc: "Dr. Anna Kim", spec: "Psiquiatra", dimg: 19, date: "12 Mar 2026", amount: "$650", method: "PayPal", status: "Pago Parcial" },
  { id: "#INV0020", patient: "Olivia Davis", pimg: 24, doc: "Dr. John Smith", spec: "Neurocirujano", dimg: 15, date: "05 Mar 2026", amount: "$430", method: "Cheque", status: "No Pagado" },
  { id: "#INV0019", patient: "Michael Thompson", pimg: 15, doc: "Dra. Lisa White", spec: "Oncóloga", dimg: 26, date: "24 Feb 2026", amount: "$300", method: "Tarjeta Débito", status: "Pagado" },
  { id: "#INV0018", patient: "Isabella Wilson", pimg: 25, doc: "Dra. Patricia Brown", spec: "Pulmonóloga", dimg: 27, date: "16 Feb 2026", amount: "$450", method: "Cheque", status: "No Pagado" },
  { id: "#INV0017", patient: "Michael Trade", pimg: 16, doc: "Dra. Rachel Green", spec: "Uróloga", dimg: 28, date: "01 Feb 2026", amount: "$570", method: "Tarjeta Débito", status: "Pagado" },
  { id: "#INV0016", patient: "Ava Robinson", pimg: 26, doc: "Dr. Michael Smith", spec: "Cardiólogo", dimg: 16, date: "25 Ene 2026", amount: "$800", method: "PayPal", status: "No Pagado" },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Pagado: "bg-emerald-100 text-emerald-700",
    "Pago Parcial": "bg-amber-100 text-amber-700",
    "No Pagado": "bg-rose-100 text-rose-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s]}`}>{s}</span>;
}

export function Payments() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h1 style={{ fontWeight: 600 }} className="text-xl">Pagos</h1>
          <span className="px-2 py-1 rounded-md bg-violet-50 text-violet-700 text-xs">Total Pagos : 565</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nuevo Pago</Button>
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
                <th className="py-3 px-3">Doctor</th>
                <th className="py-3 px-3">Fecha de Pago</th>
                <th className="py-3 px-3">Monto</th>
                <th className="py-3 px-3">Método de Pago</th>
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
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${r.pimg}`} /><AvatarFallback>{r.patient[0]}</AvatarFallback></Avatar>
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
                  <td className="py-3 px-3 text-slate-600">{r.date}</td>
                  <td className="py-3 px-3">{r.amount}</td>
                  <td className="py-3 px-3 text-slate-600">{r.method}</td>
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


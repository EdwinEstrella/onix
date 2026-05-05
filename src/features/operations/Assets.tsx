import { Filter, Plus, Download, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const assets = [
  { id: "#AST001", user: "James Adair", img: 11, asset: "Monitor VitalScan", date: "30 Mar 2026", warr: "3 Años", end: "30 Mar 2029", amount: "$2587", status: "Aprobado" },
  { id: "#AST002", user: "Adam Milne", img: 12, asset: "MediScope", date: "28 Mar 2026", warr: "10 Años", end: "28 Mar 2036", amount: "$47810", status: "Aprobado" },
  { id: "#AST003", user: "Richard Clark", img: 13, asset: "ThermoTrack", date: "20 Mar 2026", warr: "1 Año", end: "20 Mar 2027", amount: "$54789", status: "Pendiente" },
  { id: "#AST004", user: "Robert Reid", img: 14, asset: "InjecSure", date: "15 Mar 2026", warr: "3 Años", end: "15 Mar 2029", amount: "$21770", status: "Pendiente" },
  { id: "#AST005", user: "Dottie Jeny", img: 22, asset: "LabMate", date: "07 Mar 2026", warr: "5 Años", end: "07 Mar 2031", amount: "$32580", status: "Aprobado" },
  { id: "#AST006", user: "Cheryl Bilodeau", img: 23, asset: "MicroView", date: "27 Feb 2026", warr: "Hasta 5 Años", end: "27 Feb 2029", amount: "$32574", status: "Devuelto" },
  { id: "#AST007", user: "Valerie Padgett", img: 24, asset: "First Aid Hub", date: "20 Feb 2026", warr: "2 Años", end: "20 Feb 2028", amount: "$54100", status: "Devuelto" },
  { id: "#AST008", user: "Diane Nash", img: 25, asset: "MediCart", date: "12 Feb 2026", warr: "10 Años", end: "12 Feb 2039", amount: "$24780", status: "Aprobado" },
  { id: "#AST009", user: "Sally Cavazos", img: 26, asset: "SterilBox", date: "21 Ene 2026", warr: "1 Año", end: "21 Ene 2027", amount: "$12011", status: "Aprobado" },
  { id: "#AST010", user: "Forest Heath", img: 15, asset: "MediLogix", date: "17 Ene 2026", warr: "2 Años", end: "17 Ene 2028", amount: "$35421", status: "Pendiente" },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Aprobado: "bg-emerald-100 text-emerald-700",
    Pendiente: "bg-rose-100 text-rose-700",
    Devuelto: "bg-amber-100 text-amber-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s] ?? "bg-slate-100"}`}>{s}</span>;
}

export function Assets() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h1 style={{ fontWeight: 600 }} className="text-xl">Activos</h1>
          <span className="px-2 py-1 rounded-md bg-violet-50 text-violet-700 text-xs">Lista de Activos : 565</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Añadir Activo</Button>
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
                <th className="py-3 px-5">ID Activo</th>
                <th className="py-3 px-3">Usuario</th>
                <th className="py-3 px-3">Activo</th>
                <th className="py-3 px-3">Fecha de Compra</th>
                <th className="py-3 px-3">Garantía</th>
                <th className="py-3 px-3">Fin de Garantía</th>
                <th className="py-3 px-3">Monto</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody>
              {assets.map((a) => (
                <tr key={a.id} className="border-b last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-5 text-slate-600">{a.id}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${a.img}`} /><AvatarFallback>{a.user[0]}</AvatarFallback></Avatar>
                      <span>{a.user}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">{a.asset}</td>
                  <td className="py-3 px-3 text-slate-600">{a.date}</td>
                  <td className="py-3 px-3 text-slate-600">{a.warr}</td>
                  <td className="py-3 px-3 text-slate-600">{a.end}</td>
                  <td className="py-3 px-3">{a.amount}</td>
                  <td className="py-3 px-3">{statusBadge(a.status)}</td>
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




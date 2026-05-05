import { Download, DollarSign, Stethoscope, Users, Home, ArrowUpRight, ArrowDownRight, Play, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";

const stats = [
  { label: "Gastos Totales", value: "$13,500", trend: "5.62% vs mes anterior", up: true, color: "bg-violet-100 text-violet-700", icon: DollarSign },
  { label: "Pagos a Doctores", value: "$4,500", trend: "11.4% vs mes anterior", up: true, color: "bg-emerald-100 text-emerald-700", icon: Stethoscope },
  { label: "Salarios del Personal", value: "$3,200", trend: "8.52% vs mes anterior", up: true, color: "bg-amber-100 text-amber-700", icon: Users },
  { label: "Servicios y Renta", value: "$2,000", trend: "7.45% vs mes anterior", up: false, color: "bg-rose-100 text-rose-700", icon: Home },
];

const rows = [
  { item: "Guantes y Mascarillas", cat: "Insumos Médicos", amount: "$800", date: "30 Abr 2026", buyer: "James Allaire", status: "Aprobado", method: "PayPal" },
  { item: "Partes de Microscopio", cat: "Laboratorio", amount: "$930", date: "15 Abr 2026", buyer: "Esther Schmidt", status: "Pendiente", method: "Tarjeta Débito" },
  { item: "Termómetros", cat: "Insumos Médicos", amount: "$850", date: "02 Abr 2026", buyer: "Judi Lenahan", status: "Aprobado", method: "Cheque" },
  { item: "Insumos Desinfectantes", cat: "Servicios de Limpieza", amount: "$700", date: "27 Mar 2026", buyer: "Robert Reid", status: "Rechazado", method: "Tarjeta Débito" },
  { item: "Equipo IV", cat: "Insumos Médicos", amount: "$650", date: "12 Mar 2026", buyer: "Dottie Sellers", status: "Nuevo", method: "PayPal" },
  { item: "Recarga de Reactivo", cat: "Laboratorio", amount: "$430", date: "05 Mar 2026", buyer: "Cheryl Bilodeau", status: "Rechazado", method: "Cheque" },
  { item: "Jeringas y Gasa", cat: "Insumos Médicos", amount: "$300", date: "24 Feb 2026", buyer: "Valerie Padgett", status: "Nuevo", method: "Tarjeta Débito" },
  { item: "Tubos para Sangre", cat: "Laboratorio", amount: "$450", date: "16 Feb 2026", buyer: "Diane Nash", status: "Aprobado", method: "Cheque" },
  { item: "Vendajes y Cintas", cat: "Insumos Médicos", amount: "$570", date: "01 Feb 2026", buyer: "Sally Cavazos", status: "Nuevo", method: "Tarjeta Débito" },
  { item: "Portaobjetos", cat: "Laboratorio", amount: "$800", date: "25 Ene 2026", buyer: "Forest Heath", status: "Aprobado", method: "PayPal" },
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
    Aprobado: "bg-emerald-100 text-emerald-700",
    Pendiente: "bg-amber-100 text-amber-700",
    Rechazado: "bg-rose-100 text-rose-700",
    Nuevo: "bg-violet-100 text-violet-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s]}`}>{s}</span>;
}

export function ExpenseReport() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Reporte de Gastos</h1>
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
                <div className={`w-9 h-9 rounded-md rotate-45 flex items-center justify-center ${s.color}`}>
                  <Icon className="w-4 h-4 -rotate-45" />
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-xs text-slate-600">Fecha</Label>
            <Input placeholder="dd/mm/aaaa - dd/mm/aaaa" />
          </div>
          <div>
            <Label className="text-xs text-slate-600">Categoría</Label>
            <Input placeholder="Seleccionar" />
          </div>
          <div>
            <Label className="text-xs text-slate-600">Comprado Por</Label>
            <Input placeholder="Seleccionar" />
          </div>
          <div>
            <Label className="text-xs text-slate-600">Estado</Label>
            <div className="border rounded-md px-2 py-2 flex flex-wrap gap-1 min-h-9">
              {chip("Pendiente")}{chip("Aprobado")}
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
                <th className="py-3 px-5">Gasto</th>
                <th className="py-3 px-3">Categoría</th>
                <th className="py-3 px-3">Monto</th>
                <th className="py-3 px-3">Fecha</th>
                <th className="py-3 px-3">Comprado Por</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-5">Método de Pago</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3 px-5">{r.item}</td>
                  <td className="py-3 px-3 text-slate-600">{r.cat}</td>
                  <td className="py-3 px-3">{r.amount}</td>
                  <td className="py-3 px-3 text-slate-600">{r.date}</td>
                  <td className="py-3 px-3">{r.buyer}</td>
                  <td className="py-3 px-3">{statusBadge(r.status)}</td>
                  <td className="py-3 px-5 text-slate-600">{r.method}</td>
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


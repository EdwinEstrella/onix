import { Download, TrendingUp, Wallet, DollarSign, Percent, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";

const stats = [
  { label: "Ingresos Totales", value: "$125,150", trend: "5.62% vs mes anterior", up: true, color: "bg-violet-600", icon: TrendingUp },
  { label: "Gastos Totales", value: "$91,800", trend: "11.4% vs mes anterior", up: true, color: "bg-emerald-500", icon: Wallet },
  { label: "Beneficio Neto", value: "$91,800", trend: "8.52% vs mes anterior", up: true, color: "bg-amber-500", icon: DollarSign },
  { label: "Margen de Beneficio (%)", value: "26.6%", trend: "7.45% vs mes anterior", up: false, color: "bg-rose-500", icon: Percent },
];

const incomeRows = [
  ["Honorarios de Consulta", "$25,750", "$25,750", "$25,750", "$25,750", "$25,750", "$25,750"],
  ["Ingresos de Laboratorio", "$50,125", "$50,125", "$50,125", "$50,125", "$50,125", "$50,125"],
  ["Ventas de Farmacia", "$75,900", "$75,900", "$75,900", "$75,900", "$75,900", "$75,900"],
];

const expenseRows = [
  ["Pagos a Doctores", "$25,750", "$25,750", "$25,750", "$25,750", "$25,750", "$25,750"],
  ["Salarios del Personal", "$50,125", "$50,125", "$50,125", "$50,125", "$50,125", "$50,125"],
  ["Renta y Servicios", "$75,900", "$75,900", "$75,900", "$75,900", "$75,900", "$87,650"],
  ["Insumos Médicos", "$15,000", "$15,000", "$15,000", "$15,000", "$15,000", "$15,000"],
  ["Consumibles de Lab.", "$18,200", "$18,200", "$18,200", "$18,200", "$18,200", "$18,200"],
  ["Mantenimiento y Reparación", "$75,900", "$20,800", "$20,800", "$20,800", "$20,800", "$20,800"],
];

const months = ["Ene 2026", "Feb 2026", "Mar 2026", "Abr 2026", "May 2026", "Total"];

export function ProfitLossReport() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Reporte de Pérdidas y Ganancias</h1>
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

      <Card className="p-0 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b bg-slate-50/50" style={{ fontWeight: 600 }}>
              <th className="py-3 px-5"></th>
              {months.map((m) => (
                <th key={m} className="py-3 px-3">{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-5" style={{ fontWeight: 600 }}>Ingresos</td>
              {months.map((m) => <td key={m}></td>)}
            </tr>
            {incomeRows.map((r, i) => (
              <tr key={`in-${i}`} className="border-b">
                <td className="py-3 px-5 text-slate-600">{r[0]}</td>
                {r.slice(1, 6).map((v, k) => <td key={k} className="py-3 px-3 text-slate-600">{v}</td>)}
                <td className="py-3 px-3" style={{ fontWeight: 600 }}>{r[6]}</td>
              </tr>
            ))}
            <tr className="border-b bg-slate-50/40">
              <td className="py-3 px-5" style={{ fontWeight: 600 }}>Beneficio Bruto</td>
              {Array.from({ length: 6 }).map((_, i) => (
                <td key={i} className="py-3 px-3" style={{ fontWeight: 600 }}>$151,775</td>
              ))}
            </tr>
            <tr className="border-b">
              <td className="py-3 px-5" style={{ fontWeight: 600 }}>Gastos</td>
              {months.map((m) => <td key={m}></td>)}
            </tr>
            {expenseRows.map((r, i) => (
              <tr key={`ex-${i}`} className="border-b">
                <td className="py-3 px-5 text-slate-600">{r[0]}</td>
                {r.slice(1, 6).map((v, k) => <td key={k} className="py-3 px-3 text-slate-600">{v}</td>)}
                <td className="py-3 px-3" style={{ fontWeight: 600 }}>{r[6]}</td>
              </tr>
            ))}
            <tr className="border-b bg-slate-50/40">
              <td className="py-3 px-5" style={{ fontWeight: 600 }}>Gasto Total</td>
              {Array.from({ length: 5 }).map((_, i) => (
                <td key={i} className="py-3 px-3" style={{ fontWeight: 600 }}>$99,999</td>
              ))}
              <td className="py-3 px-3" style={{ fontWeight: 600 }}>$151,775</td>
            </tr>
            <tr>
              <td className="py-3 px-5" style={{ fontWeight: 600 }}>Ingreso Neto</td>
              {["$2,69,276", "$2,75,638", "$2,51,629", "$7,96,543", "$2,69,826", "$2,75,638"].map((v, i) => (
                <td key={i} className="py-3 px-3" style={{ fontWeight: 600 }}>{v}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}


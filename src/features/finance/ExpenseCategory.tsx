import { Plus, MoreHorizontal } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";

const cats = [
  { name: "Insumos Médicos", status: "Activo" },
  { name: "Laboratorio", status: "Activo" },
  { name: "Servicios de Limpieza", status: "Activo" },
  { name: "Salario", status: "Inactivo" },
  { name: "Servicios Públicos", status: "Inactivo" },
];

function statusBadge(s: string) {
  return (
    <span className={`px-2 py-0.5 rounded-md text-xs ${s === "Activo" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>{s}</span>
  );
}

export function ExpenseCategory() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Categoría de Gasto</h1>
        <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Añadir Categoría</Button>
      </div>

      <Card className="p-0">
        <div className="grid grid-cols-[1fr_1fr_60px] px-5 py-3 border-b text-sm" style={{ fontWeight: 600 }}>
          <span>Categoría</span>
          <span>Estado</span>
          <span></span>
        </div>
        {cats.map((c, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_60px] px-5 py-3 border-b last:border-0 items-center hover:bg-slate-50/50">
            <span className="text-sm">{c.name}</span>
            <span>{statusBadge(c.status)}</span>
            <button className="w-8 h-8 rounded-md hover:bg-slate-100 flex items-center justify-center justify-self-end">
              <MoreHorizontal className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        ))}
      </Card>
    </div>
  );
}


import { Filter, Plus, Download, MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";

const services = [
  { name: "Consulta General", dept: "Medicina General", price: "$200", status: "Activo" },
  { name: "Limpieza Dental", dept: "Odontología", price: "$180", status: "Activo" },
  { name: "Examen Visual", dept: "Oftalmología", price: "$150", status: "Activo" },
  { name: "Rayos X", dept: "Radiología", price: "$80", status: "Inactivo" },
  { name: "Sesión de Fisioterapia", dept: "Fisioterapia", price: "$130", status: "Activo" },
  { name: "Tamizaje Cardíaco", dept: "Cardiología", price: "$300", status: "Activo" },
  { name: "Prueba Alergias Cutáneas", dept: "Dermatología", price: "$220", status: "Activo" },
  { name: "Análisis de Sangre", dept: "Patología", price: "$150", status: "Activo" },
  { name: "Consulta Otorrino", dept: "Otorrinolaringología", price: "$230", status: "Inactivo" },
  { name: "Asesoría Nutricional", dept: "Nutrición", price: "$250", status: "Activo" },
];

function statusBadge(s: string) {
  return (
    <span className={`px-2 py-0.5 rounded-md text-xs ${s === "Activo" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>{s}</span>
  );
}

export function Services() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h1 style={{ fontWeight: 600 }} className="text-xl">Servicios</h1>
          <span className="px-2 py-1 rounded-md bg-violet-50 text-violet-700 text-xs">Total Servicios : 565</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Download className="w-4 h-4" />Exportar</Button>
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nuevo Servicio</Button>
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
                <th className="py-3 px-5">Nombre del Servicio</th>
                <th className="py-3 px-3">Departamento</th>
                <th className="py-3 px-3">Precio</th>
                <th className="py-3 px-3">Estado</th>
                <th className="py-3 px-5"></th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-slate-50/50">
                  <td className="py-3 px-5">{s.name}</td>
                  <td className="py-3 px-3 text-slate-600">{s.dept}</td>
                  <td className="py-3 px-3">{s.price}</td>
                  <td className="py-3 px-3">{statusBadge(s.status)}</td>
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


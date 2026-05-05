import { Plus, MoreHorizontal, Building2 } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";

const locs = [
  { name: "Clínica Harmony Health", addr: "California", color: "bg-emerald-100 text-emerald-700", default: true },
  { name: "Centro Médico WellCare", addr: "Texas", color: "bg-violet-100 text-violet-700" },
  { name: "Clínica VitalLife", addr: "Florida", color: "bg-indigo-100 text-indigo-700" },
  { name: "BrightPath Family Clinic", addr: "Nueva York", color: "bg-slate-100 text-slate-700" },
  { name: "Clínica Médica Greeny", addr: "Illinois", color: "bg-teal-100 text-teal-700" },
  { name: "CureWell Medical Hub", addr: "Ohio", color: "bg-amber-100 text-amber-700" },
  { name: "NovaCare Medical", addr: "Washington", color: "bg-sky-100 text-sky-700" },
];

export function Locations() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Sedes</h1>
        <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nueva Sede</Button>
      </div>

      <Card className="p-0">
        <div className="grid grid-cols-[1fr_1fr_60px] px-5 py-3 border-b text-sm" style={{ fontWeight: 600 }}>
          <span>Nombre de la Clínica</span>
          <span>Dirección</span>
          <span></span>
        </div>
        {locs.map((l, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_60px] px-5 py-3 border-b last:border-0 items-center hover:bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-md flex items-center justify-center ${l.color}`}>
                <Building2 className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm" style={{ fontWeight: 600 }}>{l.name}</span>
                {l.default && <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-xs">Por defecto</span>}
              </div>
            </div>
            <span className="text-sm text-slate-600">{l.addr}</span>
            <button className="w-8 h-8 rounded-md hover:bg-slate-100 flex items-center justify-center justify-self-end">
              <MoreHorizontal className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        ))}
      </Card>
    </div>
  );
}


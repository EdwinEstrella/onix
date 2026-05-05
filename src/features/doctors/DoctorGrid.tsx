import { ChevronRight, Filter, Plus, MapPin, Star, Mail, Phone, ArrowDownUp } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Badge } from "../../shared/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const doctors = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  name: [
    "Dr. Mick Thompson", "Dr. Sarah Johnson", "Dr. David Lee", "Dr. Emily Carter",
    "Dr. Lisa Murray", "Dr. Patricia Brown", "Dr. Rachel Green", "Dr. Adrian Marshall",
    "Dr. Michael Smith", "Dr. John Smith", "Dr. Anna Kim", "Dr. Hugh Sinclair",
    "Dr. Connie Webb", "Dr. Olivia Lawerence", "Dr. James Roberts", "Dr. Esther Holland",
  ][i],
  spec: ["Cardiólogo","Neuróloga","Ortopedista","Pediatra","Dermatóloga","Odontóloga"][i % 6],
  loc: "Las Vegas, NV",
  img: 11 + i,
  rating: (4 + Math.random()).toFixed(1),
  status: i % 5 === 0 ? "Ocupado" : "Disponible",
}));

export function DoctorGrid({ onSelect, onAdd }: { onSelect: () => void; onAdd: () => void }) {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
            <span>Doctores</span>
            <ChevronRight className="w-3 h-3" />
            <span>Cuadrícula de Doctores</span>
          </div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Cuadrícula de Doctores</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Filter className="w-4 h-4" />Filtros</Button>
          <Button variant="outline" size="sm" className="gap-1.5"><ArrowDownUp className="w-4 h-4" />Ordenar</Button>
          <Button onClick={onAdd} className="bg-violet-600 hover:bg-violet-700 gap-1.5">
            <Plus className="w-4 h-4" />Nuevo Doctor
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {doctors.map((d) => (
          <Card key={d.id} onClick={onSelect} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
            <div className="aspect-square bg-gradient-to-br from-violet-100 to-sky-100 relative">
              <Avatar className="w-full h-full rounded-none">
                <AvatarImage src={`https://i.pravatar.cc/300?img=${d.img}`} className="object-cover" />
                <AvatarFallback className="rounded-none text-3xl">{d.name[3]}</AvatarFallback>
              </Avatar>
              <Badge
                className={`absolute top-2 right-2 ${
                  d.status === "Disponible"
                    ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                    : "bg-rose-100 text-rose-700 hover:bg-rose-100"
                }`}
              >
                {d.status}
              </Badge>
            </div>
            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div style={{ fontWeight: 600 }} className="text-sm">{d.name}</div>
                  <div className="text-xs text-slate-500">{d.spec}</div>
                </div>
                <div className="flex items-center gap-0.5 text-xs">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{d.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <MapPin className="w-3 h-3" />
                {d.loc}
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                <button className="text-slate-400 hover:text-violet-600"><Mail className="w-4 h-4" /></button>
                <button className="text-slate-400 hover:text-violet-600"><Phone className="w-4 h-4" /></button>
                <Button size="sm" variant="outline" className="text-xs h-7">Ver Perfil</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline">Cargar Más</Button>
      </div>
    </div>
  );
}


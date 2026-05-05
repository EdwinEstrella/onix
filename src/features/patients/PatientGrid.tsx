import { ChevronRight, Filter, Plus, MapPin, Calendar, MoreHorizontal, ArrowDownUp, LayoutGrid, List } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const patients = [
  { name: "Alberto Ripley", age: 28, gender: "Masculino", img: 11, date: "Lun, 30 Abr 2026", loc: "Hudson Avenue, New York, USA" },
  { name: "Susan Babin", age: 25, gender: "Femenino", img: 22, date: "Mié, 19 Abr 2026", loc: "Lakeview Drive, Chicago, USA" },
  { name: "Carol Lam", age: 30, gender: "Femenino", img: 23, date: "Mar, 04 Abr 2026", loc: "Ocean Avenue, Miami, USA" },
  { name: "Marsha Noland", age: 35, gender: "Femenino", img: 24, date: "Jue, 27 Mar 2026", loc: "Elm Road, Austin, USA" },
  { name: "Irma Armstrong", age: 32, gender: "Femenino", img: 25, date: "Mié, 19 Mar 2026", loc: "Elm Road, Austin, USA" },
  { name: "Jesus Adams", age: 40, gender: "Masculino", img: 12, date: "Vie, 15 Mar 2026", loc: "Maple Street, San Francisco, USA" },
  { name: "Ezra Belcher", age: 29, gender: "Masculino", img: 13, date: "Sáb, 23 Feb 2026", loc: "Pine Valley, Seattle, USA" },
  { name: "Glen Lentz", age: 45, gender: "Masculino", img: 14, date: "Sáb, 18 Feb 2026", loc: "Pine Valley, Seattle, USA" },
  { name: "Bernard Griffith", age: 34, gender: "Masculino", img: 15, date: "Mar, 31 Ene 2026", loc: "River Walk, Houston, USA" },
  { name: "John Elsass", age: 50, gender: "Masculino", img: 16, date: "Lun, 25 Ene 2026", loc: "Forest Hill, Denver, USA" },
  { name: "Martin Lisa", age: 38, gender: "Femenino", img: 26, date: "Jue, 21 Ene 2026", loc: "Garden Circle, Orlando, USA" },
  { name: "Ava Mitchell", age: 27, gender: "Femenino", img: 27, date: "Lun, 12 Ene 2026", loc: "Crystal Court, Atlanta, USA" },
  { name: "Noah Davis", age: 33, gender: "Masculino", img: 17, date: "Mié, 18 Ene 2026", loc: "Oakwood Drive, Las Vegas, USA" },
  { name: "Emily Ross", age: 29, gender: "Femenino", img: 28, date: "Vie, 10 Ene 2026", loc: "Hilltop Lane, Dallas, USA" },
  { name: "Ryan Anderson", age: 36, gender: "Masculino", img: 18, date: "Mar, 06 Ene 2026", loc: "Hilltop Lane, Dallas, USA" },
];

export function PatientGrid({
  onSelect,
  onAdd,
}: {
  onSelect: () => void;
  onAdd: () => void;
}) {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <div className="flex items-center gap-1 text-xs text-slate-500 mb-1">
            <span>Pacientes</span>
            <ChevronRight className="w-3 h-3" />
            <span>Cuadrícula</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 style={{ fontWeight: 600 }} className="text-xl">Cuadrícula de Pacientes</h1>
            <span className="px-2 py-1 rounded-md bg-violet-50 text-violet-700 text-xs">Total Pacientes : 565</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5"><Filter className="w-4 h-4" />Filtros</Button>
          <Button variant="outline" size="sm" className="gap-1.5"><ArrowDownUp className="w-4 h-4" />Ordenar</Button>
          <div className="flex border rounded-md">
            <button className="p-2 hover:bg-slate-100"><List className="w-4 h-4" /></button>
            <button className="p-2 bg-violet-50 text-violet-700"><LayoutGrid className="w-4 h-4" /></button>
          </div>
          <Button onClick={onAdd} className="bg-violet-600 hover:bg-violet-700 gap-1.5">
            <Plus className="w-4 h-4" />Nuevo Paciente
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((p) => (
          <Card key={p.name} onClick={onSelect} className="p-4 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={`https://i.pravatar.cc/48?img=${p.img}`} />
                <AvatarFallback>{p.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div style={{ fontWeight: 600 }} className="text-sm truncate">{p.name}</div>
                <div className="text-xs text-slate-500">{p.age}, {p.gender}</div>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 space-y-1.5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-violet-500" />
                <span>Última Cita: {p.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-500" />
                <span>{p.loc}</span>
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


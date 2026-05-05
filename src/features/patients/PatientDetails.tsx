import {
  ChevronRight,
  Phone,
  Calendar as CalIcon,
  Heart,
  Activity,
  Wind,
  Thermometer,
  Droplet,
  Mail,
  User,
  CalendarDays,
  Filter,
  MoreHorizontal,
  ChevronLeft as ChevL,
  ChevronRight as ChevR,
} from "lucide-react";
import { useState } from "react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";
import { Badge } from "../../shared/ui/badge";

const aboutItems = [
  { icon: CalendarDays, label: "Fecha de Nacimiento", value: "25 Ene 1990" },
  { icon: Droplet, label: "Tipo de Sangre", value: "10.5/6.7 mmHg" },
  { icon: User, label: "Género", value: "Masculino" },
  { icon: Mail, label: "Correo", value: "alberto@example.com" },
];

const vitals = [
  { icon: Heart, label: "Presión Arterial", value: "100/67 mmHg", color: "bg-rose-100 text-rose-700" },
  { icon: Activity, label: "Frecuencia Cardíaca", value: "89 BPM", color: "bg-violet-100 text-violet-700" },
  { icon: Wind, label: "SPO2", value: "98 %", color: "bg-sky-100 text-sky-700" },
  { icon: Thermometer, label: "Temperatura", value: "101 °C", color: "bg-amber-100 text-amber-700" },
  { icon: Activity, label: "Frecuencia Respiratoria", value: "24 rpm", color: "bg-emerald-100 text-emerald-700" },
  { icon: Activity, label: "Peso", value: "160 kg", color: "bg-orange-100 text-orange-700" },
];

const appointments = [
  { date: "30 Abr 2026 - 09:30 AM", doc: "Dr. Mick Thompson", spec: "Cardiólogo", img: 11, mode: "Presencial", status: "Atendido" },
  { date: "15 Abr 2026 - 11:30 AM", doc: "Dr. Sarah Johnson", spec: "Cirujano Ortopédico", img: 12, mode: "En Línea", status: "Cancelada" },
  { date: "07 Abr 2026 - 02:30 PM", doc: "Dra. Emily Carter", spec: "Pediatra", img: 13, mode: "En Línea", status: "Cancelada" },
  { date: "27 Mar 2026 - 02:00 PM", doc: "Dr. David Lee", spec: "Ginecólogo", img: 14, mode: "En Línea", status: "Programada" },
  { date: "12 Mar 2026 - 05:40 PM", doc: "Dra. Anna Kim", spec: "Psiquiatra", img: 19, mode: "En Línea", status: "Confirmada" },
  { date: "05 Mar 2026 - 11:15 AM", doc: "Dr. John Smith", spec: "Neurocirujano", img: 15, mode: "En Línea", status: "Confirmada" },
  { date: "24 Feb 2026 - 09:20 AM", doc: "Dra. Lisa White", spec: "Oncóloga", img: 26, mode: "Presencial", status: "Cancelada" },
  { date: "16 Feb 2026 - 01:00 PM", doc: "Dra. Patricia Brown", spec: "Pulmonóloga", img: 27, mode: "En Línea", status: "Atendido" },
  { date: "11 Feb 2026 - 04:00 PM", doc: "Dra. Rachel Green", spec: "Uróloga", img: 28, mode: "En Línea", status: "Atendido" },
  { date: "23 Ene 2026 - 03:10 PM", doc: "Dr. Michael Smith", spec: "Cardiólogo", img: 16, mode: "En Línea", status: "Programada" },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Atendido: "bg-emerald-100 text-emerald-700",
    Confirmada: "bg-sky-100 text-sky-700",
    Cancelada: "bg-rose-100 text-rose-700",
    Programada: "bg-amber-100 text-amber-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s] ?? "bg-slate-100"}`}>{s}</span>;
}

export function PatientDetails({ onBack }: { onBack: () => void }) {
  const [tab, setTab] = useState<"appts" | "tx">("appts");
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center gap-1 text-xs text-slate-500">
        <button onClick={onBack} className="hover:text-violet-600">Pacientes</button>
        <ChevronRight className="w-3 h-3" />
        <span>Detalles del Paciente</span>
      </div>

      {/* Header card */}
      <Card className="p-5">
        <div className="flex items-start gap-4 flex-wrap">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://i.pravatar.cc/120?img=11" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-[240px]">
            <div className="text-xs text-slate-500">#PT0025</div>
            <h2 style={{ fontWeight: 600 }} className="text-lg mt-1">Alberto Ripley</h2>
            <div className="text-xs text-slate-500 mt-0.5">4150 Hilway Road, Las Vegas, NV 89109</div>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-600">
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +1 54546 45648</span>
              <span className="flex items-center gap-1"><CalIcon className="w-3.5 h-3.5" /> Última visita: 30 Abr 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button className="w-9 h-9 rounded-md border hover:bg-slate-50 flex items-center justify-center"><Phone className="w-4 h-4" /></button>
            <button className="w-9 h-9 rounded-md border hover:bg-slate-50 flex items-center justify-center"><Mail className="w-4 h-4" /></button>
            <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><CalIcon className="w-4 h-4" />Reservar Cita</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-5">
          <h3 style={{ fontWeight: 600 }} className="mb-3">Acerca de</h3>
          <div className="grid grid-cols-2 gap-3">
            {aboutItems.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-md bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{it.label}</div>
                    <div className="text-sm">{it.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-5">
          <h3 style={{ fontWeight: 600 }} className="mb-3">Signos Vitales</h3>
          <div className="grid grid-cols-2 gap-3">
            {vitals.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.label} className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${v.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{v.label}</div>
                    <div style={{ fontWeight: 600 }} className="text-sm">{v.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card className="p-0">
        <div className="flex items-center justify-between border-b px-5">
          <div className="flex">
            {[
              { id: "appts" as const, label: "Citas" },
              { id: "tx" as const, label: "Transacciones" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 py-3 text-sm border-b-2 -mb-px ${
                  tab === t.id
                    ? "border-violet-600 text-violet-700"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 py-3">
            <Badge variant="secondary" className="gap-1.5"><CalIcon className="w-3.5 h-3.5" />27 May 2026 - 02 Jun 2026</Badge>
            <Button variant="outline" size="sm" className="gap-1.5"><Filter className="w-4 h-4" />Filtrar</Button>
          </div>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-500 text-left border-b">
                  <th className="py-2 pr-3">Fecha y Hora</th>
                  <th className="py-2 pr-3">Doctor</th>
                  <th className="py-2 pr-3">Modalidad</th>
                  <th className="py-2 pr-3">Estado</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-3 pr-3 text-slate-600">{a.date}</td>
                    <td className="py-3 pr-3">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={`https://i.pravatar.cc/32?img=${a.img}`} />
                          <AvatarFallback>{a.doc[3]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div>{a.doc}</div>
                          <div className="text-xs text-slate-500">{a.spec}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 pr-3">{a.mode}</td>
                    <td className="py-3 pr-3">{statusBadge(a.status)}</td>
                    <td className="py-3"><MoreHorizontal className="w-4 h-4 text-slate-400" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-slate-500">Mostrando 10 resultados</div>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded-md border flex items-center justify-center"><ChevL className="w-3.5 h-3.5" /></button>
              {[1, 2, 3, 4].map((p) => (
                <button
                  key={p}
                  className={`w-7 h-7 rounded-md text-xs ${
                    p === 2 ? "bg-violet-600 text-white" : "border hover:bg-slate-100"
                  }`}
                >
                  {p}
                </button>
              ))}
              <span className="px-1 text-xs text-slate-500">...</span>
              <button className="w-7 h-7 rounded-md border text-xs">12</button>
              <button className="w-7 h-7 rounded-md border flex items-center justify-center"><ChevR className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}


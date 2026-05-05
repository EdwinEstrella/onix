import { Plus, Calendar, Heart, Activity, Droplet, Thermometer, Wind, MoreHorizontal } from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip,
  BarChart, Bar, CartesianGrid, Legend
} from "recharts";
import { Card } from "../../shared/ui/card";
import { Badge } from "../../shared/ui/badge";
import { Button } from "../../shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const stats = [
  { name: "Total de Citas", value: "24", color: "bg-violet-100 text-violet-700", icon: Calendar },
  { name: "Total de Consultas", value: "36", color: "bg-orange-100 text-orange-700", icon: Activity },
  { name: "Presión Arterial", value: "89/3", color: "bg-rose-100 text-rose-700", icon: Heart, hasChart: true },
  { name: "Frecuencia Cardíaca", value: "87 bpm", color: "bg-emerald-100 text-emerald-700", icon: Activity, hasChart: true },
];

const heartData = Array.from({ length: 12 }, (_, i) => ({ name: `p${i}`, x: i, y: 60 + Math.round(Math.random() * 40) }));

const myDoctors = [
  { name: "Dr. Mick Thompson", spec: "Cardiólogo", img: 11, badge: "16 Reservas" },
  { name: "Dr. Sarah Johnson", spec: "Cirujano Ortopédico", img: 12, badge: "20 Reservas" },
  { name: "Dr. Emily Carter", spec: "Pediatra", img: 13, badge: "12 Reservas" },
  { name: "Dr. David Lee", spec: "Dermatólogo", img: 14, badge: "08 Reservas" },
  { name: "Dr. Anna Kim", spec: "Ginecóloga", img: 19, badge: "06 Reservas" },
];

const prescriptions = [
  { name: "Prescripción Cardiología", date: "12 Feb 2025" },
  { name: "Prescripción Odontología", date: "18 Feb 2025" },
  { name: "Prescripción Cardiología", date: "12 Feb 2025" },
  { name: "Prescripción Odontología", date: "18 Feb 2025" },
];

const recentActivity = [
  { title: "Cita con", desc: "Médico de Atención Primaria", time: "10 Apr 2025, 09:30 AM", color: "bg-violet-100 text-violet-700", icon: Calendar },
  { title: "Control de Presión Arterial", desc: "Monitoreo de hipertensión", time: "08 Apr 2025, 02:00 PM", color: "bg-rose-100 text-rose-700", icon: Heart },
  { title: "Sesión de Fisioterapia", desc: "Rehabilitación de rodilla", time: "05 Apr 2025, 11:00 AM", color: "bg-emerald-100 text-emerald-700", icon: Activity },
  { title: "Cambios dietéticos", desc: "para controlar el azúcar en sangre", time: "02 Apr 2025, 10:00 AM", color: "bg-amber-100 text-amber-700", icon: Droplet },
];

const vitals = [
  { name: "Peso", value: "72 kg", icon: Activity, color: "bg-violet-100 text-violet-700" },
  { name: "Altura", value: "154 cm", icon: Activity, color: "bg-sky-100 text-sky-700" },
  { name: "BMI", value: "21", icon: Activity, color: "bg-emerald-100 text-emerald-700" },
  { name: "Pulso", value: "97", icon: Heart, color: "bg-rose-100 text-rose-700" },
  { name: "SPO2", value: "98%", icon: Wind, color: "bg-amber-100 text-amber-700" },
  { name: "Temperatura", value: "101°", icon: Thermometer, color: "bg-orange-100 text-orange-700" },
];

const consultationByDept = [
  { name: "Cardiología", value: 80 },
  { name: "Neurología", value: 65 },
  { name: "Ortopedia", value: 55 },
  { name: "Pediatría", value: 45 },
  { name: "Odontología", value: 40 },
  { name: "Psiquiatría", value: 30 },
];

const recentTx = [
  { name: "Dr. John Smith", img: 11, amt: "$300", status: "Exitoso" },
  { name: "Dr. Lisa Murray", img: 12, amt: "$500", status: "Exitoso" },
  { name: "Dr. Patricia Brown", img: 13, amt: "$450", status: "Fallido" },
  { name: "Dr. Rachel Green", img: 14, amt: "$520", status: "Exitoso" },
  { name: "Dr. Michael Smith", img: 15, amt: "$650", status: "Exitoso" },
];

const recentAppts = [
  { name: "Dr. Mick Thompson", spec: "Cardiólogo", img: 11, date: "27 May 2025 - 09:30 AM", fee: "$400", mode: "En Línea", status: "Atendido" },
  { name: "Dr. Sarah Johnson", spec: "Cirujano Ortopédico", img: 12, date: "27 May 2025 - 10:00 AM", fee: "$370", mode: "En Línea", status: "Confirmada" },
  { name: "Dr. Emily Carter", spec: "Pediatra", img: 13, date: "26 May 2025 - 02:45 PM", fee: "$320", mode: "Presencial", status: "Confirmada" },
  { name: "Dr. David Lee", spec: "Dermatólogo", img: 14, date: "26 May 2025 - 12:30 PM", fee: "$310", mode: "En Línea", status: "Cancelada" },
  { name: "Dr. Anna Kim", spec: "Psiquiatra", img: 19, date: "25 May 2025 - 04:15 PM", fee: "$400", mode: "Presencial", status: "Confirmada" },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    "Atendido": "bg-emerald-100 text-emerald-700",
    Confirmada: "bg-sky-100 text-sky-700",
    Cancelada: "bg-rose-100 text-rose-700",
    Exitoso: "bg-emerald-100 text-emerald-700",
    Fallido: "bg-rose-100 text-rose-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s]}`}>{s}</span>;
}

export function PatientDashboard() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Panel del Paciente</h1>
        <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nueva Cita</Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.name} className="p-4 flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.color}`}><Icon className="w-5 h-5" /></div>
              <div className="flex-1">
                <div className="text-xs text-slate-500">{s.name}</div>
                <div style={{ fontWeight: 600 }} className="text-xl">{s.value}</div>
              </div>
              {s.hasChart && (
                <div className="w-16 h-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={heartData}>
                      <Area dataKey="y" stroke="#ef4444" fill="#fecaca" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Mis Doctores</h3>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>
          <ul className="space-y-3">
            {myDoctors.map((d) => (
              <li key={d.name} className="flex items-center gap-3">
                <Avatar className="w-9 h-9"><AvatarImage src={`https://i.pravatar.cc/36?img=${d.img}`} /><AvatarFallback>{d.name[3]}</AvatarFallback></Avatar>
                <div className="flex-1">
                  <div className="text-sm">{d.name}</div>
                  <div className="text-xs text-slate-500">{d.spec}</div>
                </div>
                <Badge className="bg-violet-50 text-violet-700 hover:bg-violet-50">{d.badge}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Prescripciones</h3>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>
          <ul className="space-y-3">
            {prescriptions.map((p, i) => (
              <li key={i} className="flex items-center gap-3 p-2 rounded hover:bg-slate-50">
                <div className="w-9 h-9 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center"><Activity className="w-4 h-4" /></div>
                <div className="flex-1">
                  <div className="text-sm">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.date}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Actividad Reciente</h3>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>
          <ul className="space-y-3">
            {recentActivity.map((a, i) => {
              const Icon = a.icon;
              return (
                <li key={i} className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${a.color}`}><Icon className="w-4 h-4" /></div>
                  <div className="flex-1">
                    <div className="text-sm">{a.title} <span className="text-slate-500">{a.desc}</span></div>
                    <div className="text-xs text-slate-500">{a.time}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ fontWeight: 600 }}>Signos Vitales</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {vitals.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.name} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${v.color}`}><Icon className="w-4 h-4" /></div>
                <div>
                  <div className="text-xs text-slate-500">{v.name}</div>
                  <div style={{ fontWeight: 600 }}>{v.value}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Consultas por Departamento</h3>
            <Badge variant="secondary">Mensual</Badge>
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={consultationByDept} layout="vertical">
                <CartesianGrid horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
                <Tooltip />
                <Bar dataKey="value" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <h3 style={{ fontWeight: 600 }} className="mb-3">Transacciones Recientes</h3>
          <ul className="space-y-3">
            {recentTx.map((t) => (
              <li key={t.name} className="flex items-center gap-3">
                <Avatar className="w-9 h-9"><AvatarImage src={`https://i.pravatar.cc/36?img=${t.img}`} /><AvatarFallback>{t.name[3]}</AvatarFallback></Avatar>
                <div className="flex-1">
                  <div className="text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">Honorarios Consulta · {t.amt}</div>
                </div>
                {statusBadge(t.status)}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ fontWeight: 600 }}>Citas Recientes</h3>
          <Badge variant="secondary">Mensual</Badge>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-left border-b">
                <th className="py-2 pr-3">Nombre y Cargo</th>
                <th className="py-2 pr-3">Fecha y Hora</th>
                <th className="py-2 pr-3">Honorarios Consulta</th>
                <th className="py-2 pr-3">Modalidad</th>
                <th className="py-2 pr-3">Estado</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {recentAppts.map((a) => (
                <tr key={a.name} className="border-b last:border-0">
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${a.img}`} /><AvatarFallback>{a.name[3]}</AvatarFallback></Avatar>
                      <div>
                        <div>{a.name}</div>
                        <div className="text-xs text-slate-500">{a.spec}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-3 text-slate-600">{a.date}</td>
                  <td className="py-3 pr-3" style={{ fontWeight: 600 }}>{a.fee}</td>
                  <td className="py-3 pr-3">{a.mode}</td>
                  <td className="py-3 pr-3">{statusBadge(a.status)}</td>
                  <td className="py-3"><MoreHorizontal className="w-4 h-4 text-slate-400" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}


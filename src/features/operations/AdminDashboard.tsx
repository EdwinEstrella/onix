import {
  Plus,
  Users,
  UserCheck,
  Calendar,
  DollarSign,
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  CalendarDays,
} from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card } from "../../shared/ui/card";
import { Badge } from "../../shared/ui/badge";
import { Button } from "../../shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

// ───────────── DATA ─────────────

const trendMini = Array.from({ length: 8 }, (_, i) => ({
  name: `d${i}`,
  v: 20 + Math.round(Math.random() * 80),
}));

const stats = [
  {
    name: "Total de Pacientes",
    value: "247",
    change: "+15% Última Semana",
    up: true,
    color: "bg-violet-100 text-violet-700",
    barColor: "#8b5cf6",
    icon: Users,
  },
  {
    name: "Doctores",
    value: "4,178",
    change: "+8% Última Semana",
    up: true,
    color: "bg-orange-100 text-orange-700",
    barColor: "#fb923c",
    icon: Stethoscope,
  },
  {
    name: "Citas",
    value: "12,176",
    change: "+12% Última Semana",
    up: true,
    color: "bg-emerald-100 text-emerald-700",
    barColor: "#10b981",
    icon: Calendar,
  },
  {
    name: "Ingresos",
    value: "$55,1240",
    change: "-3% Última Semana",
    up: false,
    color: "bg-sky-100 text-sky-700",
    barColor: "#0ea5e9",
    icon: DollarSign,
  },
];

const apptStatsBars = [
  { name: "Lun", m: "Lun", a: 60, b: 45, c: 30, d: 25 },
  { name: "Mar", m: "Mar", a: 90, b: 60, c: 40, d: 30 },
  { name: "Mié", m: "Mié", a: 80, b: 50, c: 35, d: 28 },
  { name: "Jue", m: "Jue", a: 110, b: 70, c: 45, d: 36 },
  { name: "Vie", m: "Vie", a: 95, b: 65, c: 40, d: 30 },
  { name: "Sáb", m: "Sáb", a: 70, b: 55, c: 30, d: 25 },
  { name: "Dom", m: "Dom", a: 50, b: 40, c: 25, d: 18 },
];

const popularDoctors = [
  { name: "Dr. Mick Thompson", spec: "Cardiólogo", img: 11, count: "120 Pacientes" },
  { name: "Dra. Emily Carter", spec: "Neuróloga", img: 13, count: "98 Pacientes" },
  { name: "Dr. David Lee", spec: "Ortopedista", img: 15, count: "85 Pacientes" },
  { name: "Dra. Anna Kim", spec: "Pediatra", img: 19, count: "76 Pacientes" },
];

const departmentsData = [
  { name: "Cardiología", value: 35, color: "#8b5cf6" },
  { name: "Neurología", value: 25, color: "#06b6d4" },
  { name: "Ortopedia", value: 20, color: "#f59e0b" },
  { name: "Pediatría", value: 12, color: "#10b981" },
  { name: "Dermatología", value: 8, color: "#ef4444" },
];

const doctorsSchedule = [
  { name: "Dr. Sarah Johnson", spec: "Cardiología", img: 16 },
  { name: "Dra. Emily Carter", spec: "Neurología", img: 17 },
  { name: "Dr. David Lee", spec: "Ortopedia", img: 18 },
  { name: "Dra. Anna Kim", spec: "Pediatría", img: 19 },
];

const incomeByTreatment = [
  { name: "Cardiología", val: "$5,995", color: "from-violet-500 to-violet-400" },
  { name: "Neurología", val: "$4,512", color: "from-sky-500 to-sky-400" },
  { name: "Odontología", val: "$3,710", color: "from-emerald-500 to-emerald-400" },
  { name: "Ortopedia", val: "$2,946", color: "from-amber-500 to-amber-400" },
  { name: "Medicina General", val: "$8,493", color: "from-rose-500 to-rose-400" },
];

const allAppts = [
  { doc: "Dr. John Smith", spec: "Cardiólogo", patient: "Jesse Adams", date: "26 May 2026 - 09:30 AM", mode: "En Línea", status: "Confirmada" },
  { doc: "Dra. Sarah Johnson", spec: "Neuróloga", patient: "Eva Belcher", date: "26 May 2026 - 11:30 AM", mode: "En Línea", status: "Confirmada" },
  { doc: "Dra. Emily Carter", spec: "Pediatra", patient: "Carl Lentz", date: "25 May 2026 - 02:30 PM", mode: "Presencial", status: "Pendiente" },
  { doc: "Dr. David Lee", spec: "Odontólogo", patient: "María Cohen", date: "25 May 2026 - 04:00 PM", mode: "En Línea", status: "Cancelada" },
  { doc: "Dr. Michael Smith", spec: "Cardiólogo", patient: "John Elsass", date: "24 May 2026 - 04:15 PM", mode: "Presencial", status: "Confirmada" },
];

const topPatients = [
  { name: "James Roberts", visits: 30, img: 21 },
  { name: "Susan Babin", visits: 25, img: 22 },
  { name: "Carol Lam", visits: 22, img: 23 },
  { name: "Marsha Noland", visits: 20, img: 24 },
  { name: "Irma Armstrong", visits: 18, img: 25 },
];

const recentTx = [
  { name: "Dr. John Smith", img: 11, label: "Honorarios Consulta", amt: "$300", status: "Exitoso" },
  { name: "Olivia Lawerence", img: 12, label: "Honorarios Consulta", amt: "$370", status: "Pendiente" },
  { name: "Dra. Patricia Brown", img: 13, label: "Honorarios Consulta", amt: "$450", status: "Fallido" },
  { name: "Dra. Rachel Green", img: 14, label: "Honorarios Consulta", amt: "$520", status: "Exitoso" },
  { name: "Dr. Michael Smith", img: 15, label: "Honorarios Consulta", amt: "$650", status: "Exitoso" },
];

const leaves = [
  { name: "Andrew Bilard", img: 1, role: "Cardiólogo Senior", date: "12 May 2026", status: "Aprobado" },
  { name: "Esther Holland", img: 2, role: "Neuróloga", date: "13 May 2026", status: "Pendiente" },
  { name: "Hugh Sinclair", img: 3, role: "Pediatra", date: "14 May 2026", status: "Aprobado" },
  { name: "Connie Webb", img: 4, role: "Odontóloga", date: "15 May 2026", status: "Rechazado" },
];

const apptCounters = [
  { l: "Confirmadas", v: "9,314", c: "text-violet-600", dot: "bg-violet-500" },
  { l: "Canceladas", v: "466", c: "text-rose-600", dot: "bg-rose-500" },
  { l: "Reagendadas", v: "745", c: "text-amber-600", dot: "bg-amber-500" },
  { l: "Completadas", v: "4,578", c: "text-emerald-600", dot: "bg-emerald-500" },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    Confirmada: "bg-emerald-100 text-emerald-700",
    Pendiente: "bg-amber-100 text-amber-700",
    Cancelada: "bg-rose-100 text-rose-700",
    Exitoso: "bg-emerald-100 text-emerald-700",
    Fallido: "bg-rose-100 text-rose-700",
    Aprobado: "bg-emerald-100 text-emerald-700",
    Rechazado: "bg-rose-100 text-rose-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s] ?? "bg-slate-100 text-slate-700"}`}>{s}</span>;
}

// Calendar widget — April 2026 starts Wed
function Calendarito() {
  const days = ["D", "L", "M", "X", "J", "V", "S"];
  const start = 3; // April 1 2026 is a Wednesday
  const total = 30;
  const cells: (number | null)[] = Array(start).fill(null).concat(Array.from({ length: total }, (_, i) => i + 1));
  while (cells.length % 7 !== 0) cells.push(null);
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <button className="w-7 h-7 rounded-md hover:bg-slate-100 flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-slate-500" />
        </button>
        <div className="text-sm" style={{ fontWeight: 600 }}>Abril 2026</div>
        <button className="w-7 h-7 rounded-md hover:bg-slate-100 flex items-center justify-center">
          <ChevronRight className="w-4 h-4 text-slate-500" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {days.map((d, i) => (
          <div key={i} className="text-slate-400 py-1">{d}</div>
        ))}
        {cells.map((d, i) => {
          const active = d === 8;
          return (
            <div
              key={i}
              className={`aspect-square flex items-center justify-center rounded-md ${
                d === null
                  ? ""
                  : active
                  ? "bg-violet-600 text-white"
                  : "hover:bg-slate-100 text-slate-700"
              }`}
            >
              {d ?? ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AdminDashboard() {
  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Panel del Administrador</h1>
          <p className="text-xs text-slate-500">Bienvenido a Preclinic</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5">
            <Plus className="w-4 h-4" />Nueva Cita
          </Button>
          <Button variant="outline" className="gap-1.5">
            <CalendarDays className="w-4 h-4" />Programar Disponibilidad
          </Button>
        </div>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.name} className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-500">{s.name}</div>
                  <div style={{ fontWeight: 600 }} className="text-2xl">{s.value}</div>
                </div>
                <div className="w-16 h-10 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trendMini}>
                      <Bar dataKey="v" fill={s.barColor} radius={2} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className={`mt-2 text-xs flex items-center gap-1 ${s.up ? "text-emerald-600" : "text-rose-600"}`}>
                {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {s.change}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Appointment Statistics + Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Estadísticas de Citas</h3>
            <Badge variant="secondary">Semanal</Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {apptCounters.map((x) => (
              <div key={x.l} className="bg-slate-50 rounded-lg p-3">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${x.dot}`} />
                  <div className="text-xs text-slate-500">{x.l}</div>
                </div>
                <div style={{ fontWeight: 600 }} className={`text-xl ${x.c}`}>{x.v}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-500" />Confirmadas</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" />Pendientes</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" />Canceladas</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" />Reagendadas</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={apptStatsBars}>
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="m" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="a" name="Confirmadas" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="b" name="Pendientes" fill="#fbbf24" radius={[4, 4, 0, 0]} />
                <Bar dataKey="c" name="Canceladas" fill="#f87171" radius={[4, 4, 0, 0]} />
                <Bar dataKey="d" name="Reagendadas" fill="#34d399" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Citas</h3>
          </div>
          <Calendarito />
          <div className="mt-4 space-y-2">
            <div className="bg-violet-50 border-l-4 border-violet-500 rounded p-2 text-xs">
              <div style={{ fontWeight: 600 }}>Visita General</div>
              <div className="text-slate-500">10:30 AM · Andrew Bilard</div>
            </div>
            <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded p-2 text-xs">
              <div style={{ fontWeight: 600 }}>Consulta En Línea</div>
              <div className="text-slate-500">11:30 AM · Susan Babin</div>
            </div>
            <Button variant="outline" className="w-full">Ver Todas las Citas</Button>
          </div>
        </Card>
      </div>

      {/* Popular Doctors / Top Departments / Doctors Schedule */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Doctores Populares</h3>
            <Badge variant="secondary">Semanal</Badge>
          </div>
          <ul className="space-y-3">
            {popularDoctors.map((d) => (
              <li key={d.name} className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={`https://i.pravatar.cc/40?img=${d.img}`} />
                  <AvatarFallback>{d.name[3]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-sm">{d.name}</div>
                  <div className="text-xs text-slate-500">{d.spec}</div>
                </div>
                <Badge className="bg-violet-50 text-violet-700 hover:bg-violet-50">{d.count}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 style={{ fontWeight: 600 }}>Top 5 Departamentos</h3>
            <Badge variant="secondary">Semanal</Badge>
          </div>
          <div className="h-44 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={departmentsData} dataKey="value" innerRadius={50} outerRadius={75} paddingAngle={2}>
                  {departmentsData.map((d, i) => (
                    <Cell key={`dept-cell-${i}`} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-xs text-slate-500">Total</div>
              <div style={{ fontWeight: 600 }} className="text-xl">569</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 text-xs mt-3">
            {departmentsData.map((d) => (
              <div key={d.name} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                <span className="text-slate-600">{d.name}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Agenda de Doctores</h3>
            <Badge variant="secondary">Semanal</Badge>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-violet-50 rounded-lg p-2 text-center">
              <div className="text-xs text-slate-500">Disponibles</div>
              <div style={{ fontWeight: 600 }} className="text-lg text-violet-700">48</div>
            </div>
            <div className="bg-emerald-50 rounded-lg p-2 text-center">
              <div className="text-xs text-slate-500">Atendiendo</div>
              <div style={{ fontWeight: 600 }} className="text-lg text-emerald-700">32</div>
            </div>
          </div>
          <ul className="space-y-3">
            {doctorsSchedule.map((d) => (
              <li key={d.name} className="flex items-center gap-3">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={`https://i.pravatar.cc/36?img=${d.img}`} />
                  <AvatarFallback>{d.name[3]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-sm">{d.name}</div>
                  <div className="text-xs text-slate-500">{d.spec}</div>
                </div>
                <Button size="sm" variant="outline" className="text-xs">Reservar</Button>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Income by treatment */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ fontWeight: 600 }}>Ingresos por Tratamiento</h3>
          <Badge variant="secondary">Semanal</Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {incomeByTreatment.map((i) => (
            <div key={i.name} className={`bg-gradient-to-br ${i.color} text-white rounded-lg p-4`}>
              <div className="text-xs opacity-90">{i.name}</div>
              <div style={{ fontWeight: 600 }} className="text-2xl">{i.val}</div>
              <div className="text-[11px] opacity-90">+12% Última Semana</div>
            </div>
          ))}
        </div>
      </Card>

      {/* All Appointments */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ fontWeight: 600 }}>Todas las Citas</h3>
          <Badge variant="secondary">Semanal</Badge>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-left border-b">
                <th className="py-2 pr-3">Doctor</th>
                <th className="py-2 pr-3">Paciente</th>
                <th className="py-2 pr-3">Fecha y Hora</th>
                <th className="py-2 pr-3">Modalidad</th>
                <th className="py-2 pr-3">Estado</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {allAppts.map((a, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={`https://i.pravatar.cc/32?img=${10 + i}`} />
                        <AvatarFallback>D</AvatarFallback>
                      </Avatar>
                      <div>
                        <div>{a.doc}</div>
                        <div className="text-xs text-slate-500">{a.spec}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-3">{a.patient}</td>
                  <td className="py-3 pr-3 text-slate-600">{a.date}</td>
                  <td className="py-3 pr-3">{a.mode}</td>
                  <td className="py-3 pr-3">{statusBadge(a.status)}</td>
                  <td className="py-3"><MoreHorizontal className="w-4 h-4 text-slate-400" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Top Patients / Recent Transactions / Leaves */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Top 5 Pacientes</h3>
            <Badge variant="secondary">Mensual</Badge>
          </div>
          <ul className="space-y-3">
            {topPatients.map((p) => (
              <li key={p.name} className="flex items-center gap-3">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={`https://i.pravatar.cc/36?img=${p.img}`} />
                  <AvatarFallback>{p.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-sm">{p.name}</div>
                <Badge className="bg-violet-50 text-violet-700 hover:bg-violet-50">{p.visits} Citas</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Transacciones Recientes</h3>
            <Badge variant="secondary">Mensual</Badge>
          </div>
          <ul className="space-y-3">
            {recentTx.map((t) => (
              <li key={t.name} className="flex items-center gap-3">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={`https://i.pravatar.cc/36?img=${t.img}`} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.label}</div>
                </div>
                <div className="text-sm" style={{ fontWeight: 600 }}>{t.amt}</div>
                {statusBadge(t.status)}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Solicitudes de Permiso</h3>
            <Badge variant="secondary">Mensual</Badge>
          </div>
          <ul className="space-y-3">
            {leaves.map((l) => (
              <li key={l.name} className="flex items-center gap-3">
                <Avatar className="w-9 h-9">
                  <AvatarImage src={`https://i.pravatar.cc/36?img=${l.img}`} />
                  <AvatarFallback>{l.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="text-sm">{l.name}</div>
                  <div className="text-xs text-slate-500">{l.role}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-xs text-slate-500">{l.date}</div>
                  {statusBadge(l.status)}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}




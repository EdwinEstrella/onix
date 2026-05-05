import {
  Calendar,
  Plus,
  Users,
  Stethoscope,
  XCircle,
  MessageSquare,
  Video,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend,
} from "recharts";
import { Card } from "../../shared/ui/card";
import { Badge } from "../../shared/ui/badge";
import { Button } from "../../shared/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const apptTrend = [
  { name: "Ene", m: "Ene", t: 80, c: 60 },
  { name: "Feb", m: "Feb", t: 120, c: 90 },
  { name: "Mar", m: "Mar", t: 100, c: 80 },
  { name: "Abr", m: "Abr", t: 140, c: 110 },
  { name: "May", m: "May", t: 160, c: 120 },
  { name: "Jun", m: "Jun", t: 130, c: 100 },
  { name: "Jul", m: "Jul", t: 170, c: 140 },
  { name: "Ago", m: "Ago", t: 150, c: 120 },
  { name: "Sep", m: "Sep", t: 200, c: 160 },
  { name: "Oct", m: "Oct", t: 240, c: 200 },
  { name: "Nov", m: "Nov", t: 180, c: 150 },
  { name: "Dic", m: "Dic", t: 220, c: 180 },
];

const stats = [
  { name: "Total de Citas", value: 658, color: "bg-violet-100 text-violet-700", change: "+15% Última Semana", up: true },
  { name: "Total de Consultas", value: 125, color: "bg-orange-100 text-orange-700", change: "-10% Última Semana", up: false },
  { name: "Citas Canceladas", value: 35, color: "bg-emerald-100 text-emerald-700", change: "+25% Última Semana", up: true },
];

const bottomStats = [
  { name: "Total de Citas", value: 658, color: "from-violet-500 to-violet-400", change: "+15% Última Semana" },
  { name: "Total Consultas", value: 256, color: "from-sky-500 to-sky-400", change: "+15% Última Semana" },
  { name: "Pacientes Nuevos", value: 141, color: "from-emerald-500 to-emerald-400", change: "+85% Última Semana" },
  { name: "Total Pacientes", value: 524, color: "from-amber-500 to-amber-400", change: "+25% Última Semana" },
  { name: "Reservas Sin Cita", value: 21, color: "from-rose-500 to-rose-400", change: "+25% Última Semana" },
  { name: "Ingresos Totales", value: 451, color: "from-indigo-500 to-indigo-400", change: "+25% Última Semana" },
];

const recentAppts = [
  { name: "Alberto Ripley", img: 1, date: "27 May 2025 - 09:30 AM", mode: "En Línea", status: "Atendido", fee: 300 },
  { name: "Susan Babin", img: 2, date: "27 May 2025 - 10:00 AM", mode: "En Línea", status: "Confirmada", fee: 200 },
  { name: "Carol Lam", img: 3, date: "26 May 2025 - 11:30 AM", mode: "Presencial", status: "Confirmada", fee: 450 },
  { name: "Marsha Noland", img: 4, date: "26 May 2025 - 12:30 PM", mode: "En Línea", status: "Cancelada", fee: 150 },
  { name: "John Elsass", img: 5, date: "25 May 2025 - 04:15 PM", mode: "Presencial", status: "Confirmada", fee: 400 },
];

const apptStatsData = [
  { name: "Completadas", value: 65, color: "#10b981" },
  { name: "Pendientes", value: 22, color: "#f59e0b" },
  { name: "Cancelada", value: 13, color: "#ef4444" },
];

const availability = [
  { d: "Lun", a: "11:00 AM - 5:00 PM" },
  { d: "Mar", a: "11:00 AM - 5:00 PM" },
  { d: "Mié", a: "11:00 AM - 5:00 PM" },
  { d: "Jue", a: "11:00 AM - 5:00 PM" },
  { d: "Vie", a: "11:00 AM - 5:00 PM" },
  { d: "Sáb", a: "11:00 AM - 5:00 PM" },
  { d: "Dom", a: "Cerrado", closed: true },
];

const topPacientes = [
  { name: "Alberto Ripley", visits: 30, img: 1 },
  { name: "Susan Babin", visits: 25, img: 2 },
  { name: "Carol Lam", visits: 22, img: 3 },
  { name: "Marsha Noland", visits: 20, img: 4 },
  { name: "Irma Armstrong", visits: 18, img: 6 },
];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    "Atendido": "bg-emerald-100 text-emerald-700",
    Confirmada: "bg-sky-100 text-sky-700",
    Cancelada: "bg-rose-100 text-rose-700",
  };
  return <span className={`px-2 py-0.5 rounded-md text-xs ${map[s]}`}>{s}</span>;
}

export function DoctorDashboard() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 style={{ fontWeight: 600 }} className="text-xl">Panel del Doctor</h1>
        <div className="flex gap-2">
          <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nueva Cita</Button>
          <Button variant="outline" className="gap-1.5"><Calendar className="w-4 h-4" />Programar Disponibilidad</Button>
        </div>
      </div>

      {/* Top stats with mini bar chart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <Card key={s.name} className="p-4 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${s.color}`}>
              {i === 0 ? <Calendar className="w-5 h-5" /> : i === 1 ? <Stethoscope className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            </div>
            <div className="flex-1">
              <div className="text-sm text-slate-500">{s.name}</div>
              <div style={{ fontWeight: 600 }} className="text-2xl">{s.value}</div>
              <div className={`text-xs ${s.up ? "text-emerald-600" : "text-rose-600"}`}>{s.change}</div>
            </div>
            <div className="w-20 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={apptTrend.slice(0, 7)}>
                  <Bar dataKey="t" fill={i === 0 ? "#8b5cf6" : i === 1 ? "#fb923c" : "#10b981"} radius={2} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Upcoming appointments */}
        <Card className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 style={{ fontWeight: 600 }}>Próximas Citas</h3>
            <Badge variant="secondary" className="bg-violet-50 text-violet-700">Hoy</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12"><AvatarImage src="https://i.pravatar.cc/48?img=11" /><AvatarFallback>AB</AvatarFallback></Avatar>
            <div>
              <div style={{ fontWeight: 600 }}>Andrew Bilard</div>
              <div className="text-xs text-slate-500">#APT0001</div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Visita General</span><Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">En Línea</Badge></div>
            <div className="flex justify-between"><span className="text-slate-500">Lunday, 19 Sep 2025</span><span>10:30 AM</span></div>
            <div className="border-t pt-2 flex justify-between"><span className="text-slate-500">Departamento</span><span>Cardiología</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Type</span><span>Consulta En Línea</span></div>
          </div>
          <Button className="w-full bg-violet-600 hover:bg-violet-700">Iniciar Cita</Button>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="gap-1.5"><MessageSquare className="w-4 h-4" />Chatear</Button>
            <Button variant="outline" className="gap-1.5"><Video className="w-4 h-4" />Videoconsulta</Button>
          </div>
        </Card>

        {/* Citas chart */}
        <Card className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Citas</h3>
            <Badge variant="secondary">Mensual</Badge>
          </div>
          <div className="flex gap-4 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-500" /> Total de Citas</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Completadas Citas</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={apptTrend}>
                <CartesianGrid vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="m" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="t" name="Total de Citas" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="c" name="Citas Completadas" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Bottom stats row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {bottomStats.map((s) => (
          <Card key={s.name} className={`p-4 bg-gradient-to-br ${s.color} text-white`}>
            <div className="text-xs opacity-90">{s.name}</div>
            <div style={{ fontWeight: 600 }} className="text-2xl">{s.value}</div>
            <div className="text-[11px] opacity-90">{s.change}</div>
          </Card>
        ))}
      </div>

      {/* Recent appointments table */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 style={{ fontWeight: 600 }}>Recent Citas</h3>
          <Badge variant="secondary">Mensual</Badge>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-slate-500 text-left border-b">
                <th className="py-2 pr-3">Paciente</th>
                <th className="py-2 pr-3">Fecha y Hora</th>
                <th className="py-2 pr-3">Modalidad</th>
                <th className="py-2 pr-3">Estado</th>
                <th className="py-2 pr-3">Honorarios</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {recentAppts.map((a) => (
                <tr key={a.name} className="border-b last:border-0">
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8"><AvatarImage src={`https://i.pravatar.cc/32?img=${a.img}`} /><AvatarFallback>{a.name[0]}</AvatarFallback></Avatar>
                      <span>{a.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-3 text-slate-600">{a.date}</td>
                  <td className="py-3 pr-3">{a.mode}</td>
                  <td className="py-3 pr-3">{statusBadge(a.status)}</td>
                  <td className="py-3 pr-3" style={{ fontWeight: 600 }}>${a.fee}</td>
                  <td className="py-3"><MoreHorizontal className="w-4 h-4 text-slate-400" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Disponibilidad</h3>
            <Badge variant="secondary" className="bg-violet-50 text-violet-700">Clínica Trustcare</Badge>
          </div>
          <ul className="space-y-2 text-sm">
            {availability.map((a) => (
              <li key={a.d} className="flex justify-between items-center">
                <span className="text-slate-600">{a.d}</span>
                {a.closed ? <Badge variant="destructive">Cerrado</Badge> : <span className="flex items-center gap-1 text-slate-600"><Clock className="w-3 h-3" />{a.a}</span>}
              </li>
            ))}
          </ul>
          <Button variant="outline" className="w-full mt-3">Edit Disponibilidad</Button>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Estadísticas de Citas</h3>
            <Badge variant="secondary">Mensual</Badge>
          </div>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={apptStatsData} dataKey="value" innerRadius={50} outerRadius={75} paddingAngle={2}>
                  {apptStatsData.map((d, i) => <Cell key={`appt-cell-${i}`} fill={d.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center -mt-32 mb-12 pointer-events-none">
            <div className="text-xs text-slate-500">Total</div>
            <div style={{ fontWeight: 600 }} className="text-xl">85%</div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center text-xs mt-4">
            {apptStatsData.map((d) => (
              <div key={d.name}>
                <div style={{ fontWeight: 600 }}>{d.value}</div>
                <div className="flex items-center justify-center gap-1 text-slate-500"><span className="w-2 h-2 rounded-full" style={{background: d.color}} />{d.name}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 style={{ fontWeight: 600 }}>Top Pacientes</h3>
            <Badge variant="secondary">Mensual</Badge>
          </div>
          <ul className="space-y-3">
            {topPacientes.map((p) => (
              <li key={p.name} className="flex items-center gap-3">
                <Avatar className="w-9 h-9"><AvatarImage src={`https://i.pravatar.cc/36?img=${p.img}`} /><AvatarFallback>{p.name[0]}</AvatarFallback></Avatar>
                <div className="flex-1">
                  <div className="text-sm">{p.name}</div>
                  <div className="text-xs text-slate-500">#PAT000{p.visits}</div>
                </div>
                <Badge className="bg-violet-50 text-violet-700 hover:bg-violet-50">{p.visits} Citas</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}


import {
  ChevronRight,
  Calendar,
  Hash,
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Droplet,
  Briefcase,
  User,
  Award,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Badge } from "../../shared/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

const slots: Record<string, string[]> = {
  Lunes: ["11:30 AM - 12:30 PM", "02:30 PM - 03:30 PM", "04:30 PM - 05:30 PM", "06:00 PM - 07:30 PM", "07:00 PM - 08:30 PM", "08:00 PM - 09:30 PM"],
  Martes: ["10:00 AM - 11:00 AM", "01:00 PM - 02:00 PM", "05:00 PM - 06:00 PM"],
  Miércoles: ["09:00 AM - 10:00 AM", "12:00 PM - 01:00 PM", "04:00 PM - 05:00 PM"],
  Jueves: ["11:00 AM - 12:00 PM", "02:00 PM - 03:00 PM", "06:00 PM - 07:00 PM"],
  Viernes: ["09:30 AM - 10:30 AM", "01:30 PM - 02:30 PM", "05:30 PM - 06:30 PM"],
};

const aboutItems = [
  { icon: Hash, label: "Número de Licencia Médica", value: "ML5666598984" },
  { icon: Phone, label: "Teléfono", value: "+1 54546 45648" },
  { icon: Mail, label: "Correo", value: "john@example.com" },
  { icon: MapPin, label: "Ubicación", value: "4150 Hilway Road, Las Vegas, NV 89109" },
  { icon: CalendarDays, label: "Fecha de Nacimiento", value: "25 Ene 1985" },
  { icon: Droplet, label: "Tipo de Sangre", value: "O+" },
  { icon: Briefcase, label: "Años de Experiencia", value: "15+ Años" },
  { icon: User, label: "Género", value: "Masculino" },
];

const education = [
  { school: "Boston Medicine Institutuion · MD", date: "25 May 1990 · 29 Ene 1992" },
  { school: "Harvard Medical School, Boston · MBBS", date: "25 May 1990 · 29 Ene 1992" },
];

const awards = [
  { title: "Premio Mejor Doctor (2023)", desc: "Reconocido por U.S. News & World Report por logros sobresalientes en medicina familiar." },
  { title: "Premio Elección del Paciente (2022)", desc: "Otorgado por Vitals.com por recibir constantemente altas calificaciones de pacientes en satisfacción y cuidado." },
];

const certs = [
  { title: "Certificación por la American Board of Family Medicine (ABFM), 2015", desc: "Demuestra dominio del cuidado integral y continuo para individuos y familias en todas las edades y géneros." },
  { title: "Certificación American Heart Association, 2024", desc: "Certificación en técnicas de salvamento, incluyendo RCP y atención cardíaca de emergencia para adultos y niños." },
];

export function DoctorDetails({ onBack }: { onBack: () => void }) {
  const [day, setDay] = useState("Lunes");
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center gap-1 text-xs text-slate-500">
        <button onClick={onBack} className="hover:text-violet-600">Doctores</button>
        <ChevronRight className="w-3 h-3" />
        <span>Detalles del Doctor</span>
      </div>

      {/* Header card */}
      <Card className="p-5">
        <div className="flex items-start gap-4 flex-wrap">
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://i.pravatar.cc/120?img=11" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-[240px]">
            <div className="text-xs text-slate-500">#DT002</div>
            <div className="flex items-center gap-2 mt-1">
              <h2 style={{ fontWeight: 600 }} className="text-lg">Dr. John Smith</h2>
              <Badge className="bg-violet-50 text-violet-700 hover:bg-violet-50">Cardiología</Badge>
            </div>
            <div className="text-sm text-slate-500">MBBS, M.D. Cardiología</div>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-600">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />Clínica · Downtown Medical Clinic</span>
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">Disponible</Badge>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 ml-auto">
            <div className="text-xs text-slate-500">Honorario de Consulta</div>
            <div style={{ fontWeight: 600 }} className="text-2xl text-violet-700">$499</div>
            <div className="text-xs text-slate-500">/ 30 Min</div>
            <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Calendar className="w-4 h-4" />Reservar Cita</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          {/* Availability */}
          <Card className="p-5">
            <h3 style={{ fontWeight: 600 }} className="mb-3">Disponibilidad</h3>
            <div className="flex gap-2 border-b mb-4 overflow-x-auto">
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className={`px-3 py-2 text-sm border-b-2 -mb-px whitespace-nowrap ${
                    d === day ? "border-violet-600 text-violet-700" : "border-transparent text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {(slots[day] ?? []).map((s) => (
                <div key={s} className="border border-slate-200 rounded-md py-2 text-center text-sm hover:border-violet-400 hover:text-violet-700 cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </Card>

          {/* Bio */}
          <Card className="p-5">
            <h3 style={{ fontWeight: 600 }} className="mb-2">Biografía Corta</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              El Dr. John Smith ha estado practicando medicina familiar por más de 10 años. Tiene amplia experiencia
              en el manejo de enfermedades crónicas, atención preventiva y el tratamiento de una amplia gama de
              condiciones médicas para pacientes de todas las edades. El Dr. Smith se dedica a proporcionar atención
              centrada en el paciente y enfatiza construir relaciones a largo plazo con sus pacientes.
            </p>
            <button className="text-xs text-violet-600 mt-2">Ver Más</button>
          </Card>

          {/* Education */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-violet-600" />
              <h3 style={{ fontWeight: 600 }}>Información Educativa</h3>
            </div>
            <ul className="space-y-3">
              {education.map((e, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2" />
                  <div>
                    <div className="text-sm">{e.school}</div>
                    <div className="text-xs text-slate-500">{e.date}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          {/* Awards */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-amber-500" />
              <h3 style={{ fontWeight: 600 }}>Premios y Reconocimientos</h3>
            </div>
            <ul className="space-y-3">
              {awards.map((a) => (
                <li key={a.title} className="text-sm">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span style={{ fontWeight: 600 }}>{a.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{a.desc}</p>
                </li>
              ))}
            </ul>
          </Card>

          {/* Certifications */}
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <h3 style={{ fontWeight: 600 }}>Certificaciones</h3>
            </div>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c.title} className="text-sm">
                  <div style={{ fontWeight: 600 }}>{c.title}</div>
                  <p className="text-xs text-slate-500 mt-1">{c.desc}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* About sidebar */}
        <Card className="p-5 h-fit">
          <h3 style={{ fontWeight: 600 }} className="mb-3">Acerca de</h3>
          <ul className="space-y-3">
            {aboutItems.map((it) => {
              const Icon = it.icon;
              return (
                <li key={it.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-md bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{it.label}</div>
                    <div className="text-sm">{it.value}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </div>
  );
}


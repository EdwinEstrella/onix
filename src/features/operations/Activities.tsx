import { Card } from "../../shared/ui/card";
import { ImageWithFallback } from "../../shared/figma/ImageWithFallback";

type Activity = {
  date: string;
  title: string;
  desc?: string;
  meta?: string;
  images?: string[];
  badge?: string;
  badgeDate?: string;
};

const activities: Activity[] = [
  {
    date: "24 Sep 2026",
    title: "Visita del Paciente Completada en Glory Hospital, Florida, EE.UU.",
    desc: "El paciente completó exitosamente una visita programada. Todas las notas clínicas, diagnósticos y resultados han sido registrados en el historial médico.",
  },
  {
    date: "20 Sep 2026",
    title: "Bernardo James subió 4 fotos nuevas del Evento del Día Mundial de la Seguridad",
    meta: "10:30 AM, 9 Abr · Bernardo James, 4 nuevas fotos",
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300",
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300",
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=300",
    ],
  },
  {
    date: "10 Sep 2026",
    title: "Reunión de Doctores Dra. Linda Carpenter",
    desc: "12 Abr 2026 - 11:00 AM a 12:30 PM, Sala de Conferencias B / Virtual vía Zoom",
  },
  {
    date: "06 Sep 2026",
    title: "Dr. Markhay Smith completó la Operación con Plazo",
    desc: "La operación se completó exitosamente dentro del plazo programado.",
  },
  {
    date: "01 Sep 2026",
    title: "Río Williams publicó un Blog sobre Medidas de Seguridad ante Coronavirus",
    badge: "Seguridad",
    badgeDate: "10 Mar 2026",
    images: ["https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400"],
    desc: "\"Mantente informado sobre cómo mantener seguro tu ambiente clínico. Comparte estas pautas esenciales sobre COVID-19 desde la sanitización hasta los procedimientos de tamizaje de pacientes.\"",
  },
];

export function Activities() {
  return (
    <div className="p-6 space-y-5">
      <h1 style={{ fontWeight: 600 }} className="text-xl">Actividades</h1>

      <Card className="p-6">
        <div className="space-y-6">
          {activities.map((a, i) => (
            <div key={i} className="grid grid-cols-[110px_1fr] gap-5">
              <div className="text-xs text-slate-500 pt-0.5">{a.date}</div>
              <div className="border-l-2 border-violet-200 pl-5 pb-5 relative">
                <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-violet-600 border-2 border-white" />
                <h3 className="text-sm" style={{ fontWeight: 600 }}>{a.title}</h3>
                {a.meta && <p className="text-xs text-slate-500 mt-1">{a.meta}</p>}
                {a.images && (
                  <div className="flex gap-2 mt-3">
                    {a.images.map((src, k) => (
                      <ImageWithFallback key={k} src={src} alt="" className="w-24 h-20 rounded-md object-cover" />
                    ))}
                  </div>
                )}
                {a.badge && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded-md bg-sky-100 text-sky-700 text-xs">{a.badge}</span>
                    <span className="text-xs text-slate-500">{a.badgeDate}</span>
                  </div>
                )}
                {a.desc && <p className="text-sm text-slate-600 mt-2">{a.desc}</p>}
                {a.badge && (
                  <button className="text-xs text-violet-600 mt-2 hover:underline">Leer más →</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}




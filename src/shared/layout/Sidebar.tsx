import {
  LayoutDashboard,
  UserCircle,
  Layers,
  Stethoscope,
  CalendarDays,
  Building2,
  ListChecks,
  Briefcase,
  Activity,
  MessageSquare,
  UsersRound,
  GraduationCap,
  Calendar,
  Palmtree,
  FileText,
  CreditCard,
  Wallet,
  FileBarChart,
  Receipt,
  ShieldCheck,
  UserCog,
  Globe,
  Ticket,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type DashboardView =
  | "admin"
  | "doctor"
  | "patient"
  | "doctors-grid"
  | "doctor-details"
  | "patients-grid"
  | "patient-details"
  | "appointments"
  | "locations"
  | "services"
  | "assets"
  | "activities"
  | "messages"
  | "expenses"
  | "expense-category"
  | "income"
  | "payments"
  | "transactions"
  | "invoices"
  | "invoice-add"
  | "invoice-details"
  | "income-report"
  | "expense-report"
  | "profit-loss-report"
  | "appointment-report"
  | "patient-report";

type NavAction = "add-doctor" | "add-patient" | "add-appointment";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  view?: DashboardView;
  children?: { label: string; view?: DashboardView; action?: NavAction }[];
};

const sections: { title?: string; items: NavItem[] }[] = [
  {
    title: "Menú Principal",
    items: [
      {
        label: "Panel",
        icon: LayoutDashboard,
        children: [
          { label: "Panel Administrador", view: "admin" },
          { label: "Panel Doctor", view: "doctor" },
          { label: "Panel Paciente", view: "patient" },
        ],
      },
      { label: "Aplicaciones", icon: Layers },
      { label: "Inicio", icon: Globe },
      { label: "Plantillas", icon: Layers },
    ],
  },
  {
    title: "Clínica",
    items: [
      {
        label: "Doctores",
        icon: Stethoscope,
        children: [
          { label: "Cuadrícula de Doctores", view: "doctors-grid" },
          { label: "Detalles del Doctor", view: "doctor-details" },
          { label: "Añadir Doctor", action: "add-doctor" },
        ],
      },
      {
        label: "Pacientes",
        icon: UserCircle,
        children: [
          { label: "Cuadrícula de Pacientes", view: "patients-grid" },
          { label: "Detalles del Paciente", view: "patient-details" },
          { label: "Crear Paciente", action: "add-patient" },
        ],
      },
      { label: "Citas", icon: CalendarDays, view: "appointments" },
      { label: "Sedes", icon: Building2, view: "locations" },
      { label: "Servicios", icon: ListChecks, view: "services" },
      { label: "Especialidades", icon: Briefcase },
      { label: "Recursos", icon: Activity, view: "assets" },
      { label: "Actividades", icon: Activity, view: "activities" },
      { label: "Mensajes", icon: MessageSquare, view: "messages" },
    ],
  },
  {
    title: "Personal",
    items: [
      { label: "Empleados", icon: UsersRound },
      { label: "Departamentos", icon: Building2 },
      { label: "Cargos", icon: GraduationCap },
      { label: "Asistencia", icon: Calendar },
      { label: "Permisos", icon: Palmtree },
      { label: "Festivos", icon: Calendar },
      { label: "Nómina", icon: Wallet },
    ],
  },
  {
    title: "Finanzas y Cuentas",
    items: [
      {
        label: "Gastos",
        icon: Receipt,
        children: [
          { label: "Gastos", view: "expenses" },
          { label: "Categoría de Gasto", view: "expense-category" },
        ],
      },
      { label: "Ingresos", icon: Wallet, view: "income" },
      {
        label: "Facturas",
        icon: FileText,
        children: [
          { label: "Lista de Facturas", view: "invoices" },
          { label: "Detalles de Factura", view: "invoice-details" },
          { label: "Nueva Factura", view: "invoice-add" },
        ],
      },
      { label: "Pagos", icon: CreditCard, view: "payments" },
      { label: "Transacciones", icon: Receipt, view: "transactions" },
      { label: "Reembolsos", icon: Receipt },
    ],
  },
  {
    title: "Administración",
    items: [
      { label: "Usuarios", icon: UserCog },
      {
        label: "Reportes",
        icon: FileBarChart,
        children: [
          { label: "Reporte de Ingresos", view: "income-report" },
          { label: "Reporte de Gastos", view: "expense-report" },
          { label: "Pérdidas y Ganancias", view: "profit-loss-report" },
          { label: "Reporte de Citas", view: "appointment-report" },
          { label: "Reporte de Pacientes", view: "patient-report" },
        ],
      },
    ],
  },
  {
    title: "Soporte",
    items: [
      { label: "Configuración", icon: ShieldCheck },
      { label: "Tickets", icon: Ticket },
    ],
  },
];

export function Sidebar({
  view,
  onViewChange,
  onAddDoctor,
  onAddPatient,
  onLogout,
}: {
  view: DashboardView;
  onViewChange: (v: DashboardView) => void;
  onAddDoctor: () => void;
  onAddPatient: () => void;
  onLogout?: () => void;
}) {
  return (
    <aside className="w-[240px] shrink-0 bg-white border-r border-slate-200 flex flex-col">
      <div className="px-5 h-16 flex items-center border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
            <Stethoscope className="w-4 h-4 text-white" />
          </div>
          <span className="text-violet-700" style={{ fontWeight: 600 }}>Preclinic</span>
        </div>
      </div>
      <div className="px-3 py-3 border-b border-slate-200">
        <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-slate-50">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://i.pravatar.cc/40?img=12" />
            <AvatarFallback>TC</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="text-sm">Clínica Trustcare</div>
            <div className="text-xs text-slate-500">Lavingya</div>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
        {sections.map((section, si) => (
          <div key={si}>
            {section.title && (
              <div className="px-3 mb-1 text-xs uppercase tracking-wide text-slate-400">
                {section.title}
              </div>
            )}
            <ul className="space-y-0.5">
              {section.items.map((it) => {
                const Icon = it.icon;
                const isActive = it.view === view;
                return (
                  <li key={it.label}>
                    <div
                      onClick={() => it.view && onViewChange(it.view)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-slate-100 ${
                        isActive ? "bg-violet-50 text-violet-700" : "text-slate-700"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="flex-1">{it.label}</span>
                      {it.children && <ChevronDown className="w-3.5 h-3.5" />}
                    </div>
                    {it.children && (
                      <ul className="ml-9 mt-1 space-y-0.5">
                        {it.children.map((c) => (
                          <li key={c.label}>
                            <button
                              onClick={() => {
                                if (c.action === "add-doctor") onAddDoctor();
                                else if (c.action === "add-patient") onAddPatient();
                                else if (c.view) onViewChange(c.view);
                              }}
                              className={`block w-full text-left px-2 py-1 rounded text-sm ${
                                c.view === view
                                  ? "text-violet-700"
                                  : "text-slate-500 hover:text-slate-800"
                              }`}
                            >
                              {c.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      {onLogout && (
        <div className="px-3 py-3 border-t border-slate-200">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-600 hover:bg-slate-100"
          >
            <UserCog className="w-4 h-4" /> Cerrar Sesión
          </button>
        </div>
      )}
    </aside>
  );
}


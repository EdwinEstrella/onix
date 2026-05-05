import { useState } from "react";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  BriefcaseMedical,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  CreditCard,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MessageSquare,
  Moon,
  Palmtree,
  Receipt,
  Settings,
  Stethoscope,
  Ticket,
  UserCircle,
  UsersRound,
  Wallet,
  X,
} from "lucide-react";

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

type NavAction = "add-doctor" | "add-patient";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  view?: DashboardView;
  children?: { label: string; view?: DashboardView; action?: NavAction }[];
};

const sections: { title: string; items: NavItem[] }[] = [
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
    ],
  },
  {
    title: "Clínica",
    items: [
      {
        label: "Doctores",
        icon: BriefcaseMedical,
        children: [
          { label: "Lista de Doctores", view: "doctors-grid" },
          { label: "Detalles del Doctor", view: "doctor-details" },
          { label: "Agregar Doctor", action: "add-doctor" },
        ],
      },
      {
        label: "Pacientes",
        icon: UserCircle,
        children: [
          { label: "Lista de Pacientes", view: "patients-grid" },
          { label: "Detalles del Paciente", view: "patient-details" },
          { label: "Agregar Paciente", action: "add-patient" },
        ],
      },
      { label: "Citas", icon: CalendarDays, view: "appointments" },
      { label: "Sedes", icon: Building2, view: "locations" },
      { label: "Servicios", icon: BadgeCheck, view: "services" },
      { label: "Recursos", icon: Activity, view: "assets" },
      { label: "Actividades", icon: Activity, view: "activities" },
      { label: "Mensajes", icon: MessageSquare, view: "messages" },
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
    ],
  },
  {
    title: "HRM",
    items: [
      { label: "Empleados", icon: UsersRound },
      { label: "Departamentos", icon: Building2 },
      { label: "Cargos", icon: GraduationCap },
      { label: "Asistencia", icon: CalendarDays },
      { label: "Permisos", icon: Palmtree },
      { label: "Festivos", icon: CalendarDays },
      { label: "Nómina", icon: Wallet },
    ],
  },
  {
    title: "Administración",
    items: [
      { label: "Usuarios", icon: UsersRound },
      {
        label: "Reportes",
        icon: BarChart3,
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
      { label: "Configuración", icon: Settings },
      { label: "Tickets", icon: Ticket },
    ],
  },
];

export function Sidebar({
  view,
  onViewChange,
  onAddDoctor,
  onAddPatient,
}: {
  view: DashboardView;
  onViewChange: (v: DashboardView) => void;
  onAddDoctor: () => void;
  onAddPatient: () => void;
  onLogout?: () => void;
}) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    Panel: true,
    Doctores: true,
    Pacientes: true,
  });

  const toggleGroup = (label: string) => {
    setOpenGroups((current) => ({ ...current, [label]: !current[label] }));
  };

  return (
    <aside className="h-full w-[276px] shrink-0 overflow-y-auto rounded-tr-[6px] rounded-br-[6px] border-r border-[#e7e8eb] bg-white">
      <div className="sticky top-0 z-10 border-b border-[#e7e8eb] bg-white px-[24px] py-[12px]">
        <div className="flex h-[28px] items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <div className="flex size-[28px] items-center justify-center rounded-[8px] bg-[#2e37a4]">
              <Stethoscope className="size-[15px] text-white" />
            </div>
            <span className="text-[18px] font-semibold leading-[28px] text-[#030303]">Preclinic</span>
          </div>
          <button className="flex size-[22px] items-center justify-center rounded-[20px] bg-[#f5f6f8] text-[#0a1b39]">
            <ChevronRight className="size-[14px] rotate-180" />
          </button>
        </div>
      </div>

      <div className="px-[24px] py-[24px]">
        <div className="mb-[16px] rounded-[6px] border border-[#e7e8eb] bg-white px-[16px] py-[12px] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-[8px]">
            <div className="flex size-[40px] items-center justify-center rounded-full bg-[#2e37a4]">
              <Stethoscope className="size-[18px] text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-semibold leading-[21px] text-[#0a1b39]">Clínica Trustcare</p>
              <p className="truncate text-[13px] leading-[19.5px] text-[#6c7688]">Las Vegas</p>
            </div>
            <ChevronDown className="size-[14px] text-[#0a1b39]" />
          </div>
        </div>

        <nav className="space-y-[12px]">
          {sections.map((section) => (
            <div key={section.title} className="space-y-[8px]">
              <p className="text-center text-[13px] font-medium leading-[19.5px] text-[#858d9c]">{section.title}</p>
              <ul className="space-y-[4px]">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isOpen = Boolean(openGroups[item.label]);
                  const isActive = item.view === view || item.children?.some((child) => child.view === view);

                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => {
                          if (item.children) toggleGroup(item.label);
                          else if (item.view) onViewChange(item.view);
                        }}
                        className={`flex w-full items-center gap-[8px] rounded-[6px] px-[12px] py-[8px] text-left text-[14px] font-medium leading-[21px] transition ${
                          isActive
                            ? "border border-[#e7e8eb] bg-white text-[#2e37a4] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]"
                            : "text-[#0a1b39] hover:bg-[#f5f6f8]"
                        }`}
                      >
                        <Icon className="size-[14px] shrink-0" />
                        <span className="min-w-0 flex-1 truncate">{item.label}</span>
                        {item.children && (
                          isOpen ? <ChevronDown className="size-[14px] shrink-0" /> : <ChevronRight className="size-[14px] shrink-0" />
                        )}
                      </button>

                      {item.children && isOpen && (
                        <ul className="mt-[4px] space-y-[4px]">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <button
                                type="button"
                                onClick={() => {
                                  if (child.action === "add-doctor") onAddDoctor();
                                  else if (child.action === "add-patient") onAddPatient();
                                  else if (child.view) onViewChange(child.view);
                                }}
                                className={`flex h-[32px] w-full items-center gap-[8px] rounded-[6px] px-[12px] py-[6px] text-left text-[13px] font-medium leading-[19.5px] ${
                                  child.view === view
                                    ? "text-[#2e37a4]"
                                    : "text-[#6c7688] hover:bg-[#f5f6f8] hover:text-[#0a1b39]"
                                }`}
                              >
                                <span
                                  className={`size-[6px] shrink-0 rounded-full ${
                                    child.view === view ? "bg-[#2e37a4]" : "bg-[#d5d8df]"
                                  }`}
                                />
                                <span className="min-w-0 flex-1 truncate">{child.label}</span>
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
      </div>

      <div className="border-t border-[#e7e8eb] px-[24px] py-[24px]">
        <div className="relative rounded-[6px] bg-[#f5f6f8] p-[20px] text-center">
          <button className="absolute right-[12px] top-[12px] flex size-[22px] items-center justify-center rounded-full bg-white shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
            <X className="size-[14px] text-[#0a1b39]" />
          </button>
          <div className="mx-auto mb-[16px] flex size-[48px] items-center justify-center rounded-[15.556px] bg-white shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">
            <Stethoscope className="size-[24px] text-[#2e37a4]" />
          </div>
          <p className="text-[14px] font-semibold leading-[21px] text-[#0a1b39]">Actualizar a Pro</p>
          <p className="mt-[4px] text-[14px] leading-[21px] text-[#6c7688]">
            Mira un video de 1 minuto y empieza a usar Preclinic como profesional
          </p>
        </div>

        <div className="mt-[12px] rounded-[6px] border border-[#e7e8eb] bg-white px-[16px] py-[12px] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-[8px]">
            <Moon className="size-[14px] text-[#0a1b39]" />
            <p className="flex-1 text-[14px] font-medium leading-[21px] text-[#0a1b39]">Modo Oscuro</p>
            <button className="flex h-[16px] w-[30px] items-center rounded-[8px] bg-[#e7e8eb] p-[4px]">
              <span className="h-[8px] w-[8px] rounded-[6px] bg-white/80" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

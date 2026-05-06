import { useState } from "react";
import { Sidebar } from "../shared/layout/Sidebar";
import { Topbar } from "../shared/layout/Topbar";
import { Login } from "../features/auth/Login";
import { Register } from "../features/auth/Register";
import { ForgotPassword } from "../features/auth/ForgotPassword";
import { EmailSent } from "../features/auth/EmailSent";
import { EmailOtpVerification } from "../features/auth/EmailOtpVerification";
import { TwoStepVerification } from "../features/auth/TwoStepVerification";
import { ResetPassword } from "../features/auth/ResetPassword";
import { Success } from "../features/auth/Success";
import { DoctorDashboard } from "../features/doctors/DoctorDashboard";
import { DoctorGrid } from "../features/doctors/DoctorGrid";
import { DoctorDetails } from "../features/doctors/DoctorDetails";
import { AddNewDoctor } from "../features/doctors/AddNewDoctor";
import { PatientDashboard } from "../features/patients/PatientDashboard";
import { PatientGrid } from "../features/patients/PatientGrid";
import { PatientDetails } from "../features/patients/PatientDetails";
import { AddPatient } from "../features/patients/AddPatient";
import { Appointments } from "../features/appointments/Appointments";
import { Expenses } from "../features/finance/Expenses";
import { ExpenseCategory } from "../features/finance/ExpenseCategory";
import { Income } from "../features/finance/Income";
import { Payments } from "../features/finance/Payments";
import { Transactions } from "../features/finance/Transactions";
import { Invoices } from "../features/finance/Invoices";
import { AddInvoice } from "../features/finance/AddInvoice";
import { InvoiceDetails } from "../features/finance/InvoiceDetails";
import { IncomeReport } from "../features/reports/IncomeReport";
import { ExpenseReport } from "../features/reports/ExpenseReport";
import { ProfitLossReport } from "../features/reports/ProfitLossReport";
import { AppointmentReport } from "../features/reports/AppointmentReport";
import { PatientReport } from "../features/reports/PatientReport";
import { AdminDashboard } from "../features/operations/AdminDashboard";
import { Locations } from "../features/operations/Locations";
import { Services } from "../features/operations/Services";
import { Assets } from "../features/operations/Assets";
import { Activities } from "../features/operations/Activities";
import { Messages } from "../features/operations/Messages";
import { Organizations } from "../features/administration/Organizations";
import { Users } from "../features/administration/Users";
import { AccessControl } from "../features/administration/AccessControl";
import { ProjectPlan } from "../features/administration/ProjectPlan";
import { ProfileBuilder } from "../features/administration/ProfileBuilder";
import { Plans } from "../features/administration/Plans";
import { DataModel } from "../features/administration/DataModel";
import { useAuth } from "../shared/backend/AuthProvider";

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
  | "organizations"
  | "users"
  | "access-control"
  | "profile-builder"
  | "plans"
  | "data-model"
  | "project-plan"
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

type AuthView =
  | "login"
  | "register"
  | "forgot"
  | "email-sent"
  | "email-otp"
  | "two-step"
  | "reset-password"
  | "success"
  | null;

export default function App() {
  const { isLoading, session, signOut } = useAuth();
  const [view, setView] = useState<DashboardView>("admin");
  const [showAddDoctor, setShowAddDoctor] = useState(false);
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [authView, setAuthView] = useState<AuthView>("login");

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-slate-50 text-sm text-slate-500">
        Cargando sesión...
      </div>
    );
  }

  if (!session && authView === "login")
    return (
      <Login
        onSignIn={() => setAuthView(null)}
        onRegister={() => setAuthView("register")}
        onForgot={() => setAuthView("forgot")}
      />
    );
  if (!session && authView === "register")
    return <Register onLogin={() => setAuthView("email-otp")} />;
  if (!session && authView === "forgot")
    return (
      <ForgotPassword
        onSubmit={() => setAuthView("email-sent")}
        onBack={() => setAuthView("login")}
      />
    );
  if (!session && authView === "email-sent")
    return <EmailSent onReset={() => setAuthView("reset-password")} />;
  if (!session && authView === "email-otp")
    return <EmailOtpVerification onVerify={() => setAuthView("two-step")} />;
  if (!session && authView === "two-step")
    return <TwoStepVerification onSubmit={() => setAuthView(null)} />;
  if (!session && authView === "reset-password")
    return (
      <ResetPassword
        onSubmit={() => setAuthView("success")}
        onBack={() => setAuthView("login")}
      />
    );
  if (!session && authView === "success")
    return <Success onLogin={() => setAuthView("login")} />;

  if (!session) {
    return (
      <Login
        onSignIn={() => setAuthView(null)}
        onRegister={() => setAuthView("register")}
        onForgot={() => setAuthView("forgot")}
      />
    );
  }

  return (
    <div className="flex h-full w-full bg-slate-50 text-slate-900">
      <Sidebar
        view={view}
        onViewChange={setView}
        onAddDoctor={() => setShowAddDoctor(true)}
        onAddPatient={() => setShowAddPatient(true)}
        onLogout={async () => {
          await signOut();
          setAuthView("login");
        }}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto">
          {view === "admin" && <AdminDashboard />}
          {view === "doctor" && <DoctorDashboard />}
          {view === "patient" && <PatientDashboard />}
          {view === "doctors-grid" && (
            <DoctorGrid
              onSelect={() => setView("doctor-details")}
              onAdd={() => setShowAddDoctor(true)}
            />
          )}
          {view === "doctor-details" && (
            <DoctorDetails onBack={() => setView("doctors-grid")} />
          )}
          {view === "patients-grid" && (
            <PatientGrid
              onSelect={() => setView("patient-details")}
              onAdd={() => setShowAddPatient(true)}
            />
          )}
          {view === "patient-details" && (
            <PatientDetails onBack={() => setView("patients-grid")} />
          )}
          {view === "appointments" && <Appointments onAdd={() => {}} />}
          {view === "locations" && <Locations />}
          {view === "services" && <Services />}
          {view === "assets" && <Assets />}
          {view === "activities" && <Activities />}
          {view === "messages" && <Messages />}
          {view === "organizations" && <Organizations />}
          {view === "users" && <Users />}
          {view === "access-control" && <AccessControl />}
          {view === "profile-builder" && <ProfileBuilder />}
          {view === "plans" && <Plans />}
          {view === "data-model" && <DataModel />}
          {view === "project-plan" && <ProjectPlan />}
          {view === "expenses" && <Expenses />}
          {view === "expense-category" && <ExpenseCategory />}
          {view === "income" && <Income />}
          {view === "payments" && <Payments />}
          {view === "transactions" && <Transactions />}
          {view === "invoices" && (
            <Invoices
              onAdd={() => setView("invoice-add")}
              onSelect={() => setView("invoice-details")}
            />
          )}
          {view === "invoice-add" && <AddInvoice onBack={() => setView("invoices")} />}
          {view === "invoice-details" && <InvoiceDetails onBack={() => setView("invoices")} />}
          {view === "income-report" && <IncomeReport />}
          {view === "expense-report" && <ExpenseReport />}
          {view === "profit-loss-report" && <ProfitLossReport />}
          {view === "appointment-report" && <AppointmentReport />}
          {view === "patient-report" && <PatientReport />}
          <footer className="text-center text-xs text-slate-400 py-4">
            2026 © Preclinic. Todos los Derechos Reservados
          </footer>
        </main>
      </div>
      {showAddDoctor && <AddNewDoctor onClose={() => setShowAddDoctor(false)} />}
      {showAddPatient && <AddPatient onClose={() => setShowAddPatient(false)} />}
    </div>
  );
}

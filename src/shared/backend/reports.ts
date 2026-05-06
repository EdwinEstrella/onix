import { appointments, branches, invoices, patients, payments } from "../domain/seed";
import type { EntityId, PaymentStatus } from "../domain/types";

export type IncomeReportRow = {
  invoiceNumber: string;
  branchName: string;
  patientName: string;
  amount: number;
  status: PaymentStatus;
  paidAt: string;
};

export type PatientReportRow = {
  medicalRecordNumber: string;
  patientName: string;
  branchName: string;
  appointments: number;
  lastVisit?: string;
};

const operatingExpenseRatio = 0.42;

function moneyTotal(values: number[]) {
  return values.reduce((total, value) => total + value, 0);
}

export function getIncomeReport(tenantId: EntityId): IncomeReportRow[] {
  return payments
    .filter((payment) => payment.tenantId === tenantId)
    .map((payment) => {
      const invoice = invoices.find((candidate) => candidate.id === payment.invoiceId);
      const patient = patients.find((candidate) => candidate.id === invoice?.patientId);
      const branch = branches.find((candidate) => candidate.id === payment.branchId);

      return {
        invoiceNumber: invoice?.invoiceNumber ?? "Sin factura",
        branchName: branch?.name ?? "Sin sede",
        patientName: patient?.fullName ?? "Paciente no encontrado",
        amount: payment.amount,
        status: payment.status,
        paidAt: payment.paidAt ?? payment.createdAt,
      };
    });
}

export function getPatientReport(tenantId: EntityId): PatientReportRow[] {
  return patients
    .filter((patient) => patient.tenantId === tenantId)
    .map((patient) => {
      const branch = branches.find((candidate) => candidate.id === patient.branchId);
      const patientAppointments = appointments
        .filter((appointment) => appointment.patientId === patient.id)
        .sort((left, right) => right.startsAt.localeCompare(left.startsAt));

      return {
        medicalRecordNumber: patient.medicalRecordNumber,
        patientName: patient.fullName,
        branchName: branch?.name ?? "Sin sede",
        appointments: patientAppointments.length,
        lastVisit: patientAppointments[0]?.startsAt,
      };
    });
}

export function getFinancialSummary(tenantId: EntityId) {
  const incomeRows = getIncomeReport(tenantId);
  const totalIncome = moneyTotal(incomeRows.filter((row) => row.status === "completed").map((row) => row.amount));
  const estimatedExpenses = Math.round(totalIncome * operatingExpenseRatio);
  const netProfit = totalIncome - estimatedExpenses;
  const margin = totalIncome > 0 ? Number(((netProfit / totalIncome) * 100).toFixed(1)) : 0;

  return {
    totalIncome,
    estimatedExpenses,
    netProfit,
    margin,
  };
}

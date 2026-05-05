import { ChevronLeft, Printer, Download, Stethoscope } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";

const items = [
  { i: 1, name: "Chequeo Médico Completo", desc: "Tamizaje completo de salud cubriendo todos los sistemas mayores", cost: "$400", qty: 1, amount: "$400" },
  { i: 2, name: "Análisis de Sangre", desc: "Análisis sanguíneo de rutina para evaluar el estado general de salud", cost: "$250", qty: 1, amount: "$250" },
];

export function InvoiceDetails({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6 space-y-4">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-600 hover:text-violet-600">
        <ChevronLeft className="w-4 h-4" />Facturas
      </button>

      <Card className="p-0">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span className="text-violet-700" style={{ fontWeight: 600 }}>Preclinic</span>
          </div>
          <span className="px-2 py-1 rounded-md bg-rose-500 text-white text-xs">Vence en 8 días</span>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <h3 style={{ fontWeight: 600 }} className="mb-2">Detalles de la Factura</h3>
              <div className="space-y-1 text-slate-600">
                <div>Número de Factura : <span className="text-slate-800">INV0025</span></div>
                <div>Emitida El : <span className="text-slate-800">25 Ene 2026</span></div>
                <div>Fecha de Vencimiento : <span className="text-slate-800">31 Ene 2026</span></div>
                <div>Factura Recurrente : <span className="text-slate-800">Mensual</span></div>
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 600 }} className="mb-2">Factura De</h3>
              <div className="space-y-0.5 text-slate-600">
                <div className="text-slate-800" style={{ fontWeight: 600 }}>Andrew Fletcher</div>
                <div>5754 Airport Rd</div>
                <div>Coosada, AL, 36020</div>
                <div>Estados Unidos</div>
              </div>
            </div>
            <div className="text-right">
              <h3 style={{ fontWeight: 600 }} className="mb-2">Factura Para</h3>
              <div className="space-y-0.5 text-slate-600">
                <div className="text-slate-800" style={{ fontWeight: 600 }}>Andrew Fletcher</div>
                <div>299 Star Trek Drive,</div>
                <div>Florida, 3240,</div>
                <div>Estados Unidos</div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontWeight: 600 }} className="mb-2">Productos / Servicios</h3>
            <div className="border rounded-md overflow-hidden">
              <div className="grid grid-cols-[40px_1.5fr_2.5fr_1fr_1fr_1fr] bg-slate-50 px-3 py-2 text-xs" style={{ fontWeight: 600 }}>
                <span>#</span>
                <span>Producto / Artículo</span>
                <span>Descripción</span>
                <span>Costo Unitario</span>
                <span>Cantidad</span>
                <span>Monto</span>
              </div>
              {items.map((it) => (
                <div key={it.i} className="grid grid-cols-[40px_1.5fr_2.5fr_1fr_1fr_1fr] px-3 py-3 border-t text-sm">
                  <span className="text-slate-500">{it.i}</span>
                  <span>{it.name}</span>
                  <span className="text-slate-600">{it.desc}</span>
                  <span>{it.cost}</span>
                  <span>{it.qty}</span>
                  <span>{it.amount}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-sm">
              <h3 style={{ fontWeight: 600 }} className="mb-2">Detalles Bancarios</h3>
              <div className="space-y-1 text-slate-600">
                <div>Nombre del Banco : <span className="text-slate-800">ABC Bank</span></div>
                <div>Número de Cuenta : <span className="text-slate-800">782459739212</span></div>
                <div>Código IFSC : <span className="text-slate-800">ABC0001345</span></div>
                <div>Referencia de Pago : <span className="text-slate-800">INV-20260220-001</span></div>
              </div>
            </div>
            <div className="text-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Monto</span>
                <span>$650</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">CGST (9%)</span>
                <span>$18</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">SGST (9%)</span>
                <span>$18</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Descuento (25%)</span>
                <span className="text-rose-500">- $36</span>
              </div>
              <div className="flex items-center justify-between border-t pt-3" style={{ fontWeight: 600 }}>
                <span>Total (USD)</span>
                <span className="text-lg">$650</span>
              </div>
              <div className="text-xs text-slate-500">Total en palabras</div>
              <div className="text-sm" style={{ fontWeight: 600 }}>Seiscientos Cincuenta Dólares</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-2 border-t">
            <div className="text-sm space-y-3">
              <div>
                <h4 style={{ fontWeight: 600 }}>Términos y Condiciones</h4>
                <p className="text-slate-500 text-xs mt-0.5">El pago debe ser devuelto en la misma condición.</p>
              </div>
              <div>
                <h4 style={{ fontWeight: 600 }}>Notas</h4>
                <p className="text-slate-500 text-xs mt-0.5">Todos los cargos son finales e incluyen impuestos, tarifas y costos adicionales aplicables.</p>
              </div>
            </div>
            <div className="text-right">
              <div className="italic text-slate-600 text-2xl" style={{ fontFamily: "cursive" }}>Andrew</div>
              <div className="text-sm" style={{ fontWeight: 600 }}>Ted M. Davis</div>
              <div className="text-xs text-slate-500">Gerente</div>
            </div>
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <Button className="bg-slate-900 hover:bg-slate-800 gap-1.5"><Printer className="w-4 h-4" />Imprimir</Button>
            <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Download className="w-4 h-4" />Descargar</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}


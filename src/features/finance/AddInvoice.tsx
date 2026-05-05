import { ChevronLeft, Plus, Trash2 } from "lucide-react";
import { Card } from "../../shared/ui/card";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";
import { Textarea } from "../../shared/ui/textarea";
import { Switch } from "../../shared/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shared/ui/select";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-slate-600">
        {label}
        {required && <span className="text-rose-500 ml-0.5">*</span>}
      </Label>
      {children}
    </div>
  );
}

export function AddInvoice({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6 space-y-4">
      <button onClick={onBack} className="flex items-center gap-1 text-sm text-slate-600 hover:text-violet-600">
        <ChevronLeft className="w-4 h-4" />Facturas
      </button>

      <Card className="p-0">
        <div className="px-6 py-4 border-b">
          <h2 style={{ fontWeight: 600 }}>Nueva Factura</h2>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Nombre del Paciente" required><Input /></Field>
            <Field label="Correo" required><Input type="email" /></Field>
            <Field label="Departamento" required>
              <Select>
                <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">Cardiología</SelectItem>
                  <SelectItem value="ped">Pediatría</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Impuesto" required>
              <Select>
                <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0%</SelectItem>
                  <SelectItem value="9">9%</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Fecha de Factura" required><Input type="date" /></Field>
            <Field label="Fecha de Vencimiento" required><Input type="date" /></Field>
            <Field label="Dirección del Paciente"><Textarea /></Field>
            <Field label="Dirección de Facturación"><Textarea /></Field>
            <Field label="Método de Pago" required>
              <Select>
                <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="card">Tarjeta Débito</SelectItem>
                  <SelectItem value="cheque">Cheque</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Estado de Pago" required>
              <Select>
                <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="paid">Pagado</SelectItem>
                  <SelectItem value="partial">Pago Parcial</SelectItem>
                  <SelectItem value="unpaid">No Pagado</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>

          {/* Items table */}
          <div className="border rounded-md overflow-hidden">
            <div className="grid grid-cols-[1.2fr_2fr_1fr_0.8fr_1fr_40px] bg-slate-50 px-3 py-2 text-xs" style={{ fontWeight: 600 }}>
              <span>Artículo</span>
              <span>Descripción</span>
              <span>Costo Unitario</span>
              <span>Cant.</span>
              <span>Monto</span>
              <span></span>
            </div>
            {[0, 1].map((i) => (
              <div key={i} className="grid grid-cols-[1.2fr_2fr_1fr_0.8fr_1fr_40px] gap-2 px-3 py-2 border-t items-center">
                <Input className="h-9" />
                <Input className="h-9" />
                <Input className="h-9" />
                <Input className="h-9" />
                <Input className="h-9" />
                {i === 1 && (
                  <button className="w-8 h-8 rounded-md hover:bg-slate-100 flex items-center justify-center">
                    <Trash2 className="w-4 h-4 text-slate-400" />
                  </button>
                )}
              </div>
            ))}
            <div className="px-3 py-2 border-t">
              <button className="text-sm text-violet-600 flex items-center gap-1 hover:underline">
                <Plus className="w-3.5 h-3.5" />Añadir Nuevo
              </button>
            </div>
          </div>

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-80 space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Monto</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Impuesto (0%)</span>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-500">Descuento</span>
                <div className="flex items-center gap-2">
                  <Input className="h-8 w-16" defaultValue="0" />
                  <Select>
                    <SelectTrigger className="h-8 w-16"><SelectValue placeholder="%" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pct">%</SelectItem>
                      <SelectItem value="usd">$</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Switch />
                  <span className="text-slate-500">Redondear Total</span>
                </div>
                <span>$0</span>
              </div>
              <div className="flex items-center justify-between border-t pt-2" style={{ fontWeight: 600 }}>
                <span>Total (USD)</span>
                <span>$0</span>
              </div>
            </div>
          </div>

          <Field label="Otra Información"><Textarea rows={3} /></Field>
        </div>

        <div className="border-t px-6 py-3 flex justify-end gap-2">
          <Button variant="outline" onClick={onBack}>Cancelar</Button>
          <Button className="bg-violet-600 hover:bg-violet-700">Añadir Nueva Factura</Button>
        </div>
      </Card>
    </div>
  );
}




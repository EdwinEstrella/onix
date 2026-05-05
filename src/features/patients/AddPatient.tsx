import { X, Camera } from "lucide-react";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shared/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 style={{ fontWeight: 600 }} className="text-sm">{title}</h3>
      {children}
    </section>
  );
}

export function AddPatient({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[700px] bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
        <header className="px-6 h-14 border-b flex items-center justify-between shrink-0">
          <h2 style={{ fontWeight: 600 }}>Añadir Nuevo Paciente</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-md hover:bg-slate-100 flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          <Section title="Información del Paciente">
            <div>
              <Label className="text-xs text-slate-600">Foto de Perfil</Label>
              <div className="mt-1 flex justify-center">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-slate-100 text-slate-400">
                      <Camera className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                  <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center shadow">
                    <Camera className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Nombre" required>
                <Input placeholder="" />
              </Field>
              <Field label="Apellido" required>
                <Input placeholder="" />
              </Field>
              <Field label="Teléfono" required>
                <div className="flex">
                  <span className="px-3 border border-r-0 rounded-l-md bg-slate-50 text-sm flex items-center">+1</span>
                  <Input className="rounded-l-none" placeholder="000-0000-0000" />
                </div>
              </Field>
              <Field label="Correo Electrónico" required>
                <Input type="email" />
              </Field>
              <Field label="Doctor Principal" required>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="d1">Dr. John Smith</SelectItem>
                    <SelectItem value="d2">Dra. Sarah Johnson</SelectItem>
                    <SelectItem value="d3">Dra. Emily Carter</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Fecha de Nacimiento" required>
                <Input type="date" />
              </Field>
              <Field label="Género" required>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m">Masculino</SelectItem>
                    <SelectItem value="f">Femenino</SelectItem>
                    <SelectItem value="o">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Tipo de Sangre" required>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Estado" required>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Activo</SelectItem>
                    <SelectItem value="inactive">Inactivo</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </Section>

          <Section title="Información de Dirección">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Dirección 1">
                <Input />
              </Field>
              <Field label="Dirección 2">
                <Input />
              </Field>
              <Field label="País">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mx">México</SelectItem>
                    <SelectItem value="us">Estados Unidos</SelectItem>
                    <SelectItem value="es">España</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Ciudad">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdmx">Ciudad de México</SelectItem>
                    <SelectItem value="gdl">Guadalajara</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Estado">
                <Select>
                  <SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cdmx">CDMX</SelectItem>
                    <SelectItem value="jal">Jalisco</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Código Postal">
                <Input />
              </Field>
            </div>
          </Section>
        </div>

        <footer className="border-t px-6 py-3 flex justify-end gap-2 bg-white shrink-0">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button className="bg-violet-600 hover:bg-violet-700">Añadir Paciente</Button>
        </footer>
      </div>
    </div>
  );
}




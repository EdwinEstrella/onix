import { X, Upload, Plus, Trash2 } from "lucide-react";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";
import { Textarea } from "../../shared/ui/textarea";
import { Switch } from "../../shared/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../shared/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../../shared/ui/avatar";
import { useState } from "react";

const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 style={{ fontWeight: 600 }} className="text-sm border-b pb-2">{title}</h3>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-slate-600">{label}</Label>
      {children}
    </div>
  );
}

export function AddNewDoctor({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState<string[]>(["Lun", "Mar", "Mié", "Jue", "Vie"]);
  const [reason, setReason] = useState(true);
  const [waiting, setWaiting] = useState(true);

  const toggleDay = (d: string) =>
    setActive((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));

  return (
    <div className="fixed inset-0 z-50 flex">
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="flex-1 bg-black/40 backdrop-blur-sm"
      />
      <div className="w-full max-w-[640px] bg-white h-full flex flex-col shadow-2xl">
        <header className="px-6 h-14 border-b flex items-center justify-between">
          <h2 style={{ fontWeight: 600 }}>Nuevo Doctor</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-md hover:bg-slate-100 flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          {/* Contact info */}
          <Section title="Información de Contacto">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://i.pravatar.cc/64?img=14" />
                <AvatarFallback>UP</AvatarFallback>
              </Avatar>
              <div>
                <Label className="text-xs text-slate-600">Foto de Perfil</Label>
                <div className="flex gap-2 mt-1">
                  <Button size="sm" variant="outline" className="gap-1.5"><Upload className="w-3.5 h-3.5" />Subir</Button>
                  <Button size="sm" variant="ghost" className="text-rose-600 gap-1.5"><Trash2 className="w-3.5 h-3.5" />Eliminar</Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Nombre"><Input defaultValue="Andrew" /></Field>
              <Field label="Usuario"><Input defaultValue="andrew" /></Field>
              <Field label="Teléfono"><Input placeholder="+1 555 ..." /></Field>
              <Field label="Correo Electrónico"><Input type="email" placeholder="correo@dominio.com" /></Field>
              <Field label="Fecha de Nacimiento"><Input type="date" /></Field>
              <Field label="Años de Experiencia"><Input placeholder="10" /></Field>
              <Field label="Departamento">
                <Select><SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardio">Cardiología</SelectItem>
                    <SelectItem value="neuro">Neurología</SelectItem>
                    <SelectItem value="pedi">Pediatría</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Cargo">
                <Select><SelectTrigger><SelectValue placeholder="Cardiólogo" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">Cardiólogo</SelectItem>
                    <SelectItem value="neur">Neurólogo</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Número de Licencia Médica"><Input placeholder="ML00000000" /></Field>
              <Field label="Idiomas"><Input defaultValue="Español, Inglés" /></Field>
              <Field label="Tipo de Sangre">
                <Select><SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Género">
                <Select><SelectTrigger><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m">Masculino</SelectItem>
                    <SelectItem value="f">Femenino</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field label="Biografía">
              <Textarea placeholder="Acerca del doctor" rows={3} />
            </Field>
            <div className="flex items-center justify-between bg-slate-50 rounded-md p-3">
              <Label className="text-sm">Mostrar en sitio web</Label>
              <Switch defaultChecked />
            </div>
          </Section>

          {/* Address */}
          <Section title="Información de Dirección">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Dirección 1"><Input /></Field>
              <Field label="Dirección 2"><Input /></Field>
              <Field label="País"><Input defaultValue="México" /></Field>
              <Field label="Ciudad"><Input /></Field>
              <Field label="Estado"><Input /></Field>
              <Field label="Código Postal"><Input /></Field>
            </div>
          </Section>

          {/* Schedule */}
          <Section title="Horario de Citas">
            <div className="flex flex-wrap gap-2">
              {days.map((d) => (
                <button
                  key={d}
                  onClick={() => toggleDay(d)}
                  className={`px-3 py-1.5 rounded-md text-sm border ${
                    active.includes(d)
                      ? "bg-violet-600 text-white border-violet-600"
                      : "bg-white text-slate-600 border-slate-200"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className="bg-slate-50 rounded-md p-3 space-y-2">
              <div className="grid grid-cols-2 gap-3 items-end">
                <Field label="De"><Input type="time" defaultValue="09:00" /></Field>
                <div className="flex gap-2">
                  <Field label="A"><Input type="time" defaultValue="13:00" /></Field>
                  <Button size="icon" variant="outline" className="mb-0.5"><Plus className="w-4 h-4" /></Button>
                </div>
              </div>
              <Button size="sm" variant="outline">Aplicar a Todos</Button>
            </div>
          </Section>

          {/* Appointment Information */}
          <Section title="Información de Cita">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tipo de Cita">
                <Select><SelectTrigger><SelectValue placeholder="Consulta En Línea" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Consulta En Línea</SelectItem>
                    <SelectItem value="presencial">Presencial</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Reservas Aceptadas con Antelación">
                <div className="flex gap-1">
                  <Input defaultValue="2" className="w-20" />
                  <Select><SelectTrigger><SelectValue placeholder="Días" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="d">Días</SelectItem>
                      <SelectItem value="w">Semanas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Field>
              <Field label="Duración de Cita">
                <div className="flex gap-1">
                  <Input defaultValue="30" />
                  <span className="self-center text-xs text-slate-500">Min</span>
                </div>
              </Field>
              <Field label="Honorario de Consulta"><Input placeholder="$" /></Field>
              <Field label="Máximo de Reservas por Día"><Input defaultValue="20" /></Field>
            </div>
            <div className="flex items-center justify-between bg-slate-50 rounded-md p-3">
              <Label className="text-sm">Mostrar en motivo de reserva</Label>
              <Switch checked={reason} onCheckedChange={setReason} />
            </div>
            <div className="flex items-center justify-between bg-slate-50 rounded-md p-3">
              <Label className="text-sm">Lista de espera</Label>
              <Switch checked={waiting} onCheckedChange={setWaiting} />
            </div>
          </Section>

          {/* Education */}
          <Section title="Información Educativa">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Grado Educativo"><Input /></Field>
              <Field label="Universidad"><Input /></Field>
              <Field label="Desde"><Input type="date" /></Field>
              <Field label="Hasta"><Input type="date" /></Field>
            </div>
            <Button size="sm" variant="outline" className="gap-1.5"><Plus className="w-4 h-4" />Añadir Educación</Button>
          </Section>

          {/* Awards */}
          <Section title="Premios y Reconocimientos">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Nombre"><Input /></Field>
              <Field label="Fecha"><Input type="date" /></Field>
            </div>
            <Button size="sm" variant="outline" className="gap-1.5"><Plus className="w-4 h-4" />Añadir Premio</Button>
          </Section>

          {/* Certifications */}
          <Section title="Certificaciones">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Nombre"><Input /></Field>
              <Field label="Fecha"><Input type="date" /></Field>
            </div>
            <Button size="sm" variant="outline" className="gap-1.5"><Plus className="w-4 h-4" />Añadir Certificación</Button>
          </Section>
        </div>

        <footer className="border-t px-6 py-3 flex justify-end gap-2 bg-white">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button className="bg-violet-600 hover:bg-violet-700">Añadir Doctor</Button>
        </footer>
      </div>
    </div>
  );
}




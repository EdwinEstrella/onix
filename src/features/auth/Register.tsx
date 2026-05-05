import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { SocialButtons } from "./SocialButtons";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";
import { Button } from "../../shared/ui/button";
import { Checkbox } from "../../shared/ui/checkbox";

export function Register({ onLogin }: { onLogin: () => void }) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <AuthLayout>
      <div className="space-y-1 mb-6">
        <h1 className="text-2xl" style={{ fontWeight: 600 }}>Registrarse</h1>
        <p className="text-sm text-slate-500">Por favor ingresa tus datos para crear una cuenta</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-600">Nombre Completo</Label>
          <Input placeholder="Ingresa tu nombre completo" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-600">Correo Electrónico</Label>
          <Input type="email" placeholder="Ingresa tu correo" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-600">Contraseña</Label>
          <div className="relative">
            <Input type={show ? "text" : "password"} placeholder="Ingresa tu contraseña" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-600">Confirmar Contraseña</Label>
          <div className="relative">
            <Input type={show2 ? "text" : "password"} placeholder="Confirma tu contraseña" />
            <button type="button" onClick={() => setShow2(!show2)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {show2 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <label className="flex items-start gap-2 text-sm text-slate-600">
          <Checkbox className="mt-0.5" />
          <span>Acepto los <span className="text-violet-700">Términos y Condiciones</span></span>
        </label>
        <Button onClick={onLogin} className="w-full bg-violet-600 hover:bg-violet-700">Registrarse</Button>
        <SocialButtons />
        <div className="text-center text-sm text-slate-600">
          ¿Ya tienes una cuenta?{" "}
          <button onClick={onLogin} className="text-violet-700" style={{ fontWeight: 600 }}>Iniciar Sesión</button>
        </div>
      </div>
    </AuthLayout>
  );
}


import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { SocialButtons } from "./SocialButtons";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";
import { Button } from "../../shared/ui/button";
import { Checkbox } from "../../shared/ui/checkbox";

export function Login({
  onSignIn,
  onRegister,
  onForgot,
}: {
  onSignIn: () => void;
  onRegister: () => void;
  onForgot: () => void;
}) {
  const [show, setShow] = useState(false);
  return (
    <AuthLayout>
      <div className="space-y-1 mb-6">
        <h1 className="text-2xl" style={{ fontWeight: 600 }}>Iniciar Sesión</h1>
        <p className="text-sm text-slate-500">Por favor ingresa tus datos para acceder a tu cuenta</p>
      </div>
      <div className="space-y-4">
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
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <Checkbox /> Recordarme
          </label>
          <button onClick={onForgot} className="text-sm text-violet-700">¿Olvidaste tu contraseña?</button>
        </div>
        <Button onClick={onSignIn} className="w-full bg-violet-600 hover:bg-violet-700">Iniciar Sesión</Button>
        <SocialButtons />
        <div className="text-center text-sm text-slate-600">
          ¿No tienes una cuenta?{" "}
          <button onClick={onRegister} className="text-violet-700" style={{ fontWeight: 600 }}>Registrarse</button>
        </div>
      </div>
    </AuthLayout>
  );
}


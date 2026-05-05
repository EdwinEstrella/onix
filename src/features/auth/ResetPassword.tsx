import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { Button } from "../../shared/ui/button";
import { Label } from "../../shared/ui/label";

export function ResetPassword({ onSubmit, onBack }: { onSubmit: () => void; onBack: () => void }) {
  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);
  return (
    <AuthLayout>
      <div className="space-y-1 mb-6 text-center">
        <h1 className="text-xl" style={{ fontWeight: 700 }}>Restablecer Contraseña</h1>
        <p className="text-sm text-slate-500">Tu nueva contraseña debe ser diferente a las anteriores.</p>
      </div>
      <div className="space-y-5">
        <div className="space-y-1.5">
          <Label className="text-sm">Contraseña</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type={s1 ? "text" : "password"}
              placeholder="************"
              className="w-full h-9 rounded-md border border-slate-200 pl-9 pr-9 text-sm focus:outline-none focus:border-[#2e37a4]"
            />
            <button type="button" onClick={() => setS1(!s1)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
              {s1 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm">Confirmar Contraseña</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type={s2 ? "text" : "password"}
              placeholder="************"
              className="w-full h-9 rounded-md border border-slate-200 pl-9 pr-9 text-sm focus:outline-none focus:border-[#2e37a4]"
            />
            <button type="button" onClick={() => setS2(!s2)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500">
              {s2 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <Button onClick={onSubmit} className="w-full bg-[#2e37a4] hover:bg-[#252d8a]">Enviar</Button>
        <div className="text-center text-sm text-slate-700">
          Volver a <button onClick={onBack} className="text-[#2e37a4]" style={{ fontWeight: 600 }}>Iniciar Sesión</button>
        </div>
      </div>
    </AuthLayout>
  );
}


import { ArrowLeft } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";
import { Button } from "../../shared/ui/button";

export function ForgotPassword({
  onSubmit,
  onBack,
}: {
  onSubmit: () => void;
  onBack: () => void;
}) {
  return (
    <AuthLayout>
      <div className="space-y-1 mb-6">
        <h1 className="text-2xl" style={{ fontWeight: 600 }}>Olvidé mi Contraseña</h1>
        <p className="text-sm text-slate-500">
          Por favor ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-600">Correo Electrónico</Label>
          <Input type="email" placeholder="Ingresa tu correo" />
        </div>
        <Button onClick={onSubmit} className="w-full bg-violet-600 hover:bg-violet-700">Enviar</Button>
        <button onClick={onBack} className="w-full flex items-center justify-center gap-1.5 text-sm text-slate-600 hover:text-slate-900">
          <ArrowLeft className="w-4 h-4" /> Volver a Iniciar Sesión
        </button>
      </div>
    </AuthLayout>
  );
}


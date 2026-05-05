import { CheckCircle2 } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { Button } from "../../shared/ui/button";

export function EmailSent({ onReset }: { onReset: () => void }) {
  return (
    <AuthLayout>
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl" style={{ fontWeight: 600 }}>¡Correo Enviado!</h1>
          <p className="text-sm text-slate-500">
            Revisa tu correo y sigue las instrucciones para restablecer tu contraseña
          </p>
        </div>
        <Button onClick={onReset} className="w-full bg-violet-600 hover:bg-violet-700">
          Restablecer Contraseña
        </Button>
      </div>
    </AuthLayout>
  );
}


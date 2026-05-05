import { Check } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { Button } from "../../shared/ui/button";

export function Success({ onLogin }: { onLogin: () => void }) {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center text-center space-y-5">
        <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
          <Check className="w-6 h-6 text-white" strokeWidth={3} />
        </div>
        <div className="space-y-1">
          <h1 className="text-xl" style={{ fontWeight: 700 }}>Éxito</h1>
          <p className="text-sm text-slate-500">Tu nueva contraseña ha sido guardada exitosamente.</p>
        </div>
        <Button onClick={onLogin} className="w-full bg-[#2e37a4] hover:bg-[#252d8a]">
          Volver a Iniciar Sesión
        </Button>
      </div>
    </AuthLayout>
  );
}


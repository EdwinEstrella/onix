import { AuthLayout } from "./AuthLayout";
import { OtpInputs } from "./OtpInputs";
import { Button } from "../../shared/ui/button";

export function TwoStepVerification({ onSubmit }: { onSubmit: () => void }) {
  return (
    <AuthLayout>
      <div className="space-y-1 mb-6 text-center">
        <h1 className="text-xl" style={{ fontWeight: 700 }}>Verificación en 2 Pasos</h1>
        <p className="text-sm text-slate-500">
          Por favor ingresa el OTP recibido para confirmar tu cuenta. Se envió un código a{" "}
          <span className="text-slate-900" style={{ fontWeight: 500 }}>******doe@example.com</span>
        </p>
      </div>
      <div className="space-y-5">
        <OtpInputs />
        <div className="flex items-center justify-between text-sm">
          <div className="text-slate-500">
            ¿No recibiste el código? <span className="text-[#2e37a4] underline cursor-pointer">Reenviar Código</span>
          </div>
          <span className="text-rose-600">00:45</span>
        </div>
        <Button onClick={onSubmit} className="w-full bg-[#2e37a4] hover:bg-[#252d8a]">Enviar</Button>
      </div>
    </AuthLayout>
  );
}


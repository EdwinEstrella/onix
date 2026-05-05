import { AuthLayout } from "./AuthLayout";
import { OtpInputs } from "./OtpInputs";
import { Button } from "../../shared/ui/button";

export function EmailOtpVerification({ onVerify }: { onVerify: () => void }) {
  return (
    <AuthLayout>
      <div className="space-y-1 mb-6 text-center">
        <h1 className="text-xl" style={{ fontWeight: 700 }}>Verificación OTP por Correo</h1>
        <p className="text-sm text-slate-500">Enviamos un código a info@example.com</p>
      </div>
      <div className="space-y-5">
        <OtpInputs />
        <div className="flex items-center justify-between text-sm">
          <div className="text-slate-500">
            ¿No recibiste el código? <span className="text-[#2e37a4] underline cursor-pointer">Reenviar Código</span>
          </div>
          <span className="text-rose-600">00:45</span>
        </div>
        <Button onClick={onVerify} className="w-full bg-[#2e37a4] hover:bg-[#252d8a]">
          Verificar y Continuar
        </Button>
      </div>
    </AuthLayout>
  );
}




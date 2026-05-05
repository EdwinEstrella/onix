import { Stethoscope } from "lucide-react";
import type { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full bg-white">
      <div className="hidden lg:flex relative w-1/2 bg-[#2e37a4] overflow-hidden items-center justify-center p-12">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-20 right-10 w-56 h-56 rounded-full bg-white/5" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute top-16 left-1/2 w-3 h-3 rounded-full bg-orange-400" />
        <div className="absolute bottom-32 right-24 w-2 h-2 rounded-full bg-orange-400" />
        <div className="absolute top-1/3 right-12 w-10 h-2.5 rounded-full bg-orange-400/80" />
        <div className="relative z-10 max-w-md text-center text-white space-y-4">
          <div className="aspect-square w-72 mx-auto rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-white/15 flex items-center justify-center">
              <Stethoscope className="w-20 h-20 text-white" />
            </div>
          </div>
          <h2 className="text-2xl leading-snug" style={{ fontWeight: 600 }}>
            Acceso fluido a la salud con una clínica inteligente y moderna
          </h2>
          <p className="text-sm text-white/70">
            Gestiona pacientes, citas y reportes desde un solo lugar diseñado para tu equipo médico.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="px-10 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span className="text-violet-700 text-lg" style={{ fontWeight: 600 }}>Preclinic</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-[448px]">{children}</div>
        </div>
        <div className="text-center text-xs text-slate-400 py-6">
          Derechos de autor @2026 - Preclinic
        </div>
      </div>
    </div>
  );
}




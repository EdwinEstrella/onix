import { Building2, CheckCircle2, CreditCard, Database, Plus, ShieldCheck, UsersRound, Zap } from "lucide-react";
import { Badge } from "../../shared/ui/badge";
import { Button } from "../../shared/ui/button";
import { Card } from "../../shared/ui/card";
import { Progress } from "../../shared/ui/progress";
import { Switch } from "../../shared/ui/switch";

const plans = [
  { name: "Clinic", price: "$149", branches: "1 sede", users: "25 usuarios", storage: "50 GB", modules: 8, current: false },
  { name: "Professional", price: "$349", branches: "5 sedes", users: "150 usuarios", storage: "250 GB", modules: 16, current: true },
  { name: "Enterprise", price: "Custom", branches: "Sedes ilimitadas", users: "Usuarios ilimitados", storage: "1 TB+", modules: 24, current: false },
];

const limits = [
  { label: "Sucursales", used: 3, total: 5, value: 60 },
  { label: "Usuarios", used: 68, total: 150, value: 45 },
  { label: "Almacenamiento", used: 92, total: 250, value: 37 },
  { label: "Modulos activos", used: 14, total: 16, value: 88 },
];

const modules = [
  "Pacientes",
  "Agenda",
  "Caja",
  "Facturacion",
  "Historia clinica",
  "Inventario",
  "Farmacia",
  "Reportes",
  "Auditoria",
  "Telemedicina",
];

export function Plans() {
  return (
    <div className="p-6 space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 style={{ fontWeight: 600 }} className="text-xl">Planes y Limites</h1>
          <p className="text-xs text-slate-500">Configura que puede usar cada hospital segun su plan contratado.</p>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700 gap-1.5"><Plus className="w-4 h-4" />Nuevo Plan</Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card key={plan.name} className={`p-5 ${plan.current ? "border-violet-300 ring-1 ring-violet-200" : ""}`}>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h2 style={{ fontWeight: 600 }} className="text-lg">{plan.name}</h2>
                  {plan.current && <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100">Actual</Badge>}
                </div>
                <div className="text-xs text-slate-500">Plan mensual por hospital</div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <span style={{ fontWeight: 600 }} className="text-3xl">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-xs text-slate-500"> / mes</span>}
            </div>
            <div className="space-y-2 mt-4 text-sm">
              <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-violet-600" />{plan.branches}</div>
              <div className="flex items-center gap-2"><UsersRound className="w-4 h-4 text-violet-600" />{plan.users}</div>
              <div className="flex items-center gap-2"><Database className="w-4 h-4 text-violet-600" />{plan.storage}</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-violet-600" />{plan.modules} modulos</div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-4">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-violet-700" />
            <h2 style={{ fontWeight: 600 }} className="text-sm">Uso del plan actual</h2>
          </div>
          <div className="space-y-4">
            {limits.map((limit) => (
              <div key={limit.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{limit.label}</span>
                  <span className="text-slate-500">{limit.used} / {limit.total}</span>
                </div>
                <Progress value={limit.value} className="bg-violet-100 [&>div]:bg-violet-600" />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-0">
          <div className="px-5 py-3 border-b">
            <h2 style={{ fontWeight: 600 }} className="text-sm">Modulos incluidos</h2>
            <p className="text-xs text-slate-500">Estos switches representan activacion por plan y por hospital.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {modules.map((module, index) => (
              <div key={module} className="flex items-center justify-between px-5 py-3 border-b md:odd:border-r">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${index < 8 ? "text-emerald-600" : "text-slate-300"}`} />
                  <span className="text-sm">{module}</span>
                </div>
                <Switch defaultChecked={index < 8} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

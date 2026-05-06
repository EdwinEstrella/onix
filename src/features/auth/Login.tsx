import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { SocialButtons } from "./SocialButtons";
import { Input } from "../../shared/ui/input";
import { Label } from "../../shared/ui/label";
import { Button } from "../../shared/ui/button";
import { Checkbox } from "../../shared/ui/checkbox";
import { useAuth } from "../../shared/backend/AuthProvider";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isConfigured, signIn } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!isConfigured) {
      setError("Supabase no esta configurado. Revisa VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY.");
      return;
    }

    if (!email || !password) {
      setError("Ingresa correo y contrasena para continuar.");
      return;
    }

    setIsSubmitting(true);
    try {
      await signIn(email, password);
      onSignIn();
    } catch (authError) {
      const message = authError instanceof Error ? authError.message : "No se pudo iniciar sesion.";
      setError(message === "Invalid login credentials" ? "Correo o contrasena incorrectos." : message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-1 mb-6">
        <h1 className="text-2xl" style={{ fontWeight: 600 }}>Iniciar Sesión</h1>
        <p className="text-sm text-slate-500">Por favor ingresa tus datos para acceder a tu cuenta</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-600">Correo Electrónico</Label>
          <Input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs text-slate-600">Contraseña</Label>
          <div className="relative">
            <Input
              type={show ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              disabled={isSubmitting}
            />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-slate-600">
            <Checkbox /> Recordarme
          </label>
          <button type="button" onClick={onForgot} className="text-sm text-violet-700">¿Olvidaste tu contraseña?</button>
        </div>
        {error && <div className="rounded-md bg-rose-50 px-3 py-2 text-xs text-rose-700">{error}</div>}
        <Button type="submit" disabled={isSubmitting} className="w-full bg-violet-600 hover:bg-violet-700">
          {isSubmitting ? "Iniciando..." : "Iniciar Sesión"}
        </Button>
        <SocialButtons />
        <div className="text-center text-sm text-slate-600">
          ¿No tienes una cuenta?{" "}
          <button type="button" onClick={onRegister} className="text-violet-700" style={{ fontWeight: 600 }}>Registrarse</button>
        </div>
      </form>
    </AuthLayout>
  );
}

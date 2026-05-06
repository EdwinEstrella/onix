import { useState } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { SocialButtons } from "./SocialButtons";
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
      setError("Supabase no está configurado. Revisa VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY.");
      return;
    }

    if (!email || !password) {
      setError("Ingresa correo y contraseña para continuar.");
      return;
    }

    setIsSubmitting(true);
    try {
      await signIn(email, password);
      onSignIn();
    } catch (authError) {
      const message = authError instanceof Error ? authError.message : "No se pudo iniciar sesión.";
      if (message === "Invalid login credentials") {
        setError("Correo o contraseña incorrectos.");
      } else if (message === "Email not confirmed") {
        setError("El correo no esta confirmado. Desactiva la confirmacion de email en Supabase Auth para permitir acceso inmediato.");
      } else {
        setError(message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[20px]">
        <div className="flex w-full flex-col gap-[4px] text-center">
          <h1 className="text-[20px] font-bold leading-[24px] text-[#0a1b39]">Sign In</h1>
          <p className="text-[14px] leading-[21px] text-[#6c7688] opacity-70">
            Please enter below details to access the dashboard
          </p>
        </div>

        <div className="flex w-full flex-col gap-[20px]">
          <div className="flex w-full flex-col gap-[4px]">
            <label className="text-[14px] font-medium leading-[21px] text-[#0a1b39]">Email Address</label>
            <div className="flex h-[36px] items-center gap-[8px] rounded-[6px] border border-[#e7e8eb] bg-white px-[12px] py-[6px] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
              <User className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Email Address"
                autoComplete="email"
                disabled={isSubmitting}
                className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[14px] leading-[21px] text-[#0a1b39] outline-none placeholder:text-[#9da4b0] disabled:opacity-60"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-[4px]">
            <label className="text-[14px] font-medium leading-[21px] text-[#0a1b39]">Password</label>
            <div className="flex h-[36px] items-center gap-[8px] rounded-[6px] border border-[#e7e8eb] bg-white px-[12px] py-[6px] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
              <Lock className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />
              <input
                type={show ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="************"
                autoComplete="current-password"
                disabled={isSubmitting}
                className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[14px] leading-[21px] text-[#0a1b39] outline-none placeholder:text-[#9da4b0] disabled:opacity-60"
              />
              <button type="button" onClick={() => setShow(!show)} className="text-[#0a1b39]" aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}>
                {show ? <Eye className="size-[14px]" strokeWidth={1.75} /> : <EyeOff className="size-[14px]" strokeWidth={1.75} />}
              </button>
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-[10px]">
            <label className="flex items-center gap-[8px] text-[14px] leading-[21px] text-[#0a1b39]">
              <span className="flex size-[16px] items-center justify-center rounded-[3px] bg-[#2e37a4] text-[11px] leading-none text-white">✓</span>
              Remember Me
            </label>
            <button type="button" onClick={onForgot} className="text-right text-[14px] leading-[21px] text-[#ef1e1e]">
              Forgot password?
            </button>
          </div>

          {error && <div className="rounded-[6px] bg-[#fff1f1] px-[12px] py-[8px] text-[13px] leading-[19.5px] text-[#ef1e1e]">{error}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#2e37a4] px-[12px] py-[8px] text-[14px] font-medium leading-[21px] text-white hover:bg-[#252d8a] disabled:opacity-60"
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>

          <SocialButtons />

          <div className="text-center text-[14px] leading-[21px] text-[#0a1b39]">
            Don’t have an account yet?{" "}
            <button type="button" onClick={onRegister} className="text-[#2e37a4]">
              Register
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

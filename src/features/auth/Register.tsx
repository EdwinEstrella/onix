import { useState } from "react";
import { Check, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { SocialButtons } from "./SocialButtons";
import { useAuth } from "../../shared/backend/AuthProvider";

function TextInput({
  label,
  placeholder,
  type = "text",
  icon,
  value,
  onChange,
  autoComplete,
  disabled,
  right,
}: {
  label: string;
  placeholder: string;
  type?: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  disabled?: boolean;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <label className="text-[14px] font-medium leading-[21px] text-[#0a1b39]">{label}</label>
      <div className="flex h-[36px] items-center gap-[8px] rounded-[6px] border border-[#e7e8eb] bg-white px-[12px] py-[6px] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
        {icon}
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[14px] leading-[21px] text-[#0a1b39] outline-none placeholder:text-[#9da4b0] disabled:opacity-60"
        />
        {right}
      </div>
    </div>
  );
}

export function Register({
  onRegistered,
  onLogin,
}: {
  onRegistered: () => void;
  onLogin: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { isConfigured, signUp } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const normalizedName = fullName.trim();
    const normalizedEmail = email.trim();

    if (!isConfigured) {
      setError("Supabase no esta configurado. Revisa VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY.");
      return;
    }

    if (!normalizedName || !normalizedEmail || !password || !confirmPassword) {
      setError("Completa todos los campos para continuar.");
      return;
    }

    if (password.length < 6) {
      setError("La contrasena debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contrasenas no coinciden.");
      return;
    }

    setIsSubmitting(true);
    try {
      await signUp(normalizedEmail, password, normalizedName);
      onRegistered();
    } catch (authError) {
      const message = authError instanceof Error ? authError.message : "No se pudo crear la cuenta.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[20px]">
        <div className="flex w-full flex-col gap-[4px] text-center">
          <h1 className="text-[20px] font-bold leading-[24px] text-[#0a1b39]">Register</h1>
          <p className="text-[14px] leading-[21px] text-[#6c7688] opacity-70">
            Please enter your details to create account
          </p>
        </div>

        <div className="flex w-full flex-col gap-[20px]">
          <TextInput
            label="Full Name"
            placeholder="Enter Name"
            value={fullName}
            onChange={setFullName}
            autoComplete="name"
            disabled={isSubmitting}
            icon={<User className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />}
          />

          <TextInput
            label="Email Address"
            placeholder="Enter Email Address"
            type="email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
            disabled={isSubmitting}
            icon={<Mail className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />}
          />

          <TextInput
            label="Password"
            placeholder="************"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={setPassword}
            autoComplete="new-password"
            disabled={isSubmitting}
            icon={<Lock className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />}
            right={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#0a1b39]"
                aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
              >
                {showPassword ? <Eye className="size-[14px]" strokeWidth={1.75} /> : <EyeOff className="size-[14px]" strokeWidth={1.75} />}
              </button>
            }
          />

          <TextInput
            label="Confirm Password"
            placeholder="************"
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={setConfirmPassword}
            autoComplete="new-password"
            disabled={isSubmitting}
            icon={<Lock className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />}
            right={
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="text-[#0a1b39]"
                aria-label={showConfirm ? "Ocultar confirmacion" : "Mostrar confirmacion"}
              >
                {showConfirm ? <Eye className="size-[14px]" strokeWidth={1.75} /> : <EyeOff className="size-[14px]" strokeWidth={1.75} />}
              </button>
            }
          />

          <label className="flex items-center gap-[8px] text-[14px] leading-[21px]">
            <span className="flex size-[16px] items-center justify-center rounded-[3px] bg-[#2e37a4] text-white">
              <Check className="size-[11px]" strokeWidth={2} />
            </span>
            <span className="text-[#6c7688]">
              I agree to the{" "}
              <span className="text-[#2e37a4] underline">Terms of Service</span>
              <span className="text-[#2e37a4]"> & </span>
              <span className="text-[#2e37a4] underline">Privacy Policy</span>
            </span>
          </label>

          {error && <div className="rounded-[6px] bg-[#fff1f1] px-[12px] py-[8px] text-[13px] leading-[19.5px] text-[#ef1e1e]">{error}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#2e37a4] px-[12px] py-[8px] text-[14px] font-medium leading-[21px] text-white hover:bg-[#252d8a] disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Register"}
          </button>

          <SocialButtons />

          <div className="text-center text-[14px] leading-[21px] text-[#0a1b39]">
            Already have an account yet?{" "}
            <button type="button" onClick={onLogin} className="text-[#2e37a4]">
              Login
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { getSupabaseClient, isSupabaseConfigured } from "../../shared/backend/supabase";

export function ForgotPassword({
  onSubmit,
  onBack,
}: {
  onSubmit: () => void;
  onBack: () => void;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email) {
      setError("Enter your email address to continue.");
      return;
    }

    if (!isSupabaseConfigured()) {
      setError("Supabase no esta configurado. Revisa las variables de entorno.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: resetError } = await getSupabaseClient().auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin,
      });

      if (resetError) {
        throw resetError;
      }

      onSubmit();
    } catch (resetError) {
      const message = resetError instanceof Error ? resetError.message : "No se pudo enviar el correo de recuperacion.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[20px]">
        <div className="flex w-full flex-col gap-[4px] text-center">
          <h1 className="text-[20px] font-bold leading-[24px] text-[#0a1b39]">Forgot Password</h1>
          <p className="text-[14px] leading-[21px] text-[#6c7688] opacity-70">
            No worries, we'll send you reset instructions
          </p>
        </div>

        <div className="flex w-full flex-col gap-[20px]">
          <div className="flex w-full flex-col gap-[4px]">
            <label className="text-[14px] font-medium leading-[21px] text-[#0a1b39]">Email Address</label>
            <div className="flex h-[36px] items-center gap-[8px] rounded-[6px] border border-[#e7e8eb] bg-white px-[12px] py-[6px] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
              <Mail className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />
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

          {error && <div className="rounded-[6px] bg-[#fff1f1] px-[12px] py-[8px] text-[13px] leading-[19.5px] text-[#ef1e1e]">{error}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#2e37a4] px-[12px] py-[8px] text-[14px] font-medium leading-[21px] text-white hover:bg-[#252d8a] disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          <div className="text-center text-[14px] leading-[21px] text-[#0a1b39]">
            Return to{" "}
            <button type="button" onClick={onBack} className="text-[#2e37a4]">
              Login
            </button>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import resetPasswordIllustration from "./assets/reset-password-illustration.png";

function PasswordInput({
  label,
  value,
  visible,
  onChange,
  onToggle,
}: {
  label: string;
  value: string;
  visible: boolean;
  onChange: (value: string) => void;
  onToggle: () => void;
}) {
  return (
    <div className="flex w-full flex-col gap-[4px]">
      <label className="text-[14px] font-medium leading-[21px] text-[#0a1b39]">{label}</label>
      <div className="flex h-[36px] items-center gap-[8px] rounded-[6px] border border-[#e7e8eb] bg-white px-[12px] py-[6px] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
        <Lock className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="************"
          autoComplete="new-password"
          className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[14px] leading-[21px] text-[#0a1b39] outline-none placeholder:text-[#9da4b0]"
        />
        <button type="button" onClick={onToggle} className="text-[#0a1b39]" aria-label={visible ? "Hide password" : "Show password"}>
          {visible ? <Eye className="size-[14px]" strokeWidth={1.75} /> : <EyeOff className="size-[14px]" strokeWidth={1.75} />}
        </button>
      </div>
    </div>
  );
}

export function ResetPassword({
  onSubmit,
  onBack,
}: {
  onSubmit: () => void;
  onBack: () => void;
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!password || !confirmPassword) {
      setError("Enter and confirm your new password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    onSubmit();
  };

  return (
    <AuthLayout illustrationSrc={resetPasswordIllustration} illustrationAlt="Reset password illustration">
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-[20px]">
        <div className="flex w-full flex-col gap-[4px] text-center">
          <h1 className="text-[20px] font-bold leading-[24px] text-[#0a1b39]">Reset Password</h1>
          <p className="text-[14px] leading-[21px] text-[#6c7688] opacity-70">
            Your new password must be different from previous used passwords.
          </p>
        </div>

        <div className="flex w-full flex-col gap-[20px]">
          <PasswordInput
            label="Password"
            value={password}
            visible={showPassword}
            onChange={setPassword}
            onToggle={() => setShowPassword(!showPassword)}
          />

          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            visible={showConfirm}
            onChange={setConfirmPassword}
            onToggle={() => setShowConfirm(!showConfirm)}
          />

          {error && <div className="rounded-[6px] bg-[#fff1f1] px-[12px] py-[8px] text-[13px] leading-[19.5px] text-[#ef1e1e]">{error}</div>}

          <button
            type="submit"
            className="flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#2e37a4] px-[12px] py-[8px] text-[14px] font-medium leading-[21px] text-white hover:bg-[#252d8a]"
          >
            Submit
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

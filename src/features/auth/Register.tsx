import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { SocialButtons } from "./SocialButtons";

function TextInput({
  label,
  placeholder,
  type = "text",
  icon,
  value,
  onChange,
  right,
}: {
  label: string;
  placeholder: string;
  type?: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
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
          className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-[14px] leading-[21px] text-[#0a1b39] outline-none placeholder:text-[#9da4b0]"
        />
        {right}
      </div>
    </div>
  );
}

export function Register({ onLogin }: { onLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <AuthLayout>
      <form className="flex w-full flex-col gap-[20px]">
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
            icon={<User className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />}
          />

          <TextInput
            label="Email Address"
            placeholder="Enter Email Address"
            type="email"
            value={email}
            onChange={setEmail}
            icon={<Mail className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />}
          />

          <TextInput
            label="Password"
            placeholder="************"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={setPassword}
            icon={<Lock className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />}
            right={
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-[#0a1b39]">
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
            icon={<Lock className="size-[14px] shrink-0 text-[#0a1b39]" strokeWidth={1.75} />}
            right={
              <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="text-[#0a1b39]">
                {showConfirm ? <Eye className="size-[14px]" strokeWidth={1.75} /> : <EyeOff className="size-[14px]" strokeWidth={1.75} />}
              </button>
            }
          />

          <label className="flex items-center gap-[8px] text-[14px] leading-[21px]">
            <span className="flex size-[16px] items-center justify-center rounded-[3px] bg-[#2e37a4] text-[11px] leading-none text-white">✓</span>
            <span className="text-[#6c7688]">
              I agree to the{" "}
              <span className="text-[#2e37a4] underline">Terms of Service</span>
              <span className="text-[#2e37a4]"> & </span>
              <span className="text-[#2e37a4] underline">Privacy Policy</span>
            </span>
          </label>

          <button
            type="button"
            onClick={onLogin}
            className="flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#2e37a4] px-[12px] py-[8px] text-[14px] font-medium leading-[21px] text-white hover:bg-[#252d8a]"
          >
            Register
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

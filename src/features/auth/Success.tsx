import { Check } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import successIllustration from "./assets/success-illustration.png";

export function Success({ onLogin }: { onLogin: () => void }) {
  return (
    <AuthLayout illustrationSrc={successIllustration} illustrationAlt="Success illustration">
      <div className="flex w-full flex-col items-center gap-[20px] text-center">
        <div className="flex size-[48px] items-center justify-center rounded-full bg-[#27ae60] p-[12px]">
          <Check className="size-[24px] text-white" strokeWidth={2.5} />
        </div>

        <div className="flex w-full flex-col gap-[4px]">
          <h1 className="text-[20px] font-bold leading-[24px] text-[#0a1b39]">Success</h1>
          <p className="text-[14px] leading-[21px] text-[#6c7688] opacity-70">
            Your new password has been successfully saved.
          </p>
        </div>

        <button
          type="button"
          onClick={onLogin}
          className="flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#2e37a4] px-[12px] py-[8px] text-[14px] font-medium leading-[21px] text-white hover:bg-[#252d8a]"
        >
          Back to Login
        </button>
      </div>
    </AuthLayout>
  );
}

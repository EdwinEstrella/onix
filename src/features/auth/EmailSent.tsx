import { Check } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import emailSentIllustration from "./assets/email-sent-illustration.png";

export function EmailSent({ onReset }: { onReset: () => void }) {
  return (
    <AuthLayout illustrationSrc={emailSentIllustration} illustrationAlt="Email sent illustration">
      <div className="flex w-full flex-col items-center gap-[20px] text-center">
        <div className="flex size-[48px] items-center justify-center rounded-full bg-[#27ae60] p-[12px]">
          <Check className="size-[24px] text-white" strokeWidth={2.5} />
        </div>

        <div className="flex w-full flex-col gap-[4px]">
          <h1 className="text-[20px] font-bold leading-[24px] text-[#0a1b39]">Email Sent!</h1>
          <p className="text-[14px] leading-[21px] text-[#6c7688] opacity-70">
            Check your email &amp; change your password
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#2e37a4] px-[12px] py-[8px] text-[14px] font-medium leading-[21px] text-white hover:bg-[#252d8a]"
        >
          Reset Password
        </button>
      </div>
    </AuthLayout>
  );
}

import { useRef, useState } from "react";
import { AuthLayout } from "./AuthLayout";
import emailVerificationIllustration from "./assets/email-verification-illustration.png";

export function EmailOtpVerification({ onVerify }: { onVerify: () => void }) {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleCodeChange = (index: number, value: string) => {
    const nextValue = value.replace(/\D/g, "").slice(-1);
    const nextCode = [...code];
    nextCode[index] = nextValue;
    setCode(nextCode);

    if (nextValue && index < inputs.length - 1) {
      inputs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && !code[index] && index > 0) {
      inputs[index - 1].current?.focus();
    }
  };

  return (
    <AuthLayout illustrationSrc={emailVerificationIllustration} illustrationAlt="Email verification illustration">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onVerify();
        }}
        className="flex w-full flex-col gap-[20px]"
      >
        <div className="flex w-full flex-col gap-[4px] text-center">
          <h1 className="text-[20px] font-bold leading-[24px] text-[#0a1b39]">Email OTP Verification</h1>
          <p className="text-[14px] leading-[21px] text-[#6c7688] opacity-70">
            We sent a code to info@example.com
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-[20px]">
          <div className="flex w-full items-center justify-center">
            <div className="flex items-center gap-[16px]">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={inputs[index]}
                  value={digit}
                  onChange={(event) => handleCodeChange(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event.key)}
                  maxLength={1}
                  inputMode="numeric"
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  className="size-[60px] rounded-[5px] border border-[#e7e8eb] bg-white text-center text-[20px] font-medium leading-[24px] text-[#0a1b39] outline-none focus:border-[#2e37a4]"
                />
              ))}
            </div>
          </div>

          <div className="flex w-[288px] items-center gap-[16px] whitespace-nowrap text-[14px] leading-[21px]">
            <div className="flex min-w-0 flex-1 items-center gap-[4px] text-[#6c7688]">
              <span>Didn't receive code.</span>
              <button type="button" className="text-[#2e37a4] underline">
                Resend Code
              </button>
            </div>
            <span className="text-[#ef1e1e]">00:45</span>
          </div>
        </div>

        <button
          type="submit"
          className="flex h-[38px] w-full items-center justify-center rounded-[6px] bg-[#2e37a4] px-[12px] py-[8px] text-[14px] font-medium leading-[21px] text-white hover:bg-[#252d8a]"
        >
          Verify &amp; Proceed
        </button>
      </form>
    </AuthLayout>
  );
}

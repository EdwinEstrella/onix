import { useRef } from "react";

export function OtpInputs() {
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  return (
    <div className="flex gap-4 justify-center">
      {refs.map((r, i) => (
        <input
          key={i}
          ref={r}
          maxLength={1}
          inputMode="numeric"
          onChange={(e) => {
            if (e.target.value && i < refs.length - 1) refs[i + 1].current?.focus();
          }}
          className="w-[60px] h-[60px] rounded-md border border-slate-200 text-center text-lg focus:border-[#2e37a4] focus:outline-none"
        />
      ))}
    </div>
  );
}


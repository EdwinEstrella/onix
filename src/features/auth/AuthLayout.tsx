import type { ReactNode } from "react";
import svgPaths from "../../generated/figma-imports/FormSection-1/svg-ksvctq499t";
import backgroundComplete from "./assets/login-background-complete.svg";
import backgroundSimple from "./assets/login-background-simple.svg";
import shadow from "./assets/login-shadow.svg";
import loginCard from "./assets/login-card.svg";
import character from "./assets/login-character.svg";

function PreclinicLogo() {
  return (
    <div className="h-[28px] relative shrink-0 w-[131.384px]" data-name="Logo Container">
      <div className="absolute inset-[-2.47%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.384 29.3837">
          <g id="Logo Container">
            <g id="Icon">
              <path d={svgPaths.p2d9c4300} fill="var(--fill-0, #2E37A4)" />
              <path d={svgPaths.p2c51ae00} fill="var(--fill-0, #2E37A4)" />
              <path d={svgPaths.p32b43700} fill="var(--fill-0, #00D3C7)" />
              <path d={svgPaths.p3dee7580} fill="var(--fill-0, white)" />
            </g>
            <g id="Preclinic">
              <path d={svgPaths.p2a2ff100} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p653e800} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p1d4e7c00} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p23ce0c40} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p2d79e580} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.pae86680} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p2f3b6b40} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p22b0400} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p2a706380} fill="var(--fill-0, #030303)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function LoginIllustration() {
  return (
    <div className="relative h-[450px] w-[600px]">
      <img
        alt=""
        src={backgroundComplete}
        className="absolute left-0 top-0 h-full w-full"
      />
      <img
        alt=""
        src={backgroundSimple}
        className="absolute left-[112px] top-[64px] h-[278px] w-[444px]"
      />
      <img
        alt=""
        src={shadow}
        className="absolute left-[112px] top-[420px] h-[28px] w-[466px]"
      />
      <img
        alt=""
        src={loginCard}
        className="absolute left-[196px] top-[80px] h-[293px] w-[191px]"
      />
      <img
        alt=""
        src={character}
        className="absolute left-[342px] top-[58px] h-[374px] w-[132px]"
      />
    </div>
  );
}

export function AuthLayout({
  children,
  illustrationSrc,
  illustrationAlt = "",
}: {
  children: ReactNode;
  illustrationSrc?: string;
  illustrationAlt?: string;
}) {
  return (
    <div className="flex h-full w-full overflow-hidden bg-[#f5f6f8] font-['Inter',sans-serif]">
      <div className="relative hidden h-full w-1/2 items-center justify-center overflow-hidden bg-[#ecedf7] lg:flex">
        {illustrationSrc ? (
          <img
            alt={illustrationAlt}
            src={illustrationSrc}
            className="h-auto w-[72%] max-w-[600px] min-w-[460px]"
          />
        ) : (
          <div className="w-[72%] max-w-[600px] min-w-[460px]">
            <LoginIllustration />
          </div>
        )}
      </div>

      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-white px-6 lg:w-1/2">
        <div className="flex w-full max-w-[448px] flex-col items-center gap-[40px]">
          <PreclinicLogo />
          <div className="w-full rounded-[20px] border border-[#e7e8eb] bg-white p-[40px] shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)]">
            {children}
          </div>
        </div>
        <p className="absolute bottom-[45px] whitespace-nowrap text-center text-[14px] leading-[21px] text-[#0a1b39]">
          Copyright @2025 - Preclinic
        </p>
      </div>
    </div>
  );
}

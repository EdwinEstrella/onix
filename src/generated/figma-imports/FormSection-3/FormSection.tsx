import svgPaths from "./svg-bm8j6wt9i5";

function LogoContainer() {
  return (
    <div className="h-[28px] relative shrink-0 w-[131.384px]" data-name="Logo Container">
      <div className="absolute inset-[-2.47%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.384 29.3837">
          <g id="Logo Container">
            <g id="Icon">
              <path d={svgPaths.p2d9c4300} fill="var(--fill-0, #2E37A4)" id="Rectangle 28" />
              <path d={svgPaths.p21337700} fill="var(--fill-0, #2E37A4)" id="Rectangle 27" />
              <path d={svgPaths.p32b43700} fill="var(--fill-0, #00D3C7)" id="Rectangle 30" />
              <path d={svgPaths.p3dee7580} fill="var(--fill-0, white)" id="Rectangle 30_2" />
            </g>
            <g id="Preclinic">
              <path d={svgPaths.pf1aa300} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p33c70df0} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.pbaf5d00} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p10c11f00} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p322fe070} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p2ef599f0} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p2a12beb2} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p1c655980} fill="var(--fill-0, #030303)" />
              <path d={svgPaths.p72d100} fill="var(--fill-0, #030303)" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckContainer() {
  return (
    <div className="bg-[#27ae60] content-stretch flex items-center p-[12px] relative rounded-[50px] shrink-0" data-name="Check Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Check Icon">
        <div className="absolute inset-[29.17%_16.67%_29.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-10%_-6.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
              <path d="M1 6L6 11L16 1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-center w-full" data-name="Text Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a1b39] text-[20px] w-full">
        <p className="leading-[24px]">Email Sent!</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] opacity-70 relative shrink-0 text-[#6c7688] text-[14px] w-full">{`Check your email & change your password`}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button">
      <div className="bg-[#2e37a4] h-[38px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Reset Password</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button Container">
      <Button />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Content Container">
      <CheckContainer />
      <TextContainer />
      <ButtonContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <ContentContainer />
      </div>
    </div>
  );
}

function LoginContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 rounded-[6px] top-[calc(50%+0.5px)] w-[448px]" data-name="Login Container">
      <LogoContainer />
      <Container />
    </div>
  );
}

export default function FormSection() {
  return (
    <div className="bg-white relative size-full" data-name="Form Section">
      <LoginContainer />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[calc(50%+0.5px)] not-italic text-[#0a1b39] text-[14px] text-center top-[955px] whitespace-nowrap">Copyright @2025 - Preclinic</p>
    </div>
  );
}
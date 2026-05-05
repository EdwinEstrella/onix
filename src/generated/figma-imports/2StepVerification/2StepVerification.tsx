import svgPaths from "./svg-4gbryh17fm";
import imgImg from "./26831184183db0fa75a765cd0fd0ea9443c6185a.png";
import { imgDecoration } from "./svg-c5249";

function Decoration() {
  return (
    <div className="h-[1061.155px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-98.057px_-263.293px] mask-size-[720px_1000px] relative w-[1158.875px]" style={{ maskImage: `url('${imgDecoration}')` }} data-name="decoration">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1158.87 1061.15">
        <g id="decoration">
          <foreignObject height="1081.15" width="1079.55" x="-10" y="-10">
            <div style={{ backdropFilter: "blur(5px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p2d4d0640} id="circle 1" stroke="url(#paint0_radial_6_31423)" strokeOpacity="0.7" strokeWidth="80" data-figma-bg-blur-radius="10" />
          <ellipse cx="172.74" cy="393.613" fill="var(--fill-0, #E04F16)" id="dot 1" rx="98.7954" ry="98.9455" />
          <foreignObject height="879.235" width="877.932" x="90.8068" y="88.8281">
            <div style={{ backdropFilter: "blur(5px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p32982400} id="circle 2" stroke="url(#paint1_radial_6_31423)" strokeOpacity="0.65" strokeWidth="60" data-figma-bg-blur-radius="10" />
          <path d={svgPaths.p40d0b80} id="circle 3" stroke="url(#paint2_radial_6_31423)" strokeOpacity="0.81" strokeWidth="80" />
          <ellipse cx="1133.44" cy="75.0571" fill="url(#paint3_linear_6_31423)" id="Ellipse 8" rx="25.4325" ry="25.4711" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(14.8999 706.331 -705.26 14.9225 514.873 553.79)" gradientUnits="userSpaceOnUse" id="paint0_radial_6_31423" r="1">
            <stop offset="0.654764" stopColor="#2E37A4" />
            <stop offset="1" stopColor="#2E37A4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.0647 571.928 -571.061 12.083 517.708 547.241)" gradientUnits="userSpaceOnUse" id="paint1_radial_6_31423" r="1">
            <stop offset="0.654764" stopColor="#E2F6FC" stopOpacity="0.36" />
            <stop offset="1" stopColor="#2E37A4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(9.65173 457.543 -456.849 9.66639 520.121 543.473)" gradientUnits="userSpaceOnUse" id="paint2_radial_6_31423" r="1">
            <stop offset="0.654764" stopColor="#E2F6FC" stopOpacity="0.36" />
            <stop offset="1" stopColor="#48B7D6" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_6_31423" x1="1158.87" x2="1107.93" y1="100.528" y2="49.6633">
            <stop stopColor="#FFA679" />
            <stop offset="0.750282" stopColor="#FA8443" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MaskImage() {
  return (
    <div className="absolute contents left-0 top-0" data-name="mask image">
      <div className="absolute flex h-[1061.155px] items-center justify-center left-[98.06px] top-[263.29px] w-[1158.875px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Decoration />
        </div>
      </div>
      <div className="absolute flex h-[880px] items-center justify-center left-[48px] top-[60px] w-[624px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="backdrop-blur-[13px] bg-[rgba(6,174,212,0.1)] border border-solid border-white h-[880px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-48px_-60px] mask-size-[720px_1000px] rounded-[6px] w-[624px]" style={{ maskImage: `url('${imgDecoration}')` }} data-name="Rectangle glass" />
        </div>
      </div>
      <div className="absolute h-[510.602px] left-[94px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-94px_-429px] mask-size-[720px_1000px] top-[429px] w-[504.468px]" style={{ maskImage: `url('${imgDecoration}')` }} data-name="img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-37.82%] max-w-none top-0 w-[151.86%]" src={imgImg} />
        </div>
      </div>
    </div>
  );
}

function SideRight() {
  return (
    <div className="absolute contents left-0 top-0" data-name="side right">
      <div className="absolute flex h-[1000px] items-center justify-center left-0 top-0 w-[720px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#2e37a4] h-[1000px] w-[720px]" data-name="Overlay" />
        </div>
      </div>
      <MaskImage />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start leading-[0] left-[122px] not-italic text-center top-[101px] w-[476px]" data-name="Text Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-white w-full">
        <p className="leading-[43.2px]">Seamless healthcare access with smart, modern clinic</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#f5f6f8] text-[14px] w-full">
        <p className="leading-[21px]">Experience efficient, secure, and user-friendly healthcare management designed for modern clinics and growing practices.</p>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Image Container">
      <SideRight />
      <TextContainer />
    </div>
  );
}

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

function SignInTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-center w-full" data-name="Sign In Text Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0a1b39] text-[20px] w-full">
        <p className="leading-[24px]">2 Step Verification</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal opacity-70 relative shrink-0 text-[#6c7688] text-[0px] w-full">
        <span className="leading-[21px] text-[14px]">{`Please enter the OTP received to confirm your account ownership. A code has been send to `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] text-[#0a1b39] text-[14px]">******doe@example.com</span>
      </p>
    </div>
  );
}

function OtpInputGroup1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="OTP Input Group">
      <div className="relative rounded-[5px] shrink-0 size-[60px]" data-name="OTP Input">
        <div aria-hidden="true" className="absolute border border-[#2e37a4] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="relative rounded-[5px] shrink-0 size-[60px]" data-name="OTP Input">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="relative rounded-[5px] shrink-0 size-[60px]" data-name="OTP Input">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <div className="relative rounded-[5px] shrink-0 size-[60px]" data-name="OTP Input">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
    </div>
  );
}

function OtpInputGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="OTP Input Group">
      <OtpInputGroup1 />
    </div>
  );
}

function OtpInputContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="OTP Input Container">
      <OtpInputGroup />
    </div>
  );
}

function ResendTextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative" data-name="Resend Text Container">
      <p className="relative shrink-0 text-[#6c7688]">{`Didn't receive code.`}</p>
      <p className="[text-decoration-skip-ink:none] decoration-solid relative shrink-0 text-[#2e37a4] underline">Resend Code</p>
    </div>
  );
}

function ResendContainer() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-center leading-[21px] not-italic relative shrink-0 text-[14px] w-[288px] whitespace-nowrap" data-name="Resend Container">
      <ResendTextContainer />
      <p className="relative shrink-0 text-[#ef1e1e]">00:45</p>
    </div>
  );
}

function OtpContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="OTP Container">
      <OtpInputContainer />
      <ResendContainer />
    </div>
  );
}

function LoginButtonContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Login Button Container">
      <div className="bg-[#2e37a4] h-[38px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputFieldsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input Fields Container">
      <LoginButtonContainer />
    </div>
  );
}

function FormFieldsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Form Fields Container">
      <SignInTextContainer />
      <OtpContainer />
      <InputFieldsContainer />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] relative rounded-[20px] shrink-0 w-full" data-name="Form Container">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <FormFieldsContainer />
      </div>
    </div>
  );
}

function LoginContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 rounded-[6px] top-[calc(50%+0.5px)] w-[448px]" data-name="Login Container">
      <LogoContainer />
      <FormContainer />
    </div>
  );
}

function FormSection() {
  return (
    <div className="-translate-y-1/2 absolute bg-white h-[1000px] overflow-clip right-0 top-1/2 w-[720px]" data-name="Form Section">
      <LoginContainer />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[calc(50%+0.5px)] not-italic text-[#0a1b39] text-[14px] text-center top-[955px] whitespace-nowrap">Copyright @2025 - Preclinic</p>
    </div>
  );
}

export default function Component2StepVerification() {
  return (
    <div className="bg-[#f5f6f8] relative size-full" data-name="2 Step Verification">
      <ImageContainer />
      <FormSection />
    </div>
  );
}
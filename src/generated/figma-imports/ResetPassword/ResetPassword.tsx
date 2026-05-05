import svgPaths from "./svg-4lcprmfmzs";
import imgImg from "./26831184183db0fa75a765cd0fd0ea9443c6185a.png";
import { imgDecoration } from "./svg-psair";

function Decoration() {
  return (
    <div className="h-[1061.155px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-98.057px_-263.293px] mask-size-[720px_1000px] relative w-[1158.875px]" style={{ maskImage: `url('${imgDecoration}')` }} data-name="decoration">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1158.87 1061.15">
        <g id="decoration">
          <foreignObject height="1081.15" width="1079.55" x="-10" y="-10">
            <div style={{ backdropFilter: "blur(5px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p2d4d0640} id="circle 1" stroke="url(#paint0_radial_6_31401)" strokeOpacity="0.7" strokeWidth="80" data-figma-bg-blur-radius="10" />
          <ellipse cx="172.74" cy="393.613" fill="var(--fill-0, #E04F16)" id="dot 1" rx="98.7954" ry="98.9455" />
          <foreignObject height="879.235" width="877.932" x="90.8068" y="88.8281">
            <div style={{ backdropFilter: "blur(5px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p32982400} id="circle 2" stroke="url(#paint1_radial_6_31401)" strokeOpacity="0.65" strokeWidth="60" data-figma-bg-blur-radius="10" />
          <path d={svgPaths.p40d0b80} id="circle 3" stroke="url(#paint2_radial_6_31401)" strokeOpacity="0.81" strokeWidth="80" />
          <ellipse cx="1133.44" cy="75.0571" fill="url(#paint3_linear_6_31401)" id="Ellipse 8" rx="25.4325" ry="25.4711" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(14.8999 706.331 -705.26 14.9225 514.873 553.79)" gradientUnits="userSpaceOnUse" id="paint0_radial_6_31401" r="1">
            <stop offset="0.654764" stopColor="#2E37A4" />
            <stop offset="1" stopColor="#2E37A4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.0647 571.928 -571.061 12.083 517.708 547.241)" gradientUnits="userSpaceOnUse" id="paint1_radial_6_31401" r="1">
            <stop offset="0.654764" stopColor="#E2F6FC" stopOpacity="0.36" />
            <stop offset="1" stopColor="#2E37A4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(9.65173 457.543 -456.849 9.66639 520.121 543.473)" gradientUnits="userSpaceOnUse" id="paint2_radial_6_31401" r="1">
            <stop offset="0.654764" stopColor="#E2F6FC" stopOpacity="0.36" />
            <stop offset="1" stopColor="#48B7D6" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_6_31401" x1="1158.87" x2="1107.93" y1="100.528" y2="49.6633">
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

function HeaderContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-center w-full" data-name="Header Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0a1b39] text-[20px] w-full">
        <p className="leading-[24px]">Reset Password</p>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] opacity-70 relative shrink-0 text-[#6c7688] text-[14px] w-full">Your new password must be different from previous used passwords.</p>
    </div>
  );
}

function Password() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px relative" data-name="Password">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="lock">
        <div className="absolute inset-[45.83%_20.83%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 6.83333">
              <path d={svgPaths.p16cb2200} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_45.83%_29.17%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 2.16667">
              <path d={svgPaths.p1671f900} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p2059880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px not-italic relative text-[#9da4b0] text-[14px]">
        <p className="leading-[21px]">************</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="eye-off">
        <div className="absolute inset-[44.11%_44.11%_41.66%_41.66%]" data-name="Vector">
          <div className="absolute inset-[-25.11%_-25.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99182 2.99153">
              <path d={svgPaths.p367ab2c0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.14%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 8.00013">
              <path d={svgPaths.p2e856c0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d="M0.5 0.5L11 11" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <Password />
        </div>
      </div>
    </div>
  );
}

function Password1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px relative" data-name="Password">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="lock">
        <div className="absolute inset-[45.83%_20.83%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 6.83333">
              <path d={svgPaths.p16cb2200} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_45.83%_29.17%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 2.16667">
              <path d={svgPaths.p1671f900} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p2059880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px not-italic relative text-[#9da4b0] text-[14px]">
        <p className="leading-[21px]">************</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="eye-off">
        <div className="absolute inset-[44.11%_44.11%_41.66%_41.66%]" data-name="Vector">
          <div className="absolute inset-[-25.11%_-25.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.99182 2.99153">
              <path d={svgPaths.p367ab2c0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.14%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 8.00013">
              <path d={svgPaths.p2e856c0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d="M0.5 0.5L11 11" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <Password1 />
        </div>
      </div>
    </div>
  );
}

function ButtonContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button Container">
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

function LinkContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Link Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[0px] whitespace-nowrap">
        <span className="leading-[21px] text-[14px]">{`Return to `}</span>
        <span className="leading-[21px] text-[#2e37a4] text-[14px]">Login</span>
      </p>
    </div>
  );
}

function InputFieldsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Input Fields Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input with Password">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Password</p>
        <Input />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Input with Password">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Confirm Password</p>
        <Input1 />
      </div>
      <ButtonContainer />
      <LinkContainer />
    </div>
  );
}

function InputContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Input Container">
      <HeaderContainer />
      <InputFieldsContainer />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] relative rounded-[20px] shrink-0 w-full" data-name="Form Container">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start p-[40px] relative size-full">
        <InputContainer />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-1/2 rounded-[6px] top-[calc(50%+0.5px)] w-[448px]" data-name="Container">
      <LogoContainer />
      <FormContainer />
    </div>
  );
}

function FormSection() {
  return (
    <div className="-translate-y-1/2 absolute bg-white h-[1000px] overflow-clip right-0 top-1/2 w-[720px]" data-name="Form Section">
      <Container />
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[calc(50%+0.5px)] not-italic text-[#0a1b39] text-[14px] text-center top-[955px] whitespace-nowrap">Copyright @2025 - Preclinic</p>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <div className="bg-[#f5f6f8] relative size-full" data-name="Reset Password">
      <ImageContainer />
      <FormSection />
    </div>
  );
}
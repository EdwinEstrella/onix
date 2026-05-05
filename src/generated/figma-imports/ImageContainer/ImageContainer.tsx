import svgPaths from "./svg-sg5676oxlc";
import imgImg from "./26831184183db0fa75a765cd0fd0ea9443c6185a.png";
import { imgDecoration } from "./svg-t8iy0";

function Decoration() {
  return (
    <div className="h-[1061.155px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-98.057px_-263.293px] mask-size-[720px_1000px] relative w-[1158.875px]" style={{ maskImage: `url('${imgDecoration}')` }} data-name="decoration">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1158.88 1061.15">
        <g id="decoration">
          <foreignObject height="1081.15" width="1079.55" x="-10" y="-10">
            <div style={{ backdropFilter: "blur(5px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p2d4d0640} id="circle 1" stroke="url(#paint0_radial_6_30968)" strokeOpacity="0.7" strokeWidth="80" data-figma-bg-blur-radius="10" />
          <ellipse cx="172.74" cy="393.613" fill="var(--fill-0, #E04F16)" id="dot 1" rx="98.7954" ry="98.9455" />
          <foreignObject height="879.235" width="877.932" x="90.8068" y="88.8281">
            <div style={{ backdropFilter: "blur(5px)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p32982400} id="circle 2" stroke="url(#paint1_radial_6_30968)" strokeOpacity="0.65" strokeWidth="60" data-figma-bg-blur-radius="10" />
          <path d={svgPaths.p2de96700} id="circle 3" stroke="url(#paint2_radial_6_30968)" strokeOpacity="0.81" strokeWidth="80" />
          <ellipse cx="1133.44" cy="75.0571" fill="url(#paint3_linear_6_30968)" id="Ellipse 8" rx="25.4325" ry="25.4711" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(14.8999 706.331 -705.26 14.9225 514.873 553.79)" gradientUnits="userSpaceOnUse" id="paint0_radial_6_30968" r="1">
            <stop offset="0.654764" stopColor="#2E37A4" />
            <stop offset="1" stopColor="#2E37A4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(12.0647 571.928 -571.061 12.083 517.708 547.241)" gradientUnits="userSpaceOnUse" id="paint1_radial_6_30968" r="1">
            <stop offset="0.654764" stopColor="#E2F6FC" stopOpacity="0.36" />
            <stop offset="1" stopColor="#2E37A4" stopOpacity="0.8" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(9.65173 457.543 -456.849 9.66639 520.121 543.473)" gradientUnits="userSpaceOnUse" id="paint2_radial_6_30968" r="1">
            <stop offset="0.654764" stopColor="#E2F6FC" stopOpacity="0.36" />
            <stop offset="1" stopColor="#48B7D6" stopOpacity="0" />
          </radialGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_6_30968" x1="1158.88" x2="1107.93" y1="100.528" y2="49.6633">
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

export default function ImageContainer() {
  return (
    <div className="relative size-full" data-name="Image Container">
      <SideRight />
      <TextContainer />
    </div>
  );
}
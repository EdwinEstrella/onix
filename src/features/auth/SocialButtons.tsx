import svgPaths from "../../generated/figma-imports/FormSection-1/svg-ksvctq499t";

export function SocialButtons() {
  return (
    <>
      <div className="flex w-full items-center gap-[12px]">
        <div className="h-px flex-1 bg-[#e7e8eb]" />
        <span className="text-[13px] leading-[19.5px] text-[#6c7688]">OR</span>
        <div className="h-px flex-1 bg-[#e7e8eb]" />
      </div>
      <div className="grid w-full grid-cols-3 gap-[16px]">
        <button
          type="button"
          className="flex h-[40px] items-center justify-center rounded-[6px] border border-[#e7e8eb] bg-white hover:bg-[#f5f6f8]"
          aria-label="Facebook"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p136cd858} fill="#2F80ED" />
          </svg>
        </button>
        <button
          type="button"
          className="flex h-[40px] items-center justify-center rounded-[6px] border border-[#e7e8eb] bg-white hover:bg-[#f5f6f8]"
          aria-label="Google"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 23 23">
            <path clipRule="evenodd" d={svgPaths.p368b0300} fill="#2F80ED" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1e5c9670} fill="#27AE60" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pa5b6370} fill="#E2B93B" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p14f01400} fill="#EF1E1E" fillRule="evenodd" />
          </svg>
        </button>
        <button
          type="button"
          className="flex h-[40px] items-center justify-center rounded-[6px] border border-[#e7e8eb] bg-white hover:bg-[#f5f6f8]"
          aria-label="Apple"
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d={svgPaths.p2c445b80} fill="#030303" />
          </svg>
        </button>
      </div>
    </>
  );
}

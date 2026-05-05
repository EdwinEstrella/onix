import svgPaths from "./svg-67t24t30tc";
import imgAvatarCircle from "./e11f5284f9aaa3e4330ba42e90f83be1f5843642.png";

function Footer() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-center justify-between px-[24px] py-[8px] right-0 w-[1164px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-px not-italic relative text-[#0a1b39] text-[0px] text-center">
        <p className="text-[14px]">
          <span className="leading-[21px]">{`2025 © `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic text-[#2e37a4]">Preclinic</span>
          <span className="leading-[21px]">, All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[339px]" data-name="Title Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] not-italic relative shrink-0 text-[#0a1b39] text-[20px] whitespace-nowrap">Patients Report</p>
    </div>
  );
}

function HeaderActions1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[614px]" data-name="Header Actions">
      <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex gap-[8px] h-[32px] items-center px-[12px] py-[6px] relative rounded-[6px] shrink-0" data-name="Action Left">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">Export</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-down">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Vector" />
          </svg>
          <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
            <div className="absolute inset-[-14.29%_-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
                <path d="M0.5 0.5L4 4L7.5 0.5" id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderActions() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header Actions">
      <TitleContainer />
      <HeaderActions1 />
    </div>
  );
}

function HeaderTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Header Title">
      <HeaderActions />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Header Content">
      <HeaderTitle />
    </div>
  );
}

function CardInfoValueContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Info Value Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[16px] whitespace-nowrap">
        <p className="leading-[19.2px]">1,240</p>
      </div>
    </div>
  );
}

function CardInfoText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Card Info Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c7688] text-[14px] w-full">
        <p className="leading-[21px]">Total Patients</p>
      </div>
      <CardInfoValueContainer />
    </div>
  );
}

function CardIconContainer() {
  return (
    <div className="bg-[#2e37a4] content-stretch flex items-center justify-center p-[12px] relative rounded-[50px] shrink-0" data-name="Card Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Card Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p2b170400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_37.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
              <path d={svgPaths.p3017fb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-12.91%_-33.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00808 9.75048">
              <path d={svgPaths.p29500900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-3/4 right-[12.5%] top-[63.12%]" data-name="Vector">
          <div className="absolute inset-[-17.1%_-33.33%_-17.09%_-33.34%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00026 7.85024">
              <path d={svgPaths.p12dabc00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardInfoContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Card Info Container">
      <CardInfoText />
      <CardIconContainer />
    </div>
  );
}

function CardTrendContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Card Trend Container">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Card Trend Icon">
        <div className="absolute inset-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 6.83333">
              <path d="M6.33333 0.5L0.5 6.33333" id="Vector" stroke="var(--stroke-0, #27AE60)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_29.17%_33.33%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-9.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
              <path d="M0.5 0.5H5.75V5.75" id="Vector" stroke="var(--stroke-0, #27AE60)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#27ae60] text-[0px] whitespace-nowrap">
        <p className="text-[13px]">
          <span className="leading-[19.5px]">{`5.62% `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#6c7688]">from last month</span>
        </p>
      </div>
    </div>
  );
}

function CardTrend() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card Trend">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 1">
            <line id="Line 124" stroke="var(--stroke-0, #E7E8EB)" x2="220" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardTrendContainer />
    </div>
  );
}

function CardInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[220px]" data-name="Card Info">
      <CardInfoContainer />
      <CardTrend />
    </div>
  );
}

function CardChart() {
  return (
    <div className="h-[92.271px] relative w-[139.499px]" data-name="Card Chart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.499 92.2707">
        <g id="Card Chart">
          <path d={svgPaths.p103ba100} fill="var(--fill-0, #D9DBEF)" id="Vector 2" />
          <path d={svgPaths.p36ecd80} fill="var(--fill-0, #D9DBEF)" id="Vector 3" />
        </g>
      </svg>
    </div>
  );
}

function CardContent() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[5px]" data-name="Card Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
          <CardInfo />
          <div className="absolute flex h-[115.093px] items-center justify-center left-[145px] top-[36.97px] w-[153.402px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="-rotate-10 flex-none">
              <CardChart />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(92,92,92,0.08)]" />
    </div>
  );
}

function CardInfoValueContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Info Value Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[16px] whitespace-nowrap">
        <p className="leading-[19.2px]">210</p>
      </div>
    </div>
  );
}

function CardInfoText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Card Info Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c7688] text-[14px] w-full">
        <p className="leading-[21px]">New Patients</p>
      </div>
      <CardInfoValueContainer1 />
    </div>
  );
}

function CardIconContainer1() {
  return (
    <div className="bg-[#27ae60] content-stretch flex items-center p-[12px] relative rounded-[50px] shrink-0" data-name="Card Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Card Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p2b170400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_43.63%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-9.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.53 8">
              <path d={svgPaths.p27b8ff80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-12.91%_-33.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00808 9.75048">
              <path d={svgPaths.p29500900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[79.17%_8.33%_20.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-1px_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d="M1 1H7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_20.83%_8.33%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 8">
              <path d="M1 1V7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardInfoContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Card Info Container">
      <CardInfoText1 />
      <CardIconContainer1 />
    </div>
  );
}

function CardTrendContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Card Trend Container">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Card Trend Icon">
        <div className="absolute inset-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 6.83333">
              <path d="M6.33333 0.5L0.5 6.33333" id="Vector" stroke="var(--stroke-0, #27AE60)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_29.17%_33.33%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-9.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
              <path d="M0.5 0.5H5.75V5.75" id="Vector" stroke="var(--stroke-0, #27AE60)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#27ae60] text-[0px] whitespace-nowrap">
        <p className="text-[13px]">
          <span className="leading-[19.5px]">{`11.4% `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#6c7688]">from last month</span>
        </p>
      </div>
    </div>
  );
}

function CardTrend1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card Trend">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 1">
            <line id="Line 124" stroke="var(--stroke-0, #E7E8EB)" x2="220" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardTrendContainer1 />
    </div>
  );
}

function CardInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[220px]" data-name="Card Info">
      <CardInfoContainer1 />
      <CardTrend1 />
    </div>
  );
}

function CardChart1() {
  return (
    <div className="h-[92.271px] relative w-[139.499px]" data-name="Card Chart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.499 92.2707">
        <g id="Card Chart">
          <path d={svgPaths.p103ba100} fill="var(--fill-0, #E9F7EF)" id="Vector 2" />
          <path d={svgPaths.p36ecd80} fill="var(--fill-0, #E9F7EF)" id="Vector 3" />
        </g>
      </svg>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[5px]" data-name="Card Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
          <CardInfo1 />
          <div className="absolute flex h-[115.093px] items-center justify-center left-[145px] top-[36.97px] w-[153.402px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="-rotate-10 flex-none">
              <CardChart1 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(92,92,92,0.08)]" />
    </div>
  );
}

function CardInfoValueContainer2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Info Value Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[16px] whitespace-nowrap">
        <p className="leading-[19.2px]">500</p>
      </div>
    </div>
  );
}

function CardInfoText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Card Info Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c7688] text-[14px] w-full">
        <p className="leading-[21px]">Appointment Booked</p>
      </div>
      <CardInfoValueContainer2 />
    </div>
  );
}

function CardIconContainer2() {
  return (
    <div className="bg-[#e2b93b] content-stretch flex items-center p-[12px] relative rounded-[50px] shrink-0" data-name="Card Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Card Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[29.17%_37.5%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
              <path d={svgPaths.pb591c00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%_29.17%_38.6%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-10.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7352 16">
              <path d={svgPaths.pa0c7704} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardInfoContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Card Info Container">
      <CardInfoText2 />
      <CardIconContainer2 />
    </div>
  );
}

function CardTrendContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Card Trend Container">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Card Trend Icon">
        <div className="absolute inset-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 6.83333">
              <path d="M6.33333 0.5L0.5 6.33333" id="Vector" stroke="var(--stroke-0, #27AE60)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_29.17%_33.33%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-9.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
              <path d="M0.5 0.5H5.75V5.75" id="Vector" stroke="var(--stroke-0, #27AE60)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#27ae60] text-[0px] whitespace-nowrap">
        <p className="text-[13px]">
          <span className="leading-[19.5px]">{`8.52% `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#6c7688]">from last month</span>
        </p>
      </div>
    </div>
  );
}

function CardTrend2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card Trend">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 1">
            <line id="Line 124" stroke="var(--stroke-0, #E7E8EB)" x2="220" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardTrendContainer2 />
    </div>
  );
}

function CardInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[220px]" data-name="Card Info">
      <CardInfoContainer2 />
      <CardTrend2 />
    </div>
  );
}

function CardChart2() {
  return (
    <div className="h-[92.271px] relative w-[139.499px]" data-name="Card Chart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.499 92.2707">
        <g id="Card Chart">
          <path d={svgPaths.p103ba100} fill="var(--fill-0, #FCF8EB)" id="Vector 2" />
          <path d={svgPaths.p36ecd80} fill="var(--fill-0, #FCF8EB)" id="Vector 3" />
        </g>
      </svg>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[5px]" data-name="Card Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
          <CardInfo2 />
          <div className="absolute flex h-[115.093px] items-center justify-center left-[145px] top-[36.97px] w-[153.402px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="-rotate-10 flex-none">
              <CardChart2 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(92,92,92,0.08)]" />
    </div>
  );
}

function CardInfoValueContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Card Info Value Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[16px] whitespace-nowrap">
        <p className="leading-[19.2px]">380</p>
      </div>
    </div>
  );
}

function CardInfoText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Card Info Text">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6c7688] text-[14px] w-full">
        <p className="leading-[21px]">Returning Patients</p>
      </div>
      <CardInfoValueContainer3 />
    </div>
  );
}

function CardIconContainer3() {
  return (
    <div className="bg-[#ef1e1e] content-stretch flex items-center p-[12px] relative rounded-[50px] shrink-0" data-name="Card Icon Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Card Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p2b170400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_43.73%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-9.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.504 8">
              <path d={svgPaths.p357daf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-12.91%_-33.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00808 9.75048">
              <path d={svgPaths.p29500900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[79.17%_8.33%_20.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-1px_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d="M1 1H7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardInfoContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Card Info Container">
      <CardInfoText3 />
      <CardIconContainer3 />
    </div>
  );
}

function VuesaxBoldReceived() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/received">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="received">
          <path d="M9.5 0.5V9.5H0.5V0.5H9.5Z" id="Vector" opacity="0" stroke="var(--stroke-0, #EF1E1E)" />
          <g id="Vector_2">
            <mask fill="white" id="path-2-inside-1_6_18549">
              <path d={svgPaths.p3ce0b500} />
            </mask>
            <path d={svgPaths.p3ce0b500} fill="var(--fill-0, #0A1B39)" />
            <path d={svgPaths.p267d0a80} fill="var(--stroke-0, #EF1E1E)" mask="url(#path-2-inside-1_6_18549)" />
          </g>
          <g id="Vector_3">
            <mask fill="white" id="path-4-inside-2_6_18549">
              <path d={svgPaths.p336fd700} />
            </mask>
            <path d={svgPaths.p336fd700} fill="var(--fill-0, #0A1B39)" />
            <path d={svgPaths.p6cb7780} fill="var(--stroke-0, #EF1E1E)" mask="url(#path-4-inside-2_6_18549)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CardTrendTextContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Card Trend Text Container">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Card Trend Icon">
        <div className="absolute inset-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 6.83333">
              <path d="M0.5 0.5L6.33333 6.33333" id="Vector" stroke="var(--stroke-0, #EF1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_29.17%_29.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-9.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25 6.25">
              <path d="M5.75 0.5V5.75H0.5" id="Vector" stroke="var(--stroke-0, #EF1E1E)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ef1e1e] text-[0px] whitespace-nowrap">
        <p className="text-[13px]">
          <span className="leading-[19.5px]">{`7.45% `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#6c7688]">from last month</span>
        </p>
      </div>
    </div>
  );
}

function CardTrendContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Card Trend Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[10px]" data-name="Card Trend Icon">
            <VuesaxBoldReceived />
          </div>
        </div>
      </div>
      <CardTrendTextContainer />
    </div>
  );
}

function CardTrend3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Card Trend">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 1">
            <line id="Line 124" stroke="var(--stroke-0, #E7E8EB)" x2="220" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardTrendContainer3 />
    </div>
  );
}

function CardInfo3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[220px]" data-name="Card Info">
      <CardInfoContainer3 />
      <CardTrend3 />
    </div>
  );
}

function CardChart3() {
  return (
    <div className="h-[92.271px] relative w-[139.499px]" data-name="Card Chart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139.499 92.2707">
        <g id="Card Chart">
          <path d={svgPaths.p103ba100} fill="var(--fill-0, #FDE9E9)" id="Vector 2" />
          <path d={svgPaths.p36ecd80} fill="var(--fill-0, #FDE9E9)" id="Vector 3" />
        </g>
      </svg>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[5px]" data-name="Card Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
          <CardInfo3 />
          <div className="absolute flex h-[115.093px] items-center justify-center left-[145px] top-[36.97px] w-[153.402px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
            <div className="-rotate-10 flex-none">
              <CardChart3 />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[0px_4px_20px_0px_rgba(92,92,92,0.08)]" />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-[1116px]" data-name="Card">
      <CardContent />
      <CardContent1 />
      <CardContent2 />
      <CardContent3 />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[1116px]" data-name="Card">
      <Card1 />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative" data-name="Date">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px not-italic relative text-[#9da4b0] text-[14px]">
        <p>
          <span className="leading-[21px]">{`dd/mm/yyyy - `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic">dd/mm/yyyy</span>
        </p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="calendar">
        <div className="absolute inset-[20.83%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <path d={svgPaths.p2d87e100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_70.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3.33333">
              <path d="M0.5 0.5V2.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_66.67%_70.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3.33333">
              <path d="M0.5 0.5V2.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_16.67%_54.17%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 1">
              <path d="M0.5 0.5H9.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-[45.83%] right-1/2 top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-85.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.58333 1">
              <path d="M0.5 0.5H1.08333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 right-1/2 top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.75">
              <path d="M0.5 0.5V2.25" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
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
          <Date />
        </div>
      </div>
    </div>
  );
}

function SelectOption() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative" data-name="Select Option">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px not-italic relative text-[#9da4b0] text-[14px]">
        <p className="leading-[21px]">Select</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
              <path d="M0.5 0.5L4 4L7.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
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
          <SelectOption />
        </div>
      </div>
    </div>
  );
}

function SelectOption1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative" data-name="Select Option">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px not-italic relative text-[#9da4b0] text-[14px]">
        <p className="leading-[21px]">Select</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
              <path d="M0.5 0.5L4 4L7.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <SelectOption1 />
        </div>
      </div>
    </div>
  );
}

function FiltersRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Filters Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Input with date">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Date</p>
        <Input />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Input with Select">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Patient</p>
        <Input1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Input with Select">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Location</p>
        <Input2 />
      </div>
    </div>
  );
}

function SelectOption2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative" data-name="Select Option">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px not-italic relative text-[#9da4b0] text-[14px]">
        <p className="leading-[21px]">Select</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
              <path d="M0.5 0.5L4 4L7.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <SelectOption2 />
        </div>
      </div>
    </div>
  );
}

function SelectOption3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-between min-w-px relative" data-name="Select Option">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-full justify-center leading-[0] min-w-px not-italic relative text-[#9da4b0] text-[14px]">
        <p className="leading-[21px]">Select</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
              <path d="M0.5 0.5L4 4L7.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[6px] relative size-full">
          <SelectOption3 />
        </div>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Tags">
      <div className="bg-[#f5f6f8] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-bl-[6px] rounded-br-[4px] rounded-tl-[6px] rounded-tr-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[6.5px] rounded-br-[4.5px] rounded-tl-[6.5px] rounded-tr-[4.5px]" />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">Pending</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x">
          <div className="absolute inset-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f6f8] content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-bl-[6px] rounded-br-[4px] rounded-tl-[6px] rounded-tr-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-bl-[6.5px] rounded-br-[4.5px] rounded-tl-[6.5px] rounded-tr-[4.5px]" />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">Complete</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x">
          <div className="absolute inset-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                <path d="M6.5 0.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-1/4" data-name="Vector">
            <div className="absolute inset-[-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                <path d="M0.5 0.5L6.5 6.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[6px] pr-[12px] py-[6px] relative size-full">
          <Tags />
        </div>
      </div>
    </div>
  );
}

function FiltersRow1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Filters Row">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Input with Select">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Practioner</p>
        <Input3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Input with Select">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Designation</p>
        <Input4 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Input Multi select">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Status</p>
        <Input5 />
      </div>
    </div>
  );
}

function FiltersButton() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Filters Button">
      <div className="bg-[#030303] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[13px]" data-name="player-play">
          <div className="absolute inset-[16.67%_16.67%_16.67%_29.17%]" data-name="Vector">
            <div className="absolute inset-[-11.54%_-14.2%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.04167 10.6667">
                <path d={svgPaths.p137f5000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Run Report</p>
      </div>
    </div>
  );
}

function FiltersContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-end justify-center relative shrink-0 w-full" data-name="Filters Container">
      <FiltersRow />
      <FiltersRow1 />
      <FiltersButton />
    </div>
  );
}

function Filters() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Filters">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <FiltersContainer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header">
      <HeaderContent />
      <div className="h-[2px] relative shrink-0 w-full">
        <div className="absolute bottom-full left-0 right-0 top-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1116 1">
            <line id="Line 1" stroke="var(--stroke-0, #E7E8EB)" x2="1116" y1="0.5" y2="2.5" />
          </svg>
        </div>
      </div>
      <Card />
      <Filters />
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Patient</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellContent() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Alberto Ripley</p>
    </div>
  );
}

function TableCellContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer />
    </div>
  );
}

function TableRow() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell />
        </div>
      </div>
    </div>
  );
}

function TableCellContent1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Susan Babin</p>
    </div>
  );
}

function TableCellContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer1 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell1 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Carol Lam</p>
    </div>
  );
}

function TableCellContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent2 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer2 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell2 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Marsha Noland</p>
    </div>
  );
}

function TableCellContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent3 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer3 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell3 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Irma Armstrong</p>
    </div>
  );
}

function TableCellContainer4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent4 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer4 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell4 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Jesus Adams</p>
    </div>
  );
}

function TableCellContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent5 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer5 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell5 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Ezra Belcher</p>
    </div>
  );
}

function TableCellContainer6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent6 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer6 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell6 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Glen Lentz</p>
    </div>
  );
}

function TableCellContainer7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent7 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer7 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell7 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Bernard Griffith</p>
    </div>
  );
}

function TableCellContainer8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent8 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer8 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell8 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">John Elsass</p>
    </div>
  );
}

function TableCellContainer9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent9 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer9 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <TableCell9 />
        </div>
      </div>
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Table Header">
      <TableHeaderCell />
      <TableHeaderCell1 />
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Age/Gender</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellContent10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">26/Male</p>
    </div>
  );
}

function TableCellContainer10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Table Cell Container">
      <TableCellContent10 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer10 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell10 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">21/Female</p>
    </div>
  );
}

function TableCellContainer11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent11 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer11 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell11 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">28/Male</p>
    </div>
  );
}

function TableCellContainer12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent12 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer12 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell12 />
        </div>
      </div>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">25/Female</p>
    </div>
  );
}

function TableRow13() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell13 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">32/Male</p>
    </div>
  );
}

function TableCellContainer13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent13 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer13 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell14 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">27/Female</p>
    </div>
  );
}

function TableCellContainer14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer14 />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell15 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent15() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">28/Male</p>
    </div>
  );
}

function TableCellContainer15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent15 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer15 />
    </div>
  );
}

function TableRow16() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell16 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent16() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">22/Female</p>
    </div>
  );
}

function TableCellContainer16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent16 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer16 />
    </div>
  );
}

function TableRow17() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell17 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent17() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">34/Male</p>
    </div>
  );
}

function TableCellContainer17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer17 />
    </div>
  );
}

function TableRow18() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell18 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">{`23/Female `}</p>
    </div>
  );
}

function TableCellContainer18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent18 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer18 />
    </div>
  );
}

function TableRow19() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell19 />
        </div>
      </div>
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[115px]" data-name="Table Header Cell">
      <TableHeaderCell3 />
      <TableHeaderCell4 />
    </div>
  );
}

function TableHeaderCell8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Contact Info</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellContainer19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 43554 54584</p>
    </div>
  );
}

function TableCellText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">james@example.com</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer19 />
      <TableCellText />
    </div>
  );
}

function TableRow20() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell20 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 47554 54585</p>
    </div>
  );
}

function TableCellText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">emily@example.com</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer20 />
      <TableCellText1 />
    </div>
  );
}

function TableRow21() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell21 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 54114 54586</p>
    </div>
  );
}

function TableCellText2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">robert@example.com</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer21 />
      <TableCellText2 />
    </div>
  );
}

function TableRow22() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell22 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 51247 54587</p>
    </div>
  );
}

function TableCellText3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">sophia@example.com</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer22 />
      <TableCellText3 />
    </div>
  );
}

function TableRow23() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell23 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 41452 54588</p>
    </div>
  );
}

function TableCellText4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">daniel@example.com</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer23 />
      <TableCellText4 />
    </div>
  );
}

function TableRow24() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell24 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 51425 54589</p>
    </div>
  );
}

function TableCellText5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">olivia@example.com</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer24 />
      <TableCellText5 />
    </div>
  );
}

function TableRow25() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell25 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 42565 54590</p>
    </div>
  );
}

function TableCellText6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">michael@example.com</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer25 />
      <TableCellText6 />
    </div>
  );
}

function TableRow26() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell26 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 51425 54589</p>
    </div>
  );
}

function TableCellText7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">isabella@example.com</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer26 />
      <TableCellText7 />
    </div>
  );
}

function TableRow27() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell27 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 45214 54591</p>
    </div>
  );
}

function TableCellText8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">trade@example.com</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer27 />
      <TableCellText8 />
    </div>
  );
}

function TableRow28() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell28 />
        </div>
      </div>
    </div>
  );
}

function TableCellContainer28() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">+1 41245 54592</p>
    </div>
  );
}

function TableCellText9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">ava@example.com</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell">
      <TableCellContainer28 />
      <TableCellText9 />
    </div>
  );
}

function TableRow29() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell29 />
        </div>
      </div>
    </div>
  );
}

function TableHeaderCell9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableRow20 />
      <TableRow21 />
      <TableRow22 />
      <TableRow23 />
      <TableRow24 />
      <TableRow25 />
      <TableRow26 />
      <TableRow27 />
      <TableRow28 />
      <TableRow29 />
    </div>
  );
}

function TableHeaderCell7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableHeaderCell8 />
      <TableHeaderCell9 />
    </div>
  );
}

function TableHeaderCell6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableHeaderCell7 />
    </div>
  );
}

function TableHeaderCell5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Table Header Cell">
      <TableHeaderCell6 />
    </div>
  );
}

function TableHeaderCell11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Practioner</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellContent19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. Mick Thompson</p>
    </div>
  );
}

function TableCellContainer29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent19 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer29 />
    </div>
  );
}

function TableRow30() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell30 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent20() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. Sarah Johnson</p>
    </div>
  );
}

function TableCellContainer30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent20 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer30 />
    </div>
  );
}

function TableRow31() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell31 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. Emily Carter</p>
    </div>
  );
}

function TableCellContainer32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Table Cell Container">
      <TableCellContent22 />
    </div>
  );
}

function TableCellContent21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Cell Content">
      <TableCellContainer32 />
    </div>
  );
}

function TableCellContainer31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent21 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer31 />
    </div>
  );
}

function TableRow32() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell32 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. David Lee</p>
    </div>
  );
}

function TableCellContainer33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent23 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer33 />
    </div>
  );
}

function TableRow33() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell33 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. Anna Kim</p>
    </div>
  );
}

function TableCellContent24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Content">
      <TableCellContent25 />
    </div>
  );
}

function TableCellContainer34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent24 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer34 />
    </div>
  );
}

function TableRow34() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell34 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. John Smith</p>
    </div>
  );
}

function TableCellContainer36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Table Cell Container">
      <TableCellContent27 />
    </div>
  );
}

function TableCellContent26() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Cell Content">
      <TableCellContainer36 />
    </div>
  );
}

function TableCellContainer35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent26 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer35 />
    </div>
  );
}

function TableRow35() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell35 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. Lisa White</p>
    </div>
  );
}

function TableCellContainer38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Table Cell Container">
      <TableCellContent29 />
    </div>
  );
}

function TableCellContent28() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Cell Content">
      <TableCellContainer38 />
    </div>
  );
}

function TableCellContainer37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent28 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer37 />
    </div>
  );
}

function TableRow36() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell36 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. Patricia Brown</p>
    </div>
  );
}

function TableCellContent30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Content">
      <TableCellContent31 />
    </div>
  );
}

function TableCellContainer39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent30 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer39 />
    </div>
  );
}

function TableRow37() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell37 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. Rachel Green</p>
    </div>
  );
}

function TableCellContainer40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent32 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer40 />
    </div>
  );
}

function TableRow38() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell38 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Dr. Michael Smith</p>
    </div>
  );
}

function TableCellContainer41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent33 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Table Cell">
      <TableCellContainer41 />
    </div>
  );
}

function TableRow39() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell39 />
        </div>
      </div>
    </div>
  );
}

function TableHeaderCell12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableRow30 />
      <TableRow31 />
      <TableRow32 />
      <TableRow33 />
      <TableRow34 />
      <TableRow35 />
      <TableRow36 />
      <TableRow37 />
      <TableRow38 />
      <TableRow39 />
    </div>
  );
}

function TableHeaderCell10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Table Header Cell">
      <TableHeaderCell11 />
      <TableHeaderCell12 />
    </div>
  );
}

function TableHeaderCell14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellContent34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">California</p>
    </div>
  );
}

function TableCellContainer42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Table Cell Container">
      <TableCellContent34 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer42 />
    </div>
  );
}

function TableRow40() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell40 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Texas</p>
    </div>
  );
}

function TableCellContainer43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent35 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer43 />
    </div>
  );
}

function TableRow41() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell41 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Florida</p>
    </div>
  );
}

function TableCellContainer44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent36 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer44 />
    </div>
  );
}

function TableRow42() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell42 />
        </div>
      </div>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Cell">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">New York</p>
    </div>
  );
}

function TableRow43() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell43 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Illinois</p>
    </div>
  );
}

function TableCellContainer45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent37 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer45 />
    </div>
  );
}

function TableRow44() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell44 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Ohio</p>
    </div>
  );
}

function TableCellContainer46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent38 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer46 />
    </div>
  );
}

function TableRow45() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell45 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Georgia</p>
    </div>
  );
}

function TableCellContainer47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent39 />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer47 />
    </div>
  );
}

function TableRow46() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell46 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">North Carolina</p>
    </div>
  );
}

function TableCellContainer48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent40 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer48 />
    </div>
  );
}

function TableRow47() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell47 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Pennsylvania</p>
    </div>
  );
}

function TableCellContainer49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent41 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer49 />
    </div>
  );
}

function TableRow48() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell48 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent42() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Washington</p>
    </div>
  );
}

function TableCellContainer50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent42 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer50 />
    </div>
  );
}

function TableRow49() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell49 />
        </div>
      </div>
    </div>
  );
}

function TableHeaderCell15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableRow40 />
      <TableRow41 />
      <TableRow42 />
      <TableRow43 />
      <TableRow44 />
      <TableRow45 />
      <TableRow46 />
      <TableRow47 />
      <TableRow48 />
      <TableRow49 />
    </div>
  );
}

function TableHeaderCell13() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[113px]" data-name="Table Header Cell">
      <TableHeaderCell14 />
      <TableHeaderCell15 />
    </div>
  );
}

function TableHeaderCell17() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Last Visit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCellContent43() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">30 Apr 2025</p>
    </div>
  );
}

function TableCellContainer51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Table Cell Container">
      <TableCellContent43 />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer51 />
    </div>
  );
}

function TableRow50() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell50 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">15 Apr 2025</p>
    </div>
  );
}

function TableCellContainer52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent44 />
    </div>
  );
}

function TableCell51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer52 />
    </div>
  );
}

function TableRow51() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell51 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">02 Apr 2025</p>
    </div>
  );
}

function TableCellContainer53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent45 />
    </div>
  );
}

function TableCell52() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer53 />
    </div>
  );
}

function TableRow52() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell52 />
        </div>
      </div>
    </div>
  );
}

function TableCellText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Cell Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">27 Mar 2025</p>
    </div>
  );
}

function TableRow53() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCellText10 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">12 Mar 2025</p>
    </div>
  );
}

function TableCellContainer54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent46 />
    </div>
  );
}

function TableCell53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer54 />
    </div>
  );
}

function TableRow54() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell53 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">05 Mar 2025</p>
    </div>
  );
}

function TableCellContainer55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent47 />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer55 />
    </div>
  );
}

function TableRow55() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell54 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent48() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">24 Feb 2025</p>
    </div>
  );
}

function TableCellContainer56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent48 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer56 />
    </div>
  );
}

function TableRow56() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell55 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">16 Feb 2025</p>
    </div>
  );
}

function TableCellContainer57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent49 />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer57 />
    </div>
  );
}

function TableRow57() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell56 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">01 Feb 2025</p>
    </div>
  );
}

function TableCellContainer58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent50 />
    </div>
  );
}

function TableCell57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer58 />
    </div>
  );
}

function TableRow58() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell57 />
        </div>
      </div>
    </div>
  );
}

function TableCellContent51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell Content">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">25 Jan 2025</p>
    </div>
  );
}

function TableCellContainer59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Table Cell Container">
      <TableCellContent51 />
    </div>
  );
}

function TableCell58() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Cell">
      <TableCellContainer59 />
    </div>
  );
}

function TableRow59() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <TableCell58 />
        </div>
      </div>
    </div>
  );
}

function TableHeaderCell18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableRow50 />
      <TableRow51 />
      <TableRow52 />
      <TableRow53 />
      <TableRow54 />
      <TableRow55 />
      <TableRow56 />
      <TableRow57 />
      <TableRow58 />
      <TableRow59 />
    </div>
  );
}

function TableHeaderCell16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[118px]" data-name="Table Header Cell">
      <TableHeaderCell17 />
      <TableHeaderCell18 />
    </div>
  );
}

function TableHeaderCell20() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Table Header Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRow60() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#f4fbf7] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#27ae60] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#27ae60] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#fef4f4] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#ef1e1e] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ef1e1e] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#f4fbf7] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#27ae60] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#27ae60] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#fef4f4] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#ef1e1e] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ef1e1e] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#f4fbf7] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#27ae60] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#27ae60] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#fef4f4] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#ef1e1e] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ef1e1e] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#f4fbf7] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#27ae60] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#27ae60] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#fef4f4] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#ef1e1e] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ef1e1e] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#f4fbf7] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#27ae60] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#27ae60] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table Cell">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="bg-[#fef4f4] content-stretch flex h-[24px] items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
            <div aria-hidden="true" className="absolute border border-[#ef1e1e] border-solid inset-[-0.5px] pointer-events-none rounded-[6.5px]" />
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ef1e1e] text-[13px] whitespace-nowrap">
              <p className="leading-[19.5px]">Unavailable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableHeaderCell21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Table Header Cell">
      <TableRow60 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
    </div>
  );
}

function TableHeaderCell19() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[130px]" data-name="Table Header Cell">
      <TableHeaderCell20 />
      <TableHeaderCell21 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex h-[525px] items-center relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none" />
      <TableHeader />
      <TableHeaderCell2 />
      <TableHeaderCell5 />
      <TableHeaderCell10 />
      <TableHeaderCell13 />
      <TableHeaderCell16 />
      <TableHeaderCell19 />
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex gap-[8px] h-[32px] items-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">10</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="chevron-down">
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
              <path d="M0.5 0.5L3.5 3.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCounts() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Result Counts">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">Show</p>
      <Input6 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">Results</p>
    </div>
  );
}

function Previous() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-[6px] relative rounded-[5px] shrink-0 size-[32px]" data-name="Previous">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow-left">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.5px_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 1">
              <path d="M0.5 0.5H8.66667" id="Vector" stroke="var(--stroke-0, #6C7688)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[20.83%] right-[54.17%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d="M0.5 0.5L4 4" id="Vector" stroke="var(--stroke-0, #6C7688)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[54.17%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d="M0.5 4L4 0.5" id="Vector" stroke="var(--stroke-0, #6C7688)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-[6px] relative rounded-[5px] shrink-0 size-[32px]" data-name="Number">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-[7px]">1</p>
    </div>
  );
}

function Number1() {
  return (
    <div className="bg-[#2e37a4] content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-[6px] relative rounded-[5px] shrink-0 size-[32px]" data-name="Number">
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[21px] not-italic relative shrink-0 text-[14px] text-white w-[9px]">2</p>
    </div>
  );
}

function Number2() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-[6px] relative rounded-[5px] shrink-0 size-[32px]" data-name="Number">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-[9px]">3</p>
    </div>
  );
}

function Number3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Number">
      <div className="absolute inset-[-1.56%_-4.69%_-7.81%_-4.69%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <g filter="url(#filter0_d_6_18460)" id="Number">
            <path d={svgPaths.p1fafc80} fill="var(--fill-0, white)" shapeRendering="crispEdges" />
            <path d={svgPaths.p1fafc80} shapeRendering="crispEdges" stroke="var(--stroke-0, #E7E8EB)" />
            <g id="...">
              <path d={svgPaths.p3ef04080} fill="var(--fill-0, #051321)" />
              <path d={svgPaths.p37d37670} fill="var(--fill-0, #051321)" />
              <path d={svgPaths.p2d946d00} fill="var(--fill-0, #051321)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_6_18460" width="35" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_18460" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_18460" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Number4() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-[6px] relative rounded-[5px] shrink-0 size-[32px]" data-name="Number">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[21px] leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-[15px]">12</p>
    </div>
  );
}

function NumbersContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Numbers Container">
      <Number />
      <Number1 />
      <Number2 />
      <Number3 />
      <Number4 />
    </div>
  );
}

function Next() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-[6px] relative rounded-[5px] shrink-0 size-[32px]" data-name="Next">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrow-right">
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.5px_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 1">
              <path d="M0.5 0.5H8.66667" id="Vector" stroke="var(--stroke-0, #6C7688)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[54.17%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d="M0.5 4L4 0.5" id="Vector" stroke="var(--stroke-0, #6C7688)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[20.83%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d="M0.5 0.5L4 4" id="Vector" stroke="var(--stroke-0, #6C7688)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pagination1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative" data-name="Pagination">
      <Previous />
      <NumbersContainer />
      <Next />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-end min-w-px relative" data-name="Pagination">
      <Pagination1 />
    </div>
  );
}

function TableContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Table Container">
      <Table />
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Pagination">
        <ResultCounts />
        <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[300px] top-[76px] w-[1116px]" data-name="Main Container">
      <Header />
      <TableContainer />
    </div>
  );
}

function SeachContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Seach Container">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="search">
        <div className="absolute inset-[12.5%_29.17%_29.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 9.16667">
              <path d={svgPaths.p3b82fa00} id="Vector" stroke="var(--stroke-0, #9DA4B0)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_12.5%_12.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d="M4 4L0.5 0.5" id="Vector" stroke="var(--stroke-0, #9DA4B0)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9da4b0] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Search</p>
      </div>
    </div>
  );
}

function VuesaxLinearCommand() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/command">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="command">
          <path d={svgPaths.p4c0ce80} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p16fa4400} id="Vector_2" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30fbba80} id="Vector_3" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2df64100} id="Vector_4" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p31f72000} id="Vector_5" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Command() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[4px] relative rounded-[8px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Command">
      <div className="relative shrink-0 size-[14px]" data-name="vuesax/linear/command">
        <VuesaxLinearCommand />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <SeachContainer />
      <Command />
    </div>
  );
}

function Calendar() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex items-center p-[8px] relative rounded-[20px] shrink-0" data-name="Calendar">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Calendar Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[20.83%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p12340300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_70.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-18.75%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3.66667">
              <path d="M0.5 0.5V3.16667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_66.67%_70.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-18.75%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3.66667">
              <path d="M0.5 0.5V3.16667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_16.67%_54.17%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 1">
              <path d="M0.5 0.5H11.1667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_45.83%_29.17%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-37.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 2.33333">
              <path d={svgPaths.p1c24f3c0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex items-center p-[8px] relative rounded-[20px] shrink-0" data-name="Settings">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Settings Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.34%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.3331">
              <path d={svgPaths.p3166bb00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
              <path d={svgPaths.p1476d100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex gap-[10px] items-center p-[8px] relative rounded-[20px] shrink-0" data-name="Notification">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Notification Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[12.5%_16.67%_29.17%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6668 10.3333">
              <path d={svgPaths.p11851000} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_37.5%_12.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-18.75%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3.66667">
              <path d={svgPaths.p44fd300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex items-start left-[16px] top-[8px]" data-name="Dot">
        <div className="relative shrink-0 size-[6px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p17b82700} fill="var(--fill-0, #EF1E1E)" id="Ellipse 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Calendar />
      <Settings />
      <Notification />
    </div>
  );
}

function AvatarContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Avatar Container">
      <div className="relative shrink-0 size-[32px]" data-name="Avatar Circle">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="32" src={imgAvatarCircle} width="32" />
      </div>
      <div className="absolute bg-white content-stretch flex items-start left-[22px] p-[2px] rounded-[20px] top-[23px]" data-name="Blink">
        <div className="relative shrink-0 size-[5px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d={svgPaths.p1ebfe500} fill="var(--fill-0, #27AE60)" id="Ellipse 1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="bg-gradient-to-r content-stretch flex from-[#2e37a4] gap-[4px] h-[32px] items-center justify-center px-[10px] py-[6px] relative rounded-[6px] shrink-0 to-[#0e9384]" data-name="Button">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">AI Assistance</p>
        <div className="overflow-clip relative shrink-0 size-[13px]" data-name="chart-bubble-filled">
          <div className="absolute bottom-[16.67%] left-[8.33%] right-[58.33%] top-1/2" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
              <path d={svgPaths.pc7b1be0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[66.67%_20.83%_8.33%_54.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.24991 3.25">
              <path d={svgPaths.p3bc2a600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[8.33%_16.67%_45.83%_37.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.95809 5.95833">
              <path d={svgPaths.p119b6b80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container3 />
      <AvatarContainer />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px relative w-full" data-name="Container">
      <div className="bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex flex-col items-start justify-center pl-[12px] pr-[6px] py-[6px] relative rounded-[6px] shrink-0 w-[250px]" data-name="Search">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <Container1 />
      </div>
      <Container2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[113.815px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.815 28">
        <g id="Container">
          <g id="Icon">
            <path d={svgPaths.pd808880} fill="var(--fill-0, #2E37A4)" id="Rectangle 28" />
            <path d={svgPaths.p9994a00} fill="var(--fill-0, #2E37A4)" id="Rectangle 27" />
            <path d={svgPaths.p3d935f00} fill="var(--fill-0, #00D3C7)" id="Rectangle 30" />
            <path d={svgPaths.p21335500} fill="var(--fill-0, white)" id="Rectangle 30_2" />
          </g>
          <g id="Preclinic">
            <path d={svgPaths.p2a56cf00} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p1cd5e380} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p25677a80} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p3703d800} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p3d1d9e00} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p1f044570} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p3b206480} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p9918a00} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p1230be00} fill="var(--fill-0, #030303)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f5f6f8] content-stretch flex items-center p-[4px] relative rounded-[20px] shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Arrow">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.5px_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 1">
              <path d="M0.5 0.5H8.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[20.83%] right-[54.17%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d="M0.5 0.5L4 4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[54.17%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d="M0.5 4L4 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group 1">
          <circle cx="20" cy="20" fill="var(--fill-0, #2E37A4)" id="Ellipse 13" r="20" />
          <g id="Black">
            <path d={svgPaths.p3f0cad00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p1921ac80} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p3a4f9680} fill="var(--fill-0, white)" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 w-[107px]" data-name="Details">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#0a1b39] text-[14px] w-full">Trustcare Clinic</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#6c7688] text-[13px] w-full">Lasvegas</p>
    </div>
  );
}

function Clinic() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Clinic">
      <Group />
      <Details />
    </div>
  );
}

function MenuName() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="layout-dashboard">
        <div className="absolute bottom-1/2 left-[16.67%] right-[58.33%] top-[16.67%]" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 5.66667">
              <path d="M0.5 0.5H4V5.16667H0.5V0.5Z" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_58.33%_16.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
              <path d="M0.5 0.5H4V2.83333H0.5V0.5Z" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[58.33%] right-[16.67%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 5.66667">
              <path d="M0.5 0.5H4V5.16667H0.5V0.5Z" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_16.67%_66.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
              <path d="M0.5 0.5H4V2.83333H0.5V0.5Z" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Dashboard</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container18 />
    </div>
  );
}

function MenuName1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="apps-filled">
        <div className="absolute inset-[12.5%_54.17%_54.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p236f7180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_54.17%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p199a0300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_12.5%_12.5%_54.17%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p311b01f0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_12.5%_54.17%_54.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66537 4.66602">
            <path d={svgPaths.p1a10c80} fill="var(--fill-0, #2E37A4)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Applications</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName1 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="world">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p12553380} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_15%_62.5%_15%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-5.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 1">
              <path d="M0.5 0.5H10.3" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_15%_37.5%_15%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-5.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 1">
              <path d="M0.5 0.5H10.3" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_52.08%_12.5%_37.18%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-33.26%_-4.76%_-33.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50378 11.5001">
              <path d={svgPaths.p2c2eb500} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_37.18%_12.5%_52.08%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-33.25%_-4.76%_-33.26%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50378 11.5001">
              <path d={svgPaths.p18e61900} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Front End</p>
      </div>
    </div>
  );
}

function MenuName3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="layout-sidebar">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <path d={svgPaths.p2d87e100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_62.5%_16.67%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 10.3333">
              <path d="M0.5 0.5V9.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Layouts</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container19 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName2 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName3 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">Main Menu</p>
        </div>
      </div>
      <Container16 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">Clinic</p>
        </div>
      </div>
    </div>
  );
}

function MenuName4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="user-plus">
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[79.17%_8.33%_20.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1">
              <path d="M0.5 0.5H4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_20.83%_8.33%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.5">
              <path d="M0.5 0.5V4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-[41.67%] top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 4.5">
              <path d={svgPaths.p1eec9100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Doctors</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName4 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="user-heart">
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-[56.25%] top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-19.05%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.625 4.5">
              <path d={svgPaths.p3ba5d980} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_8.33%_8.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-12.25%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6671 5.08311">
              <path d={svgPaths.p1317a00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Patients</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName5 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="calendar-check">
        <div className="absolute inset-[20.83%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <path d={svgPaths.p41cf800} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_70.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3.33333">
              <path d="M0.5 0.5V2.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_66.67%_70.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3.33333">
              <path d="M0.5 0.5V2.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_16.67%_54.17%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 1">
              <path d="M0.5 0.5H9.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
              <path d={svgPaths.p3f734180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Appointments</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName6 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="map-pin-filled">
        <div className="absolute inset-[8.33%_12.5%_6.31%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.18%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5003 12.9496">
              <path d={svgPaths.p39f85600} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Locations</p>
      </div>
    </div>
  );
}

function MenuName8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="user-cog">
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-[47.92%] top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-13.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79167 4.5">
              <path d={svgPaths.p27feb980} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_70.84%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.58%_20.83%_29.17%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.5%_20.83%_6.25%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[86.39%] right-[8.2%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-66%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75792 1.43767">
              <path d={svgPaths.p2e2de980} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_28.04%_13.54%_66.54%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.pfe59200} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[66.54%] right-[28.04%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_8.2%_13.54%_86.39%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Services</p>
      </div>
    </div>
  );
}

function MenuName9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="stethoscope">
        <div className="absolute inset-[16.67%_41.67%_37.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-7.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41667 7.41667">
              <path d={svgPaths.pbb66c80} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-[33.33%] right-[16.67%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-9.52%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6.25">
              <path d={svgPaths.p1b6d300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_54.17%_79.17%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-42.86%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.16667">
              <path d="M0.5 0.5V1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[79.17%] left-1/4 right-3/4 top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-42.86%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.16667">
              <path d="M0.5 0.5V1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-3/4 right-[8.33%] top-[33.33%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Specializations</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="asset">
              <div className="absolute inset-[37.5%_37.5%_12.5%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                    <path d={svgPaths.p2f65eb70} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_54.17%_29.17%_29.17%]" data-name="Vector">
                <div className="absolute inset-[-21.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                    <path d={svgPaths.pcce6100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_12.5%_70.83%_70.83%]" data-name="Vector">
                <div className="absolute inset-[-21.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                    <path d={svgPaths.pdf05680} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[24.17%_13.18%_25.1%_59.24%]" data-name="Vector">
                <div className="absolute inset-[-7.04%_-12.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.86127 8.10169">
                    <path d={svgPaths.p31b20380} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[13.02%_23.77%_59.35%_25.33%]" data-name="Vector">
                <div className="absolute inset-[-12.93%_-7.02%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.12677 4.86827">
                    <path d={svgPaths.p3ed8f700} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_54.17%_29.17%_29.17%]" data-name="Vector">
                <div className="absolute inset-[-21.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                    <path d={svgPaths.pcce6100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
              <p className="leading-[21px]">Assets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="activity">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 10.3333">
              <path d={svgPaths.p5c12300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Activities</p>
      </div>
    </div>
  );
}

function MenuName11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="messages">
        <div className="absolute inset-[12.5%_12.5%_41.67%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-7.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41667 7.41668">
              <path d={svgPaths.p3c307b80} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_41.67%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-7.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41667 7.41668">
              <path d={svgPaths.p39a4ec00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Messages</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName7 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName8 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName9 />
          </div>
        </div>
      </div>
      <Container26 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName10 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">HRM</p>
        </div>
      </div>
    </div>
  );
}

function MenuName12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="users-group">
        <div className="absolute inset-[45.83%_41.67%_37.5%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-[33.33%] right-[33.33%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-28.57%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 2.75">
              <path d={svgPaths.p1538d7c0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%_70.83%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.pdf05680} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_45.83%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 2.75">
              <path d={svgPaths.pdf6f400} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_62.5%_70.83%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p2f254f00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_70.83%_45.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 2.75">
              <path d={svgPaths.p1f058c00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Staffs</p>
      </div>
    </div>
  );
}

function MenuName13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="building-bank">
        <div className="absolute inset-[87.5%_12.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 1">
              <path d="M0.5 0.5H11" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 1">
              <path d="M0.5 0.5H11" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[20.83%] right-[20.83%] top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-6.12%_-28.58%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16692 2.75013">
              <path d={svgPaths.p1f3c7400} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_83.33%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-7.79%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.41667">
              <path d="M0.5 0.5V6.91667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_16.67%_12.5%_83.33%]" data-name="Vector">
          <div className="absolute inset-[-7.79%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.41667">
              <path d="M0.5 0.5V6.91667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.75">
              <path d="M0.5 0.5V2.25" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[29.17%] left-1/2 right-1/2 top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.75">
              <path d="M0.5 0.5V2.25" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_33.33%_29.17%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.75">
              <path d="M0.5 0.5V2.25" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Departments</p>
      </div>
    </div>
  );
}

function MenuName14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="user-cog">
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-[47.92%] top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-13.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79167 4.5">
              <path d={svgPaths.p27feb980} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_70.84%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.58%_20.83%_29.17%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.5%_20.83%_6.25%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[86.39%] right-[8.2%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-66%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75792 1.43767">
              <path d={svgPaths.p2e2de980} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_28.04%_13.54%_66.54%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.pfe59200} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[66.54%] right-[28.04%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_8.2%_13.54%_86.39%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Designations</p>
      </div>
    </div>
  );
}

function MenuName15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="user-check">
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-[41.67%] top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 4.5">
              <path d={svgPaths.p1eec9100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
              <path d={svgPaths.p3f734180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Attendance</p>
      </div>
    </div>
  );
}

function MenuName16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="users-minus">
        <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_43.73%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-8.16%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.12735 4.5">
              <path d={svgPaths.p16606580} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-11.06%_-28.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.7547 5.52107">
              <path d={svgPaths.p122943a0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[79.17%_8.33%_20.83%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1">
              <path d="M0.5 0.5H4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Leaves</p>
      </div>
    </div>
  );
}

function MenuName17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="home-exclamation">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p1cf8dc80} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_38.1%_12.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.64%_-10.71%_-14.63%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.41672 5.66667">
              <path d={svgPaths.p32dd50a0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_20.83%_20.83%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.75">
              <path d="M0.5 0.5V2.25" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[91.67%_20.83%_8.29%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2.00583">
              <path d="M1 1V1.00583" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Holidays</p>
      </div>
    </div>
  );
}

function MenuName18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="coin">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p33bbbb00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 5.66799">
              <path d={svgPaths.p291298e0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[29.17%] left-1/2 right-1/2 top-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6.83333">
              <path d="M0.5 0.5V6.33333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Payroll</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName12 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName13 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName14 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName15 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName16 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName17 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName18 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">{`Finance & Accounts`}</p>
      </div>
    </div>
  );
}

function MenuName19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="credit-card">
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.12%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.16667">
              <path d={svgPaths.p15c19f40} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 1">
              <path d="M0.5 0.5H11" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_70.79%_37.5%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.00583 1">
              <path d="M0.5 0.5H0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_45.83%_37.5%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 1">
              <path d="M0.5 0.5H1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Expenses</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName19 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="coins">
        <div className="absolute inset-[45.83%_12.5%_29.17%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
              <path d={svgPaths.p3a3c5600} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_12.5%_12.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-12.24%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5.08333">
              <path d={svgPaths.p24525880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_37.5%_62.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
              <path d={svgPaths.p22543500} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.14%_-42.87%_-7.14%_-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16679 8.00012">
              <path d={svgPaths.p1f78aaa0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_79.17%_45.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-42.86%_-42.87%_-42.87%_-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16679 2.16679">
              <path d={svgPaths.p300c5980} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Income</p>
      </div>
    </div>
  );
}

function MenuName21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="file-invoice">
        <div className="absolute inset-[12.5%_20.83%_66.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-17.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91667 3.91667">
              <path d={svgPaths.p24999700} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 11.5">
              <path d={svgPaths.p397c1280} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_58.33%_70.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-85.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.58333 1">
              <path d="M0.5 0.5H1.08333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1">
              <path d="M0.5 0.5H4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_37.5%_29.17%_54.17%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 1">
              <path d="M0.5 0.5H1.66667" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Invoices</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName21 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="cards">
        <div className="absolute inset-[16.71%_29.1%_12.47%_12.54%]" data-name="Vector">
          <div className="absolute inset-[-5.04%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16942 10.9153">
              <path d={svgPaths.p233c5300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_29.17%_64.58%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-19.05%_-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 3.625">
              <path d={svgPaths.p34afaf90} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[45.83%] left-[79.17%] right-[10.93%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-12.25%_-36.05%_-12.25%_-36.06%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.38693 5.08359">
              <path d={svgPaths.p10fe2d00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Payments</p>
      </div>
    </div>
  );
}

function MenuName23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="transition-right">
        <div className="absolute bottom-[12.5%] left-3/4 right-[12.5%] top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-28.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 11.5">
              <path d={svgPaths.pe6cc600} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_62.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 11.5">
              <path d={svgPaths.p5468d00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[37.5%] right-[29.17%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.5px_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 1">
              <path d="M0.5 0.5H5.16667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_29.17%_37.5%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-28.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 4.5">
              <path d="M0.5 4L2.25 2.25L0.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Transactions</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName20 />
          </div>
        </div>
      </div>
      <Container34 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName22 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName23 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Administration</p>
      </div>
    </div>
  );
}

function MenuName24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="user">
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
              <path d={svgPaths.p19968100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Users</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName24 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gift() {
  return (
    <div className="h-[32px] relative shrink-0 w-[20px]" data-name="Gift">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 32">
        <g id="Gift">
          <line id="Line 426" stroke="var(--stroke-0, #E7E8EB)" x1="10" x2="10" y1="-2.18557e-08" y2="32" />
          <circle cx="10" cy="16" fill="var(--fill-0, white)" id="Ellipse 11" r="7" />
          <circle cx="10" cy="16" fill="var(--fill-0, #2E37A4)" id="Ellipse 12" r="3.5" stroke="var(--stroke-0, #E7E8EB)" />
        </g>
      </svg>
    </div>
  );
}

function MenuName25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Gift />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#2e37a4] text-[14px] whitespace-nowrap">Income Report</p>
        </div>
      </div>
    </div>
  );
}

function Gift1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[20px]" data-name="Gift">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 32">
        <g id="Gift">
          <line id="Line 426" stroke="var(--stroke-0, #E7E8EB)" x1="10" x2="10" y1="-2.18557e-08" y2="32" />
          <circle cx="10" cy="16" fill="var(--fill-0, white)" id="Ellipse 11" r="7" />
          <circle cx="10" cy="16" fill="var(--fill-0, #E7E8EB)" id="Ellipse 12" r="3.5" stroke="var(--stroke-0, #E7E8EB)" />
        </g>
      </svg>
    </div>
  );
}

function MenuName26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Gift1 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">Expense Report</p>
        </div>
      </div>
    </div>
  );
}

function Gift2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[20px]" data-name="Gift">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 32">
        <g id="Gift">
          <line id="Line 426" stroke="var(--stroke-0, #E7E8EB)" x1="10" x2="10" y1="-2.18557e-08" y2="32" />
          <circle cx="10" cy="16" fill="var(--fill-0, white)" id="Ellipse 11" r="7" />
          <circle cx="10" cy="16" fill="var(--fill-0, #E7E8EB)" id="Ellipse 12" r="3.5" stroke="var(--stroke-0, #E7E8EB)" />
        </g>
      </svg>
    </div>
  );
}

function MenuName27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Gift2 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">{`Profit & Loss`}</p>
        </div>
      </div>
    </div>
  );
}

function Gift3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[20px]" data-name="Gift">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 32">
        <g id="Gift">
          <line id="Line 426" stroke="var(--stroke-0, #E7E8EB)" x1="10" x2="10" y1="-2.18557e-08" y2="32" />
          <circle cx="10" cy="16" fill="var(--fill-0, white)" id="Ellipse 11" r="7" />
          <circle cx="10" cy="16" fill="var(--fill-0, #E7E8EB)" id="Ellipse 12" r="3.5" stroke="var(--stroke-0, #E7E8EB)" />
        </g>
      </svg>
    </div>
  );
}

function MenuName28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Gift3 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">Appointment Report</p>
        </div>
      </div>
    </div>
  );
}

function Gift4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[20px]" data-name="Gift">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 32">
        <g id="Gift">
          <line id="Line 426" stroke="var(--stroke-0, #E7E8EB)" x1="10" x2="10" y1="-2.18557e-08" y2="32" />
          <circle cx="10" cy="16" fill="var(--fill-0, white)" id="Ellipse 11" r="7" />
          <circle cx="10" cy="16" fill="var(--fill-0, #E7E8EB)" id="Ellipse 12" r="3.5" stroke="var(--stroke-0, #E7E8EB)" />
        </g>
      </svg>
    </div>
  );
}

function MenuName29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Gift4 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">Patient Report</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[228px]" data-name="Submenu">
        <MenuName25 />
      </div>
      <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[228px]" data-name="Submenu">
        <MenuName26 />
      </div>
      <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[228px]" data-name="Submenu">
        <MenuName27 />
      </div>
      <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[228px]" data-name="Submenu">
        <MenuName28 />
      </div>
      <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[228px]" data-name="Submenu">
        <MenuName29 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="report">
              <div className="absolute inset-[20.83%_51.26%_12.5%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5.36%_-11.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48992 10.3333">
                    <path d={svgPaths.pc618be0} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/4 left-3/4 right-[8.33%] top-[58.33%]" data-name="Vector">
                <div className="absolute inset-[-21.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
                    <path d="M0.5 0.5V2.83333H2.83333" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[54.17%] left-[58.33%] right-1/4 top-[20.83%]" data-name="Vector">
                <div className="absolute inset-[-14.29%_-21.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 4.5">
                    <path d={svgPaths.p23526d00} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_41.67%_70.83%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-21.43%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
                    <path d={svgPaths.p348ee40} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[58.33%_8.33%_8.33%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-10.71%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
                    <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[54.17%] left-[33.33%] right-1/2 top-[45.83%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-21.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 1">
                    <path d="M0.5 0.5H2.83333" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[62.5%_54.17%_37.5%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-28.57%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 1">
                    <path d="M0.5 0.5H2.25" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#2e37a4] text-[14px]">
              <p className="leading-[21px]">Reports</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-down">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-14.29%_-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.5">
                    <path d="M0.5 0.5L4 4L7.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Content</p>
      </div>
    </div>
  );
}

function MenuName30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="brand-pagekit">
        <div className="absolute bottom-[16.67%] left-[29.17%] right-1/4 top-[16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-7.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41667 10.3333">
              <path d={svgPaths.p36afa9d0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Pages</p>
      </div>
    </div>
  );
}

function MenuName31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="brand-blogger">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p20f72800} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_45.83%_58.33%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 2.75">
              <path d={svgPaths.p6b33400} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_29.17%_29.17%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 2.75">
              <path d={svgPaths.p296fd00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Blogs</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName31 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="map-pins">
        <div className="absolute bottom-[47.26%] left-[16.67%] right-1/2 top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-8.88%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 6.63375">
              <path d={svgPaths.p84d5880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_66.67%_70.79%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[13.93%] left-1/2 right-[16.67%] top-[45.83%]" data-name="Vector">
          <div className="absolute inset-[-8.88%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 6.63375">
              <path d={svgPaths.p6f8db00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_33.33%_37.46%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Location</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName32 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="brand-wechat">
        <div className="absolute inset-[41.67%_8.33%_16.67%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-7.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41667 6.83333">
              <path d={svgPaths.p31ccd500} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_33.33%_29.17%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-6.59%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 8.58333">
              <path d={svgPaths.pb15ec00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_58.29%_66.67%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.00583 1">
              <path d="M0.5 0.5H0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_70.79%_66.67%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.00583 1">
              <path d="M0.5 0.5H0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_37.46%_41.67%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.00583 1">
              <path d="M0.5 0.5H0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-3/4 right-[24.96%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.00583 1">
              <path d="M0.5 0.5H0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Testimonials</p>
      </div>
    </div>
  );
}

function MenuName34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="question-mark">
        <div className="absolute inset-[20.83%_33.31%_37.5%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66948 6.83334">
              <path d={svgPaths.p37e4780} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[20.79%] left-1/2 right-1/2 top-[79.17%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">FAQ</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName30 />
          </div>
        </div>
      </div>
      <Container44 />
      <Container45 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName33 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName34 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">Support</p>
        </div>
      </div>
    </div>
  );
}

function MenuName35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="message-dots">
        <div className="absolute inset-[20.83%_16.67%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3333 10.3333">
              <path d={svgPaths.p19e5a500} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[54.12%] left-1/2 right-1/2 top-[45.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_66.67%_54.12%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_33.33%_54.12%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Contact Messages</p>
      </div>
    </div>
  );
}

function MenuName36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="ticket">
        <div className="absolute inset-[20.83%_37.5%_70.83%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-42.86%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.16667">
              <path d="M0.5 0.5V1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_37.5%_45.83%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-42.86%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.16667">
              <path d="M0.5 0.5V1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_37.5%_20.83%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-42.86%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.16667">
              <path d="M0.5 0.5V1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.12%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.16667">
              <path d={svgPaths.p21ff2680} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Tickets</p>
      </div>
    </div>
  );
}

function MenuName37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="speakerphone">
        <div className="absolute bottom-[41.67%] left-3/4 right-[12.5%] top-[33.33%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-28.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 4.5">
              <path d={svgPaths.p14e88a00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_58.33%_16.67%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-28.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 8">
              <path d={svgPaths.p10ef4500} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[25.09%] left-[12.5%] right-1/4 top-[16.76%]" data-name="Vector">
          <div className="absolute inset-[-6.14%_-5.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.75 9.14154">
              <path d={svgPaths.p14839980} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Announcements</p>
      </div>
    </div>
  );
}

function MenuName38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="mail-bolt">
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.12%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.16667">
              <path d={svgPaths.p54d7d00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_12.5%_45.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5001 4.50005">
              <path d={svgPaths.p3149dd80} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_12.5%_8.33%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 4.50011">
              <path d={svgPaths.p559c280} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Newsletters</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName35 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName36 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName37 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName38 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Menu">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
          <p className="leading-[19.5px]">Pages</p>
        </div>
      </div>
    </div>
  );
}

function MenuName39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="player-play">
        <div className="absolute inset-[16.67%_16.67%_16.67%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-6.59%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.58333 10.3333">
              <path d={svgPaths.p3be1ff00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Starter</p>
      </div>
    </div>
  );
}

function MenuName40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="user-circle">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p33bbbb00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_37.5%_45.83%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d={svgPaths.p191ed300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_25.69%_21.44%_25.7%]" data-name="Vector">
          <div className="absolute inset-[-30.02%_-7.35%_-30.03%_-7.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.80543 2.66555">
              <path d={svgPaths.p3808a500} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Profile</p>
      </div>
    </div>
  );
}

function MenuName41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="photo">
        <div className="absolute inset-[33.33%_37.46%_66.67%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.00583 1">
              <path d="M0.5 0.5H0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p3d0ba780} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[43.04%_33.33%_33.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-15.12%_-6.59%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.58333 4.30735">
              <path d={svgPaths.p2a3e7380} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[51.38%_12.5%_33.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-23.36%_-12.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08333 3.14069">
              <path d={svgPaths.p3e313f00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Gallery</p>
      </div>
    </div>
  );
}

function MenuName42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="timeline-event-text">
        <div className="absolute bottom-[8.33%] left-[41.67%] right-[41.67%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_58.33%_16.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1">
              <path d="M4 0.5H0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_16.67%_16.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1">
              <path d="M0.5 0.5H4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p31a4e900} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-0.5px_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1">
              <path d="M0.5 0.5H4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[62.5%] left-[37.5%] right-1/2 top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-28.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 1">
              <path d="M0.5 0.5H2.25" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Timeline</p>
      </div>
    </div>
  );
}

function MenuName43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="tag">
        <div className="absolute inset-[31.25%_60.42%_60.42%_31.25%]" data-name="Vector">
          <div className="absolute inset-[-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 2.16667">
              <path d={svgPaths.p17b77c80} fill="var(--fill-0, #0A1B39)" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9168 10.9168">
              <path d={svgPaths.p37c1f000} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Pricing</p>
      </div>
    </div>
  );
}

function MenuName44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="sparkles">
        <div className="absolute inset-[16.67%_16.67%_16.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-5.04%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.9167 10.3333">
              <path d={svgPaths.p8533880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Coming Soon</p>
      </div>
    </div>
  );
}

function MenuName45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="settings-down">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-4.75%_-4.75%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4988 11.4988">
              <path d={svgPaths.pa3a2500} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_20.83%_8.33%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.5">
              <path d="M0.5 0.5V4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[79.17%_8.33%_8.33%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 2.75">
              <path d="M4 0.5L2.25 2.25L0.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d={svgPaths.p17e4da00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Under Maintenance</p>
      </div>
    </div>
  );
}

function MenuName46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="shield-check">
        <div className="absolute inset-[12.5%_12.55%_13.14%_12.55%]" data-name="Vector">
          <div className="absolute inset-[-4.8%_-4.77%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4849 11.4103">
              <path d={svgPaths.p36fc11f0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
              <path d={svgPaths.p3f734180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function MenuName47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="file-time">
        <div className="absolute inset-[12.5%_20.83%_66.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-17.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91667 3.91667">
              <path d={svgPaths.p24999700} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 11.5">
              <path d={svgPaths.p397c1280} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[33.33%] right-[33.33%] top-[41.67%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-[45.83%] top-[52.07%]" data-name="Vector">
          <div className="absolute inset-[-34.23%_-85.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.58333 2.46067">
              <path d={svgPaths.p3588c0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">{`Terms & Conditions`}</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName39 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName40 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName41 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName42 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName43 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName44 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName45 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName46 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName47 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Authendication</p>
      </div>
    </div>
  );
}

function MenuName48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="login">
        <div className="absolute inset-[16.67%_41.67%_16.67%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-7.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41667 10.3333">
              <path d={svgPaths.p1ed6cf00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_16.67%_37.5%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-6.59%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.58333 4.5">
              <path d={svgPaths.p20c5e400} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Login</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName48 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="file-pencil">
        <div className="absolute inset-[12.5%_20.83%_66.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-17.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91667 3.91667">
              <path d={svgPaths.p24999700} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 11.5">
              <path d={svgPaths.p397c1280} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[33.33%] right-[35.77%] top-[44.11%]" data-name="Vector">
          <div className="absolute inset-[-11.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.32496 5.32496">
              <path d={svgPaths.p12660300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Register</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName49 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="lock-exclamation">
        <div className="absolute inset-[45.83%_21.94%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-6.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.01158 6.83333">
              <path d={svgPaths.p2f233880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
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
        <div className="absolute inset-[66.67%_20.83%_20.83%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.75">
              <path d="M0.5 0.5V2.25" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[91.67%_20.83%_8.29%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2.00583">
              <path d="M1 1V1.00583" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Forgot Password</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName50 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="restore">
        <div className="absolute inset-[12.5%_12.48%_12.5%_12.75%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-4.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4675 11.5">
              <path d={svgPaths.p142a3e00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_66.67%_62.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-17.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91667 3.91667">
              <path d="M0.5 0.5V3.41667H3.41667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%]" data-name="Vector">
          <div className="absolute inset-[-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 2.16667">
              <path d={svgPaths.p1671f900} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Reset Password</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName51 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="mail-check">
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.12%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.16667">
              <path d={svgPaths.p15d68ca0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_12.5%_45.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5001 4.50005">
              <path d={svgPaths.p3149dd80} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
              <path d={svgPaths.p3f734180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Email Verification</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName52 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="discount-check">
        <div className="absolute inset-[12.55%_12.46%_12.46%_12.55%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4985 11.4985">
              <path d={svgPaths.p2ba8df00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
              <path d={svgPaths.p3f734180} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">2 Step Verification</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName53 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Lock Screen</p>
      </div>
    </div>
  );
}

function MenuName55() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="exclamation-mark-off">
        <div className="absolute bottom-[20.79%] left-1/2 right-1/2 top-[79.17%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6.83333">
              <path d={svgPaths.p3a6f7c00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Error Pages</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName55 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName54 />
          </div>
        </div>
      </div>
      <Container61 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Settings</p>
      </div>
    </div>
  );
}

function MenuName56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="user-cog">
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.66667">
              <path d={svgPaths.p1333fe00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-[47.92%] top-[62.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-13.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79167 4.5">
              <path d={svgPaths.p27feb980} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_70.84%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.58%_20.83%_29.17%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.5%_20.83%_6.25%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[86.39%] right-[8.2%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-66%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75792 1.43767">
              <path d={svgPaths.p2e2de980} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_28.04%_13.54%_66.54%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.pfe59200} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[66.54%] right-[28.04%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_8.2%_13.54%_86.39%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Account Settings</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName56 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="world-cog">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p32fa1880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_15%_62.5%_15%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-5.1%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8 1">
              <path d="M0.5 0.5H10.3" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_47.92%_37.5%_15%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-9.63%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.19167 1">
              <path d="M0.5 0.5H5.69167" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_52.08%_12.5%_37.18%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-33.26%_-4.76%_-33.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50378 11.5001">
              <path d={svgPaths.p2c2eb500} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_37.18%_44.27%_52.08%]" data-name="Vector">
          <div className="absolute inset-[-8.26%_-33.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50389 7.05276">
              <path d={svgPaths.pbbbd800} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_70.84%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.58%_20.83%_29.17%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.5%_20.83%_6.25%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[86.39%] right-[8.2%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-66%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75792 1.43767">
              <path d={svgPaths.p2e2de980} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_28.04%_13.54%_66.54%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.pfe59200} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[66.54%] right-[28.04%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_8.2%_13.54%_86.39%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Website Settings</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName57 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="building-hospital">
        <div className="absolute inset-[87.5%_12.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 1">
              <path d="M0.5 0.5H11" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 11.5">
              <path d={svgPaths.p2c319400} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_37.5%_12.5%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d={svgPaths.p8fcec00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_41.67%_62.5%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 1">
              <path d="M0.5 0.5H2.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[54.17%] left-1/2 right-1/2 top-[29.17%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3.33333">
              <path d="M0.5 0.5V2.83333" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Clinic Settings</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName58 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName59() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="device-mobile-cog">
        <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11.5">
              <path d={svgPaths.p12b5b780} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_45.83%_83.33%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 1">
              <path d="M0.5 0.5H1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[29.12%] left-1/2 right-1/2 top-[70.83%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_70.84%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.58%_20.83%_29.17%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.5%_20.83%_6.25%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[86.39%] right-[8.2%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-66%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75792 1.43767">
              <path d={svgPaths.p2e2de980} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_28.04%_13.54%_66.54%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.pfe59200} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[66.54%] right-[28.04%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_8.2%_13.54%_86.39%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">App Settings</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName59 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="device-desktop-cog">
        <div className="absolute inset-[16.67%_12.5%_33.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 8">
              <path d={svgPaths.p11b0a880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-[29.17%] right-1/2 top-[83.33%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-17.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91667 1">
              <path d="M0.5 0.5H3.41667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_62.5%_16.67%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3.33333">
              <path d="M0.5 0.5V2.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[70.83%_12.5%_12.5%_70.84%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[64.58%_20.83%_29.17%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.5%_20.83%_6.25%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-57.14%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.875">
              <path d="M0.5 0.5V1.375" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[86.39%] right-[8.2%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-66%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.75792 1.43767">
              <path d={svgPaths.p2e2de980} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_28.04%_13.54%_66.54%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.pfe59200} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[66.54%] right-[28.04%] top-[71.88%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[83.33%_8.2%_13.54%_86.39%]" data-name="Vector">
          <div className="absolute inset-[-114.3%_-65.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.7585 1.43767">
              <path d={svgPaths.p17304180} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">System Settings</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName60 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="settings-dollar">
        <div className="absolute inset-[12.5%_20.75%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-5.35%_-4.73%_-5.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.345 11.4971">
              <path d={svgPaths.p11f82380} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d={svgPaths.p3b744e00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_12.5%_12.5%_70.83%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 4.5">
              <path d={svgPaths.p25a7d000} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_20.83%_8.33%_79.17%]" data-name="Vector">
          <div className="absolute inset-[-10.71%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5.66667">
              <path d={svgPaths.p9b7a880} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">{`Finance & Accounts`}</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName61 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuName62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="settings-2">
        <div className="absolute inset-[8.34%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.29%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 12.6665">
              <path d={svgPaths.p2d86e280} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d={svgPaths.p17e4da00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Other Settings</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName62 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
      <Container71 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">UI Interface</p>
      </div>
    </div>
  );
}

function MenuName63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chart-pie">
        <div className="absolute inset-[13.31%_13.33%_12.64%_12.64%]" data-name="Vector">
          <div className="absolute inset-[-4.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3644 11.3679">
              <path d={svgPaths.p3430e200} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.58%_14.58%_62.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-15.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.20834 4.20834">
              <path d={svgPaths.p3f324100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Base UI</p>
      </div>
    </div>
  );
}

function MenuName64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="radar">
        <div className="absolute inset-[45.83%_12.5%_12.5%_45.83%]" data-name="Vector">
          <div className="absolute inset-[-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 6.83333">
              <path d={svgPaths.pb083480} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_33.33%_33.33%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-9.52%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.25003 6.25003">
              <path d={svgPaths.p25753090} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.54%_14.64%_14.6%_12.52%]" data-name="Vector">
          <div className="absolute inset-[-4.9%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1979 11.1998">
              <path d={svgPaths.p17e2b340} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Advanced UI</p>
      </div>
    </div>
  );
}

function MenuName65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chart-donut">
        <div className="absolute inset-[13.31%_13.33%_12.64%_12.64%]" data-name="Vector">
          <div className="absolute inset-[-4.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3644 11.3679">
              <path d={svgPaths.pa6f7300} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[14.58%_14.58%_62.5%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-15.58%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.20834 4.20834">
              <path d={svgPaths.p1f4a7400} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Charts</p>
      </div>
    </div>
  );
}

function MenuName66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="icons">
        <div className="absolute inset-[12.5%_58.33%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-12.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08333 5.08333">
              <path d={svgPaths.p11554f00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_56.25%_12.5%_10.42%]" data-name="Vector">
          <div className="absolute inset-[-12.24%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 5.08333">
              <path d={svgPaths.p1b5ec400} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_12.5%_58.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-12.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08333 5.08333">
              <path d="M0.5 0.5L4.58333 4.58333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_12.5%_58.33%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-12.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08333 5.08333">
              <path d="M0.5 4.58333L4.58333 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_12.5%_12.5%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-12.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08333 5.08333">
              <path d={svgPaths.p38a8d80} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Icons</p>
      </div>
    </div>
  );
}

function MenuName67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="forms">
        <div className="absolute bottom-[12.5%] left-[37.5%] right-1/2 top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-28.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 11.5">
              <path d={svgPaths.p33b76f08} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/4 right-[62.5%] top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-28.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.75 11.5">
              <path d={svgPaths.pe6cc600} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_12.5%_29.17%_54.17%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.66667 6.83333">
              <path d={svgPaths.p3c2d7700} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_79.17%_29.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-42.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.16667 6.83333">
              <path d={svgPaths.p3d7cfa80} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[70.83%] right-[29.12%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00583 2">
              <path d="M1 1H1.00583" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[54.17%] right-[45.79%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.00583 2">
              <path d="M1 1H1.00583" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Forms</p>
      </div>
    </div>
  );
}

function MenuName68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="table-row">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 11.5">
              <path d={svgPaths.p237080} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_62.5%_62.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 4.5">
              <path d="M4 0.5L0.5 4" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_41.67%_58.33%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-12.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08333 5.08333">
              <path d="M4.58333 0.5L0.5 4.58333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-1/2 right-[20.83%] top-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-12.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.08333 5.08333">
              <path d="M4.58333 0.5L0.5 4.58333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-[70.83%] right-[12.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d="M2.83333 0.5L0.5 2.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 1">
              <path d="M0.5 0.5H11" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_58.33%_12.5%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-7.79%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.41667">
              <path d="M0.5 0.5V6.91667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Tables</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName63 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName64 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName65 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName66 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName67 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName68 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Help</p>
      </div>
    </div>
  );
}

function MenuName69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="file-dots">
        <div className="absolute inset-[12.5%_20.83%_66.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-17.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91667 3.91667">
              <path d={svgPaths.p24999700} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-6.12%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 11.5">
              <path d={svgPaths.p397c1280} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_62.5%_41.62%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.62%] left-1/2 right-1/2 top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_37.5%_41.62%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1.00583">
              <path d="M0.5 0.5V0.505833" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Documentation</p>
      </div>
    </div>
  );
}

function MenuName70() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="status-change">
        <div className="absolute inset-[66.67%_66.67%_16.67%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.pcce6100} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_16.67%_16.67%_66.67%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d={svgPaths.p398b4b00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/4 right-1/4 top-[16.67%]" data-name="Vector">
          <div className="absolute inset-[-10.71%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5.66667">
              <path d={svgPaths.p296c2780} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[62.5%] right-[12.5%] top-[37.5%]" data-name="Vector">
          <div className="absolute inset-[-28.57%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 2.75">
              <path d="M0.5 0.5L2.25 2.25L4 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Changelog</p>
      </div>
      <div className="bg-[#ef1e1e] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[18px]">v1.35</p>
        </div>
      </div>
    </div>
  );
}

function MenuName71() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="versions">
        <div className="absolute inset-[20.83%_16.67%_20.83%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-6.12%_-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.83333 9.16667">
              <path d={svgPaths.p9741d70} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_70.83%_29.17%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-8.57%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6.83333">
              <path d="M0.5 0.5V6.33333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_83.33%_33.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-10.71%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5.66667">
              <path d="M0.5 0.5V5.16667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Multi Level</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName69 />
          </div>
        </div>
      </div>
      <div className="content-center flex flex-wrap gap-[8px] items-center px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-[228px]" data-name="Menu">
        <MenuName70 />
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName71 />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron-right">
              <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
                    <path d="M0.5 0.5L4 4L0.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-x-clip overflow-y-auto relative" data-name="Container">
      <Container15 />
      <Container20 />
      <Container27 />
      <Container30 />
      <Container35 />
      <Container41 />
      <Container46 />
      <Container49 />
      <Container52 />
      <Container62 />
      <Container72 />
      <Container75 />
    </div>
  );
}

function Scroll() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative" data-name="Scroll">
      <Container14 />
    </div>
  );
}

function ScrollContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Scroll Container">
      <Scroll />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0 w-full" data-name="Clinic Select">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[33px] items-center px-[16px] py-[12px] relative size-full">
            <Clinic />
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="arrows-transfer-up">
              <div className="absolute inset-[62.5%_70.83%_12.5%_29.17%]" data-name="Vector">
                <div className="absolute inset-[-14.29%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.5">
                    <path d="M0.5 4V0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[58.33%] right-[16.67%] top-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-28.57%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 2.75">
                    <path d="M4 2.25L2.25 0.5L0.5 2.25" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_29.17%_12.5%_70.83%]" data-name="Vector">
                <div className="absolute inset-[-4.76%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 11.5">
                    <path d="M0.5 0.5V11" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[16.67%] right-[58.33%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-28.57%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 2.75">
                    <path d="M4 0.5L2.25 2.25L0.5 0.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_70.83%_79.17%_29.17%]" data-name="Vector">
                <div className="absolute inset-[-42.86%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.16667">
                    <path d="M0.5 0.5V1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%_70.83%_54.17%_29.17%]" data-name="Vector">
                <div className="absolute inset-[-42.86%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2.16667">
                    <path d="M0.5 0.5V1.66667" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollContainer />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-r border-solid inset-0 pointer-events-none" />
      <Container7 />
      <Container12 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[25.351px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3507 25.3507">
        <g id="Icon">
          <path d={svgPaths.p2b53d900} fill="var(--fill-0, #2E37A4)" id="Rectangle 28" />
          <path d={svgPaths.p20f3a300} fill="var(--fill-0, #2E37A4)" id="Rectangle 27" />
          <path d={svgPaths.p131c7380} fill="var(--fill-0, #00D3C7)" id="Rectangle 30" />
          <path d={svgPaths.pa4eae00} fill="var(--fill-0, white)" id="Rectangle 30_2" />
        </g>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[16px] relative rounded-[15.556px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05)] shrink-0 size-[48px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[69.75px] items-start leading-[21px] not-italic relative shrink-0 text-[14px] text-center w-full" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0a1b39] w-full">Upgrade To Pro</p>
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal min-h-px relative text-[#6c7688] w-full">Check 1 min video and begin use Preclinic like a pro</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] flex items-center left-[200px] p-[4px] rounded-[20px] top-[12px]" data-name="Container">
      <div className="overflow-clip relative rounded-[24px] shrink-0 size-[14px]" data-name="Close Icon">
        <div className="absolute inset-1/4" data-name="Vector">
          <div className="absolute inset-[-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <g id="Vector">
                <path d="M7.5 0.5L0.5 7.5Z" fill="var(--fill-0, #0A1B39)" />
                <path d="M7.5 0.5L0.5 7.5" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute inset-1/4" data-name="Vector">
          <div className="absolute inset-[-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d="M0.5 0.5L7.5 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#f5f6f8] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center p-[20px] relative size-full">
          <Container84 />
          <Container85 />
          <Container86 />
        </div>
      </div>
    </div>
  );
}

function DarkMode() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Dark Mode">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Clear Night 3">
        <div className="absolute inset-[12.47%_15.36%_12.53%_12.51%]" data-name="Vector">
          <div className="absolute inset-[-4.76%_-4.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.098 11.5">
              <path d={svgPaths.p196ddc0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[21px] min-w-px not-italic relative text-[#0a1b39] text-[14px]">Dark Mode</p>
      <button className="bg-[#e7e8eb] content-stretch cursor-pointer flex h-[16px] items-center p-[4px] relative rounded-[8px] shrink-0 w-[30px]" data-name="Switcher">
        <div className="bg-[rgba(255,255,255,0.8)] h-[8px] rounded-[6px] shrink-0 w-[7.991px]" />
      </button>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container83 />
      <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0 w-full" data-name="Dark Mode Component">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container82 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container81 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <Container79 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container6 />
      <Container78 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function SidebarScroll() {
  return (
    <div className="absolute content-stretch flex h-[1236px] items-start left-0 top-0" data-name="Sidebar  Scroll">
      <div className="bg-white content-stretch flex flex-col items-start relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[276px]" data-name="Sidebar Default">
        <Container4 />
      </div>
    </div>
  );
}

export default function PatientReport() {
  return (
    <div className="bg-[#f5f6f8] relative size-full" data-name="Patient Report">
      <Footer />
      <MainContainer />
      <div className="absolute bg-white content-stretch flex flex-col h-[52px] items-start justify-center left-[276px] px-[24px] py-[8px] top-0 w-[1164px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
        <Container />
      </div>
      <SidebarScroll />
    </div>
  );
}
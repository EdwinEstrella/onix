import svgPaths from "./svg-ochgeyybpk";
import imgSignatureImage from "./21b2b1e7b691de9a6c8957cc9667e1c714e06bea.png";
import imgAvatarCircle from "./e11f5284f9aaa3e4330ba42e90f83be1f5843642.png";

function BackButtonContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Back Button Container">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Back Button Icon">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-7.14%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 8">
              <path d="M4 0.5L0.5 4L4 7.5" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Invoices</p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Section Header">
      <BackButtonContainer />
    </div>
  );
}

function InvoiceHeaderLeft() {
  return (
    <div className="h-[28px] relative shrink-0 w-[113.815px]" data-name="Invoice Header Left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.815 28">
        <g id="Container">
          <g id="Icon">
            <path d={svgPaths.p259fef80} fill="var(--fill-0, #2E37A4)" id="Rectangle 28" />
            <path d={svgPaths.p171a4680} fill="var(--fill-0, #2E37A4)" id="Rectangle 27" />
            <path d={svgPaths.pe2aef00} fill="var(--fill-0, #00D3C7)" id="Rectangle 30" />
            <path d={svgPaths.p14a70600} fill="var(--fill-0, white)" id="Rectangle 30_2" />
          </g>
          <g id="Preclinic">
            <path d={svgPaths.p5376160} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p4e03580} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p3b258000} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p6394600} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p2fcf200} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p1568ae00} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p2c7a0300} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.pa027180} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p1230be00} fill="var(--fill-0, #030303)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DueDateContainer() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Due Date Container">
      <div className="bg-[#ef1e1e] content-stretch flex h-[20px] items-center justify-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
          <p className="leading-[18px]">Due in 8 days</p>
        </div>
      </div>
    </div>
  );
}

function InvoiceNumber() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative rounded-[8px] shrink-0 w-[94px]" data-name="Invoice Number">
      <DueDateContainer />
    </div>
  );
}

function InvoiceHeader() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Invoice Header">
      <InvoiceHeaderLeft />
      <div className="flex flex-row items-center self-stretch">
        <InvoiceNumber />
      </div>
    </div>
  );
}

function InvoiceNumber1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative rounded-[8px] shrink-0" data-name="Invoice Number">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">Invoice Number :</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Invoice Number Value">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">INV0025</p>
      </div>
    </div>
  );
}

function InvoiceNumber2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative rounded-[8px] shrink-0" data-name="Invoice Number">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">Issued On :</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Issued On Value">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">25 Jan 2025</p>
      </div>
    </div>
  );
}

function DueDateContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Due Date Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">{`Due Date : `}</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Due Date Value">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">31 Jan 2025</p>
      </div>
    </div>
  );
}

function RecurringInvoiceContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Recurring Invoice Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-pre">{`Recurring Invoice  : `}</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Recurring Invoice Value">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Monthly</p>
      </div>
    </div>
  );
}

function InvoiceDatesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Invoice Dates Container">
      <InvoiceNumber1 />
      <InvoiceNumber2 />
      <DueDateContainer1 />
      <RecurringInvoiceContainer />
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Date">
      <InvoiceDatesContainer />
    </div>
  );
}

function InvoiceDetailsLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[321.333px]" data-name="Invoice Details Left">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[19.2px] not-italic relative shrink-0 text-[#0a1b39] text-[16px] whitespace-nowrap">Invoice Details</p>
      <Date />
    </div>
  );
}

function InvoiceFromContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 w-[176px]" data-name="Invoice From Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0a1b39] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[19.2px]">Invoice From</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0a1b39] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">Andrew Fletcher</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#6c7688] text-[14px] w-[min-content]">
        <p className="leading-[21px] mb-0">5754 Airport Rd</p>
        <p className="leading-[21px] mb-0">Coosada, AL, 36020</p>
        <p className="leading-[21px]">United States</p>
      </div>
    </div>
  );
}

function InvoiceToContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end leading-[0] not-italic relative shrink-0 text-right w-[176px]" data-name="Invoice To Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#0a1b39] text-[16px] whitespace-nowrap">
        <p className="leading-[19.2px]">Invoice To</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Andrew Fletcher</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#6c7688] text-[14px] w-[min-content]">
        <p className="leading-[21px] mb-0">299 Star Trek Drive, Florida, 3240,</p>
        <p className="leading-[21px]">United States</p>
      </div>
    </div>
  );
}

function InvoiceDetailsContainer() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Invoice Details Container">
      <InvoiceDetailsLeft />
      <InvoiceFromContainer />
      <InvoiceToContainer />
    </div>
  );
}

function InvoiceContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Invoice Container">
      <InvoiceHeader />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 886 1">
            <line id="Line 83" stroke="var(--stroke-0, #E7E8EB)" x2="886" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <InvoiceDetailsContainer />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 886 1">
            <line id="Line 83" stroke="var(--stroke-0, #E7E8EB)" x2="886" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function InvoiceContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Invoice Container">
      <InvoiceContainer1 />
    </div>
  );
}

function ProductNumberContainer1() {
  return (
    <div className="bg-[#f5f6f8] relative shrink-0 w-full" data-name="Product Number Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">#</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductNumberContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Number Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">1</p>
    </div>
  );
}

function ProductNumberContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Product Number Container">
      <ProductNumberContainer6 />
    </div>
  );
}

function ProductNumberContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Number Container">
      <ProductNumberContainer5 />
    </div>
  );
}

function ProductNumberContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Product Number Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[13.6px] relative size-full">
          <ProductNumberContainer4 />
        </div>
      </div>
    </div>
  );
}

function ProductNumberContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Number Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">2</p>
    </div>
  );
}

function ProductNumberContainer9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Product Number Container">
      <ProductNumberContainer10 />
    </div>
  );
}

function ProductNumberContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Number Container">
      <ProductNumberContainer9 />
    </div>
  );
}

function ProductNumberContainer7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Product Number Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[13.6px] relative size-full">
          <ProductNumberContainer8 />
        </div>
      </div>
    </div>
  );
}

function ProductNumberContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Product Number Container">
      <ProductNumberContainer3 />
      <ProductNumberContainer7 />
    </div>
  );
}

function ProductNumberContainer() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[42px]" data-name="Product Number Container">
      <ProductNumberContainer1 />
      <ProductNumberContainer2 />
    </div>
  );
}

function ProductNameContainer1() {
  return (
    <div className="bg-[#f5f6f8] relative shrink-0 w-full" data-name="Product Name Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Product/Item</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductNameContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Name Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Full body checkup</p>
    </div>
  );
}

function ProductNameContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Product Name Container">
      <ProductNameContainer6 />
    </div>
  );
}

function ProductNameContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Name Container">
      <ProductNameContainer5 />
    </div>
  );
}

function ProductNameContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Product Name Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[13.6px] relative size-full">
          <ProductNameContainer4 />
        </div>
      </div>
    </div>
  );
}

function ProductNameContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Name Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Blood Test</p>
    </div>
  );
}

function ProductNameContainer9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Product Name Container">
      <ProductNameContainer10 />
    </div>
  );
}

function ProductNameContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Name Container">
      <ProductNameContainer9 />
    </div>
  );
}

function ProductNameContainer7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Product Name Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[13.6px] relative size-full">
          <ProductNameContainer8 />
        </div>
      </div>
    </div>
  );
}

function ProductNameContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Product Name Container">
      <ProductNameContainer3 />
      <ProductNameContainer7 />
    </div>
  );
}

function ProductNameContainer() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 w-[156px]" data-name="Product Name Container">
      <ProductNameContainer1 />
      <ProductNameContainer2 />
    </div>
  );
}

function ProductDescriptionContainer1() {
  return (
    <div className="bg-[#f5f6f8] relative shrink-0 w-full" data-name="Product Description Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductDescriptionContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Description Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Complete health screening covering all major systems</p>
    </div>
  );
}

function ProductDescriptionContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Product Description Container">
      <ProductDescriptionContainer6 />
    </div>
  );
}

function ProductDescriptionContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Description Container">
      <ProductDescriptionContainer5 />
    </div>
  );
}

function ProductDescriptionContainer3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Product Description Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <ProductDescriptionContainer4 />
        </div>
      </div>
    </div>
  );
}

function ProductDescriptionContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Description Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">Routine blood analysis to assess overall health status</p>
    </div>
  );
}

function ProductDescriptionContainer9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Product Description Container">
      <ProductDescriptionContainer10 />
    </div>
  );
}

function ProductDescriptionContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Description Container">
      <ProductDescriptionContainer9 />
    </div>
  );
}

function ProductDescriptionContainer7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Product Description Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[12px] relative size-full">
          <ProductDescriptionContainer8 />
        </div>
      </div>
    </div>
  );
}

function ProductDescriptionContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Product Description Container">
      <ProductDescriptionContainer3 />
      <ProductDescriptionContainer7 />
    </div>
  );
}

function ProductDescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[386px]" data-name="Product Description Container">
      <ProductDescriptionContainer1 />
      <ProductDescriptionContainer2 />
    </div>
  );
}

function UnitCostContainer1() {
  return (
    <div className="bg-[#f5f6f8] relative shrink-0 w-full" data-name="Unit Cost Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Unit Cost</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UnitCostContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Unit Cost Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">$400</p>
    </div>
  );
}

function UnitCostContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Unit Cost Container">
      <UnitCostContainer6 />
    </div>
  );
}

function UnitCostContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Unit Cost Container">
      <UnitCostContainer5 />
    </div>
  );
}

function UnitCostContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Unit Cost Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <UnitCostContainer4 />
        </div>
      </div>
    </div>
  );
}

function UnitCostContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Unit Cost Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">$250</p>
    </div>
  );
}

function UnitCostContainer9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Unit Cost Container">
      <UnitCostContainer10 />
    </div>
  );
}

function UnitCostContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Unit Cost Container">
      <UnitCostContainer9 />
    </div>
  );
}

function UnitCostContainer7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Unit Cost Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <UnitCostContainer8 />
        </div>
      </div>
    </div>
  );
}

function UnitCostContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Unit Cost Container">
      <UnitCostContainer3 />
      <UnitCostContainer7 />
    </div>
  );
}

function UnitCostContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Unit Cost Container">
      <UnitCostContainer1 />
      <UnitCostContainer2 />
    </div>
  );
}

function QuantityContainer1() {
  return (
    <div className="bg-[#f5f6f8] relative shrink-0 w-full" data-name="Quantity Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Quantity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function QuantityContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Quantity Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">1</p>
    </div>
  );
}

function QuantityContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Quantity Container">
      <QuantityContainer6 />
    </div>
  );
}

function QuantityContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Quantity Container">
      <QuantityContainer5 />
    </div>
  );
}

function QuantityContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Quantity Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <QuantityContainer4 />
        </div>
      </div>
    </div>
  );
}

function QuantityContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Quantity Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">1</p>
    </div>
  );
}

function QuantityContainer9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Quantity Container">
      <QuantityContainer10 />
    </div>
  );
}

function QuantityContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Quantity Container">
      <QuantityContainer9 />
    </div>
  );
}

function QuantityContainer7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Quantity Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <QuantityContainer8 />
        </div>
      </div>
    </div>
  );
}

function QuantityContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Quantity Container">
      <QuantityContainer3 />
      <QuantityContainer7 />
    </div>
  );
}

function QuantityContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Quantity Container">
      <QuantityContainer1 />
      <QuantityContainer2 />
    </div>
  );
}

function AmountContainer1() {
  return (
    <div className="bg-[#f5f6f8] relative shrink-0 w-full" data-name="Amount Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
            <p className="leading-[21px]">Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AmountContainer6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Amount Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">$400</p>
    </div>
  );
}

function AmountContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[152.333px]" data-name="Amount Container">
      <AmountContainer6 />
    </div>
  );
}

function AmountContainer4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Amount Container">
      <AmountContainer5 />
    </div>
  );
}

function AmountContainer3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Amount Container">
      <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <AmountContainer4 />
        </div>
      </div>
    </div>
  );
}

function AmountContainer10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Amount Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">$250</p>
    </div>
  );
}

function AmountContainer9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Amount Container">
      <AmountContainer10 />
    </div>
  );
}

function AmountContainer8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Amount Container">
      <AmountContainer9 />
    </div>
  );
}

function AmountContainer7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Amount Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-[8px] relative size-full">
          <AmountContainer8 />
        </div>
      </div>
    </div>
  );
}

function AmountContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Amount Container">
      <AmountContainer3 />
      <AmountContainer7 />
    </div>
  );
}

function AmountContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Amount Container">
      <AmountContainer1 />
      <AmountContainer2 />
    </div>
  );
}

function ProductRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Product Row">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-[-1px] pointer-events-none" />
      <div className="flex flex-row items-center self-stretch">
        <ProductNumberContainer />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <ProductNameContainer />
      </div>
      <ProductDescriptionContainer />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <UnitCostContainer />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <QuantityContainer />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <AmountContainer />
      </div>
    </div>
  );
}

function ProductsListContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Products List Container">
      <ProductRow />
    </div>
  );
}

function ProductsListContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Products List Container">
      <ProductsListContainer1 />
    </div>
  );
}

function ProductsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Products Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#051321] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[19.2px]">Products/Service Items</p>
      </div>
      <ProductsListContainer />
    </div>
  );
}

function BankNameContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Bank Name Container">
      <p className="relative shrink-0 text-[#6c7688]">{`Bank Name : `}</p>
      <p className="relative shrink-0 text-[#0a1b39] text-right">ABC Bank</p>
    </div>
  );
}

function AccountNumberContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Account Number Container">
      <p className="relative shrink-0 text-[#6c7688]">{`Account Number : `}</p>
      <p className="relative shrink-0 text-[#0a1b39] text-right">782459739212</p>
    </div>
  );
}

function IfscCodeContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="IFSC Code Container">
      <p className="relative shrink-0 text-[#6c7688]">{`IFSC Code : `}</p>
      <p className="relative shrink-0 text-[#0a1b39] text-right">ABC0001345</p>
    </div>
  );
}

function PaymentReferenceContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Payment Reference Container">
      <p className="relative shrink-0 text-[#6c7688]">{`Payment Reference : `}</p>
      <p className="relative shrink-0 text-[#0a1b39] text-right">INV-20250220-001</p>
    </div>
  );
}

function BankDetailsList1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start leading-[21px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="Bank Details List">
      <BankNameContainer />
      <AccountNumberContainer />
      <IfscCodeContainer />
      <PaymentReferenceContainer />
    </div>
  );
}

function BankDetailsList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Bank Details List">
      <BankDetailsList1 />
    </div>
  );
}

function BankDetailsContainer4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Bank Details Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#051321] text-[16px] text-right whitespace-nowrap">
        <p className="leading-[19.2px]">Bank Details</p>
      </div>
      <BankDetailsList />
    </div>
  );
}

function BankDetailsContainer3() {
  return (
    <div className="content-start flex flex-wrap gap-y-[15px] items-start relative shrink-0" data-name="Bank Details Container">
      <BankDetailsContainer4 />
    </div>
  );
}

function BankDetailsContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Bank Details Container">
      <BankDetailsContainer3 />
    </div>
  );
}

function BankDetailsContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative self-stretch" data-name="Bank Details Container">
      <BankDetailsContainer2 />
    </div>
  );
}

function AmountSummaryRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Amount Summary Row">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-w-px relative text-[#6c7688]">Amount</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0a1b39] whitespace-nowrap">$650</p>
    </div>
  );
}

function CgstRow() {
  return (
    <div className="content-stretch flex gap-[184px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="CGST Row">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#6c7688]">CGST (9%)</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0a1b39]">$18</p>
    </div>
  );
}

function SgstRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="SGST Row">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-w-px relative text-[#6c7688]">SGST (9%)</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0a1b39] whitespace-nowrap">$18</p>
    </div>
  );
}

function DiscountRow() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Discount Row">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium min-w-px relative text-[#6c7688]">Discount (25%)</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#ef1e1e] whitespace-nowrap">- $36</p>
    </div>
  );
}

function AmountSummaryContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[21px] not-italic relative shrink-0 text-[14px] w-full" data-name="Amount Summary Container">
      <AmountSummaryRow />
      <CgstRow />
      <SgstRow />
      <DiscountRow />
    </div>
  );
}

function AmountSummaryContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Amount Summary Container">
      <AmountSummaryContainer3 />
    </div>
  );
}

function AmountSummaryContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Amount Summary Container">
      <AmountSummaryContainer2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 281 1">
            <line id="Line 87" stroke="var(--stroke-0, #E7E8EB)" x2="281" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AmountSummaryContainer() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-[281px]" data-name="Amount Summary Container">
      <AmountSummaryContainer1 />
    </div>
  );
}

function BankDetailsContainer() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Bank Details Container">
      <BankDetailsContainer1 />
      <AmountSummaryContainer />
    </div>
  );
}

function TotalRow() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[16px] h-[22px] items-start justify-end leading-[21.6px] not-italic relative shrink-0 text-[#0a1b39] text-[18px] w-[279px]" data-name="Total Row">
      <p className="flex-[1_0_0] h-full min-w-px relative">Total (USD)</p>
      <p className="relative shrink-0 whitespace-nowrap">$650</p>
    </div>
  );
}

function TotalInWordsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[21px] not-italic relative shrink-0 text-[14px] w-[279px]" data-name="Total in Words Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#6c7688] w-[min-content]">Total in words</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#0a1b39] whitespace-nowrap">Dollar Six Hundread Fifty</p>
    </div>
  );
}

function TotalInWordsContainer() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Total in Words Container">
      <TotalInWordsContainer1 />
    </div>
  );
}

function TotalContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0 w-full" data-name="Total Container">
      <TotalRow />
      <TotalInWordsContainer />
    </div>
  );
}

function TermsAndConditionsValue() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Terms and Conditions Value">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">The Payment must be returned in the same condition.</p>
    </div>
  );
}

function TermsAndConditionsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Terms and Conditions Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Terms and Conditions</p>
      <TermsAndConditionsValue />
    </div>
  );
}

function NotesValue() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Notes Value">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#6c7688] text-[13px] whitespace-nowrap">All charges are final and include applicable taxes, fees, and additional costs</p>
    </div>
  );
}

function NotesContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Notes Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] not-italic relative shrink-0 text-[#0a1b39] text-[14px] w-full">Notes</p>
      <NotesValue />
    </div>
  );
}

function TermsAndConditionsContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-center min-w-px relative rounded-[5px]" data-name="Terms and Conditions Container">
      <TermsAndConditionsContainer1 />
      <NotesContainer />
    </div>
  );
}

function SignatureDetails() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 whitespace-nowrap" data-name="Signature Details">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#051321] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ted M. Davis
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#6b7280] text-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Manager
      </p>
    </div>
  );
}

function SignatureContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[133px]" data-name="Signature Container">
      <div className="h-[67px] relative shrink-0 w-full" data-name="Signature Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[153.43%] left-[-5.26%] max-w-none top-[-25.97%] w-[112.03%]" src={imgSignatureImage} />
        </div>
      </div>
      <SignatureDetails />
    </div>
  );
}

function SignatureContainer() {
  return (
    <div className="content-stretch flex h-[109px] items-center justify-end relative shrink-0 w-[395px]" data-name="Signature Container">
      <SignatureContainer1 />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Footer Container">
      <TermsAndConditionsContainer />
      <SignatureContainer />
    </div>
  );
}

function FooterButtonsContainer() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center justify-center relative shrink-0 w-full" data-name="Footer Buttons Container">
      <div className="bg-[#030303] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[13px]" data-name="printer">
          <div className="absolute inset-[37.5%_12.5%_29.17%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-11.54%_-5.13%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.75 5.33333">
                <path d={svgPaths.p26901c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[12.5%_29.17%_62.5%_29.17%]" data-name="Vector">
            <div className="absolute inset-[-15.38%_-9.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41667 4.25">
                <path d={svgPaths.p2f6ea200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[54.17%_29.17%_12.5%_29.17%]" data-name="Vector">
            <div className="absolute inset-[-11.54%_-9.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41667 5.33333">
                <path d={svgPaths.p349d4900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Print</p>
      </div>
      <div className="bg-[#2e37a4] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="overflow-clip relative shrink-0 size-[13px]" data-name="download">
          <div className="absolute inset-[70.83%_16.67%_12.5%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-23.08%_-5.77%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66667 3.16667">
                <path d={svgPaths.p2928c800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="absolute inset-[45.83%_29.17%_33.33%_29.17%]" data-name="Vector">
            <div className="absolute inset-[-18.46%_-9.23%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41667 3.70833">
                <path d={svgPaths.p39375f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-[16.67%]" data-name="Vector">
            <div className="absolute inset-[-7.69%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7.5">
                <path d="M0.5 0.5V7" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Download</p>
      </div>
    </div>
  );
}

function FooterLineContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Footer Line Container">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 886 1">
            <line id="Line 83" stroke="var(--stroke-0, #E7E8EB)" x2="886" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <FooterButtonsContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] relative rounded-[20px] shrink-0 w-full" data-name="Content Container">
      <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
        <InvoiceContainer />
        <ProductsContainer />
        <BankDetailsContainer />
        <TotalContainer />
        <div className="flex h-[2.558px] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
          <div className="flex-none rotate-[-0.17deg] w-full">
            <div className="h-0 relative w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 886 1">
                  <line id="Line 88" stroke="var(--stroke-0, #E7E8EB)" x2="886" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <FooterContainer />
        <FooterLineContainer />
      </div>
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[395px] top-[76px] w-[926px]" data-name="Main Container">
      <SectionHeader />
      <ContentContainer />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[276px] px-[24px] py-[8px] top-[1027.55px] w-[1164px]" data-name="Footer">
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
            <path d={svgPaths.p259fef80} fill="var(--fill-0, #2E37A4)" id="Rectangle 28" />
            <path d={svgPaths.p171a4680} fill="var(--fill-0, #2E37A4)" id="Rectangle 27" />
            <path d={svgPaths.pe2aef00} fill="var(--fill-0, #00D3C7)" id="Rectangle 30" />
            <path d={svgPaths.p14a70600} fill="var(--fill-0, white)" id="Rectangle 30_2" />
          </g>
          <g id="Preclinic">
            <path d={svgPaths.p5376160} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p4e03580} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p3b258000} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p6394600} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p2fcf200} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p1568ae00} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.p2c7a0300} fill="var(--fill-0, #030303)" />
            <path d={svgPaths.pa027180} fill="var(--fill-0, #030303)" />
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

function Gift() {
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

function MenuName21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Gift />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#6c7688] text-[14px] whitespace-nowrap">Invoices</p>
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
          <circle cx="10" cy="16" fill="var(--fill-0, #2E37A4)" id="Ellipse 12" r="3.5" stroke="var(--stroke-0, #E7E8EB)" />
        </g>
      </svg>
    </div>
  );
}

function MenuName22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Menu Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] relative size-full">
          <Gift1 />
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#2e37a4] text-[14px] whitespace-nowrap">Invoice Details</p>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start py-[8px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[228px]" data-name="Submenu">
        <MenuName21 />
      </div>
      <div className="content-stretch flex flex-col h-[32px] items-start relative shrink-0 w-[228px]" data-name="Submenu">
        <MenuName22 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="bg-white drop-shadow-[0px_1px_0.5px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div aria-hidden="true" className="absolute border border-[#e7e8eb] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="file-invoice">
              <div className="absolute inset-[12.5%_20.83%_66.67%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-17.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.91667 3.91667">
                    <path d={svgPaths.p24999700} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
                <div className="absolute inset-[-4.76%_-6.12%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16667 11.5">
                    <path d={svgPaths.p397c1280} id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[29.17%_58.33%_70.83%_37.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-85.71%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.58333 1">
                    <path d="M0.5 0.5H1.08333" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[54.17%_37.5%_45.83%_37.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 1">
                    <path d="M0.5 0.5H4" id="Vector" stroke="var(--stroke-0, #2E37A4)" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-px not-italic relative text-[#2e37a4] text-[14px]">
              <p className="leading-[21px]">Invoices</p>
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
      <Container35 />
    </div>
  );
}

function MenuName23() {
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

function MenuName24() {
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
            <MenuName23 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName24 />
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

function Container37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#858d9c] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Administration</p>
      </div>
    </div>
  );
}

function MenuName25() {
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

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName25 />
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

function MenuName26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Menu Name">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="report">
        <div className="absolute inset-[20.83%_51.26%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-11.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48992 10.3333">
              <path d={svgPaths.pc618be0} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-3/4 right-[8.33%] top-[58.33%]" data-name="Vector">
          <div className="absolute inset-[-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
              <path d="M0.5 0.5V2.83333H2.83333" id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[54.17%] left-[58.33%] right-1/4 top-[20.83%]" data-name="Vector">
          <div className="absolute inset-[-14.29%_-21.43%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 4.5">
              <path d={svgPaths.p23526d00} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_41.67%_70.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-21.43%_-14.29%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 3.33333">
              <path d={svgPaths.p348ee40} id="Vector" stroke="var(--stroke-0, #0A1B39)" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1b39] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Reports</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName26 />
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

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
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

function MenuName27() {
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

function MenuName28() {
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
            <MenuName28 />
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

function MenuName29() {
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
            <MenuName29 />
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

function MenuName30() {
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

function MenuName31() {
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
            <MenuName27 />
          </div>
        </div>
      </div>
      <Container44 />
      <Container45 />
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName30 />
          </div>
        </div>
      </div>
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName31 />
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

function MenuName32() {
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

function MenuName33() {
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

function MenuName34() {
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

function MenuName35() {
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
            <MenuName32 />
          </div>
        </div>
      </div>
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
      <div className="relative rounded-[6px] shrink-0 w-full" data-name="Menu">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
            <MenuName35 />
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

function MenuName36() {
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

function MenuName37() {
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

function MenuName38() {
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

function MenuName39() {
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

function MenuName40() {
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

function MenuName41() {
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

function MenuName42() {
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

function MenuName43() {
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

function MenuName44() {
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

function MenuName45() {
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
            <MenuName45 />
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

function MenuName46() {
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
            <MenuName46 />
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

function MenuName47() {
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
            <MenuName47 />
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

function MenuName48() {
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

function MenuName52() {
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
            <MenuName51 />
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

function MenuName53() {
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
            <MenuName54 />
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

function MenuName55() {
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

function MenuName56() {
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

function MenuName60() {
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

function MenuName61() {
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

function MenuName62() {
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

function MenuName63() {
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

function MenuName64() {
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

function MenuName65() {
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

function MenuName66() {
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

function MenuName67() {
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

function MenuName68() {
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
            <MenuName66 />
          </div>
        </div>
      </div>
      <div className="content-center flex flex-wrap gap-[8px] items-center px-[12px] py-[8px] relative rounded-[6px] shrink-0 w-[228px]" data-name="Menu">
        <MenuName67 />
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
      <Container36 />
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
          <path d={svgPaths.p85a8a00} fill="var(--fill-0, #2E37A4)" id="Rectangle 27" />
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
    <div className="absolute content-stretch flex h-[1086px] items-start left-0 top-0" data-name="Sidebar  Scroll">
      <div className="bg-white content-stretch flex flex-col items-start relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[276px]" data-name="Sidebar Default">
        <Container4 />
      </div>
    </div>
  );
}

export default function InvoiceDetails() {
  return (
    <div className="bg-[#f5f6f8] relative size-full" data-name="Invoice Details">
      <MainContainer />
      <Footer />
      <div className="absolute bg-white content-stretch flex flex-col h-[52px] items-start justify-center left-[276px] px-[24px] py-[8px] top-0 w-[1164px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#e7e8eb] border-b border-solid inset-0 pointer-events-none" />
        <Container />
      </div>
      <SidebarScroll />
    </div>
  );
}
import React from 'react';
import svgPaths from "../../imports/svg-en3ml60a9e";

interface CallRoutingProps {
  getText: (id: string) => string;
}

export default function CallRouting({ getText }: CallRoutingProps) {
  function Close() {
    return (
      <div className="relative shrink-0 size-3.5" data-name="Close">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Close">
            <mask
              height="12"
              id="mask0_5_8601"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width="12"
              x="1"
              y="1"
            >
              <path d={svgPaths.p33d844f2} fill="#000001" id="Union" />
            </mask>
            <g mask="url(#mask0_5_8601)">
              <g id="Color profile">
                <rect fill="#131619" height="14" width="14" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }

  function QuinaryButton() {
    return (
      <div
        className="box-border content-stretch flex gap-1 items-center justify-center overflow-clip p-[9px] relative rounded-lg shrink-0 w-8"
        data-name="Quinary button"
      >
        <Close />
      </div>
    );
  }

  function Header() {
    return (
      <div
        className="absolute box-border content-stretch flex items-center justify-end left-6 p-0 top-6 w-[380px]"
        data-name="Header"
      >
        <div className="basis-0 font-['Almaden_Sans:Semi_Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#131619] text-[24px]">
          <p className="block leading-[32px]">Redirect Call</p>
        </div>
        <QuinaryButton />
      </div>
    );
  }

  function Tab() {
    return (
      <div className="relative self-stretch shrink-0" data-name="_Tab">
        <div className="box-border content-stretch flex gap-1 h-full items-center justify-center overflow-clip px-0 py-1 relative">
          <div className="font-['SF_Pro:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e72ed] text-[16px] text-center text-nowrap">
            <p className="block leading-[24px] whitespace-pre">Location</p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#0e72ed] border-[0px_0px_2px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0"
        />
      </div>
    );
  }

  function Tab1() {
    return (
      <div
        className="box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-0 py-1 relative self-stretch shrink-0"
        data-name="_Tab"
      >
        <div className="font-['SF_Pro:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#444b53] text-[16px] text-nowrap">
          <p className="block leading-[24px] whitespace-pre">External Number</p>
        </div>
      </div>
    );
  }

  function Tabs() {
    return (
      <div
        className="absolute box-border content-stretch flex gap-4 items-start justify-start left-0 p-0 top-0 w-[362px]"
        data-name="Tabs"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#dfe3e8] border-[0px_0px_2px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0"
        />
        <Tab />
        <Tab1 />
      </div>
    );
  }

  function Label() {
    return (
      <div
        className="box-border content-stretch flex gap-1 items-start justify-start p-0 relative shrink-0 w-full"
        data-name="Label"
      >
        <div className="font-['Almaden_Sans:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#131619] text-[14px] text-nowrap">
          <p className="block leading-[20px] whitespace-pre">Select Location</p>
        </div>
      </div>
    );
  }

  function InteractiveIcon() {
    return (
      <div className="overflow-clip relative shrink-0 size-3.5" data-name="Interactive icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Chevron">
            <mask
              height="6"
              id="mask0_5_8593"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width="8"
              x="3"
              y="4"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p34633580}
                fill="#000001"
                fillRule="evenodd"
                id="Union"
              />
            </mask>
            <g mask="url(#mask0_5_8593)">
              <g id="Color profile">
                <rect fill="#131619" height="14" width="14" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }

  function SuffixIcon() {
    return (
      <div
        className="box-border content-stretch flex items-center justify-center px-0 py-[3px] relative shrink-0"
        data-name="Suffix icon"
      >
        <InteractiveIcon />
      </div>
    );
  }

  function Input() {
    return (
      <div className="relative rounded-lg shrink-0 w-full" data-name="Input">
        <div className="overflow-clip relative size-full">
          <div className="box-border content-stretch flex gap-1 items-start justify-start px-2 py-1.5 relative w-full">
            <div className="basis-0 font-['Almaden_Sans:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[#525252]">
              <p className="block leading-[20px]">{getText('selected-location')}</p>
            </div>
            <SuffixIcon />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-lg"
        />
      </div>
    );
  }

  function SelectInput() {
    return (
      <div
        className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
        data-name="Select input"
      >
        <Label />
        <Input />
      </div>
    );
  }

  function OptionContent() {
    return (
      <div
        className="absolute box-border content-stretch flex flex-col gap-[3px] items-start justify-start left-0 p-0 top-[52px] w-[370px]"
        data-name="Option Content"
      >
        <SelectInput />
      </div>
    );
  }

  function Frame29443() {
    return (
      <div className="absolute h-[106px] left-6 top-16 w-[370px]">
        <Tabs />
        <OptionContent />
      </div>
    );
  }

  function PrimaryButton() {
    return (
      <div
        className="bg-[#0e72ed] box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-4 py-1.5 relative rounded-lg shrink-0"
        data-name="Primary button"
      >
        <div className="flex flex-col font-['Almaden_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
          <p className="block leading-[20px] whitespace-pre">Save</p>
        </div>
      </div>
    );
  }

  function SecondaryButton() {
    return (
      <div
        className="bg-[#f1f4f6] box-border content-stretch flex gap-1 items-center justify-center overflow-clip px-4 py-1.5 relative rounded-lg shrink-0"
        data-name="Secondary button"
      >
        <div className="flex flex-col font-['Almaden_Sans:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#131619] text-[14px] text-center text-nowrap">
          <p className="block leading-[20px] whitespace-pre">Cancel</p>
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <div
        className="absolute box-border content-stretch flex gap-2 items-center justify-end pb-0 pt-4 px-0 right-6 top-[178px] w-[552px]"
        data-name="Footer"
      >
        <PrimaryButton />
        <SecondaryButton />
      </div>
    );
  }

  function Modal() {
    return (
      <div
        className="absolute backdrop-blur-[5px] backdrop-filter bg-[#ffffff] h-[250px] rounded-2xl translate-x-[-50%] translate-y-[-50%] w-[418px]"
        data-name="_Modal"
        style={{ top: "calc(50% + 87.5px)", left: "calc(50% + 206px)" }}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#dfe3e8] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_12px_24px_0px_rgba(19,22,25,0.1),0px_6px_12px_0px_rgba(19,22,25,0.1)]"
        />
        <Header />
        <Frame29443 />
        <Footer />
      </div>
    );
  }

  function Checkmark() {
    return (
      <div className="relative shrink-0 size-[24.8px]" data-name="Checkmark">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <g id="Checkmark">
            <mask
              height="25"
              id="mask0_5_8565"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "alpha" }}
              width="25"
              x="0"
              y="0"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p1ac64a00}
                fill="#000001"
                fillRule="evenodd"
                id="Subtract"
              />
            </mask>
            <g mask="url(#mask0_5_8565)">
              <g id="Color profile">
                <rect fill="#0B5CFF" height="24.8" width="24.8" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }

  function Title() {
    return (
      <div
        className="box-border content-stretch flex gap-[24.8px] items-start justify-start p-0 relative shrink-0 w-full"
        data-name="Title"
      >
        <div className="basis-0 font-['Almaden_Sans:Semi_Bold',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#131619] text-[20px]">
          <p className="block leading-[1.3]">Redirect Call</p>
        </div>
        <Checkmark />
      </div>
    );
  }

  function Copy() {
    return (
      <div
        className="box-border content-stretch flex gap-[15.5px] items-start justify-center p-0 relative shrink-0 w-full mt-2"
        data-name="Copy"
      >
        <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#444b53] text-[16px]">
          <p className="block leading-[1.4]">Send the call to a specific location or number.</p>
        </div>
      </div>
    );
  }

  function Body() {
    return (
      <div
        className="box-border content-stretch flex flex-col gap-[12px] items-start justify-start p-0 relative shrink-0 w-full"
        data-name="Body"
      >
        <Title />
        <Copy />
      </div>
    );
  }

  function Card() {
    return (
      <div
        className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-[6.2px] h-[155px] items-start justify-start left-0 p-[32px] rounded-[18.6px] top-0 w-[499.1px]"
        data-name="Card"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#0b5cff] border-[3.1px] border-solid inset-0 pointer-events-none rounded-[18.6px] shadow-[0px_12.4px_37.2px_0px_rgba(35,35,51,0.1)]"
        />
        <Body />
      </div>
    );
  }

  function CallRoutingContent() {
    return (
      <div className="absolute h-[521px] left-0 top-0 w-[830px]" data-name="Call Routing">
        <Modal />
        <div className="absolute h-[211px] left-[220px] top-[143px] w-[191px]">
          <div className="absolute bottom-[-0.71%] left-[-0.79%] right-0 top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 193 213">
              <path d={svgPaths.p2cfa7d80} id="Vector 3" stroke="#ffffff" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <Card />
      </div>
    );
  }

  return (
    <div className="relative size-full">
      <CallRoutingContent />
    </div>
  );
}
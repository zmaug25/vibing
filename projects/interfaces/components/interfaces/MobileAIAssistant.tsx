import React from 'react';
import svgPaths from "../../imports/svg-7nnecm8nn8";
const imgSubtract = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8/5+hHgAHgQJ/7H7hVwAAAABJRU5ErkJggg==";
const imgSubtract1 = imgSubtract;
const imgImage1 = imgSubtract;

interface MobileAIAssistantProps {
  getText: (id: string) => string;
}

export default function MobileAIAssistant({ getText }: MobileAIAssistantProps) {
  function Left() {
    return (
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-px h-11 left-0 overflow-clip w-[179px]" data-name="Left">
        <div className="absolute inset-0" data-name="Bounds">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Bounds"></g>
          </svg>
        </div>
        <div className="absolute h-[20.662px] left-[13px] top-3 w-[12.27px]" data-name="Back">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 21">
            <path clipRule="evenodd" d={svgPaths.p289030} fill="var(--fill-0, white)" fillRule="evenodd" id="Back" />
          </svg>
        </div>
      </div>
    );
  }

  function NameStatus() {
    return (
      <div
        className="box-border content-stretch flex gap-1.5 items-center justify-start overflow-clip p-0 shrink-0"
        data-name="Name & Status"
      />
    );
  }

  function Title() {
    return (
      <div
        className="absolute bottom-3 box-border content-stretch flex gap-1 items-start justify-start left-1/2 overflow-clip p-0 translate-x-[-50%]"
        data-name="Title"
      >
        <NameStatus />
      </div>
    );
  }

  function UiBarsTopBarsDarkChat() {
    return (
      <div
        className="absolute h-[89px] left-0 overflow-clip top-0 w-[414px]"
        data-name="UI Bars / Top Bars / Dark / Chat"
      >
        <div className="absolute bg-[#39394d] inset-0" data-name="Background" />
        <Left />
        <Title />
      </div>
    );
  }

  function Battery() {
    return (
      <div className="absolute contents right-[18.67px] top-[19.33px]" data-name="Battery">
        <div className="absolute h-[11.333px] right-[21px] top-[19.33px] w-[22px]" data-name="Rectangle">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d={svgPaths.p7e6b880} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, white)" />
          </svg>
        </div>
        <div className="absolute h-1 right-[18.67px] top-[23px] w-[1.328px]" data-name="Combined Shape">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d={svgPaths.p32d253c0} fill="var(--fill-0, white)" id="Combined Shape" opacity="0.4" />
          </svg>
        </div>
        <div className="absolute h-[7.333px] right-[23px] top-[21.33px] w-[18px]" data-name="Rectangle">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 8">
            <path d={svgPaths.p3544af00} fill="var(--fill-0, white)" id="Rectangle" />
          </svg>
        </div>
      </div>
    );
  }

  function TimeStyle() {
    return (
      <div className="absolute h-[21px] left-[21px] top-3 w-[54px]" data-name="Time Style">
        <div className="absolute flex flex-col font-['SF_Pro_Text:Semibold',_sans-serif] inset-[19.05%_-5.56%_-4.76%_5.56%] justify-end leading-[0] not-italic text-[#ffffff] text-[16px] text-center tracking-[-0.32px]">
          <p className="adjustLetterSpacing block leading-[21px]">9:41</p>
        </div>
      </div>
    );
  }

  function UiElementsBarsStatusBarsLight() {
    return (
      <div className="absolute inset-0" data-name="UI Elements / Bars / Status Bars / Light">
        <Battery />
        <div className="absolute h-[10.966px] right-[48.03px] top-[19.33px] w-[15.273px]" data-name="Wifi">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
            <path d={svgPaths.p2889d280} fill="var(--fill-0, white)" id="Wifi" />
          </svg>
        </div>
        <div className="absolute h-[10.667px] right-[68.33px] top-[19.67px] w-[17px]" data-name="Mobile Signal">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
            <path d={svgPaths.p2abaf680} fill="var(--fill-0, white)" id="Mobile Signal" />
          </svg>
        </div>
        <TimeStyle />
      </div>
    );
  }

  function IOsStatusBarLightDefault() {
    return (
      <div className="absolute h-11 left-0 top-0 w-[414px]" data-name="iOS / Status Bar / Light / Default">
        <UiElementsBarsStatusBarsLight />
      </div>
    );
  }

  function Frame1205() {
    return (
      <div className="h-[74.03px] overflow-clip relative shrink-0 w-[382.68px]">
        <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] left-[75.17px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[35.31px]">
          <p className="block leading-[18.223px] whitespace-pre">{getText('contact-number')}</p>
        </div>
        <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[75.17px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[12.53px]">
          <p className="block leading-[18.223px] whitespace-pre">{getText('contact-name')}</p>
        </div>
      </div>
    );
  }

  function TranscriptionContent() {
    return (
      <div
        className="box-border content-stretch flex gap-[9.111px] items-start justify-start p-0 relative shrink-0 w-full"
        data-name="Transcription Content"
      >
        <div className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[18.223px] min-h-px min-w-px not-italic relative shrink-0 text-[#222230] text-[14.806px]">
          <p className="block leading-[18.223px]">{getText('transcription-content')}</p>
        </div>
      </div>
    );
  }

  function ChatDefault() {
    return (
      <div
        className="absolute bg-[#ffffff] h-[896px] left-0 overflow-clip rounded-[26px] top-0 w-[414px]"
        data-name="Chat / Default"
      >
        <UiBarsTopBarsDarkChat />
        <IOsStatusBarLightDefault />
        <div className="absolute bg-[#f7f7fa] box-border content-stretch flex flex-col h-[588.335px] items-start justify-start left-[14px] top-[100px] p-4 rounded-[13.667px] w-[382.68px]">
          <Frame1205 />
          <div className="mt-4 w-full">
            <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic text-[13px] text-[rgba(4,4,19,0.56)] mb-2">
              <p className="block leading-[16px]">Transcription</p>
            </div>
            <TranscriptionContent />
          </div>
        </div>
      </div>
    );
  }

  function ChatAult() {
    return (
      <div
        className="absolute h-[896px] left-0 rounded-[36px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)] top-2 w-[414px]"
        data-name="Chat ault"
      >
        <ChatDefault />
      </div>
    );
  }

  function ChatAult1() {
    return (
      <div
        className="absolute bg-[rgba(0,0,0,0.2)] h-[896px] left-0 rounded-[22px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)] top-0 w-[414px]"
        data-name="Chat ault"
      >
        <ChatAult />
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[935px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[466px]"
          data-name="image 1"
          style={{ top: "calc(50% + 0.5px)", backgroundImage: `url('${imgImage1}')` }}
        />
        <div className="absolute bg-[rgba(0,0,0,0.2)] h-[896px] left-0 rounded-[64px] top-0 w-[420px]" />
      </div>
    );
  }

  function Frame2608203() {
    return (
      <div className="box-border content-stretch flex gap-[6.553px] items-start justify-start p-0 relative shrink-0 w-full">
        <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[29.49px] not-italic text-[#131619] text-[22.937px] w-full">
          <p className="block leading-[29.49px]">{getText('summary-content')}</p>
        </div>
      </div>
    );
  }

  function Frame2608209() {
    return (
      <div className="absolute bg-[#f6f8f9] box-border content-stretch flex flex-col gap-[11.468px] min-h-[200px] items-start justify-start left-[102px] pl-[52.427px] pr-[27.852px] py-[19.66px] rounded-[19.66px] shadow-[0px_6.553px_40.958px_0px_rgba(0,0,0,0.25)] top-[294px] w-[655px]">
        <div className="font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic text-[#131619] text-[22.937px] w-full">
          <p className="block leading-[29.49px]">Summary</p>
        </div>
        <Frame2608203 />
        <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic text-[#0e72ed] text-[22.937px] w-full">
          <p className="block leading-[29.49px]">Edit</p>
        </div>
      </div>
    );
  }

  function Frame2608205() {
    return (
      <div className="box-border content-stretch flex gap-[6.553px] items-start justify-start p-0 relative shrink-0 w-full">
        <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[29.49px] not-italic text-[#131619] text-[22.937px] w-full">
          <p className="block leading-[29.49px]">{getText('task-content')}</p>
        </div>
      </div>
    );
  }

  function Frame2608210() {
    return (
      <div className="absolute bg-[#f6f8f9] box-border content-stretch flex flex-col gap-[11.468px] items-start justify-start left-[-364px] min-h-[150px] pl-[52.427px] pr-[27.852px] py-[19.66px] rounded-[19.66px] shadow-[0px_6.553px_40.958px_0px_rgba(0,0,0,0.25)] top-[627px] w-[655.333px]">
        <div className="font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic text-[#131619] text-[22.937px] w-full">
          <p className="block leading-[29.49px]">Task</p>
        </div>
        <Frame2608205 />
        <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic text-[#0e72ed] text-[22.937px] w-full">
          <p className="block leading-[29.49px]">Edit</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative size-full" data-name="Mobile AI Assistant">
      <ChatAult1 />
      <Frame2608209 />
      <Frame2608210 />
    </div>
  );
}
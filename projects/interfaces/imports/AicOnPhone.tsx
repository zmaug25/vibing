import svgPaths from "./svg-chskfrauk9";
const imgScreenshot20240508At6481 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2P8/5+hHgAHgQJ/7H7hVwAAAABJRU5ErkJggg==";
const imgSubtract = imgScreenshot20240508At6481;
const imgSubtract1 = imgScreenshot20240508At6481;
const imgSubtract2 = imgScreenshot20240508At6481;
const imgSubtract3 = imgScreenshot20240508At6481;
const imgImage1 = imgScreenshot20240508At6481;

function IOsHomeIndicatorDark() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[96.2%]" data-name="iOS / Home Indicator / Dark">
      <div className="absolute bg-[#ffffff] h-[34px] left-0 top-0 w-[414px]" />
      <div
        className="absolute h-[5px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[148px]"
        data-name="Rectangle"
        style={{ top: "calc(50% + 6.5px)" }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 5">
          <path
            clipRule="evenodd"
            d={svgPaths.p38495400}
            fill="var(--fill-0, black)"
            fillRule="evenodd"
            id="Rectangle"
          />
        </svg>
      </div>
    </div>
  );
}

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

function Frame68() {
  return <div className="absolute h-[43px] left-[13px] top-[544px] w-56" />;
}

function Frame469() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pl-2 pr-0 py-0 relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#747487] text-[10px] text-nowrap">
        <p className="block leading-[normal] whitespace-pre">(408)345-6753</p>
      </div>
    </div>
  );
}

function Frame465() {
  return (
    <div className="bg-[rgba(82,82,128,0.09)] box-border content-stretch flex gap-2.5 items-center justify-start px-[15px] py-[11px] relative rounded-xl shrink-0 w-[239px]">
      <div className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#232333] text-[16px] tracking-[-0.08px]">
        <p className="block leading-[20px]">Does the time work for you?</p>
      </div>
    </div>
  );
}

function Frame466() {
  return (
    <div className="bg-[rgba(82,82,128,0.09)] box-border content-stretch flex gap-2.5 items-center justify-start px-[15px] py-[11px] relative rounded-xl shrink-0 w-[322px]">
      <div className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#232333] text-[16px] tracking-[-0.08px]">
        <p className="block leading-[20px]">Sorry I’m not available today. How about tmrw at 9?</p>
      </div>
    </div>
  );
}

function Frame467() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <Frame465 />
      <Frame466 />
    </div>
  );
}

function Frame470() {
  return (
    <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0">
      <Frame469 />
      <Frame467 />
    </div>
  );
}

function Frame471() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#747487] text-[12px] text-center tracking-[-0.08px] w-[401px]">
        <p className="adjustLetterSpacing block leading-[16px]">Today at 10:05AM</p>
      </div>
      <Frame470 />
    </div>
  );
}

function Frame468() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-0.5 items-start justify-start left-0 pl-[13px] pr-0 py-0 top-[237px] w-[414px]">
      <Frame471 />
    </div>
  );
}

function Frame472() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pl-2 pr-0 py-0 relative shrink-0 w-[83px]">
      <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#747487] text-[10px]">
        <p className="block leading-[normal]">You</p>
      </div>
    </div>
  );
}

function Frame473() {
  return (
    <div className="bg-[rgba(38,133,67,0.1)] box-border content-stretch flex gap-2.5 items-center justify-start px-[15px] py-[11px] relative rounded-xl shrink-0 w-[216px]">
      <div className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#232333] text-[16px] tracking-[-0.08px]">
        <p className="block leading-[20px]">Hiya, are you free today?</p>
      </div>
    </div>
  );
}

function Frame474() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame473 />
    </div>
  );
}

function Frame475() {
  return (
    <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0">
      <Frame472 />
      <Frame474 />
    </div>
  );
}

function Frame476() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#747487] text-[12px] text-center tracking-[-0.08px] w-[401px]">
        <p className="adjustLetterSpacing block leading-[16px]">Today at 10:00AM</p>
      </div>
      <Frame475 />
    </div>
  );
}

function Frame477() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-0.5 items-start justify-start left-0 pl-[13px] pr-0 py-0 top-[407px] w-[414px]">
      <Frame476 />
    </div>
  );
}

function Frame478() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pl-2 pr-0 py-0 relative shrink-0 w-[83px]">
      <div className="basis-0 flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#747487] text-[10px]">
        <p className="block leading-[normal]">You</p>
      </div>
    </div>
  );
}

function Frame479() {
  return (
    <div className="bg-[rgba(38,133,67,0.1)] box-border content-stretch flex gap-2.5 items-center justify-start px-[15px] py-[11px] relative rounded-xl shrink-0 w-[327px]">
      <div className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#232333] text-[16px] tracking-[-0.08px]">
        <p className="block leading-[20px]">Hi Mr Lawson, do you have time to have a quick talk?</p>
      </div>
    </div>
  );
}

function Frame480() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame479 />
    </div>
  );
}

function Frame481() {
  return (
    <div className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full">
      <Frame478 />
      <Frame480 />
    </div>
  );
}

function Frame482() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#747487] text-[12px] text-center tracking-[-0.08px] w-[401px]">
        <p className="adjustLetterSpacing block leading-[16px]">Today at 09:51 AM</p>
      </div>
      <Frame481 />
    </div>
  );
}

function Frame483() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-0.5 items-start justify-start left-0 pl-[13px] pr-0 py-0 top-[113px] w-[414px]">
      <Frame482 />
    </div>
  );
}

function Emoji() {
  return (
    <div className="absolute right-14 size-6 top-1/2 translate-y-[-50%]" data-name="Emoji">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Emoji">
          <path d={svgPaths.p9886700} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Outline" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="absolute left-3 size-5 translate-y-[-50%]" data-name="Close" style={{ top: "calc(50% - 2px)" }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Close">
          <mask
            height="20"
            id="mask0_4_23808"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p3bc2200}
              fill="var(--fill-0, #000001)"
              fillRule="evenodd"
              id="Subtract"
            />
          </mask>
          <g mask="url(#mask0_4_23808)">
            <g id="Color profile">
              <rect fill="#6E7680" height="20" width="20" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Send() {
  return (
    <div className="absolute right-3.5 size-5 top-[13px]" data-name="Send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Send">
          <path d={svgPaths.p3f194700} fill="var(--fill-0, #909096)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents right-2 top-1.5" data-name="Group 3.1">
      <div className="absolute bg-[#ededf4] right-2 rounded-lg size-8 top-1.5" />
      <Send />
    </div>
  );
}

function ChatInputDefault() {
  return (
    <div
      className="absolute bg-[#ffffff] h-11 left-0 overflow-clip top-[758px] w-[414px]"
      data-name="Chat / Input / Default"
    >
      <div className="absolute bg-[#ffffff] inset-0" data-name="Background" />
      <div
        className="absolute bg-[#f7f6fb] h-8 left-12 right-12 rounded-lg top-1/2 translate-y-[-50%]"
        data-name="InputBox"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[rgba(82,82,128,0.09)] border-solid inset-0 pointer-events-none rounded-lg"
        />
      </div>
      <Emoji />
      <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] h-5 justify-center leading-[0] left-[60px] not-italic text-[#909096] text-[16px] top-1/2 tracking-[-0.08px] translate-y-[-50%] w-[227px]">
        <p className="adjustLetterSpacing block leading-[20px]">Text...</p>
      </div>
      <Close />
      <Group31 />
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-4" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Image">
          <mask
            height="14"
            id="mask0_4_23853"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="1"
          >
            <g id="Intersect">
              <path d={svgPaths.p24138ac0} fill="var(--fill-0, #000001)" />
              <path clipRule="evenodd" d={svgPaths.p18099b00} fill="var(--fill-0, #000001)" fillRule="evenodd" />
            </g>
          </mask>
          <g mask="url(#mask0_4_23853)">
            <g id="Color profile">
              <rect fill="#6E7680" height="16" width="16" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28853() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0">
      <Image />
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[12px] text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Photo Album</p>
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div className="relative shrink-0 size-4" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Camera">
          <mask
            height="14"
            id="mask0_4_23847"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="16"
            x="0"
            y="1"
          >
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p209c2e00} fill="var(--fill-0, #000001)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p1a60a380} fill="var(--fill-0, #000001)" fillRule="evenodd" />
            </g>
          </mask>
          <g mask="url(#mask0_4_23847)">
            <g id="Color profile">
              <rect fill="#6E7680" height="16" width="16" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28854() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0">
      <Camera />
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[12px] text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Take a Photo</p>
      </div>
    </div>
  );
}

function Avatar32() {
  return (
    <div className="relative shrink-0 size-4" data-name="Avatar 32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Avatar 32">
          <g clipPath="url(#clip0_4_23801)">
            <g id="Vector">
              <path d={svgPaths.p24a9b300} fill="var(--fill-0, #0E72ED)" />
              <path d={svgPaths.p26c4f200} fill="var(--fill-0, #0E72ED)" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_4_23801">
            <rect fill="white" height="16" rx="6" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame28855() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0">
      <Avatar32 />
      <div className="flex flex-col font-['SF_Pro_Text:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[12px] w-[66px]">
        <p className="block leading-[16px]">Summarize</p>
      </div>
    </div>
  );
}

function Frame28856() {
  return (
    <div className="absolute box-border content-stretch flex gap-4 items-start justify-start left-12 p-0 top-[810px]">
      <Frame28853 />
      <Frame28854 />
      <div className="bg-[#f1f4f6] h-10 shrink-0 w-px" />
      <Frame28855 />
    </div>
  );
}

function Frame2608165() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#98a0a9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-start justify-start pl-8 pr-4 py-2.5 relative w-full">
          <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[14px] text-nowrap tracking-[-0.0574px]">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">Filters</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Space() {
  return <div className="h-full shrink-0 w-2" data-name="SPACE" />;
}

function LeadingIcon() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 h-full items-center justify-start p-0 shrink-0 w-4"
      data-name="Leading Icon"
    />
  );
}

function Title1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-full items-start justify-start pl-2 pr-4 py-3 relative shrink-0 w-[226px]"
      data-name="Title"
    >
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[17px] tracking-[-0.0697px] w-full">
        <p className="block leading-[24px]">Unread</p>
      </div>
    </div>
  );
}

function ContextMenuRow() {
  return (
    <div className="relative shrink-0" data-name="Context Menu Row">
      <div className="box-border content-stretch flex items-center justify-start overflow-clip p-0 relative">
        <div className="flex flex-row items-center self-stretch">
          <Space />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <LeadingIcon />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Title1 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#98a0a9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Space1() {
  return <div className="h-full shrink-0 w-2" data-name="SPACE" />;
}

function LeadingIcon1() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 h-full items-center justify-start p-0 shrink-0 w-4"
      data-name="Leading Icon"
    />
  );
}

function Title2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-full items-start justify-start pl-2 pr-4 py-3 relative shrink-0 w-[226px]"
      data-name="Title"
    >
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[17px] tracking-[-0.0697px] w-full">
        <p className="block leading-[24px]">Follow-up</p>
      </div>
    </div>
  );
}

function ContextMenuRow1() {
  return (
    <div className="relative shrink-0" data-name="Context Menu Row">
      <div className="box-border content-stretch flex items-center justify-start overflow-clip p-0 relative">
        <div className="flex flex-row items-center self-stretch">
          <Space1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <LeadingIcon1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Title2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#98a0a9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Space2() {
  return <div className="h-full shrink-0 w-2" data-name="SPACE" />;
}

function LeadingIcon2() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 h-full items-center justify-start p-0 shrink-0 w-4"
      data-name="Leading Icon"
    />
  );
}

function Title3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start px-2 py-3 relative size-full">
          <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323539] text-[17px] tracking-[-0.0697px] w-full">
            <p className="block leading-[24px]">Priority topics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Chevron">
          <path d={svgPaths.p2524d800} fill="var(--fill-0, #323539)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TrailingIcon() {
  return (
    <div
      className="box-border content-stretch flex gap-2 h-full items-center justify-start pl-0 pr-4 py-0 relative shrink-0 w-8"
      data-name="Trailing Icon"
    >
      <Chevron />
    </div>
  );
}

function ContextMenuRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Context Menu Row">
      <div className="box-border content-stretch flex items-center justify-start overflow-clip p-0 relative w-full">
        <div className="flex flex-row items-center self-stretch">
          <Space2 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <LeadingIcon2 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Title3 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TrailingIcon />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#98a0a9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Space3() {
  return <div className="h-full shrink-0 w-2" data-name="SPACE" />;
}

function LeadingIcon3() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 h-full items-center justify-start p-0 shrink-0 w-4"
      data-name="Leading Icon"
    />
  );
}

function Title4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-full items-start justify-start pl-2 pr-4 py-3 relative shrink-0 w-[226px]"
      data-name="Title"
    >
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323539] text-[17px] tracking-[-0.0697px] w-full">
        <p className="block leading-[24px]">VIP Contacts</p>
      </div>
    </div>
  );
}

function ContextMenuRow3() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Context Menu Row"
    >
      <div className="flex flex-row items-center self-stretch">
        <Space3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <LeadingIcon3 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Title4 />
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Separator">
      <div className="absolute bg-[rgba(0,0,0,0.12)] inset-0" data-name="Seperator" />
    </div>
  );
}

function Frame2608166() {
  return (
    <div className="relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#98a0a9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none"
      />
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-2.5 items-start justify-start pl-8 pr-4 py-2.5 relative w-full">
          <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[14px] text-nowrap tracking-[-0.0574px]">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">Line</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Space4() {
  return <div className="h-full shrink-0 w-2" data-name="SPACE" />;
}

function LeadingIcon4() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 h-full items-center justify-start p-0 shrink-0 w-4"
      data-name="Leading Icon"
    />
  );
}

function Title5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-full items-start justify-start pl-2 pr-4 py-3 relative shrink-0 w-[226px]"
      data-name="Title"
    >
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323539] text-[17px] tracking-[-0.0697px] w-full">
        <p className="block leading-[24px]">Tiffany Robbins (you)</p>
      </div>
    </div>
  );
}

function ContextMenuRow4() {
  return (
    <div className="relative shrink-0" data-name="Context Menu Row">
      <div className="box-border content-stretch flex items-center justify-start overflow-clip p-0 relative">
        <div className="flex flex-row items-center self-stretch">
          <Space4 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <LeadingIcon4 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Title5 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#98a0a9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Space5() {
  return <div className="h-full shrink-0 w-2" data-name="SPACE" />;
}

function LeadingIcon5() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 h-full items-center justify-start p-0 shrink-0 w-4"
      data-name="Leading Icon"
    />
  );
}

function Title6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-1 h-full items-start justify-start pl-2 pr-4 py-3 relative shrink-0 w-[226px]"
      data-name="Title"
    >
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[17px] tracking-[-0.0697px] w-full">
        <p className="block leading-[24px]">Patricia Adams</p>
      </div>
    </div>
  );
}

function ContextMenuRow5() {
  return (
    <div
      className="box-border content-stretch flex items-center justify-start overflow-clip p-0 relative shrink-0"
      data-name="Context Menu Row"
    >
      <div className="flex flex-row items-center self-stretch">
        <Space5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <LeadingIcon5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Title6 />
      </div>
    </div>
  );
}

function CMenuWithHeadings() {
  return (
    <div
      className="absolute backdrop-blur-[49.5px] backdrop-filter bg-[rgba(0,0,0,0.12)] box-border content-stretch flex flex-col items-start justify-start left-[152px] overflow-clip p-0 rounded-xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.15)] top-36"
      data-name="C.Menu with headings"
    >
      <Frame2608165 />
      <ContextMenuRow />
      <ContextMenuRow1 />
      <ContextMenuRow2 />
      <ContextMenuRow3 />
      <Separator />
      <Frame2608166 />
      <ContextMenuRow4 />
      <ContextMenuRow5 />
    </div>
  );
}

function Ellipsis() {
  return (
    <div className="absolute left-2.5 size-5 top-2.5" data-name="Ellipsis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Ellipsis">
          <g id="Vector">
            <path d={svgPaths.p36b01e00} fill="var(--fill-0, #6E7680)" />
            <path d={svgPaths.p36b01e00} fill="var(--fill-1, #323539)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButtons() {
  return (
    <div className="absolute left-[314px] size-10 top-[100px]" data-name="Icon Buttons">
      <Ellipsis />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-1/2 size-4 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p38b8b480} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p35fa1800} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p1033b3c0} fill="var(--fill-0, #323539)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FocusIndicator() {
  return (
    <div
      className="absolute left-1/2 rounded-xl size-10 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      data-name="Focus indicator"
    >
      <div
        aria-hidden="true"
        className="absolute border-2 border-[#4793f1] border-solid inset-0 pointer-events-none rounded-xl"
      />
    </div>
  );
}

function Notifier() {
  return <div className="absolute bg-[#0e72ed] left-[23px] rounded-[9999px] size-3 top-[-3px]" data-name="Notifier" />;
}

function IconButton() {
  return (
    <div className="absolute bg-[#ffffff] left-[362px] rounded-lg size-8 top-[104px]" data-name="Icon button">
      <div
        aria-hidden="true"
        className="absolute border border-[#98a0a9] border-solid inset-0 pointer-events-none rounded-lg"
      />
      <Icon6 />
      <FocusIndicator />
      <Notifier />
    </div>
  );
}

function Group28472() {
  return (
    <div className="absolute contents left-[362px] top-[104px]">
      <IconButton />
    </div>
  );
}

function Component24Keypad() {
  return (
    <div className="relative shrink-0 size-6" data-name="24 / Keypad">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="24 / Keypad">
          <g id="Glyph">
            <path d={svgPaths.p38123b00} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p38af8cc0} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p31e08b00} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p1f807c00} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p1e817c00} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p3d06a300} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p35a24b0} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p15ce0100} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p1960380} fill="var(--fill-0, #323539)" />
            <path d={svgPaths.p3a2bbe00} fill="var(--fill-0, #323539)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ToggleButton() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-1.5 items-center justify-center left-3 overflow-clip px-4 py-1.5 size-10 top-[100px]"
      data-name="Toggle Button"
    >
      <Component24Keypad />
    </div>
  );
}

function Group28525() {
  return (
    <div className="absolute contents left-3 top-[100px]">
      <IconButtons />
      <Group28472 />
      <ToggleButton />
    </div>
  );
}

function Group28559() {
  return (
    <div className="absolute contents left-0 top-0">
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[896px] left-0 top-0 w-[414px]"
        data-name="Screenshot 2024-05-08 at 6.48 1"
        style={{ backgroundImage: `url('${imgScreenshot20240508At6481}')` }}
      />
      <div className="absolute bg-[#ffffff] h-[30px] left-[5px] top-[102px] w-[406px]" />
      <CMenuWithHeadings />
      <Group28525 />
    </div>
  );
}

function Tabs4Options1Selected() {
  return (
    <div
      className="absolute bg-[rgba(82,82,128,0.09)] inset-0 rounded-[9.111px]"
      data-name="Tabs / 4 Options / 1 Selected"
    >
      <div className="absolute bottom-[14.67px] flex flex-col font-['SF_Pro_Text:Bold',_sans-serif] justify-center leading-[0] left-3/4 not-italic right-0 text-[#323539] text-[12.528px] text-center translate-y-[50%]">
        <p className="block leading-[27.334px]">SMS</p>
      </div>
      <div className="absolute bottom-[14.67px] flex flex-col font-['SF_Pro_Text:Bold',_sans-serif] justify-center leading-[0] left-1/2 not-italic right-1/4 text-[#323539] text-[12.528px] text-center translate-y-[50%]">
        <p className="block leading-[27.334px]">Lines</p>
      </div>
      <div
        className="absolute bg-[#ffffff] bottom-[1.47px] h-[25.056px] left-[25.25%] right-[50.25%] rounded-[7.972px] shadow-[0px_1.139px_4.556px_0px_rgba(34,34,48,0.08)]"
        data-name="Selected"
      />
      <div className="absolute bottom-[14.67px] flex flex-col font-['SF_Pro_Text:Bold',_sans-serif] justify-center leading-[0] left-1/4 not-italic right-1/2 text-[#0e72ed] text-[12.528px] text-center translate-y-[50%]">
        <p className="block leading-[27.334px]">Voicemail</p>
      </div>
      <div className="absolute bottom-[14.67px] flex flex-col font-['SF_Pro_Text:Bold',_sans-serif] justify-center leading-[0] left-0 not-italic right-3/4 text-[#323539] text-[12.528px] text-center translate-y-[50%]">
        <p className="block leading-[27.334px]">History</p>
      </div>
    </div>
  );
}

function Tabs4Options2Selected() {
  return (
    <div
      className="absolute h-[27.334px] translate-x-[-50%] translate-y-[-50%] w-[373.568px]"
      data-name="Tabs / 4 Options / 2 Selected"
      style={{ top: "calc(50% + 0.11px)", left: "calc(50% - 0.007px)" }}
    >
      <Tabs4Options1Selected />
    </div>
  );
}

function PhoneContainerTabs() {
  return (
    <div
      className="bg-[#ffffff] h-[63.78px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Tabs"
    >
      <Tabs4Options2Selected />
    </div>
  );
}

function DropDown() {
  return (
    <div className="relative shrink-0 size-[18.223px]" data-name="Drop Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Drop Down">
          <path
            clipRule="evenodd"
            d={svgPaths.p1bc35300}
            fill="var(--fill-0, #6E6E81)"
            fillRule="evenodd"
            id="Outline"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame657() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-0 relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Text:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.389px] text-[rgba(4,4,19,0.56)] text-center text-nowrap">
        <p className="block leading-[18.223px] whitespace-pre">All Voicemail</p>
      </div>
      <DropDown />
    </div>
  );
}

function PhoneButtonDropdown() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[11.389px] inset-[-1.07%_37.45%_23.93%_37.45%] items-start justify-start overflow-clip pl-[9.111px] pr-[4.556px] py-[4.556px]"
      data-name="Phone / Button / Dropdown"
    >
      <Frame657 />
    </div>
  );
}

function PhoneContainerFilter() {
  return (
    <div
      className="bg-[#ffffff] h-[36.446px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Filter"
    >
      <PhoneButtonDropdown />
    </div>
  );
}

function Phone() {
  return (
    <div
      className="absolute size-[18.223px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Phone"
      style={{ top: "calc(50% + 0.221px)", left: "calc(50% + 0.221px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Phone">
          <mask
            height="19"
            id="mask0_4_23814"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="19"
            x="0"
            y="0"
          >
            <g id="Phone_2">
              <path d={svgPaths.p251fd500} fill="#000001" />
            </g>
          </mask>
          <g mask="url(#mask0_4_23814)">
            <g id="Color profile">
              <rect fill="#131619" height="18.2228" width="18.2228" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonCallSmallDefault() {
  return (
    <div className="relative rounded-[113.893px] shrink-0 size-[45.557px]" data-name="Button/Call/Small/Default">
      <Phone />
    </div>
  );
}

function Play() {
  return (
    <div
      className="absolute size-[25.056px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Play"
      style={{ top: "calc(50% + 0.221px)", left: "calc(50% + 0.221px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Play">
          <mask
            height="17"
            id="mask0_4_23837"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="15"
            x="6"
            y="4"
          >
            <path d={svgPaths.p34d01cc0} fill="var(--fill-0, #000001)" id="Vector" />
          </mask>
          <g mask="url(#mask0_4_23837)">
            <g id="Color profile">
              <rect fill="#131619" height="25.0564" width="25.0564" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonPlaySmallDefault() {
  return (
    <div className="relative rounded-[113.893px] shrink-0 size-[45.557px]" data-name="Button/Play/Small/Default">
      <Play />
    </div>
  );
}

function Ellipsis1() {
  return (
    <div className="absolute left-[13.67px] size-[18.223px] top-[13.67px]" data-name="Ellipsis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Ellipsis">
          <mask
            height="5"
            id="mask0_4_23949"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="19"
            x="0"
            y="7"
          >
            <g id="Union">
              <path d={svgPaths.pbfce600} fill="var(--fill-0, #000001)" />
              <path d={svgPaths.p3c747480} fill="var(--fill-0, #000001)" />
              <path d={svgPaths.p268a8c00} fill="var(--fill-0, #000001)" />
            </g>
          </mask>
          <g mask="url(#mask0_4_23949)">
            <g id="Color profile">
              <rect fill="#131619" height="18.2228" width="18.2228" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonMoreSmallDefault() {
  return (
    <div className="relative rounded-[113.893px] shrink-0 size-[45.557px]" data-name="Button/More/Small/Default">
      <Ellipsis1 />
    </div>
  );
}

function Frame1022() {
  return (
    <div className="absolute box-border content-stretch flex items-start justify-end p-0 right-[28.47px] top-[10.25px] w-[113.893px]">
      <ButtonCallSmallDefault />
      <ButtonPlaySmallDefault />
      <ButtonMoreSmallDefault />
    </div>
  );
}

function StatusOnlineDesktop() {
  return (
    <div className="absolute right-[-2.28px] size-[9.111px] top-[-2.28px]" data-name="Status / Online (desktop)">
      <div className="absolute bg-[#23d959] inset-0 rounded-[4.556px]" data-name="Status" />
    </div>
  );
}

function AvatarUser32PxLightAvailable() {
  return (
    <div
      className="absolute left-[25.44px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <div className="absolute left-0 size-8 top-0" data-name="Subtract">
        <img className="block max-w-none size-full" height="32" src={imgSubtract} width="32" />
      </div>
      <StatusOnlineDesktop />
    </div>
  );
}

function Frame1205() {
  return (
    <div className="h-[74.03px] overflow-clip relative shrink-0 w-[382.68px]">
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] left-[75.17px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[35.31px]">
        <p className="block leading-[18.223px] whitespace-pre">31252</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[75.17px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[12.53px]">
        <p className="block leading-[18.223px] whitespace-pre">Ethan Mitchell</p>
      </div>
      <Frame1022 />
      <AvatarUser32PxLightAvailable />
    </div>
  );
}

function SliderVoicemailDefault() {
  return (
    <div className="absolute h-[30.751px] left-[26.2px] right-[13.67px] top-0" data-name="Slider / Voicemail / Default">
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic right-[0.07px] text-[11px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[15.95px]">
        <p className="block leading-[14px] whitespace-pre">00:12</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] left-0 not-italic text-[11px] text-[rgba(4,4,19,0.56)] text-nowrap top-[15.95px]">
        <p className="block leading-[14px] whitespace-pre">00:00</p>
      </div>
      <div
        className="absolute bg-[#909096] h-[2.278px] left-0 right-[-0.24px] rounded-[18.223px] top-[6.83px]"
        data-name="Slider Background"
      />
      <div className="absolute left-0 size-[9.111px] top-[3.42px]" data-name="Handle">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <circle
              cx="6.55571"
              cy="6.55571"
              fill="var(--fill-0, #0E72ED)"
              id="Handle"
              r="5.12517"
              stroke="var(--stroke-0, white)"
              strokeWidth="1.13893"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1207() {
  return (
    <div className="h-[44.418px] overflow-clip relative shrink-0 w-[357.623px]">
      <SliderVoicemailDefault />
    </div>
  );
}

function Frame1208() {
  return (
    <div className="font-['SF_Pro_Text:Regular',_sans-serif] h-[27.334px] leading-[0] not-italic overflow-clip relative shrink-0 text-[14.806px] text-nowrap w-[357.623px]">
      <div className="absolute left-[25.06px] text-[rgba(4,4,19,0.56)] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">Date:</p>
      </div>
      <div className="absolute left-[146.92px] text-[#222230] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">June 2, 2024, 12:45 PM</p>
      </div>
    </div>
  );
}

function Frame1209() {
  return (
    <div className="font-['SF_Pro_Text:Regular',_sans-serif] h-[27.334px] leading-[0] not-italic overflow-clip relative shrink-0 text-[14.806px] text-nowrap w-[357.623px]">
      <div className="absolute left-[25.06px] text-[rgba(4,4,19,0.56)] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">To:</p>
      </div>
      <div className="absolute left-[146.92px] text-[#222230] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">Sales Line</p>
      </div>
    </div>
  );
}

function Frame1503() {
  return (
    <div className="font-['SF_Pro_Text:Regular',_sans-serif] h-[27.334px] leading-[0] not-italic overflow-clip relative shrink-0 text-[14.806px] text-nowrap w-[357.623px]">
      <div className="absolute left-[25.06px] text-[rgba(4,4,19,0.56)] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">Encryption:</p>
      </div>
      <div className="absolute left-[146.92px] text-[#222230] top-[4.56px]">
        <p className="leading-[18.223px] text-nowrap whitespace-pre">
          <span>{`Standard · `}</span>
          <span className="text-[rgba(4,4,19,0.56)]">Learn more</span>
        </p>
      </div>
    </div>
  );
}

function Frame1498() {
  return (
    <div className="font-['SF_Pro_Text:Regular',_sans-serif] h-[27.334px] leading-[0] not-italic overflow-clip relative shrink-0 text-[14.806px] text-nowrap w-[357.623px]">
      <div className="absolute left-[25.06px] text-[rgba(4,4,19,0.56)] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">Verification:</p>
      </div>
      <div className="absolute left-[146.92px] text-[#222230] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">AMD MM Sales</p>
      </div>
    </div>
  );
}

function Frame1210() {
  return (
    <div className="font-['SF_Pro_Text:Regular',_sans-serif] h-[27.334px] leading-[0] not-italic overflow-clip relative shrink-0 text-[14.806px] text-nowrap w-[357.623px]">
      <div className="absolute left-[25.06px] text-[rgba(4,4,19,0.56)] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">Shared By:</p>
      </div>
      <div className="absolute left-[146.92px] text-[#222230] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">Clara Arellano</p>
      </div>
    </div>
  );
}

function Frame1206() {
  return (
    <div className="font-['SF_Pro_Text:Regular',_sans-serif] h-[27.334px] leading-[0] not-italic overflow-clip relative shrink-0 text-[14.806px] text-nowrap w-[357.623px]">
      <div className="absolute left-[25.06px] text-[rgba(4,4,19,0.56)] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">Sharing:</p>
      </div>
      <div className="absolute left-[146.92px] text-[#222230] top-[4.56px]">
        <p className="block leading-[18.223px] text-nowrap whitespace-pre">Disabled</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div
      className="box-border content-stretch flex gap-[4.556px] items-center justify-start px-[4.556px] py-0 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['SF_Pro:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0956b5] text-[13.667px] text-nowrap">
        <p className="block leading-[18.223px] whitespace-pre">Consultation request</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex items-center justify-start left-[25.06px] overflow-clip p-[2.278px] rounded-[5.695px] top-[31.89px]"
      data-name="Tag"
    >
      <Content />
    </div>
  );
}

function Frame28772() {
  return (
    <div className="h-[75.169px] overflow-clip relative shrink-0 w-[357.623px]">
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] left-[25.06px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[4.56px]">
        <p className="block leading-[18.223px] whitespace-pre">Priority topics:</p>
      </div>
      <Tag />
    </div>
  );
}

function Avatar33() {
  return (
    <div className="relative shrink-0 size-[18.223px]" data-name="Avatar 32">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="Avatar 32">
          <g id="Vector">
            <path d={svgPaths.p2d83600} fill="var(--fill-0, #0E72ED)" />
            <path d={svgPaths.p2f3ebc00} fill="var(--fill-0, #0E72ED)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PrimaryLink() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start overflow-clip p-0 relative shrink-0"
      data-name="Primary link"
    >
      <div className="font-['SF_Pro:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0956b5] text-[15.945px] text-nowrap">
        <p className="block leading-[22.779px] whitespace-pre">View Task</p>
      </div>
    </div>
  );
}

function Frame28828() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-[4.556px] h-[29.612px] items-center justify-start ml-[234.619px] mt-0 p-0 relative">
      <Avatar33 />
      <PrimaryLink />
    </div>
  );
}

function TranscriptionTitle() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex gap-[4.556px] items-center justify-start ml-0 mt-[4.556px] p-0 relative"
      data-name="Transcription Title"
    >
      <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(4,4,19,0.56)] text-nowrap">
        <p className="block leading-[16px] whitespace-pre">Transcription</p>
      </div>
    </div>
  );
}

function Group28444() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame28828 />
      <TranscriptionTitle />
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
        <p className="block mb-0">
          Hi, this is Ethan. I’m reaching out because my business is looking to expand our inventory of consumer
          packaged goods, and I’m interested in purchasing additional OSB products to meet growing customer demand.
        </p>
        <p className="block mb-0">&nbsp;</p>
        <p className="block mb-0">
          Specifically, I’d like to learn more about your latest personal care and household cleaning solutions, as well
          as any volume discounts or promotional offers currently available.
        </p>
        <p className="block">&nbsp;</p>
      </div>
    </div>
  );
}

function TranscriptionContent1() {
  return (
    <div
      className="box-border content-stretch flex gap-[9.111px] items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Transcription Content"
    >
      <div className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#222230] text-[14.806px]">
        <p className="block leading-[18.223px]">Endpoint Protection.</p>
      </div>
    </div>
  );
}

function Frame2608204() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <TranscriptionContent />
      <TranscriptionContent1 />
    </div>
  );
}

function Frame28773() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9.111px] h-[187.923px] items-start justify-start p-0 relative shrink-0 w-[332.567px]">
      <Group28444 />
      <Frame2608204 />
      <div className="basis-0 font-['SF_Pro_Text:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#222230] text-[14.806px] w-[332.567px]">
        <p className="block leading-[18.223px]">{`I have a couple of meetings with potential clients next week, and having this updated information would be really helpful as it’s something I’d love to showcase. `}</p>
      </div>
    </div>
  );
}

function TranscriptionDesktop() {
  return (
    <div
      className="box-border content-stretch flex flex-col h-[231px] items-start justify-start overflow-clip px-[25.056px] py-0 relative shrink-0"
      data-name="Transcription / Desktop"
    >
      <Frame28773 />
    </div>
  );
}

function Frame1211() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f7f7fa] box-border content-stretch flex flex-col h-[588.335px] items-start justify-start ml-[13.667px] mt-[8.439px] p-0 relative rounded-[13.667px] w-[382.68px]">
      <Frame1205 />
      <Frame1207 />
      <Frame1208 />
      <Frame1209 />
      <Frame1503 />
      <Frame1498 />
      <Frame1210 />
      <Frame1206 />
      <Frame28772 />
      <TranscriptionDesktop />
    </div>
  );
}

function Group32() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[582.307px] ml-0 mt-0 w-[410.014px]" />
      <Frame1211 />
    </div>
  );
}

function AvatarUser32PxLightAvailable1() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p332ff100} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.peb2eb00} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PhoneContainerLog2Lines() {
  return (
    <div
      className="bg-[#ffffff] h-[68.336px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines"
    >
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[38.72px]">
        <p className="block leading-[15.945px] whitespace-pre">00:18</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[15.95px]">
        <p className="block leading-[15.945px] whitespace-pre">11:23 AM</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">San Jose, CA</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">(500) 555-9875</p>
      </div>
      <AvatarUser32PxLightAvailable1 />
      <div
        className="absolute bg-[#0e72ed] inset-[43.33%_93.06%_43.33%_4.72%] rounded-[113.893px]"
        data-name="Status"
      />
    </div>
  );
}

function AvatarUser32PxLightAvailable2() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p3e365230} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.p31986e00} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusOnlineDesktop1() {
  return (
    <div className="absolute right-[-2.28px] size-[9.111px] top-[-2.28px]" data-name="Status / Online (desktop)">
      <div className="absolute bg-[#23d959] inset-0 rounded-[4.556px]" data-name="Status" />
    </div>
  );
}

function AvatarUser32PxLightAvailable3() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <div className="absolute left-0 size-8 top-0" data-name="Subtract">
        <img className="block max-w-none size-full" height="32" src={imgSubtract1} width="32" />
      </div>
      <StatusOnlineDesktop1 />
    </div>
  );
}

function PhoneContainerLog2Lines1() {
  return (
    <div
      className="bg-[#ffffff] h-[68.336px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines"
    >
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.92px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[38.72px]">
        <p className="block leading-[15.945px] whitespace-pre">00:43</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.2px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[15.95px]">
        <p className="block leading-[15.945px] whitespace-pre">Apr 19</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">(256) 392-4955</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">John Fieldman</p>
      </div>
      <AvatarUser32PxLightAvailable2 />
      <AvatarUser32PxLightAvailable3 />
      <div
        className="absolute bg-[#0e72ed] inset-[43.33%_93.06%_43.33%_4.72%] rounded-[113.893px]"
        data-name="Status"
      />
    </div>
  );
}

function AvatarUser32PxLightAvailable4() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p332ff100} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.peb2eb00} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PhoneContainerLog2Lines2() {
  return (
    <div
      className="bg-[#ffffff] h-[68.336px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines"
    >
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[38.72px]">
        <p className="block leading-[15.945px] whitespace-pre">00:11</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[15.95px]">
        <p className="block leading-[15.945px] whitespace-pre">Apr 8</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">Los Angeles, CA</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">(500) 555-4918</p>
      </div>
      <AvatarUser32PxLightAvailable4 />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="box-border content-stretch flex gap-[4.556px] items-center justify-start px-[4.556px] py-0 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['SF_Pro:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a7d5c] text-[13.667px] text-nowrap">
        <p className="block leading-[18.223px] whitespace-pre">Consultation request</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex items-center justify-start left-[38.72px] overflow-clip p-[2.278px] rounded-[5.695px] top-[63.78px]"
      data-name="Tag"
    >
      <Content1 />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="box-border content-stretch flex gap-[4.556px] items-center justify-start px-[4.556px] py-0 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['SF_Pro:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a7d5c] text-[13.667px] text-nowrap">
        <p className="block leading-[18.223px] whitespace-pre">Estimate</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex items-center justify-start left-[195.9px] overflow-clip p-[2.278px] rounded-[5.695px] top-[63.78px]"
      data-name="Tag"
    >
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="box-border content-stretch flex gap-[4.556px] items-center justify-start px-[4.556px] py-0 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['SF_Pro:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a7d5c] text-[13.667px] text-nowrap">
        <p className="block leading-[18.223px] whitespace-pre">+1</p>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex items-center justify-start left-[272.2px] overflow-clip p-[2.278px] rounded-[5.695px] top-[63.78px]"
      data-name="Tag"
    >
      <Content3 />
    </div>
  );
}

function AvatarUser32PxLightAvailable5() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p3e365230} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.p31986e00} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusOnlineDesktop2() {
  return (
    <div className="absolute right-[-1.83px] size-[9.111px] top-[-2.28px]" data-name="Status / Online (desktop)">
      <div className="absolute bg-[#23d959] inset-0 rounded-[4.556px]" data-name="Status" />
    </div>
  );
}

function AvatarUser32PxLightAvailable6() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <div className="absolute left-0 size-9 top-0" data-name="Subtract">
        <img className="block max-w-none size-full" height="36" src={imgSubtract2} width="36" />
      </div>
      <StatusOnlineDesktop2 />
    </div>
  );
}

function PhoneContainerLog2LinesHover() {
  return (
    <div
      className="bg-[#ffffff] h-[100.226px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines - Hover"
    >
      <div
        className="absolute bg-[#e6f5ec] h-[97.948px] left-[13.67px] right-[13.67px] rounded-[13.667px] top-1/2 translate-y-[-50%]"
        data-name="Hover Background"
      />
      <Tag1 />
      <Tag2 />
      <Tag3 />
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.92px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[37.59px]">
        <p className="block leading-[15.945px] whitespace-pre">00:34</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.36px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[14.81px]">
        <p className="block leading-[15.945px] whitespace-pre">Apr 7</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">(677) 777-0023</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">Troy Song</p>
      </div>
      <AvatarUser32PxLightAvailable5 />
      <AvatarUser32PxLightAvailable6 />
    </div>
  );
}

function Frame2608199() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[11.389px] items-start justify-start px-0 py-[1.139px] relative shrink-0">
      <PhoneContainerLog2LinesHover />
    </div>
  );
}

function AvatarUser32PxLightAvailable7() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p332ff100} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.peb2eb00} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PhoneContainerLog2Lines3() {
  return (
    <div
      className="bg-[#ffffff] h-[68.336px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines"
    >
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[38.72px]">
        <p className="block leading-[15.945px] whitespace-pre">00:18</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[15.95px]">
        <p className="block leading-[15.945px] whitespace-pre">Apr 5</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">Los Angeles, CA</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">(500) 555-4918</p>
      </div>
      <AvatarUser32PxLightAvailable7 />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="box-border content-stretch flex gap-[4.556px] items-center justify-start px-[4.556px] py-0 relative shrink-0"
      data-name="Content"
    >
      <div className="font-['SF_Pro:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#4a7d5c] text-[13.667px] text-nowrap">
        <p className="block leading-[18.223px] whitespace-pre">Consultation request</p>
      </div>
    </div>
  );
}

function Tag4() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex items-center justify-start left-[38.72px] overflow-clip p-[2.278px] rounded-[5.695px] top-[63.78px]"
      data-name="Tag"
    >
      <Content4 />
    </div>
  );
}

function AvatarUser32PxLightAvailable8() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p3e365230} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.p1a4a4380} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusOnlineDesktop3() {
  return (
    <div className="absolute right-[-1.83px] size-[9.111px] top-[-2.28px]" data-name="Status / Online (desktop)">
      <div className="absolute bg-[#23d959] inset-0 rounded-[4.556px]" data-name="Status" />
    </div>
  );
}

function AvatarUser32PxLightAvailable9() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <div className="absolute left-0 size-9 top-0" data-name="Subtract">
        <img className="block max-w-none size-full" height="36" src={imgSubtract2} width="36" />
      </div>
      <StatusOnlineDesktop3 />
    </div>
  );
}

function PhoneContainerLog2LinesHover1() {
  return (
    <div
      className="bg-[#ffffff] h-[100.226px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines - Hover"
    >
      <div
        className="absolute bg-[#e6f5ec] h-[97.948px] left-[13.67px] right-[13.67px] rounded-[13.667px] top-1/2 translate-y-[-50%]"
        data-name="Hover Background"
      />
      <Tag4 />
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[26.78px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[37.59px]">
        <p className="block leading-[15.945px] whitespace-pre">00:42</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] not-italic right-[27.36px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[14.81px]">
        <p className="block leading-[15.945px] whitespace-pre">Apr 2</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Medium',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">(677) 777-0023</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">Troy Song</p>
      </div>
      <AvatarUser32PxLightAvailable8 />
      <AvatarUser32PxLightAvailable9 />
    </div>
  );
}

function Frame2608200() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[11.389px] items-start justify-start px-0 py-[1.139px] relative shrink-0">
      <PhoneContainerLog2LinesHover1 />
    </div>
  );
}

function AvatarUser32PxLightAvailable10() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p332ff100} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.peb2eb00} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PhoneContainerLog2Lines4() {
  return (
    <div
      className="bg-[#ffffff] h-[68.336px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines"
    >
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[38.72px]">
        <p className="block leading-[15.945px] whitespace-pre">00:12</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[15.95px]">
        <p className="block leading-[15.945px] whitespace-pre">Yesterday</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">Oakland, CA</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">(500) 555-3912</p>
      </div>
      <AvatarUser32PxLightAvailable10 />
    </div>
  );
}

function AvatarUser32PxLightAvailable11() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p332ff100} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.peb2eb00} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PhoneContainerLog2Lines5() {
  return (
    <div
      className="bg-[#ffffff] h-[68.336px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines"
    >
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[38.72px]">
        <p className="block leading-[15.945px] whitespace-pre">00:12</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[15.95px]">
        <p className="block leading-[15.945px] whitespace-pre">2/2/19</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">San Francisco, CA</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">(500) 555-9318</p>
      </div>
      <AvatarUser32PxLightAvailable11 />
    </div>
  );
}

function AvatarUser32PxLightAvailable12() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="Avatar / User / 32px / Light - Available">
          <path d={svgPaths.p332ff100} fill="var(--fill-0, #525280)" fillOpacity="0.09" id="Subtract" />
          <g id="User">
            <path d={svgPaths.peb2eb00} fill="var(--fill-0, #040413)" fillOpacity="0.56" id="Fill" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StatusOnlineDesktop4() {
  return (
    <div className="absolute right-[-1.83px] size-[9.111px] top-[-2.28px]" data-name="Status / Online (desktop)">
      <div className="absolute bg-[#23d959] inset-0 rounded-[4.556px]" data-name="Status" />
    </div>
  );
}

function AvatarUser32PxLightAvailable13() {
  return (
    <div
      className="absolute left-[38.72px] size-[36.446px] top-[15.95px]"
      data-name="Avatar / User / 32px / Light - Available"
    >
      <div className="absolute left-0 size-9 top-0" data-name="Subtract">
        <img className="block max-w-none size-full" height="36" src={imgSubtract3} width="36" />
      </div>
      <StatusOnlineDesktop4 />
    </div>
  );
}

function PhoneContainerLog2Lines6() {
  return (
    <div
      className="bg-[#ffffff] h-[68.336px] overflow-clip relative shrink-0 w-[410.014px]"
      data-name="Phone / Container / Log / 2 Lines"
    >
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[38.72px]">
        <p className="block leading-[15.945px] whitespace-pre">Label</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic right-[27.38px] text-[12.528px] text-[rgba(4,4,19,0.56)] text-nowrap text-right top-[15.95px]">
        <p className="block leading-[15.945px] whitespace-pre">2/2/19</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] left-[88.84px] not-italic text-[14.806px] text-[rgba(4,4,19,0.56)] text-nowrap top-[36.45px]">
        <p className="block leading-[18.223px] whitespace-pre">Subheader</p>
      </div>
      <div className="absolute font-['SF_Pro_Text:Bold',_sans-serif] leading-[0] left-[88.84px] not-italic text-[#222230] text-[14.806px] text-nowrap top-[13.67px]">
        <p className="block leading-[18.223px] whitespace-pre">Hana Song</p>
      </div>
      <AvatarUser32PxLightAvailable12 />
      <AvatarUser32PxLightAvailable13 />
    </div>
  );
}

function DesktopPhoneViewMainVoicemail() {
  return (
    <div
      className="absolute bg-[#ffffff] bottom-[1.9%] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 rounded-[19.362px] shadow-[4.556px_4.556px_30.751px_0px_rgba(0,0,0,0.25)] top-[5.69%] translate-x-[-50%]"
      data-name="Desktop / Phone / View / Main / Voicemail"
      style={{ left: "calc(50% + 3.007px)" }}
    >
      <PhoneContainerTabs />
      <PhoneContainerFilter />
      <Group32 />
      <PhoneContainerLog2Lines />
      <PhoneContainerLog2Lines1 />
      <PhoneContainerLog2Lines2 />
      <Frame2608199 />
      <PhoneContainerLog2Lines3 />
      <Frame2608200 />
      <PhoneContainerLog2Lines4 />
      <PhoneContainerLog2Lines5 />
      {[...Array(6).keys()].map((_, i) => (
        <PhoneContainerLog2Lines6 key={i} />
      ))}
    </div>
  );
}

function ChatDefault() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[896px] left-0 overflow-clip rounded-[26px] top-0 w-[414px]"
      data-name="Chat / Default"
    >
      <IOsHomeIndicatorDark />
      <UiBarsTopBarsDarkChat />
      <IOsStatusBarLightDefault />
      <Frame68 />
      <Frame468 />
      <Frame477 />
      <Frame483 />
      <ChatInputDefault />
      <Frame28856 />
      <Group28559 />
      <div
        className="absolute bg-[0%_18.51%] bg-no-repeat bg-size-[100%_878.43%] h-[102px] left-0 top-[313px] w-[414px]"
        data-name="Screenshot 2024-05-08 at 6.48 2"
        style={{ backgroundImage: `url('${imgScreenshot20240508At6481}')` }}
      />
      <DesktopPhoneViewMainVoicemail />
    </div>
  );
}

function Phone1() {
  return (
    <div className="absolute inset-[6.03%_3.14%_91.3%_91.06%] overflow-clip" data-name="Phone">
      <div className="absolute left-1/2 size-5 top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Outline">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Outline">
            <mask fill="white" id="path-1-inside-1_4_23784">
              <path clipRule="evenodd" d={svgPaths.p2d9c3a60} fillRule="evenodd" />
            </mask>
            <path clipRule="evenodd" d={svgPaths.p2d9c3a60} fill="var(--fill-0, #747487)" fillRule="evenodd" />
            <path d={svgPaths.p21de4800} fill="var(--stroke-0, white)" mask="url(#path-1-inside-1_4_23784)" />
          </g>
        </svg>
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
      <Phone1 />
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
      <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[29.49px] not-italic relative shrink-0 text-[#131619] text-[22.937px] text-nowrap whitespace-pre">
        <p className="block mb-0">Ethan Mitchell is seeking to expand their institutional</p>
        <p className="block mb-0">employee benefits portfolio and explore new</p>
        <p className="block mb-0">retirement solutions. He requests a callback from an</p>
        <p className="block mb-0">account manager to discuss product options and</p>
        <p className="block">potential bundled offerings.</p>
      </div>
    </div>
  );
}

function Upvote() {
  return (
    <div className="relative shrink-0 size-[26.213px]" data-name="Upvote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Upvote">
          <mask
            height="27"
            id="mask0_4_23780"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="27"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2039af00}
              fill="var(--fill-0, #000001)"
              fillRule="evenodd"
              id="Union"
            />
          </mask>
          <g mask="url(#mask0_4_23780)">
            <g id="Color profile">
              <rect fill="#6E7680" height="26.2133" width="26.2133" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="h-[65.533px] relative rounded-[13.107px] shrink-0 w-[49.15px]" data-name="Secondary button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[13.107px] h-[65.533px] items-center justify-center px-[26.213px] py-[13.107px] relative w-[49.15px]">
          <Upvote />
        </div>
      </div>
    </div>
  );
}

function Downvote() {
  return (
    <div className="relative shrink-0 size-[26.213px]" data-name="Downvote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Downvote">
          <mask
            height="27"
            id="mask0_4_23860"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="27"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p3a19a100}
              fill="var(--fill-0, #000001)"
              fillRule="evenodd"
              id="Union"
            />
          </mask>
          <g mask="url(#mask0_4_23860)">
            <g id="Color profile">
              <rect fill="#6E7680" height="26.2133" width="26.2133" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecondaryButton1() {
  return (
    <div className="h-[65.533px] relative rounded-[13.107px] shrink-0 w-[39.32px]" data-name="Secondary button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[13.107px] h-[65.533px] items-center justify-center px-[26.213px] py-[13.107px] relative w-[39.32px]">
          <Downvote />
        </div>
      </div>
    </div>
  );
}

function FeedbackMobile() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[40.958px] items-center justify-start left-[548px] overflow-clip p-0 top-[221px] w-[90.108px]"
      data-name="Feedback/mobile"
    >
      <SecondaryButton />
      <SecondaryButton1 />
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-[26.213px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Close">
          <mask
            height="20"
            id="mask0_4_23770"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="3"
            y="3"
          >
            <path d={svgPaths.p116b3800} fill="var(--fill-0, #000001)" id="Union" />
          </mask>
          <g mask="url(#mask0_4_23770)">
            <g id="Color profile">
              <rect fill="#6E7680" height="26.2133" width="26.2133" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecondaryButton2() {
  return (
    <div
      className="absolute h-[42.597px] left-[599.01px] rounded-[13.107px] top-[6.5px] w-[39.32px]"
      data-name="Secondary button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[13.107px] h-[42.597px] items-center justify-center px-[26.213px] py-[13.107px] relative w-[39.32px]">
          <Close1 />
        </div>
      </div>
    </div>
  );
}

function ZoomIq() {
  return (
    <div className="absolute left-4 size-[26.213px] top-[23px]" data-name="Zoom iq">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Zoom iq">
          <mask
            height="28"
            id="mask0_4_23766"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="27"
            x="0"
            y="-1"
          >
            <g id="Union">
              <path d={svgPaths.p35e65400} fill="var(--fill-0, #000001)" />
              <path d={svgPaths.p2a2d1700} fill="var(--fill-0, #000001)" />
            </g>
          </mask>
          <g mask="url(#mask0_4_23766)">
            <g id="Color profile">
              <rect fill="#0E72ED" height="26.2133" width="26.2133" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2608209() {
  return (
    <div className="absolute bg-[#f6f8f9] box-border content-stretch flex flex-col gap-[11.468px] h-[275px] items-start justify-start left-[102px] pl-[52.427px] pr-[27.852px] py-[19.66px] rounded-[19.66px] shadow-[0px_6.553px_40.958px_0px_rgba(0,0,0,0.25)] top-[294px] w-[655px]">
      <div className="font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#131619] text-[22.937px] w-[851.933px]">
        <p className="block leading-[29.49px]">Summary</p>
      </div>
      <Frame2608203 />
      <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e72ed] text-[22.937px] w-[851.933px]">
        <p className="block leading-[29.49px]">Edit</p>
      </div>
      <FeedbackMobile />
      <SecondaryButton2 />
      <ZoomIq />
    </div>
  );
}

function Frame2608205() {
  return (
    <div className="box-border content-stretch flex gap-[6.553px] items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[29.49px] not-italic relative shrink-0 text-[#131619] text-[22.937px] text-nowrap whitespace-pre">
        <p className="block mb-0">Send Ethan documentation for MetLife Guaranteed</p>
        <p className="block">Income Builder® II.</p>
      </div>
    </div>
  );
}

function Upvote1() {
  return (
    <div className="relative shrink-0 size-[26.213px]" data-name="Upvote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Upvote">
          <mask
            height="27"
            id="mask0_4_23780"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="27"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p2039af00}
              fill="var(--fill-0, #000001)"
              fillRule="evenodd"
              id="Union"
            />
          </mask>
          <g mask="url(#mask0_4_23780)">
            <g id="Color profile">
              <rect fill="#6E7680" height="26.2133" width="26.2133" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecondaryButton3() {
  return (
    <div className="h-[65.533px] relative rounded-[13.107px] shrink-0 w-[49.15px]" data-name="Secondary button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[13.107px] h-[65.533px] items-center justify-center px-[26.213px] py-[13.107px] relative w-[49.15px]">
          <Upvote1 />
        </div>
      </div>
    </div>
  );
}

function Downvote1() {
  return (
    <div className="relative shrink-0 size-[26.213px]" data-name="Downvote">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Downvote">
          <mask
            height="27"
            id="mask0_4_23860"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="27"
            x="0"
            y="0"
          >
            <path
              clipRule="evenodd"
              d={svgPaths.p3a19a100}
              fill="var(--fill-0, #000001)"
              fillRule="evenodd"
              id="Union"
            />
          </mask>
          <g mask="url(#mask0_4_23860)">
            <g id="Color profile">
              <rect fill="#6E7680" height="26.2133" width="26.2133" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecondaryButton4() {
  return (
    <div className="h-[65.533px] relative rounded-[13.107px] shrink-0 w-[39.32px]" data-name="Secondary button">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[13.107px] h-[65.533px] items-center justify-center px-[26.213px] py-[13.107px] relative w-[39.32px]">
          <Downvote1 />
        </div>
      </div>
    </div>
  );
}

function FeedbackMobile1() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[40.958px] items-center justify-start left-[553.76px] overflow-clip p-0 top-[127px] w-[90.108px]"
      data-name="Feedback/mobile"
    >
      <SecondaryButton3 />
      <SecondaryButton4 />
    </div>
  );
}

function Close2() {
  return (
    <div className="relative shrink-0 size-[26.213px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Close">
          <mask
            height="20"
            id="mask0_4_23770"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="20"
            x="3"
            y="3"
          >
            <path d={svgPaths.p116b3800} fill="var(--fill-0, #000001)" id="Union" />
          </mask>
          <g mask="url(#mask0_4_23770)">
            <g id="Color profile">
              <rect fill="#6E7680" height="26.2133" width="26.2133" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function SecondaryButton5() {
  return (
    <div
      className="absolute h-[42.597px] left-[599.01px] rounded-[13.107px] top-[6.5px] w-[39.32px]"
      data-name="Secondary button"
    >
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[13.107px] h-[42.597px] items-center justify-center px-[26.213px] py-[13.107px] relative w-[39.32px]">
          <Close2 />
        </div>
      </div>
    </div>
  );
}

function ZoomIq1() {
  return (
    <div className="absolute left-4 size-[26.213px] top-[23px]" data-name="Zoom iq">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
        <g id="Zoom iq">
          <mask
            height="28"
            id="mask0_4_23766"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width="27"
            x="0"
            y="-1"
          >
            <g id="Union">
              <path d={svgPaths.p35e65400} fill="var(--fill-0, #000001)" />
              <path d={svgPaths.p2a2d1700} fill="var(--fill-0, #000001)" />
            </g>
          </mask>
          <g mask="url(#mask0_4_23766)">
            <g id="Color profile">
              <rect fill="#0E72ED" height="26.2133" width="26.2133" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2608210() {
  return (
    <div className="absolute bg-[#f6f8f9] box-border content-stretch flex flex-col gap-[11.468px] items-start justify-start left-[-364px] pl-[52.427px] pr-[27.852px] py-[19.66px] rounded-[19.66px] shadow-[0px_6.553px_40.958px_0px_rgba(0,0,0,0.25)] top-[627px] w-[655.333px]">
      <div className="font-['SF_Pro_Text:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#131619] text-[22.937px] w-[851.933px]">
        <p className="block leading-[29.49px]">Task</p>
      </div>
      <Frame2608205 />
      <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e72ed] text-[22.937px] w-[851.933px]">
        <p className="block leading-[29.49px]">Edit</p>
      </div>
      <FeedbackMobile1 />
      <SecondaryButton5 />
      <ZoomIq1 />
    </div>
  );
}

export default function AicOnPhone() {
  return (
    <div className="relative size-full" data-name="AIC on Phone">
      <ChatAult1 />
      <Frame2608209 />
      <Frame2608210 />
    </div>
  );
}
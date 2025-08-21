import svgPaths from "./svg-ibxgq5hxo0";

function Frame28683() {
  return (
    <div
      className="absolute box-border content-stretch flex gap-[12.499px] h-[37.496px] items-center justify-center p-0 top-[15.62px] translate-x-[-50%]"
      style={{ left: "calc(50% - 0.562px)" }}
    >
      <div className="font-['SF_Pro:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323539] text-[21.873px] text-nowrap tracking-[-0.2343px]">
        <p className="adjustLetterSpacing block leading-[28.122px] whitespace-pre">AI Companion</p>
      </div>
    </div>
  );
}

function PopWindow() {
  return (
    <div
      className="absolute size-[21.873px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Pop window"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Pop window">
          <g id="Vector">
            <path d={svgPaths.p2d331200} fill="var(--fill-0, #555B62)" />
            <path d={svgPaths.p19535300} fill="var(--fill-0, #555B62)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="relative rounded-[9.374px] shrink-0 size-[37.496px]" data-name="Icon button">
      <PopWindow />
    </div>
  );
}

function Close() {
  return (
    <div
      className="absolute size-[21.873px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Close"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Close">
          <path clipRule="evenodd" d={svgPaths.pfa8e200} fill="var(--fill-0, #555B62)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="relative rounded-[9.374px] shrink-0 size-[37.496px]" data-name="Icon button">
      <Close />
    </div>
  );
}

function Frame6266435() {
  return (
    <div className="absolute box-border content-stretch flex gap-[3.125px] items-center justify-end p-0 right-[24.56px] top-[15.62px]">
      <IconButton1 />
      <IconButton2 />
    </div>
  );
}

function History() {
  return (
    <div
      className="absolute size-[21.873px] translate-x-[-50%] translate-y-[-50%]"
      data-name="History"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="History">
          <g id="Vector">
            <path d={svgPaths.p14588f80} fill="var(--fill-0, #555B62)" />
            <path d={svgPaths.p37982290} fill="var(--fill-0, #555B62)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="relative rounded-[9.374px] shrink-0 size-[37.496px]" data-name="Icon button">
      <History />
    </div>
  );
}

function Icon1() {
  return (
    <div
      className="absolute size-[21.873px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.pec08200} fill="var(--fill-0, #555B62)" />
            <path d={svgPaths.p35b2ec00} fill="var(--fill-0, #555B62)" />
            <path d={svgPaths.p30631000} fill="var(--fill-0, #555B62)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="relative rounded-[9.374px] shrink-0 size-[37.496px]" data-name="Icon button">
      <Icon1 />
    </div>
  );
}

function Frame1642958486() {
  return (
    <div className="absolute box-border content-stretch flex gap-[3.125px] items-center justify-start left-[25px] p-0 top-[15.62px]">
      <IconButton3 />
      <IconButton4 />
    </div>
  );
}

function Frame1642958469() {
  return (
    <div className="h-[68.742px] relative shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border-[#dfe3e8] border-[0px_0px_1.562px] border-solid inset-0 pointer-events-none"
      />
      <Frame28683 />
      <Frame6266435 />
      <Frame1642958486 />
    </div>
  );
}

function HeaderInMeeting() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[564px]"
      data-name="Header in-meeting"
    >
      <Frame1642958469 />
    </div>
  );
}

function Frame1642958475() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[6.249px] items-center justify-start p-0 relative shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323539] text-[21.873px] text-nowrap tracking-[-0.2343px]">
        <p className="adjustLetterSpacing block leading-[31.247px] whitespace-pre">
          Draft a proposal based on the meeting so far.
        </p>
      </div>
    </div>
  );
}

function Frame6266292() {
  return (
    <div className="box-border content-start flex flex-wrap gap-0 items-start justify-start p-0 relative shrink-0">
      <Frame1642958475 />
    </div>
  );
}

function MessageContentMessageBubble() {
  return (
    <div
      className="bg-[#e7f1fd] box-border content-stretch flex flex-col gap-[6.249px] items-start justify-center px-3 py-2.5 relative rounded-xl shrink-0"
      data-name="Message content/Message bubble"
    >
      <Frame6266292 />
    </div>
  );
}

function BubbleContainer() {
  return (
    <div
      className="box-border content-stretch flex gap-2.5 items-start justify-end p-0 relative shrink-0"
      data-name="Bubble container"
    >
      <MessageContentMessageBubble />
    </div>
  );
}

function MessageAttribution() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message attribution">
      <div className="flex flex-row items-center justify-end relative size-full">
        <div className="box-border content-stretch flex gap-[12.499px] items-center justify-end pl-2 pr-0 py-0 relative w-full">
          <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[17.186px] text-right w-[117.175px]">
            <p className="block leading-[24.997px]">9:20 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageTimestampAndActions() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.249px] grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Message, timestamp and actions"
    >
      <BubbleContainer />
      <MessageAttribution />
    </div>
  );
}

function MessageBubble() {
  return (
    <div
      className="box-border content-stretch flex gap-[15.623px] items-start justify-end p-0 relative shrink-0 w-[514.006px]"
      data-name="Message bubble"
    >
      <MessageTimestampAndActions />
    </div>
  );
}

function AiCompanion() {
  return (
    <div className="relative shrink-0 size-[31.247px]" data-name="AI companion">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="AI companion">
          <path d={svgPaths.p3c75e200} fill="url(#paint0_radial_3_15552)" id="Big star" />
          <path d={svgPaths.p140dde30} fill="url(#paint1_radial_3_15552)" id="Big star_2" />
          <path d={svgPaths.p10730700} fill="url(#paint2_radial_3_15552)" id="Big star_3" />
          <path d={svgPaths.p226fd4f0} fill="url(#paint3_radial_3_15552)" id="Big star_4" />
          <path d={svgPaths.p1637d780} fill="url(#paint4_linear_3_15552)" id="Big star_5" />
          <path d={svgPaths.p1fcc24c0} fill="url(#paint5_linear_3_15552)" id="Big star_6" />
          <path d={svgPaths.p16e9cc00} fill="url(#paint6_linear_3_15552)" id="Big star_7" />
          <path d={svgPaths.p681500} fill="url(#paint7_linear_3_15552)" id="Big star_8" />
          <path d={svgPaths.p2b2e7980} fill="url(#paint8_radial_3_15552)" id="Small star" />
          <path d={svgPaths.p28050c80} fill="url(#paint9_radial_3_15552)" id="Small star_2" />
          <path d={svgPaths.p3066e00} fill="url(#paint10_radial_3_15552)" id="Small star_3" />
          <path d={svgPaths.p97f6600} fill="url(#paint11_radial_3_15552)" id="Small star_4" />
          <path d={svgPaths.p30f96100} fill="url(#paint12_linear_3_15552)" id="Small star_5" />
          <path d={svgPaths.p26663d00} fill="url(#paint13_linear_3_15552)" id="Small star_6" />
          <path d={svgPaths.p6620d80} fill="url(#paint14_linear_3_15552)" id="Small star_7" />
          <path d={svgPaths.p2d33ca0} fill="url(#paint15_linear_3_15552)" id="Small star_8" />
        </g>
        <defs>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(13.9846 8.90575) rotate(132.641) scale(9.40853 9.40863)"
            gradientUnits="userSpaceOnUse"
            id="paint0_radial_3_15552"
            r="1"
          >
            <stop offset="0.130911" stopColor="#222CEB" />
            <stop offset="0.651476" stopColor="#6499ED" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(22.4333 5.24169) rotate(110.558) scale(11.305 11.3061)"
            gradientUnits="userSpaceOnUse"
            id="paint1_radial_3_15552"
            r="1"
          >
            <stop offset="0.130911" stopColor="#222CEB" />
            <stop offset="0.651476" stopColor="#A7DFFF" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(24.1638 17.659) rotate(137.357) scale(15.7756 15.7754)"
            gradientUnits="userSpaceOnUse"
            id="paint2_radial_3_15552"
            r="1"
          >
            <stop offset="0.130911" stopColor="#222CEB" />
            <stop offset="0.651476" stopColor="#99D4FF" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(12.642 18.474) rotate(135.582) scale(7.12782 7.1278)"
            gradientUnits="userSpaceOnUse"
            id="paint3_radial_3_15552"
            r="1"
          >
            <stop offset="0.130911" stopColor="#2C67FF" />
            <stop offset="0.651476" stopColor="#6CB0FF" />
          </radialGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_3_15552"
            x1="12.8732"
            x2="11.0504"
            y1="8.73736"
            y2="15.8271"
          >
            <stop offset="0.13" stopColor="#9786FF" />
            <stop offset="0.736193" stopColor="#2244F4" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint5_linear_3_15552"
            x1="16.3143"
            x2="17.3883"
            y1="10.7783"
            y2="14.2158"
          >
            <stop stopColor="#915DFF" />
            <stop offset="1" stopColor="#0F31E0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint6_linear_3_15552"
            x1="14.5953"
            x2="20.504"
            y1="18.2577"
            y2="15.8264"
          >
            <stop offset="0.28" stopColor="#1939DF" />
            <stop offset="1" stopColor="#5570FF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint7_linear_3_15552"
            x1="10.2979"
            x2="14.0574"
            y1="21.4128"
            y2="16.7932"
          >
            <stop stopColor="#8793FF" />
            <stop offset="1" stopColor="#1235E8" />
          </linearGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(25.696 2.27174) rotate(130.772) scale(3.78515 3.78519)"
            gradientUnits="userSpaceOnUse"
            id="paint8_radial_3_15552"
            r="1"
          >
            <stop stopColor="#134BDB" />
            <stop offset="0.651476" stopColor="#61A0FF" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(28.9853 0.863591) rotate(114.186) scale(4.68607 4.68653)"
            gradientUnits="userSpaceOnUse"
            id="paint9_radial_3_15552"
            r="1"
          >
            <stop offset="0.130911" stopColor="#222CEB" />
            <stop offset="0.651476" stopColor="#99C0FF" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(29.0829 5.78698) rotate(137.357) scale(5.5833 5.58324)"
            gradientUnits="userSpaceOnUse"
            id="paint10_radial_3_15552"
            r="1"
          >
            <stop stopColor="#0C45D7" />
            <stop offset="0.651476" stopColor="#99D4FF" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(25.0047 6.07542) rotate(135.583) scale(2.52268 2.52267)"
            gradientUnits="userSpaceOnUse"
            id="paint11_radial_3_15552"
            r="1"
          >
            <stop offset="0.130911" stopColor="#2C67FF" />
            <stop offset="0.651476" stopColor="#6CB0FF" />
          </radialGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint12_linear_3_15552"
            x1="25.0883"
            x2="24.4449"
            y1="2.63643"
            y2="5.13871"
          >
            <stop offset="0.13" stopColor="#BEE8FF" />
            <stop offset="0.736193" stopColor="#72D5FB" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint13_linear_3_15552"
            x1="26.1075"
            x2="26.9296"
            y1="2.67252"
            y2="5.13942"
          >
            <stop stopColor="#59C8FB" />
            <stop offset="1" stopColor="#8CDEFB" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint14_linear_3_15552"
            x1="25.6964"
            x2="27.7818"
            y1="5.9965"
            y2="5.13837"
          >
            <stop offset="0.28" stopColor="#67D9FF" />
            <stop offset="1" stopColor="#A7E6FF" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint15_linear_3_15552"
            x1="24.1793"
            x2="26.0041"
            y1="7.11005"
            y2="5.13901"
          >
            <stop offset="0.221428" stopColor="#FCFEFF" />
            <stop offset="0.895295" stopColor="#48D3FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function MessageAttribution1() {
  return (
    <div
      className="box-border content-stretch flex gap-[12.499px] items-center justify-start p-0 relative shrink-0 w-[31.247px]"
      data-name="Message attribution"
    >
      <AiCompanion />
    </div>
  );
}

function Frame6266308() {
  return (
    <div className="bg-[#dfeaff] box-border content-stretch flex flex-col items-center justify-center px-[4.687px] py-[1.562px] relative rounded-[6.249px] shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323539] text-[15.623px] text-center tracking-[0.1875px] w-full">
        <p className="block leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame6266310() {
  return (
    <div className="bg-[#dfeaff] box-border content-stretch flex flex-col items-center justify-center px-[4.687px] py-[1.562px] relative rounded-[6.249px] shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a2b2d] text-[15.623px] text-center tracking-[0.1875px] w-full">
        <p className="block leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame1642958473() {
  return (
    <div className="box-border content-stretch flex gap-[3.125px] items-center justify-start p-0 relative shrink-0">
      <div className="font-['SF_Pro:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323539] text-[21.873px] text-nowrap tracking-[-0.2343px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">needs of both businesses.</p>
      </div>
      <Frame6266308 />
      <Frame6266310 />
    </div>
  );
}

function Frame1642958474() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className="font-['SF_Pro:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#323539] text-[21.873px] tracking-[-0.2343px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">{`The meeting focused on outlining the requirements for the next version of the GTM Partnership. Key details discussed included hardware upgrades, software enhancements, and design improvements tailored to meet the `}</p>
      </div>
      <Frame1642958473 />
    </div>
  );
}

function Frame6266309() {
  return (
    <div className="bg-[#dfeaff] box-border content-stretch flex flex-col items-center justify-center px-[4.687px] py-[1.562px] relative rounded-[6.249px] shrink-0">
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323539] text-[15.623px] text-center tracking-[0.1875px] w-full">
        <p className="block leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Frame1642958471() {
  return (
    <div className="box-border content-stretch flex gap-[3.125px] items-center justify-start p-0 relative shrink-0">
      <div className="font-['SF_Pro:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323539] text-[21.873px] text-nowrap tracking-[-0.2343px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">expanded compatibility .</p>
      </div>
      <Frame6266309 />
    </div>
  );
}

function Frame1642958472() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className="font-['SF_Pro:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#323539] text-[21.873px] tracking-[-0.2343px]"
        style={{ width: "min-content" }}
      >
        <p className="leading-[1.5] mb-0">
          <span className="font-['SF_Pro:Bold',_sans-serif] not-italic">Marketing Requirements:</span>
          <span>{` Enhanced positioning in market for more visibility.`}</span>
        </p>
        <p className="leading-[1.5]">
          <span className="font-['SF_Pro:Bold',_sans-serif] not-italic">Software Enhancements:</span>
          <span>{` Integration of advanced real-time correction capabilities and `}</span>
        </p>
      </div>
      <Frame1642958471 />
    </div>
  );
}

function QuinaryButton() {
  return (
    <div
      className="bg-[#f7f9fa] box-border content-stretch flex items-center justify-start overflow-clip px-[12.499px] py-[3.125px] relative rounded-[9.374px] shrink-0"
      data-name="Quinary button"
    >
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323539] text-[18.748px] text-center text-nowrap">
        <p className="block leading-[24.997px] whitespace-pre">Sources (1)</p>
      </div>
    </div>
  );
}

function Frame28820() {
  return (
    <div className="box-border content-stretch flex gap-[18.748px] h-[31.247px] items-center justify-start p-0 relative shrink-0 w-full">
      <QuinaryButton />
    </div>
  );
}

function Upvote() {
  return (
    <div
      className="absolute size-[21.873px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Upvote"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Upvote">
          <path
            clipRule="evenodd"
            d={svgPaths.p23e23900}
            fill="var(--fill-0, #6E7680)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="relative rounded-[9.374px] shrink-0 size-[37.496px]" data-name="Icon button">
      <Upvote />
    </div>
  );
}

function Downvote() {
  return (
    <div
      className="absolute size-[21.873px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Downvote"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Downvote">
          <path
            clipRule="evenodd"
            d={svgPaths.p28d67480}
            fill="var(--fill-0, #6E7680)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton6() {
  return (
    <div className="relative rounded-[9.374px] shrink-0 size-[37.496px]" data-name="Icon button">
      <Downvote />
    </div>
  );
}

function Copy1() {
  return (
    <div
      className="absolute size-[21.873px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Copy"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Copy">
          <g id="Vector">
            <path d={svgPaths.p22865520} fill="var(--fill-0, #6E7680)" />
            <path clipRule="evenodd" d={svgPaths.p14fa5200} fill="var(--fill-0, #6E7680)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton7() {
  return (
    <div className="relative rounded-[9.374px] shrink-0 size-[37.496px]" data-name="Icon button">
      <Copy1 />
    </div>
  );
}

function Frame28828() {
  return (
    <div className="box-border content-stretch flex gap-[6.249px] items-center justify-start p-0 relative shrink-0">
      <IconButton5 />
      <IconButton6 />
      <IconButton7 />
    </div>
  );
}

function Frame28831() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[6.249px] items-start justify-start p-0 relative shrink-0 w-[465.573px]">
      <div
        className="font-['SF_Pro:Semibold',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#323539] text-[21.873px] tracking-[-0.2343px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[28.122px]">Proposal for GTM Partnership</p>
      </div>
      <Frame1642958474 />
      <Frame1642958472 />
      <Frame28820 />
      <Frame28828 />
    </div>
  );
}

function Frame1642958793() {
  return (
    <div className="box-border content-stretch flex gap-[18.748px] items-start justify-start p-0 relative shrink-0 w-full">
      <MessageAttribution1 />
      <Frame28831 />
    </div>
  );
}

function MessageTimestampAndActions1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-[6.249px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Message, timestamp and actions"
    >
      <Frame1642958793 />
    </div>
  );
}

function MessageBubble1() {
  return (
    <div
      className="box-border content-stretch flex gap-[15.623px] items-start justify-start p-0 relative shrink-0 w-[514.006px]"
      data-name="Message bubble"
    >
      <MessageTimestampAndActions1 />
    </div>
  );
}

function Conversation() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="conversation">
      <div className="overflow-x-clip overflow-y-auto relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[24.997px] items-start justify-start pb-0 pt-[37.496px] px-[24.997px] relative size-full">
          <MessageBubble />
          <MessageBubble1 />
        </div>
      </div>
    </div>
  );
}

function Zm60RightSidePanelCore() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-col inset-0 items-start justify-start overflow-clip p-0"
      data-name="Zm6.0: Right side panel _Core"
    >
      <HeaderInMeeting />
      <Conversation />
    </div>
  );
}

function Chevron() {
  return (
    <div className="relative shrink-0 size-[24.997px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Chevron">
          <path
            clipRule="evenodd"
            d={svgPaths.p37863680}
            fill="var(--fill-0, #8E9194)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Close1() {
  return (
    <div
      className="box-border content-stretch flex gap-[6.249px] items-center justify-center p-0 relative shrink-0"
      data-name="Close"
    >
      <div className="flex flex-col font-['SF_Pro:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#686f79] text-[15.623px] text-nowrap tracking-[0.1875px]">
        <p className="adjustLetterSpacing block leading-[24.997px] whitespace-pre">Hide suggested prompts</p>
      </div>
      <Chevron />
    </div>
  );
}

function Frame1642958763() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[6.249px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['SF_Pro:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#323539] text-[18.748px]">
        <p className="block leading-[24.997px]">Catch me up on this meeting</p>
      </div>
    </div>
  );
}

function PromptPrepare() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative rounded-[15.623px] shrink-0"
      data-name="PromptPrepare"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[24.997px] items-start justify-start p-[12.499px] relative size-full">
          <Frame1642958763 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#dfe3e8] border-[1.562px] border-solid inset-0 pointer-events-none rounded-[15.623px]"
      />
    </div>
  );
}

function Frame1642958764() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[6.249px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['SF_Pro:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#323539] text-[18.748px]">
        <p className="block leading-[24.997px]">Was my name mentioned?</p>
      </div>
    </div>
  );
}

function PromptSummarize() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative rounded-[15.623px] shrink-0"
      data-name="PromptSummarize"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[24.997px] items-start justify-start p-[12.499px] relative size-full">
          <Frame1642958764 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#dfe3e8] border-[1.562px] border-solid inset-0 pointer-events-none rounded-[15.623px]"
      />
    </div>
  );
}

function Frame1642958769() {
  return (
    <div className="box-border content-stretch flex gap-[12.499px] items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <PromptPrepare />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <PromptSummarize />
      </div>
    </div>
  );
}

function Frame1642958765() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[6.249px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['SF_Pro:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#323539] text-[18.748px]">
        <p className="block leading-[24.997px]">Are there any action items?</p>
      </div>
    </div>
  );
}

function PromptActions() {
  return (
    <div
      className="basis-0 grow h-full min-h-px min-w-px relative rounded-[15.623px] shrink-0"
      data-name="PromptActions"
    >
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[24.997px] items-start justify-start p-[12.499px] relative size-full">
          <Frame1642958765 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#dfe3e8] border-[1.562px] border-solid inset-0 pointer-events-none rounded-[15.623px]"
      />
    </div>
  );
}

function Frame1642958766() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[6.249px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['SF_Pro:Regular',_sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#323539] text-[18.748px]">
        <p className="block leading-[24.997px]">What topics have been discussed?</p>
      </div>
    </div>
  );
}

function PromptBrainstorm() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[15.623px] shrink-0" data-name="PromptBrainstorm">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-[24.997px] items-start justify-start p-[12.499px] relative w-full">
          <Frame1642958766 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#dfe3e8] border-[1.562px] border-solid inset-0 pointer-events-none rounded-[15.623px]"
      />
    </div>
  );
}

function Frame1642958770() {
  return (
    <div className="box-border content-stretch flex gap-[12.499px] items-center justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <PromptActions />
      </div>
      <PromptBrainstorm />
    </div>
  );
}

function Frame1642958771() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12.499px] items-start justify-start p-0 relative shrink-0 w-full">
      <Frame1642958769 />
      <Frame1642958770 />
    </div>
  );
}

function Frame1642958772() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12.499px] items-center justify-start p-0 relative shrink-0 w-[512.443px]">
      <Close1 />
      <Frame1642958771 />
    </div>
  );
}

function SuggestedPromptsCard() {
  return (
    <div
      className="relative rounded-tl-[24.997px] rounded-tr-[24.997px] shrink-0 w-[564px]"
      data-name="Suggested prompts card"
    >
      <div className="box-border content-stretch flex flex-col gap-[12.499px] items-start justify-start overflow-clip pb-0 pl-[24.997px] pr-0 pt-[12.499px] relative w-[564px]">
        <Frame1642958772 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#dfe3e8] border-[1.562px_1.562px_0px] border-solid bottom-0 left-[-1.56px] pointer-events-none right-[-1.56px] rounded-tl-[26.559px] rounded-tr-[26.559px] top-[-1.56px]"
      />
    </div>
  );
}

function Icon3() {
  return (
    <div
      className="absolute size-[24.997px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Icon">
          <path
            clipRule="evenodd"
            d={svgPaths.p3231d900}
            fill="var(--fill-0, #8E9194)"
            fillRule="evenodd"
            id="Vector 2 (Stroke)"
          />
        </g>
      </svg>
    </div>
  );
}

function IconButton8() {
  return (
    <div className="relative rounded-[31.247px] shrink-0 size-[37.496px]" data-name="Icon button">
      <Icon3 />
    </div>
  );
}

function Frame1642958461() {
  return (
    <div className="box-border content-stretch flex gap-[9.374px] items-center justify-end p-0 relative shrink-0">
      <IconButton8 />
    </div>
  );
}

function Frame1642958460() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[12.499px] grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
      <div className="basis-0 font-['SF_Pro:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#6e7680] text-[18.748px]">
        <p className="block leading-[24.997px]">Write a message or type / for more</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div
      className="absolute size-[24.997px] translate-x-[-50%] translate-y-[-50%]"
      data-name="Icon"
      style={{ top: "calc(50% + 0.252px)", left: "calc(50% + 0.252px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Icon">
          <path d={svgPaths.p10696180} fill="var(--fill-0, #C5C8CD)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconButton9() {
  return (
    <div className="bg-[#f1f4f6] relative rounded-[31.247px] shrink-0 size-[37.496px]" data-name="Icon button">
      <Icon4 />
    </div>
  );
}

function Frame28681() {
  return (
    <div className="box-border content-stretch flex gap-[9.374px] items-center justify-end p-0 relative shrink-0">
      <IconButton9 />
    </div>
  );
}

function Console() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex gap-[6.249px] items-center justify-start left-1/2 p-[12.499px] rounded-[24.997px] top-[18.75px] translate-x-[-50%] w-[515.568px]"
      data-name="console"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#dfe3e8] border-[1.562px] border-solid inset-0 pointer-events-none rounded-[24.997px]"
      />
      <Frame1642958461 />
      <Frame1642958460 />
      <Frame28681 />
    </div>
  );
}

function NoticeAffordanceDesktop() {
  return (
    <div
      className="absolute bottom-[12.23px] box-border content-stretch flex gap-[9.374px] items-center justify-center left-0 px-[12.499px] py-[6.249px] w-[564px]"
      data-name="Notice Affordance / Desktop"
    >
      <div className="font-['SF_Pro_Text:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#6e7680] text-[18.748px] text-nowrap tracking-[-0.375px]">
        <p className="adjustLetterSpacing block leading-[24.997px] whitespace-pre">
          No other participants can see this conversation
        </p>
      </div>
    </div>
  );
}

function InMeetingComposeBox() {
  return (
    <div className="bg-[#ffffff] h-[143.734px] relative shrink-0 w-[564px]" data-name="In-meeting compose box">
      <Console />
      <NoticeAffordanceDesktop />
    </div>
  );
}

function Frame1642958767() {
  return (
    <div className="absolute bottom-[3.13px] box-border content-stretch flex flex-col items-end justify-start left-0 p-0 w-[564px]">
      <SuggestedPromptsCard />
      <InMeetingComposeBox />
    </div>
  );
}

function Zm60RightSidePanel() {
  return (
    <div
      className="absolute h-[1078.01px] left-0 overflow-clip rounded-[15px] shadow-[26px_4px_33px_0px_rgba(0,0,0,0.4)] top-0 w-[564px]"
      data-name="Zm6.0: Right side panel"
    >
      <Zm60RightSidePanelCore />
      <Frame1642958767 />
    </div>
  );
}

export default function Frame1642958825() {
  return (
    <div className="relative size-full">
      <Zm60RightSidePanel />
    </div>
  );
}
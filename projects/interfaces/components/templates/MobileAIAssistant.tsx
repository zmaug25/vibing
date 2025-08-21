import React from 'react';

export default function MobileAIAssistant({ getText }: { getText: (id: string) => string }) {
  return (
    <div className="w-[414px] h-[896px] rounded-[36px] shadow border bg-white relative overflow-hidden">
      <div className="bg-[#39394d] h-[89px] text-white flex items-end justify-center pb-3 text-sm">Chat</div>
      <div className="p-4">
        <div className="bg-[#f7f7fa] rounded-[14px] p-4">
          <div className="text-[#04041390] text-sm">{getText('contact-number')}</div>
          <div className="text-[#222230] font-bold">{getText('contact-name')}</div>
          <div className="mt-4">
            <div className="text-[13px] text-[#04041390] mb-2">Transcription</div>
            <div className="text-[#222230] text-[14px] leading-[18px]">{getText('transcription-content')}</div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 top-[280px] w-[655px] bg-[#f6f8f9] rounded-[20px] p-5 shadow text-[#131619]">
        <div className="font-semibold text-[23px] mb-2">Summary</div>
        <div className="text-[23px] leading-[29px]">{getText('summary-content')}</div>
        <button className="text-[#0e72ed] mt-2">Edit</button>
      </div>
      <div className="absolute left-[-364px] top-[627px] w-[655px] bg-[#f6f8f9] rounded-[20px] p-5 shadow text-[#131619]">
        <div className="font-semibold text-[23px] mb-2">Task</div>
        <div className="text-[23px] leading-[29px]">{getText('task-content')}</div>
        <button className="text-[#0e72ed] mt-2">Edit</button>
      </div>
    </div>
  );
}



import React from 'react';

export default function AICompanion({ getText }: { getText: (id: string) => string }) {
  return (
    <div className="w-[564px] bg-white border rounded-lg p-6">
      <div className="text-center text-xl font-semibold mb-4">AI Companion</div>
      <div className="space-y-4">
        <div className="flex justify-end">
          <div className="bg-blue-100 rounded-xl px-3 py-2 max-w-[480px] text-[18px]">
            {getText('user-message')}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
          <div className="space-y-2 max-w-[480px]">
            <div className="font-semibold">{getText('ai-title')}</div>
            <p className="text-[18px] leading-7">{getText('ai-paragraph-1')}</p>
            <p className="text-[18px] leading-7">{getText('ai-paragraph-2')}</p>
            <button className="text-sm bg-gray-100 rounded px-2 py-1">{getText('sources-text')}</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border p-3 text-[16px]">{getText('prompt-1')}</div>
          <div className="rounded-xl border p-3 text-[16px]">{getText('prompt-2')}</div>
          <div className="rounded-xl border p-3 text-[16px]">{getText('prompt-3')}</div>
          <div className="rounded-xl border p-3 text-[16px]">{getText('prompt-4')}</div>
        </div>
      </div>
    </div>
  );
}



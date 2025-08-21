import React from 'react';

export default function CallRouting({ getText }: { getText: (id: string) => string }) {
  return (
    <div className="w-[830px] h-[521px] relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[418px] h-[250px] bg-white rounded-2xl border shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl">Redirect Call</div>
          <button className="w-8 h-8 rounded bg-gray-100" />
        </div>
        <div className="mb-2 font-semibold">Select Location</div>
        <div className="flex items-center justify-between border rounded px-2 py-1.5">
          <div className="text-[#525252]">{getText('selected-location')}</div>
          <div className="w-3.5 h-3.5 bg-gray-900 clip-path-[polygon(25%_35%,50%_60%,75%_35%,85%_45%,50%_80%,15%_45%)]" />
        </div>
        <div className="flex gap-2 justify-end mt-6">
          <button className="px-4 py-1.5 rounded bg-[#0e72ed] text-white">Save</button>
          <button className="px-4 py-1.5 rounded bg-gray-100">Cancel</button>
        </div>
      </div>
    </div>
  );
}



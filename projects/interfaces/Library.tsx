import React, { useState } from 'react';
import InterfaceEditor from './InterfaceEditor';
import { interfaceConfigs, InterfaceConfig } from './interfaces';

export default function Library() {
  const [selected, setSelected] = useState<InterfaceConfig | null>(interfaceConfigs[0] ?? null);

  if (!selected) {
    return <div className="p-8">No interfaces available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Choose an interface</label>
          <select
            className="border rounded px-3 py-2"
            value={selected.id}
            onChange={(e) => {
              const next = interfaceConfigs.find((c) => c.id === e.target.value) || null;
              setSelected(next);
            }}
          >
            {interfaceConfigs.map((cfg) => (
              <option key={cfg.id} value={cfg.id}>
                {cfg.name}
              </option>
            ))}
          </select>
        </div>
        <InterfaceEditor interfaceConfig={selected} onBack={() => {}} />
      </div>
    </div>
  );
}



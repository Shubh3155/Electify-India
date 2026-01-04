'use client';

import { useState } from 'react';

export default function ComparisonSlider({ leftLabel, rightLabel, leftContent, rightContent }: {
  leftLabel: string;
  rightLabel: string;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) {
  const [pos, setPos] = useState(50);
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-slate-200 dark:border-dark-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 text-sm text-slate-600 dark:text-slate-300">
        <span>{leftLabel}</span>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} className="w-48" />
        <span>{rightLabel}</span>
      </div>
      <div className="relative">
        <div className="p-4">
          {rightContent}
        </div>
        <div className="absolute inset-0" style={{ width: `${pos}%`, overflow: 'hidden' }}>
          <div className="p-4 bg-white/90 dark:bg-dark-800/90 border-r border-slate-200 dark:border-dark-700">
            {leftContent}
          </div>
        </div>
      </div>
    </div>
  );
}
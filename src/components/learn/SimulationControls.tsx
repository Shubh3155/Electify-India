'use client';

import { useMemo, useState } from 'react';

export default function SimulationControls() {
  const [time, setTime] = useState(5); // years
  const [cost, setCost] = useState(100); // baseline cost units
  const [frequency, setFrequency] = useState(2); // elections per 5 years

  const results = useMemo(() => {
    const synchronizedFrequency = 1;
    const savedElections = frequency - synchronizedFrequency;
    const costSaving = Math.round((savedElections / frequency) * cost);
    const governanceStability = Math.min(100, 50 + savedElections * 25);
    return { savedElections, costSaving, governanceStability };
  }, [frequency, cost]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl">
        <h3 className="font-semibold mb-2 text-slate-900 dark:text-dark-50">Controls</h3>
        <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Time Horizon (years)</label>
        <input type="range" min={1} max={10} value={time} onChange={(e) => setTime(Number(e.target.value))} className="w-full" />
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">{time} years</div>

        <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Election Cost (units)</label>
        <input type="range" min={50} max={200} value={cost} onChange={(e) => setCost(Number(e.target.value))} className="w-full" />
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">{cost} units</div>

        <label className="block text-sm text-slate-700 dark:text-slate-300 mb-1">Election Frequency (per 5 years)</label>
        <input type="range" min={1} max={4} value={frequency} onChange={(e) => setFrequency(Number(e.target.value))} className="w-full" />
        <div className="text-xs text-slate-500 dark:text-slate-400">{frequency} elections</div>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
        <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Outcome</h3>
        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
          <li>Saved elections: <strong>{results.savedElections}</strong></li>
          <li>Estimated cost savings: <strong>{results.costSaving}</strong> units</li>
          <li>Governance stability indicator: <strong>{results.governanceStability}%</strong></li>
        </ul>
        <p className="mt-3 text-xs">These are illustrative values for learning purposes.</p>
      </div>
    </div>
  );
}
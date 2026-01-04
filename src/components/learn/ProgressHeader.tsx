'use client';

import { motion } from 'framer-motion';
import { useProgress } from '@/context/ProgressContext';

export default function ProgressHeader({ title }: { title: string }) {
  const { completedLevels, xp, streak } = useProgress();
  const progress = Math.round((completedLevels.length / 7) * 100);

  return (
    <div className="bg-white dark:bg-dark-800 border-b border-slate-200 dark:border-dark-700">
      <div className="container mx-auto px-4 py-4 max-w-5xl flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-dark-50">{title}</h1>
          <div className="text-sm text-slate-600 dark:text-slate-300">XP {xp} • Streak {streak}</div>
        </div>
        <div className="w-56">
          <div className="w-full bg-slate-200 dark:bg-dark-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
            />
          </div>
          <div className="text-xs mt-1 text-slate-500 dark:text-slate-400">{progress}% complete</div>
        </div>
      </div>
    </div>
  );
}
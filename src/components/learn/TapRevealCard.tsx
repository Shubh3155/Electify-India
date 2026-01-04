'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TapRevealCard({ title, content, icon }: { title: string; content: string; icon?: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setRevealed((r) => !r)}
      className="text-left p-4 rounded-xl bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 shadow-sm"
    >
      <div className="flex items-center space-x-3">
        {icon}
        <h3 className="text-lg font-semibold text-slate-900 dark:text-dark-50">{title}</h3>
      </div>
      <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
        {revealed ? content : 'Tap to reveal'}
      </div>
    </motion.button>
  );
}
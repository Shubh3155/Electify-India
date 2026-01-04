'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type Card = { id: string; text: string; type?: 'benefit' | 'concern' | 'fact' | 'myth' };

export default function SwipeDeck({ cards, onSwipe }: { cards: Card[]; onSwipe: (card: Card, direction: 'left' | 'right') => void }) {
  const [index, setIndex] = useState(0);
  const remaining = cards.slice(index);

  const handle = (dir: 'left' | 'right') => {
    const card = cards[index];
    if (!card) return;
    onSwipe(card, dir);
    setIndex((i) => i + 1);
  };

  return (
    <div className="flex flex-col items-center">
      {remaining.length ? (
        <motion.div key={remaining[0].id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md p-6 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl shadow">
          <div className="text-lg text-slate-900 dark:text-dark-50">{remaining[0].text}</div>
          <div className="mt-4 flex items-center justify-between">
            <button onClick={() => handle('left')} className="px-4 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800">Left</button>
            <button onClick={() => handle('right')} className="px-4 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800">Right</button>
          </div>
        </motion.div>
      ) : (
        <div className="text-slate-600 dark:text-slate-300">No more cards</div>
      )}
    </div>
  );
}
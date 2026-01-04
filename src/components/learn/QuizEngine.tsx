'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/context/ProgressContext';

type Question = {
  q: string;
  options: string[];
  correct: number;
  explanation?: string;
};

export default function QuizEngine({ questions }: { questions: Question[] }) {
  const [i, setI] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const { awardXP } = useProgress();

  const current = questions[i];

  const submit = () => {
    if (sel === null) return;
    if (sel === current.correct) setScore((s) => s + 1);
    if (i < questions.length - 1) {
      setI((x) => x + 1);
      setSel(null);
    } else {
      setDone(true);
      awardXP(10);
    }
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center p-8 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-dark-50">Quiz Completed</h3>
        <p className="text-slate-700 dark:text-slate-300">Your score: {score}/{questions.length} ({pct}%)</p>
      </motion.div>
    );
  }

  return (
    <div className="p-4 bg-white dark:bg-dark-800 border border-slate-200 dark:border-dark-700 rounded-xl">
      <div className="text-sm text-slate-600 dark:text-slate-300 mb-2">Question {i + 1} of {questions.length}</div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-dark-50 mb-4">{current.q}</h3>
      <div className="space-y-2">
        {current.options.map((opt, idx) => (
          <button key={idx} onClick={() => setSel(idx)} className={`w-full text-left px-4 py-2 rounded-lg border ${sel === idx ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-200 dark:border-dark-700'} `}>
            {opt}
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={submit} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium">{i < questions.length - 1 ? 'Next' : 'Finish'}</button>
      </div>
    </div>
  );
}
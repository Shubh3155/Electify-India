'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useProgress } from '@/context/ProgressContext';
import ProgressHeader from './ProgressHeader';
import LevelNav from './LevelNav';

export default function LevelShell({ levelId, title, nextHref, prevHref, children }: {
  levelId: string;
  title: string;
  nextHref?: string;
  prevHref?: string;
  children: React.ReactNode;
}) {
  const { setLastVisited } = useProgress();

  useEffect(() => {
    setLastVisited(`/learn/${levelId}`);
  }, [levelId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800">
      <ProgressHeader title={title} />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4 py-8 max-w-5xl">
        {children}
        <LevelNav nextHref={nextHref} prevHref={prevHref} />
      </motion.div>
    </div>
  );
}
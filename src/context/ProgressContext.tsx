'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ProgressState = {
  completedLevels: string[];
  xp: number;
  streak: number;
  lastVisitedRoute?: string;
  mythFactStats: { correct: number; total: number };
};

type ProgressContextType = ProgressState & {
  saveProgress: (partial: Partial<ProgressState>) => void;
  awardXP: (points: number) => void;
  markLevelComplete: (levelId: string) => void;
  setLastVisited: (route: string) => void;
  recordMythFactResult: (correct: boolean) => void;
};

const defaultState: ProgressState = {
  completedLevels: [],
  xp: 0,
  streak: 0,
  lastVisitedRoute: undefined,
  mythFactStats: { correct: 0, total: 0 },
};

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ProgressState>(defaultState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('electify_progress');
      if (raw) setState(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('electify_progress', JSON.stringify(state));
    } catch {}
  }, [state]);

  const value = useMemo<ProgressContextType>(() => ({
    ...state,
    saveProgress: (partial) => setState((prev) => ({ ...prev, ...partial })),
    awardXP: (points) => setState((prev) => ({ ...prev, xp: prev.xp + points, streak: prev.streak + 1 })),
    markLevelComplete: (levelId) => setState((prev) => ({
      ...prev,
      completedLevels: prev.completedLevels.includes(levelId)
        ? prev.completedLevels
        : [...prev.completedLevels, levelId],
    })),
    setLastVisited: (route) => setState((prev) => ({ ...prev, lastVisitedRoute: route })),
    recordMythFactResult: (correct) => setState((prev) => ({
      ...prev,
      mythFactStats: {
        correct: prev.mythFactStats.correct + (correct ? 1 : 0),
        total: prev.mythFactStats.total + 1,
      },
      streak: correct ? prev.streak + 1 : 0,
    })),
  }), [state]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
"use client";

import LevelShell from "@/components/learn/LevelShell";
import SwipeDeck from "@/components/learn/SwipeDeck";
import { useProgress } from "@/context/ProgressContext";

export default function Level5Page() {
  const { recordMythFactResult } = useProgress();
  const cards = [
    { id: "m1", text: "ONOE is already mandated by the Constitution", type: "myth" },
    { id: "f1", text: "India had simultaneous elections until late 1960s", type: "fact" },
    { id: "m2", text: "ONOE removes state elections entirely", type: "myth" },
  ];
  const onSwipe = (card: any, dir: 'left' | 'right') => {
    const correct = (card.type === 'myth' && dir === 'left') || (card.type === 'fact' && dir === 'right');
    recordMythFactResult(correct);
  };
  return (
    <LevelShell levelId="level-5" title="Level 5: Myth vs Fact" prevHref="/learn/level-4" nextHref="/learn/level-6">
      <SwipeDeck cards={cards} onSwipe={onSwipe} />
      <div className="mt-4 text-xs text-slate-600 dark:text-slate-300">Swipe left for Myth, right for Fact.</div>
    </LevelShell>
  );
}
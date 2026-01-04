"use client";

import LevelShell from "@/components/learn/LevelShell";
import CardGrid from "@/components/learn/CardGrid";
import TapRevealCard from "@/components/learn/TapRevealCard";
import { useState } from "react";
import { useProgress } from "@/context/ProgressContext";

export default function Level1Page() {
  const { awardXP, markLevelComplete } = useProgress();
  const [revealedCount, setRevealedCount] = useState(0);

  const onReveal = (revealed: boolean) => {
    setRevealedCount((c) => c + (revealed ? 1 : -1));
    if (revealedCount + 1 === 4) {
      awardXP(5);
      markLevelComplete("level-1");
    }
  };

  return (
    <LevelShell levelId="level-1" title="Level 1: Election Basics" nextHref="/learn/level-2">
      <CardGrid>
        <TapRevealCard title="What is an election?" content="Citizens choose representatives to govern on their behalf." />
        <TapRevealCard title="Why elections matter" content="They enable peaceful power transitions and accountability." />
        <TapRevealCard title="Who can vote?" content="Indian citizens 18+ with valid voter registration." />
        <TapRevealCard title="Citizen role" content="Stay informed, vote responsibly, and verify information." />
      </CardGrid>
      <div className="mt-6 text-sm text-slate-600 dark:text-slate-300">Reveal all cards to complete the level.</div>
    </LevelShell>
  );
}
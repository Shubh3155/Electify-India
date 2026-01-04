"use client";

import LevelShell from "@/components/learn/LevelShell";
import CardGrid from "@/components/learn/CardGrid";
import TapRevealCard from "@/components/learn/TapRevealCard";

export default function Level2Page() {
  return (
    <LevelShell levelId="level-2" title="Level 2: How Elections Work" prevHref="/learn/level-1" nextHref="/learn/level-3">
      <CardGrid>
        <TapRevealCard title="Election Commission of India" content="Independent constitutional authority supervising elections." />
        <TapRevealCard title="Lok Sabha vs State" content="National vs state-level legislatures elected separately." />
        <TapRevealCard title="Election cycle" content="Typical 5-year terms for governments." />
        <TapRevealCard title="EVM & VVPAT" content="Electronic voting with paper audit trail for verification." />
      </CardGrid>
    </LevelShell>
  );
}
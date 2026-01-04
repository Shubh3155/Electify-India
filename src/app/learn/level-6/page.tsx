"use client";

import LevelShell from "@/components/learn/LevelShell";
import SimulationControls from "@/components/learn/SimulationControls";

export default function Level6Page() {
  return (
    <LevelShell levelId="level-6" title="Level 6: Simulation Mode" prevHref="/learn/level-5" nextHref="/learn/level-7">
      <SimulationControls />
    </LevelShell>
  );
}
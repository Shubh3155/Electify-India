"use client";

import LevelShell from "@/components/learn/LevelShell";
import QuizEngine from "@/components/learn/QuizEngine";
import { useProgress } from "@/context/ProgressContext";

export default function Level7Page() {
  const { markLevelComplete } = useProgress();
  const questions = [
    { q: "Who oversees elections in India?", options: ["Parliament", "Election Commission of India", "Supreme Court"], correct: 1 },
    { q: "Typical government term length?", options: ["3 years", "5 years", "7 years"], correct: 1 },
    { q: "ONOE refers to...", options: ["One election nationwide", "Only national elections", "No state elections"], correct: 0 },
  ];
  return (
    <LevelShell levelId="level-7" title="Level 7: Knowledge Check & Rewards" prevHref="/learn/level-6">
      <QuizEngine questions={questions} />
      <div className="mt-4">
        <button onClick={() => markLevelComplete('level-7')} className="px-4 py-2 rounded-lg bg-green-600 text-white">Mark Level Complete</button>
      </div>
    </LevelShell>
  );
}
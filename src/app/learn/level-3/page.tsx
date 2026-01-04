"use client";

import LevelShell from "@/components/learn/LevelShell";
import ComparisonSlider from "@/components/learn/ComparisonSlider";

export default function Level3Page() {
  return (
    <LevelShell levelId="level-3" title="Level 3: ONOE Explained" prevHref="/learn/level-2" nextHref="/learn/level-4">
      <ComparisonSlider
        leftLabel="Current System"
        rightLabel="ONOE"
        leftContent={<div>
          <ul className="list-disc ml-5 text-sm">
            <li>Staggered elections over years</li>
            <li>Frequent Model Code of Conduct</li>
            <li>Higher recurring costs</li>
          </ul>
        </div>}
        rightContent={<div>
          <ul className="list-disc ml-5 text-sm">
            <li>Sync national and state elections</li>
            <li>Longer governance continuity</li>
            <li>Potential cost efficiency</li>
          </ul>
        </div>}
      />
    </LevelShell>
  );
}
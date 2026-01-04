"use client";

import { ProgressProvider } from "@/context/ProgressContext";

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <ProgressProvider>{children}</ProgressProvider>;
}
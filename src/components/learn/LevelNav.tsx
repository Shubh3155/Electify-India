'use client';

import Link from 'next/link';

export default function LevelNav({ nextHref, prevHref }: { nextHref?: string; prevHref?: string }) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <div>
        {prevHref && (
          <Link href={prevHref} className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
            ← Previous
          </Link>
        )}
      </div>
      <div className="flex items-center space-x-3">
        <Link href="/learn" className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-all">
          Level Select
        </Link>
        {nextHref && (
          <Link href={nextHref} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium hover:from-blue-700 hover:to-teal-700 transition-all">
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}
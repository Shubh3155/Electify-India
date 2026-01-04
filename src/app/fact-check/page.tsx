"use client";

// AppLayout is now provided globally via ConditionalLayout
import { useState } from "react";
import { motion } from "framer-motion";

type Analysis = {
  verdict: "Factual" | "Potentially Misleading" | "Unsupported";
  confidence: number; // 0-100
  reasons: string[];
};

function analyzeText(input: string): Analysis {
  const text = input.toLowerCase();
  let score = 50; // baseline
  const reasons: string[] = [];

  const sensational = ["₹", "crore", "always", "never", "guaranteed", "everyone", "100%", "promised", "massive"];
  const authority = ["source:", "eci", "election commission", "law commission", "report no.", "pdf", "doi", "http://", "https://", "footnote", "appendix"];
  const hedging = ["may", "could", "suggests", "likely", "estimates", "appears"];

  if (sensational.some(k => text.includes(k))) {
    score -= 15;
    reasons.push("Contains sensational or absolute phrasing.");
  }
  if (authority.some(k => text.includes(k))) {
    score += 20;
    reasons.push("Mentions sources or authoritative references.");
  }
  if (hedging.some(k => text.includes(k))) {
    score += 5;
    reasons.push("Uses cautious/hedging language rather than absolutes.");
  }
  const linkCount = (text.match(/https?:\/\//g) || []).length;
  if (linkCount >= 2) {
    score += 10;
    reasons.push("Multiple external references/links present.");
  }

  const length = input.trim().length;
  if (length < 40) {
    score -= 20;
    reasons.push("Very short or out-of-context claim.");
  } else if (length > 500) {
    score += 5;
    reasons.push("Longer context provided.");
  }

  // Boundaries
  if (score < 0) score = 0;
  if (score > 100) score = 100;

  let verdict: Analysis["verdict"] = "Unsupported";
  if (score >= 70) verdict = "Factual";
  else if (score >= 40) verdict = "Potentially Misleading";

  return { verdict, confidence: Math.round(score), reasons };
}

export default function FactCheckPage() {
  const [input, setInput] = useState("");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(false);

  const onAnalyze = async () => {
    if (!input.trim()) return;
    setLoading(true);
    // Simulate analysis latency
    await new Promise(r => setTimeout(r, 600));
    setAnalysis(analyzeText(input));
    setLoading(false);
  };

  const onReset = () => {
    setInput("");
    setAnalysis(null);
  };

  const verdictStyles = (v: Analysis["verdict"]) => {
    if (v === "Factual") return "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800";
    if (v === "Potentially Misleading") return "bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800";
    return "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-dark-50">Check a Fact</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Paste an article, paragraph, or claim to analyze its reliability.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 border border-slate-100 dark:border-dark-700"
        >
          <label htmlFor="fact-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Text
          </label>
          <textarea
            id="fact-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
            placeholder="Paste your text here..."
            className="w-full rounded-lg border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-800 p-3 text-gray-800 dark:text-dark-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={onAnalyze}
              disabled={!input.trim() || loading}
              className={`inline-flex items-center px-4 py-2 rounded-lg text-white transition-colors ${!input.trim() || loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              Analyze
            </button>
            <button
              onClick={onReset}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-100 dark:bg-dark-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-dark-600"
            >
              Reset
            </button>
          </div>

          {loading && (
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">Analyzing...</div>
          )}

          {analysis && (
            <div className={`mt-6 rounded-lg p-4 border ${verdictStyles(analysis.verdict)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {analysis.verdict === "Factual" ? (
                    <svg className="h-6 w-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : analysis.verdict === "Potentially Misleading" ? (
                    <svg className="h-6 w-6 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <p className="font-semibold text-gray-800 dark:text-dark-50">{analysis.verdict}</p>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Confidence: {analysis.confidence}%</span>
              </div>
              {analysis.reasons.length > 0 && (
                <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {analysis.reasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              )}
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">This tool provides a heuristic estimate. For formal verification, cross-check with authoritative sources.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

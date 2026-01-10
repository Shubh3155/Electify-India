"use client";

import { useState, useEffect } from "react";

/* 🔍 Highlight words that appear only after reveal */
function highlightDifferences(original: string, blind: string) {
  const blindWords = new Set(
    blind.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/)
  );

  return original.split(/(\s+)/).map((word, idx) => {
    const clean = word.toLowerCase().replace(/[^\w]/g, "");

    if (clean && !blindWords.has(clean)) {
      return (
        <mark
          key={idx}
          style={{
            backgroundColor: "rgba(250, 204, 21, 0.45)",
            padding: "0 3px",
            borderRadius: "4px",
          }}
        >
          {word}
        </mark>
      );
    }

    return <span key={idx}>{word}</span>;
  });
}

type Article = {
  title: string;        // original title
  blindTitle: string;   // anonymized title
  content: string;
  blindContent: string;
};

export default function BlindFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reflection, setReflection] = useState<null | string>(null);

  useEffect(() => {
    const fetchAndBlindArticles = async () => {
      try {
        const newsRes = await fetch("/api/blind/news");
        const newsData = await newsRes.json();
        if (!newsData?.length) return;

        const processed: Article[] = await Promise.all(
          newsData.slice(0, 5).map(async (article: any) => {
            // 🔹 Blind BOTH title + content
            const blindRes = await fetch("/api/blind/process", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                text: `${article.title}\n\n${article.content}`,
              }),
            });

            const blindData = await blindRes.json();

            // 🔹 Split blind title & blind content
            const [blindTitle, ...rest] =
              blindData.blindText.split("\n\n");

            return {
              title: article.title,
              blindTitle: blindTitle || "Anonymized News Article",
              content: article.content,
              blindContent: rest.join("\n\n"),
            };
          })
        );

        setArticles(processed);
      } catch (err) {
        console.error("Blind feed error:", err);
      }
    };

    fetchAndBlindArticles();
  }, []);

  if (!articles.length) {
    return <p style={{ padding: "2rem" }}>Loading Blind Read Mode...</p>;
  }

  const current = articles[selectedIndex];

  return (
    <div style={{ display: "flex", padding: "2rem", gap: "2rem" }}>
      {/* 🧾 Live News List */}
     <div style={{ width: "30%" }}>
  <h3>Live News</h3>

  {articles.map((a, idx) => (
    <div
      key={idx}
      onClick={() => {
        setSelectedIndex(idx);
        setRevealed(false);
        setReflection(null);
      }}
      style={{
        cursor: "pointer",
        padding: "0.75rem",
        marginBottom: "0.5rem",
        borderRadius: "6px",
        background:
          idx === selectedIndex
            ? "rgba(139, 92, 246, 0.15)"
            : "transparent",
        borderLeft:
          idx === selectedIndex
            ? "4px solid #8b5cf6"
            : "4px solid transparent",
        color: "#e5e7eb",
      }}
    >
      {/* 🔒 Blind title until reveal */}
      {revealed && idx === selectedIndex ? a.title : a.blindTitle}
    </div>
  ))}
</div>


      {/* 📖 Article Viewer */}
      <div style={{ width: "70%" }}>
        <h1>Blind Read Mode</h1>

        <span style={{ color: "green", fontWeight: "bold" }}>
          Blind Read Mode ON
        </span>

        {/* ✅ FIXED: blind title before reveal */}
        <h2 style={{ marginTop: "1rem" }}>
          {revealed ? current.title : current.blindTitle}
        </h2>

        {/* Blind text */}
        <p
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          {current.blindContent}
        </p>

        {/* Reveal button */}
        {!revealed && (
          <div style={{ marginTop: "1rem" }}>
            <button
              onClick={() => setRevealed(true)}
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #ef4444, #dc2626)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 0 2px rgba(239,68,68,0.4)",
              }}
            >
              ⚠️ Reveal Original Context
            </button>
          </div>
        )}

        {/* Revealed content */}
        {revealed && (
          <>
            <div style={{ marginTop: "1.5rem" }}>
              <h3>Original Article (Highlighted)</h3>
              <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
                {highlightDifferences(
                  current.content,
                  current.blindContent
                )}
              </p>
            </div>

            {/* 🧠 Bias Reflection */}
            <div
              style={{
                marginTop: "2rem",
                padding: "1.25rem",
                borderRadius: "10px",
                background: "rgba(139,92,246,0.12)",
                border: "1px solid rgba(139,92,246,0.4)",
              }}
            >
              <h3>🧠 Bias Reflection</h3>

              <p style={{ marginBottom: "1rem" }}>
                Did knowing the identities change how you judged this article?
              </p>

              {!reflection ? (
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button onClick={() => setReflection("Yes")} className="bias-btn">
                    ✅ Yes
                  </button>
                  <button
                    onClick={() => setReflection("Somewhat")}
                    className="bias-btn"
                  >
                    🤔 Somewhat
                  </button>
                  <button onClick={() => setReflection("No")} className="bias-btn">
                    ❌ No
                  </button>
                </div>
              ) : (
                <p style={{ fontWeight: "bold", color: "#a78bfa" }}>
                  Your reflection: {reflection}
                </p>
              )}
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .bias-btn {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          background: #1f2937;
          color: #e5e7eb;
        }
        .bias-btn:hover {
          background: #374151;
        }
      `}</style>
    </div>
  );
}

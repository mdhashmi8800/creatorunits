"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface DensityWord {
  word: string;
  count: number;
  percentage: number;
}

export default function WordCounter() {
  const { showToast } = useToast();
  const [text, setText] = useState<string>("Writing blog posts requires careful optimization. Fast pages rank better, and keyword density is key for search engines. Make sure your density percentages remain clean.");

  const getStats = () => {
    const totalChars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    
    const wordsList = text.toLowerCase().match(/\b[a-z0-9']+\b/g) || [];
    const totalWords = wordsList.length;

    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;

    const readingSpeed = Math.ceil(totalWords / 200); // 200 WPM
    
    // Keyword density analytics
    // Stop words to filter out
    const stopWords = new Set([
      "the", "a", "to", "in", "at", "of", "and", "is", "it", "that", "you", "he", "was",
      "for", "on", "are", "as", "with", "his", "they", "i", "this", "be", "an", "by", "from",
      "or", "but", "not", "your", "my", "our", "their", "we", "have", "has", "had", "do", "does"
    ]);

    const wordCounts: Record<string, number> = {};
    let filteredCount = 0;

    wordsList.forEach((w) => {
      if (!stopWords.has(w) && w.length > 2) {
        wordCounts[w] = (wordCounts[w] || 0) + 1;
        filteredCount++;
      }
    });

    const density: DensityWord[] = Object.entries(wordCounts)
      .map(([word, count]) => ({
        word,
        count,
        percentage: totalWords > 0 ? parseFloat(((count / totalWords) * 100).toFixed(1)) : 0
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8); // Top 8 keywords

    return {
      totalChars,
      charsNoSpace,
      totalWords,
      sentences,
      paragraphs,
      readingSpeed,
      density
    };
  };

  const stats = getStats();

  const handleCopy = () => {
    if (!text.trim()) return;
    navigator.clipboard.writeText(text);
    showToast("Text copied!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Editor Zone */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="word-counter-textarea">Enter Text to Count</label>
          <textarea
            id="word-counter-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            placeholder="Type or paste your text content here..."
            style={{ height: "180px", fontFamily: "inherit" }}
          />
        </div>

        {/* Action controllers */}
        <div className="flex gap-2 justify-end" style={{ marginTop: "-0.5rem" }}>
          <button className="btn btn-secondary btn-sm" onClick={() => setText("")}>
            Clear Text
          </button>
          <button className="btn btn-primary btn-sm" onClick={handleCopy}>
            📋 Copy Text
          </button>
        </div>

        {/* Counters grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem" }}>
          <div className="card text-center" style={{ padding: "0.75rem", borderStyle: "solid" }}>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Word Count</div>
            <strong style={{ fontSize: "1.2rem" }}>{stats.totalWords}</strong>
          </div>
          <div className="card text-center" style={{ padding: "0.75rem", borderStyle: "solid" }}>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Characters (Spaces)</div>
            <strong style={{ fontSize: "1.2rem" }}>{stats.totalChars}</strong>
          </div>
          <div className="card text-center" style={{ padding: "0.75rem", borderStyle: "solid" }}>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Characters (No Space)</div>
            <strong style={{ fontSize: "1.2rem" }}>{stats.charsNoSpace}</strong>
          </div>
          <div className="card text-center" style={{ padding: "0.75rem", borderStyle: "solid" }}>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Sentences</div>
            <strong style={{ fontSize: "1.2rem" }}>{stats.sentences}</strong>
          </div>
          <div className="card text-center" style={{ padding: "0.75rem", borderStyle: "solid" }}>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Paragraphs</div>
            <strong style={{ fontSize: "1.2rem" }}>{stats.paragraphs}</strong>
          </div>
        </div>

        {/* Density breakdown vs Reading speeds */}
        <div className="grid-cols-2" style={{ gap: "2rem" }}>
          
          {/* Density list */}
          <div className="card" style={{ borderStyle: "solid" }}>
            <span className="form-label" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
              Keyword Density Analysis
            </span>
            <div className="flex flex-col gap-2" style={{ marginTop: "0.75rem" }}>
              {stats.density.length > 0 ? (
                stats.density.map((item) => (
                  <div key={item.word} className="flex justify-between items-center" style={{ fontSize: "0.85rem", borderBottom: "1px solid var(--bg-tertiary)", paddingBottom: "0.25rem" }}>
                    <span style={{ fontWeight: "600" }}>{item.word}</span>
                    <span className="text-muted">
                      {item.count} occurrences ({item.percentage}%)
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
                  Enter more text to display density analytics.
                </p>
              )}
            </div>
          </div>

          {/* Speed stats card */}
          <div className="card flex flex-col gap-3" style={{ borderStyle: "solid", backgroundColor: "var(--bg-secondary)", justifyContent: "center" }}>
            <div>
              <span className="text-muted" style={{ fontSize: "0.85rem", fontWeight: "600" }}>Estimated Reading Time</span>
              <strong style={{ display: "block", fontSize: "1.35rem", color: "var(--accent)" }}>
                ~ {stats.readingSpeed} min
              </strong>
            </div>
            
            <p className="text-muted" style={{ fontSize: "0.85rem", margin: 0 }}>
              Average reading speed computed at standard rate of 200 words per minute (WPM). Useful parameter checking for blog lengths.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";
import { useHistory } from "@/context/HistoryContext";
import { calculateTextStats } from "@/lib/text";

interface LimitStatus {
  name: string;
  limit: number;
  current: number;
}

export default function CharacterCounter() {
  const { showToast } = useToast();
  const { addHistoryEntry } = useHistory();
  const [text, setText] = useState<string>("");

  const stats = calculateTextStats(text);

  const limits: LimitStatus[] = [
    { name: "Twitter Tweet", limit: 280, current: stats.charsWithSpaces },
    { name: "Instagram Bio", limit: 150, current: stats.charsWithSpaces },
    { name: "TikTok Bio", limit: 80, current: stats.charsWithSpaces },
    { name: "Instagram Caption", limit: 2200, current: stats.charsWithSpaces },
    { name: "LinkedIn Post", limit: 3000, current: stats.charsWithSpaces }
  ];

  const handleCopy = () => {
    if (!text.trim()) {
      showToast("Write some text to copy first!", "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    showToast("Text copied to clipboard!", "success");
    addHistoryEntry(
      "character-counter",
      "Character Counter",
      text,
      `${stats.charsWithSpaces} chars, ${stats.wordCount} words`
    );
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Large Text editor area */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="char-textarea">Type or Paste Your Text</label>
          <textarea
            id="char-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            placeholder="Start writing or paste text here to analyze statistics..."
            style={{ height: "180px", fontFamily: "inherit" }}
          />
        </div>

        {/* Action controls */}
        <div className="flex gap-2 justify-end" style={{ marginTop: "-0.5rem" }}>
          <button className="btn btn-secondary btn-sm" onClick={() => setText("")}>
            Clear Text
          </button>
          <button className="btn btn-primary btn-sm" onClick={handleCopy}>
            📋 Copy Text
          </button>
        </div>

        {/* Grid statistics indexes */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
          <div className="card text-center" style={{ padding: "0.75rem", borderStyle: "solid" }}>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Characters (Spaces)</div>
            <strong style={{ fontSize: "1.2rem" }}>{stats.charsWithSpaces}</strong>
          </div>
          <div className="card text-center" style={{ padding: "0.75rem", borderStyle: "solid" }}>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Characters (No Space)</div>
            <strong style={{ fontSize: "1.2rem" }}>{stats.charsNoSpaces}</strong>
          </div>
          <div className="card text-center" style={{ padding: "0.75rem", borderStyle: "solid" }}>
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>Word Count</div>
            <strong style={{ fontSize: "1.2rem" }}>{stats.wordCount}</strong>
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

        {/* Read / Speech calculations */}
        <div className="grid-cols-2" style={{ gap: "1rem" }}>
          <div className="card" style={{ padding: "1rem", borderStyle: "solid", backgroundColor: "var(--bg-secondary)" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-muted)" }}>Average Silent Reading Time</span>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "var(--text-primary)" }}>
              ~{stats.readingTime} min {stats.wordCount > 0 ? `(${stats.wordCount} words)` : ""}
            </div>
          </div>
          
          <div className="card" style={{ padding: "1rem", borderStyle: "solid", backgroundColor: "var(--bg-secondary)" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-muted)" }}>Average Speech Duration</span>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "var(--text-primary)" }}>
              ~{stats.speakingTime} min {stats.wordCount > 0 ? `(at ~130 WPM speed)` : ""}
            </div>
          </div>
        </div>

        {/* Platform limit indicators list */}
        <div className="flex flex-col gap-3">
          <span className="form-label" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", margin: 0 }}>
            Social Network Character Caps
          </span>

          <div className="flex flex-col gap-2">
            {limits.map((item, idx) => {
              const percentage = Math.min(100, Math.round((item.current / item.limit) * 100));
              const isOver = item.current > item.limit;
              
              return (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex justify-between" style={{ fontSize: "0.85rem" }}>
                    <span style={{ fontWeight: "600" }}>{item.name}</span>
                    <span style={{ color: isOver ? "var(--error)" : "inherit" }}>
                      {item.current} / {item.limit} {isOver && "(Limit Exceeded!)"}
                    </span>
                  </div>
                  
                  {/* Progress bar container */}
                  <div
                    style={{
                      height: "8px",
                      width: "100%",
                      backgroundColor: "var(--bg-tertiary)",
                      borderRadius: "4px",
                      overflow: "hidden"
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${percentage}%`,
                        backgroundColor: isOver ? "var(--error)" : "var(--accent)",
                        borderRadius: "4px",
                        transition: "width var(--transition-normal), background-color var(--transition-fast)"
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function TextCaseConverter() {
  const { showToast } = useToast();
  const [text, setText] = useState<string>("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");

  const toUpper = () => {
    setText(text.toUpperCase());
    showToast("Converted to UPPERCASE", "success");
  };

  const toLower = () => {
    setText(text.toLowerCase());
    showToast("Converted to lowercase", "success");
  };

  const toTitleCase = () => {
    const res = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(" ");
    setText(res);
    showToast("Converted to Title Case", "success");
  };

  const toSentenceCase = () => {
    // Lowercase first, then capitalize first letter of sentences
    const res = text
      .toLowerCase()
      .replace(/(^\s*|[.!?]\s+)([a-z])/g, (m, g1, g2) => g1 + g2.toUpperCase());
    setText(res);
    showToast("Converted to Sentence case", "success");
  };

  const toCamelCase = () => {
    const res = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
        index === 0 ? word.toLowerCase() : word.toUpperCase()
      )
      .replace(/\s+/g, "");
    setText(res);
    showToast("Converted to camelCase", "success");
  };

  const toPascalCase = () => {
    const res = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => word.toUpperCase())
      .replace(/\s+/g, "");
    setText(res);
    showToast("Converted to PascalCase", "success");
  };

  const toSlug = () => {
    const res = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    setText(res);
    showToast("Converted to URL slug", "success");
  };

  const handleCopy = () => {
    if (!text.trim()) {
      showToast("Nothing to copy.", "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    showToast("Text copied to clipboard!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Editor Area */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="case-conv-textarea">Type or Paste Text to Convert</label>
          <textarea
            id="case-conv-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            placeholder="Type content..."
            style={{ height: "150px", fontFamily: "inherit" }}
          />
        </div>

        {/* Formats triggers panel */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.25rem" }}>
          <span className="form-label" style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>Convert Case Formats</span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
              gap: "0.5rem"
            }}
          >
            <button className="btn btn-secondary btn-sm" onClick={toUpper}>
              UPPER CASE
            </button>
            <button className="btn btn-secondary btn-sm" onClick={toLower}>
              lower case
            </button>
            <button className="btn btn-secondary btn-sm" onClick={toTitleCase}>
              Title Case
            </button>
            <button className="btn btn-secondary btn-sm" onClick={toSentenceCase}>
              Sentence case
            </button>
            <button className="btn btn-secondary btn-sm" onClick={toCamelCase}>
              camelCase
            </button>
            <button className="btn btn-secondary btn-sm" onClick={toPascalCase}>
              PascalCase
            </button>
            <button className="btn btn-secondary btn-sm" onClick={toSlug}>
              URL slugify-text
            </button>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex gap-2 justify-end" style={{ marginTop: "-0.5rem" }}>
          <button className="btn btn-secondary btn-sm" onClick={() => setText("")}>
            Clear
          </button>
          <button className="btn btn-primary btn-sm" onClick={handleCopy}>
            📋 Copy Converted Text
          </button>
        </div>

      </div>
    </div>
  );
}

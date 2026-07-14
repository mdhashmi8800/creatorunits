"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function LinkedinPostFormatter() {
  const { showToast } = useToast();
  const [text, setText] = useState<string>("Writing my new post about Creators Units tools!");
  const [styledText, setStyledText] = useState<string>("");

  const transformText = (style: "bold" | "italic" | "serifBold") => {
    // Math alphanumeric Unicode maps
    const boldMap: Record<string, string> = {
      A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠",
      N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
      a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺",
      n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
      "0": "𝟬", "1": "𝟭", "2": "𝟮", "3": "𝟯", "4": "𝟰", "5": "𝟱", "6": "𝟲", "7": "𝟳", "8": "𝟴", "9": "𝟵"
    };

    const italicMap: Record<string, string> = {
      A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝘑", K: "𝘒", L: "𝘓", M: "𝘔",
      N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡",
      a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮",
      n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻"
    };

    const map = style === "bold" ? boldMap : italicMap;
    const transformed = text
      .split("")
      .map((char) => map[char] || char)
      .join("");

    setText(transformed);
    showToast(`Transformed text to ${style}!`, "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    showToast("LinkedIn post copied to clipboard!", "success");
  };

  const handleAddBullets = (bullet: string) => {
    const lines = text.split("\n");
    const bulleted = lines.map((l) => l.trim() ? `${bullet} ${l}` : l).join("\n");
    setText(bulleted);
  };

  const handleOptimizeSpacing = () => {
    // Replace multiple empty lines with a single empty line for clean LinkedIn formatting
    const cleaned = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line, idx, arr) => line !== "" || (idx > 0 && arr[idx - 1] !== ""))
      .join("\n\n");
    setText(cleaned.trim());
    showToast("Spacing optimized for LinkedIn reading!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* Action Panel */}
        <div className="flex" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
          <button className="btn btn-secondary btn-sm" onClick={() => transformText("bold")}>
            <strong>𝗕𝗼𝗹𝗱 Text</strong>
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => transformText("italic")}>
            <em>𝘐𝘵𝘢𝘭𝘪𝘤 Text</em>
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => handleAddBullets("✓")}>
            ✓ Add Checks
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => handleAddBullets("🚀")}>
            🚀 Add Rockets
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleOptimizeSpacing}>
            ⚡ Optimize Spacing
          </button>
        </div>

        {/* Text Input Workspace */}
        <div className="form-group">
          <label className="form-label" htmlFor="li-text">Compose LinkedIn Post</label>
          <textarea
            id="li-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            rows={8}
            style={{ fontSize: "1rem", lineHeight: "1.5" }}
          />
        </div>

        {/* Stats and count metrics */}
        <div className="flex justify-between items-center" style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          <span>
            Words: <strong>{text.trim() ? text.trim().split(/\s+/).length : 0}</strong>
          </span>
          <span style={{ color: text.length > 3000 ? "var(--error-color)" : "inherit" }}>
            Characters: <strong>{text.length}</strong> / 3,000 max limit
          </span>
        </div>

        <button className="btn btn-primary" onClick={handleCopy}>
          📋 Copy formatted LinkedIn Post
        </button>

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";
import { useHistory } from "@/context/HistoryContext";

export default function UsernameGenerator() {
  const { showToast } = useToast();
  const { addHistoryEntry } = useHistory();
  const [keyword, setKeyword] = useState<string>("alex");
  const [niche, setNiche] = useState<string>("gaming");
  const [useSeparator, setUseSeparator] = useState<boolean>(true);
  const [addNumbers, setAddNumbers] = useState<boolean>(false);
  const [namesList, setNamesList] = useState<string[]>([]);

  const generateNames = () => {
    const seed = keyword.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    if (!seed) {
      showToast("Please enter a basic keyword.", "warning");
      return;
    }

    const sep = useSeparator ? "_" : "";
    const results: string[] = [];

    const gamingPrefixes = ["shadow", "cyber", "apex", "pixel", "alpha", "ghost", "void", "hyper", "retro"];
    const gamingSuffixes = ["gg", "playz", "gaming", "rpg", "bot", "pro", "quest", "mod"];

    const techPrefixes = ["dev", "code", "cyber", "bit", "data", "net", "cloud", "tech", "web", "sys"];
    const techSuffixes = ["codes", "dev", "tech", "labs", "hq", "hub", "io", "stack"];

    const creativePrefixes = ["art", "studio", "design", "the", "im", "daily", "just", "my", "hello"];
    const creativeSuffixes = ["creates", "visuals", "media", "studio", "works", "captures", "design"];

    const businessPrefixes = ["ceo", "consult", "agency", "team", "the", "official"];
    const businessSuffixes = ["co", "inc", "corp", "group", "consulting", "partners", "associates"];

    const getPrefixList = () => {
      if (niche === "gaming") return gamingPrefixes;
      if (niche === "tech") return techPrefixes;
      if (niche === "creative") return creativePrefixes;
      return businessPrefixes;
    };

    const getSuffixList = () => {
      if (niche === "gaming") return gamingSuffixes;
      if (niche === "tech") return techSuffixes;
      if (niche === "creative") return creativeSuffixes;
      return businessSuffixes;
    };

    const prefixes = getPrefixList();
    const suffixes = getSuffixList();

    const numTail = () => (addNumbers ? `${sep}${Math.floor(10 + Math.random() * 90)}` : "");

    // Generates combinations
    prefixes.forEach((pref) => {
      results.push(`${pref}${sep}${seed}`);
    });

    suffixes.forEach((suf) => {
      results.push(`${seed}${sep}${suf}`);
    });

    // 3. Prefix + Seed + Suffix (a few combinations)
    for (let i = 0; i < 4; i++) {
      results.push(`${prefixes[i]}${sep}${seed}${sep}${suffixes[i]}`);
    }

    // 4. Modifiers
    results.push(`the${sep}${seed}`);
    results.push(`its${sep}${seed}`);
    results.push(`real${sep}${seed}`);
    results.push(`official${sep}${seed}`);

    // Map to include numbers if checked
    let finalResults = results;
    if (addNumbers) {
      finalResults = results.map((name) => {
        const randNum = Math.floor(Math.random() * 90) + 10; // 10-99
        return `${name}${sep}${randNum}`;
      });
    }

    // Unique items list
    const uniqueList = Array.from(new Set(finalResults)).slice(0, 24);
    setNamesList(uniqueList);
    showToast(`Generated ${uniqueList.length} username ideas!`, "success");
  };

  const copyName = (name: string) => {
    navigator.clipboard.writeText(name);
    showToast(`Copied: "${name}"`, "success");
    addHistoryEntry("username-generator", "Username Generator", name, `Username (${niche})`);
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Settings grid */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.5rem" }}>
          <div className="grid-cols-2" style={{ gap: "1.5rem" }}>
            
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="user-seed-input">Primary Keyword / Name</label>
              <input
                id="user-seed-input"
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="form-control"
                placeholder="e.g. alex, peak, craft"
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="user-niche-select">Profile Theme / Niche</label>
              <select
                id="user-niche-select"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="form-control form-select"
              >
                <option value="gaming">Gaming & Gaming Streams</option>
                <option value="tech">Technology, Programming, Web</option>
                <option value="creative">Creative Portfolio, Vlogs, Design</option>
                <option value="business">Business, Consulting, Corporate</option>
              </select>
            </div>

          </div>

          {/* Checks checkboxes */}
          <div className="flex gap-4" style={{ marginTop: "1rem", flexWrap: "wrap" }}>
            <div className="flex items-center gap-2">
              <input
                id="username-sep-chk"
                type="checkbox"
                checked={useSeparator}
                onChange={(e) => setUseSeparator(e.target.checked)}
                style={{ cursor: "pointer", accentColor: "var(--accent)" }}
              />
              <label htmlFor="username-sep-chk" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
                Use separating underscores (e.g. alex_dev)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="username-num-chk"
                type="checkbox"
                checked={addNumbers}
                onChange={(e) => setAddNumbers(e.target.checked)}
                style={{ cursor: "pointer", accentColor: "var(--accent)" }}
              />
              <label htmlFor="username-num-chk" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
                Append random numbers (e.g. alex_dev_99)
              </label>
            </div>
          </div>

          <button className="btn btn-primary w-full" style={{ marginTop: "1.25rem" }} onClick={generateNames}>
            ⚡ Generate Handles
          </button>
        </div>

        {/* Generated output list */}
        {namesList.length > 0 && (
          <div className="flex flex-col gap-4">
            <span className="form-label" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", margin: 0 }}>
              Generated Ideas (Click card to copy)
            </span>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
                gap: "0.75rem"
              }}
            >
              {namesList.map((name, idx) => (
                <div
                  key={idx}
                  onClick={() => copyName(name)}
                  className="card text-center card-hover"
                  style={{
                    padding: "0.75rem",
                    cursor: "pointer",
                    fontFamily: "var(--font-geist-mono)",
                    fontWeight: "600",
                    borderStyle: "solid",
                    fontSize: "0.95rem"
                  }}
                  title="Click to copy handle"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function RandomNumberGenerator() {
  const { showToast } = useToast();
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [qty, setQty] = useState<number>(5);
  const [allowDupes, setAllowDupes] = useState<boolean>(false);
  const [sorting, setSorting] = useState<"none" | "asc" | "desc">("none");
  const [results, setResults] = useState<number[]>([]);
  const [rollingNumber, setRollingNumber] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);

  const handleGenerate = async () => {
    if (min >= max) {
      showToast("Min value must be less than Max value.", "error");
      return;
    }

    const range = max - min + 1;
    if (!allowDupes && qty > range) {
      showToast(`Cannot generate ${qty} unique numbers. Range is only ${range}.`, "error");
      return;
    }

    // 1. Single animated roll scenario
    if (qty === 1) {
      setIsRolling(true);
      setResults([]);
      
      // Roll/Animate numbers list
      const interval = setInterval(() => {
        setRollingNumber(Math.floor(Math.random() * (max - min + 1)) + min);
      }, 50);

      await new Promise((resolve) => setTimeout(resolve, 800));
      clearInterval(interval);

      const finalNum = Math.floor(Math.random() * (max - min + 1)) + min;
      setRollingNumber(finalNum);
      setResults([finalNum]);
      setIsRolling(false);
      showToast("Number generated!", "success");
      return;
    }

    // 2. Batch generations scenario
    const arr: number[] = [];
    const set = new Set<number>();

    while (arr.length < qty) {
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (allowDupes) {
        arr.push(num);
      } else {
        if (!set.has(num)) {
          set.add(num);
          arr.push(num);
        }
      }
    }

    // Apply sorting rules
    if (sorting === "asc") {
      arr.sort((a, b) => a - b);
    } else if (sorting === "desc") {
      arr.sort((a, b) => b - a);
    }

    setResults(arr);
    showToast(`Generated ${qty} numbers!`, "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(results.join(", "));
    showToast("Numbers copied to clipboard!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* Configurations */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
          <div className="grid-cols-3" style={{ gap: "1rem" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="num-min">Min Value</label>
              <input
                id="num-min"
                type="number"
                value={min}
                onChange={(e) => setMin(Number(e.target.value))}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="num-max">Max Value</label>
              <input
                id="num-max"
                type="number"
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="num-qty">Quantity</label>
              <input
                id="num-qty"
                type="number"
                min="1"
                max="500"
                value={qty}
                onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
                className="form-control"
              />
            </div>
          </div>

          <div className="flex" style={{ gap: "2rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={allowDupes}
                onChange={(e) => setAllowDupes(e.target.checked)}
              />
              Allow Duplicate Numbers
            </label>

            <div className="form-group" style={{ marginBottom: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <label className="form-label" htmlFor="num-sort" style={{ margin: 0, fontSize: "0.9rem" }}>Sort Output:</label>
              <select
                id="num-sort"
                value={sorting}
                onChange={(e) => setSorting(e.target.value as any)}
                className="form-control form-select"
                style={{ width: "130px", padding: "0.25rem 0.5rem" }}
              >
                <option value="none">None</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          <button className="btn btn-primary w-full" style={{ marginTop: "1.25rem" }} onClick={handleGenerate} disabled={isRolling}>
            {isRolling ? "⚡ Rolling..." : "🎲 Generate Numbers"}
          </button>
        </div>

        {/* Rolling Display panel */}
        {qty === 1 && isRolling && rollingNumber !== null && (
          <div className="text-center" style={{ padding: "1.5rem" }}>
            <div style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "var(--accent)",
              animation: "pulse 0.2s infinite"
            }}>
              {rollingNumber}
            </div>
          </div>
        )}

        {/* Results panels */}
        {results.length > 0 && !isRolling && (
          <div className="card flex flex-col gap-4 text-center" style={{ borderStyle: "solid", padding: "1.5rem" }}>
            {qty === 1 ? (
              <div>
                <span className="text-muted" style={{ fontSize: "0.85rem" }}>Rolled Number:</span>
                <div style={{ fontSize: "3.5rem", fontWeight: "bold", color: "var(--text-primary)" }}>{results[0]}</div>
              </div>
            ) : (
              <div>
                <h4 style={{ fontSize: "1rem", marginTop: 0, marginBottom: "1rem" }}>Generated Numbers List:</h4>
                <div className="flex justify-center" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
                  {results.map((num, idx) => (
                    <span
                      key={idx}
                      className="badge badge-accent"
                      style={{ fontSize: "1.1rem", padding: "0.4rem 0.8rem", borderRadius: "4px" }}
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "center", marginTop: "0.5rem" }}>
              <button className="btn btn-secondary btn-sm" onClick={handleCopy}>
                📋 Copy Numbers
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

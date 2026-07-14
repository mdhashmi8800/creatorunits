"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";

export default function BarcodeGenerator() {
  const { showToast } = useToast();
  const [text, setText] = useState<string>("CREATOR123");
  const [showTextLabel, setShowTextLabel] = useState<boolean>(true);
  const [barHeight, setBarHeight] = useState<number>(80);
  const [scale, setScale] = useState<number>(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // CODE39 Character Map: w = wide (2.5x narrow), n = narrow
  const code39Map: Record<string, string> = {
    "0": "n n n w w n w n n",
    "1": "w n n w n n n n w",
    "2": "n n w w n n n n w",
    "3": "w n w w n n n n n",
    "4": "n n n w w n n n w",
    "5": "w n n w w n n n n",
    "6": "n n w w w n n n n",
    "7": "n n n w n n w n w",
    "8": "w n n w n n w n n",
    "9": "n n w w n n w n n",
    "A": "w n n n n w n n w",
    "B": "n n w n n w n n w",
    "C": "w n w n n w n n n",
    "D": "n n n n w w n n w",
    "E": "w n n n w w n n n",
    "F": "n n w n w w n n n",
    "G": "n n n n n w w n w",
    "H": "w n n n n w w n n",
    "I": "n n w n n w w n n",
    "J": "n n n n w w w n n",
    "K": "w n n n n n n w w",
    "L": "n n w n n n n w w",
    "M": "w n w n n n n w n",
    "N": "n n n n w n n w w",
    "O": "w n n n w n n w n",
    "P": "n n w n w n n w n",
    "Q": "n n n n n n w w w",
    "R": "w n n n n n w w n",
    "S": "n n w n n n w w n",
    "T": "n n n n w n w w n",
    "U": "w w n n n n n n w",
    "V": "n w w n n n n n w",
    "W": "w w w n n n n n n",
    "X": "n w n n w n n n w",
    "Y": "w w n n w n n n n",
    "Z": "n w w n w n n n n",
    "-": "n w n n n n w n w",
    ".": "w w n n n n w n n",
    " ": "n w w n n n w w n",
    "*": "n w n n w n w n n", // start & stop delimiter
    "$": "n w n w n w n n n",
    "/": "n w n w n n n w n",
    "+": "n w n n n w n w n",
    "%": "n n n w n w n w n"
  };

  const drawBarcode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Sanitize input to only allowed CODE39 chars, convert to uppercase
    const inputVal = text.toUpperCase().replace(/[^0-9A-Z\-\.\s\$\/\+\%]/g, "");
    if (!inputVal) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    // CODE39 always wraps input in * start/stop keys
    const fullText = `*${inputVal}*`;

    // Calculate dimensions
    const narrowWidth = scale;
    const wideWidth = Math.floor(scale * 2.5);
    const interCharacterGap = scale;

    let totalWidth = 0;

    for (let char of fullText) {
      const pattern = code39Map[char];
      if (!pattern) continue;
      
      const parts = pattern.split(" ");
      parts.forEach((p, idx) => {
        const isWide = p === "w";
        const w = isWide ? wideWidth : narrowWidth;
        totalWidth += w;
      });
      totalWidth += interCharacterGap;
    }

    // Setup canvas dimension
    const padding = 20;
    canvas.width = totalWidth + padding * 2;
    canvas.height = barHeight + padding * 2 + (showTextLabel ? 25 : 0);

    // Clear background to solid white (essential for barcode scanner readability)
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw barcode bars
    ctx.fillStyle = "#000000";
    let currentX = padding;

    for (let char of fullText) {
      const pattern = code39Map[char];
      if (!pattern) continue;

      const parts = pattern.split(" ");
      parts.forEach((p, idx) => {
        const isWide = p === "w";
        const w = isWide ? wideWidth : narrowWidth;
        const isBar = idx % 2 === 0; // Alternating bars (black) and spaces (white)

        if (isBar) {
          ctx.fillRect(currentX, padding, w, barHeight);
        }
        currentX += w;
      });
      // Gap between characters
      currentX += interCharacterGap;
    }

    // Draw text label at the bottom
    if (showTextLabel) {
      ctx.fillStyle = "#171717";
      ctx.font = `${Math.floor(scale * 6)}px sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(inputVal, canvas.width / 2, padding + barHeight + 20);
    }
  };

  useEffect(() => {
    drawBarcode();
  }, [text, showTextLabel, barHeight, scale]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `barcode-${text.toLowerCase().replace(/[^a-z0-9]/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloaded barcode PNG!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Controls block */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
          <div className="flex flex-col gap-4">
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="barcode-text">Enter Barcode Value (Alphanumeric only)</label>
              <input
                id="barcode-text"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value.toUpperCase().replace(/[^0-9A-Z\-\.\s\$\/\+\%]/g, ""))}
                placeholder="e.g. ITEM10293"
                className="form-control"
              />
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", display: "block" }}>
                Supports numbers, uppercase letters, spaces, and signs: - . $ / + %
              </span>
            </div>

            <div className="grid-cols-3" style={{ gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="bar-height-slider">Bar Height: {barHeight}px</label>
                <input
                  id="bar-height-slider"
                  type="range"
                  min="40"
                  max="150"
                  value={barHeight}
                  onChange={(e) => setBarHeight(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="scale-slider">Bar Width Scale: {scale}x</label>
                <input
                  id="scale-slider"
                  type="range"
                  min="1"
                  max="4"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0, display: "flex", alignItems: "center", height: "100%" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer", marginTop: "1rem" }}>
                  <input
                    type="checkbox"
                    checked={showTextLabel}
                    onChange={(e) => setShowTextLabel(e.target.checked)}
                  />
                  Show Value Label
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Workspace */}
        {text ? (
          <div className="flex flex-col gap-4 items-center">
            <h4 style={{ fontSize: "1rem", margin: 0 }}>Generated Barcode Preview:</h4>
            <div style={{
              padding: "1rem",
              border: "1px solid var(--border-color)",
              backgroundColor: "#ffffff",
              borderRadius: "4px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              maxWidth: "100%",
              overflowX: "auto"
            }}>
              <canvas ref={canvasRef} style={{ display: "block", margin: "0 auto" }} />
            </div>

            <button className="btn btn-primary" onClick={handleDownload} style={{ marginTop: "0.5rem" }}>
              💾 Download Barcode PNG
            </button>
          </div>
        ) : (
          <div className="text-center text-muted" style={{ padding: "2rem" }}>
            Please enter a value to generate a barcode preview.
          </div>
        )}

      </div>
    </div>
  );
}

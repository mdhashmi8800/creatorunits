"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";

// Code 128 Patterns (widths of alternating bars & spaces for symbols 0..106)
const CODE128_PATTERNS = [
  "212222","222122","222221","121223","121322","131222","122213","122312","132212","221213",
  "221312","231212","112232","122132","122231","113222","123122","123221","223211","221132",
  "221231","213212","223112","312131","311222","321122","321221","312212","322112","322211",
  "212123","212321","232121","111323","131123","131321","112313","132113","132311","211313",
  "231113","231311","112133","112331","132131","113123","113321","133121","313121","211331",
  "231131","213113","213311","213131","311123","311321","331121","312113","312311","332111",
  "314111","221411","431111","111224","111422","121124","121421","141122","141221","112214",
  "112412","122114","122411","142112","142211","241211","221114","413111","241112","134111",
  "111242","121142","121241","114212","124112","124211","411212","421112","421211","212141",
  "214121","412121","111143","111341","131141","114113","114311","411113","411311","113141",
  "114131","311141","411131","211412","211214","211232","2331112"
];

// CODE39 Character Map: w = wide (2.5x narrow), n = narrow
const CODE39_MAP: Record<string, string> = {
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
  "*": "n w n n w n w n n",
  "$": "n w n w n w n n n",
  "/": "n w n w n n n w n",
  "+": "n w n n n w n w n",
  "%": "n n n w n w n w n"
};

export default function BarcodeGenerator() {
  const { showToast } = useToast();
  const [format, setFormat] = useState<"code128" | "code39">("code128");
  const [text, setText] = useState<string>("CREATOR123");
  const [showTextLabel, setShowTextLabel] = useState<boolean>(true);
  const [barHeight, setBarHeight] = useState<number>(80);
  const [scale, setScale] = useState<number>(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawCode128 = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, inputVal: string) => {
    // Code 128 Subset B: supports ASCII 32 to 126
    const validChars = inputVal.split("").filter((c) => {
      const code = c.charCodeAt(0);
      return code >= 32 && code <= 126;
    });

    if (validChars.length === 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const cleanStr = validChars.join("");
    const values: number[] = [104]; // Start B
    let checksumSum = 104;

    for (let i = 0; i < cleanStr.length; i++) {
      const val = cleanStr.charCodeAt(i) - 32;
      values.push(val);
      checksumSum += val * (i + 1);
    }

    const checksumVal = checksumSum % 103;
    values.push(checksumVal);
    values.push(106); // Stop

    const patternSequence = values.map((v) => CODE128_PATTERNS[v]).join("");

    let totalModules = 0;
    for (let c of patternSequence) {
      totalModules += Number(c);
    }

    const moduleWidth = scale;
    const padding = 24;
    const totalWidth = totalModules * moduleWidth;

    canvas.width = totalWidth + padding * 2;
    canvas.height = barHeight + padding * 2 + (showTextLabel ? 25 : 0);

    // Clean white background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000";
    let currentX = padding;

    for (let i = 0; i < patternSequence.length; i++) {
      const width = Number(patternSequence[i]) * moduleWidth;
      const isBar = i % 2 === 0;
      if (isBar) {
        ctx.fillRect(currentX, padding, width, barHeight);
      }
      currentX += width;
    }

    // Draw text label
    if (showTextLabel) {
      ctx.fillStyle = "#171717";
      ctx.font = `${Math.max(12, Math.floor(scale * 6))}px monospace`;
      ctx.textAlign = "center";
      ctx.fillText(cleanStr, canvas.width / 2, padding + barHeight + 20);
    }
  };

  const drawCode39 = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, inputVal: string) => {
    const sanitized = inputVal.toUpperCase().replace(/[^0-9A-Z\-\.\s\$\/\+\%]/g, "");
    if (!sanitized) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const fullText = `*${sanitized}*`;
    const narrowWidth = scale;
    const wideWidth = Math.floor(scale * 2.5);
    const interCharacterGap = scale;

    let totalWidth = 0;
    for (let char of fullText) {
      const pattern = CODE39_MAP[char];
      if (!pattern) continue;
      const parts = pattern.split(" ");
      parts.forEach((p) => {
        const isWide = p === "w";
        totalWidth += isWide ? wideWidth : narrowWidth;
      });
      totalWidth += interCharacterGap;
    }

    const padding = 24;
    canvas.width = totalWidth + padding * 2;
    canvas.height = barHeight + padding * 2 + (showTextLabel ? 25 : 0);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000";
    let currentX = padding;

    for (let char of fullText) {
      const pattern = CODE39_MAP[char];
      if (!pattern) continue;

      const parts = pattern.split(" ");
      parts.forEach((p, idx) => {
        const isWide = p === "w";
        const w = isWide ? wideWidth : narrowWidth;
        const isBar = idx % 2 === 0;

        if (isBar) {
          ctx.fillRect(currentX, padding, w, barHeight);
        }
        currentX += w;
      });
      currentX += interCharacterGap;
    }

    if (showTextLabel) {
      ctx.fillStyle = "#171717";
      ctx.font = `${Math.max(12, Math.floor(scale * 6))}px monospace`;
      ctx.textAlign = "center";
      ctx.fillText(sanitized, canvas.width / 2, padding + barHeight + 20);
    }
  };

  const drawBarcode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!text.trim()) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    if (format === "code128") {
      drawCode128(ctx, canvas, text);
    } else {
      drawCode39(ctx, canvas, text);
    }
  };

  useEffect(() => {
    drawBarcode();
  }, [text, format, showTextLabel, barHeight, scale]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `barcode-${format}-${text.toLowerCase().replace(/[^a-z0-9]/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloaded ${format.toUpperCase()} barcode PNG!`, "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Controls block */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
          <div className="flex flex-col gap-4">
            
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="barcode-format">Barcode Format</label>
                <select
                  id="barcode-format"
                  value={format}
                  onChange={(e) => setFormat(e.target.value as "code128" | "code39")}
                  className="form-control form-select"
                >
                  <option value="code128">Code 128 (Universal Logistics &amp; Retail Packaging)</option>
                  <option value="code39">Code 39 (Alphanumeric Industrial &amp; Government)</option>
                </select>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {format === "code128" 
                    ? "Encodes all 128 ASCII characters with modulo 103 checksum." 
                    : "Encodes uppercase letters, digits, and punctuation (- . $ / + %)."}
                </span>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="barcode-text">Barcode Value / Data String</label>
                <input
                  id="barcode-text"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={format === "code128" ? "e.g. SKU-98472-A" : "e.g. ITEM10293"}
                  className="form-control"
                />
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {format === "code128" ? "Full ASCII supported" : "Uppercase letters & numbers only"}
                </span>
              </div>
            </div>

            <div className="grid-cols-3" style={{ gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="bar-height-slider">Bar Height: {barHeight}px</label>
                <input
                  id="bar-height-slider"
                  type="range"
                  min="40"
                  max="160"
                  value={barHeight}
                  onChange={(e) => setBarHeight(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="scale-slider">Print Density (Scale): {scale}x</label>
                <input
                  id="scale-slider"
                  type="range"
                  min="1"
                  max="4"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Use 3x or 4x for 300 DPI print jobs</span>
              </div>

              <div className="form-group" style={{ marginBottom: 0, display: "flex", alignItems: "center", height: "100%" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer", marginTop: "1rem" }}>
                  <input
                    type="checkbox"
                    checked={showTextLabel}
                    onChange={(e) => setShowTextLabel(e.target.checked)}
                  />
                  Show Human-Readable Label
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Workspace */}
        {text ? (
          <div className="flex flex-col gap-4 items-center">
            <h4 style={{ fontSize: "1rem", margin: 0 }}>
              Generated {format.toUpperCase()} Barcode Preview:
            </h4>
            <div style={{
              padding: "1.5rem",
              border: "1px solid var(--border-color)",
              backgroundColor: "#ffffff",
              borderRadius: "6px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
              maxWidth: "100%",
              overflowX: "auto"
            }}>
              <canvas ref={canvasRef} style={{ display: "block", margin: "0 auto" }} />
            </div>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <button className="btn btn-primary" onClick={handleDownload}>
                💾 Download Barcode PNG ({scale}x DPI)
              </button>
            </div>

            <p className="text-muted" style={{ fontSize: "0.8rem", textAlign: "center", maxWidth: "600px", margin: 0 }}>
              💡 <strong>Print Tip:</strong> For retail and warehouse scanners, maintain at least 0.5 inches (12mm) of quiet zone (white space) around the bars. Print at 300+ DPI.
            </p>
          </div>
        ) : (
          <div className="text-center text-muted" style={{ padding: "3rem" }}>
            Please enter a barcode value to generate a preview.
          </div>
        )}

      </div>
    </div>
  );
}

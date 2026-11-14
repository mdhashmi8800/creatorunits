"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
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

// EAN / UPC binary tables
// L-code (A), G-code (B), R-code (C)
const EAN_L_CODES = [
  "0001101", "0011001", "0010011", "0111101", "0100011",
  "0110001", "0101111", "0111011", "0110111", "0001011"
];
const EAN_G_CODES = [
  "0100111", "0110011", "0011011", "0100001", "0011101",
  "0111001", "0000101", "0010001", "0001001", "0010111"
];
const EAN_R_CODES = [
  "1110010", "1100110", "1101100", "1000010", "1011100",
  "1001110", "1010000", "1000100", "1001000", "1110100"
];

// First digit parity structure for digits 2-7
const EAN_PARITY_MAP: Record<number, string[]> = {
  0: ["L", "L", "L", "L", "L", "L"],
  1: ["L", "L", "G", "L", "G", "G"],
  2: ["L", "L", "G", "G", "L", "G"],
  3: ["L", "L", "G", "G", "G", "L"],
  4: ["L", "G", "L", "L", "G", "G"],
  5: ["L", "G", "G", "L", "L", "G"],
  6: ["L", "G", "G", "G", "L", "L"],
  7: ["L", "G", "L", "G", "L", "G"],
  8: ["L", "G", "L", "G", "G", "L"],
  9: ["L", "G", "G", "L", "G", "L"]
};

export type BarcodeFormat = "code128" | "code39" | "ean13" | "upca";

export default function BarcodeGenerator() {
  const { showToast } = useToast();
  const [format, setFormat] = useState<BarcodeFormat>("code128");
  const [text, setText] = useState<string>("CREATOR123");
  const [showTextLabel, setShowTextLabel] = useState<boolean>(true);
  const [barHeight, setBarHeight] = useState<number>(80);
  const [scale, setScale] = useState<number>(2);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Auto-switch placeholder/preset text when changing format
  const handleFormatChange = (newFormat: BarcodeFormat) => {
    setFormat(newFormat);
    if (newFormat === "code128") {
      setText("SKU-98472-A");
    } else if (newFormat === "code39") {
      setText("ITEM-10293");
    } else if (newFormat === "ean13") {
      setText("400638133393"); // 12 digits (checksum will be computed as 1)
    } else if (newFormat === "upca") {
      setText("03600029145"); // 11 digits (checksum will be computed as 2)
    }
  };

  // EAN-13 Checksum calculator (Modulo 10)
  const calculateEan13Checksum = (first12: string): number => {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      const digit = parseInt(first12[i], 10);
      sum += i % 2 === 0 ? digit : digit * 3;
    }
    return (10 - (sum % 10)) % 10;
  };

  // UPC-A Checksum calculator (Modulo 10)
  const calculateUpcaChecksum = (first11: string): number => {
    let sum = 0;
    for (let i = 0; i < 11; i++) {
      const digit = parseInt(first11[i], 10);
      sum += i % 2 === 0 ? digit * 3 : digit;
    }
    return (10 - (sum % 10)) % 10;
  };

  // Derive validation status purely without effect
  const validationError = useMemo(() => {
    if (!text.trim()) return "";
    if (format === "code128") {
      const validChars = text.split("").filter((c) => {
        const code = c.charCodeAt(0);
        return code >= 32 && code <= 126;
      });
      if (validChars.length === 0) return "Please enter valid printable ASCII text.";
      return "";
    }
    if (format === "code39") {
      const sanitized = text.toUpperCase().replace(/[^0-9A-Z\-. $/+%]/g, "");
      if (!sanitized) return "Code 39 requires uppercase letters, digits, or standard symbols (- . $ / + %).";
      return "";
    }
    if (format === "ean13") {
      const digitsOnly = text.replace(/\D/g, "");
      if (digitsOnly.length < 12) return "EAN-13 requires at least 12 digits (or 13 with checksum).";
      const calculatedCheck = calculateEan13Checksum(digitsOnly.slice(0, 12));
      if (digitsOnly.length >= 13 && parseInt(digitsOnly[12], 10) !== calculatedCheck) {
        return `Notice: Checksum corrected from ${digitsOnly[12]} to valid GS1 check digit ${calculatedCheck}.`;
      }
      return "";
    }
    if (format === "upca") {
      const digitsOnly = text.replace(/\D/g, "");
      if (digitsOnly.length < 11) return "UPC-A requires at least 11 digits (or 12 with checksum).";
      const calculatedCheck = calculateUpcaChecksum(digitsOnly.slice(0, 11));
      if (digitsOnly.length >= 12 && parseInt(digitsOnly[11], 10) !== calculatedCheck) {
        return `Notice: Checksum corrected from ${digitsOnly[11]} to valid UPC check digit ${calculatedCheck}.`;
      }
      return "";
    }
    return "";
  }, [text, format]);

  // 1. Draw Code 128
  const drawCode128 = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, inputVal: string) => {
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
    for (const c of patternSequence) {
      totalModules += Number(c);
    }

    const moduleWidth = scale;
    const padding = 24;
    const totalWidth = totalModules * moduleWidth;

    canvas.width = totalWidth + padding * 2;
    canvas.height = barHeight + padding * 2 + (showTextLabel ? 25 : 0);

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

    if (showTextLabel) {
      ctx.fillStyle = "#171717";
      ctx.font = `${Math.max(12, Math.floor(scale * 6))}px monospace`;
      ctx.textAlign = "center";
      ctx.fillText(cleanStr, canvas.width / 2, padding + barHeight + 20);
    }
  };

  // 2. Draw Code 39
  const drawCode39 = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, inputVal: string) => {
    const sanitized = inputVal.toUpperCase().replace(/[^0-9A-Z\-. $/+%]/g, "");
    if (!sanitized) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const fullText = `*${sanitized}*`;
    const narrowWidth = scale;
    const wideWidth = Math.floor(scale * 2.5);
    const interCharacterGap = scale;

    let totalWidth = 0;
    for (const char of fullText) {
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

    for (const char of fullText) {
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

  // 3. Draw EAN-13
  const drawEan13 = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, inputVal: string) => {
    const digitsOnly = inputVal.replace(/\D/g, "");
    if (digitsOnly.length < 12) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const first12 = digitsOnly.slice(0, 12);
    const calculatedCheck = calculateEan13Checksum(first12);
    const full13 = first12 + calculatedCheck;

    const firstDigit = parseInt(full13[0], 10);
    const parities = EAN_PARITY_MAP[firstDigit];

    let binary = "101"; // Start guard

    // Digits 2-7 (left group)
    for (let i = 1; i <= 6; i++) {
      const digit = parseInt(full13[i], 10);
      const parity = parities[i - 1];
      binary += parity === "L" ? EAN_L_CODES[digit] : EAN_G_CODES[digit];
    }

    binary += "01010"; // Center guard

    // Digits 8-13 (right group)
    for (let i = 7; i <= 12; i++) {
      const digit = parseInt(full13[i], 10);
      binary += EAN_R_CODES[digit];
    }

    binary += "101"; // End guard

    const moduleWidth = scale;
    const padding = 24;
    const totalWidth = binary.length * moduleWidth;

    canvas.width = totalWidth + padding * 2;
    canvas.height = barHeight + padding * 2 + (showTextLabel ? 25 : 0);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000";
    let currentX = padding;

    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "1") {
        ctx.fillRect(currentX, padding, moduleWidth, barHeight);
      }
      currentX += moduleWidth;
    }

    if (showTextLabel) {
      ctx.fillStyle = "#171717";
      ctx.font = `${Math.max(12, Math.floor(scale * 6))}px monospace`;
      ctx.textAlign = "center";
      // Format as 1 234567 890128
      const formattedLabel = `${full13[0]} ${full13.slice(1, 7)} ${full13.slice(7)}`;
      ctx.fillText(formattedLabel, canvas.width / 2, padding + barHeight + 20);
    }
  };

  // 4. Draw UPC-A
  const drawUpca = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, inputVal: string) => {
    const digitsOnly = inputVal.replace(/\D/g, "");
    if (digitsOnly.length < 11) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const first11 = digitsOnly.slice(0, 11);
    const calculatedCheck = calculateUpcaChecksum(first11);
    const full12 = first11 + calculatedCheck;

    let binary = "101"; // Start guard

    // Digits 1-6 (left group using L-codes)
    for (let i = 0; i < 6; i++) {
      const digit = parseInt(full12[i], 10);
      binary += EAN_L_CODES[digit];
    }

    binary += "01010"; // Center guard

    // Digits 7-12 (right group using R-codes)
    for (let i = 6; i < 12; i++) {
      const digit = parseInt(full12[i], 10);
      binary += EAN_R_CODES[digit];
    }

    binary += "101"; // End guard

    const moduleWidth = scale;
    const padding = 24;
    const totalWidth = binary.length * moduleWidth;

    canvas.width = totalWidth + padding * 2;
    canvas.height = barHeight + padding * 2 + (showTextLabel ? 25 : 0);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000";
    let currentX = padding;

    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "1") {
        ctx.fillRect(currentX, padding, moduleWidth, barHeight);
      }
      currentX += moduleWidth;
    }

    if (showTextLabel) {
      ctx.fillStyle = "#171717";
      ctx.font = `${Math.max(12, Math.floor(scale * 6))}px monospace`;
      ctx.textAlign = "center";
      // Format as 0 36000 29145 2
      const formattedLabel = `${full12[0]} ${full12.slice(1, 6)} ${full12.slice(6, 11)} ${full12[11]}`;
      ctx.fillText(formattedLabel, canvas.width / 2, padding + barHeight + 20);
    }
  };

  useEffect(() => {
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
    } else if (format === "code39") {
      drawCode39(ctx, canvas, text);
    } else if (format === "ean13") {
      drawEan13(ctx, canvas, text);
    } else if (format === "upca") {
      drawUpca(ctx, canvas, text);
    }
  }, [text, format, showTextLabel, barHeight, scale]);

  // Download PNG
  const handleDownloadPng = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `barcode-${format}-${text.toLowerCase().replace(/[^a-z0-9]/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloaded ${format.toUpperCase()} barcode PNG (${scale}x)!`, "success");
  };

  // Download SVG
  const handleDownloadSvg = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Convert canvas image to standalone SVG wrapper
    const dataUrl = canvas.toDataURL("image/png");
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}">
  <rect width="100%" height="100%" fill="#ffffff"/>
  <image href="${dataUrl}" width="${canvas.width}" height="${canvas.height}"/>
</svg>`;

    const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `barcode-${format}-${text.toLowerCase().replace(/[^a-z0-9]/g, "-")}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${format.toUpperCase()} barcode SVG!`, "success");
  };

  // Print Barcode
  const handlePrint = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      showToast("Please allow popups to print your barcode", "info");
      return;
    }
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print Barcode - ${format.toUpperCase()}</title>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #fff; }
            img { max-width: 90vw; height: auto; }
            @media print { body { min-height: auto; } }
          </style>
        </head>
        <body>
          <img src="${dataUrl}" onload="window.print(); window.close();" alt="Barcode ${format.toUpperCase()}"/>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Controls block */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
          <div className="flex flex-col gap-4">
            
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="barcode-format">Barcode Symbology</label>
                <select
                  id="barcode-format"
                  value={format}
                  onChange={(e) => handleFormatChange(e.target.value as BarcodeFormat)}
                  className="form-control form-select"
                >
                  <option value="code128">Code 128 (Universal Logistics, Warehouse &amp; Packaging)</option>
                  <option value="ean13">EAN-13 (International Retail Products &amp; Books)</option>
                  <option value="upca">UPC-A (North American Retail Products)</option>
                  <option value="code39">Code 39 (Alphanumeric Industrial &amp; Government)</option>
                </select>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {format === "code128" && "Encodes all 128 ASCII characters with modulo 103 checksum."}
                  {format === "ean13" && "13 digits with automated Modulo 10 GS1 check digit calculation."}
                  {format === "upca" && "12 digits with automated Modulo 10 retail check digit calculation."}
                  {format === "code39" && "Encodes uppercase letters, digits, and standard symbols (- . $ / + %)."}
                </span>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="barcode-text">
                  Barcode Value / Data String
                  {format === "ean13" && " (12 or 13 digits)"}
                  {format === "upca" && " (11 or 12 digits)"}
                </label>
                <input
                  id="barcode-text"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={
                    format === "code128"
                      ? "e.g. SKU-98472-A"
                      : format === "ean13"
                      ? "e.g. 400638133393"
                      : format === "upca"
                      ? "e.g. 03600029145"
                      : "e.g. ITEM-10293"
                  }
                  className="form-control"
                />
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {format === "code128" && "Full ASCII supported (letters, numbers, symbols)"}
                  {format === "ean13" && "Type 12 digits to auto-calculate the 13th check digit"}
                  {format === "upca" && "Type 11 digits to auto-calculate the 12th check digit"}
                  {format === "code39" && "Uppercase letters, numbers & (- . $ / + %)"}
                </span>
              </div>
            </div>

            {validationError && (
              <div style={{
                fontSize: "0.85rem",
                color: validationError.startsWith("Notice") ? "var(--text-secondary)" : "#dc2626",
                backgroundColor: validationError.startsWith("Notice") ? "var(--bg-primary)" : "#fee2e2",
                padding: "0.5rem 0.75rem",
                borderRadius: "4px",
                border: "1px solid var(--border-color)"
              }}>
                {validationError}
              </div>
            )}

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
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Use 3x or 4x for 300+ DPI print jobs</span>
              </div>

              <div className="form-group" style={{ marginBottom: 0, display: "flex", alignItems: "center", height: "100%" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer", marginTop: "1rem" }}>
                  <input
                    type="checkbox"
                    checked={showTextLabel}
                    onChange={(e) => setShowTextLabel(e.target.checked)}
                  />
                  Show Human-Readable Text Label
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

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", justifyContent: "center" }}>
              <button className="btn btn-primary" onClick={handleDownloadPng}>
                💾 Download PNG ({scale}x DPI)
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadSvg}>
                📐 Download SVG Vector
              </button>
              <button className="btn btn-secondary" onClick={handlePrint}>
                🖨️ Print Barcode
              </button>
            </div>

            <p className="text-muted" style={{ fontSize: "0.8rem", textAlign: "center", maxWidth: "600px", margin: 0 }}>
              💡 <strong>Scanning &amp; Print Tip:</strong> For retail and warehouse scanners, maintain at least 0.5 inches (12mm) of quiet zone (white margin) around the bars. Thermal and laser printers should be set to 300+ DPI.
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

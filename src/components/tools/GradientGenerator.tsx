"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface GradientPreset {
  name: string;
  type: "linear" | "radial";
  angle: number;
  color1: string;
  stop1: number;
  color2: string;
  stop2: number;
  color3?: string;
  stop3?: number;
}

export default function GradientGenerator() {
  const { showToast } = useToast();
  const [type, setType] = useState<"linear" | "radial">("linear");
  const [angle, setAngle] = useState<number>(135);
  const [color1, setColor1] = useState<string>("#007cf0");
  const [stop1, setStop1] = useState<number>(0);
  const [color2, setColor2] = useState<string>("#7928ca");
  const [stop2, setStop2] = useState<number>(50);
  const [useColor3, setUseColor3] = useState<boolean>(true);
  const [color3, setColor3] = useState<string>("#ff0080");
  const [stop3, setStop3] = useState<number>(100);

  const presets: GradientPreset[] = [
    { name: "Vercel Develop", type: "linear", angle: 90, color1: "#007cf0", stop1: 0, color2: "#00dfd8", stop2: 100 },
    { name: "Vercel Preview", type: "linear", angle: 90, color1: "#7928ca", stop1: 0, color2: "#ff0080", stop2: 100 },
    { name: "Vercel Ship", type: "linear", angle: 90, color1: "#ff4d4d", stop1: 0, color2: "#f9cb28", stop2: 100 },
    { name: "Sunset Orange", type: "linear", angle: 135, color1: "#ff512f", stop1: 0, color2: "#dd2476", stop2: 100 },
    { name: "Ocean Breeze", type: "linear", angle: 135, color1: "#00c6ff", stop1: 0, color2: "#0072ff", stop2: 100 },
    { name: "Neon Glow", type: "linear", angle: 45, color1: "#0575e6", stop1: 0, color2: "#00f260", stop2: 100 },
    { name: "Deep Space", type: "linear", angle: 180, color1: "#000000", stop1: 0, color2: "#434343", stop2: 100 },
    { name: "Obsidian Flame", type: "linear", angle: 135, color1: "#141517", stop1: 0, color2: "#ff3300", stop2: 100, color3: "#ffffff", stop3: 100 },
    { name: "Cotton Candy", type: "linear", angle: 135, color1: "#ff9a9e", stop1: 0, color2: "#fecfef", stop2: 100 },
    { name: "Emerald Dream", type: "radial", angle: 0, color1: "#11998e", stop1: 0, color2: "#38ef7d", stop2: 100 }
  ];

  const getGradientCss = () => {
    const stopsStr = useColor3
      ? `${color1} ${stop1}%, ${color2} ${stop2}%, ${color3} ${stop3}%`
      : `${color1} ${stop1}%, ${color2} ${stop2}%`;

    if (type === "linear") {
      return `linear-gradient(${angle}deg, ${stopsStr})`;
    } else {
      return `radial-gradient(circle, ${stopsStr})`;
    }
  };

  const handleApplyPreset = (p: GradientPreset) => {
    setType(p.type);
    setAngle(p.angle);
    setColor1(p.color1);
    setStop1(p.stop1);
    setColor2(p.color2);
    setStop2(p.stop2);
    if (p.color3 !== undefined) {
      setUseColor3(true);
      setColor3(p.color3);
      setStop3(p.stop3 || 100);
    } else {
      setUseColor3(false);
    }
    showToast(`Preset "${p.name}" applied!`, "success");
  };

  const handleCopyCode = () => {
    const css = `background: ${getGradientCss()};`;
    navigator.clipboard.writeText(css);
    showToast("Gradient CSS copied!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* CURATED PRESETS LIST */}
        <div>
          <h4 style={{ fontSize: "0.95rem", marginTop: 0, marginBottom: "0.75rem" }}>Click to Apply Curated Presets:</h4>
          <div className="flex" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            {presets.map((p, idx) => (
              <button
                key={idx}
                className="btn btn-secondary btn-sm"
                onClick={() => handleApplyPreset(p)}
                style={{
                  fontSize: "0.75rem",
                  padding: "0.3rem 0.6rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem"
                }}
              >
                <span style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: p.color3 ? `linear-gradient(90deg, ${p.color1}, ${p.color2}, ${p.color3})` : `linear-gradient(90deg, ${p.color1}, ${p.color2})`,
                  border: "1px solid rgba(255,255,255,0.2)"
                }} />
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-cols-2" style={{ gap: "2rem" }}>
          
          {/* Controls Box */}
          <div className="card flex flex-col gap-4" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
            <div className="form-group">
              <label className="form-label" htmlFor="grad-type">Gradient Style</label>
              <select
                id="grad-type"
                value={type}
                onChange={(e) => setType(e.target.value as any)}
                className="form-control form-select"
              >
                <option value="linear">Linear Gradient</option>
                <option value="radial">Radial Gradient</option>
              </select>
            </div>

            {type === "linear" && (
              <div className="form-group">
                <label className="form-label" htmlFor="grad-angle">Angle: <strong>{angle}&deg;</strong></label>
                <input
                  id="grad-angle"
                  type="range"
                  min="0"
                  max="360"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </div>
            )}

            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }} />

            {/* Color Stop 1 */}
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="c1-picker">Color Stop 1</label>
                <input
                  id="c1-picker"
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="form-control"
                  style={{ height: "38px", padding: "0.2rem" }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="c1-slider">Stop: {stop1}%</label>
                <input
                  id="c1-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={stop1}
                  onChange={(e) => setStop1(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            {/* Color Stop 2 */}
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="c2-picker">Color Stop 2</label>
                <input
                  id="c2-picker"
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="form-control"
                  style={{ height: "38px", padding: "0.2rem" }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="c2-slider">Stop: {stop2}%</label>
                <input
                  id="c2-slider"
                  type="range"
                  min="0"
                  max="100"
                  value={stop2}
                  onChange={(e) => setStop2(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            {/* Color Stop 3 */}
            <div className="flex flex-col gap-2">
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={useColor3}
                  onChange={(e) => setUseColor3(e.target.checked)}
                />
                Use third color stop point
              </label>

              {useColor3 && (
                <div className="grid-cols-2" style={{ gap: "1rem", marginTop: "0.5rem" }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <input
                      type="color"
                      value={color3}
                      onChange={(e) => setColor3(e.target.value)}
                      className="form-control"
                      style={{ height: "38px", padding: "0.2rem" }}
                      aria-label="Color stop 3 picker"
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={stop3}
                      onChange={(e) => setStop3(Number(e.target.value))}
                      style={{ width: "100%" }}
                      aria-label="Color stop 3 slider"
                    />
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Preview Panel */}
          <div className="card flex flex-col gap-4" style={{ borderStyle: "solid" }}>
            <h4 style={{ fontSize: "1rem", marginTop: 0, marginBottom: 0 }}>Gradient Live Output:</h4>
            
            {/* Visual preview box */}
            <div style={{
              height: "220px",
              borderRadius: "8px",
              background: getGradientCss(),
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.05)",
              border: "1px solid var(--border-color)"
            }} />

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="css-out">CSS Code Block</label>
              <textarea
                id="css-out"
                readOnly
                value={`background: ${getGradientCss()};`}
                className="form-control"
                style={{ fontFamily: "monospace", fontSize: "0.8rem" }}
                rows={2}
              />
            </div>

            <button className="btn btn-primary" onClick={handleCopyCode}>
              📋 Copy CSS Styling Code
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

interface GradientOption {
  name: string;
  color1: string;
  color2: string;
}

export default function ScreenshotCleaner() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  
  const [padding, setPadding] = useState<number>(40);
  const [borderRadius, setBorderRadius] = useState<number>(12);
  const [shadowDepth, setShadowDepth] = useState<string>("medium"); // none, soft, medium, heavy
  
  const [bgType, setBgType] = useState<string>("gradient"); // solid, gradient
  const [solidColor, setSolidColor] = useState<string>("#1e293b");
  const [activeGradient, setActiveGradient] = useState<number>(0);

  const [outputSrc, setOutputSrc] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const gradients: GradientOption[] = [
    { name: "Sunset Glow", color1: "#ff7e5f", color2: "#feb47b" },
    { name: "Ocean Breeze", color1: "#2b5876", color2: "#4e4376" },
    { name: "Emerald Magic", color1: "#11998e", color2: "#38ef7d" },
    { name: "Royal Purple", color1: "#833ab4", color2: "#fd1d1d" },
    { name: "Cool Indigo", color1: "#6366f1", color2: "#a855f7" },
    { name: "Slate Clean", color1: "#0f172a", color2: "#1e293b" }
  ];

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc("");
      setOutputSrc("");
    }
  }, [file]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    imgRef.current = e.currentTarget;
    drawBeautifiedScreenshot();
  };

  useEffect(() => {
    if (imageSrc && imgRef.current) {
      drawBeautifiedScreenshot();
    }
  }, [imageSrc, padding, borderRadius, shadowDepth, bgType, solidColor, activeGradient]);

  const drawBeautifiedScreenshot = () => {
    if (!imgRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsProcessing(true);
    const img = imgRef.current;

    // Calculate canvas size based on screenshot sizes and padding
    const width = img.naturalWidth + padding * 2;
    const height = img.naturalHeight + padding * 2;
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, width, height);

    // 1. Draw Background
    if (bgType === "solid") {
      ctx.fillStyle = solidColor;
      ctx.fillRect(0, 0, width, height);
    } else {
      const grad = ctx.createLinearGradient(0, 0, width, height);
      const opt = gradients[activeGradient];
      grad.addColorStop(0, opt.color1);
      grad.addColorStop(1, opt.color2);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    }

    // 2. Configure Shadow Settings
    ctx.save();
    if (shadowDepth !== "none") {
      ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
      if (shadowDepth === "soft") {
        ctx.shadowBlur = 15;
        ctx.shadowOffsetY = 6;
      } else if (shadowDepth === "medium") {
        ctx.shadowBlur = 30;
        ctx.shadowOffsetY = 15;
      } else if (shadowDepth === "heavy") {
        ctx.shadowBlur = 60;
        ctx.shadowOffsetY = 30;
      }
    }

    // 3. Draw Screenshot Card with rounded corners
    ctx.beginPath();
    ctx.roundRect(padding, padding, img.naturalWidth, img.naturalHeight, borderRadius);
    ctx.closePath();
    ctx.clip(); // Clip to make image corners rounded

    // Turn off shadow inside the clipped context so it doesn't bleed inside
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    
    ctx.drawImage(img, padding, padding);
    ctx.restore();

    // Export URL
    const url = canvas.toDataURL("image/png");
    setOutputSrc(url);
    setIsProcessing(false);
  };

  const handleDownload = () => {
    if (!outputSrc) return;
    const originalName = file?.name.substring(0, file.name.lastIndexOf(".")) || "beautified";
    
    const link = document.createElement("a");
    link.href = outputSrc;
    link.download = `${originalName}-beautified.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Beautified screenshot downloaded successfully!", "success");
  };

  return (
    <div className="card">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/*"
          maxSizeMB={15}
          label="Upload your screenshot to beautify"
          description="Wraps screenshot inside designer gradients and shadow margins."
        />
      ) : (
        <div className="flex flex-col gap-6">
          <div style={{ display: "none" }}>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Screenshot source loader"
                onLoad={handleImageLoad}
              />
            )}
          </div>

          {/* Settings dashboard */}
          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
            <div className="grid-cols-2" style={{ gap: "2rem" }}>
              
              {/* Sliders padding, corners, shadows */}
              <div className="flex flex-col gap-3">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="frame-padding">Frame Padding: {padding}px</label>
                  <input
                    id="frame-padding"
                    type="range"
                    min="15"
                    max="150"
                    value={padding}
                    onChange={(e) => setPadding(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--accent)" }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="frame-radius">Rounded Corners: {borderRadius}px</label>
                  <input
                    id="frame-radius"
                    type="range"
                    min="0"
                    max="40"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--accent)" }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="frame-shadow">Shadow Depth</label>
                  <select
                    id="frame-shadow"
                    value={shadowDepth}
                    onChange={(e) => setShadowDepth(e.target.value)}
                    className="form-control form-select"
                  >
                    <option value="none">No Shadow</option>
                    <option value="soft">Soft Depth</option>
                    <option value="medium">Medium Shadow</option>
                    <option value="heavy">Heavy Dramatic Shadow</option>
                  </select>
                </div>
              </div>

              {/* Background fills */}
              <div className="flex flex-col gap-4">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <span className="form-label">Background Fill Type</span>
                  <div className="flex" style={{ gap: "0.5rem" }}>
                    <button
                      className={`btn ${bgType === "gradient" ? "btn-primary" : "btn-secondary"} btn-sm`}
                      onClick={() => setBgType("gradient")}
                    >
                      Linear Gradients
                    </button>
                    <button
                      className={`btn ${bgType === "solid" ? "btn-primary" : "btn-secondary"} btn-sm`}
                      onClick={() => setBgType("solid")}
                    >
                      Solid Color
                    </button>
                  </div>
                </div>

                {bgType === "solid" ? (
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="solid-color">Choose Fill Color</label>
                    <input
                      id="solid-color"
                      type="color"
                      value={solidColor}
                      onChange={(e) => setSolidColor(e.target.value)}
                      className="form-control"
                      style={{ height: "2.75rem", padding: "0.25rem", cursor: "pointer" }}
                    />
                  </div>
                ) : (
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <span className="form-label">Select Color Palette</span>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "0.5rem"
                      }}
                    >
                      {gradients.map((grad, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveGradient(index)}
                          style={{
                            height: "2.25rem",
                            background: `linear-gradient(135deg, ${grad.color1}, ${grad.color2})`,
                            border: index === activeGradient ? "3px solid var(--text-primary)" : "1px solid rgba(255,255,255,0.2)",
                            borderRadius: "var(--border-radius-sm)",
                            cursor: "pointer"
                          }}
                          title={grad.name}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Visual Canvas Frame preview */}
          <div className="flex flex-col gap-2">
            <span className="form-label text-center">Beautified Output Preview</span>
            <div
              style={{
                border: "1px solid var(--border-color)",
                borderRadius: "var(--border-radius-md)",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "380px",
                backgroundColor: "#1e293b",
                overflow: "hidden"
              }}
            >
              {outputSrc ? (
                <img
                  src={outputSrc}
                  alt="Beautified output screenshot"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              ) : (
                <span className="text-muted">Generating designer wrapper...</span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex" style={{ gap: "1rem", justifyContent: "flex-end" }}>
            <button className="btn btn-secondary" onClick={() => setFile(null)}>
              Upload Another
            </button>
            <button className="btn btn-primary" disabled={isProcessing || !outputSrc} onClick={handleDownload}>
              Download Beautified Screenshot
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

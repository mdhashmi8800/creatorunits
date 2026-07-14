"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function WatermarkImage() {
  const { showToast } = useToast();
  const [baseImage, setBaseImage] = useState<File | null>(null);
  const [baseSrc, setBaseSrc] = useState<string>("");
  
  const [watermarkType, setWatermarkType] = useState<"text" | "logo">("text");
  const [watermarkText, setWatermarkText] = useState<string>("© CreatorUnits");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoSrc, setLogoSrc] = useState<string>("");

  const [position, setPosition] = useState<string>("bottom-right");
  const [opacity, setOpacity] = useState<number>(50); // percentage
  const [scale, setScale] = useState<number>(20); // percentage size of main
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const previewRef = useRef<HTMLCanvasElement | null>(null);

  // Clean object URLs on unmount
  useEffect(() => {
    return () => {
      if (baseSrc) URL.revokeObjectURL(baseSrc);
      if (logoSrc) URL.revokeObjectURL(logoSrc);
    };
  }, [baseSrc, logoSrc]);

  const handleBaseSelect = (files: File[]) => {
    if (files.length === 0) return;
    setBaseImage(files[0]);
    if (baseSrc) URL.revokeObjectURL(baseSrc);
    setBaseSrc(URL.createObjectURL(files[0]));
    showToast("Main base image loaded!", "success");
  };

  const handleLogoSelect = (files: File[]) => {
    if (files.length === 0) return;
    setLogoFile(files[0]);
    if (logoSrc) URL.revokeObjectURL(logoSrc);
    setLogoSrc(URL.createObjectURL(files[0]));
    showToast("Logo watermark image loaded!", "success");
  };

  const drawWatermark = () => {
    const canvas = canvasRef.current;
    if (!canvas || !baseSrc) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const baseImg = new Image();
    baseImg.src = baseSrc;
    baseImg.onload = () => {
      canvas.width = baseImg.naturalWidth;
      canvas.height = baseImg.naturalHeight;

      // Draw base image
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(baseImg, 0, 0);

      // Save drawing state
      ctx.save();
      ctx.globalAlpha = opacity / 100;

      const paddingX = canvas.width * 0.05;
      const paddingY = canvas.height * 0.05;

      if (watermarkType === "text" && watermarkText) {
        // Calculate text size based on scale slider and base image width
        const fontSize = Math.max(12, Math.floor((canvas.width * scale) / 300));
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
        ctx.shadowBlur = 4;
        ctx.textBaseline = "middle";

        const textWidth = ctx.measureText(watermarkText).width;
        let x = paddingX;
        let y = paddingY;

        if (position === "top-right") {
          x = canvas.width - textWidth - paddingX;
        } else if (position === "bottom-left") {
          y = canvas.height - fontSize - paddingY;
        } else if (position === "bottom-right") {
          x = canvas.width - textWidth - paddingX;
          y = canvas.height - fontSize - paddingY;
        } else if (position === "center") {
          x = canvas.width / 2 - textWidth / 2;
          y = canvas.height / 2;
        }

        ctx.fillText(watermarkText, x, y);

      } else if (watermarkType === "logo" && logoSrc) {
        const logoImg = new Image();
        logoImg.src = logoSrc;
        logoImg.onload = () => {
          // Calculate logo size based on scale percentage of base image width
          const logoTargetWidth = (canvas.width * scale) / 100;
          const logoTargetHeight = (logoImg.naturalHeight / logoImg.naturalWidth) * logoTargetWidth;

          let x = paddingX;
          let y = paddingY;

          if (position === "top-right") {
            x = canvas.width - logoTargetWidth - paddingX;
          } else if (position === "bottom-left") {
            y = canvas.height - logoTargetHeight - paddingY;
          } else if (position === "bottom-right") {
            x = canvas.width - logoTargetWidth - paddingX;
            y = canvas.height - logoTargetHeight - paddingY;
          } else if (position === "center") {
            x = canvas.width / 2 - logoTargetWidth / 2;
            y = canvas.height / 2 - logoTargetHeight / 2;
          }

          ctx.drawImage(logoImg, x, y, logoTargetWidth, logoTargetHeight);
        };
      }

      ctx.restore();
    };
  };

  // Redraw when settings change
  useEffect(() => {
    drawWatermark();
  }, [baseSrc, watermarkType, watermarkText, logoSrc, position, opacity, scale]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${baseImage?.name.split(".")[0] || "image"}-watermarked.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Downloaded watermarked image!", "success");
    } catch (err) {
      showToast("Download failed due to canvas security borders.", "error");
    }
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        {!baseImage ? (
          <FileUpload
            onFilesSelect={handleBaseSelect}
            multiple={false}
            accept="image/*"
            maxSizeMB={15}
            label="Upload base image to watermark"
            description="Drag and drop your primary image here (supports JPG, PNG, and WebP)."
          />
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <span>Main Image: <strong>{baseImage.name}</strong></span>
              <button className="btn btn-secondary btn-sm" onClick={() => { setBaseImage(null); setBaseSrc(""); }}>
                Reset Image
              </button>
            </div>

            {/* Type selector */}
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                className={`btn ${watermarkType === "text" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setWatermarkType("text")}
              >
                Text Watermark
              </button>
              <button
                className={`btn ${watermarkType === "logo" ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setWatermarkType("logo")}
              >
                Image Logo Watermark
              </button>
            </div>

            {/* Parameters card */}
            <div className="card flex flex-col gap-4" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              {watermarkType === "text" ? (
                <div className="form-group">
                  <label className="form-label" htmlFor="w-text">Watermark Text</label>
                  <input
                    id="w-text"
                    type="text"
                    value={watermarkText}
                    onChange={(e) => setWatermarkText(e.target.value)}
                    className="form-control"
                  />
                </div>
              ) : (
                <FileUpload
                  onFilesSelect={handleLogoSelect}
                  multiple={false}
                  accept="image/png, image/jpeg"
                  maxSizeMB={3}
                  label={logoFile ? `Selected Logo: ${logoFile.name}` : "Upload logo watermark image (PNG recommended)"}
                  description="Use transparent PNG logos for best visual results."
                />
              )}

              <div className="grid-cols-3" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="w-pos">Position</label>
                  <select
                    id="w-pos"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="form-control form-select"
                  >
                    <option value="top-left">Top-Left</option>
                    <option value="top-right">Top-Right</option>
                    <option value="bottom-left">Bottom-Left</option>
                    <option value="bottom-right">Bottom-Right</option>
                    <option value="center">Center Overlay</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="w-opacity">Opacity: {opacity}%</label>
                  <input
                    id="w-opacity"
                    type="range"
                    min="10"
                    max="100"
                    value={opacity}
                    onChange={(e) => setOpacity(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="w-scale">Watermark Size: {scale}%</label>
                  <input
                    id="w-scale"
                    type="range"
                    min="5"
                    max="60"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Visual Previews workspace */}
            <div className="flex flex-col items-center gap-4">
              <h4 style={{ fontSize: "1rem", margin: 0 }}>Watermarked Live Output Preview:</h4>
              <div style={{
                border: "1px dashed var(--border-color)",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-secondary)",
                maxWidth: "100%"
              }}>
                <canvas ref={canvasRef} style={{ display: "block", maxWidth: "100%", maxHeight: "360px" }} />
              </div>

              <button className="btn btn-primary" onClick={handleDownload} style={{ marginTop: "0.5rem" }}>
                💾 Download Watermarked Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function FaviconGenerator() {
  const { showToast } = useToast();
  const [mode, setMode] = useState<"image" | "text">("text");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [faviconText, setFaviconText] = useState<string>("⭐");
  const [bgColor, setBgColor] = useState<string>("#171717");
  const [textColor, setTextColor] = useState<string>("#ffffff");
  const [shape, setShape] = useState<"square" | "circle">("circle");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc);
    };
  }, [imageSrc]);

  const handleFileSelect = (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setImageFile(file);
    setImageSrc(URL.createObjectURL(file));
    showToast(`Image loaded. Adjust settings to generate favicon.`, "info");
  };

  const drawFavicon = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw at 32x32 for high quality preview and export
    canvas.width = 32;
    canvas.height = 32;

    ctx.clearRect(0, 0, 32, 32);

    // 1. Draw shape background
    if (shape === "circle") {
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fillStyle = bgColor;
      ctx.fill();
    } else {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, 32, 32);
    }

    // 2. Draw text/emoji or image
    if (mode === "text") {
      ctx.fillStyle = textColor;
      ctx.font = "18px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(faviconText, 16, 16);
    } else if (mode === "image" && imageSrc) {
      // Draw image inside background shape with padding
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        ctx.clearRect(0, 0, 32, 32);
        
        // Background shape clip for circles
        if (shape === "circle") {
          ctx.beginPath();
          ctx.arc(16, 16, 16, 0, Math.PI * 2);
          ctx.fillStyle = bgColor;
          ctx.fill();
          ctx.clip();
        } else {
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, 32, 32);
        }

        ctx.drawImage(img, 2, 2, 28, 28);
      };
    }
  };

  useEffect(() => {
    drawFavicon();
  }, [mode, imageSrc, faviconText, bgColor, textColor, shape]);

  const handleDownload = (size: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary canvas at the target size
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = size;
    tempCanvas.height = size;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    // Redraw favicon elements scaled up/down to size
    if (shape === "circle") {
      tempCtx.beginPath();
      tempCtx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      tempCtx.fillStyle = bgColor;
      tempCtx.fill();
    } else {
      tempCtx.fillStyle = bgColor;
      tempCtx.fillRect(0, 0, size, size);
    }

    if (mode === "text") {
      tempCtx.fillStyle = textColor;
      tempCtx.font = `${Math.floor(size * 0.6)}px sans-serif`;
      tempCtx.textAlign = "center";
      tempCtx.textBaseline = "middle";
      tempCtx.fillText(faviconText, size / 2, size / 2);

      const dataUrl = tempCanvas.toDataURL("image/png");
      triggerDownload(dataUrl, `favicon-${size}x${size}.png`);
    } else if (mode === "image" && imageSrc) {
      const img = new Image();
      img.src = imageSrc;
      img.onload = () => {
        tempCtx.clearRect(0, 0, size, size);
        if (shape === "circle") {
          tempCtx.beginPath();
          tempCtx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
          tempCtx.fillStyle = bgColor;
          tempCtx.fill();
          tempCtx.clip();
        } else {
          tempCtx.fillStyle = bgColor;
          tempCtx.fillRect(0, 0, size, size);
        }

        const border = Math.max(1, Math.floor(size * 0.06));
        tempCtx.drawImage(img, border, border, size - border * 2, size - border * 2);

        const dataUrl = tempCanvas.toDataURL("image/png");
        triggerDownload(dataUrl, `favicon-${size}x${size}.png`);
      };
    }
  };

  const triggerDownload = (dataUrl: string, name: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`Downloaded ${name}!`, "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* Tab Selection */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            className={`btn ${mode === "text" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setMode("text")}
          >
            Create from Text / Emoji
          </button>
          <button
            className={`btn ${mode === "image" ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setMode("image")}
          >
            Create from Image Upload
          </button>
        </div>

        {/* Configurations Forms */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
          {mode === "text" ? (
            <div className="grid-cols-3" style={{ gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="fav-text">Text / Emoji</label>
                <input
                  id="fav-text"
                  type="text"
                  maxLength={2}
                  value={faviconText}
                  onChange={(e) => setFaviconText(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="fav-bg">Background Color</label>
                <input
                  id="fav-bg"
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="form-control"
                  style={{ height: "40px", padding: "0.25rem" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="fav-color">Text Color</label>
                <input
                  id="fav-color"
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="form-control"
                  style={{ height: "40px", padding: "0.25rem" }}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <FileUpload
                onFilesSelect={handleFileSelect}
                multiple={false}
                accept="image/*"
                maxSizeMB={5}
                label="Upload source image"
                description="Rescales files to pixel-perfect favicon parameters."
              />
              <div className="form-group">
                <label className="form-label" htmlFor="fav-img-bg">Background Color</label>
                <input
                  id="fav-img-bg"
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="form-control"
                  style={{ height: "40px", padding: "0.25rem", maxWidth: "200px" }}
                />
              </div>
            </div>
          )}

          <div className="form-group" style={{ marginTop: "1rem", marginBottom: 0 }}>
            <label className="form-label">Favicon Shape</label>
            <div className="flex" style={{ gap: "2rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                <input
                  type="radio"
                  name="fav-shape"
                  checked={shape === "circle"}
                  onChange={() => setShape("circle")}
                />
                Rounded Circle
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                <input
                  type="radio"
                  name="fav-shape"
                  checked={shape === "square"}
                  onChange={() => setShape("square")}
                />
                Sharp Square
              </label>
            </div>
          </div>
        </div>

        {/* Previews workspace */}
        <div className="card text-center" style={{ borderStyle: "solid", padding: "1.5rem" }}>
          <h4 style={{ fontSize: "1rem", marginTop: 0, marginBottom: "1rem" }}>Favicon Size Previews:</h4>
          
          <div className="flex justify-center items-end" style={{ gap: "3rem", padding: "1.5rem 0" }}>
            <div className="flex flex-col items-center gap-2">
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: shape === "circle" ? "50%" : "4px",
                backgroundColor: bgColor,
                color: textColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
              }}>
                {mode === "text" ? faviconText : (imageSrc && <img src={imageSrc} style={{ width: "80%", height: "80%", borderRadius: shape === "circle" ? "50%" : "0" }} alt="Fav" />)}
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>48x48 px</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div style={{
                width: "32px",
                height: "32px",
                borderRadius: shape === "circle" ? "50%" : "4px",
                backgroundColor: bgColor,
                color: textColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                border: "1px solid var(--border-color)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)"
              }}>
                {mode === "text" ? faviconText : (imageSrc && <img src={imageSrc} style={{ width: "80%", height: "80%", borderRadius: shape === "circle" ? "50%" : "0" }} alt="Fav" />)}
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>32x32 px</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div style={{
                width: "16px",
                height: "16px",
                borderRadius: shape === "circle" ? "50%" : "2px",
                backgroundColor: bgColor,
                color: textColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                border: "1px solid var(--border-color)"
              }}>
                {mode === "text" ? faviconText : (imageSrc && <img src={imageSrc} style={{ width: "80%", height: "80%", borderRadius: shape === "circle" ? "50%" : "0" }} alt="Fav" />)}
              </div>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>16x16 px</span>
            </div>
          </div>

          {/* Hidden rendering canvas */}
          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>

        {/* Download Bundle Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <button className="btn btn-secondary btn-sm" onClick={() => handleDownload(16)}>
            💾 Download 16x16 PNG
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => handleDownload(32)}>
            💾 Download 32x32 PNG (ICO)
          </button>
          <button className="btn btn-primary btn-sm" onClick={() => handleDownload(48)}>
            💾 Download 48x48 PNG
          </button>
        </div>

      </div>
    </div>
  );
}

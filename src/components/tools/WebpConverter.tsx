"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function WebpConverter() {
  const { showToast } = useToast();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [format, setFormat] = useState<"webp" | "png" | "jpeg">("webp");
  const [quality, setQuality] = useState<number>(85);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
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

    // Swap defaults if input is already webp
    if (file.name.endsWith(".webp")) {
      setFormat("png");
    } else {
      setFormat("webp");
    }
    showToast(`Loaded ${file.name}. Choose conversion settings.`, "info");
  };

  const handleConvert = () => {
    if (!imageSrc) return;
    setIsProcessing(true);

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw white background if format is JPG
      if (format === "jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      try {
        const mime = `image/${format}`;
        const dataUrl = canvas.toDataURL(mime, quality / 100);
        
        const extension = format === "jpeg" ? "jpg" : format;
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${imageFile?.name.split(".")[0] || "image"}.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast(`Image converted to ${format.toUpperCase()}!`, "success");
      } catch (err) {
        showToast("Convert action failed due to canvas border configurations.", "error");
      } finally {
        setIsProcessing(false);
      }
    };
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        {!imageFile ? (
          <FileUpload
            onFilesSelect={handleFileSelect}
            multiple={false}
            accept="image/*"
            maxSizeMB={15}
            label="Upload Image to Convert to WebP / PNG / JPG"
            description="Supports JPG, PNG, WebP up to 15MB. Encodes fully on-device."
          />
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <span>Selected: <strong>{imageFile.name}</strong></span>
              <button className="btn btn-secondary btn-sm" onClick={() => { setImageFile(null); setImageSrc(""); }}>
                Reset Image
              </button>
            </div>

            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <div className="grid-cols-2" style={{ gap: "2rem" }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="format-se">Target Output Format</label>
                  <select
                    id="format-se"
                    value={format}
                    onChange={(e) => setFormat(e.target.value as any)}
                    className="form-control form-select"
                  >
                    <option value="webp">WebP (Optimized for Web size)</option>
                    <option value="png">PNG (Lossless layout)</option>
                    <option value="jpeg">JPG (Standard photography format)</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="qual-slider">Conversion Quality: {quality}%</label>
                  <input
                    id="qual-slider"
                    type="range"
                    min="10"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    disabled={format === "png"}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h4 style={{ fontSize: "1rem", margin: 0 }}>Image Source Preview:</h4>
              <div style={{
                border: "1px dashed var(--border-color)",
                padding: "8px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-secondary)",
                maxWidth: "100%"
              }}>
                <img src={imageSrc} style={{ maxHeight: "300px", maxWidth: "100%", display: "block" }} alt="Source reference" />
              </div>

              <button
                className="btn btn-primary"
                onClick={handleConvert}
                disabled={isProcessing}
              >
                {isProcessing ? "⏳ Encoding image..." : `⚡ Convert to ${format.toUpperCase()}`}
              </button>
            </div>

            {/* Hidden canvas for drawing encoding formats */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}
      </div>
    </div>
  );
}

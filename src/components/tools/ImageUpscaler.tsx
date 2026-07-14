"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function ImageUpscaler() {
  const { showToast } = useToast();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [scale, setScale] = useState<number>(2);
  const [algo, setAlgo] = useState<"bicubic" | "nearest">("bicubic");
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
    showToast(`Loaded ${file.name}. Adjust scaling parameters.`, "info");
  };

  const handleUpscale = () => {
    if (!imageSrc) return;
    setIsProcessing(true);

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const targetWidth = img.naturalWidth * scale;
      const targetHeight = img.naturalHeight * scale;

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // Adjust image smoothing flags on canvas context
      if (algo === "nearest") {
        ctx.imageSmoothingEnabled = false;
      } else {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }

      ctx.clearRect(0, 0, targetWidth, targetHeight);
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      // Trigger download
      try {
        const dataUrl = canvas.toDataURL("image/jpeg", 0.92);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${imageFile?.name.split(".")[0] || "image"}-upscaled-${scale}x.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast(`Image upscaled to ${targetWidth}x${targetHeight} and downloaded!`, "success");
      } catch (err) {
        showToast("Upscaling failed due to browser canvas security checks.", "error");
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
            maxSizeMB={10}
            label="Upload Image to Upscale (Resize)"
            description="Supports PNG, JPG, and WebP up to 10MB. Upscales on-device up to 4x."
          />
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <span>Loaded: <strong>{imageFile.name}</strong></span>
              <button className="btn btn-secondary btn-sm" onClick={() => { setImageFile(null); setImageSrc(""); }}>
                Reset Image
              </button>
            </div>

            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <div className="grid-cols-2" style={{ gap: "2rem" }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="scale-sel">Scale Multiplier</label>
                  <select
                    id="scale-sel"
                    value={scale}
                    onChange={(e) => setScale(Number(e.target.value))}
                    className="form-control form-select"
                  >
                    <option value="2">2x Upscale (Double resolution)</option>
                    <option value="3">3x Upscale</option>
                    <option value="4">4x Upscale (Quadruple resolution)</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="algo-sel">Resampling Algorithm</label>
                  <select
                    id="algo-sel"
                    value={algo}
                    onChange={(e) => setAlgo(e.target.value as any)}
                    className="form-control form-select"
                  >
                    <option value="bicubic">Smooth Rescale (Bicubic / Bilinear)</option>
                    <option value="nearest">Pixel Perfect (Nearest Neighbor)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h4 style={{ fontSize: "1.2rem", margin: 0 }}>Source Preview:</h4>
              <div style={{
                border: "1px dashed var(--border-color)",
                padding: "8px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-secondary)",
                maxWidth: "100%",
                overflow: "auto"
              }}>
                <img src={imageSrc} style={{ maxHeight: "300px", maxWidth: "100%", display: "block" }} alt="Source upscaling reference" />
              </div>

              <button
                className="btn btn-primary"
                onClick={handleUpscale}
                disabled={isProcessing}
                style={{ marginTop: "0.5rem" }}
              >
                {isProcessing ? "⏳ Upscaling image..." : `⚡ Upscale and Download (${scale}x)`}
              </button>
            </div>

            {/* Hidden canvas for drawing upscaled files */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}
      </div>
    </div>
  );
}

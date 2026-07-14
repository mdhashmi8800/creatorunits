"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function BlurImage() {
  const { showToast } = useToast();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [blurRadius, setBlurRadius] = useState<number>(10);
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
    showToast(`Loaded ${file.name}. Adjust the slider to apply blur.`, "info");
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${imageFile?.name.split(".")[0] || "image"}-blurred.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloaded blurred image!", "success");
  };

  // Redraw canvas on radius change
  useEffect(() => {
    if (!imageSrc) return;

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // Apply blur filter native to HTML5 canvas context
      ctx.filter = `blur(${blurRadius}px)`;
      
      // Clear previous canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw blurred image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }, [imageSrc, blurRadius]);

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        {!imageFile ? (
          <FileUpload
            onFilesSelect={handleFileSelect}
            multiple={false}
            accept="image/*"
            maxSizeMB={15}
            label="Upload Image to Blur"
            description="Supports JPG, PNG, and WebP. Adjust pixel radius and export on-device."
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
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="blur-slider">
                  Blur Radius: <strong>{blurRadius}px</strong>
                </label>
                <input
                  id="blur-slider"
                  type="range"
                  min="0"
                  max="80"
                  value={blurRadius}
                  onChange={(e) => setBlurRadius(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h4 style={{ fontSize: "1rem", margin: 0 }}>Blurred Canvas Preview:</h4>
              <div style={{
                border: "1px solid var(--border-color)",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-secondary)",
                maxWidth: "100%",
                overflow: "hidden"
              }}>
                {/* Visual rendering canvas */}
                <canvas ref={canvasRef} style={{ display: "block", maxWidth: "100%", maxHeight: "400px" }} />
              </div>

              <button className="btn btn-primary" onClick={handleDownload} style={{ marginTop: "0.5rem" }}>
                💾 Download Blurred Image
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

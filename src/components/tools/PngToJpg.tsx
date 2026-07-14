"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function PngToJpg() {
  const { showToast } = useToast();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [quality, setQuality] = useState<number>(90);
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
    showToast(`Loaded ${file.name}. Adjust background color and quality.`, "info");
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

      // Fill canvas background first (so transparent pixels get filled correctly)
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the PNG image on top of background
      ctx.drawImage(img, 0, 0);

      try {
        const dataUrl = canvas.toDataURL("image/jpeg", quality / 100);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${imageFile?.name.split(".")[0] || "image"}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Successfully converted PNG to JPG!", "success");
      } catch (err) {
        showToast("Conversion failed due to browser security settings.", "error");
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
            accept="image/png"
            maxSizeMB={15}
            label="Upload PNG image to convert"
            description="Supports PNG files up to 15MB. Flattened and compressed fully on-device."
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
                  <label className="form-label" htmlFor="bg-c-picker">Flatten Background Color</label>
                  <input
                    id="bg-c-picker"
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="form-control"
                    style={{ height: "40px", padding: "0.2rem" }}
                  />
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", display: "block" }}>
                    Fills transparent regions with this color.
                  </span>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="quality-sl">JPG Quality: {quality}%</label>
                  <input
                    id="quality-sl"
                    type="range"
                    min="10"
                    max="100"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h4 style={{ fontSize: "1rem", margin: 0 }}>PNG Source Image Preview:</h4>
              <div style={{
                border: "1px dashed var(--border-color)",
                padding: "8px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-secondary)",
                maxWidth: "100%"
              }}>
                <img src={imageSrc} style={{ maxHeight: "300px", maxWidth: "100%" }} alt="Source reference" />
              </div>

              <button
                className="btn btn-primary"
                onClick={handleConvert}
                disabled={isProcessing}
              >
                {isProcessing ? "⏳ Converting image..." : "⚡ Convert PNG to JPG"}
              </button>
            </div>

            {/* Hidden canvas for drawing conversions */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function BackgroundRemover() {
  const { showToast } = useToast();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [targetColor, setTargetColor] = useState<{ r: number; g: number; b: number }>({ r: 255, g: 255, b: 255 });
  const [tolerance, setTolerance] = useState<number>(30);
  const [hasSampled, setHasSampled] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc);
    };
  }, [imageSrc]);

  const handleFileSelect = (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setImageFile(file);
    const src = URL.createObjectURL(file);
    setImageSrc(src);
    setHasSampled(false);
    showToast(`Loaded ${file.name}. Click on the background in the image below to sample and remove that color.`, "info");
  };

  const processImage = () => {
    const canvas = canvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // Draw original image
    ctx.drawImage(img, 0, 0);

    if (!hasSampled) return;

    // Get pixel data
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    const { r: tr, g: tg, b: tb } = targetColor;

    // Chroma key removal formula
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Calculate Euclidean distance in RGB color space
      const distance = Math.sqrt(
        (r - tr) ** 2 +
        (g - tg) ** 2 +
        (b - tb) ** 2
      );

      if (distance < tolerance) {
        // Make pixel transparent
        data[i + 3] = 0;
      }
    }

    // Write processed pixels back to canvas
    ctx.putImageData(imgData, 0, 0);
  };

  // Re-run processing whenever tolerance or targetColor change
  useEffect(() => {
    if (imageSrc) {
      // Small timeout to guarantee image loads
      const timer = setTimeout(processImage, 100);
      return () => clearTimeout(timer);
    }
  }, [tolerance, targetColor, hasSampled, imageSrc]);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = imgRef.current;
    if (!img) return;

    // Get clicked coordinates relative to natural image dimensions
    const rect = img.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * img.naturalWidth);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * img.naturalHeight);

    // Create temp canvas to sample pixel color
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = img.naturalWidth;
    tempCanvas.height = img.naturalHeight;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCtx.drawImage(img, 0, 0);
    const pixel = tempCtx.getImageData(x, y, 1, 1).data;

    setTargetColor({ r: pixel[0], g: pixel[1], b: pixel[2] });
    setHasSampled(true);
    showToast(`Sampled color: RGB(${pixel[0]}, ${pixel[1]}, ${pixel[2]}). Background transparentized!`, "success");
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${imageFile?.name.split(".")[0] || "image"}-transparent.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Downloaded transparent PNG!", "success");
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
            label="Upload Image to Remove Background"
            description="Supports JPG, PNG, and WebP. Color-key chroma tool runs 100% on-device."
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
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="tol-slider">
                  Color Match Tolerance: <strong>{tolerance}</strong>
                </label>
                <input
                  id="tol-slider"
                  type="range"
                  min="5"
                  max="150"
                  value={tolerance}
                  onChange={(e) => setTolerance(Number(e.target.value))}
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="grid-cols-2" style={{ gap: "2rem" }}>
              {/* Target Image view */}
              <div className="card text-center" style={{ borderStyle: "solid", padding: "1rem" }}>
                <h4 style={{ fontSize: "1rem", marginTop: 0, marginBottom: "0.5rem" }}>1. Click Image to Sample Background</h4>
                <div style={{ position: "relative", overflow: "hidden", display: "inline-block", cursor: "crosshair" }}>
                  <img
                    ref={imgRef}
                    src={imageSrc}
                    alt="Source"
                    onClick={handleImageClick}
                    style={{ maxWidth: "100%", maxHeight: "350px", border: "1px dashed var(--border-color)" }}
                    onLoad={processImage}
                  />
                </div>
                {hasSampled && (
                  <div style={{ marginTop: "0.5rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    Sampled Color: <span style={{
                      display: "inline-block",
                      width: "12px",
                      height: "12px",
                      backgroundColor: `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`,
                      border: "1px solid var(--border-color)",
                      verticalAlign: "middle",
                      marginRight: "4px"
                    }} />
                    RGB({targetColor.r}, {targetColor.g}, {targetColor.b})
                  </div>
                )}
              </div>

              {/* Output Preview */}
              <div className="card text-center" style={{ borderStyle: "solid", padding: "1rem" }}>
                <h4 style={{ fontSize: "1rem", marginTop: 0, marginBottom: "0.5rem" }}>2. Transparency Preview</h4>
                <div style={{
                  backgroundImage: "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                  backgroundColor: "#eaeaea",
                  display: "inline-block",
                  padding: "4px",
                  border: "1px solid var(--border-color)",
                  maxWidth: "100%"
                }}>
                  <canvas ref={canvasRef} style={{ maxWidth: "100%", maxHeight: "340px", display: "block" }} />
                </div>
              </div>
            </div>

            {hasSampled && (
              <div style={{ textAlign: "center" }}>
                <button className="btn btn-primary" onClick={handleDownload}>
                  💾 Download Transparent PNG
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

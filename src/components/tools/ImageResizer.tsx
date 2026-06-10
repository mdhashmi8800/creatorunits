"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function ImageResizer() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  
  const [originalWidth, setOriginalWidth] = useState<number>(0);
  const [originalHeight, setOriginalHeight] = useState<number>(0);
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  
  const [aspectRatioLock, setAspectRatioLock] = useState<boolean>(true);
  const [outputFormat, setOutputFormat] = useState<string>("image/png");
  const [resizedSrc, setResizedSrc] = useState<string>("");
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
      setOutputFormat(file.type);
    } else {
      setImageSrc("");
      setResizedSrc("");
      setOriginalWidth(0);
      setOriginalHeight(0);
      setWidth("");
      setHeight("");
    }
  }, [file]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    imgRef.current = img;
    setOriginalWidth(img.naturalWidth);
    setOriginalHeight(img.naturalHeight);
    setWidth(img.naturalWidth.toString());
    setHeight(img.naturalHeight.toString());
  };

  useEffect(() => {
    if (imageSrc && width && height) {
      const w = parseInt(width);
      const h = parseInt(height);
      if (w > 0 && h > 0) {
        resizeImage(w, h);
      }
    }
  }, [imageSrc, width, height, outputFormat]);

  const resizeImage = (w: number, h: number) => {
    if (!imgRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = w;
    canvas.height = h;

    if (outputFormat === "image/jpeg") {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
    }

    ctx.drawImage(imgRef.current, 0, 0, w, h);
    
    // Save to preview url
    const dataUrl = canvas.toDataURL(outputFormat);
    setResizedSrc(dataUrl);
  };

  const handleWidthChange = (val: string) => {
    setWidth(val);
    const parsedWidth = parseInt(val);
    if (aspectRatioLock && originalWidth && originalHeight && parsedWidth > 0) {
      const ratio = originalHeight / originalWidth;
      setHeight(Math.round(parsedWidth * ratio).toString());
    }
  };

  const handleHeightChange = (val: string) => {
    setHeight(val);
    const parsedHeight = parseInt(val);
    if (aspectRatioLock && originalWidth && originalHeight && parsedHeight > 0) {
      const ratio = originalWidth / originalHeight;
      setWidth(Math.round(parsedHeight * ratio).toString());
    }
  };

  const applyPreset = (percent: number) => {
    if (!originalWidth || !originalHeight) return;
    const factor = percent / 100;
    const w = Math.round(originalWidth * factor);
    const h = Math.round(originalHeight * factor);
    setWidth(w.toString());
    setHeight(h.toString());
  };

  const handleDownload = () => {
    if (!resizedSrc) return;
    const extension = outputFormat.split("/")[1];
    const originalName = file?.name.substring(0, file.name.lastIndexOf(".")) || "image";
    
    const link = document.createElement("a");
    link.href = resizedSrc;
    link.download = `${originalName}-resized.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Resized image downloaded successfully!", "success");
  };

  return (
    <div className="card">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/*"
          maxSizeMB={20}
          label="Upload your image to resize"
          description="Supports JPEG, PNG, WebP up to 20MB. Fully custom scales."
        />
      ) : (
        <div className="flex flex-col gap-6">
          <div style={{ display: "none" }}>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Original loader"
                onLoad={handleImageLoad}
              />
            )}
          </div>

          {/* Configuration Panel */}
          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
            <div className="grid-cols-2" style={{ gap: "2rem" }}>
              
              {/* Width / Height dimensions */}
              <div className="flex flex-col gap-4">
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div className="form-group w-full" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="width-input">Width (px)</label>
                    <input
                      id="width-input"
                      type="number"
                      value={width}
                      onChange={(e) => handleWidthChange(e.target.value)}
                      className="form-control"
                      placeholder="Width"
                    />
                  </div>

                  <div className="form-group w-full" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="height-input">Height (px)</label>
                    <input
                      id="height-input"
                      type="number"
                      value={height}
                      onChange={(e) => handleHeightChange(e.target.value)}
                      className="form-control"
                      placeholder="Height"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="aspect-lock"
                    type="checkbox"
                    checked={aspectRatioLock}
                    onChange={(e) => setAspectRatioLock(e.target.checked)}
                    style={{ width: "1rem", height: "1rem", accentColor: "var(--accent)" }}
                  />
                  <label htmlFor="aspect-lock" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
                    Lock Aspect Ratio ({originalWidth}x{originalHeight})
                  </label>
                </div>
              </div>

              {/* Presets and formats */}
              <div className="flex flex-col gap-4">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <span className="form-label">Scale Presets</span>
                  <div className="flex" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
                    <button className="btn btn-secondary btn-sm" onClick={() => applyPreset(100)}>
                      100% (Reset)
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={() => applyPreset(75)}>
                      75%
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={() => applyPreset(50)}>
                      50%
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={() => applyPreset(25)}>
                      25%
                    </button>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="resizer-format">Save format</label>
                  <select
                    id="resizer-format"
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="form-control form-select"
                  >
                    <option value="image/png">PNG (Lossless, transparent)</option>
                    <option value="image/jpeg">JPG (Compressed, white background)</option>
                    <option value="image/webp">WebP (Compressed, transparent)</option>
                  </select>
                </div>
              </div>

            </div>
          </div>

          {/* Visual Previews */}
          <div className="grid-cols-2" style={{ gap: "1.5rem" }}>
            <div className="flex flex-col gap-2">
              <span className="form-label text-center">Original ({originalWidth}x{originalHeight}px)</span>
              <div
                style={{
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--border-radius-md)",
                  padding: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "260px",
                  backgroundColor: "#1e293b",
                  overflow: "hidden"
                }}
              >
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Original Upload"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="form-label text-center">Resized ({width}x{height}px Preview)</span>
              <div
                style={{
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--border-radius-md)",
                  padding: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "260px",
                  backgroundColor: "#1e293b",
                  overflow: "hidden"
                }}
              >
                {resizedSrc ? (
                  <img
                    src={resizedSrc}
                    alt="Resized output"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                ) : (
                  <span className="text-muted">Loading preview...</span>
                )}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex" style={{ gap: "1rem", justifyContent: "flex-end" }}>
            <button className="btn btn-secondary" onClick={() => setFile(null)}>
              Upload Another
            </button>
            <button className="btn btn-primary" disabled={!resizedSrc} onClick={handleDownload}>
              Download Resized Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

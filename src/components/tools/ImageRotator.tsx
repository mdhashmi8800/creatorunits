"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function ImageRotator() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [rotation, setRotation] = useState<number>(0); // 0, 90, 180, 270
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [rotatedUrl, setRotatedUrl] = useState<string>("");

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
      setRotation(0);
    } else {
      setImageSrc("");
      setRotatedUrl("");
      setRotation(0);
    }
  }, [file]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    imgRef.current = e.currentTarget;
    applyRotation(0);
  };

  useEffect(() => {
    if (imageSrc && imgRef.current) {
      applyRotation(rotation);
    }
  }, [rotation, imageSrc]);

  const applyRotation = (angle: number) => {
    if (!imgRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsProcessing(true);

    const img = imgRef.current;
    const radians = (angle * Math.PI) / 180;
    
    // Swap width/height for 90 or 270 degree rotation
    const isSwapped = angle === 90 || angle === 270;
    canvas.width = isSwapped ? img.naturalHeight : img.naturalWidth;
    canvas.height = isSwapped ? img.naturalWidth : img.naturalHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Translate origin to canvas center
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(radians);
    
    // Draw image centered at origin
    ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2);
    
    const output = canvas.toDataURL(file?.type || "image/png");
    setRotatedUrl(output);
    setIsProcessing(false);
  };

  const handleRotateLeft = () => {
    setRotation((prev) => (prev - 90 + 360) % 360);
  };

  const handleRotateRight = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleDownload = () => {
    if (!rotatedUrl) return;
    const originalName = file?.name.substring(0, file.name.lastIndexOf(".")) || "image";
    const extension = file?.type.split("/")[1] || "png";
    
    const link = document.createElement("a");
    link.href = rotatedUrl;
    link.download = `${originalName}-rotated.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Rotated image downloaded successfully!", "success");
  };

  return (
    <div className="card">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/*"
          maxSizeMB={20}
          label="Upload your image to rotate"
          description="Rotate photographs sideways or upside-down."
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

          {/* Configuration panel */}
          <div className="card text-center" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.25rem" }}>
            <span className="form-label" style={{ marginBottom: "0.75rem" }}>Rotate Image Controls</span>
            <div className="flex-controls">
              <button className="btn btn-secondary" onClick={handleRotateLeft}>
                ↺ Rotate Left 90°
              </button>
              <button className="btn btn-secondary" onClick={handleRotateRight}>
                ↻ Rotate Right 90°
              </button>
              <button className="btn btn-secondary" onClick={() => setRotation(180)}>
                ⇄ Rotate 180°
              </button>
            </div>
            <p className="text-muted" style={{ fontSize: "0.85rem", marginTop: "0.75rem", marginBottom: 0 }}>
              Current rotation: <strong>{rotation}°</strong>
            </p>
          </div>

          {/* Preview Canvas frame */}
          <div className="flex flex-col gap-2">
            <span className="form-label text-center">Rotation Preview</span>
            <div
              style={{
                border: "1px solid var(--border-color)",
                borderRadius: "var(--border-radius-md)",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "320px",
                backgroundColor: "#1e293b",
                overflow: "hidden"
              }}
            >
              {rotatedUrl ? (
                <img
                  src={rotatedUrl}
                  alt="Rotated preview"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              ) : (
                <span className="text-muted">Processing rotation...</span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex-actions">
            <button className="btn btn-secondary" onClick={() => setFile(null)}>
              Upload New
            </button>
            <button className="btn btn-primary" disabled={isProcessing || !rotatedUrl} onClick={handleDownload}>
              Download Rotated Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function ImageFlipper() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  
  const [flippedUrl, setFlippedUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

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
      setFlipH(false);
      setFlipV(false);
    } else {
      setImageSrc("");
      setFlippedUrl("");
    }
  }, [file]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    imgRef.current = e.currentTarget;
    applyFlip(false, false);
  };

  useEffect(() => {
    if (imageSrc && imgRef.current) {
      applyFlip(flipH, flipV);
    }
  }, [flipH, flipV, imageSrc]);

  const applyFlip = (h: boolean, v: boolean) => {
    if (!imgRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setIsProcessing(true);
    const img = imgRef.current;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    // Move translation points and scale canvas
    ctx.translate(h ? canvas.width : 0, v ? canvas.height : 0);
    ctx.scale(h ? -1 : 1, v ? -1 : 1);

    ctx.drawImage(img, 0, 0);
    ctx.restore();

    const output = canvas.toDataURL(file?.type || "image/png");
    setFlippedUrl(output);
    setIsProcessing(false);
  };

  const handleDownload = () => {
    if (!flippedUrl) return;
    const originalName = file?.name.substring(0, file.name.lastIndexOf(".")) || "image";
    const extension = file?.type.split("/")[1] || "png";
    
    const link = document.createElement("a");
    link.href = flippedUrl;
    link.download = `${originalName}-flipped.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Flipped image downloaded successfully!", "success");
  };

  return (
    <div className="card">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/*"
          maxSizeMB={20}
          label="Upload your image to flip / mirror"
          description="Fix mirrored selfie cameras or reverse layout text."
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
            <span className="form-label" style={{ marginBottom: "0.75rem" }}>Mirror Controls</span>
            <div className="flex" style={{ gap: "1rem", justifyContent: "center" }}>
              <button
                className={`btn ${flipH ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setFlipH(!flipH)}
              >
                ↔ Flip Horizontal
              </button>
              <button
                className={`btn ${flipV ? "btn-primary" : "btn-secondary"}`}
                onClick={() => setFlipV(!flipV)}
              >
                ↕ Flip Vertical
              </button>
            </div>
            <p className="text-muted" style={{ fontSize: "0.85rem", marginTop: "0.75rem", marginBottom: 0 }}>
              Status: H-Flipped <strong>{flipH ? "YES" : "NO"}</strong>, V-Flipped <strong>{flipV ? "YES" : "NO"}</strong>
            </p>
          </div>

          {/* Preview Canvas frame */}
          <div className="flex flex-col gap-2">
            <span className="form-label text-center">Flipped Preview</span>
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
              {flippedUrl ? (
                <img
                  src={flippedUrl}
                  alt="Flipped preview"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              ) : (
                <span className="text-muted">Processing mirroring...</span>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex" style={{ gap: "1rem", justifyContent: "flex-end" }}>
            <button className="btn btn-secondary" onClick={() => setFile(null)}>
              Upload New
            </button>
            <button className="btn btn-primary" disabled={isProcessing || !flippedUrl} onClick={handleDownload}>
              Download Flipped Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

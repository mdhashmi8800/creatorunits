"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function ImageCompressor() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [quality, setQuality] = useState<number>(80);
  const [outputFormat, setOutputFormat] = useState<string>("image/jpeg");
  
  const [compressedSrc, setCompressedSrc] = useState<string>("");
  const [originalSize, setOriginalSize] = useState<number>(0);
  const [compressedSize, setCompressedSize] = useState<number>(0);
  const [isCompressing, setIsCompressing] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
      setOriginalSize(file.size);

      // Auto-set output format based on input
      if (file.type === "image/png") {
        setOutputFormat("image/webp"); // WebP handles PNG transparency best while saving space
      } else if (file.type === "image/webp") {
        setOutputFormat("image/webp");
      } else {
        setOutputFormat("image/jpeg");
      }
    } else {
      setImageSrc("");
      setCompressedSrc("");
      setOriginalSize(0);
      setCompressedSize(0);
    }
  }, [file]);

  useEffect(() => {
    if (imageSrc) {
      compressImage();
    }
  }, [imageSrc, quality, outputFormat]);

  const compressImage = () => {
    if (!imageSrc) return;
    setIsCompressing(true);

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        setIsCompressing(false);
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setIsCompressing(false);
        return;
      }

      // Maintain original dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Fill transparent background with white for JPEGs
      if (outputFormat === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      // Compress
      const qualityRatio = quality / 100;
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            setCompressedSize(blob.size);
            const url = URL.createObjectURL(blob);
            setCompressedSrc(url);
          }
          setIsCompressing(false);
        },
        outputFormat,
        qualityRatio
      );
    };
  };

  const handleDownload = () => {
    if (!compressedSrc) return;
    const extension = outputFormat.split("/")[1];
    const originalName = file?.name.substring(0, file.name.lastIndexOf(".")) || "image";
    
    const link = document.createElement("a");
    link.href = compressedSrc;
    link.download = `${originalName}-compressed.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast("Image downloaded successfully!", "success");
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const savingPercentage = () => {
    if (originalSize === 0 || compressedSize === 0) return 0;
    const savings = ((originalSize - compressedSize) / originalSize) * 100;
    return Math.max(0, parseFloat(savings.toFixed(0)));
  };

  return (
    <div className="card">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/png, image/jpeg, image/jpg, image/webp"
          maxSizeMB={20}
          label="Upload your image to compress"
          description="Supports PNG, JPG, JPEG, and WebP up to 20MB. Done locally in your browser."
        />
      ) : (
        <div className="flex flex-col gap-6">
          {/* Controls Bar */}
          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
            <div className="grid-cols-2" style={{ gap: "2rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="quality-slider">
                  Compression Quality: {quality}%
                </label>
                <input
                  id="quality-slider"
                  type="range"
                  min="5"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full"
                  style={{ accentColor: "var(--accent)" }}
                />
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                  Lower quality creates smaller file size but reduces details.
                </span>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="format-select">
                  Convert Output Format
                </label>
                <select
                  id="format-select"
                  value={outputFormat}
                  onChange={(e) => setOutputFormat(e.target.value)}
                  className="form-control form-select"
                >
                  <option value="image/jpeg">JPG / JPEG (Best for photos)</option>
                  <option value="image/webp">WebP (Best for modern web, supports opacity)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Size Info Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
            <div className="card text-center" style={{ padding: "1rem" }}>
              <div className="text-muted" style={{ fontSize: "0.85rem" }}>Original Size</div>
              <strong style={{ fontSize: "1.1rem" }}>{formatSize(originalSize)}</strong>
            </div>
            
            <div className="card text-center" style={{ padding: "1rem" }}>
              <div className="text-muted" style={{ fontSize: "0.85rem" }}>Compressed Size</div>
              <strong style={{ fontSize: "1.1rem", color: compressedSize < originalSize ? "var(--success)" : "inherit" }}>
                {isCompressing ? "Compressing..." : formatSize(compressedSize)}
              </strong>
            </div>

            <div className="card text-center" style={{ padding: "1rem", background: "var(--accent-light)", borderColor: "var(--accent)" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: "600" }}>Total Savings</div>
              <strong style={{ fontSize: "1.2rem", color: "var(--accent)" }}>
                {savingPercentage() > 0 ? `${savingPercentage()}%` : "0%"}
              </strong>
            </div>
          </div>

          {/* Image Previews */}
          <div className="grid-cols-2" style={{ gap: "1.5rem" }}>
            <div className="flex flex-col gap-2">
              <span className="form-label text-center">Original Image Preview</span>
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
              <span className="form-label text-center">Compressed Image Preview</span>
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
                {compressedSrc ? (
                  <img
                    src={compressedSrc}
                    alt="Compressed output"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                ) : (
                  <span className="text-muted">Processing...</span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex" style={{ gap: "1rem", justifyContent: "flex-end" }}>
            <button className="btn btn-secondary" onClick={() => setFile(null)}>
              Reset & Upload New
            </button>
            <button
              className="btn btn-primary"
              disabled={isCompressing || !compressedSrc}
              onClick={handleDownload}
            >
              Download Compressed Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

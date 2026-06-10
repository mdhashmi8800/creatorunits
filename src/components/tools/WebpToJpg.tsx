"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function WebpToJpg() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [convertedSrc, setConvertedSrc] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [quality, setQuality] = useState<number>(90);
  
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
    } else {
      setImageSrc("");
      setConvertedSrc("");
    }
  }, [file]);

  useEffect(() => {
    if (imageSrc) {
      convertToJpg();
    }
  }, [imageSrc, quality]);

  const convertToJpg = () => {
    setIsProcessing(true);
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        setIsProcessing(false);
        return;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setIsProcessing(false);
        return;
      }
      
      canvas.width = img.width;
      canvas.height = img.height;

      // Fill transparency with white background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.drawImage(img, 0, 0);
      
      const jpgData = canvas.toDataURL("image/jpeg", quality / 100);
      setConvertedSrc(jpgData);
      setIsProcessing(false);
    };
  };

  const handleDownload = () => {
    if (!convertedSrc) return;
    const originalName = file?.name.substring(0, file.name.lastIndexOf(".")) || "image";
    
    const link = document.createElement("a");
    link.href = convertedSrc;
    link.download = `${originalName}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("JPG downloaded successfully!", "success");
  };

  return (
    <div className="card">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/webp"
          maxSizeMB={15}
          label="Upload WebP image to convert"
          description="Supports modern WebP files up to 15MB."
        />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
            <div className="grid-cols-2" style={{ gap: "2rem", alignItems: "center" }}>
              <p className="text-muted" style={{ marginBottom: 0 }}>
                Converting <strong>{file.name}</strong> to JPG format. Opaque areas will resolve to white.
              </p>
              
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="jpg-quality">Output JPEG Quality: {quality}%</label>
                <input
                  id="jpg-quality"
                  type="range"
                  min="50"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--accent)" }}
                />
              </div>
            </div>
          </div>

          <div
            style={{
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-md)",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "300px",
              backgroundColor: "#1e293b",
              overflow: "hidden"
            }}
          >
            {isProcessing ? (
              <span style={{ color: "white" }}>Converting...</span>
            ) : (
              convertedSrc && (
                <img
                  src={convertedSrc}
                  alt="Converted output"
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                />
              )
            )}
          </div>

          <div className="flex" style={{ gap: "1rem", justifyContent: "flex-end" }}>
            <button className="btn btn-secondary" onClick={() => setFile(null)}>
              Convert Another
            </button>
            <button className="btn btn-primary" disabled={isProcessing || !convertedSrc} onClick={handleDownload}>
              Download JPG Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

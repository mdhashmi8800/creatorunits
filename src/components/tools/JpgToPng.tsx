"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function JpgToPng() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [convertedSrc, setConvertedSrc] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  
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
      convertToPng();
    }
  }, [imageSrc]);

  const convertToPng = () => {
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
      ctx.drawImage(img, 0, 0);
      
      const pngData = canvas.toDataURL("image/png");
      setConvertedSrc(pngData);
      setIsProcessing(false);
    };
  };

  const handleDownload = () => {
    if (!convertedSrc) return;
    const originalName = file?.name.substring(0, file.name.lastIndexOf(".")) || "image";
    
    const link = document.createElement("a");
    link.href = convertedSrc;
    link.download = `${originalName}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("PNG downloaded successfully!", "success");
  };

  return (
    <div className="card">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/jpeg, image/jpg"
          maxSizeMB={15}
          label="Upload JPG image to convert"
          description="Supports .jpg and .jpeg files up to 15MB."
        />
      ) : (
        <div className="flex flex-col gap-6">
          <div className="card text-center" style={{ padding: "1.5rem", background: "var(--bg-secondary)", borderStyle: "solid" }}>
            <h4 style={{ marginBottom: "0.5rem" }}>Ready to Convert</h4>
            <p className="text-muted" style={{ marginBottom: 0 }}>
              Converting <strong>{file.name}</strong> ({Math.round(file.size / 1024)} KB) to PNG format.
            </p>
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
              Download PNG Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

interface PlatformPreset {
  name: string;
  w: number;
  h: number;
  ratio: string;
  desc: string;
}

export default function SocialPostSizeChecker() {
  const { showToast } = useToast();
  
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  
  const [imgW, setImgW] = useState<number>(0);
  const [imgH, setImgH] = useState<number>(0);
  const [activePreset, setActivePreset] = useState<string>("ig-feed");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const presets: Record<string, PlatformPreset> = {
    "ig-feed": { name: "Instagram Square Post", w: 1080, h: 1080, ratio: "1:1", desc: "Standard grid square post format" },
    "ig-portrait": { name: "Instagram Portrait Post", w: 1080, h: 1350, ratio: "4:5", desc: "Best height for maximum scroll footprint" },
    "ig-story": { name: "Instagram Story / Reels / TikTok", w: 1080, h: 1920, ratio: "9:16", desc: "Vertical fullscreen layout format" },
    "yt-thumb": { name: "YouTube Video Thumbnail", w: 1280, h: 720, ratio: "16:9", desc: "Widescreen video thumbnail standard" },
    "yt-banner": { name: "YouTube Channel Banner (Safe Area)", w: 1546, h: 423, ratio: "3.65:1", desc: "Central desktop and mobile visible safe area" },
    "fb-share": { name: "Facebook Shared Post", w: 1200, h: 630, ratio: "1.91:1", desc: "Feed image sharing standard size" },
    "x-post": { name: "X (Twitter) Feed Post", w: 1200, h: 675, ratio: "16:9", desc: "Standard horizontal post format" },
    "x-header": { name: "X (Twitter) Profile Header", w: 1500, h: 500, ratio: "3:1", desc: "Banner layout header at 3:1 aspect ratio" },
    "li-share": { name: "LinkedIn Shared Post", w: 1200, h: 627, ratio: "1.91:1", desc: "Timeline shared image dimensions" }
  };

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
      setImgW(0);
      setImgH(0);
    }
  }, [file]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    imgRef.current = img;
    setImgW(img.naturalWidth);
    setImgH(img.naturalHeight);
  };

  useEffect(() => {
    if (imageSrc && imgW && imgH) {
      drawPreview();
    }
  }, [imageSrc, activePreset, imgW, imgH]);

  const drawPreview = () => {
    const canvas = canvasRef.current;
    if (!canvas || !imgRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const preset = presets[activePreset];

    canvas.width = imgW;
    canvas.height = imgH;

    // Draw main image
    ctx.drawImage(imgRef.current, 0, 0);

    // Calculate crop overlay coordinates
    // We center the target crop box on the image
    const targetRatio = preset.w / preset.h;
    const imgRatio = imgW / imgH;

    let cropBoxW = imgW;
    let cropBoxH = imgH;

    if (imgRatio > targetRatio) {
      // Image is wider than crop box aspect
      cropBoxW = imgH * targetRatio;
    } else {
      // Image is taller than crop box aspect
      cropBoxH = imgW / targetRatio;
    }

    const cropX = (imgW - cropBoxW) / 2;
    const cropY = (imgH - cropBoxH) / 2;

    // Draw dark shaded mask outside the crop box
    ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
    
    // Top mask
    ctx.fillRect(0, 0, imgW, cropY);
    // Bottom mask
    ctx.fillRect(0, cropY + cropBoxH, imgW, imgH - (cropY + cropBoxH));
    // Left mask
    ctx.fillRect(0, cropY, cropX, cropBoxH);
    // Right mask
    ctx.fillRect(cropX + cropBoxW, cropY, imgW - (cropX + cropBoxW), cropBoxH);

    // Draw crop box boundary line
    ctx.strokeStyle = "var(--accent)";
    ctx.lineWidth = Math.max(3, Math.round(imgW / 300));
    ctx.strokeRect(cropX, cropY, cropBoxW, cropBoxH);

    // Draw guide indicators in corners
    const guideSize = Math.max(15, Math.round(imgW / 40));
    ctx.fillStyle = "var(--accent)";
    // Top-Left corner guides
    ctx.fillRect(cropX - 2, cropY - 2, guideSize, 4);
    ctx.fillRect(cropX - 2, cropY - 2, 4, guideSize);
    // Top-Right corner guides
    ctx.fillRect(cropX + cropBoxW - guideSize + 2, cropY - 2, guideSize, 4);
    ctx.fillRect(cropX + cropBoxW - 2, cropY - 2, 4, guideSize);
    // Bottom-Left corner guides
    ctx.fillRect(cropX - 2, cropY + cropBoxH - 2, guideSize, 4);
    ctx.fillRect(cropX - 2, cropY + cropBoxH - guideSize + 2, 4, guideSize);
    // Bottom-Right corner guides
    ctx.fillRect(cropX + cropBoxW - guideSize + 2, cropY + cropBoxH - 2, guideSize, 4);
    ctx.fillRect(cropX + cropBoxW - 2, cropY + cropBoxH - guideSize + 2, 4, guideSize);
  };

  const getStatus = () => {
    if (!file) return null;
    const preset = presets[activePreset];
    const isWOk = imgW >= preset.w;
    const isHOk = imgH >= preset.h;
    
    if (isWOk && isHOk) {
      return { label: "Passes Resolution Check", status: "success", text: "Excellent! Your image matches or exceeds the platform's resolution targets, meaning it won't look pixelated." };
    }
    return { label: "Low Resolution Alert", status: "warning", text: `Your image (${imgW}x${imgH}px) is smaller than the recommended size (${preset.w}x${preset.h}px). Uploading this graphic might result in blurry scaling.` };
  };

  const status = getStatus();

  return (
    <div className="card">
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/*"
          maxSizeMB={15}
          label="Upload post graphics to check cropping fit"
          description="Supports IG grid, TikTok covers, YouTube channel art formats."
        />
      ) : (
        <div className="flex flex-col gap-6">
          <div style={{ display: "none" }}>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Post size loader"
                onLoad={handleImageLoad}
              />
            )}
          </div>

          {/* Config preset selection */}
          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.25rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="preset-select">Select Target Platform Layout</label>
              <select
                id="preset-select"
                value={activePreset}
                onChange={(e) => setActivePreset(e.target.value)}
                className="form-control form-select"
              >
                {Object.entries(presets).map(([key, val]) => (
                  <option key={key} value={key}>{val.name} ({val.ratio})</option>
                ))}
              </select>
            </div>
            
            <p className="text-muted" style={{ fontSize: "0.85rem", marginTop: "0.75rem", marginBottom: 0 }}>
              <strong>Description:</strong> {presets[activePreset].desc} (Target size: {presets[activePreset].w}x{presets[activePreset].h}px).
            </p>
          </div>

          {/* Verification banner details */}
          {status && (
            <div
              className="card"
              style={{
                backgroundColor: status.status === "success" ? "var(--success-light)" : "var(--warning-light)",
                borderColor: status.status === "success" ? "var(--success)" : "var(--warning)",
                borderStyle: "solid",
                padding: "1rem"
              }}
            >
              <strong style={{ color: status.status === "success" ? "var(--success)" : "var(--warning)" }}>
                {status.label}
              </strong>
              <p style={{ margin: 0, fontSize: "0.85rem", marginTop: "0.25rem" }}>{status.text}</p>
            </div>
          )}

          {/* Canvas frame container */}
          <div className="flex flex-col gap-2">
            <span className="form-label text-center">Cropping Bounds Simulator (Widescreen Overlay)</span>
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
              <canvas
                ref={canvasRef}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            </div>
            <p className="text-muted text-center" style={{ fontSize: "0.8rem", margin: 0 }}>
              The unshaded central box represents the crop area that will display on the social network.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex-actions">
            <button className="btn btn-secondary" onClick={() => setFile(null)}>
              Check Another Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

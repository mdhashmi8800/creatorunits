"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function ImageCropper() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  
  const [imgWidth, setImgWidth] = useState<number>(0);
  const [imgHeight, setImgHeight] = useState<number>(0);
  
  const [cropX, setCropX] = useState<number>(0);
  const [cropY, setCropY] = useState<number>(0);
  const [cropW, setCropW] = useState<number>(100);
  const [cropH, setCropH] = useState<number>(100);
  
  const [croppedSrc, setCroppedSrc] = useState<string>("");
  const [aspectPreset, setAspectPreset] = useState<string>("free");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
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
    } else {
      setImageSrc("");
      setCroppedSrc("");
      setImgWidth(0);
      setImgHeight(0);
    }
  }, [file]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    imgRef.current = img;
    setImgWidth(img.naturalWidth);
    setImgHeight(img.naturalHeight);
    
    // Set initial crop to a centered box (80% of min dimension)
    const minDim = Math.min(img.naturalWidth, img.naturalHeight);
    const initialSize = Math.round(minDim * 0.8);
    setCropW(initialSize);
    setCropH(initialSize);
    setCropX(Math.round((img.naturalWidth - initialSize) / 2));
    setCropY(Math.round((img.naturalHeight - initialSize) / 2));
    setAspectPreset("1:1");
  };

  useEffect(() => {
    if (imageSrc && imgWidth && imgHeight) {
      drawCropPreview();
    }
  }, [imageSrc, cropX, cropY, cropW, cropH, imgWidth, imgHeight]);

  const drawCropPreview = () => {
    const canvas = previewCanvasRef.current;
    if (!canvas || !imgRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw original image scaled on preview canvas
    canvas.width = imgWidth;
    canvas.height = imgHeight;
    ctx.drawImage(imgRef.current, 0, 0);

    // Draw overlay tint
    ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw clear crop box segment
    ctx.drawImage(
      imgRef.current,
      cropX, cropY, cropW, cropH, // Source
      cropX, cropY, cropW, cropH  // Destination
    );

    // Draw crop border box outline
    ctx.strokeStyle = "var(--accent)";
    ctx.lineWidth = Math.max(4, Math.round(imgWidth / 250)); // Scaled border width
    ctx.strokeRect(cropX, cropY, cropW, cropH);
  };

  const applyPreset = (preset: string) => {
    setAspectPreset(preset);
    if (!imgWidth || !imgHeight) return;

    let targetW = cropW;
    let targetH = cropH;

    if (preset === "1:1") {
      const minDim = Math.min(imgWidth, imgHeight);
      targetW = Math.round(minDim * 0.8);
      targetH = targetW;
    } else if (preset === "16:9") {
      if (imgWidth * 9 > imgHeight * 16) {
        targetH = Math.round(imgHeight * 0.8);
        targetW = Math.round(targetH * (16 / 9));
      } else {
        targetW = Math.round(imgWidth * 0.8);
        targetH = Math.round(targetW * (9 / 16));
      }
    } else if (preset === "4:3") {
      if (imgWidth * 3 > imgHeight * 4) {
        targetH = Math.round(imgHeight * 0.8);
        targetW = Math.round(targetH * (4 / 3));
      } else {
        targetW = Math.round(imgWidth * 0.8);
        targetH = Math.round(targetW * (3 / 4));
      }
    }

    setCropW(targetW);
    setCropH(targetH);
    setCropX(Math.round((imgWidth - targetW) / 2));
    setCropY(Math.round((imgHeight - targetH) / 2));
  };

  const handleWChange = (val: number) => {
    const nextW = Math.min(val, imgWidth - cropX);
    setCropW(nextW);
    if (aspectPreset === "1:1") {
      setCropH(nextW);
    } else if (aspectPreset === "16:9") {
      setCropH(Math.min(Math.round(nextW * (9 / 16)), imgHeight - cropY));
    } else if (aspectPreset === "4:3") {
      setCropH(Math.min(Math.round(nextW * (3 / 4)), imgHeight - cropY));
    }
  };

  const handleHChange = (val: number) => {
    const nextH = Math.min(val, imgHeight - cropY);
    setCropH(nextH);
    if (aspectPreset === "1:1") {
      setCropW(nextH);
    } else if (aspectPreset === "16:9") {
      setCropW(Math.min(Math.round(nextH * (16 / 9)), imgWidth - cropX));
    } else if (aspectPreset === "4:3") {
      setCropW(Math.min(Math.round(nextH * (4 / 3)), imgWidth - cropX));
    }
  };

  const performCrop = () => {
    if (!imgRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = cropW;
    canvas.height = cropH;

    ctx.drawImage(
      imgRef.current,
      cropX, cropY, cropW, cropH,
      0, 0, cropW, cropH
    );

    const croppedUrl = canvas.toDataURL(file?.type || "image/png");
    setCroppedSrc(croppedUrl);

    // Automatically trigger local file download
    const link = document.createElement("a");
    link.href = croppedUrl;
    const ext = file?.type.split("/")[1] || "png";
    const originalName = file?.name.substring(0, file.name.lastIndexOf(".")) || "image";
    link.download = `${originalName}-cropped.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast("Cropped image downloaded successfully!", "success");
  };

  return (
    <div className="card">
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {!file ? (
        <FileUpload
          onFileSelect={(f) => setFile(f)}
          accept="image/*"
          maxSizeMB={20}
          label="Upload your image to crop"
          description="Drag photos or screenshot layouts here."
        />
      ) : (
        <div className="flex flex-col gap-6">
          <div style={{ display: "none" }}>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Crop master loader"
                onLoad={handleImageLoad}
              />
            )}
          </div>

          {/* Grid Panel Controls */}
          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
            <div className="grid-cols-2" style={{ gap: "2rem" }}>
              <div className="flex flex-col gap-4">
                <span className="form-label">Crop Aspect Ratio</span>
                <div className="flex" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
                  <button
                    className={`btn ${aspectPreset === "free" ? "btn-primary" : "btn-secondary"} btn-sm`}
                    onClick={() => applyPreset("free")}
                  >
                    Freeform
                  </button>
                  <button
                    className={`btn ${aspectPreset === "1:1" ? "btn-primary" : "btn-secondary"} btn-sm`}
                    onClick={() => applyPreset("1:1")}
                  >
                    1:1 Square
                  </button>
                  <button
                    className={`btn ${aspectPreset === "16:9" ? "btn-primary" : "btn-secondary"} btn-sm`}
                    onClick={() => applyPreset("16:9")}
                  >
                    16:9 Widescreen
                  </button>
                  <button
                    className={`btn ${aspectPreset === "4:3" ? "btn-primary" : "btn-secondary"} btn-sm`}
                    onClick={() => applyPreset("4:3")}
                  >
                    4:3 Portrait
                  </button>
                </div>
              </div>

              {/* Offset Adjusters */}
              <div className="flex flex-col gap-2">
                <span className="form-label">Offset Controls</span>
                <div className="grid-cols-2" style={{ gap: "1rem" }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.8rem" }} htmlFor="crop-x">X Position</label>
                    <input
                      id="crop-x"
                      type="range"
                      min="0"
                      max={imgWidth - cropW}
                      value={cropX}
                      onChange={(e) => setCropX(Number(e.target.value))}
                      style={{ width: "100%", accentColor: "var(--accent)" }}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" style={{ fontSize: "0.8rem" }} htmlFor="crop-y">Y Position</label>
                    <input
                      id="crop-y"
                      type="range"
                      min="0"
                      max={imgHeight - cropH}
                      value={cropY}
                      onChange={(e) => setCropY(Number(e.target.value))}
                      style={{ width: "100%", accentColor: "var(--accent)" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid var(--border-color)", margin: "1.25rem 0" }} />

            {/* Slider Dimensions */}
            <div className="grid-cols-2" style={{ gap: "2rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="crop-w">Crop Width: {cropW}px</label>
                <input
                  id="crop-w"
                  type="range"
                  min="20"
                  max={imgWidth - cropX}
                  value={cropW}
                  onChange={(e) => handleWChange(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--accent)" }}
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="crop-h">Crop Height: {cropH}px</label>
                <input
                  id="crop-h"
                  type="range"
                  min="20"
                  max={imgHeight - cropY}
                  value={cropH}
                  onChange={(e) => handleHChange(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--accent)" }}
                />
              </div>
            </div>
          </div>

          {/* Cropper Canvas Frame */}
          <div className="flex flex-col gap-2">
            <span className="form-label text-center">Adjust Crop Frame Selection</span>
            <div
              style={{
                border: "1px solid var(--border-color)",
                borderRadius: "var(--border-radius-md)",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "350px",
                backgroundColor: "#1e293b",
                overflow: "hidden"
              }}
            >
              <canvas
                ref={previewCanvasRef}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex" style={{ gap: "1rem", justifyContent: "flex-end" }}>
            <button className="btn btn-secondary" onClick={() => setFile(null)}>
              Cancel
            </button>
            <button className="btn btn-primary" onClick={performCrop}>
              Crop & Download Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

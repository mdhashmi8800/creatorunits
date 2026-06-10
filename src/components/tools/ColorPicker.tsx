"use client";

import React, { useState, useEffect, useRef } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function ColorPicker() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  const [hoverColor, setHoverColor] = useState<string>("#ffffff");
  const [selectedColor, setSelectedColor] = useState<string>("#6366f1");
  const [palette, setPalette] = useState<string[]>(["#6366f1", "#10b981", "#ef4444", "#f59e0b", "#1e293b"]);
  
  const [eyeDropperSupported, setEyeDropperSupported] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Check if EyeDropper API is supported
    if (typeof window !== "undefined" && "EyeDropper" in window) {
      setEyeDropperSupported(true);
    }
  }, []);

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
    }
  }, [file]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    imgRef.current = img;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw full size to canvas
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);

    try {
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);
      setHoverColor(hex);
    } catch (err) {
      // Ignore cross-origin canvas errors if they occur (should not since we load base64 dataUrl)
    }
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);

    try {
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);
      setSelectedColor(hex);
      addToPalette(hex);
      copyToClipboard(hex, "Copied color hex code!");
    } catch (err) {}
  };

  const useNativeEyeDropper = async () => {
    if (!eyeDropperSupported) return;
    try {
      // @ts-ignore
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      const hex = result.sRGBHex;
      setSelectedColor(hex);
      addToPalette(hex);
      copyToClipboard(hex, "Copied color hex code!");
    } catch (err) {
      // User cancelled selection or error occurred
    }
  };

  const addToPalette = (color: string) => {
    if (!palette.includes(color)) {
      setPalette((prev) => [color, ...prev.slice(0, 11)]); // Keep max 12 items
    }
  };

  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + [r, g, b].map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }).join("");
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : "0, 0, 0";
  };

  const copyToClipboard = (text: string, msg: string) => {
    navigator.clipboard.writeText(text);
    showToast(msg, "success");
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2rem" }}>
        
        {/* Left column: image uploader and picker canvas */}
        <div className="flex flex-col gap-4">
          {!file ? (
            <FileUpload
              onFileSelect={(f) => setFile(f)}
              accept="image/*"
              maxSizeMB={15}
              label="Upload image to sample colors"
              description="Upload a photo or screenshot to pick colors."
            />
          ) : (
            <div className="flex flex-col gap-4">
              <div style={{ display: "none" }}>
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Color picker source"
                    onLoad={handleImageLoad}
                  />
                )}
              </div>

              <span className="form-label">Hover & Click to Select Color</span>
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
                  overflow: "hidden",
                  position: "relative"
                }}
              >
                <canvas
                  ref={canvasRef}
                  onMouseMove={handleMouseMove}
                  onClick={handleCanvasClick}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    cursor: "crosshair"
                  }}
                />
              </div>

              <div className="flex justify-between">
                <button className="btn btn-secondary btn-sm" onClick={() => setFile(null)}>
                  Clear Image
                </button>
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      borderRadius: "50%",
                      backgroundColor: hoverColor,
                      border: "1px solid #ffffff",
                      boxShadow: "0 0 2px rgba(0,0,0,0.5)"
                    }}
                  />
                  <span style={{ fontSize: "0.85rem", fontFamily: "var(--font-geist-mono)" }}>
                    Hovering: {hoverColor}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right column: color dashboard and palette list */}
        <div className="flex flex-col gap-6">
          <div className="card text-center" style={{ padding: "1.5rem", borderStyle: "solid" }}>
            <span className="form-label">Active Selected Color</span>
            <div
              style={{
                height: "5rem",
                borderRadius: "var(--border-radius-md)",
                backgroundColor: selectedColor,
                marginBottom: "1rem",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            />

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                <span className="text-muted" style={{ fontSize: "0.9rem" }}>HEX Code</span>
                <strong
                  onClick={() => copyToClipboard(selectedColor, "HEX code copied!")}
                  style={{ cursor: "pointer", fontFamily: "var(--font-geist-mono)", fontSize: "1.1rem" }}
                  title="Click to copy HEX"
                >
                  {selectedColor} 📋
                </strong>
              </div>

              <div className="flex justify-between items-center" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                <span className="text-muted" style={{ fontSize: "0.9rem" }}>RGB Format</span>
                <strong
                  onClick={() => copyToClipboard(`rgb(${hexToRgb(selectedColor)})`, "RGB copied!")}
                  style={{ cursor: "pointer", fontFamily: "var(--font-geist-mono)", fontSize: "0.95rem" }}
                  title="Click to copy RGB"
                >
                  rgb({hexToRgb(selectedColor)}) 📋
                </strong>
              </div>
            </div>

            {eyeDropperSupported && (
              <button
                className="btn btn-primary w-full"
                style={{ marginTop: "1rem" }}
                onClick={useNativeEyeDropper}
              >
                🔍 Open Screen Eye-Dropper
              </button>
            )}
          </div>

          {/* Palette Dashboard */}
          <div>
            <span className="form-label">Color History / Saved Palette</span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "0.5rem",
                marginTop: "0.5rem"
              }}
            >
              {palette.map((color, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedColor(color);
                    copyToClipboard(color, "HEX code copied!");
                  }}
                  style={{
                    height: "2.75rem",
                    backgroundColor: color,
                    borderRadius: "var(--border-radius-sm)",
                    cursor: "pointer",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    border: color === selectedColor ? "3px solid var(--text-primary)" : "1px solid var(--border-color)"
                  }}
                  title={`Select and copy: ${color}`}
                />
              ))}
            </div>
            <p className="text-muted" style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>
              Click any swatch card above to restore its properties and copy its HEX value.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

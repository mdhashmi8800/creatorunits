"use client";

import React, { useState, useRef, useEffect } from "react";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function SvgConverter() {
  const { showToast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [fileSrc, setFileSrc] = useState<string>("");
  const [targetFormat, setTargetFormat] = useState<"png" | "jpg" | "svg">("png");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    return () => {
      if (fileSrc) URL.revokeObjectURL(fileSrc);
    };
  }, [fileSrc]);

  const handleFileSelect = (files: File[]) => {
    if (files.length === 0) return;
    const f = files[0];
    setFile(f);
    setFileSrc(URL.createObjectURL(f));

    // Guess logical output target
    if (f.name.endsWith(".svg")) {
      setTargetFormat("png");
    } else {
      setTargetFormat("svg");
    }
    showToast(`Loaded ${f.name}. Choose conversion format.`, "info");
  };

  const handleConvert = () => {
    if (!fileSrc || !file) return;
    setIsProcessing(true);

    const isInputSvg = file.name.endsWith(".svg");

    if (isInputSvg) {
      // SVG to PNG/JPG conversion
      const img = new Image();
      img.src = fileSrc;
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = img.naturalWidth || 500;
        canvas.height = img.naturalHeight || 500;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Paint white background if format is JPG
        if (targetFormat === "jpg") {
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        try {
          const mime = targetFormat === "png" ? "image/png" : "image/jpeg";
          const dataUrl = canvas.toDataURL(mime, 0.92);
          triggerDownload(dataUrl, `${file.name.split(".")[0]}.${targetFormat}`);
          showToast(`SVG converted to ${targetFormat.toUpperCase()}!`, "success");
        } catch (err) {
          showToast("Failed to process conversion.", "error");
        } finally {
          setIsProcessing(false);
        }
      };
    } else {
      // PNG/JPG to inline SVG wrapping
      const img = new Image();
      img.src = fileSrc;
      img.onload = () => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64Data = e.target?.result as string;
          const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${img.naturalWidth} ${img.naturalHeight}" width="${img.naturalWidth}" height="${img.naturalHeight}">
  <image href="${base64Data}" width="${img.naturalWidth}" height="${img.naturalHeight}" />
</svg>`;

          const blob = new Blob([svgContent], { type: "image/svg+xml" });
          const url = URL.createObjectURL(blob);
          triggerDownload(url, `${file.name.split(".")[0]}.svg`);
          URL.revokeObjectURL(url);
          showToast("Raster converted to SVG wrapper!", "success");
          setIsProcessing(false);
        };
        reader.readAsDataURL(file);
      };
    }
  };

  const triggerDownload = (url: string, name: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        {!file ? (
          <FileUpload
            onFilesSelect={handleFileSelect}
            multiple={false}
            accept="image/png, image/jpeg, image/svg+xml"
            maxSizeMB={10}
            label="Upload SVG or PNG/JPG image to convert"
            description="Supports files up to 10MB. Conversion runs locally in the browser sandbox."
          />
        ) : (
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <span>Selected: <strong>{file.name}</strong></span>
              <button className="btn btn-secondary btn-sm" onClick={() => { setFile(null); setFileSrc(""); }}>
                Reset Image
              </button>
            </div>

            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="format-sel">Select Output Format</label>
                <select
                  id="format-sel"
                  value={targetFormat}
                  onChange={(e) => setTargetFormat(e.target.value as any)}
                  className="form-control form-select"
                >
                  {file.name.endsWith(".svg") ? (
                    <>
                      <option value="png">PNG (Raster image with transparency)</option>
                      <option value="jpg">JPG (Raster flattened image)</option>
                    </>
                  ) : (
                    <option value="svg">SVG (Vector container layout)</option>
                  )}
                </select>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h4 style={{ fontSize: "1rem", margin: 0 }}>Image Source Preview:</h4>
              <div style={{
                border: "1px dashed var(--border-color)",
                padding: "8px",
                borderRadius: "4px",
                backgroundColor: "var(--bg-secondary)",
                maxWidth: "100%",
                overflow: "hidden"
              }}>
                <img src={fileSrc} style={{ maxHeight: "300px", maxWidth: "100%", display: "block" }} alt="Source reference" />
              </div>

              <button
                className="btn btn-primary"
                onClick={handleConvert}
                disabled={isProcessing}
              >
                {isProcessing ? "⏳ Converting image..." : `⚡ Convert to ${targetFormat.toUpperCase()}`}
              </button>
            </div>

            {/* Hidden canvas for SVG raster drawing */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}
      </div>
    </div>
  );
}

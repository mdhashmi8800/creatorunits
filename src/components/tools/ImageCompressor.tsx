"use client";

import React, { useState, useEffect } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";
import { convertImage } from "@/lib/image";

interface CompressedItem {
  id: string;
  file: File;
  imageSrc: string;
  compressedSrc: string;
  originalSize: number;
  compressedSize: number;
  isProcessing: boolean;
  status: "idle" | "compressing" | "success" | "error";
  errorMsg?: string;
}

export default function ImageCompressor() {
  const { showToast } = useToast();
  const [items, setItems] = useState<CompressedItem[]>([]);
  const [quality, setQuality] = useState<number>(80);
  const [outputFormat, setOutputFormat] = useState<string>("image/jpeg");

  const handleFilesSelect = (files: File[]) => {
    const newItems = files.map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      imageSrc: "",
      compressedSrc: "",
      originalSize: file.size,
      compressedSize: 0,
      isProcessing: false,
      status: "idle" as const,
    }));
    setItems((prev) => [...prev, ...newItems]);
  };

  useEffect(() => {
    const processNext = async () => {
      const nextItem = items.find((item) => item.status === "idle");
      if (!nextItem) return;

      // Update to processing state
      setItems((prev) =>
        prev.map((item) =>
          item.id === nextItem.id ? { ...item, status: "compressing", isProcessing: true } : item
        )
      );

      try {
        // Read file contents
        const imageSrc = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.onerror = () => reject(new Error("Failed to read image file."));
          reader.readAsDataURL(nextItem.file);
        });

        // 80ms paint buffer to let browser render loading spinner/state
        await new Promise((resolve) => setTimeout(resolve, 80));

        // Use unified helper to convert/compress
        const format = outputFormat === "image/png" ? nextItem.file.type : outputFormat;
        const result = await convertImage(imageSrc, { outputType: format, quality });

        // Retrieve compressed size from blob
        let compSize = nextItem.file.size;
        if (result.blob) {
          compSize = result.blob.size;
        } else {
          // Approximate base64 dataURL size in bytes
          const base64Length = result.dataUrl.split(",")[1].length;
          compSize = Math.round(base64Length * 0.75);
        }

        setItems((prev) =>
          prev.map((item) =>
            item.id === nextItem.id
              ? {
                  ...item,
                  imageSrc,
                  compressedSrc: result.objectUrl,
                  compressedSize: compSize,
                  status: "success",
                  isProcessing: false,
                }
              : item
          )
        );
      } catch (err: any) {
        setItems((prev) =>
          prev.map((item) =>
            item.id === nextItem.id
              ? {
                  ...item,
                  status: "error",
                  isProcessing: false,
                  errorMsg: err.message || "Failed to compress.",
                }
              : item
          )
        );
        showToast(`Failed to compress ${nextItem.file.name}`, "error");
      }
    };

    processNext();
  }, [items, quality, outputFormat, showToast]);

  const handleDownload = (item: CompressedItem) => {
    if (!item.compressedSrc) return;
    const extension = outputFormat.split("/")[1] || "jpg";
    const originalName = item.file.name.substring(0, item.file.name.lastIndexOf(".")) || "image";

    const link = document.createElement("a");
    link.href = item.compressedSrc;
    link.download = `${originalName}-compressed.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Downloaded compressed copy of ${item.file.name}`, "success");
  };

  const handleDownloadAll = () => {
    const successItems = items.filter((item) => item.status === "success");
    if (successItems.length === 0) return;

    const extension = outputFormat.split("/")[1] || "jpg";
    successItems.forEach((item, index) => {
      setTimeout(() => {
        const originalName = item.file.name.substring(0, item.file.name.lastIndexOf(".")) || "image";
        const link = document.createElement("a");
        link.href = item.compressedSrc;
        link.download = `${originalName}-compressed.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 250); // Delay slightly to avoid browser file download throttles
    });

    showToast(`Downloading all ${successItems.length} compressed files...`, "success");
  };

  const handleReset = () => {
    // Revoke object URLs to clear browser memory leaks
    items.forEach((item) => {
      if (item.compressedSrc && item.compressedSrc.startsWith("blob:")) {
        URL.revokeObjectURL(item.compressedSrc);
      }
    });
    setItems([]);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const savingPercentage = (original: number, compressed: number) => {
    if (original === 0 || compressed === 0) return 0;
    const savings = ((original - compressed) / original) * 100;
    return Math.max(0, parseFloat(savings.toFixed(0)));
  };

  const pendingCount = items.filter((item) => item.status === "idle" || item.status === "compressing").length;
  const successCount = items.filter((item) => item.status === "success").length;

  return (
    <div className="card">
      {items.length === 0 ? (
        <FileUpload
          onFilesSelect={handleFilesSelect}
          multiple={true}
          accept="image/png, image/jpeg, image/jpg, image/webp"
          maxSizeMB={20}
          label="Upload your images to compress"
          description="Supports PNG, JPG, JPEG, and WebP up to 20MB. Done 100% locally in your browser."
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
                  onChange={(e) => {
                    const nextQuality = Number(e.target.value);
                    setQuality(nextQuality);
                    // Mark all items as idle so they re-compress with the new quality
                    setItems((prev) =>
                      prev.map((item) => ({
                        ...item,
                        status: "idle",
                        compressedSrc: "",
                        compressedSize: 0,
                      }))
                    );
                  }}
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
                  onChange={(e) => {
                    const nextFormat = e.target.value;
                    setOutputFormat(nextFormat);
                    // Mark all items as idle so they re-compress with the new output format
                    setItems((prev) =>
                      prev.map((item) => ({
                        ...item,
                        status: "idle",
                        compressedSrc: "",
                        compressedSize: 0,
                      }))
                    );
                  }}
                  className="form-control form-select"
                >
                  <option value="image/jpeg">JPG / JPEG (Best for photos)</option>
                  <option value="image/webp">WebP (Best for modern web, supports opacity)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Batch list panel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              maxHeight: "350px",
              overflowY: "auto",
              paddingRight: "0.25rem",
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1rem",
                  backgroundColor: "var(--bg-tertiary)",
                  borderRadius: "var(--border-radius-md)",
                  border: "1px solid var(--border-color)",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                {/* Thumb + Name */}
                <div className="flex items-center gap-3" style={{ minWidth: "220px", flex: 1 }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "var(--border-radius-sm)",
                      backgroundColor: "#1e293b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    {item.imageSrc ? (
                      <img
                        src={item.imageSrc}
                        alt={item.file.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    ) : (
                      <span style={{ fontSize: "0.7rem", color: "white" }}>IMG</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        maxWidth: "180px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      title={item.file.name}
                    >
                      {item.file.name}
                    </span>
                    <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                      Original: {formatSize(item.originalSize)}
                    </span>
                  </div>
                </div>

                {/* Savings info */}
                <div style={{ minWidth: "120px", display: "flex", flexDirection: "column" }}>
                  {item.status === "success" && (
                    <>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--success)" }}>
                        {formatSize(item.compressedSize)}
                      </span>
                      <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                        Saved {savingPercentage(item.originalSize, item.compressedSize)}%
                      </span>
                    </>
                  )}
                  {item.status === "compressing" && (
                    <span style={{ fontSize: "0.8rem", color: "var(--warning)" }}>
                      ⏳ Compressing...
                    </span>
                  )}
                  {item.status === "idle" && (
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                      Queued
                    </span>
                  )}
                  {item.status === "error" && (
                    <span style={{ fontSize: "0.8rem", color: "var(--error)" }}>
                      ✕ Failed
                    </span>
                  )}
                </div>

                {/* Downloader action */}
                <div className="flex items-center">
                  <button
                    className="btn btn-secondary btn-sm"
                    disabled={item.status !== "success"}
                    onClick={() => handleDownload(item)}
                    style={{ padding: "0.3rem 0.75rem" }}
                  >
                    📥 Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex-actions">
            <button className="btn btn-secondary" onClick={handleReset}>
              Reset & Compress More
            </button>
            <button
              className="btn btn-primary"
              disabled={successCount === 0}
              onClick={handleDownloadAll}
            >
              📥 Download All Compressed ({successCount})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

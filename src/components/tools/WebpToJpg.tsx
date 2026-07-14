"use client";

import React, { useState, useEffect } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";
import { convertImage } from "@/lib/image";

interface ImageItem {
  id: string;
  file: File;
  imageSrc: string;
  convertedSrc: string;
  isProcessing: boolean;
  status: "idle" | "converting" | "success" | "error";
  errorMsg?: string;
}

export default function WebpToJpg() {
  const { showToast } = useToast();
  const [items, setItems] = useState<ImageItem[]>([]);
  const [quality, setQuality] = useState<number>(90);

  const handleFilesSelect = (files: File[]) => {
    const newItems = files.map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      imageSrc: "",
      convertedSrc: "",
      isProcessing: false,
      status: "idle" as const,
    }));
    setItems((prev) => [...prev, ...newItems]);
  };

  // Re-run conversions if quality setting is adjusted by the user
  const triggerReconvert = (itemId: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, status: "idle" } : item))
    );
  };

  useEffect(() => {
    const processNext = async () => {
      const nextItem = items.find((item) => item.status === "idle");
      if (!nextItem) return;

      // Update item to converting
      setItems((prev) =>
        prev.map((item) =>
          item.id === nextItem.id ? { ...item, status: "converting", isProcessing: true } : item
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

        // Use unified helper to convert WebP to JPEG (fills background transparent areas with white)
        const result = await convertImage(imageSrc, { outputType: "image/jpeg", quality });

        setItems((prev) =>
          prev.map((item) =>
            item.id === nextItem.id
              ? {
                  ...item,
                  imageSrc,
                  convertedSrc: result.objectUrl,
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
                  errorMsg: err.message || "Failed to convert.",
                }
              : item
          )
        );
        showToast(`Failed to convert ${nextItem.file.name}`, "error");
      }
    };

    processNext();
  }, [items, quality, showToast]);

  const handleDownload = (item: ImageItem) => {
    if (!item.convertedSrc) return;
    const originalName = item.file.name.substring(0, item.file.name.lastIndexOf(".")) || "image";

    const link = document.createElement("a");
    link.href = item.convertedSrc;
    link.download = `${originalName}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Downloaded JPG for ${item.file.name}`, "success");
  };

  const handleDownloadAll = () => {
    const successItems = items.filter((item) => item.status === "success");
    if (successItems.length === 0) return;

    successItems.forEach((item, index) => {
      setTimeout(() => {
        const originalName = item.file.name.substring(0, item.file.name.lastIndexOf(".")) || "image";
        const link = document.createElement("a");
        link.href = item.convertedSrc;
        link.download = `${originalName}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 250); // Delay slightly to avoid browser file download throttles
    });

    showToast(`Downloading all ${successItems.length} JPG images...`, "success");
  };

  const handleReset = () => {
    // Revoke object URLs to clear browser memory leaks
    items.forEach((item) => {
      if (item.convertedSrc && item.convertedSrc.startsWith("blob:")) {
        URL.revokeObjectURL(item.convertedSrc);
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

  const pendingCount = items.filter((item) => item.status === "idle" || item.status === "converting").length;
  const successCount = items.filter((item) => item.status === "success").length;

  return (
    <div className="card">
      {items.length === 0 ? (
        <FileUpload
          onFilesSelect={handleFilesSelect}
          multiple={true}
          accept="image/webp"
          maxSizeMB={15}
          label="Upload WebP images to convert"
          description="Supports drag and drop or batch selections up to 15MB. Done 100% locally."
        />
      ) : (
        <div className="flex flex-col gap-6">
          {/* Quality config panel */}
          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
            <div className="grid-cols-2" style={{ gap: "2rem", alignItems: "center" }}>
              <p className="text-muted" style={{ marginBottom: 0, fontSize: "0.9rem" }}>
                Converting <strong>{items.length} WebP files</strong> to JPG format. Transparent background regions will resolve to solid white.
              </p>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="webp-quality-slider">
                  Output JPG Quality: {quality}%
                </label>
                <input
                  id="webp-quality-slider"
                  type="range"
                  min="50"
                  max="100"
                  value={quality}
                  onChange={(e) => {
                    const nextQuality = Number(e.target.value);
                    setQuality(nextQuality);
                    // Mark all items as idle so they re-convert with new quality settings
                    setItems((prev) =>
                      prev.map((item) => ({
                        ...item,
                        status: "idle",
                        convertedSrc: "",
                      }))
                    );
                  }}
                  style={{ width: "100%", accentColor: "var(--accent)" }}
                />
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
                <div className="flex items-center gap-3" style={{ minWidth: "200px", flex: 1 }}>
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
                      <span style={{ fontSize: "0.85rem", color: "white" }}>WebP</span>
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
                      {formatSize(item.file.size)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {item.status === "converting" && (
                    <span style={{ fontSize: "0.8rem", color: "var(--warning)" }}>
                      ⏳ Processing...
                    </span>
                  )}
                  {item.status === "success" && (
                    <span style={{ fontSize: "0.8rem", color: "var(--success)" }}>
                      ✓ Ready
                    </span>
                  )}
                  {item.status === "error" && (
                    <span style={{ fontSize: "0.8rem", color: "var(--error)" }}>
                      ✕ Failed
                    </span>
                  )}

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

          <div className="flex-actions">
            <button className="btn btn-secondary" onClick={handleReset}>
              Convert More
            </button>
            <button
              className="btn btn-primary"
              disabled={successCount === 0}
              onClick={handleDownloadAll}
            >
              📥 Download All JPGs ({successCount})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

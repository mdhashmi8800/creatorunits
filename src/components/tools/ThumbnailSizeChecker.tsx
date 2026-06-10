"use client";

import React, { useState } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

interface ValidationResult {
  passed: boolean;
  label: string;
  currentValue: string;
  recommendation: string;
}

export default function ThumbnailSizeChecker() {
  const { showToast } = useToast();
  
  const [file, setFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");
  
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [fileSize, setFileSize] = useState<number>(0);
  const [fileType, setFileType] = useState<string>("");

  const handleFileSelect = (f: File) => {
    setFile(f);
    setFileSize(f.size);
    setFileType(f.type);

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImageSrc(e.target.result as string);
        
        const img = new Image();
        img.src = e.target.result as string;
        img.onload = () => {
          setWidth(img.width);
          setHeight(img.height);
          showToast("Image dimensions extracted successfully!", "success");
        };
      }
    };
    reader.readAsDataURL(f);
  };

  const getValidations = (): ValidationResult[] => {
    if (!file) return [];

    const isFormatOk = ["image/jpeg", "image/png", "image/webp"].includes(fileType);
    const isSizeOk = fileSize <= 2 * 1024 * 1024;
    const isDimensionsOk = width >= 640 && width <= 2560 && height >= 360 && height <= 1440;
    
    // Check for 16:9 aspect ratio (~1.77)
    const ratio = width / height;
    const isRatioOk = Math.abs(ratio - 16 / 9) < 0.05;

    const readableType = fileType.split("/")[1]?.toUpperCase() || "Unknown";
    const formattedSize = (fileSize / (1024 * 1024)).toFixed(2) + " MB";

    return [
      {
        label: "File Format",
        passed: isFormatOk,
        currentValue: readableType,
        recommendation: "YouTube recommends JPG, PNG, or WebP formats."
      },
      {
        label: "File Size Limit",
        passed: isSizeOk,
        currentValue: formattedSize,
        recommendation: "YouTube has a strict 2.00 MB limit. Optimize the image to fit."
      },
      {
        label: "Dimensions (1280x720 recommended)",
        passed: isDimensionsOk,
        currentValue: `${width} x ${height} px`,
        recommendation: "Resolution should be at least 640px wide. 1280x720 is optimal."
      },
      {
        label: "Aspect Ratio (16:9 recommended)",
        passed: isRatioOk,
        currentValue: ratio ? `${width}:${height} (Ratio: ${ratio.toFixed(2)})` : "N/A",
        recommendation: "YouTube thumbnails must be widescreen 16:9 aspect to avoid black bars."
      }
    ];
  };

  const overallPass = getValidations().every((v) => v.passed);

  return (
    <div className="card">
      {!file ? (
        <FileUpload
          onFileSelect={handleFileSelect}
          accept="image/*"
          maxSizeMB={15}
          label="Upload your thumbnail to check sizes"
          description="Supports JPEG, PNG, WebP up to 15MB."
        />
      ) : (
        <div className="flex flex-col gap-6">
          
          {/* Status summary banner */}
          <div
            className="card text-center"
            style={{
              backgroundColor: overallPass ? "var(--success-light)" : "var(--error-light)",
              borderColor: overallPass ? "var(--success)" : "var(--error)",
              padding: "1.5rem",
              borderStyle: "solid"
            }}
          >
            <h3 style={{ color: overallPass ? "var(--success)" : "var(--error)", marginBottom: "0.25rem" }}>
              {overallPass ? "✓ Perfect Optimization!" : "⚠ Corrections Needed"}
            </h3>
            <p style={{ margin: 0, fontWeight: 500 }}>
              {overallPass
                ? "Your thumbnail complies with all YouTube upload rules and guidelines."
                : "This image contains parameters that exceed or violate YouTube requirements."}
            </p>
          </div>

          <div className="grid-cols-2" style={{ gap: "2rem" }}>
            
            {/* Checklist results */}
            <div className="flex flex-col gap-4">
              <span className="form-label" style={{ fontSize: "1.05rem" }}>Validation Checklist</span>
              <div className="flex flex-col gap-3">
                {getValidations().map((val, idx) => (
                  <div
                    key={idx}
                    className="card flex"
                    style={{
                      borderStyle: "solid",
                      borderColor: val.passed ? "var(--border-color)" : "var(--error)",
                      padding: "1rem",
                      gap: "0.75rem",
                      alignItems: "flex-start"
                    }}
                  >
                    <span
                      style={{
                        color: val.passed ? "var(--success)" : "var(--error)",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        lineHeight: "1"
                      }}
                    >
                      {val.passed ? "✓" : "✕"}
                    </span>
                    <div className="flex flex-col" style={{ gap: "2px" }}>
                      <strong style={{ fontSize: "0.95rem" }}>{val.label}</strong>
                      <span style={{ fontSize: "0.85rem" }}>
                        Current Value: <strong>{val.currentValue}</strong>
                      </span>
                      {!val.passed && (
                        <span style={{ fontSize: "0.8rem", color: "var(--error)", marginTop: "2px" }}>
                          ℹ {val.recommendation}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview image pane */}
            <div className="flex flex-col gap-2">
              <span className="form-label text-center">Image Upload Details</span>
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
                    alt="Uploaded size checker"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                  />
                )}
              </div>
              <p className="text-muted text-center" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>
                Name: <strong>{file.name}</strong>
              </p>
              <button
                className="btn btn-secondary w-full"
                style={{ marginTop: "0.5rem" }}
                onClick={() => {
                  setFile(null);
                  setImageSrc("");
                }}
              >
                Check Another File
              </button>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

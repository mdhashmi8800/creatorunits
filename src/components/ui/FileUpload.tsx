"use client";

import React, { useRef, useState } from "react";
import styles from "./FileUpload.module.css";
import { useToast } from "@/context/ToastContext";

interface FileUploadProps {
  onFileSelect?: (file: File) => void;
  onFilesSelect?: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  maxSizeMB?: number;
  label?: string;
  description?: string;
}

export default function FileUpload({
  onFileSelect,
  onFilesSelect,
  multiple = false,
  accept = "image/*",
  maxSizeMB = 10,
  label = "Drag & drop your file here",
  description = "or click to browse from your device",
}: FileUploadProps) {
  const { showToast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file: File | null): File | null => {
    if (!file) return null;

    // Type validation check
    const isAccepted = accept.split(",").some((type) => {
      const trimmed = type.trim();
      if (trimmed.startsWith("image/")) {
        return file.type.startsWith("image/");
      }
      if (trimmed.startsWith(".")) {
        return file.name.toLowerCase().endsWith(trimmed.toLowerCase());
      }
      return file.type === trimmed;
    });

    if (!isAccepted) {
      showToast(`Invalid file type. Please upload a file matching: ${accept}`, "error");
      return null;
    }

    // Size validation check
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      showToast(`File is too large. Maximum size is ${maxSizeMB}MB.`, "error");
      return null;
    }

    return file;
  };

  const processFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    if (multiple && onFilesSelect) {
      const validFiles: File[] = [];
      for (let i = 0; i < fileList.length; i++) {
        const validated = validateFile(fileList[i]);
        if (validated) {
          validFiles.push(validated);
        }
      }
      if (validFiles.length > 0) {
        onFilesSelect(validFiles);
      }
    } else if (fileList[0]) {
      const validated = validateFile(fileList[0]);
      if (validated && onFileSelect) {
        onFileSelect(validated);
      }
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      processFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className={`${styles.dropzone} ${dragActive ? styles.dragActive : ""}`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      onClick={onButtonClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onButtonClick();
        }
      }}
      aria-label={label}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        className={styles.hiddenInput}
        accept={accept}
        onChange={handleChange}
        tabIndex={-1}
      />
      <div className={styles.iconWrapper}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      </div>
      <h3 className={styles.title}>{label}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

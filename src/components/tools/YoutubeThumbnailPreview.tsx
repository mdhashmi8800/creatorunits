"use client";

import React, { useState, useEffect } from "react";
import FileUpload from "../ui/FileUpload";
import { useToast } from "@/context/ToastContext";

export default function YoutubeThumbnailPreview() {
  const { showToast } = useToast();
  
  const [thumbSrc, setThumbSrc] = useState<string>("");
  const [videoTitle, setVideoTitle] = useState<string>("My Awesome Video Title: Tips That Actually Work!");
  const [channelName, setChannelName] = useState<string>("Creator Channel");
  const [views, setViews] = useState<string>("120K views");
  const [timeSince, setTimeSince] = useState<string>("3 days ago");
  const [ytUrl, setYtUrl] = useState<string>("");
  
  const [grayscale, setGrayscale] = useState<boolean>(false);
  const [blurVal, setBlurVal] = useState<number>(0);

  const extractThumbnailUrl = (url: string) => {
    if (!url) return;
    
    // Extract video ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      const videoId = match[2];
      const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      setThumbSrc(thumb);
      showToast("YouTube thumbnail extracted successfully!", "success");
    } else {
      showToast("Invalid YouTube URL. Please enter a valid watch link.", "error");
    }
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setThumbSrc(e.target.result as string);
        showToast("Uploaded custom thumbnail preview.", "success");
      }
    };
    reader.readAsDataURL(file);
  };

  const getDiagnosticsStyle = () => {
    return {
      filter: `${grayscale ? "grayscale(100%)" : ""} blur(${blurVal}px)`,
      transition: "filter var(--transition-fast)"
    };
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left configuration input column */}
        <div className="flex flex-col gap-5">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Load Thumbnail Cover</span>
          
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="yt-url-input">Option A: Extract from YouTube URL</label>
            <div className="flex" style={{ gap: "0.5rem" }}>
              <input
                id="yt-url-input"
                type="text"
                value={ytUrl}
                onChange={(e) => setYtUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className="form-control"
              />
              <button className="btn btn-primary" onClick={() => extractThumbnailUrl(ytUrl)}>
                Extract
              </button>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <span className="form-label">Option B: Upload Custom Graphic</span>
            <FileUpload
              onFileSelect={handleFileUpload}
              accept="image/*"
              maxSizeMB={8}
              label="Select your custom thumbnail"
              description="Drop 16:9 images up to 8MB."
            />
          </div>

          <span className="form-label" style={{ fontSize: "1.1rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem", marginTop: "0.5rem" }}>
            Mock Details
          </span>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="preview-title">Mock Video Title</label>
            <input
              id="preview-title"
              type="text"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              className="form-control"
              maxLength={100}
            />
            <span className="text-muted" style={{ fontSize: "0.8rem" }}>
              Max 100 characters. Standard titles truncate after ~60-70 characters.
            </span>
          </div>

          <div className="grid-cols-2" style={{ gap: "1rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="channel-name">Channel Name</label>
              <input
                id="channel-name"
                type="text"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="views-count">Views & Time</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <input
                  id="views-count"
                  type="text"
                  value={views}
                  onChange={(e) => setViews(e.target.value)}
                  className="form-control"
                  style={{ width: "50%" }}
                />
                <input
                  type="text"
                  value={timeSince}
                  onChange={(e) => setTimeSince(e.target.value)}
                  className="form-control"
                  style={{ width: "50%" }}
                  aria-label="Upload time offset"
                />
              </div>
            </div>
          </div>

          {/* Diagnostic filters */}
          <div className="card" style={{ padding: "1rem", borderStyle: "solid", backgroundColor: "var(--bg-secondary)" }}>
            <span className="form-label" style={{ fontSize: "0.9rem" }}>Diagnostic checks</span>
            <div className="flex" style={{ gap: "1.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              <div className="flex items-center gap-2">
                <input
                  id="grayscale-toggle"
                  type="checkbox"
                  checked={grayscale}
                  onChange={(e) => setGrayscale(e.target.checked)}
                  style={{ cursor: "pointer", accentColor: "var(--accent)" }}
                />
                <label htmlFor="grayscale-toggle" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
                  Grayscale (Check Contrast)
                </label>
              </div>

              <div className="flex items-center gap-2" style={{ flex: "1 0 100%" }}>
                <label htmlFor="blur-slider" className="form-label" style={{ marginBottom: 0, whiteSpace: "nowrap" }}>
                  Blur check: {blurVal}px
                </label>
                <input
                  id="blur-slider"
                  type="range"
                  min="0"
                  max="15"
                  value={blurVal}
                  onChange={(e) => setBlurVal(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--accent)" }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right mockup simulation column */}
        <div className="flex flex-col gap-6" style={{ background: "#0f172a", borderRadius: "var(--border-radius-lg)", padding: "1.5rem", color: "#f8fafc" }}>
          <span className="form-label" style={{ color: "#f8fafc", fontSize: "1.1rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
            YouTube Simulation Feed Mockups
          </span>

          {/* Desktop Feed item */}
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: "600", textTransform: "uppercase" }}>
              Desktop Feed Grid (16:9 Card)
            </span>
            <div style={{ maxWidth: "340px", backgroundColor: "#0f172a" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  backgroundColor: "#1e293b",
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  ...getDiagnosticsStyle()
                }}
              >
                {thumbSrc ? (
                  <img src={thumbSrc} alt="Preview thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div className="flex-center" style={{ height: "100%", color: "#64748b" }}>16:9 Thumbnail</div>
                )}
                <div style={{ position: "absolute", bottom: "8px", right: "8px", background: "black", padding: "2px 4px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "bold" }}>
                  14:20
                </div>
              </div>

              <div className="flex" style={{ gap: "0.75rem", marginTop: "0.75rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#475569", flexShrink: 0 }} />
                <div className="flex flex-col" style={{ gap: "2px" }}>
                  <h4 style={{ fontSize: "0.9rem", color: "#f8fafc", lineHeight: "1.2", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", margin: 0 }}>
                    {videoTitle}
                  </h4>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{channelName}</span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{views} • {timeSince}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Result item */}
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: "600", textTransform: "uppercase" }}>
              Search Results Listing
            </span>
            <div className="flex" style={{ gap: "1rem", maxWidth: "450px" }}>
              <div
                style={{
                  width: "160px",
                  aspectRatio: "16/9",
                  backgroundColor: "#1e293b",
                  borderRadius: "6px",
                  overflow: "hidden",
                  flexShrink: 0,
                  ...getDiagnosticsStyle()
                }}
              >
                {thumbSrc ? (
                  <img src={thumbSrc} alt="Preview thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div className="flex-center" style={{ height: "100%", color: "#64748b", fontSize: "0.8rem" }}>16:9</div>
                )}
              </div>
              <div className="flex flex-col" style={{ gap: "4px" }}>
                <h4 style={{ fontSize: "0.85rem", color: "#f8fafc", lineHeight: "1.2", margin: 0, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                  {videoTitle}
                </h4>
                <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>{views} • {timeSince}</span>
                <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>{channelName}</span>
              </div>
            </div>
          </div>

          {/* Watch Sidebar item */}
          <div className="flex flex-col gap-3">
            <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: "600", textTransform: "uppercase" }}>
              Watch Next Sidebar Card
            </span>
            <div className="flex" style={{ gap: "0.5rem", maxWidth: "340px" }}>
              <div
                style={{
                  width: "120px",
                  aspectRatio: "16/9",
                  backgroundColor: "#1e293b",
                  borderRadius: "4px",
                  overflow: "hidden",
                  flexShrink: 0,
                  ...getDiagnosticsStyle()
                }}
              >
                {thumbSrc ? (
                  <img src={thumbSrc} alt="Preview thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div className="flex-center" style={{ height: "100%", color: "#64748b", fontSize: "0.75rem" }}>16:9</div>
                )}
              </div>
              <div className="flex flex-col" style={{ gap: "2px" }}>
                <h4 style={{ fontSize: "0.8rem", color: "#f8fafc", lineHeight: "1.2", margin: 0, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                  {videoTitle}
                </h4>
                <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>{channelName}</span>
                <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>{views}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

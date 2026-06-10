"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface ThumbnailSize {
  name: string;
  resolution: string;
  url: string;
  qualityKey: string;
}

export default function ThumbnailDownloader() {
  const { showToast } = useToast();
  const [ytUrl, setYtUrl] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const [extracted, setExtracted] = useState<boolean>(false);

  const extractVideoId = (url: string) => {
    if (!url) {
      showToast("Please enter a YouTube video URL first.", "warning");
      return;
    }
    
    // Regexp to catch video ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      setVideoId(match[2]);
      setExtracted(true);
      showToast("Video URL parsed successfully!", "success");
    } else {
      showToast("Could not parse YouTube video ID. Check video link format.", "error");
      setExtracted(false);
      setVideoId("");
    }
  };

  const getSizes = (): ThumbnailSize[] => {
    if (!videoId) return [];
    return [
      {
        name: "Maximum Resolution (HD / 1080p)",
        resolution: "1280 x 720",
        url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        qualityKey: "maxresdefault"
      },
      {
        name: "Standard Definition (HQ)",
        resolution: "640 x 480",
        url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        qualityKey: "sddefault"
      },
      {
        name: "Medium Resolution",
        resolution: "480 x 360",
        url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
        qualityKey: "mqdefault"
      },
      {
        name: "Default Quality",
        resolution: "120 x 90",
        url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
        qualityKey: "default"
      }
    ];
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Input box */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.5rem" }}>
          <label className="form-label" htmlFor="yt-link-downloader">Enter YouTube Video URL</label>
          <div className="flex gap-2">
            <input
              id="yt-link-downloader"
              type="text"
              value={ytUrl}
              onChange={(e) => setYtUrl(e.target.value)}
              placeholder="e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="form-control"
            />
            <button className="btn btn-primary" onClick={() => extractVideoId(ytUrl)}>
              Find Thumbnails
            </button>
          </div>
          <span className="text-muted" style={{ fontSize: "0.8rem", marginTop: "0.5rem", display: "block" }}>
            Supports shorts links, standard desktop watch URLs, sharing youtu.be links, and mobile links.
          </span>
        </div>

        {/* Thumbnail downloads grids */}
        {extracted && videoId && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--accent-light)", borderColor: "var(--accent)", padding: "1rem" }}>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                💡 <strong>How to Save:</strong> Click the <strong>Open Full Size</strong> button to open the image. Right-click (or long press on mobile) and select <strong>&quot;Save Image As...&quot;</strong> to download it to your device.
              </p>
            </div>

            <div className="grid-cols-2" style={{ gap: "2rem" }}>
              {getSizes().map((size) => (
                <div key={size.qualityKey} className="card flex flex-col gap-3" style={{ borderStyle: "solid" }}>
                  <div className="flex justify-between items-center">
                    <h4 style={{ fontSize: "0.95rem", margin: 0 }}>{size.name}</h4>
                    <span className="badge badge-accent" style={{ fontSize: "0.7rem" }}>{size.resolution}</span>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16/9",
                      backgroundColor: "#1e293b",
                      borderRadius: "var(--border-radius-md)",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--border-color)"
                    }}
                  >
                    <img
                      src={size.url}
                      alt={size.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        // Some videos do not have a maxresdefault resolution, fall back or show hidden
                        e.currentTarget.style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const errorDiv = document.createElement("div");
                          errorDiv.innerHTML = "Resolution format not generated by YouTube";
                          errorDiv.style.color = "var(--text-muted)";
                          errorDiv.style.fontSize = "0.85rem";
                          parent.appendChild(errorDiv);
                        }
                      }}
                    />
                  </div>

                  <a
                    href={size.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm text-center"
                    style={{ textDecoration: "none" }}
                  >
                    🔗 Open Full Size
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

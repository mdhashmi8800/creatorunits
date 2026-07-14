"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface TimestampItem {
  id: string;
  minutes: string;
  seconds: string;
  label: string;
}

export default function YoutubeTimestampGenerator() {
  const { showToast } = useToast();
  const [videoUrl, setVideoUrl] = useState<string>("https://www.youtube.com/watch?v=ysz5S6PUM-U");
  const [items, setItems] = useState<TimestampItem[]>([
    { id: "1", minutes: "0", seconds: "00", label: "Introduction" },
    { id: "2", minutes: "1", seconds: "45", label: "Setting up the project" },
    { id: "3", minutes: "5", seconds: "12", label: "Writing code templates" }
  ]);

  const [newMin, setNewMin] = useState<string>("");
  const [newSec, setNewSec] = useState<string>("");
  const [newLabel, setNewLabel] = useState<string>("");

  const handleAddItem = () => {
    const mins = parseInt(newMin) || 0;
    const secs = parseInt(newSec) || 0;
    if (secs < 0 || secs > 59) {
      showToast("Seconds must be between 0 and 59.", "error");
      return;
    }
    if (!newLabel.trim()) {
      showToast("Please enter a timestamp title label.", "error");
      return;
    }

    const newItem: TimestampItem = {
      id: Math.random().toString(36).substring(2, 9),
      minutes: mins.toString(),
      seconds: secs.toString().padStart(2, "0"),
      label: newLabel.trim()
    };

    setItems((prev) => [...prev, newItem].sort((a, b) => {
      const timeA = parseInt(a.minutes) * 60 + parseInt(a.seconds);
      const timeB = parseInt(b.minutes) * 60 + parseInt(b.seconds);
      return timeA - timeB;
    }));

    setNewMin("");
    setNewSec("");
    setNewLabel("");
    showToast("Timestamp chapter added!", "success");
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getYoutubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const generateChapterDescription = () => {
    return items
      .map((item) => `${item.minutes.padStart(2, "0")}:${item.seconds} - ${item.label}`)
      .join("\n");
  };

  const getTimedLink = (item: TimestampItem) => {
    const totalSeconds = parseInt(item.minutes) * 60 + parseInt(item.seconds);
    const videoId = getYoutubeVideoId(videoUrl);
    if (!videoId) return "#";
    return `https://youtu.be/${videoId}?t=${totalSeconds}`;
  };

  const handleCopyDescription = () => {
    const desc = generateChapterDescription();
    navigator.clipboard.writeText(desc);
    showToast("Formatted chapters list copied!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* Video URL Config */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="yt-v-url">YouTube Video URL:</label>
            <input
              id="yt-v-url"
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="form-control"
            />
          </div>
        </div>

        {/* Add timestamps item */}
        <div className="card" style={{ borderStyle: "dashed" }}>
          <h4 style={{ fontSize: "1rem", marginTop: 0, marginBottom: "0.75rem" }}>Add New Chapter Timestamp:</h4>
          
          <div className="grid-cols-3" style={{ gap: "1rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="ts-min">Minutes</label>
              <input
                id="ts-min"
                type="number"
                min="0"
                value={newMin}
                onChange={(e) => setNewMin(e.target.value)}
                placeholder="e.g. 1"
                className="form-control"
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="ts-sec">Seconds</label>
              <input
                id="ts-sec"
                type="number"
                min="0"
                max="59"
                value={newSec}
                onChange={(e) => setNewSec(e.target.value)}
                placeholder="e.g. 45"
                className="form-control"
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="ts-label">Chapter Title</label>
              <input
                id="ts-label"
                type="text"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                placeholder="e.g. Project Setup"
                className="form-control"
              />
            </div>
          </div>

          <button className="btn btn-primary w-full" style={{ marginTop: "1.25rem" }} onClick={handleAddItem}>
            ➕ Add Timestamp Chapter
          </button>
        </div>

        {/* List of items */}
        {items.length > 0 && (
          <div className="card flex flex-col gap-4" style={{ borderStyle: "solid" }}>
            <h4 style={{ fontSize: "1.1rem", margin: 0 }}>Chapters List:</h4>
            
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                  style={{
                    fontSize: "0.95rem",
                    padding: "0.5rem",
                    borderBottom: "1px solid var(--border-color)",
                    backgroundColor: "var(--bg-secondary)",
                    borderRadius: "4px"
                  }}
                >
                  <span>
                    <strong>{item.minutes.padStart(2, "0")}:{item.seconds}</strong> &mdash; {item.label}
                  </span>
                  
                  <div className="flex" style={{ gap: "0.5rem" }}>
                    {getYoutubeVideoId(videoUrl) && (
                      <a
                        href={getTimedLink(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                        style={{ padding: "0.15rem 0.4rem", fontSize: "0.75rem", textDecoration: "none" }}
                      >
                        🔗 Click Link
                      </a>
                    )}
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleRemoveItem(item.id)}
                      style={{ padding: "0.15rem 0.4rem", fontSize: "0.75rem" }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1rem" }}>
              <label className="form-label" htmlFor="yt-desc-out">YouTube Description Chapter format:</label>
              <textarea
                id="yt-desc-out"
                readOnly
                value={generateChapterDescription()}
                className="form-control"
                style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "var(--text-secondary)" }}
                rows={4}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn btn-primary" onClick={handleCopyDescription}>
                📋 Copy Chapters List
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function YoutubeTagExtractor() {
  const { showToast } = useToast();
  const [url, setUrl] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleExtract = async () => {
    if (!url) {
      showToast("Please enter a YouTube video URL.", "warning");
      return;
    }

    setIsLoading(true);
    setTags([]);
    setHasSearched(true);

    try {
      const res = await fetch("/api/youtube/tags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to extract tags");
      }

      if (data.tags && data.tags.length > 0) {
        setTags(data.tags);
        showToast(`Extracted ${data.tags.length} tags successfully!`, "success");
      } else {
        setTags([]);
        showToast("No tags found in this video's metadata.", "info");
      }
    } catch (err: any) {
      showToast(err.message || "Something went wrong.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const copyAll = () => {
    if (tags.length === 0) return;
    const text = tags.join(", ");
    navigator.clipboard.writeText(text);
    showToast("Copied all tags to clipboard!", "success");
  };

  const copyIndividual = (tag: string) => {
    navigator.clipboard.writeText(tag);
    showToast(`Copied "${tag}"`, "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Input box */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.5rem" }}>
          <label className="form-label" htmlFor="yt-tags-url">YouTube Video URL</label>
          <div className="flex gap-2">
            <input
              id="yt-tags-url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="form-control"
              disabled={isLoading}
            />
            <button className="btn btn-primary" onClick={handleExtract} disabled={isLoading}>
              {isLoading ? "Extracting..." : "Extract Tags"}
            </button>
          </div>
          <span className="text-muted" style={{ fontSize: "0.8rem", marginTop: "0.5rem", display: "block" }}>
            Paste any public YouTube video link. We will fetch and analyze its keywords.
          </span>
        </div>

        {/* Results */}
        {hasSearched && (
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.75rem" }}>
              <span className="form-label" style={{ marginBottom: 0 }}>
                Extracted Tags ({tags.length})
              </span>
              {tags.length > 0 && (
                <button className="btn btn-secondary btn-sm" onClick={copyAll}>
                  📋 Copy All (Comma-Separated)
                </button>
              )}
            </div>

            {isLoading ? (
              <div className="text-center" style={{ padding: "3rem 0" }}>
                <span className="text-muted">Loading and scraping tags from YouTube...</span>
              </div>
            ) : tags.length > 0 ? (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--border-radius-md)",
                    padding: "1.25rem"
                  }}
                >
                  {tags.map((tag, idx) => (
                    <div
                      key={idx}
                      onClick={() => copyIndividual(tag)}
                      style={{
                        padding: "0.4rem 0.75rem",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "var(--border-radius-sm)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        transition: "all var(--transition-fast)"
                      }}
                      title="Click to copy tag"
                      className="card-hover"
                    >
                      <span>{tag}</span>
                      <span style={{ opacity: 0.5, fontSize: "0.75rem" }}>📋</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted" style={{ fontSize: "0.8rem", marginTop: "0.75rem" }}>
                  💡 Click any tag card above to copy it individually. Use them to brainstorm related video terms.
                </p>
              </div>
            ) : (
              <div className="text-center" style={{ padding: "3rem 0" }}>
                <p className="text-muted" style={{ margin: 0 }}>
                  No tags detected. Some videos do not utilize meta tags, or video permissions may be restricted.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

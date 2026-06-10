"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface CategoryHashtags {
  name: string;
  tags: string[];
}

export default function HashtagHelper() {
  const { showToast } = useToast();
  
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customTag, setCustomTag] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories: CategoryHashtags[] = [
    {
      name: "Tech & Coding",
      tags: ["#programming", "#webdev", "#coding", "#javascript", "#developer", "#tech", "#software", "#css", "#html", "#reactjs", "#nextjs", "#ai", "#python", "#data"]
    },
    {
      name: "Gaming",
      tags: ["#gaming", "#gamer", "#letsplay", "#videogames", "#twitchstreamer", "#ps5", "#xbox", "#pcgaming", "#gameplay", "#streamer", "#esports"]
    },
    {
      name: "Business & Marketing",
      tags: ["#marketing", "#socialmedia", "#business", "#freelancer", "#entrepreneur", "#solopreneur", "#seo", "#marketingtips", "#growthhacking", "#smallbusiness"]
    },
    {
      name: "Lifestyle & Vlog",
      tags: ["#vlog", "#lifestyle", "#dailyvlog", "#creators", "#contentcreator", "#aesthetic", "#routine", "#dayinmylife", "#travelvlog"]
    },
    {
      name: "Beauty & Fashion",
      tags: ["#fashion", "#beauty", "#makeup", "#ootd", "#style", "#fashionblogger", "#skincare", "#lookbook", "#aestheticfashion"]
    },
    {
      name: "Fitness & Food",
      tags: ["#fitness", "#workout", "#gym", "#healthyfood", "#recipes", "#cooking", "#mealprep", "#vegan", "#healthylifestyle", "#motivation"]
    }
  ];

  const handleToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prev) => prev.filter((t) => t !== tag));
    } else {
      if (selectedTags.length >= 30) {
        showToast("Instagram has a limit of 30 hashtags per post.", "warning");
      }
      setSelectedTags((prev) => [...prev, tag]);
    }
  };

  const handleAddCustomTag = () => {
    let clean = customTag.trim().toLowerCase();
    if (!clean) return;

    if (!clean.startsWith("#")) {
      clean = "#" + clean;
    }
    
    // Remove invalid symbols
    clean = clean.replace(/[^a-zA-Z0-9#]/g, "");

    if (selectedTags.includes(clean)) {
      showToast("Tag is already added.", "info");
      setCustomTag("");
      return;
    }

    setSelectedTags((prev) => [...prev, clean]);
    setCustomTag("");
    showToast(`Added tag: "${clean}"`, "success");
  };

  const handleClear = () => {
    setSelectedTags([]);
    showToast("Cleared composed hashtag set.", "info");
  };

  const handleCopy = () => {
    if (selectedTags.length === 0) {
      showToast("Hashtag composer is empty.", "warning");
      return;
    }
    const text = selectedTags.join(" ");
    navigator.clipboard.writeText(text);
    showToast("Copied hashtags to clipboard!", "success");
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2rem" }}>
        
        {/* Left composer and copy panel */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Hashtag Composer</span>

          <div
            style={{
              minHeight: "130px",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-md)",
              padding: "1rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              alignContent: "flex-start"
            }}
          >
            {selectedTags.length > 0 ? (
              selectedTags.map((tag) => (
                <span
                  key={tag}
                  onClick={() => handleToggleTag(tag)}
                  style={{
                    padding: "0.25rem 0.6rem",
                    backgroundColor: "var(--accent)",
                    color: "white",
                    borderRadius: "4px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem"
                  }}
                  title="Click to remove tag"
                >
                  {tag} <span style={{ fontSize: "0.75rem" }}>×</span>
                </span>
              ))
            ) : (
              <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                Click category tags on the right or add custom ones below to compose your list...
              </span>
            )}
          </div>

          {/* Add custom tag input */}
          <div className="flex gap-2">
            <input
              type="text"
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddCustomTag()}
              placeholder="e.g. marketingtips, nextjs"
              className="form-control"
              aria-label="Add custom hashtag"
            />
            <button className="btn btn-secondary" onClick={handleAddCustomTag}>
              + Add Tag
            </button>
          </div>

          <div className="flex justify-between items-center" style={{ marginTop: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: selectedTags.length > 30 ? "var(--error)" : "var(--text-muted)", fontWeight: "600" }}>
              Selected: {selectedTags.length} / 30 (IG Cap Limit)
            </span>

            <div className="flex gap-2">
              <button className="btn btn-secondary btn-sm" onClick={handleClear}>
                Clear
              </button>
              <button className="btn btn-primary btn-sm" onClick={handleCopy}>
                📋 Copy List
              </button>
            </div>
          </div>
        </div>

        {/* Right Category Select lists */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Popular Tag Presets</span>

          {/* Category Tabs */}
          <div className="flex" style={{ gap: "0.35rem", flexWrap: "wrap" }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`btn ${activeCategory === idx ? "btn-primary" : "btn-secondary"} btn-sm`}
                onClick={() => setActiveCategory(idx)}
                style={{ padding: "0.35rem 0.75rem", fontSize: "0.8rem" }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Tags cloud */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              borderRadius: "var(--border-radius-md)",
              padding: "1.25rem",
              minHeight: "180px",
              alignContent: "flex-start"
            }}
          >
            {categories[activeCategory].tags.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <span
                  key={tag}
                  onClick={() => handleToggleTag(tag)}
                  style={{
                    padding: "0.35rem 0.65rem",
                    backgroundColor: isSelected ? "var(--accent-light)" : "var(--bg-primary)",
                    color: isSelected ? "var(--accent)" : "var(--text-primary)",
                    border: isSelected ? "1px solid var(--accent)" : "1px solid var(--border-color)",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all var(--transition-fast)"
                  }}
                  className="card-hover"
                >
                  {tag} {isSelected ? "✓" : "+"}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

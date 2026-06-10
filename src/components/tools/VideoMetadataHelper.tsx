"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface ChecklistItem {
  text: string;
  checked: boolean;
}

export default function VideoMetadataHelper() {
  const { showToast } = useToast();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tagsInput, setTagsInput] = useState<string>("");

  const templates = {
    tutorial: `📝 RESOURCES & LINKS:\n- Tool link: https://example.com\n- Join our community: https://example.com\n\n📌 TIMESTAMPS:\n0:00 - Introduction\n1:15 - Step 1: Getting Started\n4:30 - Step 2: Advanced configurations\n8:45 - Troubleshooting tips\n12:00 - Summary and Outro\n\n👋 CONNECT WITH US:\n- Twitter: @creator\n- Instagram: @creator\n\n#tutorial #youtube #howto`,
    review: `🔥 GET THE PRODUCTS:\n- Product A (Affiliate link): https://example.com\n- Product B (Affiliate link): https://example.com\n\n📊 VIDEO COMPARISON CHART:\n0:00 - Intro & Unboxing\n2:00 - Design and Build Quality\n5:15 - Key Features Breakdown\n9:30 - Pros vs Cons\n12:45 - Final Recommendation\n\n⚙️ MY CAMERA GEAR:\n- Main Camera: https://example.com\n- Mic setup: https://example.com\n\n#review #unboxing #tech`,
    general: `Enjoyed this video? Support us by subscribing! 🔔\n\n🔗 STAY CONNECTED:\n- Visit our blog: https://example.com\n- Sign up to newsletter: https://example.com\n\n💬 WHAT TO WATCH NEXT:\n- Related video 1: https://youtu.be/...\n- Related video 2: https://youtu.be/...\n\n#vlog #contentcreator #creatorutils`
  };

  const getChecklist = (): ChecklistItem[] => {
    return [
      { text: "Title has hook and target keywords", checked: title.trim().length > 10 },
      { text: "Title is under 60 characters (Mobile safe)", checked: title.length > 0 && title.length <= 60 },
      { text: "Description is detailed (at least 150 characters)", checked: description.trim().length >= 150 },
      { text: "Description includes timestamp chapters (e.g. 0:00 - Intro)", checked: /0:00|00:00/i.test(description) },
      { text: "Description includes calls to action & links", checked: /https?:\/\//i.test(description) },
      { text: "Tags are populated (character limit 500)", checked: tagsInput.length > 0 && tagsInput.length <= 500 }
    ];
  };

  const applyTemplate = (type: "tutorial" | "review" | "general") => {
    setDescription(templates[type]);
    showToast("Template loaded into description field!", "success");
  };

  const copyField = (text: string, fieldName: string) => {
    if (!text.trim()) {
      showToast(`${fieldName} is empty. Write something to copy!`, "warning");
      return;
    }
    navigator.clipboard.writeText(text);
    showToast(`${fieldName} copied to clipboard!`, "success");
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left inputs panel */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Draft Video Metadata</span>

          {/* Title input */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <div className="flex justify-between items-center" style={{ marginBottom: "0.25rem" }}>
              <label className="form-label" style={{ margin: 0 }} htmlFor="yt-title-helper">Video Title</label>
              <span style={{ fontSize: "0.8rem", color: title.length > 60 ? "var(--warning)" : "var(--text-muted)" }}>
                {title.length} / 100 chars
              </span>
            </div>
            <input
              id="yt-title-helper"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Catchy, high-contrast title containing your primary keyword"
              className="form-control"
            />
            <div className="flex justify-between" style={{ marginTop: "0.25rem" }}>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                Keep under 60 characters for complete mobile listings display.
              </span>
              <span
                onClick={() => copyField(title, "Title")}
                style={{ fontSize: "0.8rem", cursor: "pointer", color: "var(--accent)", fontWeight: "600" }}
              >
                Copy Title
              </span>
            </div>
          </div>

          {/* Description input */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <div className="flex justify-between items-center" style={{ marginBottom: "0.25rem" }}>
              <label className="form-label" style={{ margin: 0 }} htmlFor="yt-desc-helper">Video Description</label>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {description.length} / 5000 chars
              </span>
            </div>
            
            {/* Template shortcuts */}
            <div className="flex gap-2" style={{ marginBottom: "0.5rem" }}>
              <button className="btn btn-secondary btn-sm" onClick={() => applyTemplate("tutorial")}>
                + Tutorial Template
              </button>
              <button className="btn btn-secondary btn-sm" onClick={() => applyTemplate("review")}>
                + Review Template
              </button>
              <button className="btn btn-secondary btn-sm" onClick={() => applyTemplate("general")}>
                + General Template
              </button>
            </div>

            <textarea
              id="yt-desc-helper"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your video contents, provide links, resources, and timestamps..."
              className="form-control"
              style={{ height: "200px", fontFamily: "inherit" }}
            />
            <div className="flex justify-end" style={{ marginTop: "0.25rem" }}>
              <span
                onClick={() => copyField(description, "Description")}
                style={{ fontSize: "0.8rem", cursor: "pointer", color: "var(--accent)", fontWeight: "600" }}
              >
                Copy Description
              </span>
            </div>
          </div>

          {/* Tags input */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <div className="flex justify-between items-center" style={{ marginBottom: "0.25rem" }}>
              <label className="form-label" style={{ margin: 0 }} htmlFor="yt-tags-helper">Video Tags</label>
              <span style={{ fontSize: "0.8rem", color: tagsInput.length > 500 ? "var(--error)" : "var(--text-muted)" }}>
                {tagsInput.length} / 500 chars
              </span>
            </div>
            <textarea
              id="yt-tags-helper"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="how to write code, beginner tutorial, programming tips..."
              className="form-control"
              style={{ height: "70px" }}
            />
            <div className="flex justify-between" style={{ marginTop: "0.25rem" }}>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                Separate tags with commas.
              </span>
              <span
                onClick={() => copyField(tagsInput, "Tags")}
                style={{ fontSize: "0.8rem", cursor: "pointer", color: "var(--accent)", fontWeight: "600" }}
              >
                Copy Tags
              </span>
            </div>
          </div>

        </div>

        {/* Right checklist and SEO column */}
        <div className="flex flex-col gap-6">
          
          <div className="card" style={{ borderStyle: "solid" }}>
            <span className="form-label" style={{ fontSize: "1.05rem" }}>SEO Optimizations Checklist</span>
            <div className="flex flex-col gap-2" style={{ marginTop: "0.75rem" }}>
              {getChecklist().map((item, idx) => (
                <div key={idx} className="flex items-center gap-2" style={{ fontSize: "0.9rem" }}>
                  <span style={{ color: item.checked ? "var(--success)" : "var(--text-muted)", fontSize: "1.1rem" }}>
                    {item.checked ? "✓" : "○"}
                  </span>
                  <span style={{ color: item.checked ? "inherit" : "var(--text-secondary)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.25rem" }}>
            <h4 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>💡 Metadata SEO Guidelines</h4>
            <ul style={{ fontSize: "0.85rem", paddingLeft: "1.25rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>Put your **target keyword** in the first 10-15 characters of the video title.</li>
              <li>Insert **primary links** (signup, products) in the top 2 lines of description so they display above the fold.</li>
              <li>Always add **timestamps** starting at exactly **0:00** or **00:00** to enable YouTube video chapters.</li>
              <li>Make tags as relevant as possible; generic keywords do not help algorithms search video contents.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

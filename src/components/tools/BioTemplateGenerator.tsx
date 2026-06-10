"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface BioTemplate {
  name: string;
  charLimit: number;
  pattern: (prof: string, value: string, cta: string, emojis: boolean) => string;
}

export default function BioTemplateGenerator() {
  const { showToast } = useToast();
  const [platform, setPlatform] = useState<string>("instagram");
  const [role, setRole] = useState<string>("Freelance Copywriter");
  const [valueProp, setValueProp] = useState<string>("helping e-commerce brands double their email revenue");
  const [cta, setCta] = useState<string>("Grab my free email guide below");
  const [useEmojis, setUseEmojis] = useState<boolean>(true);
  const [generatedList, setGeneratedList] = useState<string[]>([]);

  const templates: Record<string, BioTemplate[]> = {
    instagram: [
      {
        name: "Standard Bulleted Layout",
        charLimit: 150,
        pattern: (r, v, c, e) => {
          const e1 = e ? "✍️ " : "";
          const e2 = e ? "📈 " : "";
          const e3 = e ? "👇 " : "";
          return `${e1}${r}\n${e2}${v}\n${e3}${c}`;
        }
      },
      {
        name: "Minimalist Hook Layout",
        charLimit: 150,
        pattern: (r, v, c, e) => {
          const e1 = e ? "💡 " : "";
          const e2 = e ? "➡ " : "";
          return `${r} | ${v}.\n\n${e1}Get details here:\n${e2}${c}`;
        }
      },
      {
        name: "Credibility Focus Layout",
        charLimit: 150,
        pattern: (r, v, c, e) => {
          const e1 = e ? "✔ " : "";
          const e2 = e ? "🚀 " : "";
          const e3 = e ? "💎 " : "";
          return `${e1}Providing high-quality ${r.toLowerCase()} services\n${e2}${v}\n${e3}Download checklist:`;
        }
      }
    ],
    tiktok: [
      {
        name: "Ultra Short Layout A",
        charLimit: 80,
        pattern: (r, v, c, e) => {
          const emoji = e ? "⚡ " : "";
          return `${emoji}${r}\n${v}.\nClick below!`;
        }
      },
      {
        name: "Ultra Short Layout B",
        charLimit: 80,
        pattern: (r, v, c, e) => {
          const emoji = e ? "👇 " : "";
          return `${r} operations.\n${v}.\n${emoji}${c}`;
        }
      }
    ],
    twitter: [
      {
        name: "Social Proof Layout",
        charLimit: 280,
        pattern: (r, v, c, e) => {
          const e1 = e ? "✦ " : "";
          const e2 = e ? "💼 " : "";
          const e3 = e ? "⚡ " : "";
          return `${e1}${r} | ${v}.\n\n${e2}DM for bookings and consulting inquiries.\n${e3}${c}:`;
        }
      },
      {
        name: "Thought Leader Layout",
        charLimit: 280,
        pattern: (r, v, c, e) => {
          const e1 = e ? "🧠 " : "";
          const e2 = e ? "👇 " : "";
          return `${e1}I write about ${r.toLowerCase()} & ${v}.\n\nSharing guides, lessons, and reviews weekly.\n\n${e2}Join 5,000+ reader newsletters here:`;
        }
      }
    ],
    linkedin: [
      {
        name: "Pitch Elevator Layout",
        charLimit: 300,
        pattern: (r, v, c, e) => {
          const e1 = e ? "📌 " : "";
          const e2 = e ? "🚀 " : "";
          const e3 = e ? "📬 " : "";
          return `${e1}I serve as a ${r} focusing on:\n${e2}${v}.\n\n${e3}Interested in collaborating or booking? DM me or check the resource:`;
        }
      }
    ]
  };

  const handleGenerate = () => {
    const list = templates[platform] || [];
    const finalBios = list.map((temp) => {
      let bio = temp.pattern(role, valueProp, cta, useEmojis);
      if (bio.length > temp.charLimit) {
        bio = bio.substring(0, temp.charLimit - 3) + "...";
      }
      return bio;
    });
    setGeneratedList(finalBios);
    showToast("Bio templates generated!", "success");
  };

  const copyBio = (text: string) => {
    navigator.clipboard.writeText(text);
    showToast("Profile bio copied!", "success");
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left Inputs panel */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Define Profile Properties</span>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="bio-platform">Target Social Network</label>
            <select
              id="bio-platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="form-control form-select"
            >
              <option value="instagram">Instagram Profile (150 chars)</option>
              <option value="tiktok">TikTok Profile (80 chars)</option>
              <option value="twitter">X (Twitter) Profile (280 chars)</option>
              <option value="linkedin">LinkedIn Headline (220 chars)</option>
            </select>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="bio-role">Your Role / Profession</label>
            <input
              id="bio-role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
              placeholder="e.g. Freelance Web Designer, Yoga Coach"
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="bio-value">Value Proposition (What you do)</label>
            <input
              id="bio-value"
              type="text"
              value={valueProp}
              onChange={(e) => setValueProp(e.target.value)}
              className="form-control"
              placeholder="e.g. helping designers double bookings with SEO templates"
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="bio-cta">Call to Action (CTA)</label>
            <input
              id="bio-cta"
              type="text"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              className="form-control"
              placeholder="e.g. Grab my free design checklist below"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              id="bio-emoji-chk"
              type="checkbox"
              checked={useEmojis}
              onChange={(e) => setUseEmojis(e.target.checked)}
              style={{ cursor: "pointer", accentColor: "var(--accent)" }}
            />
            <label htmlFor="bio-emoji-chk" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
              Include emojis for style separation
            </label>
          </div>

          <button className="btn btn-primary" style={{ marginTop: "0.5rem" }} onClick={handleGenerate}>
            ✍️ Compile Bios
          </button>
        </div>

        {/* Right generated cards output */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Generated Profile Layouts</span>
          
          {generatedList.length > 0 ? (
            <div className="flex flex-col gap-4">
              {generatedList.map((bio, idx) => (
                <div
                  key={idx}
                  className="card flex flex-col gap-3"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    borderStyle: "solid",
                    padding: "1.25rem"
                  }}
                >
                  <div className="flex justify-between items-center" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: "600", textTransform: "uppercase", color: "var(--text-muted)" }}>
                      Layout Variant {idx + 1}
                    </span>
                    <span className="badge badge-accent" style={{ fontSize: "0.7rem" }}>
                      {bio.length} chars
                    </span>
                  </div>

                  <pre
                    style={{
                      fontFamily: "inherit",
                      fontSize: "0.9rem",
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word",
                      margin: 0,
                      backgroundColor: "var(--bg-secondary)",
                      padding: "0.75rem",
                      borderRadius: "var(--border-radius-sm)",
                      border: "1px solid var(--border-color)",
                      color: "var(--text-primary)"
                    }}
                  >
                    {bio}
                  </pre>

                  <button className="btn btn-primary btn-sm" onClick={() => copyBio(bio)}>
                    📋 Copy Profile Bio
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="card text-center" style={{ padding: "3rem 0" }}>
              <p className="text-muted" style={{ margin: 0 }}>
                Define your parameters on the left and click Compile to display results.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

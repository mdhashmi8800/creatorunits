"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface IdeaSet {
  layout: string;
  texts: string[];
  graphics: string[];
  styling: string;
}

export default function ThumbnailIdeaHelper() {
  const { showToast } = useToast();
  const [niche, setNiche] = useState<string>("tech");
  const [tone, setTone] = useState<string>("hype");
  const [generated, setGenerated] = useState<boolean>(true);

  const niches = [
    { value: "tech", label: "Technology & Reviews" },
    { value: "gaming", label: "Gaming & Let's Plays" },
    { value: "finance", label: "Finance, Crypto & Business" },
    { value: "lifestyle", label: "Vlogs & Lifestyle" },
    { value: "edu", label: "Education & Science" },
    { value: "fitness", label: "Fitness, Health & Cooking" }
  ];

  const tones = [
    { value: "hype", label: "Hype / Excited / Shock" },
    { value: "serious", label: "Analytical / Serious" },
    { value: "mystery", label: "Curious / Mystery / Question" },
    { value: "practical", label: "Step-by-Step / Practical" }
  ];

  const getIdeas = (): IdeaSet => {
    // Generate ideas based on combinations of niche and tone
    const ideaMap: Record<string, Record<string, IdeaSet>> = {
      tech: {
        hype: {
          layout: "Product close-up on the left (tilted 15 degrees, high saturation). Host on the right with a shocked/pointing expression, outlined with a soft glow.",
          texts: ["DON'T BUY!", "NEXT GEN!", "FINALLY!", "WORTH IT?", "BEAST!"],
          graphics: ["Subtle orange or teal radial gradient backdrop", "Glowing border wrapper around the product", "Red circle highlight around a key port or button"],
          styling: "Thick, ultra-bold sans-serif font (e.g. Impact, Montserrat). White text with a thick black drop shadow. Use a yellow accent for the key word."
        },
        serious: {
          layout: "Clean, split-screen. Tightly zoomed comparison shots of two competing products (A vs B) side-by-side with a vertical dividing line.",
          texts: ["A VS B", "THE TRUTH", "1 MONTH LATER", "WHICH IS BEST?", "THE KING?"],
          graphics: ["Thin divider line down the middle with VS badge", "Minimalist, flat color background (dark slate or light grey)", "Small, clean brand icons in the corners"],
          styling: "Modern geometric font (e.g., Bebas Neue). Large white text for names, contrasting red/blue borders for product categories."
        },
        mystery: {
          layout: "Product silhouette or partially obscured graphic under a spotlight. Zoomed in detail shot that doesn't reveal the whole product.",
          texts: ["WHAT IS THIS?", "THE SECRET...", "THEY HID THIS!", "NEXT THING?"],
          graphics: ["Large yellow question mark overlay", "Soft radial vignette darken around the edges", "Glow outline highlight tracing the mystery shape"],
          styling: "Italicized, heavy title font. Yellow or neon green primary colors on a dark obsidian base."
        },
        practical: {
          layout: "Clean workspace layout. The product is held in hands or on a desk in active use, looking accessible and ready.",
          texts: ["EASY GUIDE", "HOW TO USE", "SETUP NOW!", "STEP BY STEP"],
          graphics: ["Numbered steps or sequence circles (1, 2, 3)", "Green check marks indicating positive or finished states", "Soft white studio background"],
          styling: "Highly legible rounded sans-serif. White text on dark banner blocks for maximum read-rates."
        }
      },
      gaming: {
        hype: {
          layout: "High-action gameplay moment cropped in. Main character or avatar cut out and enlarged on the right with a dynamic action line background.",
          texts: ["NEW META!", "BROKEN!", "OP BUILD!", "999+ IQ!", "NO WAY!"],
          graphics: ["Action lines / sunburst vector backdrop", "Flame or lightning particle overlays", "Glowing green/red stats comparison cards"],
          styling: "Angled, distressed gamer font with a thick custom border stroke (e.g. 5px black outline)."
        },
        serious: {
          layout: "Map overlay or game database screen in the background. Side-by-side comparison of weapons, builds, or locations.",
          texts: ["TIER LIST", "BEST BUILDS", "THE META", "CRITICAL FIX", "ANALYSIS"],
          graphics: ["Tier rankings icons (S, A, B, C) placed clearly", "Grid layout boxes showing individual items", "Chart overlay lines"],
          styling: "Block-style sans-serif. Use matching color-coded badges for different tiers (S = Gold, A = Purple)."
        },
        mystery: {
          layout: "Darkened game environment screenshot. An glowing mystery portal, box, or boss character outlined in neon color at the center.",
          texts: ["DO NOT ENTER!", "SECRET BOSS", "FOUND IT!", "WHAT HAPPENS?", "HIDDEN AREA"],
          graphics: ["Fog or smoke effect overlay in foreground", "Glow arrows pointing into dark sections", "Red exclamation mark badge"],
          styling: "Gothic or mysterious serif font, highlighted with neon colors (cyan, magenta)."
        },
        practical: {
          layout: "Clean, bright gameplay interface showing simple UI. Arrows pointing to keys, paths, or settings screens.",
          texts: ["GET RICH FAST", "LEVEL UP", "10 SECONDS!", "COMPLETE PATH", "XP GLITCH"],
          graphics: ["Bright yellow helper arrows", "Step counts badges", "Target reticle overlay"],
          styling: "High-contrast bold font. Put text in clean rectangle banners to keep game visuals from obscuring letters."
        }
      },
      finance: {
        hype: {
          layout: "Upward trending green price graph in background. Host on the right with a wide-eyed or pointing expression.",
          texts: ["10X NEXT!", "PUMPING!", "BUY NOW?", "MASSIVE!", "THE RUN!"],
          graphics: ["Bright green arrow pointing up and to the right", "Coins, bills, or symbol icons scattered", "Sparkle overlay elements"],
          styling: "Thick Impact font. Bold green and white color palette. Keep text short and massive."
        },
        serious: {
          layout: "Clean dashboard showing data or stock charts. Professional portrait of the speaker on the side looking thoughtful.",
          texts: ["MARKET CRASH", "RECESSION?", "THE PLAN", "BUBBLE BURST", "PREPARE NOW"],
          graphics: ["Red trend graph lines pointing downwards", "Newspaper clipping style overlays", "Warning sign icons"],
          styling: "Clean serif font (e.g. Playfair Display) for an editorial, Wall Street Journal look. Solid red or white text."
        },
        mystery: {
          layout: "A vault door, locked chest, or black envelope on the desk. High contrast lighting with shadow edges.",
          texts: ["THE LOOPHOLE", "SECRET ACC", "THEY CONCEAL", "DON'T TELL!", "FINANCIAL TRAP"],
          graphics: ["Lock or keyhole vector overlay", "Secret stamp graphic", "Black bars censoring small sections"],
          styling: "Stenciled military style or clean sans-serif. Yellow warning block headers."
        },
        practical: {
          layout: "A clean spreadsheet, notebook, or tax form held in hand. Highly relatable and structured setup.",
          texts: ["SAVE TAXES", "BUDGET GUIDE", "START INVESTING", "3 SIMPLE STEPS"],
          graphics: ["Calculator icon or clean chart", "Checklist graphic", "Green highlight block marks"],
          styling: "Readable, clean corporate font. High contrast white text on dark slate backgrounds."
        }
      }
    };

    // Fallback logic to generic values if combo not explicitly defined
    const categoryRegistry = ideaMap[niche] || ideaMap["tech"];
    return categoryRegistry[tone] || categoryRegistry["hype"];
  };

  const handleGenerate = () => {
    setGenerated(true);
    showToast("Thumbnail ideas generated!", "success");
  };

  const activeIdeas = getIdeas();

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Selection options bar */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.5rem" }}>
          <div className="grid-cols-2" style={{ gap: "2rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="idea-niche">Video Niche / Category</label>
              <select
                id="idea-niche"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="form-control form-select"
              >
                {niches.map((n) => (
                  <option key={n.value} value={n.value}>{n.label}</option>
                ))}
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="idea-tone">Thumbnail Mood / Tone</label>
              <select
                id="idea-tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="form-control form-select"
              >
                {tones.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
          
          <button className="btn btn-primary w-full" style={{ marginTop: "1.25rem" }} onClick={handleGenerate}>
            🎯 Generate Design Ideas
          </button>
        </div>

        {/* Generated ideas dashboards */}
        {generated && (
          <div className="flex flex-col gap-5">
            <h3 style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", margin: 0 }}>
              Design Blueprint Suggestions
            </h3>

            <div className="grid-cols-2" style={{ gap: "1.5rem" }}>
              
              {/* Layout sketch card */}
              <div className="card flex flex-col gap-2" style={{ borderStyle: "solid" }}>
                <span className="badge badge-accent" style={{ alignSelf: "flex-start" }}>Visual Composition & Layout</span>
                <strong style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.5rem" }}>
                  Layout Structure Sketch:
                </strong>
                <p style={{ fontSize: "0.9rem", margin: 0, color: "var(--text-secondary)" }}>
                  {activeIdeas.layout}
                </p>
              </div>

              {/* Text overlays card */}
              <div className="card flex flex-col gap-2" style={{ borderStyle: "solid" }}>
                <span className="badge badge-success" style={{ alignSelf: "flex-start" }}>Punchy Title Text Ideas (Max 3-4 Words)</span>
                <strong style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.5rem" }}>
                  Add one of these words in your graphics:
                </strong>
                <div className="flex" style={{ gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                  {activeIdeas.texts.map((txt, idx) => (
                    <span
                      key={idx}
                      onClick={() => {
                        navigator.clipboard.writeText(txt);
                        showToast(`Copied text: "${txt}"`, "success");
                      }}
                      style={{
                        padding: "0.25rem 0.5rem",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-color)",
                        borderRadius: "4px",
                        fontSize: "0.8rem",
                        fontWeight: "700",
                        fontFamily: "var(--font-display)",
                        cursor: "pointer"
                      }}
                      title="Click to copy text"
                    >
                      {txt} 📋
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphic accents card */}
              <div className="card flex flex-col gap-2" style={{ borderStyle: "solid" }}>
                <span className="badge badge-warning" style={{ alignSelf: "flex-start" }}>Graphic Accents & Highlights</span>
                <strong style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.5rem" }}>
                  Elements to add in editor:
                </strong>
                <ul style={{ fontSize: "0.85rem", paddingLeft: "1.25rem", color: "var(--text-secondary)", margin: 0 }}>
                  {activeIdeas.graphics.map((g, idx) => (
                    <li key={idx} style={{ marginBottom: "0.25rem" }}>{g}</li>
                  ))}
                </ul>
              </div>

              {/* Typography block card */}
              <div className="card flex flex-col gap-2" style={{ borderStyle: "solid" }}>
                <span className="badge badge-accent" style={{ alignSelf: "flex-start" }}>Fonts & Styling rules</span>
                <strong style={{ fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.5rem" }}>
                  Best Font Settings:
                </strong>
                <p style={{ fontSize: "0.9rem", margin: 0, color: "var(--text-secondary)" }}>
                  {activeIdeas.styling}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

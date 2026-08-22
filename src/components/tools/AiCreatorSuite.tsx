"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useToast } from "@/context/ToastContext";

export default function AiCreatorSuite() {
  const params = useParams();
  const { showToast } = useToast();
  const slug = (params?.slug as string) || "ai-hook-generator";

  const [prompt, setPrompt] = useState<string>("");
  const [tone, setTone] = useState<string>("engaging");
  const [niche, setNiche] = useState<string>("tech");
  const [platform, setPlatform] = useState<string>("instagram");
  const [length, setLength] = useState<string>("short");
  const [customKey, setCustomKey] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");
  const [resultsList, setResultsList] = useState<string[]>([]);
  const [showKeyInput, setShowKeyInput] = useState<boolean>(false);

  // Load API key from localStorage if it exists
  useEffect(() => {
    const savedKey = localStorage.getItem("cu_openai_key");
    if (savedKey) {
      setCustomKey(savedKey);
    }
  }, []);

  const handleSaveKey = (key: string) => {
    setCustomKey(key);
    localStorage.setItem("cu_openai_key", key);
    showToast("API Key saved locally!", "success");
    setShowKeyInput(false);
  };

  const handleClearKey = () => {
    setCustomKey("");
    localStorage.removeItem("cu_openai_key");
    showToast("API Key removed.", "info");
  };

  const generateContent = async () => {
    if (!prompt.trim()) {
      showToast("Please enter a topic or prompt first.", "error");
      return;
    }

    setIsGenerating(true);
    setResult("");
    setResultsList([]);

    // 1. If user provided their own API key, try a live OpenAI request (client-side)
    if (customKey.trim()) {
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${customKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content: `You are a professional AI content creator for Creator Units. Tone: ${tone}. Slug: ${slug}. Format the output beautifully with clear spacing, lists, or headers if needed.`,
              },
              {
                role: "user",
                content: `Generate custom content for the tool: ${slug}. Input details: "${prompt}". Category/Niche: "${niche}". Platform: "${platform}".`,
              },
            ],
            temperature: 0.7,
          }),
        });

        if (!response.ok) {
          throw new Error("API request failed. Please check your API key.");
        }

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || "Failed to generate.";
        setResult(content);
        showToast("Generation successful (via OpenAI API)!", "success");
        setIsGenerating(false);
        return;
      } catch (err: any) {
        console.error(err);
        showToast("OpenAI API failed, falling back to centralized DeepSeek AI.", "warning");
      }
    }

    // 2. Try the centralized DeepSeek API via server-side API route
    try {
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          slug,
          tone,
          niche,
          platform,
          length,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.content) {
          setResult(data.content);
          showToast("Generation successful (via DeepSeek AI)!", "success");
          setIsGenerating(false);
          return;
        }
      }

      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP error ${response.status}`);
    } catch (err: any) {
      console.error("DeepSeek API integration failed:", err);
      showToast(err.message || "DeepSeek API failed, falling back to local template.", "warning");
    }

    // 2. Fallback: High-quality local generator template engine
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const topic = prompt.trim();
    let generatedList: string[] = [];
    let textOut = "";

    if (slug === "ai-hook-generator") {
      generatedList = [
        `🚨 Stop scrolling if you care about ${topic}! Here is why...`,
        `I was today years old when I found out this secret about ${topic}. 🤯`,
        `Here is the absolute worst advice I've ever heard about ${topic}...`,
        `This one simple tweak to your ${topic} workflow will save you hours.`,
        `What if I told you everything you knew about ${topic} was wrong?`
      ];
    } else if (slug === "ai-script-generator") {
      textOut = `[0:00 - 0:10] Hook:
"Ever wondered why most people fail at ${topic}? It's not what you think. Let's break it down."

[0:10 - 0:45] Core Body:
- Step 1: Analyze the current status of ${topic}.
- Step 2: Avoid the number one trap that rookies fall into.
- Step 3: Implement the 80/20 rule to focus on what actually gets results.

[0:45 - 1:00] Call-to-Action (CTA):
"If you want to master this, hit follow and check out our bio link for a free cheat sheet!"`;
    } else if (slug === "ai-caption-generator" || slug === "instagram-caption-generator" || slug === "tiktok-caption-generator") {
      const hashtags = `#${niche} #${topic.toLowerCase().replace(/\s+/g, '')} #creatorunits #trending #foryou`;
      generatedList = [
        `Just dropped my thoughts on ${topic}! Let me know what you think in the comments below. 👇 ${hashtags}`,
        `Unpopular opinion: ${topic} is actually underrated. Thoughts? 🤔 ${hashtags}`,
        `Behind the scenes of ${topic}. It's not as easy as it looks! 🎬 ${hashtags}`,
        `Your daily reminder to lock in and focus on your ${topic} goals. 📈 ${hashtags}`
      ];
    } else if (slug === "ai-cta-generator") {
      generatedList = [
        `👉 Click the link in my bio to start scaling your ${topic} today!`,
        `💬 Drop a 'YES' below if you want my free guide to ${topic}!`,
        `🔔 Subscribe for weekly breakdowns on how to master ${topic}.`,
        `💾 Save this post so you don't forget these ${topic} tips!`,
        `🚀 Join 10k+ creators reading our free newsletter - link in bio.`
      ];
    } else if (slug === "ai-video-idea-generator") {
      generatedList = [
        `💡 "The Truth About ${topic}": A high-contrast documentary exposing common industry myths.`,
        `💡 "I Tried ${topic} for 30 Days (Here's What Happened)": A challenge-style video with daily progression logs.`,
        `💡 "5 Cheap Tools That Will Blow Your Mind for ${topic}": A curated toolkit/resource list video.`,
        `💡 "How to Start ${topic} with $0 in 2026": A complete beginner step-by-step roadmap.`
      ];
    } else if (slug === "ai-product-description-generator") {
      textOut = `🔥 Introduce the Ultimate ${topic} Suite!

Tired of struggling with generic outputs? Our premium solution is designed specifically to optimize your workflow.

✨ KEY BENEFITS:
- Done in seconds: No complex setup or steep learning curves.
- Fully local and secure: Your details never leave your browser sandbox.
- Tailored options: Perfect for modern creators, designers, and developers.

🛒 Get yours today and level up!`;
    } else if (slug === "ai-comment-reply-generator") {
      generatedList = [
        `Thanks for the feedback! Glad you liked the breakdown on ${topic}. Let me know if you want to see more!`,
        `Appreciate the support! Stay tuned for more guides on ${topic} coming very soon. 🙌`,
        `That's a great point! I'll definitely cover that in our next video on ${topic}.`,
        `Thanks for watching! Feel free to share your own tips in the comments.`
      ];
    } else if (slug === "ai-social-media-post-generator") {
      textOut = `🚀 Let's talk about ${topic}.

In the past few years, the landscape has changed completely. If you're still using old strategies, you're falling behind.

Here are the 3 major pillars you need to master today:
1️⃣ Automation — Spend less time on administrative tasks.
2️⃣ Personalization — Connect directly with your core audience.
3️⃣ Consistency — Publish high-value summaries regularly.

Read the full breakdown in our weekly newsletter!`;
    } else if (slug === "ai-content-rewriter") {
      textOut = `Here is the rewritten version of your text in an ${tone} tone:

"Mastering ${topic} doesn't have to be overwhelming. By stripping away the fluff and concentrating on core client-side utilities, you can achieve professional-grade results instantly. Let's make optimization effortless."`;
    } else if (slug === "ai-youtube-title-generator") {
      generatedList = [
        `I Tried ${topic} for 30 Days (Here's What Happened)`,
        `How to Master ${topic} Fast (Step-by-Step Guide)`,
        `The Only ${topic} Tutorial You'll Ever Need`,
        `Don't Buy ${topic} Until You Watch This!`,
        `5 Simple ${topic} Hacks That Actually Work`,
        `The Hidden Truth About ${topic} (Exposed)`,
        `Why 99% of Beginners Fail at ${topic}`
      ];
    } else if (slug === "ai-youtube-description-generator") {
      textOut = `In this video, we dive deep into everything you need to know about ${topic}! From beginner setups to advanced workflows, we break down how to get results.

📌 Resources Mentioned in This Video:
- Join the Creator Units Toolkit: https://www.creatorunits.com
- Get our Free Checklists: https://www.creatorunits.com/tools

⏱️ Timestamps:
0:00 - Intro to ${topic}
1:30 - Core Setup Guide
4:15 - Tips to Avoid Rookie Mistakes
7:45 - Advanced Walkthrough
10:15 - Final Thoughts & Summary

If you enjoyed the video, don't forget to LIKE, COMMENT, and SUBSCRIBE! 🚀

#youtube #creator #seo #${topic.toLowerCase().replace(/\s+/g, '')}`;
    } else if (slug === "ai-youtube-hashtag-generator") {
      generatedList = [
        `#${topic.toLowerCase().replace(/\s+/g, '')}`,
        `#${topic.toLowerCase().replace(/\s+/g, '')}tips`,
        `#${topic.toLowerCase().replace(/\s+/g, '')}tutorial`,
        `#${topic.toLowerCase().replace(/\s+/g, '')}guide`,
        `#ytcreator`,
        `#contentcreator`,
        `#socialmediagrowth`,
        `#creatorunits`,
        `#seotips`,
        `#trending`
      ];
    } else {
      textOut = `Generated content for ${topic} in ${tone} style. Ready for copy and paste!`;
    }

    if (generatedList.length > 0) {
      setResultsList(generatedList);
    } else {
      setResult(textOut);
    }

    showToast("Content generated successfully!", "success");
    setIsGenerating(false);
  };

  const handleCopyText = (txt: string) => {
    navigator.clipboard.writeText(txt);
    showToast("Copied to clipboard!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Header Key Configuration */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Mode: {customKey ? "🟢 Live OpenAI API" : "🤖 Centralized DeepSeek AI"}
          </span>
          <div>
            {customKey ? (
              <button className="btn btn-secondary btn-sm" onClick={handleClearKey} style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>
                Clear Key
              </button>
            ) : (
              <button className="btn btn-secondary btn-sm" onClick={() => setShowKeyInput(!showKeyInput)} style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>
                {showKeyInput ? "Cancel" : "🔧 Use Personal API Key"}
              </button>
            )}
          </div>
        </div>

        {/* API Key Form Input */}
        {showKeyInput && (
          <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" htmlFor="api-key-input">Enter OpenAI API Key (stored client-side only)</label>
              <input
                id="api-key-input"
                type="password"
                placeholder="sk-proj-..."
                className="form-control"
                style={{ fontFamily: "monospace" }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSaveKey((e.target as HTMLInputElement).value);
                  }
                }}
              />
            </div>
            <button className="btn btn-primary btn-sm" onClick={(e) => {
              const input = document.getElementById("api-key-input") as HTMLInputElement;
              if (input) handleSaveKey(input.value);
            }}>
              Save Key
            </button>
          </div>
        )}

        {/* Main Input Form */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "dashed" }}>
          <div className="flex flex-col gap-4">
            <div className="form-group">
              <label className="form-label" htmlFor="prompt-input">
                {slug.includes("reply") ? "Paste User Comment / Topic:" : slug.includes("description") ? "Video Title / Product Details:" : "Enter Niche, Topic, or Keywords:"}
              </label>
              <textarea
                id="prompt-input"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. How to grow a YouTube channel using free on-device SEO web tools"
                className="form-control"
                rows={3}
              />
            </div>

            <div className="grid-cols-3" style={{ gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="tone-select">Tone</label>
                <select
                  id="tone-select"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="form-control form-select"
                >
                  <option value="engaging">Engaging / Friendly</option>
                  <option value="professional">Professional</option>
                  <option value="contrarian">Contrarian / Viral</option>
                  <option value="educational">Educational</option>
                  <option value="funny">Humorous / Sassy</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="niche-select">Niche</label>
                <select
                  id="niche-select"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="form-control form-select"
                >
                  <option value="tech">Technology & Reviews</option>
                  <option value="business">Business & Finance</option>
                  <option value="gaming">Gaming & Entertainment</option>
                  <option value="lifestyle">Vlogs & Travel</option>
                  <option value="general">General / Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="platform-select">Target Platform</label>
                <select
                  id="platform-select"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="form-control form-select"
                >
                  <option value="youtube">YouTube</option>
                  <option value="instagram">Instagram</option>
                  <option value="tiktok">TikTok</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="twitter">Twitter / X</option>
                </select>
              </div>
            </div>

            <button
              className="btn btn-primary w-full"
              onClick={generateContent}
              disabled={isGenerating}
            >
              {isGenerating ? "⚡ Generating Copy..." : "🤖 Generate Copy Outline"}
            </button>
          </div>
        </div>

        {/* Output Section */}
        {(result || resultsList.length > 0) && (
          <div className="flex flex-col gap-4">
            <h4 style={{ fontSize: "1.1rem", margin: 0 }}>Generated Copy Suggestions:</h4>
            
            {resultsList.length > 0 ? (
              <div className="flex flex-col gap-3">
                {resultsList.map((item, idx) => (
                  <div
                    key={idx}
                    className="card flex justify-between items-center"
                    style={{ borderStyle: "solid", padding: "1rem", backgroundColor: "var(--bg-primary)" }}
                  >
                    <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", maxWidth: "80%", lineHeight: "1.4" }}>
                      {item}
                    </span>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleCopyText(item)}
                      style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card" style={{ position: "relative", borderStyle: "solid", backgroundColor: "var(--bg-primary)" }}>
                <pre style={{
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  fontFamily: "inherit",
                  color: "var(--text-secondary)",
                }}>
                  {result}
                </pre>
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleCopyText(result)}
                  >
                    📋 Copy Code Output
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

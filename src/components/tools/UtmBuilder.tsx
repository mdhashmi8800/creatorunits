"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useToast } from "@/context/ToastContext";
import { useHistory } from "@/context/HistoryContext";

const PRESETS = [
  { label: "Google Search (CPC)", source: "google", medium: "cpc", campaign: "search_campaign" },
  { label: "Facebook / IG Ad", source: "facebook", medium: "paid_social", campaign: "feed_promo" },
  { label: "TikTok Ad", source: "tiktok", medium: "paid_social", campaign: "spark_ads" },
  { label: "Email Newsletter", source: "newsletter", medium: "email", campaign: "weekly_digest" },
  { label: "YouTube Description", source: "youtube", medium: "video", campaign: "channel_card" },
  { label: "LinkedIn Post", source: "linkedin", medium: "organic_social", campaign: "thought_leadership" },
  { label: "Twitter / X Post", source: "twitter", medium: "organic_social", campaign: "launch_thread" },
  { label: "Affiliate Link", source: "affiliate_partner", medium: "affiliate", campaign: "creator_referral" },
];

function sanitizeVal(val: string, forceLowercase: boolean): string {
  let clean = val.trim();
  if (forceLowercase) {
    clean = clean.toLowerCase();
  }
  return clean.replace(/\s+/g, "_");
}

export default function UtmBuilder() {
  const { showToast } = useToast();
  const { addHistoryEntry } = useHistory();
  
  const [url, setUrl] = useState<string>("https://example.com");
  const [source, setSource] = useState<string>("google");
  const [medium, setMedium] = useState<string>("cpc");
  const [campaign, setCampaign] = useState<string>("summer_sale");
  const [term, setTerm] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [forceLowercase, setForceLowercase] = useState<boolean>(true);

  const generatedLink = useMemo(() => {
    let base = url.trim();
    if (!base) {
      return "";
    }

    if (!/^https?:\/\//i.test(base)) {
      base = "https://" + base;
    }

    try {
      const parsedUrl = new URL(base);
      
      const s = sanitizeVal(source, forceLowercase);
      const m = sanitizeVal(medium, forceLowercase);
      const c = sanitizeVal(campaign, forceLowercase);
      const t = sanitizeVal(term, forceLowercase);
      const cnt = sanitizeVal(content, forceLowercase);

      if (s) parsedUrl.searchParams.set("utm_source", s);
      else parsedUrl.searchParams.delete("utm_source");

      if (m) parsedUrl.searchParams.set("utm_medium", m);
      else parsedUrl.searchParams.delete("utm_medium");

      if (c) parsedUrl.searchParams.set("utm_campaign", c);
      else parsedUrl.searchParams.delete("utm_campaign");

      if (t) parsedUrl.searchParams.set("utm_term", t);
      else parsedUrl.searchParams.delete("utm_term");

      if (cnt) parsedUrl.searchParams.set("utm_content", cnt);
      else parsedUrl.searchParams.delete("utm_content");

      return parsedUrl.toString();
    } catch {
      return "";
    }
  }, [url, source, medium, campaign, term, content, forceLowercase]);

  const handleApplyPreset = (preset: typeof PRESETS[0]) => {
    setSource(preset.source);
    setMedium(preset.medium);
    setCampaign(preset.campaign);
    showToast(`Applied preset: ${preset.label}`, "info");
  };

  const handleCopy = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    showToast("UTM campaign link copied to clipboard!", "success");
    addHistoryEntry("utm-builder", "UTM Campaign Builder", generatedLink, `UTM: ${campaign || source}`);
  };

  return (
    <div className="card">
      {/* Quick Channel Presets */}
      <div style={{ marginBottom: "1.5rem" }}>
        <span className="form-label" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
          ⚡ Quick Channel Presets (GA4 Compliant)
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => handleApplyPreset(p)}
              style={{ fontSize: "0.8rem", padding: "0.35rem 0.65rem" }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left Inputs form */}
        <div className="flex flex-col gap-4">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="form-label" style={{ fontSize: "1.1rem", margin: 0 }}>Configure Tracking Tags</span>
            <label style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.8rem", cursor: "pointer", color: "var(--text-secondary)" }}>
              <input
                type="checkbox"
                checked={forceLowercase}
                onChange={(e) => setForceLowercase(e.target.checked)}
              />
              Enforce lowercase (GA4 best practice)
            </label>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="utm-website">Destination Website URL (Required)</label>
            <input
              id="utm-website"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g. https://www.yoursite.com/landing"
              className="form-control"
            />
          </div>

          <div className="grid-cols-2" style={{ gap: "1rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="utm-src">Campaign Source (Required)</label>
              <input
                id="utm-src"
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="e.g. google, newsletter, facebook"
                className="form-control"
              />
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Platform sending the visitor</span>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="utm-med">Campaign Medium (Required)</label>
              <input
                id="utm-med"
                type="text"
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
                placeholder="e.g. cpc, email, paid_social"
                className="form-control"
              />
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Marketing delivery channel</span>
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="utm-camp">Campaign Name (Required)</label>
            <input
              id="utm-camp"
              type="text"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              placeholder="e.g. summer_sale, black_friday_2026"
              className="form-control"
            />
            <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Product promotion or strategic goal</span>
          </div>

          <div className="grid-cols-2" style={{ gap: "1rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="utm-term">Campaign Term (Optional)</label>
              <input
                id="utm-term"
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="e.g. paid_keyword_bids"
                className="form-control"
              />
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Target search keywords</span>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="utm-content">Campaign Content (Optional)</label>
              <input
                id="utm-content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="e.g. header_banner, blue_button"
                className="form-control"
              />
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Differentiates A/B test creatives</span>
            </div>
          </div>
        </div>

        {/* Right Output details */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Live Generated Campaign URL</span>
          
          {generatedLink ? (
            <div className="card flex flex-col gap-4" style={{ borderStyle: "solid", backgroundColor: "var(--bg-secondary)" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <span className="form-label">Complete Tracking URL</span>
                <textarea
                  value={generatedLink}
                  readOnly
                  className="form-control"
                  style={{ height: "130px", fontFamily: "var(--font-geist-mono)", fontSize: "0.85rem" }}
                  onClick={(e) => e.currentTarget.select()}
                />
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button className="btn btn-primary" style={{ flex: 1 }} onClick={handleCopy}>
                  📋 Copy UTM Link
                </button>
                <Link
                  href={`/tools/utility/qr-code-generator`}
                  className="btn btn-secondary"
                  style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                  title="Create scannable QR code from this tracking link"
                >
                  📱 Turn into QR Code
                </Link>
              </div>

              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem", lineHeight: "1.5" }}>
                ✅ <strong>GA4 Ready:</strong> Parameters are automatically URL-encoded. When clicked by visitors, Google Analytics 4 will correctly attribute traffic to <code>{source || "source"}</code> / <code>{medium || "medium"}</code> under campaign <code>{campaign || "campaign"}</code>.
              </div>
            </div>
          ) : (
            <div className="card text-center" style={{ padding: "4rem 0" }}>
              <p className="text-muted" style={{ margin: 0 }}>
                Enter your website URL to generate an error-free UTM tracking link.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

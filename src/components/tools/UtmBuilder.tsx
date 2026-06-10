"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function UtmBuilder() {
  const { showToast } = useToast();
  
  const [url, setUrl] = useState<string>("https://mywebsite.com");
  const [source, setSource] = useState<string>("newsletter");
  const [medium, setMedium] = useState<string>("email");
  const [campaign, setCampaign] = useState<string>("june_launch");
  const [term, setTerm] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [generatedLink, setGeneratedLink] = useState<string>("");

  const buildUrl = () => {
    let base = url.trim();
    if (!base) {
      showToast("Please enter a website URL.", "warning");
      return;
    }

    if (!/^https?:\/\//i.test(base)) {
      base = "https://" + base;
    }

    try {
      const parsedUrl = new URL(base);
      
      if (source.trim()) parsedUrl.searchParams.set("utm_source", source.trim());
      if (medium.trim()) parsedUrl.searchParams.set("utm_medium", medium.trim());
      if (campaign.trim()) parsedUrl.searchParams.set("utm_campaign", campaign.trim());
      if (term.trim()) parsedUrl.searchParams.set("utm_term", term.trim());
      if (content.trim()) parsedUrl.searchParams.set("utm_content", content.trim());

      setGeneratedLink(parsedUrl.toString());
      showToast("UTM campaign link generated!", "success");
    } catch (err) {
      showToast("Invalid URL format. Check website link.", "error");
    }
  };

  const handleCopy = () => {
    if (!generatedLink) return;
    navigator.clipboard.writeText(generatedLink);
    showToast("UTM link copied!", "success");
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left Inputs form */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Define Tracking Parameters</span>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="utm-website">Website URL (Required)</label>
            <input
              id="utm-website"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g. www.mysite.com"
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
                placeholder="e.g. newsletter, google, facebook"
                className="form-control"
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="utm-med">Campaign Medium (Required)</label>
              <input
                id="utm-med"
                type="text"
                value={medium}
                onChange={(e) => setMedium(e.target.value)}
                placeholder="e.g. email, cpc, banner"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="utm-camp">Campaign Name (Required)</label>
            <input
              id="utm-camp"
              type="text"
              value={campaign}
              onChange={(e) => setCampaign(e.target.value)}
              placeholder="e.g. summer_sale, launch_2026"
              className="form-control"
            />
          </div>

          <div className="grid-cols-2" style={{ gap: "1rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="utm-term">Campaign Term (Optional)</label>
              <input
                id="utm-term"
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="e.g. keyphrase_tags"
                className="form-control"
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="utm-content">Campaign Content (Optional)</label>
              <input
                id="utm-content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="e.g. sidebar_ad, text_link"
                className="form-control"
              />
            </div>
          </div>

          <button className="btn btn-primary" onClick={buildUrl} style={{ marginTop: "0.5rem" }}>
            🔗 Build UTM Link
          </button>
        </div>

        {/* Right Output details */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Composed UTM Tracking Link</span>
          
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

              <button className="btn btn-primary w-full" onClick={handleCopy}>
                📋 Copy UTM Link
              </button>

              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                💡 Share this link in your newsletters, paid ads, or profile links. When clicked, Google Analytics will track the referral matching your UTM parameters.
              </div>
            </div>
          ) : (
            <div className="card text-center" style={{ padding: "4rem 0" }}>
              <p className="text-muted" style={{ margin: 0 }}>
                Fill in the required fields and click Build to see your tracking URL.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

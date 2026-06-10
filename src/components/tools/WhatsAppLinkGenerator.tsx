"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function WhatsAppLinkGenerator() {
  const { showToast } = useToast();
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("Hello! I would like to inquire about your services.");
  const [generatedUrl, setGeneratedUrl] = useState<string>("");

  const handleGenerate = () => {
    // Strip everything except digits
    const cleanedPhone = phone.replace(/\D/g, "");
    
    if (!cleanedPhone) {
      showToast("Please enter a phone number including country code.", "warning");
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
    setGeneratedUrl(url);
    showToast("WhatsApp link generated!", "success");
  };

  const handleCopy = () => {
    if (!generatedUrl) return;
    navigator.clipboard.writeText(generatedUrl);
    showToast("Link copied to clipboard!", "success");
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left Inputs form */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Generate Click-to-Chat Link</span>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="wa-phone">Phone Number (with Country Code)</label>
            <input
              id="wa-phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +1 555 123 4567 or 44 7123 456789"
              className="form-control"
            />
            <span className="text-muted" style={{ fontSize: "0.8rem", marginTop: "0.25rem", display: "block" }}>
              Make sure to include the country code prefix, omitting any leading 0s.
            </span>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="wa-text-message">Pre-Filled Message (Optional)</label>
            <textarea
              id="wa-text-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message that users will send to you..."
              className="form-control"
              style={{ height: "90px" }}
            />
          </div>

          <button className="btn btn-primary" onClick={handleGenerate}>
            🔗 Create Link
          </button>
        </div>

        {/* Right output and testing block */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Generated Link Output</span>
          
          {generatedUrl ? (
            <div className="card flex flex-col gap-4" style={{ borderStyle: "solid", backgroundColor: "var(--bg-secondary)" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <span className="form-label">WhatsApp URL</span>
                <input
                  type="text"
                  value={generatedUrl}
                  readOnly
                  className="form-control"
                  style={{ fontFamily: "var(--font-geist-mono)", fontSize: "0.85rem" }}
                  onClick={(e) => e.currentTarget.select()}
                />
              </div>

              <div className="flex gap-2">
                <button className="btn btn-secondary w-full" onClick={handleCopy}>
                  📋 Copy Link
                </button>
                <a
                  href={generatedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full text-center"
                  style={{ textDecoration: "none" }}
                >
                  ⚡ Test Link
                </a>
              </div>

              <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                💡 Paste this link into your Instagram bio, contact page, or newsletter emails to let customers start a WhatsApp chat with you instantly.
              </div>
            </div>
          ) : (
            <div className="card text-center" style={{ padding: "3rem 0" }}>
              <p className="text-muted" style={{ margin: 0 }}>
                Fill in the details on the left and click Create to generate your WhatsApp contact link.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function UrlEncoderDecoder() {
  const { showToast } = useToast();
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  const handleEncode = () => {
    if (!input.trim()) {
      showToast("Please enter text in the input box first.", "warning");
      return;
    }
    try {
      const res = encodeURIComponent(input);
      setOutput(res);
      showToast("String encoded successfully!", "success");
    } catch (err) {
      showToast("Error encoding string. Please verify input.", "error");
    }
  };

  const handleDecode = () => {
    if (!input.trim()) {
      showToast("Please enter text in the input box first.", "warning");
      return;
    }
    try {
      const res = decodeURIComponent(input);
      setOutput(res);
      showToast("String decoded successfully!", "success");
    } catch (err) {
      showToast("Malformed URL parameters. Decode failed.", "error");
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    showToast("Output copied to clipboard!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Input Text Box */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="url-input-box">Input String</label>
          <textarea
            id="url-input-box"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control"
            placeholder="Type or paste text to encode/decode (e.g. hello world & hello?)"
            style={{ height: "100px" }}
          />
        </div>

        {/* Translation action buttons */}
        <div className="flex gap-2">
          <button className="btn btn-primary w-full" onClick={handleEncode}>
            🔒 Encode URL Safe
          </button>
          <button className="btn btn-primary w-full" onClick={handleDecode}>
            🔓 Decode URL Safe
          </button>
        </div>

        {/* Output Text Box */}
        {output && (
          <div className="form-group" style={{ marginBottom: 0 }}>
            <div className="flex justify-between items-center" style={{ marginBottom: "0.5rem" }}>
              <label className="form-label" style={{ margin: 0 }} htmlFor="url-output-box">Processed Output</label>
              <button className="btn btn-secondary btn-sm" onClick={handleCopy}>
                📋 Copy Output
              </button>
            </div>
            <textarea
              id="url-output-box"
              value={output}
              readOnly
              className="form-control"
              style={{ height: "100px", fontFamily: "var(--font-geist-mono)" }}
            />
          </div>
        )}

      </div>
    </div>
  );
}

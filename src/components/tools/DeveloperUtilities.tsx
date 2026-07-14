"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useToast } from "@/context/ToastContext";

export default function DeveloperUtilities() {
  const params = useParams();
  const { showToast } = useToast();
  const slug = (params?.slug as string) || "json-formatter";

  // Common UI State
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  // JSON Formatter specific states
  const [jsonIndent, setJsonIndent] = useState<number>(2);

  // JSON Validator specific states
  const [validationResult, setValidationResult] = useState<{ valid: boolean; error?: string } | null>(null);

  // UUID Generator specific states
  const [uuidQuantity, setUuidQuantity] = useState<number>(5);
  const [uuidVersion, setUuidVersion] = useState<"v4" | "v1">("v4");
  const [generatedUuids, setGeneratedUuids] = useState<string[]>([]);

  // Base64 specific
  const [base64Mode, setBase64Mode] = useState<"encode" | "decode">("encode");

  // Reset states on slug change
  useEffect(() => {
    setInputText("");
    setOutputText("");
    setValidationResult(null);
    setGeneratedUuids([]);
  }, [slug]);

  const handleCopy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    showToast("Copied to clipboard!", "success");
  };

  // 1. JSON FORMATTER
  const handleJsonFormat = (minify: boolean = false) => {
    try {
      if (!inputText.trim()) return;
      const parsed = JSON.parse(inputText);
      if (minify) {
        setOutputText(JSON.stringify(parsed));
        showToast("JSON minified successfully!", "success");
      } else {
        setOutputText(JSON.stringify(parsed, null, jsonIndent));
        showToast("JSON formatted successfully!", "success");
      }
    } catch (err: any) {
      showToast(`Invalid JSON: ${err.message}`, "error");
    }
  };

  // 2. JSON VALIDATOR
  const handleJsonValidate = () => {
    try {
      if (!inputText.trim()) {
        setValidationResult(null);
        return;
      }
      JSON.parse(inputText);
      setValidationResult({ valid: true });
      showToast("Valid JSON!", "success");
    } catch (err: any) {
      setValidationResult({ valid: false, error: err.message });
      showToast("Invalid JSON syntax found.", "error");
    }
  };

  // 3. BASE64 ENCODER & DECODER
  const handleBase64Process = () => {
    try {
      if (base64Mode === "encode") {
        setOutputText(btoa(inputText));
        showToast("Text encoded to Base64!", "success");
      } else {
        setOutputText(atob(inputText));
        showToast("Base64 decoded successfully!", "success");
      }
    } catch (err: any) {
      showToast(`Base64 error: ${err.message}`, "error");
    }
  };

  // File to Base64 encoder
  const handleBase64File = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const dataUrl = evt.target?.result as string;
      setOutputText(dataUrl);
      showToast(`Encoded file: ${file.name} to Base64 dataURL`, "success");
    };
    reader.onerror = () => showToast("Failed to read file.", "error");
    reader.readAsDataURL(file);
  };

  // 4. JWT DECODER
  const handleJwtDecode = () => {
    try {
      const token = inputText.trim();
      if (!token) return;

      const parts = token.split(".");
      if (parts.length !== 3) {
        throw new Error("JWT must contain 3 segments separated by dots (.)");
      }

      const decodeBase64Url = (str: string) => {
        let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
        while (base64.length % 4) {
          base64 += "=";
        }
        return atob(base64);
      };

      const header = JSON.parse(decodeBase64Url(parts[0]));
      const payload = JSON.parse(decodeBase64Url(parts[1]));

      // Format expiry times if present
      const formattedPayload = { ...payload };
      if (payload.exp) {
        formattedPayload.exp_readable = new Date(payload.exp * 1000).toLocaleString();
      }
      if (payload.iat) {
        formattedPayload.iat_readable = new Date(payload.iat * 1000).toLocaleString();
      }

      setOutputText(JSON.stringify({ header, payload: formattedPayload }, null, 2));
      showToast("JWT Decoded successfully!", "success");
    } catch (err: any) {
      showToast(`JWT Decoding failed: ${err.message}`, "error");
    }
  };

  // 5. UUID GENERATOR
  const generateUuids = () => {
    const arr: string[] = [];
    for (let i = 0; i < uuidQuantity; i++) {
      if (uuidVersion === "v4") {
        // Simple v4 UUID generator matching specs
        arr.push(
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            const v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          })
        );
      } else {
        // v1 UUID simulation (time-based)
        const timestamp = Date.now().toString(16).padStart(12, "0");
        const node = Math.random().toString(16).substring(2, 14).padStart(12, "0");
        arr.push(`${timestamp.slice(4)}-${timestamp.slice(0,4)}-1${timestamp.slice(0,3)}-8000-${node}`);
      }
    }
    setGeneratedUuids(arr);
    showToast(`Generated ${uuidQuantity} UUIDs!`, "success");
  };

  // 6. CODE MINIFIERS (HTML, CSS, JS)
  const handleMinify = () => {
    if (!inputText.trim()) return;
    let minified = inputText;

    if (slug === "html-minifier") {
      // Basic HTML minification: strip comments, compress whitespace between tags
      minified = minified.replace(/<!--[\s\S]*?-->/g, "");
      minified = minified.replace(/>\s+</g, "><");
      minified = minified.replace(/\s+/g, " ");
      showToast("HTML minified!", "success");
    } else if (slug === "css-minifier") {
      // Basic CSS minification: strip comments, whitespace, empty rules
      minified = minified.replace(/\/\*[\s\S]*?\*\//g, "");
      minified = minified.replace(/\s*([\{\}:;,])\s*/g, "$1");
      minified = minified.replace(/\s+/g, " ");
      minified = minified.replace(/;\}/g, "}");
      showToast("CSS minified!", "success");
    } else if (slug === "javascript-minifier") {
      // Basic JS minification: strip single-line and block comments, redundant spaces
      minified = minified.replace(/\/\*[\s\S]*?\*\//g, "");
      minified = minified.replace(/\/\/.*/g, "");
      minified = minified.replace(/\s*([=+\-*\/\{\}\(\)\[\];,<>])\s*/g, "$1");
      minified = minified.replace(/\s+/g, " ");
      showToast("JavaScript minified!", "success");
    }

    setOutputText(minified.trim());
  };

  const getSavings = () => {
    if (!inputText.length || !outputText.length) return "";
    const original = inputText.length;
    const mini = outputText.length;
    const savings = ((original - mini) / original) * 100;
    return `${original} bytes to ${mini} bytes (${savings.toFixed(1)}% smaller)`;
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* 1. JSON FORMATTER */}
        {slug === "json-formatter" && (
          <div className="flex flex-col gap-5">
            <div className="form-group">
              <label className="form-label" htmlFor="json-input">Paste Raw JSON</label>
              <textarea
                id="json-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder='{"name":"creatorunits","type":"utility","nested":{"active":true}}'
                className="form-control"
                style={{ fontFamily: "monospace" }}
                rows={6}
              />
            </div>

            <div className="flex justify-between items-center" style={{ flexWrap: "wrap", gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <label className="form-label" htmlFor="json-indent" style={{ margin: 0 }}>Indentation Spaces:</label>
                <select
                  id="json-indent"
                  value={jsonIndent}
                  onChange={(e) => setJsonIndent(Number(e.target.value))}
                  className="form-control form-select"
                  style={{ width: "80px" }}
                >
                  <option value="2">2</option>
                  <option value="4">4</option>
                  <option value="8">8</option>
                </select>
              </div>

              <div className="flex" style={{ gap: "1rem" }}>
                <button className="btn btn-secondary" onClick={() => handleJsonFormat(true)}>
                  Minify JSON
                </button>
                <button className="btn btn-primary" onClick={() => handleJsonFormat(false)}>
                  Format JSON
                </button>
              </div>
            </div>

            {outputText && (
              <div className="card" style={{ borderStyle: "solid", position: "relative" }}>
                <pre style={{ margin: 0, maxHeight: "350px", overflow: "auto", fontFamily: "monospace", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {outputText}
                </pre>
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => handleCopy(outputText)}>
                    📋 Copy formatted JSON
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 2. JSON VALIDATOR */}
        {slug === "json-validator" && (
          <div className="flex flex-col gap-5">
            <div className="form-group">
              <label className="form-label" htmlFor="json-val-input">Enter JSON to Validate</label>
              <textarea
                id="json-val-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder='{"valid": true}'
                className="form-control"
                style={{ fontFamily: "monospace" }}
                rows={8}
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleJsonValidate}>
              🔍 Validate JSON Syntax
            </button>

            {validationResult && (
              <div className="card" style={{
                borderStyle: "solid",
                backgroundColor: validationResult.valid ? "var(--bg-secondary)" : "rgba(238, 0, 0, 0.05)",
                borderColor: validationResult.valid ? "var(--success-color, #0070f3)" : "var(--error-color, #ee0000)"
              }}>
                {validationResult.valid ? (
                  <div style={{ color: "var(--success-color, #0070f3)", fontWeight: "bold" }}>
                    ✓ JSON Syntax is perfectly valid!
                  </div>
                ) : (
                  <div>
                    <div style={{ color: "var(--error-color, #ee0000)", fontWeight: "bold", marginBottom: "0.25rem" }}>
                      ✗ Invalid JSON Syntax:
                    </div>
                    <pre style={{ margin: 0, fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "monospace" }}>
                      {validationResult.error}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* 3. BASE64 ENCODER & DECODER */}
        {slug === "base64-encoder-decoder" && (
          <div className="flex flex-col gap-6">
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="b64-mode">Select Operation Mode</label>
                <select
                  id="b64-mode"
                  value={base64Mode}
                  onChange={(e) => setBase64Mode(e.target.value as any)}
                  className="form-control form-select"
                >
                  <option value="encode">Encode Text to Base64</option>
                  <option value="decode">Decode Base64 to Text</option>
                </select>
              </div>

              {base64Mode === "encode" && (
                <div className="form-group">
                  <label className="form-label" htmlFor="b64-file">Or Encode File to Base64</label>
                  <input
                    id="b64-file"
                    type="file"
                    onChange={handleBase64File}
                    className="form-control"
                    style={{ padding: "0.35rem 0.75rem" }}
                  />
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="b64-input">Input String</label>
              <textarea
                id="b64-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="form-control"
                rows={4}
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleBase64Process}>
              {base64Mode === "encode" ? "🔒 Base64 Encode" : "🔑 Base64 Decode"}
            </button>

            {outputText && (
              <div className="card" style={{ borderStyle: "solid", position: "relative" }}>
                <pre style={{
                  margin: 0,
                  maxHeight: "300px",
                  overflow: "auto",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all",
                  fontSize: "0.85rem",
                  fontFamily: "monospace",
                  color: "var(--text-secondary)"
                }}>
                  {outputText}
                </pre>
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => handleCopy(outputText)}>
                    📋 Copy Result
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 4. JWT DECODER */}
        {slug === "jwt-decoder" && (
          <div className="flex flex-col gap-6">
            <div className="form-group">
              <label className="form-label" htmlFor="jwt-input">Paste encoded JSON Web Token (JWT)</label>
              <textarea
                id="jwt-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                className="form-control"
                style={{ fontFamily: "monospace" }}
                rows={4}
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleJwtDecode}>
              🔓 Decode JWT Payload
            </button>

            {outputText && (
              <div className="card" style={{ borderStyle: "solid", position: "relative" }}>
                <pre style={{ margin: 0, fontFamily: "monospace", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  {outputText}
                </pre>
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => handleCopy(outputText)}>
                    📋 Copy Payload
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. UUID GENERATOR */}
        {slug === "uuid-generator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>UUID Generator Configuration</h3>
              <div className="grid-cols-2" style={{ gap: "2rem" }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="uuid-qty">Quantity: <strong>{uuidQuantity}</strong></label>
                  <input
                    id="uuid-qty"
                    type="range"
                    min="1"
                    max="50"
                    value={uuidQuantity}
                    onChange={(e) => setUuidQuantity(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="uuid-ver">UUID Version</label>
                  <select
                    id="uuid-ver"
                    value={uuidVersion}
                    onChange={(e) => setUuidVersion(e.target.value as any)}
                    className="form-control form-select"
                  >
                    <option value="v4">Version 4 (Random)</option>
                    <option value="v1">Version 1 (Time-based)</option>
                  </select>
                </div>
              </div>
              <button className="btn btn-primary w-full" style={{ marginTop: "1.25rem" }} onClick={generateUuids}>
                ⚡ Generate UUID List
              </button>
            </div>

            {generatedUuids.length > 0 && (
              <div className="card" style={{ borderStyle: "solid", position: "relative" }}>
                <pre style={{
                  margin: 0,
                  fontFamily: "monospace",
                  fontSize: "0.85rem",
                  maxHeight: "250px",
                  overflow: "auto",
                  color: "var(--text-secondary)"
                }}>
                  {generatedUuids.join("\n")}
                </pre>
                <div style={{ marginTop: "1.25rem", display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => handleCopy(generatedUuids.join("\n"))}>
                    📋 Copy List
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6. HTML, CSS, JS MINIFIERS */}
        {(slug === "html-minifier" || slug === "css-minifier" || slug === "javascript-minifier") && (
          <div className="flex flex-col gap-6">
            <div className="form-group">
              <label className="form-label" htmlFor="minify-input">
                {slug === "html-minifier" ? "Paste HTML Code:" : slug === "css-minifier" ? "Paste CSS Code:" : "Paste JavaScript Code:"}
              </label>
              <textarea
                id="minify-input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="/* Raw code input dashboard */"
                className="form-control"
                style={{ fontFamily: "monospace" }}
                rows={7}
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleMinify}>
              🚀 Minify Source Code
            </button>

            {outputText && (
              <div className="flex flex-col gap-3">
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Size Savings: <strong>{getSavings()}</strong>
                </div>

                <div className="card" style={{ borderStyle: "solid", position: "relative" }}>
                  <pre style={{
                    margin: 0,
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    maxHeight: "300px",
                    overflow: "auto",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-all",
                    color: "var(--text-secondary)"
                  }}>
                    {outputText}
                  </pre>
                  <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                    <button className="btn btn-secondary btn-sm" onClick={() => handleCopy(outputText)}>
                      📋 Copy Minified Code
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

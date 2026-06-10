"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function QrCodeGenerator() {
  const { showToast } = useToast();
  
  const [qrType, setQrType] = useState<string>("url");
  const [url, setUrl] = useState<string>("https://creatorutils.com");
  const [text, setText] = useState<string>("");
  
  // Wi-Fi states
  const [ssid, setSsid] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [security, setSecurity] = useState<string>("WPA");

  const [qrSrc, setQrSrc] = useState<string>("");
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const getQRContent = (): string => {
    if (qrType === "url") {
      let cleanUrl = url.trim();
      if (cleanUrl && !/^https?:\/\//i.test(cleanUrl)) {
        cleanUrl = "https://" + cleanUrl;
      }
      return cleanUrl;
    }
    if (qrType === "text") {
      return text;
    }
    if (qrType === "wifi") {
      // Formats Wi-Fi credentials according to standard WIFI protocols
      // WIFI:S:SSID;T:WPA;P:PASSWORD;;
      return `WIFI:S:${ssid.trim()};T:${security};P:${password};;`;
    }
    return "";
  };

  const handleGenerate = () => {
    const data = getQRContent();
    if (!data.trim()) {
      showToast("Please fill in required fields.", "warning");
      return;
    }

    const size = 300;
    const src = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
    setQrSrc(src);
    showToast("QR Code generated successfully!", "success");
  };

  const downloadQR = async () => {
    if (!qrSrc) return;
    setIsDownloading(true);

    try {
      const response = await fetch(qrSrc);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `qr-code-${qrType}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(objectUrl);
      showToast("QR Code downloaded!", "success");
    } catch (err) {
      showToast("Download failed. Try right-clicking the image.", "error");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left Input form */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>QR Code Configurations</span>

          {/* Type Selector tabs */}
          <div className="flex" style={{ gap: "0.5rem" }}>
            <button
              className={`btn ${qrType === "url" ? "btn-primary" : "btn-secondary"} btn-sm`}
              onClick={() => setQrType("url")}
            >
              URL Link
            </button>
            <button
              className={`btn ${qrType === "text" ? "btn-primary" : "btn-secondary"} btn-sm`}
              onClick={() => setQrType("text")}
            >
              Plain Text
            </button>
            <button
              className={`btn ${qrType === "wifi" ? "btn-primary" : "btn-secondary"} btn-sm`}
              onClick={() => setQrType("wifi")}
            >
              Wi-Fi Credentials
            </button>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid var(--border-color)", margin: "0.5rem 0" }} />

          {/* URL Input */}
          {qrType === "url" && (
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="qr-url-val">Website URL Link</label>
              <input
                id="qr-url-val"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="form-control"
                placeholder="e.g. www.mywebsite.com"
              />
            </div>
          )}

          {/* Text Input */}
          {qrType === "text" && (
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="qr-text-val">Raw Text / Notes</label>
              <textarea
                id="qr-text-val"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control"
                placeholder="Enter some text notes to save..."
                style={{ height: "100px" }}
              />
            </div>
          )}

          {/* Wi-Fi Credentials Input */}
          {qrType === "wifi" && (
            <div className="flex flex-col gap-3">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="qr-wifi-ssid">Network Name (SSID)</label>
                <input
                  id="qr-wifi-ssid"
                  type="text"
                  value={ssid}
                  onChange={(e) => setSsid(e.target.value)}
                  className="form-control"
                  placeholder="My Wi-Fi Name"
                />
              </div>

              <div className="grid-cols-2" style={{ gap: "1rem" }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="qr-wifi-pass">Password</label>
                  <input
                    id="qr-wifi-pass"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="WLAN Key"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="qr-wifi-security">Security Mode</label>
                  <select
                    id="qr-wifi-security"
                    value={security}
                    onChange={(e) => setSecurity(e.target.value)}
                    className="form-control form-select"
                  >
                    <option value="WPA">WPA / WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">No Password (Open)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <button className="btn btn-primary" onClick={handleGenerate} style={{ marginTop: "0.5rem" }}>
            ⚡ Generate QR Code
          </button>
        </div>

        {/* Right QR preview and download */}
        <div className="flex flex-col gap-4 items-center">
          <span className="form-label w-full" style={{ fontSize: "1.1rem" }}>QR Code Output</span>
          
          {qrSrc ? (
            <div className="card flex flex-col items-center gap-4 w-full" style={{ borderStyle: "solid", backgroundColor: "var(--bg-secondary)" }}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "white",
                  padding: "0.5rem",
                  borderRadius: "var(--border-radius-md)",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <img
                  src={qrSrc}
                  alt="Generated QR Code"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <button className="btn btn-primary w-full" onClick={downloadQR} disabled={isDownloading}>
                {isDownloading ? "Downloading..." : "📥 Download QR Code PNG"}
              </button>
            </div>
          ) : (
            <div className="card text-center w-full" style={{ padding: "3rem 0" }}>
              <p className="text-muted" style={{ margin: 0 }}>
                Define configurations on the left and generate a QR code.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

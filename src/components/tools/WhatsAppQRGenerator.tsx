"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

export default function WhatsAppQRGenerator() {
  const { showToast } = useToast();
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("Hello, I'd like to ask about your products.");
  const [qrSrc, setQrSrc] = useState<string>("");
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const handleGenerate = () => {
    const cleanedPhone = phone.replace(/\D/g, "");
    
    if (!cleanedPhone) {
      showToast("Please enter a phone number including country code.", "warning");
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
    
    // QR Server API endpoints
    const size = 300;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(waUrl)}`;
    
    setQrSrc(qrUrl);
    showToast("WhatsApp QR Code generated!", "success");
  };

  const downloadQR = async () => {
    if (!qrSrc) return;
    setIsDownloading(true);

    try {
      // Fetch the image from the API (which supports CORS)
      const response = await fetch(qrSrc);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `whatsapp-qr-code.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(objectUrl);
      showToast("QR Code downloaded successfully!", "success");
    } catch (err) {
      showToast("Failed to download QR code. Try right-clicking the image instead.", "error");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left inputs */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Create Scan-to-Chat QR Code</span>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="wa-qr-phone">Phone Number (with Country Code)</label>
            <input
              id="wa-qr-phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 1 555 123 4567 or 44 7123 456789"
              className="form-control"
            />
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="wa-qr-message">Pre-Filled message (Optional)</label>
            <textarea
              id="wa-qr-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message that users will send to you..."
              className="form-control"
              style={{ height: "90px" }}
            />
          </div>

          <button className="btn btn-primary" onClick={handleGenerate}>
            ⚡ Generate QR Code
          </button>
        </div>

        {/* Right QR preview and download button */}
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
                  alt="WhatsApp Contact QR Code"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <button className="btn btn-primary w-full" onClick={downloadQR} disabled={isDownloading}>
                {isDownloading ? "Downloading..." : "📥 Download QR Code PNG"}
              </button>

              <p className="text-muted text-center" style={{ fontSize: "0.8rem", margin: 0 }}>
                Print this QR code on cards, package labels, or banners to let customers scan and start a conversation.
              </p>
            </div>
          ) : (
            <div className="card text-center w-full" style={{ padding: "3rem 0" }}>
              <p className="text-muted" style={{ margin: 0 }}>
                Enter phone details on the left and click Generate to produce your custom QR code.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

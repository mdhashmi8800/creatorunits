"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error in structured format
    console.error("Unhandled runtime rendering crash caught by root boundary:", {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
    });
  }, [error]);

  return (
    <>
      <Header />
      <main className="main-content section" id="main-content">
        <div className="container text-center" style={{ maxWidth: "600px", padding: "4rem 1.5rem" }}>
          <div style={{ fontSize: "6rem", marginBottom: "1rem", opacity: 0.8 }} aria-hidden="true">
            ⚠️
          </div>
          <h1 style={{ fontSize: "2.25rem", marginBottom: "0.75rem", letterSpacing: "-1px" }}>
            Something went wrong!
          </h1>
          <p className="text-muted" style={{ fontSize: "1.1rem", marginBottom: "2.5rem", lineHeight: "1.6" }}>
            An unexpected error occurred while rendering this page. We have logged this diagnostic details, and you can try reloading or returning home.
          </p>

          <div 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "1rem", 
              maxWidth: "350px", 
              margin: "0 auto 3rem auto" 
            }}
          >
            <button 
              onClick={() => reset()} 
              className="btn btn-primary"
              style={{ width: "100%", padding: "0.75rem 1.5rem", fontSize: "0.95rem" }}
            >
              Try Again
            </button>
            <Link 
              href="/" 
              className="btn btn-secondary"
              style={{ width: "100%", padding: "0.75rem 1.5rem", fontSize: "0.95rem" }}
            >
              Go to Homepage
            </Link>
          </div>

          <div style={{ marginTop: "2rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1.25rem" }}>Popular Utilities</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", textAlign: "left" }}>
              <Link 
                href="/tools/image/image-compressor" 
                className="card card-hover" 
                style={{ textDecoration: "none", padding: "1rem 1.25rem" }}
              >
                <strong style={{ color: "var(--text-primary)", fontSize: "0.95rem" }}>Image Compressor</strong>
                <p className="text-muted" style={{ fontSize: "0.825rem", margin: "0.25rem 0 0 0" }}>
                  Compress WebP, PNG, JPG locally in your browser
                </p>
              </Link>
              <Link 
                href="/tools/utility/qr-code-generator" 
                className="card card-hover" 
                style={{ textDecoration: "none", padding: "1rem 1.25rem" }}
              >
                <strong style={{ color: "var(--text-primary)", fontSize: "0.95rem" }}>QR Code Generator</strong>
                <p className="text-muted" style={{ fontSize: "0.825rem", margin: "0.25rem 0 0 0" }}>
                  Generate and download offline-first vector QR codes
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

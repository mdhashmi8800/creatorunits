import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="main-content section" id="main-content">
        <div className="container text-center" style={{ maxWidth: "600px", padding: "4rem 1.5rem" }}>
          <div style={{ fontSize: "6rem", marginBottom: "1rem", opacity: 0.7 }}>404</div>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Page Not Found</h1>
          <p className="text-muted" style={{ fontSize: "1.1rem", marginBottom: "2rem" }}>
            The page you are looking for does not exist or has been moved. Try one of our popular tools below.
          </p>

          <div className="flex flex-col gap-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
            <Link href="/" className="btn btn-primary">
              Go to Homepage
            </Link>
            <Link href="/tools" className="btn btn-secondary">
              Browse All Tools
            </Link>
          </div>

          <div style={{ marginTop: "3rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Popular Tools</h2>
            <div className="flex flex-col gap-3" style={{ maxWidth: "400px", margin: "0 auto" }}>
              <Link href="/tools/image/image-compressor" className="card card-hover" style={{ textDecoration: "none", borderStyle: "solid", textAlign: "left" }}>
                <strong style={{ color: "var(--text-primary)" }}>Image Compressor</strong>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: "0.25rem 0 0 0" }}>Compress PNG, JPG, WebP images</p>
              </Link>
              <Link href="/tools/utility/qr-code-generator" className="card card-hover" style={{ textDecoration: "none", borderStyle: "solid", textAlign: "left" }}>
                <strong style={{ color: "var(--text-primary)" }}>QR Code Generator</strong>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: "0.25rem 0 0 0" }}>Generate QR codes for URLs, text</p>
              </Link>
              <Link href="/tools/social/fancy-text-generator" className="card card-hover" style={{ textDecoration: "none", borderStyle: "solid", textAlign: "left" }}>
                <strong style={{ color: "var(--text-primary)" }}>Fancy Text Generator</strong>
                <p className="text-muted" style={{ fontSize: "0.85rem", margin: "0.25rem 0 0 0" }}>Stylized Unicode text for social</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

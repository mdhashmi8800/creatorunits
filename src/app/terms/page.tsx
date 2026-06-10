import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service - CreatorUtils",
  description: "Read our Terms of Service. Simple, straightforward rules for using our free creator utilities.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="main-content section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <h1 className="mb-6">Terms of Service</h1>

          <div className="flex flex-col gap-5" style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
            <p>
              Welcome to CreatorUtils. By accessing and using our website (creatorutils.com) and our browser tools, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you are agreeing to be bound by these website Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>2. Use License</h2>
            <p>
              Permission is granted to utilize the tools on CreatorUtils free of charge for personal and commercial use cases (e.g. compressing graphics for your shop, generating secure codes for your business, exporting Link-in-Bio single pages). You may not:
            </p>
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li>Attempt to decompile, reverse-engineer, or crack the Javascript logic files of CreatorUtils.</li>
              <li>Re-host our tools iframe layouts or embed them in separate commercial portals without our authorization.</li>
              <li>Use the tools for any illegal purpose or to transmit malicious scripts or viruses.</li>
            </ul>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>3. Disclaimer & Warranty</h2>
            <p>
              The materials and tools on CreatorUtils are provided &quot;as is&quot;. CreatorUtils makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>4. Limitations of Liability</h2>
            <p>
              In no event shall CreatorUtils or its maintainers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the tools on CreatorUtils, even if CreatorUtils has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 style={{ fontSize: "1.35rem", color: "var(--text-primary)", marginTop: "1rem", margin: "0" }}>5. Revisions and Errata</h2>
            <p>
              The materials appearing on CreatorUtils could include technical, typographical, or photographic errors. CreatorUtils does not warrant that any of the materials on its website are accurate, complete, or current. CreatorUtils may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - CreatorUtils",
  description: "Learn about the mission behind CreatorUtils. Free, browser-local tools for creators, freelancers, and small businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us - CreatorUtils",
    description: "Learn about the mission behind CreatorUtils. Free, browser-local tools for creators, freelancers, and small businesses.",
    images: ["/og-image.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="main-content section" id="main-content">
        <div className="container" style={{ maxWidth: "800px" }}>
          
          <h1 className="mb-6">About CreatorUtils</h1>
          
          <div className="flex flex-col gap-6" style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.75" }}>
            <p>
              <strong>CreatorUtils</strong> is a modern online toolkit offering 30+ browser-based tools designed to solve daily technical problems for YouTube creators, social media managers, freelancers, students, and small business owners.
            </p>

            <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginTop: "1rem" }}>Why We Exist</h2>
            <p>
              Most toolkit websites are slow, cluttered with ads, and force you to upload your images or documents to remote servers. This harms your page performance, compromises your privacy, and runs up expensive server operating costs.
            </p>
            <p>
              We built CreatorUtils with a different philosophy: privacy-first, client-side execution, and premium design. By running tool computations directly on your computer or mobile device using Javascript and Canvas APIs, we achieve three major milestones:
            </p>
            
            <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li><strong>Ultimate Data Privacy:</strong> Your sensitive screenshots, marketing graphics, and custom messages never touch our servers. They remain entirely in your browser memory.</li>
              <li><strong>Zero Wait-Times:</strong> Canvas modifications and string encodings happen locally in a fraction of a millisecond. No slow file uploads or server queues.</li>
              <li><strong>Low Server Maintenance:</strong> Because your device does the heavy lifting, we don&apos;t need heavy backend compute servers. This allows us to keep CreatorUtils 100% free and fast forever.</li>
            </ul>

            <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginTop: "1rem" }}>Our Architecture</h2>
            <p>
              CreatorUtils is built on modern static web standards. By compiling pages statically and dynamically lazy-loading interactive widgets, pages load instantly on slow mobile connections. This makes the platform optimized for Core Web Vitals and search engine indexing.
            </p>

            <p style={{ marginTop: "1.5rem", fontWeight: "600", color: "var(--text-primary)" }}>
              Thank you for using CreatorUtils. If you have tool suggestions or feedback, please contact us through our contact form.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

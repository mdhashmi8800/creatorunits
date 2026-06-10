import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ToolRenderer from "@/components/tools/ToolRenderer";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { tools, getToolBySlug } from "@/data/tools";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return tools.map((tool) => ({
    category: tool.category,
    slug: tool.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return {
    title: `${tool.seoTitle} | CreatorUtils`,
    description: tool.metaDesc,
    openGraph: {
      title: `${tool.seoTitle} | CreatorUtils`,
      description: tool.metaDesc,
    }
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  // Get related tools (same category, excluding current)
  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  // JSON-LD structured schemas
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": tool.title,
    "url": `https://creatorutils.com/tools/${tool.category}/${tool.slug}`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires HTML5, Javascript, Canvas",
    "description": tool.shortDesc,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tool.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <>
      {/* Dynamic Schema tags in head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main className="main-content section">
        <div className="container">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem", fontSize: "0.85rem" }}>
            <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link>
            <span style={{ margin: "0 0.5rem", color: "var(--text-muted)" }}>/</span>
            <Link href={`/category/${tool.category}`} style={{ color: "var(--text-muted)", textDecoration: "none" }}>
              {tool.categoryName}
            </Link>
            <span style={{ margin: "0 0.5rem", color: "var(--text-muted)" }}>/</span>
            <span style={{ color: "var(--text-primary)", fontWeight: "600" }}>{tool.title}</span>
          </nav>

          {/* Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>{tool.title}</h1>
            <p className="text-muted" style={{ fontSize: "1.05rem", margin: 0 }}>
              {tool.shortDesc}
            </p>
          </div>

          {/* Tool Widget Interface Area */}
          <section style={{ marginBottom: "3rem" }}>
            <ToolRenderer componentName={tool.componentName} />
          </section>

          {/* Step-by-Step Instructions & Features */}
          <div className="grid-cols-2" style={{ gap: "2rem", marginBottom: "3rem" }}>
            <div className="card" style={{ borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>📋 How to Use</h3>
              <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
                {tool.instructions.map((inst, idx) => (
                  <li key={idx} style={{ color: "var(--text-secondary)" }}>{inst}</li>
                ))}
              </ol>
            </div>

            <div className="card" style={{ borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>⚡ Key Features</h3>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem", listStyleType: "square" }}>
                {tool.features.map((feat, idx) => (
                  <li key={idx} style={{ color: "var(--text-secondary)" }}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rich SEO Content */}
          <section className="card" style={{ borderStyle: "solid", backgroundColor: "var(--bg-primary)", padding: "2.5rem", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{tool.seoHeading}</h2>
            <p className="text-muted" style={{ fontSize: "1.05rem", marginBottom: "1.5rem" }}>
              {tool.seoIntro}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: tool.seoBody }}
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                lineHeight: "1.75",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem"
              }}
            />
          </section>

          {/* FAQs section */}
          <section style={{ marginBottom: "3.5rem" }}>
            <h2 className="text-center mb-6">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4" style={{ maxWidth: "800px", margin: "0 auto" }}>
              {tool.faqs.map((faq, idx) => (
                <div key={idx} className="card" style={{ borderStyle: "solid" }}>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>{faq.question}</h3>
                  <p className="text-muted" style={{ fontSize: "0.9rem", margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Tools section */}
          {relatedTools.length > 0 && (
            <section style={{ borderTop: "1px solid var(--border-color)", paddingTop: "3rem" }}>
              <h2 className="mb-6">Related {tool.categoryName}</h2>
              <div className="grid-cols-4">
                {relatedTools.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/tools/${rel.category}/${rel.slug}`}
                    className="card card-hover flex flex-col gap-2"
                    style={{ textDecoration: "none", color: "inherit", borderStyle: "solid", padding: "1.25rem" }}
                  >
                    <h4 style={{ fontSize: "1rem", margin: 0 }}>{rel.title}</h4>
                    <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                      {rel.shortDesc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}

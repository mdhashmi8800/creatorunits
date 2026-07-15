export const dynamic = "force-static";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { tools, getToolBySlug } from "@/data/tools";
import { Metadata } from "next";
import ToolWidgetClient from "./ToolWidgetClient";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ToolsDirectoryMatrix from "@/components/tools/ToolsDirectoryMatrix";
import { articlesIndex } from "@/data/articles-index";

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

// Reverted dynamicParams to fix 404
// export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) return {};

  return {
    title: `${tool.seoTitle} | Creators Units`,
    description: tool.metaDesc,
    alternates: {
      canonical: `/tools/${tool.category}/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.seoTitle} | Creators Units`,
      description: tool.metaDesc,
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${tool.title} - Creators Units`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.seoTitle} | Creators Units`,
      description: tool.metaDesc,
      images: ["/og-image.png"],
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 4);

  const popularTools = tools
    .filter((t) => ["image-compressor", "youtube-thumbnail-preview", "password-generator", "qr-code-generator", "username-generator", "utm-builder"].includes(t.slug) && t.id !== tool.id)
    .slice(0, 4);

  const relatedArticles = articlesIndex
    .filter((art) => art.relatedToolSlugs && art.relatedToolSlugs.includes(tool.slug))
    .slice(0, 4);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://www.creatorunits.com/tools/${tool.category}/${tool.slug}#webpage`,
    "url": `https://www.creatorunits.com/tools/${tool.category}/${tool.slug}`,
    "name": `${tool.seoTitle} | Creators Units`,
    "description": tool.metaDesc,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.creatorunits.com/#website"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": `https://www.creatorunits.com/tools/${tool.category}/${tool.slug}#breadcrumb`
    }
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://www.creatorunits.com/tools/${tool.category}/${tool.slug}#softwareapplication`,
    "name": tool.title,
    "url": `https://www.creatorunits.com/tools/${tool.category}/${tool.slug}`,
    "applicationCategory": tool.category === "image" ? "MultimediaApplication" : tool.category === "creator" ? "BusinessApplication" : tool.category === "social" ? "SocialNetworkingApplication" : "UtilitiesApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires HTML5, Javascript, Canvas",
    "description": tool.shortDesc,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
  };

  const faqSchema = tool.faqs.length > 0 ? {
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
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://www.creatorunits.com/tools/${tool.category}/${tool.slug}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.creatorunits.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://www.creatorunits.com/tools",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tool.categoryName,
        "item": `https://www.creatorunits.com/category/${tool.category}`,
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": tool.title,
        "item": `https://www.creatorunits.com/tools/${tool.category}/${tool.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="main-content section" id="main-content">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: tool.categoryName, href: `/category/${tool.category}` },
              { label: tool.title }
            ]}
          />

          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2.25rem", marginBottom: "0.5rem" }}>{tool.title}</h1>
            <p className="text-muted" style={{ fontSize: "1.05rem", margin: 0 }}>
              {tool.shortDesc}
            </p>
          </div>

          <section style={{ marginBottom: "3rem" }} aria-label={`${tool.title} tool interface`}>
            <ToolWidgetClient componentName={tool.componentName} />
          </section>

          <div className="grid-cols-2" style={{ gap: "2rem", marginBottom: "3rem" }}>
            <div className="card">
              <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>How to Use</h2>
              <ol style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
                {tool.instructions.map((inst, idx) => (
                  <li key={idx} style={{ color: "var(--text-secondary)" }}>{inst}</li>
                ))}
              </ol>
            </div>

            <div className="card">
              <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Key Features</h2>
              <ul style={{ paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem", listStyleType: "square" }}>
                {tool.features.map((feat, idx) => (
                  <li key={idx} style={{ color: "var(--text-secondary)" }}>{feat}</li>
                ))}
              </ul>
            </div>
          </div>

          <section className="card" style={{ backgroundColor: "var(--bg-primary)", padding: "2.5rem", marginBottom: "3.5rem" }}>
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

          {tool.faqs.length > 0 && (
            <section style={{ marginBottom: "3.5rem" }} aria-labelledby="tool-faq-heading">
              <h2 id="tool-faq-heading" className="text-center mb-6">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4" style={{ maxWidth: "800px", margin: "0 auto" }}>
                {tool.faqs.map((faq, idx) => (
                  <details key={idx} className="card">
                    <summary style={{ 
                      fontSize: "1.05rem", 
                      fontWeight: "600", 
                      cursor: "pointer",
                      padding: "0.5rem 0",
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      {faq.question}
                      <span aria-hidden="true" style={{ fontSize: "1.25rem", color: "var(--success)" }}>+</span>
                    </summary>
                    <p className="text-muted" style={{ fontSize: "0.9rem", margin: "0.5rem 0 0 0", paddingTop: "0.5rem", borderTop: "1px solid var(--border-color)" }}>
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {relatedTools.length > 0 && (
            <section style={{ borderTop: "1px solid var(--border-color)", paddingTop: "3rem", marginBottom: "3rem" }} aria-labelledby="related-heading">
              <h2 id="related-heading" className="mb-6" style={{ fontSize: "1.5rem" }}>Related {tool.categoryName}</h2>
              <div className="grid-cols-4">
                {relatedTools.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/tools/${rel.category}/${rel.slug}`}
                    className="card card-hover flex flex-col gap-2"
                    style={{ textDecoration: "none", color: "inherit", padding: "1.25rem" }}
                    aria-label={`Open ${rel.title} - ${rel.shortDesc}`}
                  >
                    <h3 style={{ fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>{rel.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                      {rel.shortDesc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {relatedArticles.length > 0 && (
            <section style={{ borderTop: "1px solid var(--border-color)", paddingTop: "3rem", marginBottom: "3rem" }} aria-labelledby="related-articles-heading">
              <h2 id="related-articles-heading" className="mb-6" style={{ fontSize: "1.5rem" }}>Related Guides &amp; Tutorials</h2>
              <div className="grid-cols-4">
                {relatedArticles.map((art) => (
                  <Link
                    key={art.slug}
                    href={`/blog/${art.slug}`}
                    className="card card-hover flex flex-col gap-2"
                    style={{ textDecoration: "none", color: "inherit", padding: "1.25rem" }}
                    aria-label={`Read guide: ${art.title}`}
                  >
                    <span className="badge badge-accent" style={{ fontSize: "0.6rem", alignSelf: "flex-start", marginBottom: "0.25rem" }}>
                      {art.categoryLabel}
                    </span>
                    <h3 style={{ fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>{art.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                      {art.metaDesc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {popularTools.length > 0 && (
            <section style={{ borderTop: "1px solid var(--border-color)", paddingTop: "3rem", marginBottom: "3rem" }} aria-labelledby="popular-heading">
              <h2 id="popular-heading" className="mb-6" style={{ fontSize: "1.5rem" }}>Popular Tools</h2>
              <div className="grid-cols-4">
                {popularTools.map((pop) => (
                  <Link
                    key={pop.id}
                    href={`/tools/${pop.category}/${pop.slug}`}
                    className="card card-hover flex flex-col gap-2"
                    style={{ textDecoration: "none", color: "inherit", padding: "1.25rem" }}
                    aria-label={`Open ${pop.title} - ${pop.shortDesc}`}
                  >
                    <span className="badge badge-accent" style={{ fontSize: "0.6rem", alignSelf: "flex-start", marginBottom: "0.25rem" }}>
                      {pop.categoryName}
                    </span>
                    <h3 style={{ fontSize: "1rem", margin: 0, color: "var(--text-primary)" }}>{pop.title}</h3>
                    <p className="text-muted" style={{ fontSize: "0.8rem", margin: 0, flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                      {pop.shortDesc}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <ToolsDirectoryMatrix currentSlug={tool.slug} />

        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useToast } from "@/context/ToastContext";

export default function SeoUtilities() {
  const params = useParams();
  const { showToast } = useToast();
  const slug = (params?.slug as string) || "meta-tag-generator";

  // Shared state variables
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  // 1. Meta Tag Generator specific states
  const [metaTitle, setMetaTitle] = useState<string>("");
  const [metaDesc, setMetaDesc] = useState<string>("");
  const [metaKeywords, setMetaKeywords] = useState<string>("");
  const [metaRobots, setMetaRobots] = useState<string>("index, follow");

  // 2. Open Graph specific states
  const [ogTitle, setOgTitle] = useState<string>("");
  const [ogDesc, setOgDesc] = useState<string>("");
  const [ogUrl, setOgUrl] = useState<string>("https://example.com");
  const [ogImage, setOgImage] = useState<string>("https://example.com/og-image.png");

  // 3. Twitter Card specific states
  const [twUser, setTwUser] = useState<string>("@creatorunits");
  const [twCard, setTwCard] = useState<string>("summary_large_image");

  // 4. Robots.txt Generator specific states
  const [robotsAgent, setRobotsAgent] = useState<string>("*");
  const [robotsSitemap, setRobotsSitemap] = useState<string>("https://example.com/sitemap.xml");
  const [robotsDisallow, setRobotsDisallow] = useState<string>("/admin\n/api");

  // 5. Schema Generator specific states
  const [schemaType, setSchemaType] = useState<string>("faq");
  const [faqQ1, setFaqQ1] = useState<string>("Is it free?");
  const [faqA1, setFaqA1] = useState<string>("Yes, 100% free.");

  // 6. XML Sitemap Generator specific states
  const [sitemapBase, setSitemapBase] = useState<string>("https://example.com");
  const [sitemapUrls, setSitemapUrls] = useState<string>("/\n/about\n/tools\n/contact");

  // Keyword Density state
  const [keywordsReport, setKeywordsReport] = useState<{ word: string; count: number; percent: number }[]>([]);

  // Clear states on slug swap
  useEffect(() => {
    setInputText("");
    setOutputText("");
    setKeywordsReport([]);
  }, [slug]);

  const handleCopy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    showToast("Copied to clipboard!", "success");
  };

  // 1. Meta Tag compile
  const handleCompileMeta = () => {
    const tags = `<!-- HTML Meta Tags -->
<title>${metaTitle}</title>
<meta name="description" content="${metaDesc}">
<meta name="keywords" content="${metaKeywords}">
<meta name="robots" content="${metaRobots}">`;
    setOutputText(tags);
    showToast("Meta tags generated!", "success");
  };

  // 2. Open Graph compile
  const handleCompileOg = () => {
    const tags = `<!-- Open Graph / Facebook Meta Tags -->
<meta property="og:type" content="website">
<meta property="og:url" content="${ogUrl}">
<meta property="og:title" content="${ogTitle || metaTitle}">
<meta property="og:description" content="${ogDesc || metaDesc}">
<meta property="og:image" content="${ogImage}">`;
    setOutputText(tags);
    showToast("Open Graph tags generated!", "success");
  };

  // 3. Twitter Cards compile
  const handleCompileTwitter = () => {
    const tags = `<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="${twCard}">
<meta name="twitter:site" content="${twUser}">
<meta name="twitter:title" content="${ogTitle || metaTitle}">
<meta name="twitter:description" content="${ogDesc || metaDesc}">
<meta name="twitter:image" content="${ogImage}">`;
    setOutputText(tags);
    showToast("Twitter Card tags generated!", "success");
  };

  // 4. Robots.txt compile
  const handleCompileRobots = () => {
    const disallowLines = robotsDisallow
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => `Disallow: ${l}`)
      .join("\n");

    const fileText = `User-agent: ${robotsAgent}
${disallowLines}

Sitemap: ${robotsSitemap}`;
    setOutputText(fileText);
    showToast("Robots.txt compiled!", "success");
  };

  // 5. XML Sitemap compile
  const handleCompileSitemap = () => {
    const pages = sitemapUrls.split("\n").map((p) => p.trim()).filter(Boolean);
    const date = new Date().toISOString().split("T")[0];

    const xmlLines = pages.map((page) => {
      const fullUrl = page.startsWith("http") ? page : `${sitemapBase}${page.startsWith("/") ? "" : "/"}${page}`;
      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`;
    }).join("\n");

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlLines}
</urlset>`;
    setOutputText(sitemap);
    showToast("XML Sitemap generated!", "success");
  };

  // 6. Schema compile
  const handleCompileSchema = () => {
    let schemaJson = {};
    if (schemaType === "faq") {
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": faqQ1,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faqA1
            }
          }
        ]
      };
    } else {
      schemaJson = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": metaTitle || "Example Website",
        "url": ogUrl
      };
    }

    setOutputText(`<script type="application/ld+json">\n${JSON.stringify(schemaJson, null, 2)}\n</script>`);
    showToast("JSON-LD Schema script generated!", "success");
  };

  // 7. Keyword Density logic
  const handleCheckDensity = () => {
    const text = inputText.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, "");
    const words = text.split(/\s+/).filter((w) => w.length > 2); // filter words shorter than 3 chars
    
    if (words.length === 0) return;

    const counts: Record<string, number> = {};
    words.forEach((w) => {
      counts[w] = (counts[w] || 0) + 1;
    });

    const report = Object.keys(counts).map((word) => ({
      word,
      count: counts[word],
      percent: parseFloat(((counts[word] / words.length) * 100).toFixed(1))
    })).sort((a, b) => b.count - a.count).slice(0, 15);

    setKeywordsReport(report);
    showToast("Keyword density report complete!", "success");
  };

  // 8. Slug Generator logic
  const handleGenerateSlug = () => {
    const slugified = inputText
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // remove non-word characters
      .replace(/[\s_]+/g, "-") // replace spaces and underscores with dashes
      .replace(/^-+|-+$/g, ""); // trim leading/trailing dashes

    setOutputText(slugified);
    showToast("Clean URL slug compiled!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* 1. META TAG GENERATOR */}
        {slug === "meta-tag-generator" && (
          <div className="flex flex-col gap-5">
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="meta-t">Site Title</label>
                <input
                  id="meta-t"
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder="e.g. Creator Units - Free Web Tools"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="meta-rob">Robots Index rules</label>
                <select
                  id="meta-rob"
                  value={metaRobots}
                  onChange={(e) => setMetaRobots(e.target.value)}
                  className="form-control form-select"
                >
                  <option value="index, follow">Index, Follow (Recommended)</option>
                  <option value="noindex, nofollow">Noindex, Nofollow (Private)</option>
                  <option value="index, nofollow">Index, Nofollow</option>
                  <option value="noindex, follow">Noindex, Follow</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="meta-d">Meta Description</label>
              <textarea
                id="meta-d"
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
                placeholder="Brief summary under 160 characters..."
                className="form-control"
                rows={2}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="meta-k">Keywords (comma-separated)</label>
              <input
                id="meta-k"
                type="text"
                value={metaKeywords}
                onChange={(e) => setMetaKeywords(e.target.value)}
                placeholder="tools, utilities, creator, offline"
                className="form-control"
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleCompileMeta}>
              ⚡ Generate HTML Meta Tags
            </button>
          </div>
        )}

        {/* 2. OPEN GRAPH GENERATOR */}
        {slug === "open-graph-generator" && (
          <div className="flex flex-col gap-5">
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="og-t">OG Page Title</label>
                <input
                  id="og-t"
                  type="text"
                  value={ogTitle}
                  onChange={(e) => setOgTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="og-u">Canonical Page URL</label>
                <input
                  id="og-u"
                  type="text"
                  value={ogUrl}
                  onChange={(e) => setOgUrl(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="og-d">OG Description</label>
              <textarea
                id="og-d"
                value={ogDesc}
                onChange={(e) => setOgDesc(e.target.value)}
                className="form-control"
                rows={2}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="og-i">OG Share Image Link</label>
              <input
                id="og-i"
                type="text"
                value={ogImage}
                onChange={(e) => setOgImage(e.target.value)}
                className="form-control"
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleCompileOg}>
              ⚡ Generate Open Graph Tags
            </button>
          </div>
        )}

        {/* 3. TWITTER CARD GENERATOR */}
        {slug === "twitter-card-generator" && (
          <div className="flex flex-col gap-5">
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="tw-u">Twitter Username Handle</label>
                <input
                  id="tw-u"
                  type="text"
                  value={twUser}
                  onChange={(e) => setTwUser(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="tw-c">Twitter Card Type</label>
                <select
                  id="tw-c"
                  value={twCard}
                  onChange={(e) => setTwCard(e.target.value)}
                  className="form-control form-select"
                >
                  <option value="summary_large_image">Summary with Large Image</option>
                  <option value="summary">Summary Card (Thumbnail)</option>
                </select>
              </div>
            </div>

            <button className="btn btn-primary w-full" onClick={handleCompileTwitter}>
              ⚡ Generate Twitter Card Tags
            </button>
          </div>
        )}

        {/* 4. ROBOTS.TXT GENERATOR */}
        {slug === "robots-txt-generator" && (
          <div className="flex flex-col gap-5">
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="rob-a">User-Agent rules</label>
                <input
                  id="rob-a"
                  type="text"
                  value={robotsAgent}
                  onChange={(e) => setRobotsAgent(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="rob-s">XML Sitemap Location</label>
                <input
                  id="rob-s"
                  type="text"
                  value={robotsSitemap}
                  onChange={(e) => setRobotsSitemap(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="rob-d">Disallow Paths (one per line)</label>
              <textarea
                id="rob-d"
                value={robotsDisallow}
                onChange={(e) => setRobotsDisallow(e.target.value)}
                className="form-control"
                rows={3}
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleCompileRobots}>
              ⚡ Compile Robots.txt File
            </button>
          </div>
        )}

        {/* 5. XML SITEMAP GENERATOR */}
        {slug === "xml-sitemap-generator" && (
          <div className="flex flex-col gap-5">
            <div className="form-group">
              <label className="form-label" htmlFor="site-b">Base Website URL</label>
              <input
                id="site-b"
                type="text"
                value={sitemapBase}
                onChange={(e) => setSitemapBase(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="site-u">Sub-Page routes (one per line)</label>
              <textarea
                id="site-u"
                value={sitemapUrls}
                onChange={(e) => setSitemapUrls(e.target.value)}
                className="form-control"
                rows={4}
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleCompileSitemap}>
              ⚡ Generate XML Sitemap
            </button>
          </div>
        )}

        {/* 6. SCHEMA GENERATOR */}
        {slug === "schema-generator" && (
          <div className="flex flex-col gap-5">
            <div className="form-group">
              <label className="form-label" htmlFor="sch-t">Schema markup Type</label>
              <select
                id="sch-t"
                value={schemaType}
                onChange={(e) => setSchemaType(e.target.value)}
                className="form-control form-select"
              >
                <option value="faq">FAQ Schema Markup</option>
                <option value="website">WebSite Search Schema</option>
              </select>
            </div>

            {schemaType === "faq" && (
              <div className="grid-cols-2" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="faq-q">Question</label>
                  <input
                    id="faq-q"
                    type="text"
                    value={faqQ1}
                    onChange={(e) => setFaqQ1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="faq-a">Answer</label>
                  <input
                    id="faq-a"
                    type="text"
                    value={faqA1}
                    onChange={(e) => setFaqA1(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            )}

            <button className="btn btn-primary w-full" onClick={handleCompileSchema}>
              ⚡ Generate JSON-LD Schema Script
            </button>
          </div>
        )}

        {/* 7. KEYWORD DENSITY CHECKER */}
        {slug === "keyword-density-checker" && (
          <div className="flex flex-col gap-6">
            <div className="form-group">
              <label className="form-label" htmlFor="kd-textarea">Paste text or article body</label>
              <textarea
                id="kd-textarea"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="form-control"
                rows={6}
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleCheckDensity}>
              🔍 Check Keyword Densities
            </button>

            {keywordsReport.length > 0 && (
              <div className="card" style={{ borderStyle: "solid" }}>
                <h4 style={{ fontSize: "1rem", marginTop: 0, marginBottom: "0.75rem" }}>Top Keywords density report:</h4>
                <div className="grid-cols-3" style={{ gap: "1rem", fontWeight: "bold", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                  <span>Keyword</span>
                  <span>Occurrences</span>
                  <span>Density (%)</span>
                </div>
                <div className="flex flex-col gap-2" style={{ marginTop: "0.5rem" }}>
                  {keywordsReport.map((item, idx) => (
                    <div key={idx} className="grid-cols-3" style={{ gap: "1rem", fontSize: "0.9rem" }}>
                      <span>{idx + 1}. <strong>{item.word}</strong></span>
                      <span>{item.count} times</span>
                      <span>{item.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 8. SLUG GENERATOR */}
        {slug === "slug-generator" && (
          <div className="flex flex-col gap-5">
            <div className="form-group">
              <label className="form-label" htmlFor="slug-in">Enter post / page title</label>
              <input
                id="slug-in"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="e.g. 10 Best Free Web Tools For Creators!"
                className="form-control"
              />
            </div>

            <button className="btn btn-primary w-full" onClick={handleGenerateSlug}>
              🔗 Compile URL Slug
            </button>
          </div>
        )}

        {/* Code outputs console panel */}
        {slug !== "keyword-density-checker" && outputText && (
          <div className="card" style={{ borderStyle: "solid", position: "relative" }}>
            <pre style={{
              margin: 0,
              maxHeight: "300px",
              overflow: "auto",
              fontFamily: "monospace",
              fontSize: "0.85rem",
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
              color: "var(--text-secondary)"
            }}>
              {outputText}
            </pre>
            <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
              <button className="btn btn-secondary btn-sm" onClick={() => handleCopy(outputText)}>
                📋 Copy Code Output
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

import { articlesIndex } from "@/data/articles-index";

const SITE_URL = "https://www.creatorunits.com";

export async function GET() {
  const items = articlesIndex
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <description><![CDATA[${p.metaDesc}]]></description>
      <link>${SITE_URL}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.publishDate).toUTCString()}</pubDate>
      <author>Muhammad Hashmi</author>
      <category><![CDATA[${p.categoryLabel || "Creator Guides"}]]></category>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Creator Units Blog</title>
    <description>Practical guides on image optimization, YouTube SEO, social media tools, and creator workflows.</description>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

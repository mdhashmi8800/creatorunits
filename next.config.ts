import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable gzip/brotli compression
  compress: true,

  headers: async () => [
    // ── Security headers on all routes ────────────────────────────────────────
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },

    // ── Immutable cache for Next.js hashed static assets ─────────────────────
    // These filenames contain a content hash so they can safely be cached forever.
    // Cloudflare will serve them from edge with zero origin requests after first load.
    {
      source: "/_next/static/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },

    // ── Next.js image optimisation cache ─────────────────────────────────────
    {
      source: "/_next/image(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=86400, stale-while-revalidate=3600",
        },
      ],
    },

    // ── Public static assets (fonts, icons, SVGs, manifest) ──────────────────
    {
      source: "/fonts/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/(.+)\\.(svg|ico|png|jpg|jpeg|webp|avif|woff|woff2|ttf|otf)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },

    // ── HTML pages: edge cache + browser cache ────────────────────────────────
    // s-maxage tells Cloudflare edge to cache for 1 hour.
    // stale-while-revalidate lets edge serve stale for 7 days while refreshing.
    // max-age tells the browser to revalidate after 60s.
    // This eliminates Worker invocations for ~99% of page requests.
    {
      source: "/((?!_next|api|sitemap.xml|robots.txt).*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=60, s-maxage=3600, stale-while-revalidate=604800",
        },
      ],
    },

    // ── Sitemap & robots.txt: edge cache for 24h ──────────────────────────────
    {
      source: "/sitemap.xml",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400" },
      ],
    },
    {
      source: "/robots.txt",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400, immutable" },
      ],
    },
  ],
};

export default nextConfig;

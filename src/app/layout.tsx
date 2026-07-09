import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

// ── Font — self-hosted via next/font, zero external network request on load ──
// Inter is loaded and inlined as CSS @font-face; no render-blocking request.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const baseUrl = "https://www.creatorunits.com";

// ── Viewport — exported separately (Next.js 16 best practice) ───────────────
// Separating viewport from metadata prevents redundant metadata system work.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "Creators Units - Free Online Tools for Creators & Social Media",
  description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
  keywords: "creator tools, image compressor, qr generator, youtube tag extractor, text case converter, fancy text generator, link in bio",
  authors: [{ name: "Creators Units" }],
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Creators Units",
    title: "Creators Units - Free Online Tools for Creators & Social Media",
    description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creators Units - Free Online Tools for Creators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creators Units - Free Online Tools for Creators & Social Media",
    description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ORGANIZATION_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "Creators Units",
  url: baseUrl,
  logo: `${baseUrl}/icon.svg`,
  description: "Free, fast, and privacy-focused online tools for creators, freelancers, and small businesses.",
  sameAs: [
    "https://instagram.com/oye_hasmi",
    "https://twitter.com/Oye_hasmi"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support@creatorunits.com",
    availableLanguage: "English",
  },
});

const WEBSITE_SCHEMA_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  name: "Creators Units",
  url: baseUrl,
  description: "Free online tools for creators, freelancers, and small businesses.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/tools?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORGANIZATION_SCHEMA_JSON }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: WEBSITE_SCHEMA_JSON }}
        />
        {/* Inline script: set data-theme before first paint to prevent FOUC */}
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',t||(d?'dark':'light'));}catch(e){}})();`,
          }}
        />
        {/*
          AdSense verification: Google requires the adsbygoogle.js script to be
          present in <head> for publisher ID verification. The `async` boolean
          attribute ensures it is non-blocking — the browser downloads it in
          parallel without pausing HTML parsing or delaying FCP/LCP.
        */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8763819545697765"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Preconnect to AdSense CDN so the async script download starts early */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>
        {/* GA4 — lazyOnload defers until after page is fully interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DBZT1K0P01"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DBZT1K0P01', { send_page_view: true });
          `}
        </Script>
        <ClientProviders>
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          {children}
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  );
}

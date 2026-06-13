import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";
import Script from "next/script";

// Primary font — preload the weights we actually use (400, 500, 600)
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600"],
});

// Mono font — used only in <code> elements, do NOT preload to save bandwidth
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
  weight: ["400"],
});

const baseUrl = "https://creatorunits.com";

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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
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
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/*
          Theme init script — runs synchronously BEFORE first paint.
          Prevents FOUC without needing visibility:hidden on the entire page.
          Minified to minimize parser blocking time.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',t||(d?'dark':'light'));}catch(e){}})();`,
          }}
        />

        {/* Preconnect for Google Analytics — warms DNS+TLS before the lazy script fires */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Theme color for mobile browser chrome */}
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
      </head>
      <body>
        {/*
          GA uses lazyOnload strategy: script loads only after the page is fully
          interactive and idle. This removes GA from the critical render path
          and improves LCP, FCP, and INP scores significantly.
        */}
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
        <ThemeProvider>
          <ToastProvider>
            <a href="#main-content" className="skip-to-content">
              Skip to content
            </a>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

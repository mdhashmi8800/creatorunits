import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";
import Script from "next/script";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',t||(d?'dark':'light'));}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        {/* Google AdSense - must be in <head> for SSR verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8763819545697765"
          crossOrigin="anonymous"
        />
      </head>
      <body>

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
      </body>
    </html>
  );
}

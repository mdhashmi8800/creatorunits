import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CreatorUtils - Free Online Tools for Creators & Social Media",
  description: "Free, fast, and SEO-friendly tools for YouTubers, Instagram creators, WhatsApp users, freelancers, and small businesses. Compress images, download thumbnails, generate QR codes, and more.",
  keywords: "creator tools, image compressor, qr generator, youtube tag extractor, text case converter, fancy text generator, link in bio",
  authors: [{ name: "CreatorUtils" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creatorutils.com/",
    title: "CreatorUtils - Free Online Tools for Creators & Social Media",
    description: "Free, fast, and SEO-friendly tools for YouTubers, Instagram creators, WhatsApp users, freelancers, and small businesses.",
    siteName: "CreatorUtils",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreatorUtils - Free Online Tools for Creators & Social Media",
    description: "Free, fast, and SEO-friendly tools for YouTubers, Instagram creators, WhatsApp users, freelancers, and small businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        {/* Anti-flash inline script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

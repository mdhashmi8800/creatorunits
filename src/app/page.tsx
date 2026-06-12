import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Free Web Tools for Creators & Social Media | Creator Units",
  description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Web Tools for Creators & Social Media | Creator Units",
    description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
    url: "https://creatorunits.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creator Units - Free Web Tools for Creators & Social Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Web Tools for Creators & Social Media | Creator Units",
    description: "Free, private web tools for creators and social media. Compress images, preview YouTube thumbnails, generate QR codes, and format text offline and instantly.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}

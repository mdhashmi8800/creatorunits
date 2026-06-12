import type { Metadata } from "next";
import ToolsClient from "./ToolsClient";

export const metadata: Metadata = {
  title: "All Free Creator & Utility Tools | Creator Units",
  description: "Browse our complete list of offline-first browser utilities for content creators. Compress images, format bios, preview thumbnails, and generate QR codes.",
  alternates: {
    canonical: "/tools",
  },
  openGraph: {
    title: "All Free Creator & Utility Tools | Creator Units",
    description: "Browse our complete list of offline-first browser utilities for content creators. Compress images, format bios, preview thumbnails, and generate QR codes.",
    url: "https://creatorunits.com/tools",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creator Units - Free Creator & Utility Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free Creator & Utility Tools | Creator Units",
    description: "Browse our complete list of offline-first browser utilities for content creators. Compress images, format bios, preview thumbnails, and generate QR codes.",
    images: ["/og-image.png"],
  },
};

export default function ToolsDirectoryPage() {
  return <ToolsClient />;
}

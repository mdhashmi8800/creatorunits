"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamic import map with ssr: false to guarantee browser-only execution and code-splitting
const componentMap: Record<string, React.ComponentType<any>> = {
  ImageCompressor: dynamic(() => import("@/components/tools/ImageCompressor"), { ssr: false }),
  ImageResizer: dynamic(() => import("@/components/tools/ImageResizer"), { ssr: false }),
  JpgToPng: dynamic(() => import("@/components/tools/JpgToPng"), { ssr: false }),
  PngToWebp: dynamic(() => import("@/components/tools/PngToWebp"), { ssr: false }),
  WebpToJpg: dynamic(() => import("@/components/tools/WebpToJpg"), { ssr: false }),
  ImageCropper: dynamic(() => import("@/components/tools/ImageCropper"), { ssr: false }),
  ImageRotator: dynamic(() => import("@/components/tools/ImageRotator"), { ssr: false }),
  ImageFlipper: dynamic(() => import("@/components/tools/ImageFlipper"), { ssr: false }),
  ColorPicker: dynamic(() => import("@/components/tools/ColorPicker"), { ssr: false }),
  ScreenshotCleaner: dynamic(() => import("@/components/tools/ScreenshotCleaner"), { ssr: false }),
  YoutubeThumbnailPreview: dynamic(() => import("@/components/tools/YoutubeThumbnailPreview"), { ssr: false }),
  ThumbnailDownloader: dynamic(() => import("@/components/tools/ThumbnailDownloader"), { ssr: false }),
  ThumbnailSizeChecker: dynamic(() => import("@/components/tools/ThumbnailSizeChecker"), { ssr: false }),
  YoutubeTagExtractor: dynamic(() => import("@/components/tools/YoutubeTagExtractor"), { ssr: false }),
  VideoMetadataHelper: dynamic(() => import("@/components/tools/VideoMetadataHelper"), { ssr: false }),
  ThumbnailIdeaHelper: dynamic(() => import("@/components/tools/ThumbnailIdeaHelper"), { ssr: false }),
  SocialPostSizeChecker: dynamic(() => import("@/components/tools/SocialPostSizeChecker"), { ssr: false }),
  FancyTextGenerator: dynamic(() => import("@/components/tools/FancyTextGenerator"), { ssr: false }),
  UsernameGenerator: dynamic(() => import("@/components/tools/UsernameGenerator"), { ssr: false }),
  BioTemplateGenerator: dynamic(() => import("@/components/tools/BioTemplateGenerator"), { ssr: false }),
  CharacterCounter: dynamic(() => import("@/components/tools/CharacterCounter"), { ssr: false }),
  HashtagHelper: dynamic(() => import("@/components/tools/HashtagHelper"), { ssr: false }),
  WhatsAppLinkGenerator: dynamic(() => import("@/components/tools/WhatsAppLinkGenerator"), { ssr: false }),
  WhatsAppQRGenerator: dynamic(() => import("@/components/tools/WhatsAppQRGenerator"), { ssr: false }),
  LinkInBioHelper: dynamic(() => import("@/components/tools/LinkInBioHelper"), { ssr: false }),
  QrCodeGenerator: dynamic(() => import("@/components/tools/QrCodeGenerator"), { ssr: false }),
  UrlEncoderDecoder: dynamic(() => import("@/components/tools/UrlEncoderDecoder"), { ssr: false }),
  UtmBuilder: dynamic(() => import("@/components/tools/UtmBuilder"), { ssr: false }),
  PasswordGenerator: dynamic(() => import("@/components/tools/PasswordGenerator"), { ssr: false }),
  TextCaseConverter: dynamic(() => import("@/components/tools/TextCaseConverter"), { ssr: false }),
  WordCounter: dynamic(() => import("@/components/tools/WordCounter"), { ssr: false }),
  UnitsConverter: dynamic(() => import("@/components/tools/UnitsConverter"), { ssr: false }),
  TimeConverter: dynamic(() => import("@/components/tools/TimeConverter"), { ssr: false }),
  BusinessCalculators: dynamic(() => import("@/components/tools/BusinessCalculators"), { ssr: false }),
  AiCreatorSuite: dynamic(() => import("@/components/tools/AiCreatorSuite"), { ssr: false }),
  VideoUtilities: dynamic(() => import("@/components/tools/VideoUtilities"), { ssr: false }),
  BackgroundRemover: dynamic(() => import("@/components/tools/BackgroundRemover"), { ssr: false }),
  BarcodeGenerator: dynamic(() => import("@/components/tools/BarcodeGenerator"), { ssr: false }),
  DeveloperUtilities: dynamic(() => import("@/components/tools/DeveloperUtilities"), { ssr: false }),
  BlurImage: dynamic(() => import("@/components/tools/BlurImage"), { ssr: false }),
  PdfUtilities: dynamic(() => import("@/components/tools/PdfUtilities"), { ssr: false }),
  FaviconGenerator: dynamic(() => import("@/components/tools/FaviconGenerator"), { ssr: false }),
  GradientGenerator: dynamic(() => import("@/components/tools/GradientGenerator"), { ssr: false }),
  ImageUpscaler: dynamic(() => import("@/components/tools/ImageUpscaler"), { ssr: false }),
  SeoUtilities: dynamic(() => import("@/components/tools/SeoUtilities"), { ssr: false }),
  LinkedinPostFormatter: dynamic(() => import("@/components/tools/LinkedinPostFormatter"), { ssr: false }),
  PngToJpg: dynamic(() => import("@/components/tools/PngToJpg"), { ssr: false }),
  RandomNameGenerator: dynamic(() => import("@/components/tools/RandomNameGenerator"), { ssr: false }),
  RandomNumberGenerator: dynamic(() => import("@/components/tools/RandomNumberGenerator"), { ssr: false }),
  SvgConverter: dynamic(() => import("@/components/tools/SvgConverter"), { ssr: false }),
  UrlShortener: dynamic(() => import("@/components/tools/UrlShortener"), { ssr: false }),
  WatermarkImage: dynamic(() => import("@/components/tools/WatermarkImage"), { ssr: false }),
  WebpConverter: dynamic(() => import("@/components/tools/WebpConverter"), { ssr: false }),
  YoutubeChannelIdFinder: dynamic(() => import("@/components/tools/YoutubeChannelIdFinder"), { ssr: false }),
  YoutubeTimestampGenerator: dynamic(() => import("@/components/tools/YoutubeTimestampGenerator"), { ssr: false }),
};

interface ToolRendererProps {
  componentName: string;
}

export default function ToolRenderer({ componentName }: ToolRendererProps) {
  const ToolComponent = componentMap[componentName];

  if (!ToolComponent) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
        Tool widget not found. Please check implementation.
      </div>
    );
  }

  return <ToolComponent />;
}

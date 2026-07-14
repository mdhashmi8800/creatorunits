/**
 * Shared image conversion utility.
 * Renders images on a client-side canvas and exports to PNG, WebP, or JPEG
 * with specified quality settings and transparency fallback handling.
 */

export interface ConvertImageOptions {
  outputType: string; // e.g. "image/png", "image/webp", "image/jpeg"
  quality?: number; // 0 to 100 scale
}

export interface ConversionResult {
  dataUrl: string;
  blob: Blob | null;
  objectUrl: string;
}

export function convertImage(
  imageSrc: string,
  options: ConvertImageOptions
): Promise<ConversionResult> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    // Allow canvas exports of external images if CORS headers are available
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to initialize canvas 2D context."));
        return;
      }

      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;
      canvas.width = width;
      canvas.height = height;

      // Fill transparent canvas background with white for JPEG outputs
      const mimeType = options.outputType === "image/jpg" ? "image/jpeg" : options.outputType;
      if (mimeType === "image/jpeg") {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
      }

      ctx.drawImage(img, 0, 0);

      const qualityRatio = options.quality !== undefined ? options.quality / 100 : 0.85;

      try {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const objectUrl = URL.createObjectURL(blob);
              const dataUrl = canvas.toDataURL(mimeType, qualityRatio);
              resolve({ dataUrl, blob, objectUrl });
            } else {
              const dataUrl = canvas.toDataURL(mimeType, qualityRatio);
              resolve({ dataUrl, blob: null, objectUrl: dataUrl });
            }
          },
          mimeType,
          qualityRatio
        );
      } catch (err) {
        // Fallback if toBlob fails or triggers security bounds
        try {
          const dataUrl = canvas.toDataURL(mimeType, qualityRatio);
          resolve({ dataUrl, blob: null, objectUrl: dataUrl });
        } catch (e) {
          reject(e);
        }
      }
    };

    img.onerror = () => {
      reject(new Error("Failed to load source image file."));
    };
  });
}

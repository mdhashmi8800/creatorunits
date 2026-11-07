import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "img-rotator",
  "slug": "image-rotator",
  "category": "image",
  "categoryName": "Image Tools",
  "title": "Image Rotator",
  "shortDesc": "Rotate your images 90°, 180°, or 270° clockwise or counter-clockwise.",
  "metaDesc": "Rotate images online. Quick client-side tool to fix upside down or sideways photographs without compressing them multiple times.",
  "instructions": [
    "Select your photo or graphic.",
    "Click the 'Rotate Left' or 'Rotate Right' buttons to rotate by 90-degree steps.",
    "Download the rotated output file."
  ],
  "features": [
    "Clean 90-degree increments.",
    "Lossless canvas transform calculations.",
    "Instant feedback preview."
  ],
  "componentName": "ImageRotator",
  "faqs": [
    {
      "question": "Why do some photos appear sideways or upside down when uploaded?",
      "answer": "sideways or upside down orientations are typically caused by EXIF metadata (Exchangeable Image File Format) saved by digital cameras and smartphones. Cameras record the orientation of the physical device using sensors. When you view the image in browsers or legacy photo viewers that ignore this EXIF flag, the image displays raw, which might be sideways. Rotating the image manually rewrites the pixel grid coordinates so it displays correctly everywhere, regardless of EXIF support."
    },
    {
      "question": "Does rotating an image reduce its quality?",
      "answer": "Rotating an image using our client-side tool is lossless when using PNG or WebP, and virtually lossless for JPEG. We write the pixel buffers directly onto a new rotated HTML5 Canvas and save it. Unlike desktop software programs that might re-compress the file using low-quality presets, our tool performs direct canvas matrix transformations, keeping your image elements as sharp and clear as the original file."
    },
    {
      "question": "Can I rotate images to custom angles like 45 degrees?",
      "answer": "Currently, our tool supports standard 90-degree incremental rotation (90° clockwise, 180° flip, 270° counter-clockwise). These are the most common configurations needed to fix photo layout errors. Custom arbitrary angles (like 15° or 45°) require canvas padding and background filling to prevent clipping, which we plan to support in future updates."
    },
    {
      "question": "Does this tool support all image formats?",
      "answer": "Yes, our image rotator supports all standard web graphic formats, including JPEG (JPG), PNG, WebP, and SVG. You can upload any of these files, apply your rotation adjustments, preview the layout state in real-time, and download the updated file to your local computer or mobile device."
    },
    {
      "question": "Are my photos uploaded to a web server?",
      "answer": "No, your photos are never sent over the internet or uploaded to any remote server. The entire rotation operation is computed locally in your web browser using HTML5 canvas matrices. Your privacy is 100% secure, making this tool completely safe for sensitive screenshots, business files, or personal photos."
    },
    {
      "question": "How do I rotate a photo on a mobile device?",
      "answer": "Our tool is designed with mobile responsive layouts. Open the page in your smartphone's web browser, select a photo from your gallery, use the quick 'Rotate Left' or 'Rotate Right' buttons to fix the orientation, and save the rotated output file back to your camera roll instantly without needing an external app."
    },
    {
      "question": "What is the difference between rotating and flipping an image?",
      "answer": "Rotating turns an image around a central pivot point (like turning a wheel). Flipping mirrors the image across a central axis (like seeing a reflection in a mirror). If your photo is upside down, a 180-degree rotation will fix it. If the text in your selfie is backward, you need to use our Image Flipper tool to mirror it horizontally."
    },
    {
      "question": "How does the Image Rotator work?",
      "answer": "Our Image Rotator runs fully in your web browser. By utilizing the HTML5 Canvas API and client-side JavaScript, it reads your uploaded image file, processes the requested transformations locally in temporary memory, and triggers an immediate download. No remote servers are contacted."
    },
    {
      "question": "Will editing my images with the Image Rotator affect their visual quality?",
      "answer": "Our tool optimizes images dynamically to balance file size and visual fidelity. For compression, a quality setting of 78–82% provides massive size savings of 60–80% with zero human-perceivable loss in clarity. Resizing, cropping, and rotating preserve the exact pixel values within the new bounds."
    },
    {
      "question": "Are my personal pictures secure on CreatorUnits.com?",
      "answer": "Yes, absolute privacy is our standard. Because all image processing happens 100% client-side in your browser, your files are never uploaded to our servers, stored, or logged. Your private designs and photos remain strictly on your own device."
    }
  ],
  "seoTitle": "Rotate Image Online - Fix Photo Orientation Instantly",
  "seoHeading": "Fix Sideways and Upside Down Images Instantly",
  "seoIntro": "Did you take a photograph that ended up sideways or upside down on your website? Our online Image Rotator allows you to adjust the orientation of any image by 90-degree steps instantly. Processed completely in-browser, it is fast, secure, and preserves file detail.",
  "seoBody": "\n<h3>How the Image Rotator Works</h3>\n<p>Rotate your images 90°, 180°, or 270° clockwise or counter-clockwise.</p>\n\n<h3>Step-by-Step Guide</h3>\n<ol>\n  <li>Select your photo or graphic.</li>\n  <li>Click the 'Rotate Left' or 'Rotate Right' buttons to rotate by 90-degree steps.</li>\n  <li>Download the rotated output file.</li>\n</ol>\n\n<h3>Core Features &amp; Privacy</h3>\n<ul>\n  <li>Clean 90-degree increments.</li>\n  <li>Lossless canvas transform calculations.</li>\n  <li>Instant feedback preview.</li>\n  <li><strong>100% Client-Side Privacy:</strong> All calculations, formatting, and file operations run directly in your browser without transmitting sensitive inputs to external servers.</li>\n</ul>\n"
};

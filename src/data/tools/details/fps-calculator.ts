import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-fps-calc",
  "slug": "fps-calculator",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "FPS Calculator & Video Frame Counter",
  "shortDesc": "Calculate exact total frame counts, SMPTE timecodes, frame duration, and estimated storage file sizes across all standard frame rates.",
  "metaDesc": "Free online FPS calculator. Convert video duration to frame counts at 24fps, 25fps, 29.97fps, 30fps, and 60fps. Compute SMPTE timecodes and file storage sizes accurately.",
  "instructions": [
    "Enter your video duration (Hours, Minutes, Seconds, and optional start frames).",
    "Select your target frame rate (23.976, 24, 25, 29.97 NTSC, 30, 50 PAL, 60, or 120 fps).",
    "View instant calculations for Total Frames, Individual Frame Duration in milliseconds, and SMPTE Timecode (HH:MM:SS:FF).",
    "Optional: Enter your video bitrate (in Mbps) to estimate raw rendered file size."
  ],
  "features": [
    "Supports all industry frame rates: 23.976, 24, 25 PAL, 29.97 NTSC Drop-Frame, 30, 50, 60, 120, and 240 fps.",
    "Calculates exact SMPTE timecode (Hours:Minutes:Seconds:Frames) and reverse timecode conversions.",
    "Computes individual frame duration in milliseconds for animation keyframing.",
    "Bitrate-to-storage estimator (calculates GB and MB per video duration).",
    "100% free and runs in real time inside your browser."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "How do you calculate total frames from video duration and FPS?",
      "answer": "The formula to calculate total video frames is: Total Frames = (Hours × 3600 + Minutes × 60 + Seconds) × Frame Rate (FPS) + Extra Frames. For example, a 2-minute and 30-second video at 60 FPS contains: (150 seconds × 60 fps) = 9,000 total frames."
    },
    {
      "question": "What is the difference between 30 FPS and 29.97 FPS (Drop-Frame)?",
      "answer": "29.97 FPS (often called 30 FPS drop-frame) is an NTSC color broadcast standard introduced to maintain audio synchronization with television broadcast signals. At 29.97 FPS, 1,000 seconds of real time produces 29,970 frames. Standard non-drop 30 FPS runs at exactly 30.000 frames per second. For digital YouTube uploads and web streaming, true 30 FPS and 60 FPS are standard."
    },
    {
      "question": "Which frame rate should I use for YouTube and social media?",
      "answer": "Recommended guidelines: (1) 24 FPS (23.976 FPS): Cinematic vlogs, narrative short films, and dramatic storytelling; (2) 30 FPS: Standard talking-head YouTube videos, tutorials, podcasts, and Instagram reels; (3) 60 FPS: Fast-paced gaming gameplay, sports action, tech product demos, and smooth screen recordings."
    },
    {
      "question": "How long is a single frame in milliseconds at 24fps vs 60fps?",
      "answer": "At 24 FPS, each individual frame stays on screen for approximately 41.67 milliseconds. At 30 FPS, each frame lasts 33.33 ms. At 60 FPS, each frame lasts just 16.67 ms. At 120 FPS, each frame lasts 8.33 ms."
    },
    {
      "question": "How do I calculate video file size from bitrate and duration?",
      "answer": "The formula is: File Size (in Megabytes) = (Bitrate in Mbps × Duration in Seconds) ÷ 8. For example, a 10-minute video (600 seconds) recorded at 50 Mbps 4K will be approximately (50 × 600) ÷ 8 = 3,750 MB (3.75 GB)."
    }
  ],
  "seoTitle": "Free FPS Calculator — Convert Video Duration to Frame Counts",
  "seoHeading": "Calculate Video Frames, Timecodes & Storage Sizes Online",
  "seoIntro": "Need to determine exact frame numbers for animation keyframes, subtitle timecodes, or render storage estimates? Our free online FPS Calculator converts video durations to precise frame counts across 24fps, 25fps, 30fps, 60fps, and custom rates instantly.",
  "seoBody": "\n<h3>Industry Standard Frame Rates (FPS) Comparison</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Frame Rate (FPS)</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Frame Duration</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Standard Use Cases</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>23.976 / 24 FPS</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">41.67 ms</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Cinematic motion blur, feature films, high-production YouTube vlogs</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>25 FPS</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">40.00 ms</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">European &amp; UK television broadcast standard (PAL / SECAM)</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>29.97 / 30 FPS</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">33.33 ms</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">US/Japan television (NTSC), standard web video, podcasts, social reels</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>50 / 60 FPS</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">16.67 ms</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Video game captures, live sports, ultra-smooth 4K YouTube streaming</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>120 / 240 FPS</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">8.33 / 4.17 ms</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Slow-motion B-roll capture, action cameras (GoPro), smartphone slow-mo</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>SMPTE Timecode Format: Hours:Minutes:Seconds:Frames</h3>\n<p>In professional video editing programs (Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro), time is tracked using SMPTE timecodes written as <code>HH:MM:SS:FF</code>, where <code>FF</code> represents the frame number within that specific second (ranging from <code>00</code> to <code>FPS - 1</code>).</p>\n\n<h3>Related Free Video &amp; Creator Utilities</h3>\n<ul>\n  <li><a href=\"/tools/video/video-thumbnail-extractor\">Video Thumbnail Extractor</a> — Capture exact frame stills from video files.</li>\n  <li><a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a> — Test your thumbnail on simulated feeds.</li>\n  <li><a href=\"/tools/creator/youtube-tag-extractor\">YouTube Tag Extractor</a> — Extract SEO tags from competitor uploads.</li>\n</ul>\n"
};

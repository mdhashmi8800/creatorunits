import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "vid-fps-calc",
  "slug": "fps-calculator",
  "category": "video",
  "categoryName": "Video Tools",
  "title": "FPS Calculator & Frame Counter — SMPTE Timecode & Duration",
  "shortDesc": "Calculate exact total video frame counts, SMPTE timecodes (HH:MM:SS:FF), frame durations in milliseconds, and estimated render file sizes across all standard frame rates.",
  "metaDesc": "Free FPS calculator and video frame counter. Convert duration to frames or timecodes at 24, 25, 29.97, 30, 60, and 120 FPS. Instant SMPTE timecodes and file size estimates.",
  "instructions": [
    "Select your calculation mode: Total Frames (from duration & FPS), Video Duration (from frames & FPS), or Actual FPS.",
    "Input your video duration in seconds (e.g. 150 for 2m 30s) or total frame count.",
    "Select your target frame rate: 23.976, 24, 25 (PAL), 29.97 (NTSC), 30, 48, 50, 59.94, 60, 120, or 240 FPS.",
    "View instant calculations for Total Frames, SMPTE Timecode (HH:MM:SS:FF), Frame Duration in milliseconds, and estimated file storage size.",
    "Click 'Copy Timecode' to paste the SMPTE formatted timestamp directly into Premiere Pro, DaVinci Resolve, or Final Cut Pro."
  ],
  "features": [
    "Supports all industry frame rates: 23.976, 24, 25 PAL, 29.97 NTSC, 30, 48, 50, 59.94, 60, 120, and 240 fps.",
    "Calculates exact SMPTE timecode (Hours:Minutes:Seconds:Frames) with one-click clipboard copy.",
    "Computes individual frame duration in milliseconds for animation keyframing, stop-motion, and VFX compositing.",
    "Bitrate-to-storage estimator (calculates estimated MB and GB for 1080p, 4K, and ProRes renders).",
    "Bidirectional calculation: solve for frames, duration, or frame rate.",
    "100% free and runs entirely inside your browser with zero server latency."
  ],
  "componentName": "VideoUtilities",
  "faqs": [
    {
      "question": "How do you calculate total frames from video duration and FPS?",
      "answer": "The formula to calculate total video frames is: Total Frames = Duration in Seconds × Frame Rate (FPS). For example, a 2-minute and 30-second video (150 seconds) at 60 FPS contains: 150 × 60 = 9,000 total frames. At 24 FPS, the exact same duration contains: 150 × 24 = 3,600 frames."
    },
    {
      "question": "What is an SMPTE timecode (HH:MM:SS:FF) and how is it read?",
      "answer": "SMPTE (Society of Motion Picture and Television Engineers) timecode is the universal standard for video editing synchronization. It is written as Hours:Minutes:Seconds:Frames (HH:MM:SS:FF). For instance, '00:01:23:14' at 24 FPS represents 1 minute, 23 seconds, and 14 frames. Because frames reset every second, the 'FF' value ranges from 00 to (FPS - 1)."
    },
    {
      "question": "What is the difference between 30 FPS and 29.97 FPS (Drop-Frame)?",
      "answer": "29.97 FPS (NTSC) was introduced when color television was invented to prevent audio subcarrier interference without changing monochrome broadcast gear. At 29.97 FPS, 1,000 seconds of real time produces 29,970 frames instead of 30,000. Drop-frame timecode skips two frame numbers (not actual picture frames) at the start of every minute except every tenth minute to keep the clock synced with real wall time. For digital YouTube uploads and web streaming, true 30 FPS and 60 FPS are standard."
    },
    {
      "question": "Which frame rate should I choose for YouTube, TikTok, and cinema?",
      "answer": "Recommended guidelines: (1) 24 FPS (or 23.976 FPS): Cinematic vlogs, narrative films, and artistic storytelling; (2) 30 FPS: Standard talking-head YouTube videos, podcasts, tutorials, and Instagram Reels; (3) 60 FPS: Fast-paced gaming footage, sports action, UI screencasts, and ultra-smooth YouTube videos; (4) 120/240 FPS: High-speed slow-motion capture."
    },
    {
      "question": "How long is a single frame in milliseconds at 24fps vs 30fps vs 60fps?",
      "answer": "Frame duration equals 1,000 milliseconds divided by the frame rate: At 24 FPS, each frame lasts 41.67 ms; at 25 FPS, 40.00 ms; at 29.97 FPS, 33.37 ms; at 30 FPS, 33.33 ms; at 60 FPS, 16.67 ms; and at 120 FPS, 8.33 ms. Animators and game developers use millisecond values to synchronize keyframe physics."
    },
    {
      "question": "How do I calculate estimated video file size from bitrate and duration?",
      "answer": "The formula is: File Size (in Megabytes) = (Bitrate in Mbps × Duration in Seconds) ÷ 8. For example, a 10-minute video (600 seconds) recorded at 25 Mbps will be approximately (25 × 600) ÷ 8 = 1,875 MB (~1.87 GB)."
    }
  ],
  "seoTitle": "FPS Calculator & Frame Counter — SMPTE Timecode & Duration",
  "seoHeading": "Calculate Video Frames, SMPTE Timecodes & Storage Sizes Online",
  "seoIntro": "Need to determine exact frame numbers for animation keyframes, subtitle timecodes, or render storage estimates? Our free online FPS Calculator converts video durations to precise frame counts across 24fps, 25fps, 30fps, 60fps, and custom rates instantly.",
  "seoBody": "\n<h3>Quick Reference: Total Frames by Duration and Frame Rate</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Frame Rate (FPS)</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">1 Second</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">1 Minute</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">10 Minutes</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">1 Hour</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Frame Duration (ms)</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>24 FPS (Cinema)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">24 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1,440 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">14,400 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">86,400 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">41.67 ms</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>25 FPS (PAL / EU)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">25 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1,500 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">15,000 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">90,000 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">40.00 ms</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>29.97 FPS (NTSC)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">~30 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1,798 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">17,982 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">107,892 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">33.37 ms</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>30 FPS (Web / YouTube)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">30 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">1,800 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">18,000 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">108,000 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">33.33 ms</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>60 FPS (Smooth / Gaming)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">60 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">3,600 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">36,000 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">216,000 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">16.67 ms</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>120 FPS (Slow-Mo)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">120 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">7,200 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">72,000 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">432,000 frames</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">8.33 ms</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>SMPTE Timecode Format: Hours:Minutes:Seconds:Frames</h3>\n<p>In professional video editing programs (Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro), time is tracked using SMPTE timecodes written as <code>HH:MM:SS:FF</code>, where <code>FF</code> represents the frame number within that specific second (ranging from <code>00</code> to <code>FPS - 1</code>).</p>\n<p>For example, at 60 FPS, the 45th frame of the 12th second at minute 3 is formatted as <code>00:03:12:45</code>. When copying timecodes from our calculator, you can paste directly into editing markers or subtitle synchronizers.</p>\n\n<h3>Key Calculator Use Cases</h3>\n<ul>\n  <li><strong>VFX &amp; 3D Animation:</strong> Calculate exact frame ranges required for 3D render queues in Blender, Maya, or Cinema 4D.</li>\n  <li><strong>Subtitle Synchronization:</strong> Convert SRT millisecond timestamps into exact video frame numbers for sub-frame subtitle alignment.</li>\n  <li><strong>Render Storage Estimations:</strong> Estimate hard drive storage requirements for high-bitrate video captures before starting long recording sessions.</li>\n</ul>\n\n<h3>Related Free Video &amp; Creator Utilities</h3>\n<ul>\n  <li><a href=\"/tools/video/video-thumbnail-extractor\">Video Thumbnail Extractor</a> — Capture exact frame stills from video files in full resolution.</li>\n  <li><a href=\"/tools/video/video-compressor\">Video Compressor</a> — Compress MP4 and WebM videos for Discord, email, or web sharing.</li>\n  <li><a href=\"/tools/creator/youtube-thumbnail-preview\">YouTube Thumbnail Preview</a> — Test your thumbnail on simulated desktop and mobile feeds.</li>\n  <li><a href=\"/category/video\">All Video Tools</a> — Explore our complete browser-based video editing toolbox.</li>\n</ul>\n"
};

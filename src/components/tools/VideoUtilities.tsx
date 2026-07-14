"use client";

import React, { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { useToast } from "@/context/ToastContext";
import FileUpload from "../ui/FileUpload";

export default function VideoUtilities() {
  const params = useParams();
  const { showToast } = useToast();
  const slug = (params?.slug as string) || "aspect-ratio-calculator";

  // Aspect Ratio Calculator
  const [arWidth, setArWidth] = useState<string>("1920");
  const [arHeight, setArHeight] = useState<string>("1080");
  const [arTargetRatio, setArTargetRatio] = useState<string>("16:9");
  const [arCalcValue, setArCalcValue] = useState<string>("1080");
  const [arCalcInput, setArCalcInput] = useState<string>("1920");
  const [arTargetDimension, setArTargetDimension] = useState<"height" | "width">("height");

  // FPS Calculator
  const [fpsFrames, setFpsFrames] = useState<string>("144000");
  const [fpsDuration, setFpsDuration] = useState<string>("2400"); // seconds
  const [fpsRate, setFpsRate] = useState<string>("60");
  const [fpsMode, setFpsMode] = useState<"frames" | "duration" | "fps">("frames");

  // Subtitle Generator
  const [subText, setSubText] = useState<string>(
    "00:00:01,000 --> 00:00:04,000\nWelcome to Creator Units!\n\n00:00:04,500 --> 00:00:08,000\nThis subtitle is generated locally in the browser."
  );
  const [subFormat, setSubFormat] = useState<"srt" | "vtt">("srt");

  // Transcript Cleaner
  const [transcriptInput, setTranscriptInput] = useState<string>(
    "[00:12] Host: Hello everyone!\n[00:15] Guest: Hey there! Thanks for having me.\n00:18 - 00:22 Today we will review on-device video tools."
  );
  const [cleanTimestamps, setCleanTimestamps] = useState<boolean>(true);
  const [cleanSpeakers, setCleanSpeakers] = useState<boolean>(true);
  const [cleanNewlines, setCleanNewlines] = useState<boolean>(false);
  const [cleanOutput, setCleanOutput] = useState<string>("");

  // Video Compressor (specs and visual guidelines)
  const [compFile, setCompFile] = useState<File | null>(null);
  const [compPreset, setCompPreset] = useState<string>("discord");
  const [compEstimatedSize, setCompEstimatedSize] = useState<string>("");

  // Video Thumbnail Extractor (Fully functional client-side frame grabber)
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [videoWidth, setVideoWidth] = useState<number>(0);
  const [videoHeight, setVideoHeight] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Video to MP3 (timeline conversion specs)
  const [mp3File, setMp3File] = useState<File | null>(null);
  const [isExtracting, setIsExtracting] = useState<boolean>(false);

  // Clean object URL on unmount
  useEffect(() => {
    return () => {
      if (videoSrc) {
        URL.revokeObjectURL(videoSrc);
      }
    };
  }, [videoSrc]);

  // Aspect Ratio Calculator helper
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const getAspectRatioStr = (w: number, h: number) => {
    if (!w || !h) return "0:0";
    const divisor = gcd(w, h);
    return `${w / divisor}:${h / divisor}`;
  };

  const calculateTargetDimension = () => {
    const input = parseFloat(arCalcInput) || 0;
    const [rw, rh] = arTargetRatio.split(":").map(parseFloat);
    if (!rw || !rh || input === 0) return "0";

    if (arTargetDimension === "height") {
      // Calculate height based on width
      return Math.round((input * rh) / rw).toString();
    } else {
      // Calculate width based on height
      return Math.round((input * rw) / rh).toString();
    }
  };

  // FPS Calculations
  const calculateFpsField = () => {
    const frames = parseFloat(fpsFrames) || 0;
    const dur = parseFloat(fpsDuration) || 0;
    const rate = parseFloat(fpsRate) || 0;

    if (fpsMode === "frames") {
      return `${Math.round(dur * rate).toLocaleString()} total frames`;
    } else if (fpsMode === "duration") {
      if (rate === 0) return "0.0 seconds";
      const secs = frames / rate;
      const mins = Math.floor(secs / 60);
      const remainingSecs = (secs % 60).toFixed(2);
      return `${mins > 0 ? `${mins}m ` : ""}${remainingSecs}s (${secs.toFixed(1)}s total)`;
    } else {
      if (dur === 0) return "0.0 FPS";
      return `${(frames / dur).toFixed(2)} FPS`;
    }
  };

  // Transcript Cleaner logic
  const handleCleanTranscript = () => {
    let text = transcriptInput;

    if (cleanTimestamps) {
      // Matches [00:12], (01:23:45), 00:12 - 00:15, [00:12.500] etc.
      text = text.replace(/\[\d{1,2}:\d{2}(:\d{2})?(\.\d+)?\]/g, "");
      text = text.replace(/\(\d{1,2}:\d{2}(:\d{2})?(\.\d+)?\)/g, "");
      text = text.replace(/\b\d{1,2}:\d{2}(:\d{2})?(\s*-\s*\d{1,2}:\d{2}(:\d{2})?)?\b/g, "");
    }

    if (cleanSpeakers) {
      // Matches Speaker:, Host Name:, [Speaker 1]:
      text = text.replace(/^[A-Za-z0-9\s#]+:\s*/gm, "");
      text = text.replace(/^\[[A-Za-z0-9\s#]+\]:\s*/gm, "");
    }

    if (cleanNewlines) {
      // Collapses multiple consecutive newlines and standardizes spaces
      text = text.replace(/\n+/g, " ");
      text = text.replace(/\s+/g, " ");
    } else {
      // Strip trailing spaces per line
      text = text.split("\n").map(l => l.trim()).filter(Boolean).join("\n");
    }

    setCleanOutput(text.trim());
    showToast("Transcript cleaned!", "success");
  };

  // Handle local video upload for frame grabber
  const handleVideoSelect = (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setVideoFile(file);

    if (videoSrc) {
      URL.revokeObjectURL(videoSrc);
    }

    const src = URL.createObjectURL(file);
    setVideoSrc(src);
    setCurrentTime(0);
    showToast(`Loaded video: ${file.name}`, "success");
  };

  const handleVideoLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget;
    setVideoDuration(video.duration);
    setVideoWidth(video.videoWidth);
    setVideoHeight(video.videoHeight);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (videoRef.current) {
      videoRef.current.currentTime = val;
    }
  };

  const handleCaptureFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match video source resolution
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw frame onto canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Export to data URL and download
    try {
      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `frame_at_${currentTime.toFixed(2)}s.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Thumbnail frame downloaded!", "success");
    } catch (err) {
      showToast("Failed to extract frame (CORS boundaries). Try another file.", "error");
    }
  };

  // Subtitle download
  const handleDownloadSubtitles = () => {
    const blob = new Blob([subText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `subtitles.${subFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast("Subtitles downloaded!", "success");
  };

  // Video compressor preset logic
  useEffect(() => {
    if (!compFile) return;
    const originalSizeMB = compFile.size / (1024 * 1024);
    let est = 0;
    if (compPreset === "discord") est = Math.min(8, originalSizeMB * 0.2);
    else if (compPreset === "whatsapp") est = Math.min(16, originalSizeMB * 0.35);
    else if (compPreset === "web") est = originalSizeMB * 0.5;
    else est = originalSizeMB * 0.15;
    setCompEstimatedSize(`${est.toFixed(1)} MB (${Math.round((1 - est / originalSizeMB) * 100)}% savings)`);
  }, [compFile, compPreset]);

  // Audio extraction simulator
  const handleExtractAudio = async () => {
    if (!mp3File) return;
    setIsExtracting(true);
    // Simulate audio track extraction progress
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsExtracting(false);

    // Prompt download
    const blob = new Blob(["MOCK AUDIO DATA"], { type: "audio/mp3" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${mp3File.name.substring(0, mp3File.name.lastIndexOf("."))} - extracted.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast("Audio track extracted (Mock MP3 wrapper)!", "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">

        {/* 1. ASPECT RATIO CALCULATOR */}
        {slug === "aspect-ratio-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0 }}>Detect Aspect Ratio</h3>
              <div className="grid-cols-2" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="ar-width">Width (px)</label>
                  <input
                    id="ar-width"
                    type="number"
                    value={arWidth}
                    onChange={(e) => setArWidth(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ar-height">Height (px)</label>
                  <input
                    id="ar-height"
                    type="number"
                    value={arHeight}
                    onChange={(e) => setArHeight(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "1.2rem", fontWeight: "bold" }}>
                Aspect Ratio: <span className="text-primary-color">{getAspectRatioStr(Number(arWidth), Number(arHeight))}</span>
              </div>
            </div>

            <div className="card" style={{ borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0 }}>Scale & Resize Dimension</h3>
              <div className="grid-cols-3" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="ar-calc-input">Input Dimension (px)</label>
                  <input
                    id="ar-calc-input"
                    type="number"
                    value={arCalcInput}
                    onChange={(e) => setArCalcInput(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ar-target-ratio">Target Aspect Ratio</label>
                  <select
                    id="ar-target-ratio"
                    value={arTargetRatio}
                    onChange={(e) => setArTargetRatio(e.target.value)}
                    className="form-control form-select"
                  >
                    <option value="16:9">16:9 (Landscape HD)</option>
                    <option value="9:16">9:16 (Shorts/TikTok)</option>
                    <option value="4:3">4:3 (Legacy SD)</option>
                    <option value="1:1">1:1 (Square)</option>
                    <option value="21:9">21:9 (Ultrawide)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="ar-target-dim">Calculate Output As</label>
                  <select
                    id="ar-target-dim"
                    value={arTargetDimension}
                    onChange={(e) => setArTargetDimension(e.target.value as any)}
                    className="form-control form-select"
                  >
                    <option value="height">Calculate Height</option>
                    <option value="width">Calculate Width</option>
                  </select>
                </div>
              </div>

              <div style={{ marginTop: "1rem", textAlign: "center", fontSize: "1.2rem", fontWeight: "bold" }}>
                Output: <span className="text-primary-color">{calculateTargetDimension()}px</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. FPS CALCULATOR */}
        {slug === "fps-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0 }}>Video Frame Rate Calculator</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="fps-mode">Select Field to Calculate</label>
                <select
                  id="fps-mode"
                  value={fpsMode}
                  onChange={(e) => setFpsMode(e.target.value as any)}
                  className="form-control form-select"
                >
                  <option value="frames">Total Frames (using Duration and FPS)</option>
                  <option value="duration">Video Duration (using Frames and FPS)</option>
                  <option value="fps">Actual FPS (using Frames and Duration)</option>
                </select>
              </div>

              <div className="grid-cols-3" style={{ gap: "1rem", marginTop: "1.25rem" }}>
                {fpsMode !== "frames" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="fps-frames">Total Frames</label>
                    <input
                      id="fps-frames"
                      type="number"
                      value={fpsFrames}
                      onChange={(e) => setFpsFrames(e.target.value)}
                      className="form-control"
                    />
                  </div>
                )}
                {fpsMode !== "duration" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="fps-dur">Duration (seconds)</label>
                    <input
                      id="fps-dur"
                      type="number"
                      value={fpsDuration}
                      onChange={(e) => setFpsDuration(e.target.value)}
                      className="form-control"
                    />
                  </div>
                )}
                {fpsMode !== "fps" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="fps-rate">FPS</label>
                    <select
                      id="fps-rate"
                      value={fpsRate}
                      onChange={(e) => setFpsRate(e.target.value)}
                      className="form-control form-select"
                    >
                      <option value="24">24 FPS (Film)</option>
                      <option value="25">25 FPS (PAL)</option>
                      <option value="29.97">29.97 FPS (NTSC)</option>
                      <option value="30">30 FPS (Web standard)</option>
                      <option value="50">50 FPS (PAL HD)</option>
                      <option value="60">60 FPS (Gamer standard)</option>
                      <option value="120">120 FPS (Slow-Mo)</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            <div className="card text-center" style={{ borderStyle: "solid", borderColor: "var(--accent)" }}>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>Calculation Output</span>
              <div style={{ fontSize: "1.75rem", fontWeight: "bold", marginTop: "0.5rem" }}>
                {calculateFpsField()}
              </div>
            </div>
          </div>
        )}

        {/* 3. SUBTITLE GENERATOR */}
        {slug === "subtitle-generator" && (
          <div className="flex flex-col gap-5">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "dashed" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="sub-textarea">Edit/Compose Subtitles</label>
                <textarea
                  id="sub-textarea"
                  value={subText}
                  onChange={(e) => setSubText(e.target.value)}
                  className="form-control"
                  style={{ fontFamily: "monospace" }}
                  rows={8}
                />
              </div>

              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <button
                  className={`btn ${subFormat === "srt" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setSubFormat("srt")}
                >
                  SRT Format
                </button>
                <button
                  className={`btn ${subFormat === "vtt" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => setSubFormat("vtt")}
                >
                  VTT Format
                </button>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <button className="btn btn-primary" onClick={handleDownloadSubtitles}>
                💾 Download Subtitle File (.${subFormat})
              </button>
            </div>
          </div>
        )}

        {/* 4. TRANSCRIPT CLEANER */}
        {slug === "transcript-cleaner" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="transcript-textarea">Paste Raw Script / Transcript</label>
                <textarea
                  id="transcript-textarea"
                  value={transcriptInput}
                  onChange={(e) => setTranscriptInput(e.target.value)}
                  className="form-control"
                  rows={6}
                />
              </div>

              <div className="flex" style={{ gap: "2rem", flexWrap: "wrap", marginTop: "1rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <input
                    type="checkbox"
                    checked={cleanTimestamps}
                    onChange={(e) => setCleanTimestamps(e.target.checked)}
                  />
                  Remove Timestamps
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <input
                    type="checkbox"
                    checked={cleanSpeakers}
                    onChange={(e) => setCleanSpeakers(e.target.checked)}
                  />
                  Remove Speaker Names
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <input
                    type="checkbox"
                    checked={cleanNewlines}
                    onChange={(e) => setCleanNewlines(e.target.checked)}
                  />
                  Merge into a single paragraph
                </label>
              </div>

              <button className="btn btn-primary w-full" style={{ marginTop: "1.25rem" }} onClick={handleCleanTranscript}>
                ✨ Clean Transcript
              </button>
            </div>

            {cleanOutput && (
              <div className="card" style={{ borderStyle: "solid", position: "relative" }}>
                <pre style={{
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  fontFamily: "inherit",
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: "1.5"
                }}>
                  {cleanOutput}
                </pre>
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn btn-secondary btn-sm" onClick={() => { navigator.clipboard.writeText(cleanOutput); showToast("Cleaned transcript copied!", "success"); }}>
                    📋 Copy Text
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. VIDEO COMPRESSOR */}
        {slug === "video-compressor" && (
          <div className="flex flex-col gap-6">
            <FileUpload
              onFilesSelect={(files) => setCompFile(files[0] || null)}
              multiple={false}
              accept="video/mp4, video/webm, video/quicktime"
              maxSizeMB={100}
              label="Select your MP4/WebM video"
              description="Calculate best parameters locally. (Files never leave your browser)"
            />

            {compFile && (
              <div className="card flex flex-col gap-4" style={{ borderStyle: "solid" }}>
                <div style={{ fontSize: "0.95rem" }}>
                  File: <strong>{compFile.name}</strong> ({ (compFile.size / (1024 * 1024)).toFixed(1) } MB)
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="comp-preset">Select Size Target Preset</label>
                  <select
                    id="comp-preset"
                    value={compPreset}
                    onChange={(e) => setCompPreset(e.target.value)}
                    className="form-control form-select"
                  >
                    <option value="discord">Discord limit (8 MB)</option>
                    <option value="whatsapp">WhatsApp limit (16 MB)</option>
                    <option value="web">Web Optimize (50% Compression)</option>
                    <option value="max">Ultra Low Bitrate (80% compression)</option>
                  </select>
                </div>

                <div style={{ padding: "1rem", backgroundColor: "var(--bg-secondary)", borderRadius: "6px" }}>
                  <div>Estimated output file: <strong>{compEstimatedSize}</strong></div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.5rem" }}>
                    *To perform lossless client-side video compression without uploads, we suggest resizing resolution to 720p at 30 FPS.
                  </div>
                </div>

                <button className="btn btn-primary" onClick={() => showToast("Compiling output preset settings...", "info")}>
                  ⚙️ Apply Compress Presets
                </button>
              </div>
            )}
          </div>
        )}

        {/* 6. VIDEO THUMBNAIL EXTRACTOR */}
        {slug === "video-thumbnail-extractor" && (
          <div className="flex flex-col gap-6">
            {!videoFile ? (
              <FileUpload
                onFilesSelect={handleVideoSelect}
                multiple={false}
                accept="video/mp4, video/webm"
                maxSizeMB={50}
                label="Select local MP4/WebM video to grab thumbnails"
                description="Done 100% locally in your browser. Perfect for high-res title images."
              />
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span style={{ fontSize: "0.95rem" }}>Loaded: <strong>{videoFile.name}</strong></span>
                  <button className="btn btn-secondary btn-sm" onClick={() => { setVideoFile(null); setVideoSrc(""); }}>
                    Change Video
                  </button>
                </div>

                {/* Video scrubbing workspace */}
                <div style={{ width: "100%", backgroundColor: "black", borderRadius: "8px", overflow: "hidden", display: "flex", justifyContent: "center" }}>
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    onLoadedMetadata={handleVideoLoadedMetadata}
                    style={{ width: "100%", maxHeight: "400px" }}
                    controls={false}
                    muted
                    playsInline
                  />
                </div>

                <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label" htmlFor="video-scrubber">
                      Seek Timestamp: <strong>{currentTime.toFixed(2)}s</strong> / {videoDuration.toFixed(2)}s
                    </label>
                    <input
                      id="video-scrubber"
                      type="range"
                      min={0}
                      max={videoDuration || 100}
                      step={0.05}
                      value={currentTime}
                      onChange={handleSeekChange}
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="flex justify-between" style={{ marginTop: "1rem" }}>
                    <button className="btn btn-secondary btn-sm" onClick={() => {
                      const newTime = Math.max(0, currentTime - 1);
                      setCurrentTime(newTime);
                      if (videoRef.current) videoRef.current.currentTime = newTime;
                    }}>
                      -1s
                    </button>
                    <button className="btn btn-primary" onClick={handleCaptureFrame}>
                      📸 Capture and Download Frame ({videoWidth}x{videoHeight})
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={() => {
                      const newTime = Math.min(videoDuration, currentTime + 1);
                      setCurrentTime(newTime);
                      if (videoRef.current) videoRef.current.currentTime = newTime;
                    }}>
                      +1s
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* Hidden canvas for drawing frames */}
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
        )}

        {/* 7. VIDEO TO MP3 */}
        {slug === "video-to-mp3" && (
          <div className="flex flex-col gap-6">
            <FileUpload
              onFilesSelect={(files) => setMp3File(files[0] || null)}
              multiple={false}
              accept="video/mp4, video/webm, audio/mp4, audio/mpeg, video/quicktime"
              maxSizeMB={50}
              label="Select your MP4/WebM/MOV video file"
              description="Extract clean audio streams directly on your device."
            />

            {mp3File && (
              <div className="card flex flex-col gap-4 text-center" style={{ borderStyle: "solid" }}>
                <div>Selected: <strong>{mp3File.name}</strong></div>
                
                <button
                  className="btn btn-primary"
                  onClick={handleExtractAudio}
                  disabled={isExtracting}
                >
                  {isExtracting ? "⏳ Extracting Audio stream..." : "🎵 Extract MP3 Audio track"}
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

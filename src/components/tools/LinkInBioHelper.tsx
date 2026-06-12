"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface LinkItem {
  id: string;
  label: string;
  url: string;
}

interface BioTheme {
  name: string;
  bg: string;
  cardBg: string;
  text: string;
  cardText: string;
}

export default function LinkInBioHelper() {
  const { showToast } = useToast();
  
  const [title, setTitle] = useState<string>("Jane Doe");
  const [subtitle, setSubtitle] = useState<string>("Digital Creator & Designer");
  const [avatar, setAvatar] = useState<string>("");
  const [activeTheme, setActiveTheme] = useState<number>(0);
  const [links, setLinks] = useState<LinkItem[]>([
    { id: "1", label: "My Creative Portfolio", url: "https://example.com/portfolio" },
    { id: "2", label: "Subscribe to Newsletter", url: "https://example.com/newsletter" },
    { id: "3", label: "Read My Blog Articles", url: "https://example.com/blog" }
  ]);
  
  const [newLabel, setNewLabel] = useState<string>("");
  const [newUrl, setNewUrl] = useState<string>("");

  const themes: BioTheme[] = [
    {
      name: "Midnight Eclipse",
      bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      cardBg: "rgba(255, 255, 255, 0.08)",
      text: "#f8fafc",
      cardText: "#f1f5f9"
    },
    {
      name: "Sunset Gradient",
      bg: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
      cardBg: "rgba(255, 255, 255, 0.2)",
      text: "#ffffff",
      cardText: "#ffffff"
    },
    {
      name: "Emerald Jungle",
      bg: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)",
      cardBg: "rgba(255, 255, 255, 0.1)",
      text: "#ecfdf5",
      cardText: "#f0fdf4"
    },
    {
      name: "Oceanic Wave",
      bg: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
      cardBg: "rgba(255, 255, 255, 0.15)",
      text: "#f0f9ff",
      cardText: "#f0f9ff"
    },
    {
      name: "Soft Pastel Pink",
      bg: "linear-gradient(135deg, #fce7f3 0%, #fae8ff 100%)",
      cardBg: "#ffffff",
      text: "#471854",
      cardText: "#471854"
    }
  ];

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatar(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addLink = () => {
    if (!newLabel.trim() || !newUrl.trim()) {
      showToast("Please enter both a link label and destination URL.", "warning");
      return;
    }

    let url = newUrl.trim();
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    const item: LinkItem = {
      id: Math.random().toString(36).substring(2, 9),
      label: newLabel.trim(),
      url
    };

    setLinks((prev) => [...prev, item]);
    setNewLabel("");
    setNewUrl("");
    showToast("Link added to bio list!", "success");
  };

  const removeLink = (id: string) => {
    setLinks((prev) => prev.filter((item) => item.id !== id));
    showToast("Link removed.", "info");
  };

  const generateHTMLCode = (): string => {
    const theme = themes[activeTheme];
    const linksHTML = links
      .map(
        (link) => `
      <a href="${link.url}" class="card" target="_blank" rel="noopener noreferrer">
        ${link.label}
      </a>
      `
      )
      .join("");

    const avatarHTML = avatar
      ? `<img class="avatar" src="${avatar}" alt="${title}" />`
      : `<div class="avatar-placeholder">${title.charAt(0)}</div>`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Link in Bio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      background: ${theme.bg};
      color: ${theme.text};
      min-height: 100vh;
      display: flex;
      justify-content: center;
      padding: 3rem 1rem;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      width: 100%;
      max-width: 480px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .avatar {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid ${theme.text};
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      margin-bottom: 1.25rem;
    }
    .avatar-placeholder {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background-color: ${theme.cardBg};
      color: ${theme.text};
      border: 2px solid ${theme.text};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.25rem;
      font-weight: 700;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      margin-bottom: 1.25rem;
    }
    .title {
      font-size: 1.35rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
      line-height: 1.25;
    }
    .subtitle {
      font-size: 0.95rem;
      opacity: 0.85;
      margin-bottom: 2.5rem;
    }
    .links-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .card {
      display: block;
      width: 100%;
      padding: 1.15rem 1.5rem;
      background-color: ${theme.cardBg};
      color: ${theme.cardText};
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 12px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s;
      box-shadow: 0 4px 10px rgba(0,0,0,0.08);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }
    .card:hover {
      transform: translateY(-2px);
      background-color: rgba(255, 255, 255, 0.25);
    }
    .footer {
      margin-top: auto;
      padding-top: 4rem;
      font-size: 0.75rem;
      opacity: 0.6;
    }
    .footer a {
      color: inherit;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    ${avatarHTML}
    <h1 class="title">${title}</h1>
    <p class="subtitle">${subtitle}</p>
    
    <div class="links-list">
      ${linksHTML}
    </div>

    <div class="footer">
      Powered by <a href="https://creatorunits.com" target="_blank">Creators Units</a>
    </div>
  </div>
</body>
</html>`;
  };

  const handleExport = () => {
    if (links.length === 0) {
      showToast("Add at least one link before exporting your page.", "warning");
      return;
    }

    const htmlContent = generateHTMLCode();
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "index.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
    showToast("Link-in-bio HTML file downloaded successfully!", "success");
  };

  const theme = themes[activeTheme];

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left builder settings panels */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Profile Information</span>

          <div className="grid-cols-2" style={{ gap: "1rem" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="bio-helper-title">Profile Name</label>
              <input
                id="bio-helper-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
              />
            </div>
            
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="bio-helper-sub">Profile Subtitle</label>
              <input
                id="bio-helper-sub"
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="bio-helper-avatar">Avatar Profile Image</label>
            <input
              id="bio-helper-avatar"
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="form-control"
              style={{ padding: "0.45rem 1rem" }}
            />
          </div>

          <span className="form-label" style={{ fontSize: "1.1rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
            Design Theme
          </span>

          <div className="flex" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            {themes.map((t, idx) => (
              <button
                key={idx}
                className={`btn ${activeTheme === idx ? "btn-primary" : "btn-secondary"} btn-sm`}
                onClick={() => setActiveTheme(idx)}
              >
                {t.name}
              </button>
            ))}
          </div>

          <span className="form-label" style={{ fontSize: "1.1rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
            Profile Links
          </span>

          {/* Links list manager */}
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <div
                key={link.id}
                className="flex justify-between items-center"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "var(--border-radius-sm)",
                  padding: "0.5rem 1rem"
                }}
              >
                <div className="flex flex-col">
                  <strong style={{ fontSize: "0.9rem" }}>{link.label}</strong>
                  <span className="text-muted" style={{ fontSize: "0.75rem", wordBreak: "break-all" }}>{link.url}</span>
                </div>
                <button
                  className="btn btn-secondary btn-sm"
                  style={{ minWidth: "auto", padding: "0.25rem 0.5rem" }}
                  onClick={() => removeLink(link.id)}
                  aria-label={`Remove ${link.label}`}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Add new link fields */}
          <div className="card flex flex-col gap-3" style={{ borderStyle: "solid", padding: "1rem" }}>
            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: "0.8rem" }} htmlFor="bio-new-label">Link Label</label>
                <input
                  id="bio-new-label"
                  type="text"
                  value={newLabel}
                  onChange={(e) => setNewLabel(e.target.value)}
                  placeholder="e.g. My Website"
                  className="form-control"
                />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" style={{ fontSize: "0.8rem" }} htmlFor="bio-new-url">URL</label>
                <input
                  id="bio-new-url"
                  type="text"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="e.g. johndoe.com"
                  className="form-control"
                />
              </div>
            </div>
            <button className="btn btn-secondary btn-sm" onClick={addLink}>
              + Add Link Card
            </button>
          </div>

          <button className="btn btn-primary w-full" onClick={handleExport} style={{ marginTop: "0.5rem" }}>
            💾 Export Static HTML index.html
          </button>
        </div>

        {/* Right simulated mobile frame preview */}
        <div className="flex flex-col items-center">
          <span className="form-label w-full" style={{ fontSize: "1.1rem" }}>Mobile Device Preview</span>

          <div
            style={{
              width: "300px",
              height: "580px",
              borderRadius: "36px",
              border: "12px solid #1e293b",
              backgroundColor: "black",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "2.5rem 1rem 1rem 1rem",
              background: theme.bg,
              color: theme.text
            }}
          >
            {/* Notch */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "110px",
                height: "22px",
                backgroundColor: "#1e293b",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px"
              }}
            />

            {/* Avatar preview */}
            {avatar ? (
              <img
                src={avatar}
                alt={title}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `2px solid ${theme.text}`,
                  marginBottom: "0.75rem",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
                }}
              />
            ) : (
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: theme.cardBg,
                  color: theme.text,
                  border: `2px solid ${theme.text}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.75rem"
                }}
              >
                {title.charAt(0)}
              </div>
            )}

            <h3 style={{ color: theme.text, fontSize: "1.1rem", fontWeight: "700", margin: "0 0 0.15rem 0", lineHeight: "1.2" }}>{title}</h3>
            <span style={{ fontSize: "0.8rem", opacity: 0.85, marginBottom: "1.5rem" }}>{subtitle}</span>

            {/* Simulated Link list */}
            <div className="flex flex-col gap-3 w-full" style={{ overflowY: "auto", paddingRight: "4px" }}>
              {links.map((link) => (
                <div
                  key={link.id}
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    backgroundColor: theme.cardBg,
                    color: theme.cardText,
                    borderRadius: "10px",
                    fontWeight: "600",
                    fontSize: "0.85rem",
                    textAlign: "center",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                  }}
                >
                  {link.label}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "auto", fontSize: "0.6rem", opacity: 0.5 }}>
              Powered by Creators Units
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

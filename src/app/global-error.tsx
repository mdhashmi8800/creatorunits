"use client";

import React, { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error in structured format
    console.error("Critical Layout crash caught by global boundary:", {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
    });
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>System Error | Creators Units</title>
        <meta name="description" content="A critical application error has occurred." />
        <style>{`
          :root {
            --bg-primary: #ffffff;
            --bg-secondary: #fafafa;
            --text-primary: #171717;
            --text-muted: #888888;
            --accent: #171717;
            --border-color: #ebebeb;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --bg-primary: #000000;
              --bg-secondary: #0a0a0a;
              --text-primary: #ffffff;
              --text-muted: #666666;
              --accent: #ffffff;
              --border-color: #333333;
            }
          }
          body {
            background-color: var(--bg-secondary);
            color: var(--text-primary);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            line-height: 1.6;
          }
          .container {
            max-width: 500px;
            padding: 2.5rem;
            background-color: var(--bg-primary);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
            margin: 1.5rem;
          }
          .icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            display: inline-block;
          }
          h1 {
            font-size: 2rem;
            font-weight: 600;
            margin: 0 0 0.75rem 0;
            letter-spacing: -0.75px;
          }
          p {
            color: var(--text-muted);
            font-size: 0.95rem;
            margin: 0 0 2rem 0;
          }
          .btn {
            display: inline-block;
            font-weight: 600;
            font-size: 0.9rem;
            padding: 0.75rem 1.5rem;
            background-color: var(--accent);
            color: var(--bg-primary);
            border: 1px solid var(--accent);
            border-radius: 100px;
            cursor: pointer;
            text-decoration: none;
            transition: opacity 0.15s ease;
          }
          .btn:hover {
            opacity: 0.9;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <span className="icon" aria-hidden="true">⚠️</span>
          <h1>System Error</h1>
          <p>
            A critical configuration or system error has occurred. We have registered this issue and will investigate it immediately.
          </p>
          <button onClick={() => reset()} className="btn">
            Recover Application
          </button>
        </div>
      </body>
    </html>
  );
}

"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";
import { useHistory } from "@/context/HistoryContext";

interface StyledText {
  styleName: string;
  text: string;
}

export default function FancyTextGenerator() {
  const { showToast } = useToast();
  const { addHistoryEntry } = useHistory();
  const [inputText, setInputText] = useState<string>("Make your bio stand out!");

  const convertChar = (char: string, offsetA: number, offseta: number, offsetNum?: number) => {
    const code = char.charCodeAt(0);
    
    // A-Z
    if (code >= 65 && code <= 90) {
      return String.fromCodePoint(offsetA + (code - 65));
    }
    // a-z
    if (code >= 97 && code <= 122) {
      return String.fromCodePoint(offseta + (code - 97));
    }
    // 0-9
    if (offsetNum !== undefined && code >= 48 && code <= 57) {
      return String.fromCodePoint(offsetNum + (code - 48));
    }
    return char;
  };

  const getStrikethrough = (text: string) => {
    return text.split("").map((c) => c + "\u0336").join("");
  };

  const getUnderline = (text: string) => {
    return text.split("").map((c) => c + "\u0332").join("");
  };

  const getSlash = (text: string) => {
    return text.split("").map((c) => c + "\u0338").join("");
  };

  const getStyles = (): StyledText[] => {
    const txt = inputText || "Preview Text";

    // 1. Mathematical Bold Serif
    const boldSerif = txt.split("").map((c) => convertChar(c, 0x1D400, 0x1D41A, 0x1D7CE)).join("");

    // 2. Mathematical Italic Serif
    const italicSerif = txt.split("").map((c) => convertChar(c, 0x1D434, 0x1D44E)).join("");

    // 3. Mathematical Bold Italic
    const boldItalic = txt.split("").map((c) => convertChar(c, 0x1D468, 0x1D482)).join("");

    // 4. Double Struck (Blackboard)
    const doubleStruck = txt.split("").map((c) => convertChar(c, 0x1D538, 0x1D552, 0x1D7D8)).join("");

    // 5. Script Bold
    const scriptBold = txt.split("").map((c) => convertChar(c, 0x1D4D0, 0x1D4EA)).join("");

    // 6. Gothic / Fraktur
    const gothic = txt.split("").map((c) => convertChar(c, 0x1D504, 0x1D51E)).join("");

    // 7. Sans-serif Bold
    const sansBold = txt.split("").map((c) => convertChar(c, 0x1D5D4, 0x1D5EE, 0x1D7EC)).join("");

    // 8. Bubble / Circled
    const bubble = txt.split("").map((c) => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x24B6 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x24D0 + (code - 97));
      if (code >= 49 && code <= 57) return String.fromCodePoint(0x2460 + (code - 49)); // 1-9
      if (code === 48) return String.fromCodePoint(0x24EA);
      return c;
    }).join("");

    // 9. Square boxed
    const squared = txt.split("").map((c) => {
      const code = c.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F130 + (code - 65));
      if (code >= 97 && code <= 122) return String.fromCodePoint(0x1F130 + (code - 97));
      return c;
    }).join("");

    return [
      { styleName: "Serif Bold", text: boldSerif },
      { styleName: "Serif Italic", text: italicSerif },
      { styleName: "Bold Italic", text: boldItalic },
      { styleName: "Double-Struck", text: doubleStruck },
      { styleName: "Script Bold", text: scriptBold },
      { styleName: "Gothic / Fraktur", text: gothic },
      { styleName: "Sans-Serif Bold", text: sansBold },
      { styleName: "Circled Letters", text: bubble },
      { styleName: "Square Block Letters", text: squared },
      { styleName: "Strikethrough text", text: getStrikethrough(txt) },
      { styleName: "Underlined text", text: getUnderline(txt) },
      { styleName: "Slash-Through text", text: getSlash(txt) }
    ];
  };

  const handleCopy = (text: string, style: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${style} output!`, "success");
    addHistoryEntry("fancy-text-generator", "Fancy Text Generator", text, `Font: ${style}`);
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Input box */}
        <div className="form-group" style={{ marginBottom: 0 }}>
          <label className="form-label" htmlFor="fancy-input-text">Type or Paste Your Text Below</label>
          <input
            id="fancy-input-text"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="form-control"
            placeholder="Type here..."
          />
        </div>

        {/* Outputs grid */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", margin: 0 }}>
            Styled Fonts (Click Copy Button to Use)
          </span>

          <div className="grid-cols-2" style={{ gap: "1rem" }}>
            {getStyles().map((style, idx) => (
              <div
                key={idx}
                className="card flex justify-between items-center"
                style={{
                  borderStyle: "solid",
                  padding: "1rem",
                  backgroundColor: "var(--bg-primary)"
                }}
              >
                <div className="flex flex-col" style={{ gap: "4px", width: "calc(100% - 70px)" }}>
                  <span className="text-muted" style={{ fontSize: "0.75rem", fontWeight: "600", textTransform: "uppercase" }}>
                    {style.styleName}
                  </span>
                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      whiteSpace: "nowrap",
                      overflowX: "auto",
                      scrollbarWidth: "none"
                    }}
                  >
                    {style.text}
                  </div>
                </div>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleCopy(style.text, style.styleName)}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

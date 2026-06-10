"use client";

import React, { useState, useEffect } from "react";
import { useToast } from "@/context/ToastContext";

export default function PasswordGenerator() {
  const { showToast } = useToast();
  
  const [length, setLength] = useState<number>(16);
  const [useUpper, setUseUpper] = useState<boolean>(true);
  const [useLower, setUseLower] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    generatePassword();
  }, [length, useUpper, useLower, useNumbers, useSymbols]);

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let pool = "";
    if (useUpper) pool += uppercase;
    if (useLower) pool += lowercase;
    if (useNumbers) pool += numbers;
    if (useSymbols) pool += symbols;

    if (!pool) {
      setPassword("");
      return;
    }

    try {
      const randomValues = new Uint32Array(length);
      window.crypto.getRandomValues(randomValues);
      
      const pass = Array.from(randomValues)
        .map((val) => pool[val % pool.length])
        .join("");

      setPassword(pass);
    } catch (err) {
      // Fallback if crypto not available (unlikely in modern browsers)
      let pass = "";
      for (let i = 0; i < length; i++) {
        pass += pool.charAt(Math.floor(Math.random() * pool.length));
      }
      setPassword(pass);
    }
  };

  const getStrength = () => {
    if (!password) return { label: "Empty", color: "var(--text-muted)", score: 0 };
    
    // Calculate entropy: L * log2(R)
    let poolSize = 0;
    if (useUpper) poolSize += 26;
    if (useLower) poolSize += 26;
    if (useNumbers) poolSize += 10;
    if (useSymbols) poolSize += 26;

    const entropy = length * Math.log2(poolSize);

    if (entropy >= 80) return { label: "Very Strong (Secure)", color: "var(--success)", score: 100 };
    if (entropy >= 60) return { label: "Strong", color: "var(--success)", score: 75 };
    if (entropy >= 45) return { label: "Medium", color: "var(--warning)", score: 50 };
    return { label: "Weak (Unsafe)", color: "var(--error)", score: 25 };
  };

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    showToast("Password copied to clipboard!", "success");
  };

  const strength = getStrength();

  return (
    <div className="card">
      <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
        
        {/* Left Controls panel */}
        <div className="flex flex-col gap-4">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Configure Specifications</span>

          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label" htmlFor="pass-len-slider">Password Length: {length} characters</label>
            <input
              id="pass-len-slider"
              type="range"
              min="6"
              max="64"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent)" }}
            />
          </div>

          <div className="flex flex-col gap-2" style={{ marginTop: "0.5rem" }}>
            <div className="flex items-center gap-2">
              <input
                id="pass-upper-chk"
                type="checkbox"
                checked={useUpper}
                onChange={(e) => setUseUpper(e.target.checked)}
                style={{ cursor: "pointer", accentColor: "var(--accent)" }}
              />
              <label htmlFor="pass-upper-chk" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
                Include Uppercase Letters (A-Z)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="pass-lower-chk"
                type="checkbox"
                checked={useLower}
                onChange={(e) => setUseLower(e.target.checked)}
                style={{ cursor: "pointer", accentColor: "var(--accent)" }}
              />
              <label htmlFor="pass-lower-chk" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
                Include Lowercase Letters (a-z)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="pass-num-chk"
                type="checkbox"
                checked={useNumbers}
                onChange={(e) => setUseNumbers(e.target.checked)}
                style={{ cursor: "pointer", accentColor: "var(--accent)" }}
              />
              <label htmlFor="pass-num-chk" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
                Include Numbers (0-9)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                id="pass-sym-chk"
                type="checkbox"
                checked={useSymbols}
                onChange={(e) => setUseSymbols(e.target.checked)}
                style={{ cursor: "pointer", accentColor: "var(--accent)" }}
              />
              <label htmlFor="pass-sym-chk" className="form-label" style={{ marginBottom: 0, cursor: "pointer" }}>
                Include Special Symbols (&apos;!@#$%^...&apos;)
              </label>
            </div>
          </div>
        </div>

        {/* Right Output details */}
        <div className="flex flex-col gap-6">
          <span className="form-label" style={{ fontSize: "1.1rem" }}>Generated Password</span>

          <div className="card text-center" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.5rem" }}>
            {password ? (
              <div
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "var(--text-primary)",
                  wordBreak: "break-all",
                  backgroundColor: "var(--bg-primary)",
                  padding: "1rem",
                  borderRadius: "var(--border-radius-sm)",
                  border: "1px solid var(--border-color)",
                  marginBottom: "1rem"
                }}
              >
                {password}
              </div>
            ) : (
              <div style={{ color: "var(--error)", marginBottom: "1rem", fontWeight: "600" }}>
                Select at least one character category.
              </div>
            )}

            <div className="flex gap-2">
              <button className="btn btn-secondary w-full" onClick={generatePassword} disabled={!password}>
                🔄 Regenerate
              </button>
              <button className="btn btn-primary w-full" onClick={handleCopy} disabled={!password}>
                📋 Copy Key
              </button>
            </div>
          </div>

          {password && (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between" style={{ fontSize: "0.85rem" }}>
                <strong>Entropy Evaluation Strength:</strong>
                <span style={{ color: strength.color, fontWeight: "bold" }}>{strength.label}</span>
              </div>
              <div
                style={{
                  height: "8px",
                  width: "100%",
                  backgroundColor: "var(--bg-tertiary)",
                  borderRadius: "4px",
                  overflow: "hidden"
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${strength.score}%`,
                    backgroundColor: strength.color,
                    transition: "width var(--transition-normal)"
                  }}
                />
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

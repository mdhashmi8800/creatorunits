"use client";

import React, { useState, useEffect } from "react";
import { useToast } from "@/context/ToastContext";

export default function TimeConverter() {
  const { showToast } = useToast();
  
  const [converterMode, setConverterMode] = useState<string>("epoch");
  
  // Epoch states
  const [epochInput, setEpochInput] = useState<string>("");
  const [dateInput, setDateInput] = useState<string>("");

  // Timezone states
  const [sourceTime, setSourceTime] = useState<string>("");
  const [sourceTz, setSourceTz] = useState<string>("UTC");
  const [targetTz, setTargetTz] = useState<string>("Asia/Kolkata");
  const [convertedTzTime, setConvertedTzTime] = useState<string>("");

  const timezones = [
    { label: "UTC / GMT", value: "UTC" },
    { label: "US Eastern Time (EST/EDT)", value: "America/New_York" },
    { label: "US Pacific Time (PST/PDT)", value: "America/Los_Angeles" },
    { label: "Central European (CET)", value: "Europe/Paris" },
    { label: "India Standard (IST)", value: "Asia/Kolkata" },
    { label: "Japan Standard (JST)", value: "Asia/Tokyo" },
    { label: "Australian Eastern (AEST)", value: "Australia/Sydney" }
  ];

  useEffect(() => {
    // Initialize defaults
    setEpochInput(Math.floor(Date.now() / 1000).toString());
    
    const now = new Date();
    // format to YYYY-MM-DDTHH:MM
    const localDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .substring(0, 16);
    setDateInput(localDateTime);
    setSourceTime(localDateTime);
  }, []);

  // Epoch logic
  const getEpochResults = () => {
    const val = Number(epochInput);
    if (isNaN(val) || val <= 0) return null;

    try {
      const date = new Date(val * 1000);
      return {
        gmt: date.toUTCString(),
        local: date.toString(),
        iso: date.toISOString()
      };
    } catch (err) {
      return null;
    }
  };

  const handleDateToEpoch = () => {
    if (!dateInput) return;
    const date = new Date(dateInput);
    const ts = Math.floor(date.getTime() / 1000);
    setEpochInput(ts.toString());
    showToast("Converted date to Unix Timestamp!", "success");
  };

  // Timezone logic
  const handleConvertTz = () => {
    if (!sourceTime) return;
    
    try {
      // Parse source time in source timezone
      const date = new Date(sourceTime);
      
      // We format output in target timezone
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: targetTz,
        dateStyle: "full",
        timeStyle: "long"
      });

      setConvertedTzTime(formatter.format(date));
      showToast("Timezone conversion updated!", "success");
    } catch (err) {
      showToast("Error parsing or converting time.", "error");
    }
  };

  useEffect(() => {
    if (sourceTime && sourceTz && targetTz) {
      handleConvertTz();
    }
  }, [sourceTime, sourceTz, targetTz]);

  const copyText = (txt: string) => {
    navigator.clipboard.writeText(txt);
    showToast("Copied value to clipboard!", "success");
  };

  const epochResults = getEpochResults();

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Toggle Mode */}
        <div className="flex" style={{ gap: "0.5rem" }}>
          <button
            className={`btn ${converterMode === "epoch" ? "btn-primary" : "btn-secondary"} btn-sm`}
            onClick={() => setConverterMode("epoch")}
          >
            ⏱ Unix Epoch Timestamp Converter
          </button>
          <button
            className={`btn ${converterMode === "timezone" ? "btn-primary" : "btn-secondary"} btn-sm`}
            onClick={() => setConverterMode("timezone")}
          >
            🌐 World Timezone Converter
          </button>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid var(--border-color)", margin: 0 }} />

        {/* Unix Epoch Converter View */}
        {converterMode === "epoch" && (
          <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
            
            {/* Left Epoch Inputs */}
            <div className="flex flex-col gap-4">
              <span className="form-label" style={{ fontSize: "1.05rem" }}>Timestamp Conversion</span>
              
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="epoch-ts-input">Enter Unix Timestamp (seconds)</label>
                <div className="flex" style={{ gap: "0.5rem" }}>
                  <input
                    id="epoch-ts-input"
                    type="text"
                    value={epochInput}
                    onChange={(e) => setEpochInput(e.target.value)}
                    className="form-control"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  />
                  <button className="btn btn-secondary btn-sm" onClick={() => setEpochInput(Math.floor(Date.now() / 1000).toString())}>
                    Current
                  </button>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="epoch-date-input">Convert Datetime to Unix</label>
                <div className="flex" style={{ gap: "0.5rem" }}>
                  <input
                    id="epoch-date-input"
                    type="datetime-local"
                    value={dateInput}
                    onChange={(e) => setDateInput(e.target.value)}
                    className="form-control"
                  />
                  <button className="btn btn-primary btn-sm" onClick={handleDateToEpoch}>
                    Convert
                  </button>
                </div>
              </div>
            </div>

            {/* Right Epoch Outputs */}
            <div className="flex flex-col gap-4">
              <span className="form-label" style={{ fontSize: "1.05rem" }}>Datetime Equivalents</span>
              
              {epochResults ? (
                <div className="flex flex-col gap-3">
                  <div
                    className="card flex justify-between items-center"
                    style={{ padding: "0.75rem 1rem", cursor: "pointer", borderStyle: "solid" }}
                    onClick={() => copyText(epochResults.gmt)}
                    title="Click to copy"
                  >
                    <div>
                      <span className="text-muted" style={{ fontSize: "0.75rem" }}>GMT / UTC Time</span>
                      <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>{epochResults.gmt}</div>
                    </div>
                    <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>📋</span>
                  </div>

                  <div
                    className="card flex justify-between items-center"
                    style={{ padding: "0.75rem 1rem", cursor: "pointer", borderStyle: "solid" }}
                    onClick={() => copyText(epochResults.local)}
                    title="Click to copy"
                  >
                    <div>
                      <span className="text-muted" style={{ fontSize: "0.75rem" }}>Local System Time</span>
                      <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>{epochResults.local}</div>
                    </div>
                    <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>📋</span>
                  </div>

                  <div
                    className="card flex justify-between items-center"
                    style={{ padding: "0.75rem 1rem", cursor: "pointer", borderStyle: "solid" }}
                    onClick={() => copyText(epochResults.iso)}
                    title="Click to copy"
                  >
                    <div>
                      <span className="text-muted" style={{ fontSize: "0.75rem" }}>ISO 8601 String</span>
                      <div style={{ fontSize: "0.85rem", fontFamily: "var(--font-geist-mono)", fontWeight: "600" }}>{epochResults.iso}</div>
                    </div>
                    <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>📋</span>
                  </div>
                </div>
              ) : (
                <div className="card text-center" style={{ padding: "3rem 0" }}>
                  <p className="text-muted" style={{ margin: 0 }}>Enter a valid Unix timestamp number.</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* Timezone Converter View */}
        {converterMode === "timezone" && (
          <div className="grid-cols-2" style={{ gap: "2.5rem" }}>
            
            {/* Left Timezone Selector inputs */}
            <div className="flex flex-col gap-4">
              <span className="form-label" style={{ fontSize: "1.05rem" }}>Select Timezone Parameters</span>
              
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="tz-date-val">Select Datetime (Local Time)</label>
                <input
                  id="tz-date-val"
                  type="datetime-local"
                  value={sourceTime}
                  onChange={(e) => setSourceTime(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="tz-target-select">Convert to Target Timezone</label>
                <select
                  id="tz-target-select"
                  value={targetTz}
                  onChange={(e) => setTargetTz(e.target.value)}
                  className="form-control form-select"
                >
                  {timezones.map((tz) => (
                    <option key={tz.value} value={tz.value}>{tz.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Timezone Results */}
            <div className="flex flex-col gap-4">
              <span className="form-label" style={{ fontSize: "1.05rem" }}>Converted Result</span>

              {convertedTzTime ? (
                <div
                  className="card text-center flex flex-col justify-center items-center gap-3"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderStyle: "solid",
                    padding: "2rem 1.5rem",
                    minHeight: "150px"
                  }}
                  onClick={() => copyText(convertedTzTime)}
                  title="Click to copy datetime"
                >
                  <span className="text-muted" style={{ fontSize: "0.85rem", fontWeight: "600", textTransform: "uppercase" }}>
                    Target Zone Equivalent Time
                  </span>
                  
                  <div
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: "bold",
                      color: "var(--text-primary)",
                      lineHeight: "1.4"
                    }}
                  >
                    {convertedTzTime}
                  </div>

                  <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                    📋 Click card to copy this date block.
                  </span>
                </div>
              ) : (
                <div className="card text-center" style={{ padding: "3rem 0" }}>
                  <p className="text-muted" style={{ margin: 0 }}>Select inputs to calculate timezone offset.</p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

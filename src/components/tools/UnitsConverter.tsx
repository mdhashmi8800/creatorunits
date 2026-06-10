"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";

interface ConversionFactor {
  unit: string;
  name: string;
  factor: number; // multiplied by value in base unit to get this unit
}

export default function UnitsConverter() {
  const { showToast } = useToast();
  
  const [category, setCategory] = useState<string>("length");
  const [inputValue, setInputValue] = useState<number>(1);
  const [sourceUnit, setSourceUnit] = useState<string>("");

  const conversions: Record<string, { base: string; units: ConversionFactor[] }> = {
    length: {
      base: "m",
      units: [
        { unit: "m", name: "Meters (m)", factor: 1 },
        { unit: "cm", name: "Centimeters (cm)", factor: 100 },
        { unit: "mm", name: "Millimeters (mm)", factor: 1000 },
        { unit: "km", name: "Kilometers (km)", factor: 0.001 },
        { unit: "in", name: "Inches (in)", factor: 39.3701 },
        { unit: "ft", name: "Feet (ft)", factor: 3.28084 },
        { unit: "yd", name: "Yards (yd)", factor: 1.09361 },
        { unit: "mi", name: "Miles (mi)", factor: 0.000621371 }
      ]
    },
    weight: {
      base: "kg",
      units: [
        { unit: "kg", name: "Kilograms (kg)", factor: 1 },
        { unit: "g", name: "Grams (g)", factor: 1000 },
        { unit: "mg", name: "Milligrams (mg)", factor: 1000000 },
        { unit: "lb", name: "Pounds (lb)", factor: 2.20462 },
        { unit: "oz", name: "Ounces (oz)", factor: 35.274 }
      ]
    },
    data: {
      base: "b",
      units: [
        { unit: "b", name: "Bytes (B)", factor: 1 },
        { unit: "kb", name: "Kilobytes (KB)", factor: 1 / 1024 },
        { unit: "mb", name: "Megabytes (MB)", factor: 1 / (1024 * 1024) },
        { unit: "gb", name: "Gigabytes (GB)", factor: 1 / (1024 * 1024 * 1024) },
        { unit: "tb", name: "Terabytes (TB)", factor: 1 / (1024 * 1024 * 1024 * 1024) }
      ]
    }
  };

  // Temperature logic is handled separately since it's not factor-based
  const tempUnits = [
    { unit: "C", name: "Celsius (°C)" },
    { unit: "F", name: "Fahrenheit (°F)" },
    { unit: "K", name: "Kelvin (K)" }
  ];

  const getSourceUnit = () => {
    if (sourceUnit) return sourceUnit;
    if (category === "temp") return "C";
    return conversions[category].units[0].unit;
  };

  const activeSrc = getSourceUnit();

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    setSourceUnit(""); // Reset source unit to default
  };

  const getResults = () => {
    const val = Number(inputValue);
    if (isNaN(val)) return [];

    if (category === "temp") {
      let celsius = val;
      if (activeSrc === "F") celsius = ((val - 32) * 5) / 9;
      if (activeSrc === "K") celsius = val - 273.15;

      return [
        { name: "Celsius (°C)", value: parseFloat(celsius.toFixed(4)) },
        { name: "Fahrenheit (°F)", value: parseFloat((celsius * 1.8 + 32).toFixed(4)) },
        { name: "Kelvin (K)", value: parseFloat((celsius + 273.15).toFixed(4)) }
      ];
    }

    const set = conversions[category];
    const srcFactorObj = set.units.find((u) => u.unit === activeSrc);
    if (!srcFactorObj) return [];

    // Convert value to base unit
    const valueInBase = val / srcFactorObj.factor;

    return set.units.map((u) => ({
      name: u.name,
      value: parseFloat((valueInBase * u.factor).toPrecision(8)),
      unitKey: u.unit
    }));
  };

  const results = getResults();

  const handleCopyValue = (value: number) => {
    navigator.clipboard.writeText(value.toString());
    showToast(`Copied value: ${value}`, "success");
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Category Tabs */}
        <div className="flex" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
          <button
            className={`btn ${category === "length" ? "btn-primary" : "btn-secondary"} btn-sm`}
            onClick={() => handleCategoryChange("length")}
          >
            📏 Length / Distance
          </button>
          <button
            className={`btn ${category === "weight" ? "btn-primary" : "btn-secondary"} btn-sm`}
            onClick={() => handleCategoryChange("weight")}
          >
            ⚖ Weight / Mass
          </button>
          <button
            className={`btn ${category === "data" ? "btn-primary" : "btn-secondary"} btn-sm`}
            onClick={() => handleCategoryChange("data")}
          >
            💾 Digital Storage (MB/GB)
          </button>
          <button
            className={`btn ${category === "temp" ? "btn-primary" : "btn-secondary"} btn-sm`}
            onClick={() => handleCategoryChange("temp")}
          >
            🌡 Temperature
          </button>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid var(--border-color)", margin: 0 }} />

        {/* Inputs panel */}
        <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid", padding: "1.5rem" }}>
          <div className="grid-cols-2" style={{ gap: "1.5rem" }}>
            
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="unit-input-val">Value to Convert</label>
              <input
                id="unit-input-val"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                className="form-control"
              />
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label" htmlFor="unit-source-select">Source Unit</label>
              <select
                id="unit-source-select"
                value={activeSrc}
                onChange={(e) => setSourceUnit(e.target.value)}
                className="form-control form-select"
              >
                {category === "temp"
                  ? tempUnits.map((u) => (
                      <option key={u.unit} value={u.unit}>{u.name}</option>
                    ))
                  : conversions[category].units.map((u) => (
                      <option key={u.unit} value={u.unit}>{u.name}</option>
                    ))}
              </select>
            </div>

          </div>
        </div>

        {/* Results grid */}
        <div className="flex flex-col gap-3">
          <span className="form-label" style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem", margin: 0 }}>
            Converted Equivalents (Click value to copy)
          </span>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem"
            }}
          >
            {results.map((res, idx) => (
              <div
                key={idx}
                className="card flex justify-between items-center card-hover"
                style={{
                  padding: "0.75rem 1rem",
                  cursor: "pointer",
                  borderStyle: "solid"
                }}
                onClick={() => handleCopyValue(res.value)}
                title="Click to copy value"
              >
                <div className="flex flex-col">
                  <span className="text-muted" style={{ fontSize: "0.75rem", fontWeight: "600" }}>{res.name}</span>
                  <strong style={{ fontSize: "1.1rem", fontFamily: "var(--font-geist-mono)" }}>{res.value}</strong>
                </div>
                <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>📋</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

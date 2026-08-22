import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "util-units",
  "slug": "units-converter",
  "category": "utility",
  "categoryName": "Utility Tools",
  "title": "Quick Units Converter — Metric, Imperial & Data Storage",
  "shortDesc": "Instantly convert between metric, imperial, and digital storage units (Length, Weight, Temperature, Area, Volume, and Bytes).",
  "metaDesc": "Free online units converter. Convert metric to imperial units for length (meters to feet/inches), weight (kg to lbs), temperature (Celsius to Fahrenheit), and digital storage (MB to GB).",
  "instructions": [
    "Select your measurement category (Length, Weight, Temperature, Area, Volume, or Data Storage).",
    "Enter your numerical value in any input box.",
    "View the instant, real-time conversion across all other matching units simultaneously."
  ],
  "features": [
    "Multi-unit simultaneous conversion output table.",
    "Digital data storage converter supporting base-10 (decimal) and base-2 (binary) bytes.",
    "High-precision floating point arithmetic up to 6 decimal places with clean zero-trimming.",
    "100% private: calculations run locally in JavaScript with zero server requests."
  ],
  "componentName": "UnitsConverter",
  "faqs": [
    {
      "question": "What is the exact conversion formula for Celsius to Fahrenheit?",
      "answer": "To convert Celsius (°C) to Fahrenheit (°F), multiply the Celsius temperature by 9/5 (or 1.8) and add 32: °F = (°C × 1.8) + 32. To convert Fahrenheit back to Celsius, subtract 32 and divide by 1.8: °C = (°F - 32) ÷ 1.8."
    },
    {
      "question": "What is the difference between Decimal (1000) and Binary (1024) data storage?",
      "answer": "Hard drive and SSD manufacturers use the base-10 decimal standard (1 KB = 1,000 Bytes, 1 MB = 1,000 KB, 1 GB = 1,000 MB). Computer operating systems (like Windows) calculate file sizes using the base-2 binary standard (1 KiB = 1,024 Bytes, 1 MiB = 1,024 KiB, 1 GiB = 1,024 MiB). This is why a 1 TB hard drive reports approximately 931 GB in Windows."
    },
    {
      "question": "How many pounds are in 1 kilogram?",
      "answer": "1 kilogram equals exactly 2.20462 pounds (lbs). To convert kilograms to pounds, multiply by 2.20462. To convert pounds to kilograms, divide by 2.20462 (or multiply by 0.453592)."
    },
    {
      "question": "How do you convert millimeters to inches for web design and print?",
      "answer": "1 inch is defined internationally as exactly 25.4 millimeters (mm). To convert mm to inches, divide by 25.4. To convert inches to mm, multiply by 25.4."
    }
  ],
  "seoTitle": "Free Online Units Converter — Length, Weight, Temp & Bytes",
  "seoHeading": "Instant Metric, Imperial and Digital Data Unit Conversion",
  "seoIntro": "Converting units manually can lead to costly mathematical errors in web development, graphic design, international shipping, and recipes. Our free online Units Converter calculates all matching units simultaneously as you type.",
  "seoBody": "\n<h3>Quick Reference Unit Conversion Formulas</h3>\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Category</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">From Unit &rarr; To Unit</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Mathematical Formula</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Length</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Meters &rarr; Feet</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Feet = Meters &times; 3.28084</code></td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Length</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Inches &rarr; Centimeters</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Centimeters = Inches &times; 2.54</code></td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Weight</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Kilograms &rarr; Pounds</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>Pounds = Kilograms &times; 2.20462</code></td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Temperature</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Celsius &rarr; Fahrenheit</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>&deg;F = (&deg;C &times; 1.8) + 32</code></td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Data Storage</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Gigabytes &rarr; Megabytes (Binary)</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><code>MB = GB &times; 1024</code></td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>Related Free Utility Tools</h3>\n<ul>\n  <li><a href=\"/tools/utility/qr-code-generator\">QR Code Generator</a> — Generate scannable links offline.</li>\n  <li><a href=\"/tools/utility/utm-builder\">UTM Campaign Builder</a> — Track marketing campaign parameters for GA4.</li>\n  <li><a href=\"/tools/utility/url-encoder-decoder\">URL Encoder / Decoder</a> — Encode and decode URL characters.</li>\n</ul>\n"
};

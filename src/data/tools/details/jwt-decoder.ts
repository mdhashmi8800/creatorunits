import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "dev-jwt-decode",
  "slug": "jwt-decoder",
  "category": "developer",
  "categoryName": "Developer Tools",
  "title": "JWT (JSON Web Token) Decoder",
  "shortDesc": "Decode and inspect the Header, Payload, and Signature components of any JWT token.",
  "metaDesc": "Decode JSON Web Tokens online. Parse JWT header and payload details locally. Displays token exp timecodes.",
  "instructions": [
    "Paste your encoded JSON Web Token (JWT) string.",
    "The tool splits elements by dots instantly.",
    "Inspect Header and Payload JSON structures.",
    "Review token expiration (exp) timestamp conversions."
  ],
  "features": [
    "Real-time token splitting.",
    "Translates epoch exp codes.",
    "Syntax highlighted payload displays."
  ],
  "componentName": "DeveloperUtilities",
  "faqs": [
    {
      "question": "Is my JWT token safe on this website?",
      "answer": "Yes, our decoder is 100% client-side. Your authorization tokens are parsed in your browser and never sent over the web."
    }
  ],
  "seoTitle": "JWT Decoder - Decode JSON Web Tokens Privately",
  "seoHeading": "Inspect JWT Header & Payload Data Structures",
  "seoIntro": "Verify token validity, check scope credentials, or debug token expiration bugs privately.",
  "seoBody": "<h3>Understanding JWT Structures</h3><p>JWTs contain red header blocks (algorithms), purple payloads (claims), and blue signature hashes blocks.</p>"
};

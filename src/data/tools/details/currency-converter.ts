import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "biz-currency-conv",
  "slug": "currency-converter",
  "category": "business",
  "categoryName": "Business Tools",
  "title": "Currency Converter",
  "shortDesc": "Convert values between popular world currencies (USD, EUR, GBP, JPY, CAD, INR) using common rates.",
  "metaDesc": "Convert global currencies online. Simple offline exchange calculator to translate USD, EUR, GBP, JPY, INR, and CAD values.",
  "instructions": [
    "Input value in starting currency.",
    "Select source currency and target output currency.",
    "Read converted exchange value.",
    "Edit rate values manually to test custom currency conversions."
  ],
  "features": [
    "Offline standard conversion rates.",
    "Supports custom exchange rate overrides.",
    "Quick conversions arrays."
  ],
  "componentName": "BusinessCalculators",
  "faqs": [
    {
      "question": "Are these live exchange rates?",
      "answer": "These are common reference exchange rates. You can edit the exchange rate input manually to match live spreads exactly."
    }
  ],
  "seoTitle": "Currency Converter - Translate Global Exchange Values",
  "seoHeading": "Convert World Currencies and Exchange Rates",
  "seoIntro": "Translate pricing tables values across currencies. Run conversions locally inside your browser tab.",
  "seoBody": "<h3>Standard Reference Exchange Rates</h3><p>Manage international client invoice conversions using customizable baseline reference rates.</p>"
};

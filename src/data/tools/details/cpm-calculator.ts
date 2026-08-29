import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "biz-cpm-calc",
  "slug": "cpm-calculator",
  "category": "business",
  "categoryName": "Business Tools",
  "title": "CPM Calculator — Cost Per Mille Ad Campaign Formula",
  "shortDesc": "Calculate advertising Cost Per Mille (CPM), total campaign ad spend, or required impressions across Google, Meta, TikTok, and YouTube ads.",
  "metaDesc": "Free CPM Calculator. Calculate Cost Per Mille (CPM), total ad spend, and impressions. Compare advertising costs across Meta, Google, LinkedIn, and TikTok.",
  "instructions": [
    "Select the variable you want to solve: CPM (Cost per 1,000 impressions), Total Campaign Cost ($), or Total Impressions.",
    "Enter the known campaign metrics (e.g. $500 total spend and 100,000 impressions).",
    "View the calculated result instantly in real-time.",
    "Compare your calculated CPM against industry platform benchmarks below to evaluate ad campaign efficiency."
  ],
  "features": [
    "3-way dynamic algebraic solver (Solves for CPM, Total Cost, or Impressions).",
    "Supports all major ad networks (Google Ads, Meta Ads, TikTok, YouTube, LinkedIn, X).",
    "Instant calculation with formatted currency and numeric comma grouping.",
    "Includes industry average benchmark comparison charts.",
    "100% private and client-side: your financial data and ad budgets are never transmitted to external servers."
  ],
  "componentName": "BusinessCalculators",
  "faqs": [
    {
      "question": "What is CPM in digital advertising?",
      "answer": "CPM stands for 'Cost Per Mille' ('mille' is Latin for thousand). It is the standard online advertising metric that represents the cost an advertiser pays for every 1,000 impressions (views) of an advertisement."
    },
    {
      "question": "What is the formula to calculate CPM?",
      "answer": "The core CPM formula is: `CPM = (Total Campaign Cost / Total Impressions) * 1,000`. For example, if you spend $250 on Facebook Ads and generate 50,000 impressions, your CPM is: `($250 / 50,000) * 1,000 = $5.00`."
    },
    {
      "question": "How do you calculate total ad spend from CPM and impressions?",
      "answer": "To calculate total ad campaign cost: `Total Cost = (Total Impressions / 1,000) * CPM`. For example, 200,000 impressions at an $8.00 CPM equals: `(200,000 / 1,000) * $8.00 = $1,600.00`."
    },
    {
      "question": "What is the difference between CPM, CPC, and CPA?",
      "answer": "CPM (Cost Per Mille) charges per 1,000 views, regardless of clicks. CPC (Cost Per Click) charges only when a user actively clicks your ad. CPA (Cost Per Acquisition / Action) charges only when a user completes a specific conversion action (such as a purchase, app install, or lead submission)."
    },
    {
      "question": "What is considered a 'good' CPM in 2026?",
      "answer": "A 'good' CPM depends on platform and audience targeting. For broad brand awareness on TikTok or Google Display Network, CPMs between $2.00 and $6.00 are typical. For high-intent B2B targeting on LinkedIn, CPMs of $30.00 to $75.00 are standard because the professional audience value is significantly higher."
    },
    {
      "question": "How can I lower my advertising CPM?",
      "answer": "To lower your CPM: (1) Improve your ad creative's Click-Through Rate (CTR) and engagement rate to increase your platform Ad Quality Score; (2) Broaden tight geographic or demographic audience restrictions; (3) Test video creatives vs static banners; (4) Avoid bidding during high-competition holiday periods (Q4 Black Friday)."
    }
  ],
  "seoTitle": "CPM Calculator — Cost Per Mille Online Advertising Formula",
  "seoHeading": "Calculate Ad Campaign CPM, Total Spend & Impressions",
  "seoIntro": "Measure your paid advertising efficiency with precision. Our free CPM Calculator solves for Cost Per Mille, total campaign budget, and required impressions across Google Ads, Meta, TikTok, YouTube, and LinkedIn.",
  "seoBody": "\n<h3>2026 Average CPM Benchmarks by Advertising Platform</h3>\n<p>Advertising costs fluctuate based on platform user demographics, intent, and bidding competition. Below are current industry median CPM averages for standard US/European traffic:</p>\n\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Ad Platform</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Average CPM Range</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Best Use Case</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Audience Intent</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Google Display Network</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$1.50 &ndash; $4.50</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Broad remarketing &amp; banner reach</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Low &ndash; Passive Browsing</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>TikTok Ads</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$3.00 &ndash; $7.50</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Viral short-form video &amp; Gen-Z e-commerce</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Medium &ndash; Discovery</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Meta Ads (FB &amp; IG)</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$7.00 &ndash; $15.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Direct response e-commerce &amp; lead gen</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Medium-High &ndash; Interest</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>YouTube In-Stream Video</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$8.00 &ndash; $18.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Video branding &amp; mid-funnel education</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">High &ndash; Engaged Viewers</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>LinkedIn Sponsored Content</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$28.00 &ndash; $65.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">B2B SaaS, enterprise deals, executive hiring</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Very High &ndash; Professional B2B</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>The 3 CPM Mathematical Formulas</h3>\n<ul>\n  <li><strong>Calculate CPM:</strong> <code>CPM = (Cost / Impressions) &times; 1,000</code></li>\n  <li><strong>Calculate Total Cost:</strong> <code>Cost = (Impressions / 1,000) &times; CPM</code></li>\n  <li><strong>Calculate Required Impressions:</strong> <code>Impressions = (Cost / CPM) &times; 1,000</code></li>\n</ul>\n\n<h3>Related Marketing &amp; Business Tools</h3>\n<ul>\n  <li><a href=\"/tools/business/rpm-calculator\">RPM Calculator</a> — Calculate net publisher earnings per thousand impressions.</li>\n  <li><a href=\"/tools/business/roi-calculator\">ROI Calculator</a> — Evaluate total return on ad spend (ROAS) and profit margins.</li>\n  <li><a href=\"/tools/utility/utm-builder\">UTM Campaign Builder</a> — Track specific ad creatives and campaign attribution in GA4.</li>\n  <li><a href=\"/tools/business/youtube-earnings-calculator\">YouTube Earnings Calculator</a> — Estimate channel ad revenue based on view metrics.</li>\n</ul>\n"
};

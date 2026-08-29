import { ToolItem } from "../../types";

export const toolDetails: ToolItem = {
  "id": "biz-yt-calc",
  "slug": "youtube-earnings-calculator",
  "category": "business",
  "categoryName": "Business Tools",
  "title": "YouTube Earnings Calculator — Estimate Video & Channel Revenue",
  "shortDesc": "Estimate your YouTube channel revenue based on daily views, video length, niche RPM benchmarks, and YouTube Partner Program (YPP) ad splits.",
  "metaDesc": "Free YouTube earnings calculator. Estimate your monthly and yearly ad revenue based on daily views, audience country, and niche RPM benchmarks ($1.50 to $25+).",
  "instructions": [
    "Enter or slide your estimated Daily Video Views count (e.g. 5,000 to 1,000,000+).",
    "Select your channel's content niche or enter an Estimated RPM (Revenue Per Mille) between $1.00 and $30.00.",
    "View your projected Daily, Monthly, and Annual earnings calculated in real-time.",
    "Compare RPM rates across long-form videos (8+ mins with mid-rolls) vs short-form YouTube Shorts."
  ],
  "features": [
    "Dynamic revenue modeling for both long-form videos and YouTube Shorts.",
    "Curated 2026 RPM benchmarks across 10 major content niches (Personal Finance, Tech, Gaming, Lifestyle, Education).",
    "Simultaneous projection of daily, monthly, and yearly creator earnings.",
    "Accounts for YouTube's standard 55% creator revenue share on long-form ads.",
    "100% private: no channel credentials, views, or financial details are sent to external servers."
  ],
  "componentName": "BusinessCalculators",
  "faqs": [
    {
      "question": "What is the difference between CPM and RPM on YouTube?",
      "answer": "CPM (Cost Per Mille) is the gross price advertisers pay per 1,000 ad impressions before YouTube takes its cut. RPM (Revenue Per Mille) is what the creator actually earns per 1,000 total video views after YouTube takes its 45% platform fee, including ad revenue, channel memberships, Super Chats, and YouTube Premium revenue."
    },
    {
      "question": "What is the formula for calculating YouTube earnings?",
      "answer": "The formula to calculate estimated YouTube earnings is: `Estimated Revenue = (Total Video Views / 1,000) * RPM`. For example, if a video receives 100,000 views in the personal finance niche with an average RPM of $12.00: `(100,000 / 1,000) * $12.00 = $1,200.00`."
    },
    {
      "question": "Why does RPM vary so drastically across different niches?",
      "answer": "RPM depends on advertiser competition and audience purchasing power. High-ticket niches like Personal Finance, SaaS software, Real Estate, and Business attract insurance companies, banks, and enterprise software advertisers bidding $20+ CPMs. In contrast, Gaming and Entertainment content targets broader, younger audiences where CPMs typically range from $1.50 to $4.00."
    },
    {
      "question": "How much do YouTube Shorts pay compared to long-form videos?",
      "answer": "YouTube Shorts monetize through a pooled revenue sharing model, resulting in significantly lower RPMs — typically $0.03 to $0.09 per 1,000 views. A Short with 1,000,000 views typically earns $30 to $90 from ad revenue alone, whereas a long-form video with 1,000,000 views can earn $3,000 to $15,000+ depending on the niche."
    },
    {
      "question": "What are the eligibility requirements for the YouTube Partner Program (YPP)?",
      "answer": "To monetize with ad revenue on YouTube, you need: 1,000 subscribers AND either 4,000 valid public watch hours in the last 12 months OR 10 million valid public Shorts views in the last 90 days, along with an active linked Google AdSense account."
    },
    {
      "question": "How does video length affect YouTube RPM?",
      "answer": "Videos longer than 8 minutes are eligible for mid-roll ads (ads placed during the video). Videos with 2–3 strategically placed mid-rolls can generate 2x to 3x higher RPMs than 3-minute videos with only pre-roll ads."
    }
  ],
  "seoTitle": "YouTube Earnings Calculator — Estimate Video & Channel Revenue",
  "seoHeading": "Calculate Estimated YouTube Ad Revenue & Channel RPM",
  "seoIntro": "Planning your creator business model? Calculate realistic YouTube ad income based on view volume, viewer geography, video duration, and niche RPM benchmarks.",
  "seoBody": "\n<h3>2026 YouTube RPM Benchmarks by Content Niche</h3>\n<p>Your YouTube revenue is heavily determined by your niche and audience demographics. Below are current industry RPM averages (earnings per 1,000 views after YouTube's 45% revenue split) for creators with predominantly US/UK/CA/AU audiences:</p>\n\n<table style=\"width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.925rem;\">\n  <thead>\n    <tr style=\"background:var(--bg-primary);text-align:left;\">\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Content Niche</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Typical RPM Range</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Primary High-Paying Advertisers</th>\n      <th style=\"padding:10px 12px;border:1px solid var(--border-color);\">Est. Earnings per 100k Views</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Personal Finance &amp; Crypto</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$12.00 &ndash; $28.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Credit cards, brokerages, trading apps, insurance</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$1,200 &ndash; $2,800</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Software &amp; Web Development</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$8.00 &ndash; $18.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Cloud hosting, developer tools, coding bootcamps</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$800 &ndash; $1,800</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Digital Marketing &amp; E-Commerce</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$7.00 &ndash; $16.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">SaaS platforms, CRM software, email services</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$700 &ndash; $1,600</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Tech Reviews &amp; Hardware</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$4.50 &ndash; $9.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Consumer electronics, accessories, gaming hardware</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$450 &ndash; $900</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Health, Fitness &amp; Nutrition</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$3.50 &ndash; $8.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Supplements, fitness apps, sportswear brands</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$350 &ndash; $800</td>\n    </tr>\n    <tr>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\"><strong>Gaming &amp; Entertainment</strong></td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$1.50 &ndash; $4.00</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">Game publishers, energy drinks, apparel</td>\n      <td style=\"padding:10px 12px;border:1px solid var(--border-color);\">$150 &ndash; $400</td>\n    </tr>\n  </tbody>\n</table>\n\n<h3>4 Proven Ways to Increase Your YouTube RPM</h3>\n<ul>\n  <li><strong>Target 8+ Minute Video Durations:</strong> Videos exceeding 8 minutes allow manual mid-roll ad placement at natural pauses, multiplying ad impressions per viewer.</li>\n  <li><strong>Attract High-Tier Geographic Audiences:</strong> Views from Tier 1 economies (USA, UK, Canada, Australia, Germany) yield 5x to 10x higher CPMs than regions with lower advertiser demand.</li>\n  <li><strong>Focus on High-Intent Commercial Search Topics:</strong> Videos solving commercial problems (e.g. &quot;Best Web Hosting 2026&quot; or &quot;Tax Deductions for Creators&quot;) trigger high-CPC search ads.</li>\n  <li><strong>Optimize Viewer Retention &amp; Session Duration:</strong> Higher average percentage viewed (APV) signals to YouTube that viewers will watch through subsequent mid-roll ad breaks.</li>\n</ul>\n\n<h3>Related Business &amp; Creator Calculators</h3>\n<ul>\n  <li><a href=\"/tools/business/cpm-calculator\">CPM Calculator</a> — Calculate advertiser ad spend and cost per 1,000 impressions.</li>\n  <li><a href=\"/tools/business/rpm-calculator\">RPM Calculator</a> — Calculate net creator revenue after platform revenue splits.</li>\n  <li><a href=\"/tools/business/roi-calculator\">ROI Calculator</a> — Measure return on investment for advertising campaigns and sponsorship deals.</li>\n  <li><a href=\"/tools/creator/youtube-tag-extractor\">YouTube Tag Extractor</a> — Optimize your video SEO tags to increase organic search traffic.</li>\n</ul>\n"
};

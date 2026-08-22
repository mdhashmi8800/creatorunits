import { toolsIndex } from "../src/data/tools-index";
import { categories, getToolBySlug } from "../src/data/tools";
import { articlesIndex } from "../src/data/articles-index";
import { getArticleBySlug } from "../src/data/articles";
import sitemap from "../src/app/sitemap";
import robots from "../src/app/robots";

async function runSeoValidation() {
  console.log("==================================================");
  console.log("🔍 CREATORUNITS.COM TECHNICAL SEO & AUDIT VALIDATOR");
  console.log("==================================================\n");

  let errors: string[] = [];
  let warnings: string[] = [];

  // 1. Validate Sitemap Generation
  console.log("1. Validating XML Sitemap Generation...");
  const sitemapEntries = await sitemap();
  console.log(`   Total sitemap entries generated: ${sitemapEntries.length}`);

  const expectedCoreCount = 4;
  const expectedCatCount = Object.keys(categories).length;
  const expectedToolCount = toolsIndex.length;
  const expectedArticleCount = articlesIndex.length;
  const totalExpected = expectedCoreCount + expectedCatCount + expectedToolCount + expectedArticleCount;

  if (sitemapEntries.length !== totalExpected) {
    errors.push(`Sitemap URL count mismatch: expected ${totalExpected} (4 core + ${expectedCatCount} cats + ${expectedToolCount} tools + ${expectedArticleCount} articles), got ${sitemapEntries.length}`);
  } else {
    console.log(`   ✅ Sitemap count exact match: ${totalExpected} URLs.`);
  }

  // Check URL formatting and domain canonicalization
  const baseUrl = "https://www.creatorunits.com";
  const urlSet = new Set<string>();

  for (const entry of sitemapEntries) {
    if (!entry.url.startsWith(baseUrl)) {
      errors.push(`Non-canonical domain in sitemap URL: ${entry.url}`);
    }
    if (entry.url.length > baseUrl.length && entry.url.endsWith("/")) {
      errors.push(`Trailing slash detected on subpath URL: ${entry.url}`);
    }
    if (urlSet.has(entry.url)) {
      errors.push(`Duplicate URL in sitemap: ${entry.url}`);
    }
    urlSet.add(entry.url);

    if (entry.priority === undefined || entry.priority < 0 || entry.priority > 1.0) {
      errors.push(`Invalid priority on sitemap URL: ${entry.url} (${entry.priority})`);
    }
    if (!entry.lastModified) {
      warnings.push(`Missing lastModified on sitemap URL: ${entry.url}`);
    }
  }

  console.log(`   ✅ Verified all ${urlSet.size} unique canonical sitemap URLs.`);

  // 2. Validate Robots.txt
  console.log("\n2. Validating Robots.txt Configuration...");
  const robotsConfig = robots();
  const rule = Array.isArray(robotsConfig.rules) ? robotsConfig.rules[0] : robotsConfig.rules;

  if (!rule) {
    errors.push("Robots.txt has no rules defined.");
  } else {
    const disallowList = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
    if (disallowList.includes("/_next/")) {
      errors.push("Robots.txt is still disallowing '/_next/' (blocks Googlebot asset rendering).");
    } else {
      console.log("   ✅ '/_next/' is NOT disallowed (Googlebot asset rendering allowed).");
    }
    if (!disallowList.includes("/api/")) {
      warnings.push("Robots.txt does not disallow '/api/'.");
    } else {
      console.log("   ✅ '/api/' is properly disallowed.");
    }
  }

  if (robotsConfig.sitemap !== "https://www.creatorunits.com/sitemap.xml") {
    errors.push(`Robots.txt sitemap pointer mismatch: expected 'https://www.creatorunits.com/sitemap.xml', got '${robotsConfig.sitemap}'`);
  } else {
    console.log("   ✅ Robots.txt sitemap pointer verified.");
  }

  // 3. Validate All 103 Tools & Details
  console.log("\n3. Validating All 103 Tool Detail Files...");
  let loadedTools = 0;
  for (const tool of toolsIndex) {
    const details = await getToolBySlug(tool.slug);
    if (!details) {
      errors.push(`Failed to dynamically load tool detail for slug: ${tool.slug}`);
      continue;
    }
    loadedTools++;
    if (!details.title || !details.metaDesc || !details.seoTitle) {
      errors.push(`Tool ${tool.slug} is missing title, metaDesc, or seoTitle`);
    }
    if (details.category !== tool.category) {
      errors.push(`Category mismatch for tool ${tool.slug}: index has '${tool.category}', details has '${details.category}'`);
    }
  }
  console.log(`   ✅ Successfully validated and loaded all ${loadedTools} tool modules.`);

  // 4. Validate All 54 Articles & Details
  console.log("\n4. Validating All 54 Article Detail Files...");
  let loadedArticles = 0;
  for (const art of articlesIndex) {
    const details = await getArticleBySlug(art.slug);
    if (!details) {
      errors.push(`Failed to dynamically load article detail for slug: ${art.slug}`);
      continue;
    }
    loadedArticles++;
    if (!details.title || !details.metaDesc || !details.content) {
      errors.push(`Article ${art.slug} is missing title, metaDesc, or content`);
    }
    if (details.content.length < 500) {
      warnings.push(`Article ${art.slug} has short content (${details.content.length} chars)`);
    }
  }
  console.log(`   ✅ Successfully validated and loaded all ${loadedArticles} article modules.`);

  // 5. Check Priority Articles (e.g. how-to-create-qr-code-free)
  console.log("\n5. Validating High-Priority Pages...");
  const qrGuide = await getArticleBySlug("how-to-create-qr-code-free");
  if (!qrGuide) {
    errors.push("Priority article 'how-to-create-qr-code-free' failed to load!");
  } else {
    console.log(`   ✅ QR Code Guide loaded: "${qrGuide.title}" (${qrGuide.content.length} chars, ${qrGuide.faqs?.length} FAQs)`);
  }

  const utmTool = await getToolBySlug("utm-builder");
  if (!utmTool) {
    errors.push("Priority tool 'utm-builder' failed to load!");
  } else {
    console.log(`   ✅ UTM Builder loaded: "${utmTool.title}" (${utmTool.faqs?.length} FAQs)`);
  }

  const sitemapTool = await getToolBySlug("xml-sitemap-generator");
  if (!sitemapTool) {
    errors.push("Priority tool 'xml-sitemap-generator' failed to load!");
  } else {
    console.log(`   ✅ XML Sitemap Generator loaded: "${sitemapTool.title}" (${sitemapTool.faqs?.length} FAQs)`);
  }

  const usernameTool = await getToolBySlug("username-generator");
  if (!usernameTool) {
    errors.push("Priority tool 'username-generator' failed to load!");
  } else {
    console.log(`   ✅ Username Generator loaded: "${usernameTool.title}" (${usernameTool.faqs?.length} FAQs)`);
  }

  // Final Summary
  console.log("\n==================================================");
  console.log("📊 VALIDATION SUMMARY");
  console.log("==================================================");
  console.log(`Errors:   ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (warnings.length > 0) {
    console.log("\nWarnings:");
    warnings.forEach((w) => console.log(`  ⚠️  ${w}`));
  }

  if (errors.length > 0) {
    console.log("\nErrors:");
    errors.forEach((e) => console.log(`  ❌ ${e}`));
    process.exit(1);
  } else {
    console.log("\n✨ ALL SEO, ROUTING, SITEMAP & METADATA CHECKS PASSED PERFECTLY! ✨\n");
  }
}

runSeoValidation().catch((err) => {
  console.error("Validation script failed with error:", err);
  process.exit(1);
});

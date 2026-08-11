import sitemap from "@/app/sitemap";
import fs from "fs";
import path from "path";
import os from "os";
import crypto from "crypto";

export interface IndexNowResult {
  success: boolean;
  submittedCount: number;
  message: string;
  payload?: {
    host: string;
    key: string;
    keyLocation: string;
    urlList: string[];
  };
}

const DEFAULT_KEY = "cc09fbc986694e8c943f62edb11d0ebf";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/**
 * Log message using structured JSON formatting.
 */
function logStructured(level: "info" | "warn" | "error", event: string, message: string, extra: Record<string, any> = {}) {
  const logData = {
    level,
    event,
    message,
    timestamp: new Date().toISOString(),
    ...extra,
  };
  if (level === "error") {
    console.error(JSON.stringify(logData));
  } else if (level === "warn") {
    console.warn(JSON.stringify(logData));
  } else {
    console.log(JSON.stringify(logData));
  }
}

/**
 * Fetch helper with retries and exponential backoff for temporary server-side failures (429, 5xx)
 */
async function fetchWithRetry(
  url: string,
  options: RequestInit,
  retries = 3,
  delay = 1000
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s request timeout

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      // Retry on 429 (Too Many Requests) or 5xx (Server Errors)
      if (response.status === 429 || (response.status >= 500 && response.status < 600)) {
        if (i < retries - 1) {
          const backoff = delay * Math.pow(2, i);
          logStructured("warn", "INDEXNOW_RETRY", `Received temporary status ${response.status}. Retrying in ${backoff}ms...`, {
            attempt: i + 1,
            maxAttempts: retries,
            status: response.status,
          });
          await new Promise((resolve) => setTimeout(resolve, backoff));
          continue;
        }
      }
      return response;
    } catch (error: any) {
      const isAbort = error.name === "AbortError";
      if (i < retries - 1) {
        const backoff = delay * Math.pow(2, i);
        logStructured("warn", "INDEXNOW_RETRY_ERROR", `Request error: ${isAbort ? "Timeout (10s)" : error.message}. Retrying in ${backoff}ms...`, {
          attempt: i + 1,
          maxAttempts: retries,
          error: error.message || String(error),
        });
        await new Promise((resolve) => setTimeout(resolve, backoff));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries reached");
}

/**
 * Submit all URLs from sitemap to IndexNow API.
 */
export async function submitToIndexNow(options?: { force?: boolean }): Promise<IndexNowResult> {
  const isForce = !!options?.force;
  const siteUrl = process.env.SITE_URL || "https://www.creatorunits.com";
  const indexNowKey = process.env.INDEXNOW_KEY || DEFAULT_KEY;
  const currentCommitSha = process.env.VERCEL_GIT_COMMIT_SHA || "";

  // Normalize target hostname: enforce no www.
  let targetUrlObj: URL;
  try {
    targetUrlObj = new URL(siteUrl);
  } catch (e) {
    targetUrlObj = new URL("https://www.creatorunits.com");
  }
  
  if (targetUrlObj.hostname.startsWith("www.")) {
    targetUrlObj.hostname = targetUrlObj.hostname.substring(4);
  }
  const normalizedSiteUrl = targetUrlObj.origin;
  const host = targetUrlObj.hostname;

  logStructured("info", "INDEXNOW_SUBMISSION_START", `Starting IndexNow submission flow for host ${host}`, {
    siteUrl: normalizedSiteUrl,
    isForce,
    commitSha: currentCommitSha,
  });

  // Extract URLs from current sitemap
  let sitemapEntries;
  try {
    sitemapEntries = await sitemap();
  } catch (error: any) {
    const errMsg = `Failed to generate sitemap: ${error.message || error}`;
    logStructured("error", "INDEXNOW_SITEMAP_ERROR", errMsg, { error: error.message || String(error) });
    return { success: false, submittedCount: 0, message: errMsg };
  }

  if (!sitemapEntries || sitemapEntries.length === 0) {
    const errMsg = "Sitemap returned no URLs.";
    logStructured("warn", "INDEXNOW_EMPTY_SITEMAP", errMsg);
    return { success: false, submittedCount: 0, message: errMsg };
  }

  // Normalize sitemap URLs to enforce target host (remove www.)
  const normalizedUrls = sitemapEntries.map((entry) => {
    try {
      const urlObj = new URL(entry.url);
      urlObj.protocol = targetUrlObj.protocol;
      urlObj.host = targetUrlObj.host;
      return urlObj.toString();
    } catch (e) {
      return entry.url.replace("https://www.creatorunits.com", normalizedSiteUrl);
    }
  });

  const uniqueUrls = Array.from(new Set(normalizedUrls));

  // Compute sitemap URL set hash to check if content changed
  const sortedUrls = [...uniqueUrls].sort();
  const urlsHash = crypto.createHash("sha256").update(JSON.stringify(sortedUrls)).digest("hex");

  // Read local duplicate prevention cache from /tmp
  const CACHE_FILE = path.join(os.tmpdir(), "indexnow-last-submit.json");
  let cache: { urlsHash?: string; commitSha?: string; timestamp?: number } = {};

  try {
    if (fs.existsSync(CACHE_FILE)) {
      const cacheData = fs.readFileSync(CACHE_FILE, "utf-8");
      cache = JSON.parse(cacheData);
    }
  } catch (error: any) {
    logStructured("warn", "INDEXNOW_CACHE_READ_ERROR", "Could not read local IndexNow submission cache.", {
      error: error.message || String(error),
    });
  }

  // Evaluate duplicate criteria
  const isSameCommit = currentCommitSha && cache.commitSha === currentCommitSha;
  const isSameUrls = cache.urlsHash === urlsHash;
  const isRecent = cache.timestamp && (Date.now() - cache.timestamp < 24 * 60 * 60 * 1000); // 24 hours

  if (!isForce && (isSameCommit || (isSameUrls && isRecent))) {
    const skipReason = isSameCommit 
      ? `Commit SHA ${currentCommitSha} has already been submitted.`
      : `Sitemap URLs hash matches previous submission from ${new Date(cache.timestamp || 0).toISOString()} (<24h ago).`;
    
    logStructured("info", "INDEXNOW_SUBMISSION_SKIPPED", `Submission skipped: ${skipReason}`, {
      urlsHash,
      commitSha: currentCommitSha,
      lastSubmitted: cache.timestamp ? new Date(cache.timestamp).toISOString() : null,
      reason: isSameCommit ? "same_commit" : "same_urls_recent",
    });

    return {
      success: true,
      submittedCount: 0,
      message: `Submission skipped: ${skipReason}`,
    };
  }

  // Construct official payload
  const keyLocation = `${normalizedSiteUrl}/${indexNowKey}.txt`;
  const payload = {
    host,
    key: indexNowKey,
    keyLocation,
    urlList: uniqueUrls,
  };

  try {
    const response = await fetchWithRetry(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      // Update cache
      try {
        fs.writeFileSync(
          CACHE_FILE,
          JSON.stringify({
            urlsHash,
            commitSha: currentCommitSha,
            timestamp: Date.now(),
          }),
          "utf-8"
        );
      } catch (cacheWriteError: any) {
        logStructured("warn", "INDEXNOW_CACHE_WRITE_ERROR", "Failed to write submission details to temporary cache.", {
          error: cacheWriteError.message || String(cacheWriteError),
        });
      }

      logStructured("info", "INDEXNOW_SUBMISSION_SUCCESS", `Successfully submitted ${uniqueUrls.length} URLs to IndexNow.`, {
        host,
        urlCount: uniqueUrls.length,
        statusCode: response.status,
      });

      return {
        success: true,
        submittedCount: uniqueUrls.length,
        message: "Successfully submitted sitemap URLs to IndexNow.",
        payload,
      };
    } else {
      let responseText = "";
      try {
        responseText = await response.text();
      } catch (e) {
        // Ignored
      }

      const errMsg = `IndexNow API returned status code ${response.status}: ${responseText}`;
      logStructured("error", "INDEXNOW_SUBMISSION_FAILED", errMsg, {
        statusCode: response.status,
        response: responseText,
      });

      return {
        success: false,
        submittedCount: 0,
        message: errMsg,
        payload,
      };
    }
  } catch (error: any) {
    const errMsg = `Failed to connect to IndexNow API: ${error.message || error}`;
    logStructured("error", "INDEXNOW_SUBMISSION_CONNECTION_ERROR", errMsg, {
      error: error.message || String(error),
    });

    return {
      success: false,
      submittedCount: 0,
      message: errMsg,
      payload,
    };
  }
}

/**
 * Centralized service for interacting with the DeepSeek API.
 * Designed with security, performance, cost optimization, and resilience in mind.
 */

export interface DeepSeekOptions {
  prompt: string;
  slug: string;
  tone?: string;
  niche?: string;
  platform?: string;
  length?: string;
}

export class DeepSeekService {
  private static API_URL = "https://api.deepseek.com/chat/completions";
  private static DEFAULT_MODEL = "deepseek-chat";
  private static TIMEOUT_MS = 15000; // 15 seconds timeout
  private static MAX_RETRIES = 2; // Up to 2 retries (3 attempts total)

  /**
   * Generates AI content using the DeepSeek API.
   * @param options Configuration options for generation
   * @returns Generated string response
   */
  public static async generateContent(options: DeepSeekOptions): Promise<string> {
    const apiKey = process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
      console.error("DeepSeek API service error: DEEPSEEK_API_KEY is not configured.");
      throw new Error("AI service configuration error: API key is missing. Please contact the administrator.");
    }

    // Input sanitization and validation
    const prompt = options.prompt?.trim() || "";
    const slug = options.slug?.trim() || "ai-creator-suite";
    const tone = options.tone?.trim() || "engaging";
    const niche = options.niche?.trim() || "general";
    const platform = options.platform?.trim() || "general";

    if (!prompt) {
      throw new Error("Input validation failed: Prompt cannot be empty.");
    }

    // System prompt engineered to reduce response lengths and avoid conversational filler (Token Optimization)
    const systemPrompt = `You are a professional AI content creator for CreatorUnits.com.
Tone: ${tone}.
Niche: ${niche}.
Platform: ${platform}.
Slug/Tool Type: ${slug}.

CRITICAL: Generate copy that is concise, structured, and immediately copy-paste ready. Do NOT include conversational preambles, explanations, quotes, introduction phrases, or follow-up text. Output only the requested copy and formatting. Use clean lists, headers, or spacing where appropriate.`;

    const userPrompt = `Generate custom content for the tool: ${slug}. Input topic or prompt: "${prompt}".`;

    let attempt = 0;
    let lastError: Error | null = null;

    while (attempt <= this.MAX_RETRIES) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.TIMEOUT_MS);

      try {
        const response = await fetch(this.API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: this.DEFAULT_MODEL,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt }
            ],
            temperature: 0.7,
            max_tokens: 800, // Token budget optimization to reduce API costs
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.status === 429) {
          throw new Error("RATE_LIMIT_EXCEEDED");
        }

        if (response.status === 402) {
          throw new Error("INSUFFICIENT_BALANCE");
        }

        if (response.status === 401 || response.status === 403) {
          throw new Error("AUTHENTICATION_FAILED");
        }

        if (!response.ok) {
          throw new Error(`API_RESPONSE_ERROR_${response.status}`);
        }

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;

        if (!content) {
          throw new Error("EMPTY_RESPONSE");
        }

        return content.trim();

      } catch (error: any) {
        clearTimeout(timeoutId);
        lastError = error;

        // Determine if we should retry
        const isAbortError = error.name === "AbortError" || error.message?.includes("aborted");
        const isServerError = error.message?.startsWith("API_RESPONSE_ERROR_5") || error.message?.includes("fetch failed");
        
        const shouldRetry = (isAbortError || isServerError) && attempt < this.MAX_RETRIES;

        if (shouldRetry) {
          attempt++;
          const backoffDelay = Math.pow(2, attempt) * 1000; // 2s, 4s backoff
          console.warn(`DeepSeek API request failed (Attempt ${attempt}/${this.MAX_RETRIES + 1}). Retrying in ${backoffDelay}ms... Error: ${error.message}`);
          await new Promise((resolve) => setTimeout(resolve, backoffDelay));
          continue;
        }

        break;
      }
    }

    // Map errors to user-friendly messages without exposing API internals or keys
    if (lastError) {
      console.error("DeepSeek API Service original error:", lastError);
      if (lastError.name === "AbortError" || lastError.message?.includes("aborted")) {
        throw new Error("The AI service request timed out. Please try again.");
      }
      if (lastError.message === "RATE_LIMIT_EXCEEDED") {
        throw new Error("The AI service is currently busy handling other requests. Please wait a moment and try again.");
      }
      if (lastError.message === "INSUFFICIENT_BALANCE") {
        throw new Error("The AI service is currently out of credits. Please contact the administrator.");
      }
      if (lastError.message === "AUTHENTICATION_FAILED") {
        throw new Error("AI service authentication error. Please contact the site administrator.");
      }
      if (lastError.message === "EMPTY_RESPONSE") {
        throw new Error("The AI service returned an empty response. Please refine your prompt and try again.");
      }
    }

    throw new Error("The AI generation service is temporarily unavailable. Please try again later.");
  }
}

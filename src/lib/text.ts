/**
 * Reusable text statistics extraction helper.
 * Computes characters, words, sentences, paragraphs, reading speed, and speaking speed.
 */

export interface TextStats {
  charsWithSpaces: number;
  charsNoSpaces: number;
  wordCount: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
  speakingTime: number;
}

export function calculateTextStats(text: string): TextStats {
  const charsWithSpaces = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;

  // Split by spaces, filter empty values
  const wordsList = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = wordsList.length;

  // Sentences separated by . ! ?
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;

  // Paragraphs separated by linebreaks
  const paragraphs = text.split(/\n+/).filter((p) => p.trim().length > 0).length;

  // Speed calculators
  const readingTime = Math.ceil(wordCount / 200); // Average 200 WPM
  const speakingTime = Math.ceil(wordCount / 130); // Average 130 WPM

  return {
    charsWithSpaces,
    charsNoSpaces,
    wordCount,
    sentences,
    paragraphs,
    readingTime,
    speakingTime,
  };
}

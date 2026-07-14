/**
 * Shared WhatsApp link building and formatting utilities.
 */

/**
 * Sanitizes phone numbers by removing non-digit characters.
 */
export function cleanPhoneNumber(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Builds standard WhatsApp click-to-chat links (wa.me) with pre-filled message templates.
 */
export function buildWhatsAppLink(phone: string, message: string): string {
  const cleaned = cleanPhoneNumber(phone);
  if (!cleaned) return "";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleaned}?text=${encoded}`;
}

/**
 * Single source of truth for every contact detail used across the site —
 * WhatsApp number, email, phone, and social links. Change a value here
 * once and it updates everywhere it's referenced (header, hero, footer,
 * service cards, contact page, inquiry form, etc.).
 */

// Digits only, no +, no spaces, no dashes — required format for wa.me links.
export const WHATSAPP_NUMBER = "94719431969";

// Human-readable, formatted version for display (e.g. in the Contact page).
export const PHONE_DISPLAY = "+94 71 943 1969";

export const EMAIL = "hello@hashstudio.com";

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  dribbble: "https://dribbble.com",
  behance: "https://behance.net",
};

/** Builds a wa.me link, optionally with a pre-filled message. */
export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
export const WHATSAPP_NUMBER = "94719431969"; // digits only — no "+" for wa.me links

// Human-readable, formatted version for display (e.g. in the Contact page).
export const PHONE_DISPLAY = "+94 71 943 1969";

export const EMAIL = "harshabuddika86@gmail.com";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/profile.php?id=61555668831424",
  // instagram: "https://instagram.com",
  // dribbble: "https://dribbble.com",
  // behance: "https://behance.net",
};

/** Builds a wa.me link, optionally with a pre-filled message. */
export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
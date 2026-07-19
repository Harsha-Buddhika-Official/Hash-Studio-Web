import { buildWhatsAppLink } from "./siteConfig";

export const heroContent = {
  headline: [
    { text: "Creative Designs", accent: false },
    { text: "That Make Your", accent: false },
    { text: "Brand Stand Out.", accent: true },
  ],
  description:
    "We create impactful visual experiences through logo design, brand identity, social media graphics, packaging, and digital designs that help businesses build a memorable presence.",
  primaryCta: { label: "View Portfolio", href: "/portfolio" },
  secondaryCta: { label: "Chat on WhatsApp", href: buildWhatsAppLink() },
};
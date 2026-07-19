import { buildWhatsAppLink, PHONE_DISPLAY, EMAIL, SOCIAL_LINKS } from "./siteConfig";

export const contactHero = {
  headline: [
    { text: "Let's build something", accent: false },
    { text: "extraordinary.", accent: true },
  ],
  description:
    "Whether you have a fully-formed idea or just a spark of inspiration, we're here to help you navigate the digital landscape. Let's start the conversation.",
};

export const kickoffCard = {
  title: "Instant Project Kickoff",
  description:
    "Skip the waiting game. Chat with our creative leads directly on WhatsApp for an immediate response.",
  cta: { label: "Chat on WhatsApp", href: buildWhatsAppLink() },
};

export const contactChannels = [
  { id: "email", label: "Email Us", value: EMAIL, href: `mailto:${EMAIL}` },
  { id: "phone", label: "Call Us", value: PHONE_DISPLAY, href: `tel:+${PHONE_DISPLAY.replace(/\D/g, "")}` },
];

export const socialLinks = [
  { id: "facebook", label: "Facebook", href: SOCIAL_LINKS.facebook },
  { id: "instagram", label: "Instagram", href: SOCIAL_LINKS.instagram },
  { id: "behance", label: "Behance", href: SOCIAL_LINKS.behance },
];

export const projectTypes = [
  "Brand Identity",
  "Logo Design",
  "Social Media",
  "Packaging Design",
  "UI/UX Design",
  "Vehicle Branding",
  "Something Else",
];

export const inquiryFormCopy = {
  heading: "Send an Inquiry",
  submitLabel: "Send Inquiry",
};
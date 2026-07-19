import { buildWhatsAppLink, PHONE_DISPLAY, EMAIL, SOCIAL_LINKS } from "./siteConfig";

export const contactHero = {
  headline: [
    { text: "Let's create something", accent: false },
    { text: "unforgettable.", accent: true },
  ],
  description:
    "Have a creative idea in mind or need help building your brand identity? We're here to transform your vision into impactful designs that connect with your audience.",
};

export const kickoffCard = {
  title: "Start Your Creative Project",
  description:
    "Connect directly with our creative team through WhatsApp and discuss your design ideas, requirements, and vision.",
  cta: { label: "Chat on WhatsApp", href: buildWhatsAppLink() },
};

export const contactChannels = [
  { id: "email", label: "Email Us", value: EMAIL, href: `mailto:${EMAIL}` },
  { id: "phone", label: "Call Us", value: PHONE_DISPLAY, href: `tel:+${PHONE_DISPLAY.replace(/\D/g, "")}` },
];

export const socialLinks = [
  { id: "facebook", label: "Facebook", href: SOCIAL_LINKS.facebook },
  // { id: "instagram", label: "Instagram", href: SOCIAL_LINKS.instagram },
  // { id: "behance", label: "Behance", href: SOCIAL_LINKS.behance },
];

export const projectTypes = [
  "Brand Identity",
  "Logo Design",
  "Social Media Design",
  "Packaging Design",
  "Flyer & Poster Design",
  "UI/UX Design",
  "T-Shirt Design",
  "Something Else",
];

export const inquiryFormCopy = {
  heading: "Start Your Design Journey",
  submitLabel: "Send Inquiry",
};
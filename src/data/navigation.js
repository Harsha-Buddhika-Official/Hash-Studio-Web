import { buildWhatsAppLink, SOCIAL_LINKS } from "./siteConfig";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram },
  { label: "Dribbble", href: SOCIAL_LINKS.dribbble },
  { label: "Behance", href: SOCIAL_LINKS.behance },
  { label: "WhatsApp", href: buildWhatsAppLink() },
];
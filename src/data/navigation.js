import { buildWhatsAppLink, SOCIAL_LINKS } from "./siteConfig";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = [
  { label: "Facebook", href: SOCIAL_LINKS.facebook },
  { label: "WhatsApp", href: buildWhatsAppLink() },
];
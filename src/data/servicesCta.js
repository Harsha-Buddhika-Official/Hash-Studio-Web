import { buildWhatsAppLink } from "./siteConfig";

export const servicesCta = {
  heading: "Ready to bring your ideas to life?",
  description:
    "Let's discuss your brand, design needs, and creative goals. Our team is ready to help you create visuals that make a lasting impression.",
  primaryCta: { label: "Start WhatsApp Chat", href: buildWhatsAppLink() },
  secondaryCta: { label: "View Portfolio", href: "/portfolio" },
};
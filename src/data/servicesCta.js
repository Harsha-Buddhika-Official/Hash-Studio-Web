import { buildWhatsAppLink } from "./siteConfig";

export const servicesCta = {
  heading: "Ready to start your project?",
  description:
    "Let's discuss how we can transform your vision into a stunning reality. Our team is ready to jump into the details.",
  primaryCta: { label: "Start WhatsApp Chat", href: buildWhatsAppLink() },
  secondaryCta: { label: "View Portfolio", href: "/portfolio" },
};
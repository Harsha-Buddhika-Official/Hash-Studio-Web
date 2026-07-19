import { buildWhatsAppLink } from "./siteConfig";

export const aboutCta = {
  heading: "Let's create something unforgettable.",
  description:
    "From logos and brand identities to social media designs and digital experiences, we help businesses transform ideas into powerful visual stories that connect with their audience.",
  primaryCta: { label: "Start a Project", href: buildWhatsAppLink() },
  secondaryCta: { label: "View Portfolio", href: "/portfolio" },
};
import { buildWhatsAppLink } from "./siteConfig";

export const aboutCta = {
  heading: "Let's build the future together.",
  description:
    "Whether you're a startup or an established enterprise, we're ready to take your digital experience to the next level.",
  primaryCta: { label: "Start a Project", href: buildWhatsAppLink() },
  secondaryCta: { label: "View Portfolio", href: "/portfolio" },
};
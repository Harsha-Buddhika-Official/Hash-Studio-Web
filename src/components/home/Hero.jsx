import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "../common/Button";
import HeroVisual from "./HeroVisual";
import { heroContent } from "../../data/hero";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.08] text-ink-900">
            {heroContent.headline.map((line) => (
              <span
                key={line.text}
                className={`block ${line.accent ? "text-brand-500" : ""}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ink-600 max-w-md leading-relaxed">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={heroContent.primaryCta.href} size="lg">
              {heroContent.primaryCta.label}
            </Button>
            <Button
              href={heroContent.secondaryCta.href}
              variant="secondary"
              size="lg"
              icon={WhatsAppIcon}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
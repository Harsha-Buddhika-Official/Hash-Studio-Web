import Button from "../common/Button";
import { aboutCta } from "../../data/aboutCta";

export default function AboutCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24">
      <div
        className="rounded-3xl bg-ink-900 px-6 sm:px-12 py-16 sm:py-20 text-center"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
          {aboutCta.heading}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/70 max-w-lg mx-auto leading-relaxed">
          {aboutCta.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={aboutCta.primaryCta.href} size="lg">
            {aboutCta.primaryCta.label}
          </Button>
          <Button href={aboutCta.secondaryCta.href} variant="outlineDark" size="lg">
            {aboutCta.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "../common/Button";
import { servicesCta } from "../../data/servicesCta";

export default function ServicesCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24">
      <div
        className="relative overflow-hidden rounded-3xl bg-ink-50 px-6 sm:px-12 py-16 sm:py-20 text-center"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(14,20,32,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <h2 className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-tight max-w-2xl mx-auto leading-tight">
          {servicesCta.heading}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-ink-600 max-w-lg mx-auto leading-relaxed">
          {servicesCta.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href={servicesCta.primaryCta.href} size="lg" icon={WhatsAppIcon}>
            {servicesCta.primaryCta.label}
          </Button>
          <Button href={servicesCta.secondaryCta.href} variant="secondary" size="lg">
            {servicesCta.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
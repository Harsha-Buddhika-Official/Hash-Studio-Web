import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "../common/Button";
import { ctaContent } from "../../data/cta";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-16 sm:pb-24">
      <div
        className="rounded-3xl px-6 sm:px-12 py-14 sm:py-20 text-center"
        style={{
          background:
            "linear-gradient(115deg, #0ea1b3 0%, #6f9a5a 50%, #e2a23d 100%)",
        }}
      >
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
          {ctaContent.heading}
        </h2>
        <p className="mt-4 text-sm sm:text-base text-white/85 max-w-md mx-auto">
          {ctaContent.description}
        </p>

        <div className="mt-8">
          <Button href={ctaContent.cta.href} variant="inverse" size="lg" icon={WhatsAppIcon}>
            {ctaContent.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
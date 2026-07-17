import Button from "../common/Button";
import { portfolioCta } from "../../data/portfolio";

export default function PortfolioCTA() {
  return (
    <section className="bg-ink-50 py-16 sm:py-20 mt-16 sm:mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center">
        <p className="text-lg font-semibold text-ink-800 mb-6">
          {portfolioCta.heading}
        </p>
        <Button href={portfolioCta.cta.href} size="lg">
          {portfolioCta.cta.label}
        </Button>
      </div>
    </section>
  );
}
import TrustCard from "./TrustCard";
import { trustHeading, trustItems } from "../../data/trust";

export default function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight text-center mb-10 sm:mb-14">
        {trustHeading}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-6">
        {trustItems.map((item) => (
          <TrustCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
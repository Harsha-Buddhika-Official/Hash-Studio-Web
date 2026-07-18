import ValueCard from "./ValueCard";
import { valuesIntro, values } from "../../data/values";

export default function ValuesSection() {
  return (
    <section className="bg-ink-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight">
            {valuesIntro.heading}
          </h2>
          <p className="mt-4 text-ink-600 leading-relaxed">{valuesIntro.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
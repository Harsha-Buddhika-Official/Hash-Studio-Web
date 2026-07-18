import { servicesHero } from "../../data/services";

export default function ServicesHero() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 sm:pt-16 pb-6">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-bold tracking-widest text-brand-600 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {servicesHero.eyebrow}
        </span>

        <h1 className="mt-5 text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold tracking-tight leading-[1.08] text-ink-900">
          {servicesHero.headline.map((line) => (
            <span
              key={line.text}
              className={`block ${line.accent ? "text-brand-500" : ""}`}
            >
              {line.text}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-ink-600 leading-relaxed">
          {servicesHero.description}
        </p>
      </div>
    </section>
  );
}
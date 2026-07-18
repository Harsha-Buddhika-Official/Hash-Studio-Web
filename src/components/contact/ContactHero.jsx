import { contactHero } from "../../data/contact";

export default function ContactHero() {
  return (
    <section className="mx-auto max-w-4xl px-5 sm:px-8 pt-14 sm:pt-20 pb-10 sm:pb-14">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-ink-900">
        {contactHero.headline.map((line) => (
          <span
            key={line.text}
            className={`block ${
              line.accent ? "text-chip-orange-fg italic" : ""
            }`}
          >
            {line.text}
            {line.accent && <span className="text-ink-900 not-italic">.</span>}
          </span>
        ))}
      </h1>

      <p className="mt-6 text-base sm:text-lg text-ink-600 max-w-xl leading-relaxed">
        {contactHero.description}
      </p>
    </section>
  );
}
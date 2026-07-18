import BlueprintStep from "./BlueprintStep";
import { blueprintIntro, blueprintSteps } from "../../data/blueprint";

export default function BlueprintTimeline() {
  return (
    <section className="mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs font-bold tracking-widest text-chip-orange-fg uppercase mb-3">
          {blueprintIntro.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight">
          {blueprintIntro.heading}
        </h2>
      </div>

      <div className="relative">
        {/* Connecting line: left-aligned under icons on mobile, centered on desktop */}
        <div className="absolute left-[22px] sm:left-1/2 top-0 bottom-0 w-px bg-ink-200 sm:-translate-x-1/2" />

        {blueprintSteps.map((step) => (
          <BlueprintStep key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}
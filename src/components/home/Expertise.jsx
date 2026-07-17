import ExpertiseCard from "./ExpertiseCard";
import { expertise } from "../../data/expertise";

export default function Expertise() {
  return (
    <section className="bg-ink-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs font-bold tracking-widest text-brand-500 uppercase mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight leading-tight">
            Tailored Solutions for Digital Dominance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {expertise.map((service) => (
            <ExpertiseCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
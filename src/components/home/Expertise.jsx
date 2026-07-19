import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpertiseCard from "./ExpertiseCard";
import { services } from "../../data/services";

const INITIAL_VISIBLE_COUNT = 6;

export default function Expertise() {
  const [showAll, setShowAll] = useState(false);

  const hasMore = services.length > INITIAL_VISIBLE_COUNT;
  const visibleServices = showAll ? services : services.slice(0, INITIAL_VISIBLE_COUNT);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {visibleServices.map((service, index) => (
            <div
              key={service.id}
              className={index >= INITIAL_VISIBLE_COUNT ? "animate-fade-in-up" : ""}
              style={
                index >= INITIAL_VISIBLE_COUNT
                  ? { animationDelay: `${(index - INITIAL_VISIBLE_COUNT) * 60}ms` }
                  : undefined
              }
            >
              <ExpertiseCard service={service} />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-800 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              {showAll ? "See Less" : `See More (${services.length - INITIAL_VISIBLE_COUNT})`}
              <KeyboardArrowDownIcon
                fontSize="small"
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
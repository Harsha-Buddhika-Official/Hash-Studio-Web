import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TestimonialCard from "./TestimonialCard";
import { testimonialsIntro, testimonials } from "../../data/testimonials";

const INITIAL_VISIBLE_COUNT = 2;

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const hasMore = testimonials.length > INITIAL_VISIBLE_COUNT;
  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight leading-tight">
            {testimonialsIntro.heading}
          </h2>
          <p className="mt-4 text-ink-600 leading-relaxed max-w-sm">
            {testimonialsIntro.description}
          </p>

          <div className="mt-8 flex items-center gap-4 border-l-4 border-brand-500 pl-4">
            <div>
              <p className="text-2xl font-extrabold text-ink-900">
                {testimonialsIntro.rating.score}
              </p>
              <p className="text-xs text-ink-400">
                {testimonialsIntro.rating.caption}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-5">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={index >= INITIAL_VISIBLE_COUNT ? "animate-fade-in-up" : ""}
                style={
                  index >= INITIAL_VISIBLE_COUNT
                    ? { animationDelay: `${(index - INITIAL_VISIBLE_COUNT) * 80}ms` }
                    : undefined
                }
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center md:justify-start">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-800 hover:border-brand-500 hover:text-brand-600 transition-colors"
              >
                {showAll ? "See Less" : `See More Reviews (${testimonials.length - INITIAL_VISIBLE_COUNT})`}
                <KeyboardArrowDownIcon
                  fontSize="small"
                  className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
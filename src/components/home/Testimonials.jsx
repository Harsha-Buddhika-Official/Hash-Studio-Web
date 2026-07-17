import TestimonialCard from "./TestimonialCard";
import { testimonialsIntro, testimonials } from "../../data/testimonials";

export default function Testimonials() {
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

        <div className="space-y-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
import StarIcon from "@mui/icons-material/Star";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
      <div className="flex gap-0.5 text-gold mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} fontSize="small" />
        ))}
      </div>

      <p className="text-sm sm:text-[15px] text-ink-800 leading-relaxed">
        “{testimonial.quote}”
      </p>

      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold">
          {testimonial.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
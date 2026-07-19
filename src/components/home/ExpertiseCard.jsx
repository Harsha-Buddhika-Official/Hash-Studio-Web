import { SERVICE_ICONS } from "../shared/serviceIcons";
import { SERVICE_COLORWAYS } from "../shared/serviceColorways";

export default function ExpertiseCard({ service }) {
  const Icon = SERVICE_ICONS[service.icon];
  const colorway = SERVICE_COLORWAYS[service.colorway];

  return (
    <div
      className={`rounded-2xl border border-ink-100 bg-white p-6 sm:p-7 transition-colors duration-300 ${colorway.hoverBorder}`}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${colorway.stroke} ${colorway.bg} ${colorway.fg} mb-5`}
      >
        <Icon fontSize="small" />
      </span>

      <h3 className="text-lg font-bold text-ink-900">{service.title}</h3>
      <p className="mt-2.5 text-sm text-ink-600 leading-relaxed">
        {service.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide ${colorway.bg} ${colorway.fg}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
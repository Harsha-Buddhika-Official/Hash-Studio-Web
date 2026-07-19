import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SERVICE_ICONS } from "../shared/serviceIcons";
import { SERVICE_COLORWAYS } from "../shared/serviceColorways";

export default function ServiceCard({ service }) {
  const Icon = SERVICE_ICONS[service.icon];
  const colorway = SERVICE_COLORWAYS[service.colorway];

  return (
    <div
      className={`rounded-2xl border bg-white p-6 sm:p-7 flex flex-col
        transition-all duration-300 ease-out
        hover:-translate-y-1
        border-ink-100 ${colorway.hoverBorder} ${colorway.hoverBg} ${colorway.glow}`}
    >
      <span
        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${colorway.stroke} ${colorway.bg} ${colorway.fg} mb-6`}
      >
        <Icon sx={{ fontSize: 26 }} />
      </span>

      <h3 className="text-xl font-bold text-ink-900">{service.title}</h3>
      <p className="mt-3 text-sm text-ink-600 leading-relaxed">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs font-bold tracking-wide text-ink-800 uppercase">
            <CheckCircleIcon sx={{ fontSize: 16 }} className={colorway.fg} />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        state={{ service: service.title }}
        className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-bold tracking-widest uppercase text-white transition-colors ${colorway.button}`}
      >
        WhatsApp Inquiry
      </Link>
    </div>
  );
}
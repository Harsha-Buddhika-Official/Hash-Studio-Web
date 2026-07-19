import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SERVICE_ICONS } from "../shared/serviceIcons";
import { SERVICE_COLORWAYS } from "../shared/serviceColorways";
import { buildWhatsAppLink } from "../../data/siteConfig";

export default function ServiceCard({ service }) {
  const resolvedIcon = SERVICE_ICONS[service.icon];
  const resolvedColorway = SERVICE_COLORWAYS[service.colorway];

  if (!resolvedIcon) {
    console.warn(
      `ServiceCard: no icon registered for icon="${service.icon}" (service: "${service.title}"). Check src/components/shared/serviceIcons.js.`
    );
  }
  if (!resolvedColorway) {
    console.warn(
      `ServiceCard: no colorway registered for colorway="${service.colorway}" (service: "${service.title}"). Check src/components/shared/serviceColorways.js.`
    );
  }

  // Fall back to an icon/colorway we already know imports successfully in this file,
  // rather than pulling in a new icon module that might not resolve.
  const Icon = resolvedIcon ?? CheckCircleIcon;
  const colorway = resolvedColorway ?? SERVICE_COLORWAYS.blue;

  const whatsappHref = buildWhatsAppLink(
    service.whatsappMessage ??
      `Hi Hash Studio! I'm interested in your ${service.title} service. Could you tell me more about pricing and timelines?`
  );

  return (
    <div
      className={`h-full rounded-2xl border bg-white p-6 sm:p-7 flex flex-col
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

      <ul className="mt-5 mb-5 space-y-2.5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-xs font-bold tracking-wide text-ink-800 uppercase">
            <CheckCircleIcon sx={{ fontSize: 16 }} className={colorway.fg} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold tracking-widest uppercase text-white transition-colors ${colorway.button}`}
      >
        <WhatsAppIcon sx={{ fontSize: 16 }} />
        WhatsApp Inquiry
      </a>
    </div>
  );
}
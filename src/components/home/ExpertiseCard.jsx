import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";
import ShareIcon from "@mui/icons-material/Share";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const ICONS = {
  logo: PentagonOutlinedIcon,
  social: ShareIcon,
  packaging: Inventory2OutlinedIcon,
};

const COLORWAYS = {
  blue: {
    bg: "bg-chip-blue-bg",
    fg: "text-chip-blue-fg",
    stroke: "border-chip-blue-fg/40",
    hoverBorder: "hover:border-chip-blue-fg/50",
  },
  orange: {
    bg: "bg-chip-orange-bg",
    fg: "text-chip-orange-fg",
    stroke: "border-chip-orange-fg/40",
    hoverBorder: "hover:border-chip-orange-fg/50",
  },
  coral: {
    bg: "bg-chip-coral-bg",
    fg: "text-chip-coral-fg",
    stroke: "border-chip-coral-fg/40",
    hoverBorder: "hover:border-chip-coral-fg/50",
  },
};

export default function ExpertiseCard({ service }) {
  const Icon = ICONS[service.icon];
  const colorway = COLORWAYS[service.colorway];

  return (
    <div
      className={`rounded-2xl border border-ink-100 bg-white p-6 sm:p-7 transition-colors duration-400 ${colorway.hoverBorder}`}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${colorway.bg} ${colorway.fg} mb-5`}
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
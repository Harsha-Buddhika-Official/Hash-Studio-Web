import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BrandingWatermarkOutlinedIcon from "@mui/icons-material/BrandingWatermarkOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";

const ICONS = {
  logo: BrandingWatermarkOutlinedIcon,
  identity: PaletteOutlinedIcon,
  social: DynamicFeedOutlinedIcon,
  packaging: Inventory2OutlinedIcon,
  uiux: DevicesOutlinedIcon,
  vehicle: DirectionsCarFilledOutlinedIcon,
};

const COLORWAYS = {
  blue: {
    iconBg: "bg-chip-blue-bg",
    iconFg: "text-chip-blue-fg",
    checkFg: "text-chip-blue-fg",
    button: "bg-brand-500 hover:bg-brand-600",
    border: "border-chip-blue-fg/15 hover:border-chip-blue-fg/60",
    hoverBg: "hover:bg-chip-blue-bg/20",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(47,111,237,0.35)]",
  },
  orange: {
    iconBg: "bg-chip-orange-bg",
    iconFg: "text-chip-orange-fg",
    checkFg: "text-chip-orange-fg",
    button: "bg-chip-orange-fg hover:brightness-95",
    border: "border-chip-orange-fg/15 hover:border-chip-orange-fg/60",
    hoverBg: "hover:bg-chip-orange-bg/20",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(234,154,62,0.4)]",
  },
  coral: {
    iconBg: "bg-chip-coral-bg",
    iconFg: "text-chip-coral-fg",
    checkFg: "text-chip-coral-fg",
    button: "bg-chip-coral-fg hover:brightness-95",
    border: "border-chip-coral-fg/15 hover:border-chip-coral-fg/60",
    hoverBg: "hover:bg-chip-coral-bg/20",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(226,104,95,0.4)]",
  },
};

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon];
  const colorway = COLORWAYS[service.colorway];

  return (
    <div
      className={`rounded-2xl border bg-white p-6 sm:p-7 flex flex-col
        transition-all duration-300 ease-out
        hover:-translate-y-1
        ${colorway.border} ${colorway.hoverBg} ${colorway.glow}`}
    >
      <span
        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${colorway.iconBg} ${colorway.iconFg} mb-6`}
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
            <CheckCircleIcon sx={{ fontSize: 16 }} className={colorway.checkFg} />
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
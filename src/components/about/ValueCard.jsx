import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";

const ICONS = {
  innovation: LightbulbOutlinedIcon,
  impact: RocketLaunchIcon,
  precision: AutoAwesomeIcon,
  human: Groups2OutlinedIcon,
};

const VARIANT_STYLES = {
  light: {
    card: "bg-white border border-ink-100",
    iconWrap: "bg-brand-50 text-brand-500",
    title: "text-ink-900",
    desc: "text-ink-600",
  },
  teal: {
    card: "bg-brand-500",
    iconWrap: "bg-white/15 text-white",
    title: "text-white",
    desc: "text-white/80",
  },
  orange: {
    card: "bg-chip-orange-fg",
    iconWrap: "bg-white/20 text-white",
    title: "text-white",
    desc: "text-white/85",
  },
};

const SPAN_CLASSES = {
  wide: "lg:col-span-7",
  narrow: "lg:col-span-5",
};

export default function ValueCard({ value }) {
  const Icon = ICONS[value.icon];
  const styles = VARIANT_STYLES[value.variant];
  const spanClass = SPAN_CLASSES[value.span];

  return (
    <div
      className={`rounded-2xl p-7 sm:p-8 ${styles.card} ${spanClass}
        ${value.withImage ? "flex flex-col sm:flex-row sm:items-center gap-6" : ""}`}
    >
      <div className="flex-1">
        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl mb-5 ${styles.iconWrap}`}>
          <Icon fontSize="small" />
        </span>
        <h3 className={`text-xl sm:text-2xl font-bold ${styles.title}`}>{value.title}</h3>
        <p className={`mt-3 text-sm leading-relaxed max-w-sm ${styles.desc}`}>
          {value.description}
        </p>
      </div>

      {value.withImage && (
        <div className="hidden sm:flex h-32 w-28 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-brand-50">
          <TouchAppOutlinedIcon sx={{ fontSize: 36 }} className="text-brand-400" />
        </div>
      )}
    </div>
  );
}
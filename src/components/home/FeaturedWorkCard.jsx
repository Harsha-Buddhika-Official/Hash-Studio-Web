import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import LiquorIcon from "@mui/icons-material/Liquor";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

const THEME_CONFIG = {
  paper: {
    bg: "bg-gradient-to-br from-stone-100 to-stone-200",
    icon: DescriptionOutlinedIcon,
    iconColor: "text-stone-500",
    overlay: "bg-brand-700/0 group-hover:bg-brand-700/45",
  },
  energy: {
    bg: "bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-sky-500",
    icon: BoltIcon,
    iconColor: "text-white",
    overlay: "bg-indigo-950/0 group-hover:bg-indigo-950/45",
  },
  spirits: {
    bg: "bg-gradient-to-br from-amber-50 to-orange-100",
    icon: LiquorIcon,
    iconColor: "text-amber-600",
    overlay: "bg-amber-800/0 group-hover:bg-amber-800/40",
  },
  dashboard: {
    bg: "bg-gradient-to-br from-ink-900 to-ink-800",
    icon: InsertChartOutlinedIcon,
    iconColor: "text-brand-300",
    overlay: "bg-brand-600/0 group-hover:bg-brand-600/45",
  },
};

export default function FeaturedWorkCard({ project }) {
  const theme = THEME_CONFIG[project.theme];
  const Icon = theme.icon;

  return (
    <a
      href={`/portfolio/${project.id}`}
      className="group relative block h-56 sm:h-64 rounded-2xl border border-ink-100 overflow-hidden hover:shadow-card transition-shadow"
    >
      {/* Image layer — zooms + blurs on hover */}
      <div
        className={`absolute inset-0 flex items-center justify-center ${theme.bg}
          transform-gpu transition-transform duration-700 ease-out
          group-hover:scale-110 group-hover:blur-[3px]`}
      >
        <Icon sx={{ fontSize: 56 }} className={`${theme.iconColor} opacity-80`} />
      </div>

      {/* Full-card color wash — unique tint per card, fades in on hover */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ease-out ${theme.overlay}`}
      />

      {/* Subtle bottom-to-top darkening so text stays legible even pre-tint */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/35 via-black/0 to-transparent" />

      {/* Label — eyebrow category + bold title, bottom-left, slides up on hover */}
      <div
        className="absolute inset-x-0 bottom-0 p-4 sm:p-5
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500 ease-out"
      >
        <p className="text-[11px] font-semibold tracking-wide text-white/85">
          {project.category}
        </p>
        <p className="mt-0.5 text-lg font-bold text-white leading-tight">
          {project.title}
        </p>
      </div>
    </a>
  );
}
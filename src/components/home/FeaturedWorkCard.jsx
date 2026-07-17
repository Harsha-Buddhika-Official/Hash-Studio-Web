import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import LiquorIcon from "@mui/icons-material/Liquor";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

const THEME_CONFIG = {
  paper: {
    bg: "bg-gradient-to-br from-stone-100 to-stone-200",
    icon: DescriptionOutlinedIcon,
    iconColor: "text-stone-500",
  },
  energy: {
    bg: "bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-sky-500",
    icon: BoltIcon,
    iconColor: "text-white",
  },
  spirits: {
    bg: "bg-gradient-to-br from-amber-50 to-orange-100",
    icon: LiquorIcon,
    iconColor: "text-amber-600",
  },
  dashboard: {
    bg: "bg-gradient-to-br from-ink-900 to-ink-800",
    icon: InsertChartOutlinedIcon,
    iconColor: "text-brand-300",
  },
};

export default function FeaturedWorkCard({ project }) {
  const theme = THEME_CONFIG[project.theme];
  const Icon = theme.icon;

  return (
    <a
      href={`/portfolio/${project.id}`}
      className="group block rounded-2xl border border-ink-100 overflow-hidden hover:shadow-card transition-shadow"
    >
      <div
        className={`relative h-56 sm:h-64 flex items-center justify-center ${theme.bg}`}
      >
        <Icon sx={{ fontSize: 56 }} className={`${theme.iconColor} opacity-80`} />
      </div>
      <div className="p-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink-900">{project.title}</p>
          <p className="text-xs text-ink-400 mt-0.5">{project.category}</p>
        </div>
      </div>
    </a>
  );
}
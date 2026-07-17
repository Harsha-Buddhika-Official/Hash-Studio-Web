import SpaIcon from "@mui/icons-material/Spa";
import CategoryIcon from "@mui/icons-material/Category";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CoffeeIcon from "@mui/icons-material/Coffee";
import CampaignIcon from "@mui/icons-material/Campaign";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const ASPECT_CLASSES = {
  tall: "h-[440px] sm:h-[560px]",
  md: "h-[320px] sm:h-[380px]",
};

const VISUAL_THEME = {
  lumina: {
    bg: "bg-gradient-to-br from-stone-50 to-stone-200",
    icon: SpaIcon,
    iconColor: "text-stone-400",
  },
  logoMarks: {
    bg: "bg-gradient-to-br from-ink-900 to-ink-800",
    icon: CategoryIcon,
    iconColor: "text-white/70",
  },
  stationery: {
    bg: "bg-gradient-to-br from-amber-50 to-stone-100",
    icon: DescriptionOutlinedIcon,
    iconColor: "text-amber-700/70",
  },
  coffee: {
    bg: "bg-gradient-to-br from-orange-100 to-amber-200",
    icon: CoffeeIcon,
    iconColor: "text-orange-700/70",
  },
  festival: {
    bg: "bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-sky-500",
    icon: CampaignIcon,
    iconColor: "text-white",
  },
};

/** Fake browser chrome wrapper for "site mockup" style projects. */
function BrowserFrame({ children }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ink-100 bg-white">
        <span className="h-2 w-2 rounded-full bg-ink-200" />
        <span className="h-2 w-2 rounded-full bg-ink-200" />
        <span className="h-2 w-2 rounded-full bg-ink-200" />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

/** Phone mockup with a small crypto-tracker UI, for UI/UX projects. */
function PhoneMock() {
  const coins = [
    { name: "Bitcoin", change: "4.2%" },
    { name: "Ethereum", change: "2.5%" },
    { name: "Solana", change: "6.8%" },
  ];

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-ink-900 to-ink-800 p-6">
      <div className="w-40 rounded-[1.5rem] border-4 border-ink-700 bg-white overflow-hidden shadow-xl">
        <div className="px-3 py-4 space-y-3">
          <p className="text-[10px] font-bold text-ink-900">Hash Studio</p>
          <p className="text-[9px] text-ink-400">Portfolio Value</p>
          <p className="text-sm font-extrabold text-ink-900">$4,782.45</p>
          <div className="h-10 rounded bg-gradient-to-r from-brand-100 to-violet-100" />
          {coins.map((coin) => (
            <div key={coin.name} className="flex items-center justify-between text-[9px]">
              <span className="flex items-center gap-1 text-ink-700">
                <CurrencyBitcoinIcon sx={{ fontSize: 12 }} className="text-brand-500" />
                {coin.name}
              </span>
              <span className="flex items-center gap-0.5 text-emerald-500 font-semibold">
                <TrendingUpIcon sx={{ fontSize: 10 }} />
                {coin.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Generic gradient + icon placeholder standing in for real photography/screens. */
function Visual({ theme }) {
  const config = VISUAL_THEME[theme];
  const Icon = config.icon;
  return (
    <div className={`h-full w-full flex items-center justify-center ${config.bg}`}>
      <Icon sx={{ fontSize: 64 }} className={`${config.iconColor} opacity-80`} />
    </div>
  );
}

export default function PortfolioCard({ project }) {
  const aspectClass = ASPECT_CLASSES[project.aspect];

  let content;
  if (project.kind === "phone") {
    content = <PhoneMock />;
  } else if (project.kind === "browser") {
    content = (
      <BrowserFrame>
        <Visual theme={project.theme} />
      </BrowserFrame>
    );
  } else {
    content = <Visual theme={project.theme} />;
  }

  return (
    <a
      href={`/portfolio/${project.id}`}
      className={`group relative block mb-6 break-inside-avoid rounded-2xl border border-ink-100 overflow-hidden hover:shadow-card transition-shadow ${aspectClass}`}
    >
      {content}

      {/* Hover overlay with project title + category */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-sm font-semibold text-white">{project.title}</p>
        <p className="text-xs text-white/70">{project.categories.join(" · ")}</p>
      </div>
    </a>
  );
}
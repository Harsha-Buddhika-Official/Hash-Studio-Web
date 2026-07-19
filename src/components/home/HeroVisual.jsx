import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

/**
 * Pool of orbit labels. Add/remove/edit freely — each needs a stable `id`,
 * `text`, a fixed `position` (so slots never overlap regardless of which
 * subset is showing), a `floatClass`, and an `accent` color.
 */
const ORBIT_LABEL_POOL = [
  {
    id: "logo",
    text: "Logo Design",
    position: "right-[0%] top-[2%] sm:right-[4%]",
    floatClass: "animate-pill-bob-a",
    accent: "brand",
  },
  {
    id: "branding",
    text: "Brand Identity",
    position: "left-[0%] bottom-[8%] sm:left-[2%]",
    floatClass: "animate-pill-bob-b",
    accent: "orange",
  },
  {
    id: "social",
    text: "Social Media Design",
    position: "left-[2%] top-[10%] sm:left-[6%]",
    floatClass: "animate-pill-bob-c",
    accent: "brand",
  },
  {
    id: "packaging",
    text: "Packaging Design",
    position: "right-[2%] bottom-[4%] sm:right-[8%]",
    floatClass: "animate-pill-bob-a",
    accent: "orange",
  },
  {
    id: "poster",
    text: "Poster Design",
    position: "left-[10%] top-[36%] sm:left-[0%]",
    floatClass: "animate-pill-bob-b",
    accent: "coral",
  },
  {
    id: "flyer",
    text: "Flyer Design",
    position: "right-[8%] top-[38%] sm:right-[0%]",
    floatClass: "animate-pill-bob-c",
    accent: "coral",
  },
  {
    id: "banner",
    text: "Banner Design",
    position: "left-[16%] bottom-[22%] sm:left-[10%]",
    floatClass: "animate-pill-bob-a",
    accent: "brand",
  },
  {
    id: "billboard",
    text: "Billboard Design",
    position: "right-[14%] top-[8%] sm:right-[20%]",
    floatClass: "animate-pill-bob-b",
    accent: "orange",
  },
  {
    id: "uiux",
    text: "UI/UX Design",
    position: "right-[16%] bottom-[16%] sm:right-[22%]",
    floatClass: "animate-pill-bob-c",
    accent: "coral",
  },
];

const ACCENT_STYLES = {
  brand: { dot: "bg-brand-500", text: "text-brand-500" },
  orange: { dot: "bg-chip-orange-fg", text: "text-chip-orange-fg" },
  coral: { dot: "bg-chip-coral-fg", text: "text-chip-coral-fg" },
};

const MIN_VISIBLE = 3;
const MAX_VISIBLE = 5;
const ROTATE_INTERVAL_MS = 4500;

/** Picks a random subset of the pool, sized between MIN_VISIBLE and MAX_VISIBLE. */
function pickRandomLabels() {
  const count = Math.floor(Math.random() * (MAX_VISIBLE - MIN_VISIBLE + 1)) + MIN_VISIBLE;
  const shuffled = [...ORBIT_LABEL_POOL].sort(() => Math.random() - 0.5);
  return new Set(shuffled.slice(0, count).map((label) => label.id));
}

export default function HeroVisual() {
  const [visibleIds, setVisibleIds] = useState(() => pickRandomLabels());

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIds(pickRandomLabels());
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-md md:max-w-none h-[380px] sm:h-[440px] md:h-[460px] flex items-center justify-center">

      {/* Center card — holds the logo, sits on top, its own gentle float */}
      <div className="relative z-10 h-[100%] w-[100%] max-h-72 max-w-72 sm:max-h-80 sm:max-w-80 rounded-[2rem] bg-white shadow-card border border-ink-100 flex items-center justify-center p-4 animate-float-badge">
        <img
          src={logo}
          alt="Hash Studio"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Orbit label pills — fixed slots, random subset visible, reshuffled on an interval */}
      {ORBIT_LABEL_POOL.map(({ id, text, position, floatClass, accent }) => {
        const isVisible = visibleIds.has(id);
        const accentStyle = ACCENT_STYLES[accent];

        return (
            <div
              key={id}
              className={`absolute z-20 ${position} ${floatClass} transform-gpu
                transition-opacity duration-[900ms] ease-[cubic-bezier(0.45,0,0.55,1)]
                ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white shadow-card border border-ink-100 px-3.5 py-1.5 text-[11px] font-bold tracking-wide uppercase whitespace-nowrap">
              <span className={`h-1.5 w-1.5 rounded-full ${accentStyle.dot}`} />
              <span className={accentStyle.text}>{text}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
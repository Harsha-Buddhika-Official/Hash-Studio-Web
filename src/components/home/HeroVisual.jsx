import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

/**
 * Pool of orbit labels, positioned on an evenly-spaced circle AROUND the
 * center card (not inside its footprint). Each entry needs a stable `id`,
 * `text`, an `angle` (degrees, 0 = right, going clockwise) used to compute
 * its fixed x/y position, a `floatClass`, and an `accent` color.
 */
const ORBIT_LABEL_POOL = [
  { id: "logo", text: "Logo Design", angle: 0, floatClass: "animate-pill-bob-a", accent: "brand" },
  { id: "branding", text: "Brand Identity", angle: 40, floatClass: "animate-pill-bob-b", accent: "orange" },
  { id: "social", text: "Social Media Design", angle: 80, floatClass: "animate-pill-bob-c", accent: "brand" },
  { id: "packaging", text: "Packaging Design", angle: 120, floatClass: "animate-pill-bob-a", accent: "orange" },
  { id: "poster", text: "Poster Design", angle: 160, floatClass: "animate-pill-bob-b", accent: "coral" },
  { id: "flyer", text: "Flyer Design", angle: 200, floatClass: "animate-pill-bob-c", accent: "coral" },
  { id: "banner", text: "Banner Design", angle: 240, floatClass: "animate-pill-bob-a", accent: "brand" },
  { id: "billboard", text: "Billboard Design", angle: 280, floatClass: "animate-pill-bob-b", accent: "orange" },
  { id: "uiux", text: "UI/UX Design", angle: 320, floatClass: "animate-pill-bob-c", accent: "coral" },
];

// Radius as a % of the container, measured from center — kept just outside
// the center card's footprint so pills never sit on top of the logo.
const ORBIT_RADIUS_PERCENT = 48;

function getOrbitPosition(angleDeg) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = 50 + ORBIT_RADIUS_PERCENT * Math.cos(angleRad);
  const y = 50 + ORBIT_RADIUS_PERCENT * Math.sin(angleRad);
  return { left: `${x}%`, top: `${y}%` };
}

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

      {/* Orbit label pills — evenly spaced around the card, random subset visible, reshuffled on an interval */}
      {ORBIT_LABEL_POOL.map(({ id, text, angle, floatClass, accent }) => {
        const isVisible = visibleIds.has(id);
        const accentStyle = ACCENT_STYLES[accent];
        const position = getOrbitPosition(angle);

        return (
          <div
            key={id}
            style={position}
            className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 ${floatClass} transform-gpu
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
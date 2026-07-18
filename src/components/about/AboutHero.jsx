import WorkspacesIcon from "@mui/icons-material/Workspaces";
import { aboutHero } from "../../data/about";

const STAT_COLOR = {
  brand: "text-brand-500",
  orange: "text-chip-orange-fg",
};

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest text-brand-500 uppercase mb-4">
            {aboutHero.eyebrow}
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08] text-ink-900">
            {aboutHero.headline.map((line) => (
              <span
                key={line.text}
                className={`block ${line.accent ? "text-brand-500" : ""}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-6 text-ink-600 leading-relaxed max-w-md">
            {aboutHero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {aboutHero.stats.map((stat) => (
              <div key={stat.id} className="rounded-xl border border-ink-100 px-6 py-4">
                <p className={`text-2xl font-extrabold ${STAT_COLOR[stat.color]}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-ink-600 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image — zooms + softly blurs with a brand-tinted wash on hover */}
        <div className="group relative rounded-3xl border border-ink-100 overflow-hidden shadow-card h-[320px] sm:h-[400px] md:h-[440px]">
          <div
            className="absolute inset-0 flex items-center justify-center
              bg-gradient-to-br from-violet-100 via-slate-100 to-brand-50
              transform-gpu transition-transform duration-700 ease-out
              group-hover:scale-110 group-hover:blur-[2px]"
          >
            <WorkspacesIcon sx={{ fontSize: 96 }} className="text-slate-400/60" />
          </div>
          <div className="absolute inset-0 bg-brand-700/0 group-hover:bg-brand-700/20 transition-colors duration-500 ease-out" />
        </div>
      </div>
    </section>
  );
}
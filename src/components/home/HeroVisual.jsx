import TagIcon from "@mui/icons-material/Tag";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SpaIcon from "@mui/icons-material/Spa";

/**
 * Purely decorative composition standing in for the brand's product shots:
 * a browser mockup (top), a phone mockup (bottom-left) and a circular
 * wordmark badge tying them together. Swap the placeholder blocks for real
 * photography/screens when available — the layout/positioning is already correct.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md md:max-w-none h-[360px] sm:h-[420px] md:h-[440px]">
      {/* Browser / product mockup card */}
      <div className="absolute right-0 top-0 w-[72%] sm:w-[68%] rounded-2xl border border-ink-100 bg-white shadow-card overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-ink-100">
          <span className="h-2 w-2 rounded-full bg-ink-200" />
          <span className="h-2 w-2 rounded-full bg-ink-200" />
          <span className="h-2 w-2 rounded-full bg-ink-200" />
        </div>
        <div className="relative h-40 sm:h-48 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-brand-50 flex items-center justify-center gap-3 p-4">
          <SpaIcon sx={{ fontSize: 40 }} className="text-violet-400/70" />
          <div className="h-16 w-8 rounded-t-full rounded-b-sm bg-violet-300/70" />
          <div className="h-20 w-9 rounded-t-full rounded-b-sm bg-fuchsia-200" />
          <div className="h-14 w-7 rounded-t-full rounded-b-sm bg-brand-200" />
        </div>
      </div>

      {/* Phone mockup */}
      <div className="absolute left-0 bottom-0 w-[54%] sm:w-[48%] rounded-[1.75rem] border-8 border-ink-900 bg-ink-900 shadow-card overflow-hidden">
        <div className="rounded-[1.1rem] overflow-hidden bg-white">
          <div className="h-3 bg-ink-900 flex justify-center items-end pb-0.5">
            <span className="h-1 w-10 rounded-full bg-ink-700" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2 w-16 rounded bg-ink-200" />
            <div className="h-14 rounded-lg bg-gradient-to-tr from-brand-100 to-violet-100 flex items-end p-2 gap-1">
              <ShowChartIcon sx={{ fontSize: 22 }} className="text-brand-500" />
              <div className="flex-1 h-6 rounded bg-white/60" />
            </div>
            <div className="h-2 w-full rounded bg-ink-100" />
            <div className="h-2 w-3/4 rounded bg-ink-100" />
          </div>
        </div>
      </div>

      {/* Wordmark badge */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-white/90 backdrop-blur border border-ink-100 shadow-card flex flex-col items-center justify-center gap-1">
        <TagIcon sx={{ fontSize: 22 }} className="text-ink-900" />
        <span className="text-[10px] font-bold tracking-wider text-ink-800">
          HASH STUDIO
        </span>
      </div>
    </div>
  );
}
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

/**
 * Standard "eyebrow / title / optional trailing link" row used to
 * introduce a page section (e.g. "Selected Projects — Featured Work").
 */
export default function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-10">
      <div>
        {eyebrow && (
          <p className="text-xs font-bold tracking-widest text-brand-500 uppercase mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight">
          {title}
        </h2>
      </div>

      {action && (
        <a
          href={action.href}
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
        >
          {action.label}
          <ArrowForwardIcon fontSize="small" />
        </a>
      )}
    </div>
  );
}
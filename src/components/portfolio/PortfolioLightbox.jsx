import { useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { categoryColors } from "../../data/portfolio";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";

/**
 * Full-screen image lightbox for the Portfolio grid.
 * Renders on top of the Portfolio page (which stays mounted, dimmed, behind
 * it) rather than navigating anywhere — closing always returns to the exact
 * same scroll position on /portfolio.
 */
export default function PortfolioLightbox({ project, onClose, onPrev, onNext }) {
  const overlayRef = useRef(null);
  useBodyScrollLock(Boolean(project));

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && onPrev) onPrev();
      if (event.key === "ArrowRight" && onNext) onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  const primaryCategory = project.categories[0];
  const labelColor = categoryColors[primaryCategory] ?? "text-brand-500";

  // Clicking the dark backdrop (not the image/content itself) closes the lightbox.
  const handleBackdropClick = (event) => {
    if (event.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/80 backdrop-blur-sm p-4 sm:p-8 animate-fade-in"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <CloseIcon />
      </button>

      {/* Prev / next controls, only rendered when the grid provides them */}
      {onPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous project"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeftIcon />
        </button>
      )}
      {onNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next project"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRightIcon />
        </button>
      )}

      {/* Content: click here does NOT close (stopPropagation not needed since
          this div isn't the overlayRef element, so handleBackdropClick's
          `event.target === overlayRef.current` check already excludes it) */}
      <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center animate-scale-in">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
        />

        <div className="mt-5 text-center">
          <p className={`text-xs font-bold tracking-widest uppercase ${labelColor}`}>
            {primaryCategory}
          </p>
          <p className="mt-1 text-xl sm:text-2xl font-bold text-white">
            {project.title}
          </p>
        </div>
      </div>
    </div>
  );
}
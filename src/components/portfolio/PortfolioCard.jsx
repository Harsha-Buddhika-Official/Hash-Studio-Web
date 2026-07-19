import { useState } from "react";
import { categoryColors } from "../../data/portfolio";

export default function PortfolioCard({ project, onSelect }) {
  const [imageFailed, setImageFailed] = useState(false);
  const primaryCategory = project.categories[0];
  const labelColor = categoryColors[primaryCategory] ?? "text-brand-500";
  const showImage = project.image && !imageFailed;

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group relative block w-full text-left rounded-3xl border border-ink-100 overflow-hidden hover:shadow-card transition-shadow"
    >
      <div className="w-full transform-gpu transition-transform duration-700 ease-out group-hover:scale-105 group-hover:blur-[1.5px]">
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-auto w-full block"
          />
        ) : (
          <div className="aspect-[4/5] w-full flex items-center justify-center bg-ink-100 text-ink-400 text-sm">
            Image unavailable
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div
        className="absolute inset-x-0 bottom-0 p-5 sm:p-6
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500 ease-out"
      >
        <p className={`text-xs font-bold tracking-widest uppercase ${labelColor}`}>
          {primaryCategory}
        </p>
        <p className="mt-1 text-lg sm:text-xl font-bold text-white leading-tight">
          {project.title}
        </p>
      </div>
    </button>
  );
}
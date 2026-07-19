import { useState } from "react";
import { categoryColors } from "../../data/portfolio";

export default function FeaturedWorkCard({ project, onSelect }) {
  const [imageFailed, setImageFailed] = useState(false);
  const primaryCategory = project.categories[0];
  const labelColor = categoryColors[primaryCategory] ?? "text-brand-500";
  const showImage = project.image && !imageFailed;

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group relative block h-56 sm:h-64 w-full text-left rounded-2xl border border-ink-100 overflow-hidden hover:shadow-card transition-shadow"
    >
      <div
        className="absolute inset-0 transform-gpu transition-transform duration-700 ease-out
          group-hover:scale-105 group-hover:blur-[1.5px]"
      >
        {showImage ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-ink-100 text-ink-400 text-sm">
            Image unavailable
          </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div
        className="absolute inset-x-0 bottom-0 p-4 sm:p-5
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500 ease-out"
      >
        <p className={`text-[11px] font-bold tracking-widest uppercase ${labelColor}`}>
          {primaryCategory}
        </p>
        <p className="mt-0.5 text-lg font-bold text-white leading-tight">
          {project.title}
        </p>
      </div>
    </button>
  );
}
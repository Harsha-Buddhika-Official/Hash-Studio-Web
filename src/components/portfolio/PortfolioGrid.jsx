import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({ projects, onSelect }) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-ink-400 py-16">
        No projects match this filter yet — check back soon.
      </p>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 gap-5 sm:gap-6">
      {projects.map((project) => (
        <div key={project.id} className="mb-5 sm:mb-6 break-inside-avoid">
          <PortfolioCard project={project} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}
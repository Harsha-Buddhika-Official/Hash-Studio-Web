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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} onSelect={onSelect} />
      ))}
    </div>
  );
}
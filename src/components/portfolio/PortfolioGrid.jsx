import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-ink-400 py-16">
        No projects match this filter yet — check back soon.
      </p>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 gap-6">
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} />
      ))}
    </div>
  );
}
import { useMemo, useState } from "react";
import PortfolioIntro from "../components/portfolio/PortfolioIntro";
import PortfolioFilters from "../components/portfolio/PortfolioFilters";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioLightbox from "../components/portfolio/PortfolioLightbox";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";
import { portfolioFilters, portfolioProjects } from "../data/portfolio";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return portfolioProjects;
    return portfolioProjects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  const selectedIndex = filteredProjects.findIndex((p) => p.id === selectedId);
  const selectedProject = selectedIndex >= 0 ? filteredProjects[selectedIndex] : null;

  const handleClose = () => setSelectedId(null);

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedId(filteredProjects[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % filteredProjects.length;
    setSelectedId(filteredProjects[nextIndex].id);
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-10 sm:pt-14 pb-8">
        <PortfolioIntro />
        <div className="mt-8">
          <PortfolioFilters
            filters={portfolioFilters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-8">
        <PortfolioGrid projects={filteredProjects} onSelect={(project) => setSelectedId(project.id)} />
      </section>

      <PortfolioCTA />

      <PortfolioLightbox
        project={selectedProject}
        onClose={handleClose}
        onPrev={filteredProjects.length > 1 ? handlePrev : undefined}
        onNext={filteredProjects.length > 1 ? handleNext : undefined}
      />
    </>
  );
}
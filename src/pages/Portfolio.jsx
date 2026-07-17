import { useMemo, useState } from "react";
import PortfolioIntro from "../components/portfolio/PortfolioIntro";
import PortfolioFilters from "../components/portfolio/PortfolioFilters";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import PortfolioCTA from "../components/portfolio/PortfolioCTA";
import { portfolioFilters, portfolioProjects } from "../data/portfolio";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return portfolioProjects;
    return portfolioProjects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

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
        <PortfolioGrid projects={filteredProjects} />
      </section>

      <PortfolioCTA />
    </>
  );
}
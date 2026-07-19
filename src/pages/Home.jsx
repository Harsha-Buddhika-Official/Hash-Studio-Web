import { useState } from "react";
import Hero from "../components/home/Hero";
import FeaturedWork from "../components/home/FeaturedWork";
import Expertise from "../components/home/Expertise";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";
import PortfolioLightbox from "../components/portfolio/PortfolioLightbox";
import { featuredWork } from "../data/featuredWork";

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedIndex = featuredWork.findIndex((p) => p.id === selectedId);
  const selectedProject = selectedIndex >= 0 ? featuredWork[selectedIndex] : null;

  const handlePrev = () => {
    const prevIndex = (selectedIndex - 1 + featuredWork.length) % featuredWork.length;
    setSelectedId(featuredWork[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = (selectedIndex + 1) % featuredWork.length;
    setSelectedId(featuredWork[nextIndex].id);
  };

  return (
    <>
      <Hero />
      <FeaturedWork onSelect={(project) => setSelectedId(project.id)} />
      <Expertise />
      <Testimonials />
      <CTASection />

      <PortfolioLightbox
        project={selectedProject}
        onClose={() => setSelectedId(null)}
        onPrev={featuredWork.length > 1 ? handlePrev : undefined}
        onNext={featuredWork.length > 1 ? handleNext : undefined}
      />
    </>
  );
}
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionHeading from "../common/SectionHeading";
import FeaturedWorkCard from "./FeaturedWorkCard";
import { featuredWork } from "../../data/featuredWork";

export default function FeaturedWork({ onSelect }) {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Selected Projects"
        title="Featured Work"
        action={{ label: "View All Projects", href: "/portfolio" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {featuredWork.map((project) => (
          <FeaturedWorkCard key={project.id} project={project} onSelect={onSelect} />
        ))}
      </div>

      <a
        href="/portfolio"
        className="sm:hidden mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
      >
        View All Projects
        <ArrowForwardIcon fontSize="small" />
      </a>
    </section>
  );
}
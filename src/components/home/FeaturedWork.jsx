import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SectionHeading from "../common/SectionHeading";
import FeaturedWorkCard from "./FeaturedWorkCard";
import { featuredWork } from "../../data/featuredWork";

export default function FeaturedWork() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Selected Projects"
        title="Featured Work"
        action={{ label: "View All Projects", href: "/portfolio" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {featuredWork.map((project) => (
          <FeaturedWorkCard key={project.id} project={project} />
        ))}
      </div>

      <div className="sm:hidden relative z-10 mt-8">
        <Link
          to="/portfolio"
          className="flex items-center justify-center gap-1.5 w-full rounded-full border border-ink-200 py-3 text-sm font-semibold text-brand-600 active:bg-ink-50"
        >
          View All Projects
          <ArrowForwardIcon fontSize="small" />
        </Link>
      </div>
    </section>
  );
}
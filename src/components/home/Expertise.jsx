import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpertiseCard from "./ExpertiseCard";
import { services } from "../../data/services";

const VISIBLE_COUNT = 4;

export default function Expertise() {
  const visibleServices = services.slice(0, VISIBLE_COUNT);
  const hasMore = services.length > VISIBLE_COUNT;

  return (
    <section className="bg-ink-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-xs font-bold tracking-widest text-brand-500 uppercase mb-3">
            Our Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-900 tracking-tight leading-tight">
            Tailored Solutions for Digital Dominance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {visibleServices.map((service) => (
            <ExpertiseCard key={service.id} service={service} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-800 hover:border-brand-500 hover:text-brand-600 transition-colors"
            >
              See More Services ({services.length - VISIBLE_COUNT} more)
              <ArrowForwardIcon
                fontSize="small"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
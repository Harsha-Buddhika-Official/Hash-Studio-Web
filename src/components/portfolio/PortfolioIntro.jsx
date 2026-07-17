import { portfolioIntro } from "../../data/portfolio";

export default function PortfolioIntro() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-tight">
        {portfolioIntro.heading}
      </h1>
      <p className="mt-3 text-ink-600 leading-relaxed">
        {portfolioIntro.description}
      </p>
    </div>
  );
}
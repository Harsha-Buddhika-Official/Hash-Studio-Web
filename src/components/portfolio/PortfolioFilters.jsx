export default function PortfolioFilters({ filters, activeFilter, onChange }) {
  return (
    <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter projects by category">
      {filters.map((filter) => {
        const isActive = filter === activeFilter;
        return (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              isActive
                ? "bg-brand-500 text-white"
                : "bg-ink-50 text-ink-600 hover:bg-ink-100"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
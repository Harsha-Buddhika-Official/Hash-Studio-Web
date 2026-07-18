import SearchIcon from "@mui/icons-material/Search";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DoneIcon from "@mui/icons-material/Done";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ICONS = {
  discovery: SearchIcon,
  research: ArticleOutlinedIcon,
  concept: AutoFixHighOutlinedIcon,
  design: EditOutlinedIcon,
  delivery: DoneIcon,
};

const COLOR_STYLES = {
  brand: {
    ring: "border-brand-500 text-brand-500 bg-brand-50",
    filled: "bg-brand-500 text-white border-brand-500",
  },
  orange: {
    ring: "border-chip-orange-fg text-chip-orange-fg bg-chip-orange-bg",
    filled: "bg-chip-orange-fg text-white border-chip-orange-fg",
  },
  coral: {
    ring: "border-chip-coral-fg text-chip-coral-fg bg-chip-coral-bg",
    filled: "bg-chip-coral-fg text-white border-chip-coral-fg",
  },
};

/** The dot-on-the-line icon: pops in once visible, springs up further on hover. */
function StepIcon({ step, isVisible }) {
  const Icon = ICONS[step.icon];
  const colors = COLOR_STYLES[step.color];

  return (
    <span
      className={`relative z-10 inline-flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center
        justify-center rounded-full border-2 shadow-sm
        cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:scale-125
        ${isVisible ? "animate-pop-in" : "opacity-0 scale-0"}
        ${step.filled ? colors.filled : colors.ring}`}
    >
      <Icon sx={{ fontSize: 22 }} />
    </span>
  );
}

function StepText({ step, align = "left" }) {
  return (
    <div className={align === "right" ? "sm:text-right" : ""}>
      <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
        {step.number}. {step.title}
      </h3>
      <p className="mt-2 text-sm text-ink-600 leading-relaxed">{step.description}</p>
    </div>
  );
}

export default function BlueprintStep({ step }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.4 });
  const isLeft = step.side === "left";

  return (
    <div ref={ref} className="relative py-6 sm:py-10">
      {/* Mobile: icon + text as a single left-aligned row */}
      <div className="flex sm:hidden items-start gap-4">
        <StepIcon step={step} isVisible={isVisible} />
        <StepText step={step} />
      </div>

      {/* Desktop: text / icon / text as real grid columns — no overlap, guaranteed gap */}
      <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-10">
        <div className={isLeft ? "pr-6 md:pr-10" : ""}>
          {isLeft && <StepText step={step} align="right" />}
        </div>

        <StepIcon step={step} isVisible={isVisible} />

        <div className={!isLeft ? "pl-6 md:pl-10" : ""}>
          {!isLeft && <StepText step={step} />}
        </div>
      </div>
    </div>
  );
}
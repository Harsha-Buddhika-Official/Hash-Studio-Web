const VARIANT_STYLES = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-sm shadow-brand-500/20",
  secondary:
    "bg-white text-ink-800 border border-ink-200 hover:border-ink-400",
  inverse:
    "bg-white text-brand-700 hover:bg-white/90",
};

const SIZE_STYLES = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

/**
 * Shared CTA button. Renders as an anchor when `href` is provided,
 * otherwise as a native button (for in-page actions).
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  type = "button",
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold
    transition-colors duration-200 whitespace-nowrap ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {Icon && <Icon fontSize="small" />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Icon && <Icon fontSize="small" />}
      {children}
    </button>
  );
}
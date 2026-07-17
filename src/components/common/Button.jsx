import { Link } from "react-router-dom";

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
 * Shared CTA button. External hrefs (http...) render as <a target="_blank">.
 * Internal hrefs render as a router <Link> for client-side navigation.
 * With no href, renders a native <button> for in-page actions.
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

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {Icon && <Icon fontSize="small" />}
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={classes}>
        {Icon && <Icon fontSize="small" />}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {Icon && <Icon fontSize="small" />}
      {children}
    </button>
  );
}
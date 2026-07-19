/**
 * Single style registry per colorway, covering everything either card needs:
 * icon badge tint (bg/fg), a low-opacity stroke, a hover border, a hover
 * wash background, a solid button color, and a tinted glow shadow.
 *
 * Every class here is written out in full (not built with template strings)
 * because Tailwind's compiler can't detect dynamically-interpolated class
 * names — see ExpertiseCard/ServiceCard for how these get consumed.
 */
export const SERVICE_COLORWAYS = {
  blue: {
    bg: "bg-chip-blue-bg",
    fg: "text-chip-blue-fg",
    stroke: "border-chip-blue-fg/30",
    hoverBorder: "hover:border-chip-blue-fg",
    hoverBg: "hover:bg-chip-blue-bg/40",
    button: "bg-chip-blue-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(47,111,237,0.35)]",
  },
  purple: {
    bg: "bg-chip-purple-bg",
    fg: "text-chip-purple-fg",
    stroke: "border-chip-purple-fg/30",
    hoverBorder: "hover:border-chip-purple-fg",
    hoverBg: "hover:bg-chip-purple-bg/40",
    button: "bg-chip-purple-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(139,92,246,0.35)]",
  },
  orange: {
    bg: "bg-chip-orange-bg",
    fg: "text-chip-orange-fg",
    stroke: "border-chip-orange-fg/30",
    hoverBorder: "hover:border-chip-orange-fg",
    hoverBg: "hover:bg-chip-orange-bg/40",
    button: "bg-chip-orange-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(234,154,62,0.4)]",
  },
  red: {
    bg: "bg-chip-red-bg",
    fg: "text-chip-red-fg",
    stroke: "border-chip-red-fg/30",
    hoverBorder: "hover:border-chip-red-fg",
    hoverBg: "hover:bg-chip-red-bg/40",
    button: "bg-chip-red-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(224,71,63,0.35)]",
  },
  yellow: {
    bg: "bg-chip-yellow-bg",
    fg: "text-chip-yellow-fg",
    stroke: "border-chip-yellow-fg/30",
    hoverBorder: "hover:border-chip-yellow-fg",
    hoverBg: "hover:bg-chip-yellow-bg/40",
    button: "bg-chip-yellow-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(212,160,23,0.35)]",
  },
  green: {
    bg: "bg-chip-green-bg",
    fg: "text-chip-green-fg",
    stroke: "border-chip-green-fg/30",
    hoverBorder: "hover:border-chip-green-fg",
    hoverBg: "hover:bg-chip-green-bg/40",
    button: "bg-chip-green-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(47,158,88,0.35)]",
  },
  coral: {
    bg: "bg-chip-coral-bg",
    fg: "text-chip-coral-fg",
    stroke: "border-chip-coral-fg/30",
    hoverBorder: "hover:border-chip-coral-fg",
    hoverBg: "hover:bg-chip-coral-bg/40",
    button: "bg-chip-coral-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(226,104,95,0.4)]",
  },
  pink: {
    bg: "bg-chip-pink-bg",
    fg: "text-chip-pink-fg",
    stroke: "border-chip-pink-fg/30",
    hoverBorder: "hover:border-chip-pink-fg",
    hoverBg: "hover:bg-chip-pink-bg/40",
    button: "bg-chip-pink-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(224,73,154,0.35)]",
  },
  indigo: {
    bg: "bg-chip-indigo-bg",
    fg: "text-chip-indigo-fg",
    stroke: "border-chip-indigo-fg/30",
    hoverBorder: "hover:border-chip-indigo-fg",
    hoverBg: "hover:bg-chip-indigo-bg/40",
    button: "bg-chip-indigo-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(79,95,234,0.35)]",
  },
  amber: {
    bg: "bg-chip-amber-bg",
    fg: "text-chip-amber-fg",
    stroke: "border-chip-amber-fg/30",
    hoverBorder: "hover:border-chip-amber-fg",
    hoverBg: "hover:bg-chip-amber-bg/40",
    button: "bg-chip-amber-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(214,138,31,0.35)]",
  },
  lime: {
    bg: "bg-chip-lime-bg",
    fg: "text-chip-lime-fg",
    stroke: "border-chip-lime-fg/30",
    hoverBorder: "hover:border-chip-lime-fg",
    hoverBg: "hover:bg-chip-lime-bg/40",
    button: "bg-chip-lime-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(127,174,44,0.35)]",
  },
  sky: {
    bg: "bg-chip-sky-bg",
    fg: "text-chip-sky-fg",
    stroke: "border-chip-sky-fg/30",
    hoverBorder: "hover:border-chip-sky-fg",
    hoverBg: "hover:bg-chip-sky-bg/40",
    button: "bg-chip-sky-fg hover:brightness-95",
    glow: "hover:shadow-[0_18px_45px_-15px_rgba(47,156,224,0.35)]",
  },
};
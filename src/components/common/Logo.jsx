import TagIcon from "@mui/icons-material/Tag";

export default function Logo({ className = "" }) {
  return (
    <a href="/" className={`flex items-center gap-2 shrink-0 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-white">
        <TagIcon sx={{ fontSize: 18 }} />
      </span>
      <span className="text-lg font-extrabold text-ink-900 tracking-tight">
        Hash Studio
      </span>
    </a>
  );
}
import PublicIcon from "@mui/icons-material/Public";

const SPAN_CLASSES = {
  wide: "md:col-span-3",
  narrow: "md:col-span-2",
};

export default function TrustCard({ item }) {
  const spanClass = SPAN_CLASSES[item.span];

  if (item.kind === "stat") {
    return (
      <div className={`rounded-2xl bg-ink-50 p-8 flex flex-col items-center justify-center text-center ${spanClass}`}>
        <p className="text-5xl font-extrabold text-brand-500 tracking-tight">
          {item.value}
        </p>
        <p className="mt-2 text-xs font-bold tracking-widest text-ink-600 uppercase">
          {item.caption}
        </p>
      </div>
    );
  }

  if (item.kind === "icon") {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-ink-50 p-8 ${spanClass}`}>
        <PublicIcon
          sx={{ fontSize: 120 }}
          className="absolute -right-4 -bottom-4 text-ink-200/70"
        />
        <div className="relative">
          <h3 className="text-xl font-bold text-ink-900">{item.title}</h3>
          <p className="mt-2.5 text-sm text-ink-600 leading-relaxed max-w-md">
            {item.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-ink-50 p-8 ${spanClass}`}>
      <h3 className="text-xl font-bold text-ink-900">{item.title}</h3>
      <p className="mt-2.5 text-sm text-ink-600 leading-relaxed max-w-md">
        {item.description}
      </p>
    </div>
  );
}
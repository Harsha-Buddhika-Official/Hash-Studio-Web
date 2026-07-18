import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "../common/Button";
import { kickoffCard } from "../../data/contact";

export default function KickoffCard() {
  return (
    <div className="rounded-2xl bg-ink-50 p-7 sm:p-8">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-brand-600 mb-6">
        <ChatBubbleOutlineIcon fontSize="small" />
      </span>

      <h3 className="text-xl sm:text-2xl font-bold text-ink-900">
        {kickoffCard.title}
      </h3>
      <p className="mt-3 text-sm text-ink-600 leading-relaxed max-w-sm">
        {kickoffCard.description}
      </p>

      <div className="mt-6">
        <Button href={kickoffCard.cta.href} icon={ArrowForwardIcon} className="[&>svg]:order-2">
          {kickoffCard.cta.label}
        </Button>
      </div>
    </div>
  );
}
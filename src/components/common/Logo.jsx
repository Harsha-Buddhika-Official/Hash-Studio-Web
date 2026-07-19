import { Link } from "react-router-dom";
import TagIcon from "@mui/icons-material/Tag";
import icon from "../../assets/icon.png";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={`flex items-center gap-2 shrink-0 ${className}`}>
      <img src={icon} alt="Hash Studio Logo" className="w-8 h-8" />
      <span className="text-lg font-extrabold text-ink-900 tracking-tight">
        Hash Studio
      </span>
    </Link>
  );
}
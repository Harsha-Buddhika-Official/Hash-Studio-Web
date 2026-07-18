import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logo from "../common/Logo";
import Button from "../common/Button";
import { navLinks } from "../../data/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `text-sm font-medium pb-1 border-b-2 transition-colors ${
      isActive
        ? "text-brand-600 border-brand-500"
        : "text-ink-600 border-transparent hover:text-ink-900"
    }`;

  const mobileLinkClasses = ({ isActive }) =>
    `rounded-lg px-3 py-2.5 text-sm font-medium ${
      isActive ? "bg-brand-50 text-brand-700" : "text-ink-600 hover:bg-ink-50"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-ink-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={linkClasses}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="https://wa.me/+94719431969" icon={WhatsAppIcon}>
              Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-ink-800 hover:bg-ink-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-ink-100 bg-white">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={mobileLinkClasses}
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              href="https://wa.me/+94719431969"
              icon={WhatsAppIcon}
              className="mt-3 w-full"
            >
              Chat on WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
import Logo from "../common/Logo";
import { footerLinks } from "../../data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-600 hover:text-ink-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-6 text-center sm:text-right text-xs text-ink-400">
          © {year} Hash Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
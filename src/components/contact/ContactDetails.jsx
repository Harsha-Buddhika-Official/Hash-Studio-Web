import { contactChannels, socialLinks } from "../../data/contact";

export default function ContactDetails() {
  return (
    <div className="mt-8 space-y-7">
      {contactChannels.map((channel) => (
        <div key={channel.id}>
          <p className="text-xs font-bold tracking-widest text-chip-orange-fg uppercase mb-1.5">
            {channel.label}
          </p>
          <a
            href={channel.href}
            className="text-2xl sm:text-3xl font-extrabold text-ink-900 hover:text-brand-600 transition-colors"
          >
            {channel.value}
          </a>
        </div>
      ))}

      <div>
        <p className="text-xs font-bold tracking-widest text-ink-400 uppercase mb-2.5">
          Follow Our Journey
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-ink-900 hover:text-brand-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
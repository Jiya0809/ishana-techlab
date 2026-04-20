import { Link } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const year = new Date().getFullYear();

const sitemapLinks = [
  { label: "Services", to: "/services" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer
      className="border-t border-gray-border"
      style={{ backgroundColor: "oklch(0.11 0.01 222)" }}
    >
      <div className="container mx-auto px-4 py-14 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 – Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/uploads/image-019d33d7-9cf2-712d-954d-d8ca3c2d22d2-1.png"
                alt="ITL Logo"
                className="w-9 h-9 object-contain rounded-md"
              />
              <div className="flex flex-col leading-none">
                <span className="font-black text-base text-off-white tracking-tight">
                  ITL
                </span>
                <span className="text-[10px] text-cool-gray tracking-wide">
                  Ishana TechLab
                </span>
              </div>
            </Link>
            <p className="text-sm text-cool-gray leading-relaxed">
              Empowering businesses through cutting-edge technology solutions
              and digital transformation.
            </p>
          </div>

          {/* Col 2 – Sitemap */}
          <div>
            <h4 className="text-sm font-semibold text-off-white mb-4 uppercase tracking-wider">
              Sitemap
            </h4>
            <ul className="space-y-2">
              {sitemapLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-cool-gray hover:text-cyan-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-off-white mb-4 uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-cool-gray">
                <MapPin className="w-4 h-4 text-cyan-accent mt-0.5 shrink-0" />
                <span>350 Fifth Avenue, New York, NY 10118</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-cool-gray">
                <Phone className="w-4 h-4 text-cyan-accent shrink-0" />
                <a
                  href="tel:+12125551234"
                  className="hover:text-cyan-accent transition-colors"
                >
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-cool-gray">
                <Mail className="w-4 h-4 text-cyan-accent shrink-0" />
                <a
                  href="mailto:hello@ishanatechlab.io"
                  className="hover:text-cyan-accent transition-colors"
                >
                  hello@ishanatechlab.io
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-cool-gray">
                <Navigation className="w-4 h-4 text-cyan-accent shrink-0" />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-accent transition-colors"
                >
                  View on Maps →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 – Social */}
          <div>
            <h4 className="text-sm font-semibold text-off-white mb-4 uppercase tracking-wider">
              Social Media
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: Twitter,
                  label: "Twitter",
                  href: "https://twitter.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
                { icon: Github, label: "GitHub", href: "https://github.com" },
                {
                  icon: Youtube,
                  label: "YouTube",
                  href: "https://youtube.com",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-md flex items-center justify-center text-cool-gray hover:text-cyan-accent hover:border-cyan-accent/50 transition-colors border border-gray-border"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-border py-5">
        <p className="text-center text-sm text-cool-gray">
          © {year} Ishana TechLab. Built with ❤️ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            className="text-cyan-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-border"
      style={{
        backgroundColor: "oklch(0.11 0.01 222 / 0.95)",
        backdropFilter: "blur(12px)",
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between max-w-7xl">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3" data-ocid="nav.link">
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

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              currentPath === link.to ||
              (link.to !== "/" && currentPath.startsWith(link.to));
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-off-white"
                      : "text-cool-gray hover:text-off-white"
                  }`}
                  data-ocid="nav.link"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-accent"
                      style={{ borderRadius: 2 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button
              className="text-white font-semibold"
              style={{
                backgroundColor: "oklch(0.565 0.13 228)",
                border: "none",
              }}
              data-ocid="nav.primary_button"
            >
              Request a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-cool-gray hover:text-off-white"
          onClick={() => setMobileOpen((v) => !v)}
          data-ocid="nav.toggle"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-border overflow-hidden"
            style={{ backgroundColor: "oklch(0.11 0.01 222)" }}
          >
            <div className="container px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 text-sm font-medium text-cool-gray hover:text-off-white transition-colors rounded-md hover:bg-slate-card"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button
                  className="w-full text-white mt-2"
                  style={{ backgroundColor: "oklch(0.565 0.13 228)" }}
                  data-ocid="nav.primary_button"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

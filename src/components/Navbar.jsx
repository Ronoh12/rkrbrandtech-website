import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import logo from "../assets/rkr_logo_transparent.png";

const desktopLinkClass = ({ isActive }) =>
  [
    "group relative inline-flex items-center justify-center",
    "px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap",
    "transition-all duration-200",
    "border backdrop-blur-md",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-200/25",
    isActive
      ? "border-green-500/35 bg-green-500/12 text-green-600 shadow-[0_0_0_1px_rgba(34,197,94,0.12)]"
      : "border-white/10 bg-white/5 text-gray-200 hover:text-white hover:border-white/30 hover:bg-white/10",
  ].join(" ");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/services", label: "Services" },
      { to: "/managed-it", label: "Remote Support" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/insights", label: "Insights" },
      { to: "/about", label: "About" },
      { to: "/pricing", label: "Pricing" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        {/* Mobile left: small logo */}
        <div className="md:hidden flex items-center gap-2">
          <img
            src={logo}
            alt="RKR"
            className="h-9 w-9 object-contain drop-shadow-[0_0_10px_rgba(34,197,94,0.25)]"
          />
        </div>

        {/* Desktop center nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-2 flex-nowrap overflow-x-auto no-scrollbar">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={desktopLinkClass}>
                {/* Ultra-premium hover glow */}
                <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <span className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-green-500/15 blur-2xl" />
                </span>
                <span className="relative z-10">{l.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Right: Desktop button + Mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Primary CTA */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center justify-center rounded-full
                       bg-green-600 px-6 py-3 text-sm font-semibold text-white
                       transition-all duration-200
                       hover:bg-green-500
                       hover:shadow-[0_18px_60px_rgba(34,197,94,0.25)]
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/30
                       whitespace-nowrap"
          >
            Book a Consultation
          </a>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl
                       border border-white/10 bg-white/5 hover:bg-white/10 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.9 4.89a1 1 0 1 0 1.41 1.42L12 13.41l4.89 4.9a1 1 0 0 0 1.42-1.41L13.41 12l4.9-4.89a1 1 0 0 0-.01-1.4Z" />
              </svg>
            ) : (
              // Hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25A.75.75 0 0 1 3.75 11.25h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25A.75.75 0 0 1 3.75 16.5h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 17.25Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Overlay (no blur) */}
      {open && (
        <button
          className="md:hidden fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[64px] z-50 px-4 transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-black/85 backdrop-blur-xl p-3 shadow-lg overflow-hidden">
          <div className="space-y-2 overflow-hidden">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={`group relative block w-full px-4 py-3 rounded-xl text-sm font-semibold transition border overflow-hidden ${
                    active
                      ? "bg-green-600/15 text-green-200 border-green-500/25"
                      : "bg-white/5 text-gray-200 border-white/10 hover:border-white/25 hover:bg-white/10"
                  }`}
                >
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                    <span className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-500/12 blur-2xl" />
                  </span>
                  <span className="relative z-10">{l.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Mobile primary CTA */}
          <a
            href="/contact"
            className="mt-3 block w-full rounded-xl bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white
                       hover:bg-green-500 transition
                       hover:shadow-[0_18px_60px_rgba(34,197,94,0.25)]"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </header>
  );
}

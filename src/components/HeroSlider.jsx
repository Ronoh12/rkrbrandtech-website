import { useEffect, useMemo, useState } from "react";
import logo from "../assets/rkr_logo_transparent.png";

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      { type: "logo" },
      {
        type: "content",
        icon: "🛠️",
        badge: "Remote Support Available",
        title: "Managed IT Support for Businesses",
        subtitle:
          "Fast support via WhatsApp, phone, and email. Optional secure remote sessions when approved. Monthly contracts available.",
        cta1: { label: "Get Remote Support", href: "/managed-it" },
        cta2: { label: "View IT Services", href: "/services" },
        pills: [
          { label: "Response", value: "Fast remote support" },
          { label: "Coverage", value: "Remote & On-site" },
          { label: "Clients", value: "SMEs & offices" },
        ],
      },
      {
        type: "content",
        icon: "🛡️",
        badge: "Cybersecurity & Protection",
        title: "Secure Systems. Reduce Risk. Stay Operational.",
        subtitle:
          "Practical cybersecurity for SMEs: vulnerability assessments, Wi-Fi hardening, email security (MFA), backups & recovery planning.",
        cta1: { label: "Request a Security Check", href: "/contact" },
        cta2: { label: "Explore Cyber Services", href: "/services" },
        pills: [
          { label: "Assess", value: "Vulnerability checks" },
          { label: "Protect", value: "Hardening & MFA" },
          { label: "Recover", value: "Backups & restore" },
        ],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

          {/* ✅ taller + safe top padding for mobile */}
          <div className="relative min-h-[600px] sm:min-h-[560px] md:min-h-[380px]">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                {s.type === "logo" ? (
                  <div className="h-full w-full flex items-center justify-center px-6 py-12 md:py-10">
                    <img
                      src={logo}
                      alt="RKR BrandTech Solutions"
                      className="max-h-[340px] md:max-h-[380px] w-auto object-contain"
                      style={{ filter: "drop-shadow(0 0 22px rgba(34,197,94,0.35))" }}
                    />
                  </div>
                ) : (
                  /* ✅ Mobile: align to top; Desktop: center */
                  <div className="h-full w-full px-5 pt-12 pb-20 md:px-12 md:py-12 flex flex-col justify-start md:justify-center">
                    {/* Top badge row */}
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 md:h-11 md:w-11 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-base md:text-lg">
                        {s.icon}
                      </div>
                      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                        {s.badge}
                      </div>
                    </div>

                    <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-white">
                      {s.title}
                    </h2>

                    <p className="mt-3 text-gray-300 max-w-2xl leading-relaxed text-sm md:text-base">
                      {s.subtitle}
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href={s.cta1.href}
                        className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold hover:bg-green-500 transition text-center"
                      >
                        {s.cta1.label}
                      </a>
                      <a
                        href={s.cta2.href}
                        className="rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold hover:border-white/30 transition text-center"
                      >
                        {s.cta2.label}
                      </a>
                    </div>

                    {/* Pills */}
                    <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                      {s.pills.map((p, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-gray-300"
                        >
                          <div className="text-xs text-gray-500">{p.label}</div>
                          <div className="mt-1 font-semibold text-gray-100">
                            {p.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 pb-5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-green-500" : "w-2.5 bg-white/20 hover:bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

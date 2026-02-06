// src/pages/Services.jsx
import { useEffect } from "react";
import Container from "../components/Container";
import { setMeta } from "../utils/seo";
import PageTransition from "../components/PageTransition";

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-22px_rgba(34,197,94,0.65)] transition hover:bg-green-500 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/40"
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/35 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </a>
  );
}

function StatPill({ k, v }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-sm transition hover:border-green-500/25">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />
      </div>
      <div className="relative">
        <div className="text-xs text-gray-500">{k}</div>
        <div className="mt-1 font-semibold text-gray-100">{v}</div>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, bullets, icon }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-green-500/30 hover:-translate-y-0.5">
      {/* Ultra premium glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/14 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Subtle shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* ✅ Icon TOP */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="h-12 w-12 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-lg text-green-100">
              {icon}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
              <div className="absolute -inset-6 rounded-full bg-green-500/12 blur-2xl" />
            </div>
          </div>
        </div>

        {/* ✅ Centered title + paragraph */}
        <h3 className="mt-4 text-center text-white font-semibold text-lg">
          {title}
        </h3>
        <p className="mt-2 text-center text-sm text-gray-300 leading-relaxed">
          {desc}
        </p>

        {/* ✅ Bullets aligned LEFT (single line friendly) */}
        {bullets?.length ? (
          <ul className="mt-6 space-y-2 text-sm text-gray-200">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-500/75" />
                <span className="text-left leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
          <SecondaryButton href="/pricing">View Pricing</SecondaryButton>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  useEffect(() => {
    setMeta({
      title: "Services | RKR BrandTech Solutions",
      description:
        "Explore our services: Managed IT support (remote & Kenya-wide on-site), practical cybersecurity for SMEs, and a branding/print division for business growth.",
      url: "https://rkrbrandtech.com/services",
      image: "https://rkrbrandtech.com/og-image.png",
    });
  }, []);

  return (
    <PageTransition>
      <div className="bg-black min-h-screen">
        {/* Hero */}
        <section className="border-b border-white/10">
          <Container className="py-12 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                Services
              </div>

              <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                Managed IT • Cybersecurity • Branding
              </h1>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Tech-first support for businesses in Kenya. We provide remote help and
                Kenya-wide on-site support (scheduled) — with clear communication and
                professional reporting.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <PrimaryButton href="/contact">Book a Consultation</PrimaryButton>
                <SecondaryButton href="/pricing">View Pricing</SecondaryButton>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <StatPill k="Support" v="Remote + On-site" />
                <StatPill k="Coverage" v="Nationwide (Kenya-wide)" />
                <StatPill k="Reports" v="Professional & Clear" />
                <StatPill k="Focus" v="Security-first" />
              </div>
            </div>
          </Container>
        </section>

        {/* Services grid */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="grid gap-4 lg:grid-cols-3">
              <ServiceCard
                icon="🧩"
                title="Managed IT Support"
                desc="Day-to-day IT helpdesk and system stability for offices, SMEs, and teams."
                bullets={[
                  "WhatsApp / Email / Call support",
                  "Secure remote sessions (when approved)",
                  "Laptop troubleshooting, setup, maintenance",
                  "Printer + office IT support",
                  "Monthly contracts + professional reporting",
                ]}
              />

              <ServiceCard
                icon="🛡️"
                title="Cybersecurity for SMEs"
                desc="Practical security improvements that reduce risk without complexity."
                bullets={[
                  "Security health checks (baseline audit)",
                  "Vulnerability assessment + reporting",
                  "Wi-Fi hardening + guest segmentation",
                  "Email security (MFA) guidance",
                  "Backup & recovery readiness checks",
                ]}
              />

              <ServiceCard
                icon="🎨"
                title="Branding & Print Division"
                desc="Brand identity, print, and merchandise for a professional business presence."
                bullets={[
                  "Logo & brand identity design",
                  "Business cards, brochures, company profiles",
                  "Branded mugs, t-shirts, gifts",
                  "Event printing (programs, booklets)",
                  "Corporate branding support",
                ]}
              />
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10">
          <Container className="py-10 md:py-14">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10 text-center">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

              <h2 className="relative text-xl md:text-2xl font-bold text-white">
                Want a custom package?
              </h2>
              <p className="relative mt-2 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Tell us your needs and we’ll recommend the right plan — remote support,
                security checks, or a managed contract.
              </p>

              <div className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
                <SecondaryButton href="/managed-it">Remote Support</SecondaryButton>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

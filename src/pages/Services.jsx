import { useEffect } from "react";
import Container from "../components/Container";
import { setMeta } from "../utils/seo";
import PageTransition from "../components/PageTransition";

function ServiceCard({ title, desc, bullets, icon }) {
  return (
    <div className="group rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10 flex items-start gap-3">
        <div className="h-11 w-11 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-lg">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-white font-semibold text-lg">{title}</div>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
          {bullets?.length ? (
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-green-500/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-green-500/12 blur-3xl" />
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
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                Services
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                Managed IT • Cybersecurity • Branding
              </h1>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Tech-first support for businesses in Kenya. We provide remote help and
                Kenya-wide on-site support (scheduled) — with clear communication and
                professional reporting.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
                >
                  Book a Consultation
                </a>
                <a
                  href="/pricing"
                  className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
                >
                  View Pricing
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "Support", v: "Remote + On-site" },
                  { k: "Coverage", v: "Nationwide (Kenya-wide)" },
                  { k: "Reports", v: "Professional & Clear" },
                  { k: "Focus", v: "Security-first" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm"
                  >
                    <div className="text-xs text-gray-500">{x.k}</div>
                    <div className="mt-1 font-semibold text-gray-100">{x.v}</div>
                  </div>
                ))}
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
                title="Managed IT Support (Remote + On-site)"
                desc="Day-to-day IT helpdesk and system stability for offices, SMEs, and teams."
                bullets={[
                  "WhatsApp / Email / Call support",
                  "Secure remote sessions (when approved)",
                  "PC/laptop troubleshooting, setup, maintenance",
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
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Want a custom package?
              </h2>
              <p className="mt-2 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Tell us your needs and we’ll recommend the right plan — remote support,
                security checks, or a managed contract.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
                >
                  Request a Quote
                </a>
                <a
                  href="/managed-it"
                  className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
                >
                  Remote Support
                </a>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

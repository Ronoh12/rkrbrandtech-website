import { useEffect } from "react";
import Container from "../components/Container";

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
          {eyebrow}
        </div>
      ) : null}

      <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h1>

      {subtitle ? (
        <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ServiceCard({ icon, title, desc, bullets }) {
  return (
    <div className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10">
        <div className="flex items-start gap-3">
          <div className="h-11 w-11 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-lg">
            {icon}
          </div>
          <div>
            <div className="text-white font-semibold text-lg">{title}</div>
            <p className="mt-1 text-sm text-gray-300 leading-relaxed">{desc}</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-green-500/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PackageCard({ badge, title, desc, items, primaryCta, secondaryCta }) {
  return (
    <div className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs text-green-200">
            {badge}
          </div>
          <div className="text-xs text-gray-400">No pricing shown</div>
        </div>

        <div className="mt-3 text-white font-semibold text-xl">{title}</div>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>

        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-green-500/70" />
              <span>{it}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={primaryCta.href}
            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="border-b border-white/10">
        <Container className="py-10 md:py-14">
          <SectionTitle
            eyebrow="RKR BrandTech Solutions"
            title="Services for Businesses in Kenya"
            subtitle="Tech-first support, practical cybersecurity, and a branding/print division—designed to help your business run smoothly and grow securely."
          />

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
            >
              Book a Consultation
            </a>
            <a
              href="/managed-it"
              className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
            >
              Remote Support
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Support", v: "Remote & On-site" },
              { k: "Coverage", v: "Nationwide (Kenya-wide)" },
              { k: "Clients", v: "SMEs & Offices" },
              { k: "Focus", v: "Security + Reliability" },
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
        </Container>
      </section>

      {/* Service categories */}
      <section>
        <Container className="py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-2">
            <ServiceCard
              icon="🧩"
              title="Managed IT & Remote Support"
              desc="Reliable helpdesk support with optional secure remote sessions and Kenya-wide on-site visits."
              bullets={[
                "Remote helpdesk: WhatsApp, email, and call support",
                "Kenya-wide on-site support (scheduled visits)",
                "PC/Laptop setup, maintenance, and performance tuning",
                "Network & Wi-Fi setup and troubleshooting",
                "Microsoft 365 / Google Workspace support",
                "Backup setup + restore testing",
              ]}
            />

            <ServiceCard
              icon="🛡️"
              title="Cybersecurity for SMEs"
              desc="Practical security services focused on risk reduction, hardening, and clear reporting."
              bullets={[
                "Security health checks (baseline audit)",
                "Vulnerability assessment + professional report",
                "Wi-Fi hardening (secure settings + guest separation)",
                "Email security: MFA + mailbox rules checks",
                "Endpoint hardening: updates, firewall, protection guidance",
                "Backup & recovery readiness checks",
              ]}
            />

            <ServiceCard
              icon="⚙️"
              title="Business Tech Setup"
              desc="Set up business technology the right way—secure, organized, and ready for growth."
              bullets={[
                "Website setup: hosting + SSL + basic security",
                "Business email setup (now Gmail; later domain email)",
                "Cloud storage structure & permissions (Drive/OneDrive)",
                "Device inventory and basic IT documentation",
              ]}
            />

            <ServiceCard
              icon="🎨"
              title="Branding & Print Division"
              desc="Professional branding support for your business identity and marketing needs."
              bullets={[
                "Brand identity & design support",
                "Business cards, brochures, flyers",
                "Branded merchandise (mugs, t-shirts, etc.)",
                "Print support for events (programs, invites, eulogies)",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Packages */}
      <section className="border-t border-white/10">
        <Container className="py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
              Packages
            </div>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
              Choose a plan that fits your business
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              We can start with a one-time setup or move into a managed contract.
              Every engagement includes clear deliverables and professional communication.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <PackageCard
              badge="Managed IT"
              title="Starter Support"
              desc="Best for small offices that need fast help and stable systems."
              items={[
                "Remote support (approved sessions)",
                "PC/Laptop checks & updates",
                "Wi-Fi troubleshooting",
                "Basic documentation & guidance",
              ]}
              primaryCta={{ label: "Request a Call Back", href: "/contact" }}
              secondaryCta={{ label: "Remote Support", href: "/managed-it" }}
            />

            <PackageCard
              badge="Managed IT"
              title="Business Support"
              desc="Ideal for growing teams that need continuous support + backups."
              items={[
                "Remote support + scheduled on-site visits (Kenya-wide)",
                "Backup setup & restore testing",
                "Email & account support (MFA guidance)",
                "Monthly checkups & improvements",
              ]}
              primaryCta={{ label: "Book Consultation", href: "/contact" }}
              secondaryCta={{ label: "See Services", href: "/services" }}
            />

            <PackageCard
              badge="Cybersecurity"
              title="Security Check & Hardening"
              desc="A practical security assessment with action steps and fixes."
              items={[
                "Security health check",
                "Vulnerability scan + report",
                "Wi-Fi hardening recommendations",
                "Priority fixes roadmap",
              ]}
              primaryCta={{ label: "Request Security Check", href: "/contact" }}
              secondaryCta={{ label: "Explore Cyber", href: "/services" }}
            />
          </div>

          {/* Closing CTA */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Not sure what you need?
            </h3>
            <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Tell us your business size and the problem you’re facing. We’ll recommend the best package and next steps.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
              >
                Book a Consultation
              </a>
              <a
                href="/contact"
                className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
              >
                Request a Call Back
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

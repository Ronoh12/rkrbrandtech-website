// src/pages/ManagedIT.jsx
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

function Card({ title, desc, icon, bullets }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:border-green-500/30 hover:-translate-y-0.5">
      {/* Ultra premium glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-green-500/14 blur-3xl" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Soft shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <div className="h-12 w-12 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-lg text-green-100">
              {icon}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
              <div className="absolute -inset-6 rounded-full bg-green-500/12 blur-2xl" />
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>

            {bullets?.length ? (
              <ul className="mt-5 space-y-2 text-sm text-gray-200">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-500/75" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ManagedIT() {
  useEffect(() => {
    setMeta({
      title: "Remote Support | RKR BrandTech Solutions",
      description:
        "Fast remote IT support for businesses in Kenya. Secure remote sessions, troubleshooting, maintenance, and monthly managed IT contracts.",
      url: "https://rkrbrandtech.com/managed-it",
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
                Remote Support
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                Fast, secure remote IT support
              </h1>

              <p className="mt-4 text-gray-300 leading-relaxed">
                Get help via WhatsApp, email, or phone — plus secure remote sessions when
                approved. Perfect for SMEs, offices, and growing teams that need reliable
                support.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <PrimaryButton href="/contact">Request Remote Support</PrimaryButton>
                <SecondaryButton href="/pricing">View Plans</SecondaryButton>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <StatPill k="Channels" v="WhatsApp • Email • Call" />
                <StatPill k="Remote" v="Secure sessions (approved)" />
                <StatPill k="Coverage" v="Kenya-wide on-site (scheduled)" />
                <StatPill k="Reporting" v="Clear deliverables" />
              </div>
            </div>
          </Container>
        </section>

        {/* What we help with */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                What we fix
              </div>
              <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
                Common issues we solve quickly
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                Most support requests can be handled remotely — saving time and cost.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <Card
                icon="💻"
                title="PC/Laptop troubleshooting"
                desc="Slow performance, software errors, updates, drivers, and general fixes."
                bullets={[
                  "Windows & basic software issues",
                  "Performance tuning",
                  "App installation & errors",
                  "User account support",
                ]}
              />
              <Card
                icon="🖨️"
                title="Printer & office setup"
                desc="Fix printer problems, sharing, and office system connectivity."
                bullets={[
                  "Printer installation & sharing",
                  "Network printing issues",
                  "Office email/device setup",
                  "Basic IT configuration",
                ]}
              />
              <Card
                icon="📶"
                title="Network & Wi-Fi support"
                desc="Stability improvements and troubleshooting for small office networks."
                bullets={[
                  "Wi-Fi troubleshooting",
                  "Router configuration help",
                  "Guest Wi-Fi separation",
                  "Connectivity checks",
                ]}
              />
            </div>
          </Container>
        </section>

        {/* How it works */}
        <section className="border-t border-white/10">
          <Container className="py-10 md:py-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                How it works
              </div>
              <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
                Simple process. Clear outcomes.
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                We keep it professional: confirm, connect (if needed), fix, and share next steps.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Card
                icon="1️⃣"
                title="Request support"
                desc="Send your issue through WhatsApp/email or book a consultation."
              />
              <Card
                icon="2️⃣"
                title="Remote session (if needed)"
                desc="We guide you or connect remotely with your approval."
              />
              <Card
                icon="3️⃣"
                title="Fix + summary"
                desc="Problem solved plus clear next steps for prevention."
              />
            </div>

            <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10 text-center">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

              <h3 className="relative text-xl md:text-2xl font-bold text-white">
                Need monthly IT support?
              </h3>
              <p className="relative mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Choose a managed plan for faster response times, reporting, and predictable support.
              </p>

              <div className="relative mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <PrimaryButton href="/pricing">View Pricing</PrimaryButton>
                <SecondaryButton href="/contact">Talk to Us</SecondaryButton>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

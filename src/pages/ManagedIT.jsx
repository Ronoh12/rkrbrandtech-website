import { useEffect } from "react";
import Container from "../components/Container";
import { setMeta } from "../utils/seo";
import PageTransition from "../components/PageTransition";

function Card({ title, desc, icon, bullets }) {
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
        <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-green-500/12 blur-3xl" />
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

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
                >
                  Request Remote Support
                </a>
                <a
                  href="/pricing"
                  className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
                >
                  View Plans
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "Channels", v: "WhatsApp • Email • Call" },
                  { k: "Remote", v: "Secure sessions (approved)" },
                  { k: "Coverage", v: "Kenya-wide on-site (scheduled)" },
                  { k: "Reporting", v: "Clear deliverables" },
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
            <div className="grid gap-4 md:grid-cols-3">
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

            <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Need monthly IT support?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Choose a managed plan for faster response times, reporting, and predictable
                support.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/pricing"
                  className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
                >
                  View Pricing
                </a>
                <a
                  href="/contact"
                  className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
                >
                  Talk to Us
                </a>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

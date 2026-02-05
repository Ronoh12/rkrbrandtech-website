import { useEffect } from "react";
import Container from "../components/Container";
import { setMeta } from "../utils/seo";
import PageTransition from "../components/PageTransition";

function PriceCard({
  title,
  price,
  period,
  desc,
  features,
  ctaText,
  ctaHref,
  highlight,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border p-7 transition ${
        highlight
          ? "border-green-500/35 bg-green-500/10"
          : "border-white/10 bg-white/5 hover:border-white/40"
      }`}
    >
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/12 blur-3xl" />
      </div>

      <div className="relative z-10">
        {highlight && (
          <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/15 px-3 py-1 text-xs text-green-200">
            Recommended
          </div>
        )}

        <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>

        <div className="mt-6 flex items-end gap-2">
          <div className="text-4xl font-bold text-white">{price}</div>
          {period ? <div className="pb-1 text-sm text-gray-400">{period}</div> : null}
        </div>

        <ul className="mt-6 space-y-2 text-sm text-gray-300">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-green-500/70" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <a
          href={ctaHref}
          className={`mt-7 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition ${
            highlight
              ? "bg-green-600 text-white hover:bg-green-500"
              : "border border-white/15 bg-black/30 text-white hover:border-white/30"
          }`}
        >
          {ctaText}
        </a>

        <p className="mt-4 text-xs text-gray-500">
          Final pricing depends on scope. We can tailor a plan for your business.
        </p>
      </div>
    </div>
  );
}

export default function Pricing() {
  useEffect(() => {
    setMeta({
      title: "Pricing | RKR BrandTech Solutions",
      description:
        "Pricing plans for Managed IT Support, Remote Support, and Cybersecurity services in Kenya. Request a quote or book a consultation.",
      url: "https://rkrbrandtech.com/pricing",
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
                Pricing
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                Simple plans. Professional delivery.
              </h1>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Choose a support plan or request a tailored quote. We offer remote support and
                Kenya-wide on-site visits (scheduled).
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
                >
                  Book a Consultation
                </a>
                <a
                  href="/services"
                  className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
                >
                  View Services
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Plans */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="grid gap-4 lg:grid-cols-3">
              <PriceCard
                title="Starter Support"
                price="Request Quote"
                period=""
                desc="Best for small offices needing reliable remote help and basic IT stability."
                features={[
                  "Remote support (WhatsApp/Email/Call)",
                  "PC/Laptop troubleshooting",
                  "Printer & office setup support",
                  "Basic security guidance (MFA & backups)",
                  "Monthly summary (optional)",
                ]}
                ctaText="Request Starter Quote"
                ctaHref="/contact"
              />

              <PriceCard
                title="Business Managed IT"
                price="Request Quote"
                period=""
                desc="For growing businesses that need structured support, reporting, and faster response."
                features={[
                  "Priority remote support",
                  "Scheduled on-site support (Kenya-wide)",
                  "Network/Wi-Fi stability checks",
                  "Security health checks + recommendations",
                  "Professional reporting & documentation",
                ]}
                ctaText="Book Managed IT Call"
                ctaHref="/contact"
                highlight
              />

              <PriceCard
                title="Security Check"
                price="Request Quote"
                period=""
                desc="A practical cybersecurity check for SMEs to reduce risk with clear, actionable steps."
                features={[
                  "Baseline security assessment",
                  "Vulnerability checks (non-invasive)",
                  "Wi-Fi hardening recommendations",
                  "Email security guidance (MFA)",
                  "Backup & recovery readiness review",
                ]}
                ctaText="Request Security Check"
                ctaHref="/contact"
              />
            </div>

            {/* Notes */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <div className="text-white font-semibold text-lg">
                How pricing works
              </div>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                We use transparent pricing based on your environment (number of devices/users,
                network size, and support needs). After a short consultation, we provide a
                clear quote and deliverables.
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  {
                    k: "Remote Support",
                    v: "Fast help via WhatsApp, email, or phone. Secure sessions when approved.",
                  },
                  {
                    k: "On-site Support",
                    v: "Kenya-wide visits scheduled based on your location and scope of work.",
                  },
                  {
                    k: "Reporting",
                    v: "Professional summaries, recommendations, and next steps for your team.",
                  },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="text-sm font-semibold text-white">{x.k}</div>
                    <div className="mt-2 text-sm text-gray-300 leading-relaxed">
                      {x.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

// src/pages/Pricing.jsx
import { useEffect } from "react";
import Container from "../components/Container";
import { setMeta } from "../utils/seo";
import PageTransition from "../components/PageTransition";

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={[
        "group relative inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white",
        "shadow-[0_18px_60px_-22px_rgba(34,197,94,0.70)] transition",
        "hover:bg-green-500 hover:-translate-y-0.5 active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/40",
        className,
      ].join(" ")}
    >
      {/* soft shine */}
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/22 to-transparent opacity-0 transition group-hover:opacity-100" />
      {/* tiny highlight blob */}
      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </a>
  );
}

function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={[
        "group relative inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white",
        "backdrop-blur transition",
        "hover:border-white/35 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
        className,
      ].join(" ")}
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/8 blur-2xl opacity-0 transition group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </a>
  );
}

function StatCard({ k, v }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 text-center transition hover:border-green-500/30 hover:-translate-y-0.5">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/12 blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="text-xs text-gray-500">{k}</div>
        <div className="mt-1 font-semibold text-gray-100">{v}</div>
      </div>
    </div>
  );
}

function PriceCard({ title, price, desc, features, ctaText, ctaHref, highlight }) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border p-7 transition",
        "hover:-translate-y-0.5",
        highlight
          ? "border-green-500/35 bg-green-500/10"
          : "border-white/10 bg-white/5 hover:border-white/30",
      ].join(" ")}
    >
      {/* Ultra glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-500/14 blur-3xl" />
        <div className="absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Soft shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
      </div>

      <div className="relative z-10 text-center">
        {highlight && (
          <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/15 px-3 py-1 text-xs text-green-200">
            Recommended
          </div>
        )}

        {/* ✅ centered header + paragraph */}
        <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>

        {/* ✅ centered price */}
        <div className="mt-7">
          <div className="text-4xl font-bold text-white">{price}</div>
        </div>

        {/* ✅ centered bullet block; bullets align left inside the block */}
        <ul className="mt-6 mx-auto w-fit space-y-2 text-left text-sm text-gray-300">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-green-500/70 shrink-0" />
              <span className="leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        {/* ✅ centered CTA button */}
        <div className="mt-7 flex justify-center">
          {highlight ? (
            <PrimaryButton href={ctaHref} className="w-full">
              {ctaText}
            </PrimaryButton>
          ) : (
            <SecondaryButton href={ctaHref} className="w-full">
              {ctaText}
            </SecondaryButton>
          )}
        </div>

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
                <PrimaryButton href="/contact" className="w-auto">
                  Book a Consultation
                </PrimaryButton>
                <SecondaryButton href="/services" className="w-auto">
                  View Services
                </SecondaryButton>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "Support", v: "Remote + On-site" },
                  { k: "Coverage", v: "Kenya-wide (scheduled)" },
                  { k: "Reporting", v: "Clear deliverables" },
                  { k: "Approach", v: "Security-first" },
                ].map((x) => (
                  <StatCard key={x.k} k={x.k} v={x.v} />
                ))}
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
            <div className="mt-10 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 text-center transition hover:border-white/30">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-500/12 blur-3xl" />
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="text-green-300 font-semibold text-lg">
                  How pricing works
                </div>
                <p className="mt-2 text-sm text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  We use transparent pricing based on your environment (number of devices/users,
                  network size, and support needs). After a short consultation, we provide a clear
                  quote and deliverables.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
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
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-5 text-center transition hover:border-white/25 hover:-translate-y-0.5"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/10 blur-3xl" />
                      </div>
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/7 to-transparent" />
                      </div>

                      <div className="relative z-10">
                        <div className="text-sm font-semibold text-white">{x.k}</div>
                        <div className="mt-2 text-sm text-gray-300 leading-relaxed">
                          {x.v}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                  <PrimaryButton href="/contact" className="w-auto">
                    Request a Quote
                  </PrimaryButton>
                  <SecondaryButton href="/services" className="w-auto">
                    Compare Services
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

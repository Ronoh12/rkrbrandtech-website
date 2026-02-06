// src/pages/About.jsx
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
        "shadow-[0_18px_60px_-22px_rgba(34,197,94,0.65)] transition",
        "hover:bg-green-500 hover:-translate-y-0.5 active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/40",
        className,
      ].join(" ")}
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
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
      <span className="relative">{children}</span>
    </a>
  );
}

// ✅ ONLY CHANGE: icon is now centered above the title (no top-left feel)
function PremiumCard({ icon, title, desc, center = false }) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition",
        "hover:border-white/30 hover:-translate-y-0.5",
        center ? "text-center" : "",
      ].join(" ")}
    >
      {/* Ultra premium glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/14 blur-3xl" />
        <div className="absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Soft shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
      </div>

      <div className="relative z-10 text-center">
        {/* Icon centered ABOVE the header */}
        <div className="mx-auto h-12 w-12 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-lg text-green-100">
          {icon}
        </div>

        <div className="mt-4">
          <div className="text-white font-semibold text-lg">{title}</div>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function StepCard({ n, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-white/30 hover:-translate-y-0.5">
      {/* Ultra premium glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/14 blur-3xl" />
        <div className="absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Soft shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200">
          Step {n}
        </div>
        <div className="mt-3 text-white font-semibold text-lg">{title}</div>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
      </div>
    </div>
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

export default function About() {
  useEffect(() => {
    setMeta({
      title: "About | RKR BrandTech Solutions",
      description:
        "Learn about RKR BrandTech Solutions — Managed IT support, cybersecurity services, and branding for businesses across Kenya.",
      url: "https://rkrbrandtech.com/about",
      image: "https://rkrbrandtech.com/og-image.png",
    });
  }, []);

  return (
    <PageTransition>
      <div className="bg-black min-h-screen">
        {/* Hero */}
        <section className="border-b border-white/10">
          <Container className="py-10 md:py-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                About RKR BrandTech Solutions
              </div>

              <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white tracking-tight">
                Tech-first services for modern businesses
              </h1>

              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                We help businesses in Kenya stay productive, secure, and professional—through
                Managed IT Support, practical Cybersecurity, and a Branding & Print Division.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <PrimaryButton href="/contact">Book a Consultation</PrimaryButton>
                <SecondaryButton href="/services">View Services</SecondaryButton>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Support", v: "Remote & On-site" },
                { k: "Coverage", v: "Nationwide (Kenya-wide)" },
                { k: "Focus", v: "Security + Reliability" },
                { k: "Approach", v: "Practical & Professional" },
              ].map((x) => (
                <StatCard key={x.k} k={x.k} v={x.v} />
              ))}
            </div>
          </Container>
        </section>

        {/* Mission & Differentiators */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="grid gap-4 md:grid-cols-2">
              <PremiumCard
                icon="🎯"
                title="Our mission"
                desc="To provide reliable IT support and practical cybersecurity that businesses can understand, trust, and act on—while also helping them build a strong brand presence."
              />
              <PremiumCard
                icon="✅"
                title="Why choose RKR"
                desc="We focus on clear communication, professional reporting, and security-first implementations. Our services are built to support SMEs and growing teams."
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <PremiumCard
                icon="🧠"
                title="Professional approach"
                desc="We document findings, share clear recommendations, and provide next steps—so decisions are easy."
              />
              <PremiumCard
                icon="🛡️"
                title="Security-first mindset"
                desc="We prioritize safe configurations, MFA, backups, and hardening to reduce cyber risks."
              />
              <PremiumCard
                icon="⚡"
                title="Speed + reliability"
                desc="We respond quickly through remote support and schedule Kenya-wide on-site visits when needed."
              />
            </div>
          </Container>
        </section>

        {/* How we work */}
        <section className="border-t border-white/10">
          <Container className="py-10 md:py-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                How we work
              </div>
              <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
                A simple process that delivers results
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                From discovery to implementation, we keep everything clear and professional.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <StepCard
                n="1"
                title="Assess"
                desc="We understand your environment, your goals, and your risks."
              />
              <StepCard
                n="2"
                title="Fix & Improve"
                desc="We implement the best solution—securely and with minimal downtime."
              />
              <StepCard
                n="3"
                title="Report & Support"
                desc="You receive clear deliverables and continued support options."
              />
            </div>
          </Container>
        </section>

        {/* Founder */}
        <section className="border-t border-white/10">
          <Container className="py-10 md:py-14">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

              <div className="relative z-10 grid gap-8 md:grid-cols-12 items-center">
                <div className="md:col-span-7 mx-auto text-center max-w-3xl">
                  <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs text-green-200">
                    Founder
                  </div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white text-center">
                    Built on IT Support + IT Security expertise
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed text-center">
                    RKR BrandTech Solutions is driven by a tech-first mindset, combining IT support
                    experience with cybersecurity-focused knowledge. Our goal is to deliver real value:
                    stable systems, reduced risk, and a professional business presence.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                    <SecondaryButton href="/portfolio">View Portfolio</SecondaryButton>
                    <PrimaryButton href="/contact">Contact Us</PrimaryButton>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:-translate-y-0.5">
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/12 blur-3xl" />
                    </div>
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
                    </div>

                    <div className="relative z-10">
                      <div className="text-white font-semibold">What clients get</div>
                      <ul className="mt-4 space-y-2 text-sm text-gray-300">
                        {[
                          "Clear communication and transparency",
                          "Professional documentation and reports",
                          "Security-first recommendations",
                          "Remote support + Kenya-wide on-site visits",
                          "A tech partner you can trust",
                        ].map((x) => (
                          <li key={x} className="flex items-start gap-2">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500/70 shrink-0" />
                            <span className="leading-relaxed">{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Bottom CTA band */}
        <section className="border-t border-white/10">
          <Container className="py-10 md:py-14">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-10 text-center">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute inset-0 bg-gradient-to-b from-white/6 to-transparent" />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Want to improve your IT, security, or branding?
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Book a consultation and we’ll recommend the best next steps for your business.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <PrimaryButton href="/contact">Book a Consultation</PrimaryButton>
                  <SecondaryButton href="/services">Explore Services</SecondaryButton>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

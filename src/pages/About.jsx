import { useEffect } from "react";
import Container from "../components/Container";
import { setMeta } from "../utils/seo";
import PageTransition from "../components/PageTransition";

function GlassCard({ title, desc, icon }) {
  return (
    <div className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10">
        <div className="flex items-start gap-3">
          <div className="h-11 w-11 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-lg">
            {icon}
          </div>
          <div>
            <div className="text-white font-semibold text-lg">{title}</div>
            <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ n, title, desc }) {
  return (
    <div className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200">
          Step {n}
        </div>
        <div className="mt-3 text-white font-semibold text-lg">{title}</div>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
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
    });
  }, []);

  return (
    <PageTransition>
      <div className="bg-black">
        {/* Hero */}
        <section className="border-b border-white/10">
          <Container className="py-10 md:py-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                About RKR BrandTech Solutions
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                Tech-first services for modern businesses
              </h1>

              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                We help businesses in Kenya stay productive, secure, and
                professional—through Managed IT Support, practical Cybersecurity,
                and a Branding & Print Division.
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

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Support", v: "Remote & On-site" },
                { k: "Coverage", v: "Nationwide (Kenya-wide)" },
                { k: "Focus", v: "Security + Reliability" },
                { k: "Approach", v: "Practical & Professional" },
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

        {/* Mission & Differentiators */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="grid gap-4 md:grid-cols-2">
              <GlassCard
                icon="🎯"
                title="Our mission"
                desc="To provide reliable IT support and practical cybersecurity that businesses can understand, trust, and act on—while also helping them build a strong brand presence."
              />
              <GlassCard
                icon="✅"
                title="Why choose RKR"
                desc="We focus on clear communication, professional reporting, and security-first implementations. Our services are built to support SMEs and growing teams."
              />
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <GlassCard
                icon="🧠"
                title="Professional approach"
                desc="We document findings, share clear recommendations, and provide next steps—so decisions are easy."
              />
              <GlassCard
                icon="🛡️"
                title="Security-first mindset"
                desc="We prioritize safe configurations, MFA, backups, and hardening to reduce cyber risks."
              />
              <GlassCard
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
                From discovery to implementation, we keep everything clear and
                professional.
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

        {/* Founder section */}
        <section className="border-t border-white/10">
          <Container className="py-10 md:py-14">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-12 items-center">
                <div className="md:col-span-7">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200">
                    Founder
                  </div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                    Built on IT Support + IT Security expertise
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                    RKR BrandTech Solutions is driven by a tech-first mindset,
                    combining IT support experience with cybersecurity-focused
                    knowledge. Our goal is to deliver real value: stable systems,
                    reduced risk, and a professional business presence.
                  </p>

                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a
                      href="/portfolio"
                      className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
                    >
                      View Portfolio
                    </a>
                    <a
                      href="/contact"
                      className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
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
                          <span className="mt-1 h-2 w-2 rounded-full bg-green-500/70" />
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

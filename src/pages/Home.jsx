// src/pages/Home.jsx
import { useEffect } from "react";
import Container from "../components/Container";
import HeroSlider from "../components/HeroSlider";
import TrustSection from "../components/TrustSection";
import PageTransition from "../components/PageTransition";
import { setMeta } from "../utils/seo";

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rkr-glass-card group relative overflow-hidden rounded-2xl border border-green-500/10 bg-white/5 p-6 transition hover:border-green-500/40">
      <div className="relative z-10 flex items-start gap-3">
        <div className="h-11 w-11 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-lg">
          {icon}
        </div>
        <div>
          <div className="text-white font-semibold text-lg">{title}</div>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
        </div>
      </div>

      {/* subtle premium green hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/12 blur-3xl" />
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    setMeta({
      title: "RKR BrandTech Solutions | Managed IT • Cybersecurity • Branding",
      description:
        "Tech-first support for businesses in Kenya: Managed IT support (remote & on-site), practical cybersecurity, and a branding/print division for complete business growth.",
      url: "https://rkrbrandtech.com/",
      image: "https://rkrbrandtech.com/og-image.png",
    });
  }, []);

  return (
    <PageTransition>
      <div className="bg-black">
        <HeroSlider />

        {/* Quick highlights */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="grid gap-4 md:grid-cols-3">
              <FeatureCard
                icon="🧩"
                title="Managed IT & Remote Support"
                desc="Fast help via WhatsApp, email, and phone. Secure remote sessions when approved."
              />
              <FeatureCard
                icon="🛡️"
                title="Practical Cybersecurity"
                desc="Security checks, vulnerability reviews, Wi-Fi hardening, and clear reporting."
              />
              <FeatureCard
                icon="🎨"
                title="Branding Division"
                desc="Design, print, and branded merchandise to support your business presence."
              />
            </div>
          </Container>
        </section>

        {/* Trust / Testimonials */}
        <section className="border-t border-green-500/10">
          <Container className="py-10 md:py-14">
            <TrustSection />
          </Container>
        </section>

        {/* Core services overview */}
        <section className="border-t border-green-500/10">
          <Container className="py-10 md:py-14">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                What we do
              </div>
              <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
                Tech-first solutions for businesses in Kenya
              </h2>
              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                From stable IT systems to practical security improvements and professional branding—
                we help your business operate confidently.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <FeatureCard
                icon="💻"
                title="IT Support"
                desc="Workstations, software, printers, accounts, and general office IT troubleshooting."
              />
              <FeatureCard
                icon="📶"
                title="Network & Wi-Fi"
                desc="Wi-Fi setup, troubleshooting, router configuration, and office network stability checks."
              />
              <FeatureCard
                icon="🔐"
                title="Security Hardening"
                desc="MFA guidance, safer configurations, backup readiness, and risk reduction steps."
              />
              <FeatureCard
                icon="⚙️"
                title="Business Tech Setup"
                desc="Website, hosting/SSL, business email readiness, and cloud storage structure."
              />
            </div>

            {/* ✅ Premium CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/services"
                className="rkr-btn rkr-btn-primary rkr-btn-arrow text-center"
              >
                Explore Services <span>→</span>
              </a>

              <a
                href="/contact"
                className="rkr-btn rkr-btn-secondary rkr-btn-arrow text-center"
              >
                Book a Consultation <span>→</span>
              </a>
            </div>
          </Container>
        </section>

        {/* CTA band */}
        <section className="border-t border-green-500/10">
          <Container className="py-10 md:py-14">
            <div className="rounded-3xl border border-green-500/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Ready to improve your IT and security?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We provide remote support and Kenya-wide on-site visits (scheduled). Let’s discuss
                what your business needs.
              </p>

              {/* ✅ Premium CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/contact"
                  className="rkr-btn rkr-btn-primary rkr-btn-arrow text-center"
                >
                  Book a Consultation <span>→</span>
                </a>

                <a
                  href="/managed-it"
                  className="rkr-btn rkr-btn-secondary rkr-btn-arrow text-center"
                >
                  Remote Support <span>→</span>
                </a>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

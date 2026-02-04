import { useEffect } from "react";
import Container from "../components/Container";

function InfoCard({ title, desc }) {
  return (
    <div className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10">
        <div className="text-white font-semibold text-lg">{title}</div>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function BulletCard({ title, bullets }) {
  return (
    <div className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10">
        <div className="text-white font-semibold text-lg">{title}</div>
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

export default function ManagedIT() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="border-b border-white/10">
        <Container className="py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
              Managed IT & Remote Support
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
              Fast, Secure Remote Support for Businesses
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              We provide professional IT support via WhatsApp, phone, and email — with secure
              remote sessions when approved. On-site support is available nationwide
              (Kenya-wide) for business clients.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
              >
                Request Remote Support
              </a>

              <a
                href="https://wa.me/254729279513"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Support", v: "Remote + On-site" },
                { k: "Coverage", v: "Kenya-wide" },
                { k: "Clients", v: "SMEs & Offices" },
                { k: "Focus", v: "Speed + Security" },
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

      {/* How remote support works */}
      <section>
        <Container className="py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard
              title="Step 1: Tell us the issue"
              desc="Share what you need help with (screenshots, error messages, and what changed)."
            />
            <InfoCard
              title="Step 2: Quick diagnosis"
              desc="We identify the root cause and recommend the safest & fastest fix."
            />
            <InfoCard
              title="Step 3: Approved remote support"
              desc="If needed, we request approval to connect remotely and resolve the issue securely."
            />
          </div>
        </Container>
      </section>

      {/* What we can fix */}
      <section className="border-t border-white/10">
        <Container className="py-10 md:py-14">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
              Support Coverage
            </div>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
              What we can help you fix
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              Practical IT support for daily business operations — keeping systems stable,
              secure, and efficient.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <BulletCard
              title="Workstations & Users"
              bullets={[
                "Slow computers & performance issues",
                "Windows installation & system cleanup",
                "User account setup and access troubleshooting",
                "Software installation & updates",
                "Printer and scanning issues",
              ]}
            />
            <BulletCard
              title="Network & Business Systems"
              bullets={[
                "Wi-Fi connectivity and speed issues",
                "Router setup & network troubleshooting",
                "Office network stability checks",
                "Backup setup and restore testing",
                "Microsoft 365 / Google Workspace setup",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Security note */}
      <section className="border-t border-white/10">
        <Container className="py-10 md:py-14">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Security-first remote support ✅
            </h3>
            <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl">
              We only proceed with remote access after your approval. We also recommend
              enabling multi-factor authentication (MFA), backups, and secure passwords
              to reduce cyber risks.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/services"
                className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
              >
                View All Services
              </a>

              <a
                href="/contact"
                className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

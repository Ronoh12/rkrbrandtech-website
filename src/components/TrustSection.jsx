import Container from "./Container";

function StarRow() {
  return (
    <div className="flex gap-1 mt-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-green-400 text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

function GlowCard({ children, className = "" }) {
  function onMove(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
  }

  return (
    <div
      onMouseMove={onMove}
      className={`group rkr-hover-glow rounded-2xl border border-white/10 bg-white/5 transition
      hover:border-white/40 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)]
      ${className}`}
    >
      {/* content above glow layers */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section>
      <Container className="py-12 md:py-14">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
            Trusted Support
          </div>

          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-white">
            Businesses across Kenya trust RKR BrandTech
          </h2>

          <p className="mt-3 text-gray-300">
            Reliable IT support, cybersecurity guidance, and remote assistance for SMEs, offices,
            and growing teams.
          </p>
        </div>

        {/* Small trust badges */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Remote Support Available",
            "Kenya-wide On-site",
            "Security-first Approach",
            "Fast Response Time",
          ].map((item) => (
            <GlowCard key={item} className="px-5 py-4">
              <div className="text-center text-sm text-gray-200">{item}</div>
            </GlowCard>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              name: "SME Client",
              text: "Fast response and professional IT support. Issues resolved quickly and clearly explained.",
            },
            {
              name: "Office Team",
              text: "Our Wi-Fi and systems are now stable. Security recommendations were practical and helpful.",
            },
            {
              name: "Business Owner",
              text: "Reliable remote support and great communication. Feels like having an IT partner on call.",
            },
          ].map((t, i) => (
            <GlowCard key={i} className="p-6">
              <div className="text-sm text-gray-300 leading-relaxed">“{t.text}”</div>
              <StarRow />
              <div className="mt-4 text-sm font-semibold text-white">{t.name}</div>
            </GlowCard>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition"
          >
            Talk to us
          </a>
        </div>
      </Container>
    </section>
  );
}

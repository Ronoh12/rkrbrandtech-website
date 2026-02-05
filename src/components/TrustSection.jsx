import Container from "./Container";

export default function TrustSection() {
  return (
    <section className="border-t border-white/10">
      <Container className="py-14">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Trusted by growing businesses
          </h2>
          <p className="mt-3 text-gray-300">
            Reliable IT support, cybersecurity, and branding for SMEs.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Fast remote support and clear communication.",
            "Professional reports and security guidance.",
            "Reliable tech partner for our business."
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="text-gray-300 text-sm">“{t}”</div>
              <div className="mt-3 text-xs text-gray-500">
                — SME Client, Kenya
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

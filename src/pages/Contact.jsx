import { useEffect, useState } from "react";
import Container from "../components/Container";

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | RKR BrandTech";
  }, []);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    service: "Managed IT Support",
    location: "",
    message: "",
  });

  const whatsappBase = "https://wa.me/254729279513?text=";
  const emailTo = "rkrcybertech@gmail.com";

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `RKR BrandTech Support Request
Name: ${form.name}
Phone: ${form.phone}
Company: ${form.company || "N/A"}
Service: ${form.service}
Location: ${form.location || "N/A"}

Request:
${form.message}`;

    const waLink = whatsappBase + encodeURIComponent(text);

    const subject = encodeURIComponent(`RKR Request: ${form.service} (${form.name})`);
    const body = encodeURIComponent(text);
    const mailto = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    // Open WhatsApp first
    window.open(waLink, "_blank");

    // Then open email draft
    window.location.href = mailto;
  };

  const quickWhatsApp =
    whatsappBase +
    encodeURIComponent(
      "Hi RKR BrandTech Solutions. I’d like to book a consultation / request support."
    );

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="border-b border-white/10">
        <Container className="py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
              Contact RKR BrandTech Solutions
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
              Book a Consultation
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              Tell us what you need—Managed IT Support, Cybersecurity, Business Tech setup,
              or Branding Division services. We respond quickly.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section>
        <Container className="py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <GlassCard>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-white font-semibold text-xl">
                      Request a Call Back / Quote
                    </div>
                    <div className="mt-1 text-sm text-gray-300">
                      Submit details and we’ll respond via WhatsApp + Email.
                    </div>
                  </div>
                  <div className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-300">
                    Remote support available ✅
                  </div>
                </div>

                <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs text-gray-400">Full Name</label>
                      <input
                        required
                        value={form.name}
                        onChange={handleChange("name")}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-green-500/40"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Phone Number</label>
                      <input
                        required
                        value={form.phone}
                        onChange={handleChange("phone")}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-green-500/40"
                        placeholder="+254..."
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs text-gray-400">Company / Organization</label>
                      <input
                        value={form.company}
                        onChange={handleChange("company")}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-green-500/40"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-gray-400">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={handleChange("service")}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-green-500/40"
                      >
                        <option>Managed IT Support</option>
                        <option>Remote Support</option>
                        <option>Cybersecurity Check</option>
                        <option>Business Tech Setup</option>
                        <option>Branding & Print Division</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400">
                      Location (Nationwide support in Kenya)
                    </label>
                    <input
                      value={form.location}
                      onChange={handleChange("location")}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-green-500/40"
                      placeholder="Town / County"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-400">Describe your request</label>
                    <textarea
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange("message")}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-green-500/40"
                      placeholder="What do you need help with? Any errors? Any deadlines?"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
                    >
                      Submit Request
                    </button>

                    <a
                      href={quickWhatsApp}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    Remote access is only done with your approval. We prioritize safe configurations and data protection.
                  </p>
                </form>
              </GlassCard>
            </div>

            {/* Contact cards */}
            <div className="lg:col-span-5 space-y-4">
              <GlassCard>
                <div className="text-white font-semibold text-lg">WhatsApp</div>
                <p className="mt-1 text-sm text-gray-300">
                  Fastest response channel for support and bookings.
                </p>
                <a
                  href={quickWhatsApp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500 transition"
                >
                  +254 729 279 513
                </a>
              </GlassCard>

              <GlassCard>
                <div className="text-white font-semibold text-lg">Email</div>
                <p className="mt-1 text-sm text-gray-300">
                  Use email for detailed requests, documents, and corporate communication.
                </p>
                <a
                  href="mailto:rkrcybertech@gmail.com"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white hover:border-white/30 transition"
                >
                  rkrcybertech@gmail.com
                </a>
                <div className="mt-2 text-xs text-gray-400">(Will be updated later)</div>
              </GlassCard>

              <GlassCard>
                <div className="text-white font-semibold text-lg">
                  What happens after you contact us?
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  {[
                    "We confirm your request and ask a few quick questions.",
                    "We recommend the best service/package for your case.",
                    "We schedule remote support or Kenya-wide on-site support (if needed).",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-green-500/70" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

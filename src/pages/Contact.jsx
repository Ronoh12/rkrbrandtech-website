import { useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import { setMeta } from "../utils/seo";
import PageTransition from "../components/PageTransition";

const FORM_ENDPOINT = "https://formspree.io/f/mojnawvw";

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7.5A3.5 3.5 0 0 1 7.5 4h9A3.5 3.5 0 0 1 20 7.5v9A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6.5 8l4.9 3.45c.37.26.85.26 1.22 0L17.5 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21a9 9 0 0 0 7.65-13.76A9 9 0 0 0 3.1 16.65L2.5 21.5l4.95-.6A8.95 8.95 0 0 0 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 8.8c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5.2.4.7 1.7.7 1.8 0 .1 0 .3-.1.4-.1.1-.2.3-.3.4-.1.1-.3.3-.1.6.2.3.8 1.3 1.8 2.1 1.2 1 2.2 1.3 2.5 1.4.3.1.5 0 .7-.2.2-.2.8-.9 1-1.2.2-.3.4-.2.6-.1.2.1 1.5.7 1.7.8.2.1.4.2.4.3 0 .1 0 .7-.3 1.3-.3.6-1.7 1.2-2.3 1.2-.6 0-1.3.1-4.3-1.2-3-1.3-5-4.5-5.1-4.7-.1-.2-1.2-1.6-1.2-3.1S9 9.4 9.2 8.8Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

function IconCopy(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 9h9a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 15H5a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h7a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContactCard({ icon, title, value, hint, href, copyText }) {
  const [copied, setCopied] = useState(false);

  async function doCopy(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(copyText || value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <a
      href={href}
      className="group w-full block relative overflow-visible rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/40"
    >
      {/* hover green shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="h-11 w-11 shrink-0 rounded-2xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-green-200">
            {icon}
          </div>

          <div className="min-w-0">
            <div className="text-xs text-gray-400">{title}</div>
            <div className="mt-1 text-base font-semibold text-white break-words">
              {value}
            </div>
            {hint ? (
              <div className="mt-2 text-xs text-gray-400">{hint}</div>
            ) : null}
          </div>
        </div>

        {/* Copy + Tooltip */}
        <div className="relative shrink-0">
          <button
            onClick={doCopy}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-gray-200 hover:border-white/30 hover:text-white transition"
            aria-label="Copy"
            type="button"
          >
            <IconCopy className="h-4 w-4" />
            Copy
          </button>

          {/* Tooltip (below button) */}
          <div
            className={`pointer-events-none absolute right-0 top-[calc(100%+8px)] whitespace-nowrap rounded-lg border border-white/10 bg-black/80 px-2 py-1 text-[11px] text-green-200 shadow-lg transition ${
              copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
            }`}
          >
            Copied ✅
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    setMeta({
      title: "Contact | RKR BrandTech Solutions",
      description:
        "Contact RKR BrandTech Solutions for Managed IT support, cybersecurity checks, remote support, and branding for businesses across Kenya.",
    });
  }, []);

  const whatsappNumber = "254729279513";

  const whatsappLink = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Hi RKR BrandTech Solutions, I would like to request support/consultation."
    )}`;
  }, [whatsappNumber]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageTransition>
      <div className="bg-black min-h-screen">
        {/* Hero */}
        <section className="border-b border-white/10">
          <Container className="py-10 md:py-14">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                Contact
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                Let’s talk about your needs
              </h1>
              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                Tell us what you need—Managed IT, remote support, cybersecurity checks,
                or branding. We’ll reply via email or WhatsApp.
              </p>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="grid gap-6 lg:grid-cols-12 items-start">
              {/* Left: Form */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
                  <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          Send a request
                        </h2>
                        <p className="mt-1 text-sm text-gray-300">
                          We respond fast. Remote sessions are secure and only done with
                          your approval.
                        </p>
                      </div>

                      {/* Icon-only WhatsApp */}
                      <a
                        href={whatsappLink}
                        className="inline-flex items-center justify-center h-11 w-11 rounded-2xl border border-white/10 bg-black/30 text-green-200 hover:border-white/30 hover:text-green-100 transition"
                        aria-label="WhatsApp us"
                        title="WhatsApp us"
                      >
                        <IconWhatsApp className="h-5 w-5" />
                      </a>
                    </div>

                    {status === "success" && (
                      <div className="mt-5 rounded-2xl border border-green-500/25 bg-green-500/10 px-4 py-3 text-sm text-green-200">
                        ✅ Message sent successfully. We’ll get back to you shortly.
                      </div>
                    )}

                    {status === "error" && (
                      <div className="mt-5 rounded-2xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                        ❌ Something went wrong. Please try again or message us on WhatsApp.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                          <div className="mb-2 text-sm font-medium text-gray-200">
                            Full name
                          </div>
                          <input
                            name="name"
                            type="text"
                            required
                            placeholder="e.g., Name / Company name"
                            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-green-500/40 focus:ring-2 focus:ring-green-500/10"
                          />
                        </label>

                        <label className="block">
                          <div className="mb-2 text-sm font-medium text-gray-200">
                            Email
                          </div>
                          <input
                            name="email"
                            type="email"
                            required
                            placeholder="e.g., you@company.com"
                            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-green-500/40 focus:ring-2 focus:ring-green-500/10"
                          />
                        </label>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                          <div className="mb-2 text-sm font-medium text-gray-200">
                            Phone / WhatsApp
                          </div>
                          <input
                            name="phone"
                            type="text"
                            placeholder="e.g., +254 7xx xxx xxx"
                            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-green-500/40 focus:ring-2 focus:ring-green-500/10"
                          />
                        </label>

                        <label className="block">
                          <div className="mb-2 text-sm font-medium text-gray-200">
                            Service needed
                          </div>
                          <select
                            name="service"
                            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-green-500/40 focus:ring-2 focus:ring-green-500/10"
                            defaultValue="Managed IT Support"
                          >
                            <option>Managed IT Support</option>
                            <option>Remote Support</option>
                            <option>Cybersecurity Check</option>
                            <option>Branding & Print</option>
                            <option>Other</option>
                          </select>
                        </label>
                      </div>

                      <label className="block">
                        <div className="mb-2 text-sm font-medium text-gray-200">
                          Message
                        </div>
                        <textarea
                          name="message"
                          rows={6}
                          required
                          placeholder="Describe the issue (devices, internet/network, email, security concerns, deadline, location if on-site)."
                          className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-green-500/40 focus:ring-2 focus:ring-green-500/10"
                        />
                      </label>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="inline-flex w-full items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition disabled:opacity-60"
                        >
                          {status === "sending" ? "Sending..." : "Send Message"}
                        </button>

                        <a
                          href={whatsappLink}
                          className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition"
                        >
                          Message on WhatsApp
                        </a>
                      </div>

                      <p className="text-xs text-gray-500 leading-relaxed">
                        By sending this message, you agree that we may contact you via
                        email/WhatsApp to discuss your request.
                      </p>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right: Contact info + What happens next */}
              <div className="lg:col-span-5 space-y-4 lg:min-w-[360px]">
                <ContactCard
                  icon={<IconMail className="h-5 w-5" />}
                  title="Business Email"
                  value="info@rkrbrandtech.com"
                  hint="Professional replies & quotations"
                  href="mailto:info@rkrbrandtech.com"
                  copyText="info@rkrbrandtech.com"
                />

                <ContactCard
                  icon={<IconWhatsApp className="h-5 w-5" />}
                  title="WhatsApp"
                  value="+254 729 279 513"
                  hint="Fast support & scheduling"
                  href={whatsappLink}
                  copyText="+254729279513"
                />

                {/* What happens next */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/10 blur-3xl" />
                  <div className="relative z-10">
                    <div className="text-white font-semibold text-base">
                      What happens after you contact us?
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      {[
                        "We confirm your request and ask a few quick questions.",
                        "We recommend the best service/package for your case.",
                        "We schedule remote support or Kenya-wide on-site support (if needed).",
                      ].map((x) => (
                        <li key={x} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-green-500/80" />
                          <span className="leading-relaxed">{x}</span>
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

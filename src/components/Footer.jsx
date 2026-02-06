import Container from "./Container";
import logo from "../assets/rkr_logo_transparent.png";

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

function ContactPill({ href, icon, label, value, hint }) {
  function onMove(e) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width) * 100;
    const my = ((e.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${mx}%`);
    el.style.setProperty("--my", `${my}%`);
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      onMouseMove={onMove}
      className="group rkr-hover-glow relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4
                 min-h-[88px] flex items-center"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {/* premium shine sweep */}
      <span className="rkr-shine" />

      <div className="relative z-10 flex items-center gap-3">
        {/* Smaller icon */}
        <div className="h-9 w-9 shrink-0 rounded-xl border border-green-500/25 bg-green-500/10 flex items-center justify-center text-green-200">
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-[11px] text-gray-200/70">{label}</div>

          {/* VALUE — force single line, no clipping */}
          <div className="mt-0.5 font-semibold text-white text-sm leading-tight whitespace-nowrap">
            {value}
          </div>

          {hint ? (
            <div className="mt-0.5 text-[11px] text-gray-200/60 whitespace-nowrap">
              {hint}
            </div>
          ) : null}
        </div>
      </div>
    </a>
  );
}

function MiniFeature({ title, desc }) {
  return (
    <div className="group rkr-hover-glow relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/35 hover:-translate-y-0.5">
      <span className="rkr-shine" />
      <div className="relative z-10">
        <div className="text-green-300 text-sm font-semibold">{title}</div>
        <div className="mt-2 text-sm text-gray-100/80 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      {/* Ambient blobs (very subtle) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl opacity-60 animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-green-500/8 blur-3xl opacity-60 animate-pulse" />

      <Container className="py-12">
        {/* Glass panel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.55)]">
          {/* Watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <img
              src={logo}
              alt="RKR watermark"
              className="w-[560px] md:w-[760px] object-contain opacity-[0.22]"
            />
          </div>

          {/* Premium border gradient */}
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
          </div>

          <div className="relative p-8 md:p-10 grid gap-10 md:grid-cols-12">
            {/* Left */}
            <div className="md:col-span-7">
              <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                Tech-first support for modern businesses
              </h3>
              <p className="mt-2 text-sm text-gray-200/90 max-w-2xl leading-relaxed text-center">
                RKR BrandTech Solutions provides Managed IT Support (remote & on-site), practical
                Cybersecurity, and a Branding Division to help businesses grow securely and professionally.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3 text-center">
                <MiniFeature
                  title="Remote Support"
                  desc="Fast help via WhatsApp/phone/email + secure remote sessions."
                />
                <MiniFeature
                  title="Cybersecurity"
                  desc="Assessments, Wi-Fi hardening, MFA, backups & recovery planning."
                />
                <MiniFeature
                  title="Branding Division"
                  desc="Brand identity, print & merchandise for complete presence."
                />
              </div>
            </div>

            {/* Middle */}
            <div className="md:col-span-2">
              <div className="text-sm font-semibold text-white text-center">Quick Links</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-200/90 text-center">
                {[
                  ["Services", "/services"],
                  ["Remote Support", "/managed-it"],
                  ["Portfolio", "/portfolio"],
                  ["Insights", "/insights"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a className="hover:text-green-400 transition" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="md:col-span-3">
              <div className="text-sm font-semibold text-white text-center">Contact</div>

              <div className="mt-4 space-y-3 text-center">
                <ContactPill
                  href="https://wa.me/254729279513"
                  icon={<IconWhatsApp className="h-4 w-4" />}
                  label="WhatsApp"
                  value="+254 729 279 513"
                  hint="Fast support & scheduling"
                />

                <ContactPill
                  href="mailto:info@rkrbrandtech.com"
                  icon={<IconMail className="h-4 w-4" />}
                  label="Email"
                  value="info@rkrbrandtech.com"
                  hint="Replies & quotations"
                />

                <a
                  href="/rkr-company-profile.pdf"
                  download
                  className="group relative overflow-hidden rounded-2xl bg-green-600 px-4 py-3 text-sm font-semibold text-white
                             hover:bg-green-500 transition text-center block shadow-[0_18px_50px_rgba(34,197,94,0.18)]"
                >
                  {/* shine */}
                  <span className="rkr-shine" />
                  <span className="relative z-10">Download Company Profile (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative border-t border-white/10 px-8 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="text-xs text-gray-200/70">
              © {year} RKR BrandTech Solutions. All rights reserved.
            </div>
            <div className="text-xs text-gray-200/50">Secure • Reliable • Modern</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

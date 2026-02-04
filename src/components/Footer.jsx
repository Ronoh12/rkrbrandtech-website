import logo from "../assets/rkr_logo_transparent.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black overflow-hidden">
      {/* Footer outer background */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        {/* GLASS OVERLAY PANEL */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl">
          {/* ✅ Watermark INSIDE the overlay (centered properly) */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <img
              src={logo}
              alt="RKR watermark"
              className="w-[620px] md:w-[760px] object-contain opacity-[0.28]"
            />
          </div>

          {/* ✅ Soft dark tint for readability but still transparent */}
          <div className="pointer-events-none absolute inset-0 bg-black/20" />

          {/* CONTENT */}
          <div className="relative p-8 md:p-10 grid gap-10 md:grid-cols-12">
            {/* LEFT: Showcase */}
            <div className="md:col-span-7">
              <h3 className="text-white text-xl font-bold">
                Tech-first support for modern businesses
              </h3>
              <p className="mt-2 text-sm text-gray-200/90 max-w-2xl leading-relaxed">
                RKR BrandTech Solutions provides Managed IT Support (remote & on-site),
                practical Cybersecurity, and a Branding Division to help businesses grow
                securely and professionally.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                <div className="rkr-glass-card rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/40">
                <div className="relative z-10"></div>
                  <div className="text-green-300 text-sm font-semibold">
                    Remote Support
                  </div>
                  <div className="mt-2 text-sm text-gray-100/80">
                    Fast help via WhatsApp/phone/email + secure remote sessions.
                  </div>
                </div>

                <div className="rkr-glass-card rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/40">
                <div className="relative z-10"></div>
                  <div className="text-green-300 text-sm font-semibold">
                    Cybersecurity
                  </div>
                  <div className="mt-2 text-sm text-gray-100/80">
                    Assessments, Wi-Fi hardening, MFA, backups & recovery planning.
                  </div>
                </div>

                <div className="rkr-glass-card rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/40">
                <div className="relative z-10"></div>
                  <div className="text-green-300 text-sm font-semibold">
                    Branding Division
                  </div>
                  <div className="mt-2 text-sm text-gray-100/80">
                    Brand identity, print & merchandise for complete business presence.
                  </div>
                </div>
              </div>
            </div>

            {/* MIDDLE: Links */}
            <div className="md:col-span-2">
              <div className="text-sm font-semibold text-white">Quick Links</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-200/90">
                <li>
                  <a className="hover:text-green-500 transition" href="/services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-500 transition" href="/managed-it">
                    Remote Support
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-500 transition" href="/portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-500 transition" href="/insights">
                    Insights
                  </a>
                </li>
                <li>
                  <a className="hover:text-green-500 transition" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT: Contact */}
            <div className="md:col-span-3">
              <div className="text-sm font-semibold text-white">Contact</div>

              <div className="mt-4 space-y-3">
                <a
                  className="rkr-glass-card block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/40"
                  href="https://wa.me/254729279513"
                  target="_blank"
                  rel="noreferrer"
                >
                    <div className="relative z-10"></div>
                  <div className="text-xs text-gray-200/70">WhatsApp</div>
                  <div className="mt-1 font-semibold text-white">
                    +254 729 279 513
                  </div>
                </a>

                <a
                  className="rkr-glass-card block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/40"
                  href="mailto:rkrcybertech@gmail.com"
                >
                    <div className="relative z-10"></div>
                  <div className="text-xs text-gray-200/70">Email</div>
                  <div className="mt-1 font-semibold text-white">
                    rkrcybertech@gmail.com
                  </div>
                  <div className="mt-1 text-xs text-gray-200/50">
                    (Will be updated to official domain)
                  </div>
                </a>

                <a
                    href="/rkr-company-profile.pdf"
                    download
                    className="w-full rounded-2xl bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center block"
                >
                    Download Company Profile (PDF)
                </a>

              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative border-t border-white/10 px-8 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="text-xs text-gray-200/70">
              © {year} RKR BrandTech Solutions. All rights reserved.
            </div>
            <div className="text-xs text-gray-200/50">
              Secure • Reliable • Modern
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

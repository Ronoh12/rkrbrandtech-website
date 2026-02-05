import { useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import Skeleton from "../components/Skeleton";
import PageTransition from "../components/PageTransition";
import { setMeta } from "../utils/seo";

function PortfolioCard({ title, desc, tags }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:-translate-y-0.5">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/12 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="text-white font-semibold text-lg">{title}</div>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  const items = useMemo(
    () => [
      {
        id: 1,
        title: "SME IT Support Setup",
        desc: "Workstations, printers, user accounts, and basic stability improvements for a small office.",
        tags: ["IT Support", "On-site", "Setup"],
      },
      {
        id: 2,
        title: "Wi-Fi & Router Hardening",
        desc: "Improved Wi-Fi stability, better configuration, and security hardening guidance.",
        tags: ["Network", "Security", "Wi-Fi"],
      },
      {
        id: 3,
        title: "Remote Support for Business Systems",
        desc: "Secure remote troubleshooting and support with clear communication and documentation.",
        tags: ["Remote Support", "Helpdesk", "SME"],
      },
      {
        id: 4,
        title: "Email Security & MFA Guidance",
        desc: "Reduced risk of account takeover by guiding MFA setup and safer password practices.",
        tags: ["Email", "MFA", "Security"],
      },
      {
        id: 5,
        title: "Cybersecurity Check (Non-invasive)",
        desc: "Baseline security review, quick wins, and a clear report with next steps.",
        tags: ["Cyber Check", "Reporting", "SME"],
      },
      {
        id: 6,
        title: "Branding & Print Delivery",
        desc: "Brand assets and merchandise support through our branding division.",
        tags: ["Branding", "Print", "Merch"],
      },
    ],
    []
  );

  useEffect(() => {
    setMeta({
      title: "Portfolio | RKR BrandTech Solutions",
      description:
        "Examples of IT support, cybersecurity checks, remote support, and branding work delivered for businesses.",
      url: "https://rkrbrandtech.com/portfolio",
      image: "https://rkrbrandtech.com/og-image.png",
    });

    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <PageTransition>
      <div className="bg-black min-h-screen">
        {/* Hero */}
        <section className="border-b border-white/10">
          <Container className="py-10 md:py-14">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                Portfolio
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                Work delivered & capabilities
              </h1>

              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                A snapshot of the type of support and security improvements we
                deliver for businesses.
              </p>
            </div>
          </Container>
        </section>

        {/* Grid */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Highlights
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  More case studies can be added as we complete client projects.
                </p>
              </div>

              <a
                href="/contact"
                className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500 transition"
              >
                Request Support
              </a>
            </div>

            <div className="mt-8">
              {loading ? (
                <div className="grid gap-4 md:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <Skeleton className="h-6 w-2/3 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-11/12 mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <div className="flex gap-2 flex-wrap">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-14" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-3">
                  {items.map((x) => (
                    <PortfolioCard
                      key={x.id}
                      title={x.title}
                      desc={x.desc}
                      tags={x.tags}
                    />
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

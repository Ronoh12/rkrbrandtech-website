// src/pages/Insights.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import Skeleton from "../components/Skeleton";
import PageTransition from "../components/PageTransition";
import { setMeta } from "../utils/seo";
import { insights } from "../data/insights";

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={[
        "group relative inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-sm font-semibold text-white",
        "shadow-[0_18px_60px_-22px_rgba(34,197,94,0.65)] transition",
        "hover:bg-green-500 hover:-translate-y-0.5 active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/40",
        className,
      ].join(" ")}
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </a>
  );
}

function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={[
        "group relative inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white",
        "backdrop-blur transition",
        "hover:border-white/35 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25",
        className,
      ].join(" ")}
    >
      <span className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 transition group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </a>
  );
}

function PostCard({ post }) {
  return (
    <NavLink
      to={`/insights/${post.slug}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30 hover:-translate-y-0.5"
    >
      {/* Ultra premium glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/14 blur-3xl" />
        <div className="absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Soft shine */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-b from-white/8 to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200">
          {post.tag}
        </div>

        <div className="mt-3 text-white font-semibold text-lg">{post.title}</div>

        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{post.excerpt}</p>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <span>{post.date}</span>
          <span className="text-green-200 group-hover:text-green-100 transition">
            Read →
          </span>
        </div>
      </div>
    </NavLink>
  );
}

export default function Insights() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMeta({
      title: "Insights | RKR BrandTech Solutions",
      description:
        "Practical IT support and cybersecurity insights for SMEs and growing businesses in Kenya.",
      url: "https://rkrbrandtech.com/insights",
      image: "https://rkrbrandtech.com/og-image.png",
    });

    const t = setTimeout(() => setLoading(false), 700);
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
                Insights
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
                Practical IT & Security insights
              </h1>

              <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
                Tips, guides, and best practices for businesses across Kenya — focused on
                reliability, security, and real outcomes.
              </p>

              {/* Optional hero CTAs */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <PrimaryButton href="/contact">Book a Consultation</PrimaryButton>
                <SecondaryButton href="/services">Explore Services</SecondaryButton>
              </div>
            </div>
          </Container>
        </section>

        {/* List */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="mx-auto text-center">
                <h2 className="text-xl md:text-2xl font-bold text-green-400">
                  Latest posts
                </h2>
                <p className="mt-1 text-sm text-gray-400">Click a post to read more.</p>
              </div>

              <PrimaryButton href="/contact" className="w-full sm:w-auto">
                Book a Consultation
              </PrimaryButton>
            </div>

            <div className="mt-8">
              {loading ? (
                <div className="grid gap-4 md:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-60">
                        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/8 blur-3xl" />
                      </div>

                      <Skeleton className="h-5 w-2/3 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-11/12 mb-2" />
                      <Skeleton className="h-4 w-3/4 mb-4" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-3">
                  {insights.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Bottom CTA band */}
        <section className="border-t border-white/10">
          <Container className="py-10 md:py-14">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-green-950 p-7 md:p-10 text-center">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

              <h3 className="text-xl md:text-2xl font-bold text-white">
                Need help with IT or security?
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Book a consultation and we’ll recommend the best service/package for your case.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <PrimaryButton href="/contact">Book a Consultation</PrimaryButton>
                <SecondaryButton href="/pricing">View Pricing</SecondaryButton>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}

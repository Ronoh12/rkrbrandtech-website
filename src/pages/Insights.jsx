import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/Container";
import Skeleton from "../components/Skeleton";
import PageTransition from "../components/PageTransition";
import { setMeta } from "../utils/seo";
import { insights } from "../data/insights";

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
                Tips, guides, and best practices for businesses across Kenya — focused on reliability,
                security, and real outcomes.
              </p>
            </div>
          </Container>
        </section>

        {/* List */}
        <section>
          <Container className="py-10 md:py-14">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Latest posts
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Click a post to read more.
                </p>
              </div>

              <a
                href="/contact"
                className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500 transition"
              >
                Book a Consultation
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
                    <NavLink
                      key={post.slug}
                      to={`/insights/${post.slug}`}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/30 hover:-translate-y-0.5"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-green-500/12 blur-3xl" />
                      </div>

                      <div className="relative z-10">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200">
                          {post.tag}
                        </div>

                        <div className="mt-3 text-white font-semibold text-lg">
                          {post.title}
                        </div>

                        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span className="text-green-200 group-hover:text-green-100 transition">
                            Read →
                          </span>
                        </div>
                      </div>
                    </NavLink>
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

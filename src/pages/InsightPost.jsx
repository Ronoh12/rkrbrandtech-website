import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { insightsPosts } from "../data/insightsData";

export default function InsightPost() {
  const { slug } = useParams();

  const idx = useMemo(() => insightsPosts.findIndex((p) => p.slug === slug), [slug]);
  const post = idx >= 0 ? insightsPosts[idx] : null;

  const prev = idx > 0 ? insightsPosts[idx - 1] : null;
  const next = idx >= 0 && idx < insightsPosts.length - 1 ? insightsPosts[idx + 1] : null;

  useEffect(() => {
    document.title = post ? `${post.title} | RKR BrandTech` : "Insights | RKR BrandTech";
  }, [post]);

  if (!post) {
    return (
      <div className="bg-black">
        <Container className="py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <h1 className="text-2xl font-bold text-white">Post not found</h1>
            <p className="mt-2 text-gray-300">Go back to Insights and choose another post.</p>
            <a
              href="/insights"
              className="mt-5 inline-flex rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold hover:bg-green-500 transition"
            >
              Back to Insights
            </a>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-black">
      {/* Sticky Back button */}
      <a
        href="/insights"
        className="fixed bottom-5 left-5 z-40 rounded-full border border-white/10 bg-black/70 backdrop-blur px-4 py-3 text-sm text-white hover:border-white/30 transition"
      >
        ← Back to Insights
      </a>

      <section className="border-b border-white/10">
        <Container className="py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
              {post.title}
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              {post.content.map((block, i) => (
                <div key={i} className={i === 0 ? "" : "mt-6"}>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    {block.h}
                  </h2>
                  <p className="mt-2 text-sm md:text-base text-gray-300 leading-relaxed">
                    {block.p}
                  </p>
                </div>
              ))}
            </div>

            {/* Prev / Next */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {prev ? (
                <a
                  href={`/insights/${prev.slug}`}
                  className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/40 transition"
                >
                  <div className="relative z-10">
                    <div className="text-xs text-gray-400">Previous</div>
                    <div className="mt-1 font-semibold text-white">{prev.title}</div>
                  </div>
                </a>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-400 text-sm">
                  No previous post
                </div>
              )}

              {next ? (
                <a
                  href={`/insights/${next.slug}`}
                  className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/40 transition"
                >
                  <div className="relative z-10">
                    <div className="text-xs text-gray-400">Next</div>
                    <div className="mt-1 font-semibold text-white">{next.title}</div>
                  </div>
                </a>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-gray-400 text-sm">
                  No next post
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
              >
                Book a Consultation
              </a>
              <a
                href="/insights"
                className="rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
              >
                Back to Insights
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

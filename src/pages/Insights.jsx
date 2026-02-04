import { useEffect, useMemo, useState } from "react";
import Container from "../components/Container";
import { insightsPosts } from "../data/insightsData";

function PostCard({ post }) {
  return (
    <div className="rkr-glass-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/40">
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs text-green-200">
            {post.category}
          </div>
          <div className="text-xs text-gray-400">{post.date}</div>
        </div>

        <h3 className="mt-4 text-white font-semibold text-xl leading-snug">
          {post.title}
        </h3>

        <p className="mt-2 text-sm text-gray-300 leading-relaxed">
          {post.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={`/insights/${post.slug}`}
            className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-500 transition text-center"
          >
            Read More
          </a>
          <a
            href="/contact"
            className="rounded-xl border border-white/15 bg-black/30 px-5 py-3 text-sm font-semibold text-white hover:border-white/30 transition text-center"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Insights() {
  useEffect(() => {
    document.title = "Insights | RKR BrandTech";
  }, []);

  const posts = useMemo(() => insightsPosts, []);
  const categories = ["All", "Cybersecurity", "Managed IT", "Business Tech", "Branding"];
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category === active);
  }, [posts, active]);

  return (
    <div className="bg-black">
      <section className="border-b border-white/10">
        <Container className="py-10 md:py-14">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-green-500/25 bg-green-500/10 px-4 py-2 text-xs text-green-200">
              Insights
            </div>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
              Guides, Tips & Business Security Insights
            </h1>

            <p className="mt-3 text-sm md:text-base text-gray-300 leading-relaxed">
              Practical articles to help businesses stay secure, productive, and professional.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-xl text-sm border transition ${
                  active === c
                    ? "border-green-500/35 bg-green-500/10 text-green-200"
                    : "border-white/10 bg-white/5 text-gray-200 hover:border-white/25"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

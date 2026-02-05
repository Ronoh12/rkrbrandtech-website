import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { setMeta } from "../utils/seo";
import { insights } from "../data/insights";
import PageTransition from "../components/PageTransition";

export default function InsightPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const index = insights.findIndex((p) => p.slug === slug);
  const post = index >= 0 ? insights[index] : null;

  useEffect(() => {
    if (!post) {
      navigate("/insights", { replace: true });
      return;
    }

    setMeta({
      title: `${post.title} | RKR Insights`,
      description: post.excerpt,
    });
  }, [post, navigate]);

  if (!post) return null;

  const prev = index > 0 ? insights[index - 1] : null;
  const next = index < insights.length - 1 ? insights[index + 1] : null;

  return (
    <PageTransition>
      <div className="bg-black min-h-screen">
        <Container className="py-14">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs text-gray-400">{post.date}</div>

            <h1 className="mt-2 text-3xl md:text-5xl font-bold text-white">
              {post.title}
            </h1>

            <p className="mt-4 text-gray-300 leading-relaxed">{post.excerpt}</p>

            {/* Content */}
            {post.content?.length ? (
              <div className="mt-8 space-y-4">
                {post.content.map((p, i) => (
                  <p key={i} className="text-gray-200 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-gray-300">
                Full article content coming soon.
              </div>
            )}

            {/* Prev / Next */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {prev ? (
                <Link
                  to={`/insights/${prev.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/35 transition"
                >
                  <div className="text-xs text-gray-400">Previous</div>
                  <div className="mt-1 text-white font-semibold">{prev.title}</div>
                </Link>
              ) : (
                <div />
              )}

              {next ? (
                <Link
                  to={`/insights/${next.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/35 transition"
                >
                  <div className="text-xs text-gray-400">Next</div>
                  <div className="mt-1 text-white font-semibold">{next.title}</div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </Container>

        {/* Sticky Back */}
        <Link
          to="/insights"
          className="fixed bottom-5 left-5 z-50 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-sm text-white backdrop-blur hover:border-white/30 transition"
        >
          ← Back to Insights
        </Link>
      </div>
    </PageTransition>
  );
}

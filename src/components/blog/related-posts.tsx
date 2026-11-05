import Link from "next/link";
import { blogPosts } from "@/lib/blog-meta";

/** Up to three other posts, best matches first (same category, then shared tags, then newest). */
export function RelatedPosts({ slug }: { slug: string }) {
  const current = blogPosts.find((p) => p.slug === slug);
  if (!current) return null;

  const related = blogPosts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      p,
      score: (p.category === current.category ? 2 : 0) + p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || b.p.publishedAt.localeCompare(a.p.publishedAt))
    .slice(0, 3)
    .map((x) => x.p);

  if (related.length === 0) return null;

  return (
    <nav aria-labelledby="related-posts-heading" className="mt-10">
      <h2 id="related-posts-heading" className="text-xl font-semibold mb-4">Keep reading</h2>
      <ul className="grid gap-4 sm:grid-cols-3">
        {related.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="block h-full rounded-2xl border bg-card p-4 transition-shadow hover:shadow-md"
            >
              <span className="text-xs text-muted-foreground">{p.category}</span>
              <span className="mt-1 block font-medium leading-snug">{p.title}</span>
              <span className="mt-2 block text-sm text-muted-foreground line-clamp-3">{p.excerpt}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

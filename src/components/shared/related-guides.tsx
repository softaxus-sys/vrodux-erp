import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RELATED_GUIDES } from "@/lib/related-guides";

/** "Related guides" block for a feature or industry page. Renders nothing if the page has no entry. */
export function RelatedGuides({ path }: { path: string }) {
  const guides = RELATED_GUIDES[path];
  if (!guides || guides.length === 0) return null;

  return (
    <section aria-labelledby="related-guides-h" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 id="related-guides-h" className="text-2xl font-semibold tracking-tight">Related guides</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="group block h-full rounded-2xl border bg-card p-5 transition-colors hover:border-brand-500/40">
                <span className="font-medium leading-snug">{g.title}</span>
                <span className="mt-1.5 block text-sm text-muted-foreground">{g.desc}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                  Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

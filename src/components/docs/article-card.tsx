import Link from "next/link";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { DocsArticle } from "@/components/docs/docs-data";

export function ArticleCard({ article }: { article: DocsArticle }) {
  return (
    <Link
      href={`/docs/${article.categorySlug}/${article.slug}`}
      className="group block p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      {article.placeholder && (
        <Badge variant="outline" className="mb-3 text-xs">
          Placeholder
        </Badge>
      )}
      <h3 className="font-semibold mb-2 group-hover:text-brand-500 transition-colors leading-snug">
        {article.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{article.summary}</p>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="w-3.5 h-3.5" />
        {article.readTime} min read
      </div>
    </Link>
  );
}

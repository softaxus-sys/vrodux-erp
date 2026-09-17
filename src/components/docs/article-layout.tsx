import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarkdownLite } from "@/components/docs/markdown-lite";
import type { DocsArticle, DocsCategory } from "@/components/docs/docs-data";

interface ArticleLayoutProps {
  article: DocsArticle;
  category: DocsCategory;
  nextArticle?: DocsArticle;
}

export function ArticleLayout({ article, category, nextArticle }: ArticleLayoutProps) {
  return (
    <div className="max-w-3xl">
      <Button variant="ghost" size="sm" asChild className="-ml-2 mb-6">
        <Link href={`/docs/${category.slug}`}>
          <ArrowLeft className="mr-1 w-4 h-4" />
          Back to {category.name}
        </Link>
      </Button>

      <div className="flex items-center gap-2 mb-4">
        <Badge variant="brand">{category.name}</Badge>
        {article.placeholder && <Badge variant="outline">Placeholder content</Badge>}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{article.title}</h1>

      <p className="text-lg text-muted-foreground mb-6">{article.summary}</p>

      <div className="flex items-center gap-4 text-sm text-muted-foreground pb-6 border-b mb-8">
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          {article.readTime} min read
        </span>
      </div>

      <div className="max-w-none">
        <MarkdownLite content={article.body} />
      </div>

      {nextArticle && (
        <div className="mt-10 pt-8 border-t">
          <Link
            href={`/docs/${nextArticle.categorySlug}/${nextArticle.slug}`}
            className="group flex items-center justify-between p-5 rounded-2xl border bg-card hover:shadow-md transition-all duration-300"
          >
            <div>
              <p className="text-xs text-muted-foreground mb-1">Next</p>
              <p className="font-semibold group-hover:text-brand-500 transition-colors">
                {nextArticle.title}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-brand-500 flex-shrink-0" />
          </Link>
        </div>
      )}
    </div>
  );
}

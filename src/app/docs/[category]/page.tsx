import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/docs/article-card";
import { docsCategories, getArticlesByCategory, getCategory } from "@/components/docs/docs-data";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return docsCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} — Docs`,
    description: category.description,
  };
}

export default async function DocsCategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);
  const Icon = category.icon;

  return (
    <div>
      <Button variant="ghost" size="sm" asChild className="-ml-2 mb-6">
        <Link href="/docs">
          <ArrowLeft className="mr-1 w-4 h-4" />
          All Docs
        </Link>
      </Button>

      <div className="flex items-start gap-4 mb-10">
        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-brand-500" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{category.name}</h1>
          <p className="text-muted-foreground max-w-2xl">{category.description}</p>
        </div>
      </div>

      {articles.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm">
          No articles in this category yet — check back soon.
        </p>
      )}
    </div>
  );
}

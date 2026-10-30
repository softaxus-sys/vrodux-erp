import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WatchDemo } from "@/components/demos/watch-demo";
import { demoSlugForDocsCategory } from "@/lib/demos";
import { ArticleCard } from "@/components/docs/article-card";
import { JsonLd } from "@/components/demos/json-ld";
import { SITE, breadcrumbLd, fitDescription, pageMeta } from "@/lib/seo";
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
  return pageMeta({
    title: `${category.name} — Docs`,
    description: fitDescription([
      category.description,
      `Browse step-by-step guides and how-to articles for ${category.name} in the Vrodux ERP knowledge base.`,
    ]),
    path: `/docs/${category.slug}`,
  });
}

export default async function DocsCategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);
  const Icon = category.icon;
  const url = `${SITE}/docs/${category.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: `${category.name} documentation`,
        description: category.description,
        isPartOf: { "@type": "WebSite", name: "Vrodux ERP", url: SITE },
      },
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Docs", path: "/docs" },
        { name: category.name, path: `/docs/${category.slug}` },
      ]),
    ],
  };
  // The sections each guide covers, taken from the guide's own headings, so the page says what is inside.
  const outline = articles
    .map((a) => ({
      article: a,
      sections: [...a.body.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim()).filter((h) => !/^where to go deeper$/i.test(h)),
    }))
    .filter((o) => o.sections.length > 0);

  return (
    <div>
      <JsonLd data={jsonLd} />
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

      {demoSlugForDocsCategory(category.slug) && (
        <div className="mb-10 -mx-4">
          <WatchDemo slug={demoSlugForDocsCategory(category.slug)!} />
        </div>
      )}

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

      {outline.length > 0 && (
        <section className="mt-12" aria-labelledby="inside-h">
          <h2 id="inside-h" className="text-xl font-semibold mb-2">What you will find in the {category.name} guides</h2>
          <p className="text-muted-foreground text-sm max-w-2xl mb-6">
            Each guide is written for the people who use {category.name} day to day. Here is what every one covers, so you can jump straight to the part you need.
          </p>
          <div className="space-y-6">
            {outline.map(({ article, sections }) => (
              <div key={article.slug}>
                <h3 className="font-medium mb-2">
                  <Link href={`/docs/${article.categorySlug}/${article.slug}`} className="hover:text-brand-500 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-muted-foreground list-disc pl-5">
                  {sections.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

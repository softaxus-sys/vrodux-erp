import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { CategoryCard } from "@/components/docs/category-card";
import { docsCategories, getArticlesByCategory } from "@/components/docs/docs-data";

export const metadata: Metadata = {
  title: "Docs & Knowledge Base",
  description:
    "Browse the Vrodux ERP knowledge base — onboarding guides and how-to articles organized by category.",
};

const START_HERE_SLUG = "start-here";

export default function DocsHubPage() {
  const startHere = docsCategories.find((c) => c.slug === START_HERE_SLUG);

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Docs &amp; Knowledge Base
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Guides and how-to articles for getting the most out of Vrodux ERP.
        </p>
      </div>

      {startHere && (
        <Link
          href={`/docs/${startHere.slug}`}
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border bg-brand-500/5 border-brand-500/20 hover:bg-brand-500/10 transition-colors mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
              <Rocket className="w-5 h-5 text-brand-500" />
            </div>
            <div>
              <h2 className="font-semibold text-lg mb-1">New here? Start Here.</h2>
              <p className="text-sm text-muted-foreground">
                The fastest path to getting your team up and running with Vrodux ERP.
              </p>
            </div>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-brand-500 flex-shrink-0">
            Get started <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      )}

      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          Browse by category
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              articleCount={getArticlesByCategory(category.slug).length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

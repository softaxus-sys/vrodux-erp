"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rocket } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { docsCategories, getArticlesByCategory } from "@/components/docs/docs-data";

const START_HERE_SLUG = "start-here";

export function DocsSidebar() {
  const pathname = usePathname();
  const startHere = docsCategories.find((c) => c.slug === START_HERE_SLUG);
  const otherCategories = docsCategories.filter((c) => c.slug !== START_HERE_SLUG);
  const activeCategorySlug = otherCategories.find((c) => pathname.startsWith(`/docs/${c.slug}`))?.slug;

  return (
    <nav className="space-y-6">
      {startHere && (
        <Link
          href={`/docs/${startHere.slug}`}
          className={cn(
            "flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors",
            pathname.startsWith(`/docs/${startHere.slug}`)
              ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
              : "hover:bg-muted text-foreground"
          )}
        >
          <Rocket className="w-4 h-4" />
          Start Here
        </Link>
      )}

      <div>
        <p className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Categories
        </p>
        <Accordion
          type="single"
          collapsible
          defaultValue={activeCategorySlug}
          className="space-y-1"
        >
          {otherCategories.map((category) => {
            const articles = getArticlesByCategory(category.slug);
            return (
              <AccordionItem key={category.slug} value={category.slug} className="border-none">
                <AccordionTrigger className="px-3 py-2 rounded-lg text-sm font-medium hover:no-underline hover:bg-muted [&[data-state=open]]:bg-muted/60">
                  {category.name}
                </AccordionTrigger>
                <AccordionContent className="pl-3">
                  <div className="flex flex-col gap-0.5 border-l ml-3 pl-3">
                    <Link
                      href={`/docs/${category.slug}`}
                      className={cn(
                        "px-2 py-1.5 rounded-md text-sm transition-colors",
                        pathname === `/docs/${category.slug}`
                          ? "text-brand-600 dark:text-brand-400 font-medium"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      Overview
                    </Link>
                    {articles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/docs/${category.slug}/${article.slug}`}
                        className={cn(
                          "px-2 py-1.5 rounded-md text-sm transition-colors",
                          pathname === `/docs/${category.slug}/${article.slug}`
                            ? "text-brand-600 dark:text-brand-400 font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {article.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </nav>
  );
}

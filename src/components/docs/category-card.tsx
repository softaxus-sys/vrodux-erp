import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DocsCategory } from "@/components/docs/docs-data";

interface CategoryCardProps {
  category: DocsCategory;
  articleCount: number;
}

export function CategoryCard({ category, articleCount }: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <Link
      href={`/docs/${category.slug}`}
      className="group flex flex-col p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-11 h-11 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
        <Icon className="w-5 h-5 text-brand-500" />
      </div>
      <h3 className="font-semibold mb-2 group-hover:text-brand-500 transition-colors">
        {category.name}
      </h3>
      <p className="text-sm text-muted-foreground flex-1 mb-4">{category.description}</p>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{articleCount} article{articleCount === 1 ? "" : "s"}</span>
        <span className="flex items-center gap-1 text-brand-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Browse <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

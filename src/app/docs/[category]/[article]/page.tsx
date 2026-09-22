import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/docs/article-layout";
import {
  docsArticles,
  getArticle,
  getCategory,
  getNextArticle,
} from "@/components/docs/docs-data";

type Props = {
  params: Promise<{ category: string; article: string }>;
};

export function generateStaticParams() {
  return docsArticles.map((a) => ({ category: a.categorySlug, article: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, article: articleSlug } = await params;
  const article = getArticle(categorySlug, articleSlug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function DocsArticlePage({ params }: Props) {
  const { category: categorySlug, article: articleSlug } = await params;
  const article = getArticle(categorySlug, articleSlug);
  if (!article) notFound();

  const category = getCategory(article.categorySlug);
  if (!category) notFound();

  const nextArticle = getNextArticle(article);

  return <ArticleLayout article={article} category={category} nextArticle={nextArticle} />;
}

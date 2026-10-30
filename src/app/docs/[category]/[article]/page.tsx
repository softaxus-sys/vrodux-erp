import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/demos/json-ld";
import { ArticleLayout } from "@/components/docs/article-layout";
import {
  docsArticles,
  getArticle,
  getCategory,
  getNextArticle,
} from "@/components/docs/docs-data";
import { SITE, breadcrumbLd, fitDescription, pageMeta } from "@/lib/seo";

/** Titles that are still over 60 characters once the brand suffix is dropped. */
const DOC_TITLE_OVERRIDES: Record<string, string> = {
  "settings/two-factor-authentication-and-security-settings": "Turn on two-factor authentication and set security rules",
};

type Props = {
  params: Promise<{ category: string; article: string }>;
};

export function generateStaticParams() {
  return docsArticles.map((a) => ({ category: a.categorySlug, article: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, article: articleSlug } = await params;
  const article = getArticle(categorySlug, articleSlug);
  if (!article) return { title: "Article Not Found", robots: { index: false, follow: false } };
  return pageMeta({
    title: DOC_TITLE_OVERRIDES[`${article.categorySlug}/${article.slug}`] ?? article.title,
    // The article summary is already a specific, human-written description; no filler is added to reach a length.
    description: fitDescription([article.summary]),
    path: `/docs/${article.categorySlug}/${article.slug}`,
    type: "article",
  });
}

export default async function DocsArticlePage({ params }: Props) {
  const { category: categorySlug, article: articleSlug } = await params;
  const article = getArticle(categorySlug, articleSlug);
  if (!article) notFound();

  const category = getCategory(article.categorySlug);
  if (!category) notFound();

  const nextArticle = getNextArticle(article);
  const url = `${SITE}/docs/${article.categorySlug}/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        headline: article.title,
        description: article.summary,
        articleSection: category.name,
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "SoftAxis Technologies LLC", logo: { "@type": "ImageObject", url: `${SITE}/images/vrodux_logo.png` } },
      },
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Docs", path: "/docs" },
        { name: category.name, path: `/docs/${category.slug}` },
        { name: article.title, path: `/docs/${article.categorySlug}/${article.slug}` },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ArticleLayout article={article} category={category} nextArticle={nextArticle} />
    </>
  );
}

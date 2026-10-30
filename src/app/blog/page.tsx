import { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageJsonLd } from "@/components/shared/page-jsonld";
import { PageHero } from "@/components/shared/page-hero";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = pageMeta({
  title: "Blog — ERP Insights & Business Tips",
  description:
    "ERP insights, business management tips, industry guides and product updates from the Vrodux ERP team. Learn how to run your operations on one platform.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageJsonLd type="CollectionPage" name="Vrodux ERP Blog" description={metadata.description as string} path="/blog" crumbs={[{ name: "Blog", path: "/blog" }]} />
      <PageHero
        badge="Vrodux Blog"
        title="ERP Insights & "
        highlightedWord="Business Intelligence"
        description="Expert articles on ERP implementation, industry trends, and business process optimization from the Vrodux team."
      />

      <BlogList />
    </>
  );
}

import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: "Blog — ERP Insights & Business Tips",
  description:
    "ERP insights, business management tips, industry guides, and product updates from the Vrodux ERP team.",
};

export default function BlogPage() {
  return (
    <>
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

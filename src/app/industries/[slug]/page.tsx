import { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/industries/industry-page";
import { getIndustryBySlug, industries } from "@/lib/industries-data";
import { moduleVisuals } from "@/lib/module-visuals";
import { SITE, fitDescription, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

/** Search-led titles for industries where people search for a specific phrase. */
const INDUSTRY_TITLES: Record<string, string> = {
  construction: "Construction ERP Software in the UAE and Dubai",
};

export function generateStaticParams() {
  // "restaurants" has its own route (app/industries/restaurants); skipping it here avoids a prerender collision.
  return industries.filter((i) => i.slug !== "restaurants").map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  const primary = moduleVisuals[industry.moduleSlugs[0]];
  // Led by the industry's own description so it never duplicates the module page's description.
  const description = fitDescription([industry.description, primary?.seoDescription]);
  return pageMeta({
    title: INDUSTRY_TITLES[slug] ?? `ERP Software for ${industry.name}`,
    description,
    path: industry.href,
    image: { url: `${SITE}${industry.image.src}`, alt: industry.image.alt },
  });
}

export default async function IndustrySlugPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}

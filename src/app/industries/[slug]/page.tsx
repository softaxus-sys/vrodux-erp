import { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPage } from "@/components/industries/industry-page";
import { getIndustryBySlug, industries } from "@/lib/industries-data";
import { moduleVisuals } from "@/lib/module-visuals";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  const primary = moduleVisuals[industry.moduleSlugs[0]];
  const title = `ERP Software for ${industry.name} | Vrodux ERP`;
  const description = primary?.seoDescription ?? industry.description;
  const url = `https://vrodux.com${industry.href}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Vrodux ERP",
      images: [{ url: `https://vrodux.com${industry.image.src}`, alt: industry.image.alt }],
    },
  };
}

export default async function IndustrySlugPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();
  return <IndustryPage industry={industry} />;
}

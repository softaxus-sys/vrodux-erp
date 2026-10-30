import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModulePageLayout } from "@/components/features/module-page-layout";
import { allModules, getModuleBySlug } from "@/lib/modules-data";
import { moduleVisuals } from "@/lib/module-visuals";
import { SITE, fitDescription, pageMeta } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allModules.map((m) => ({ slug: m.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) return { title: "Module Not Found" };
  const v = moduleVisuals[mod.id];
  const title = v?.seoTitle ?? `${mod.name} — Vrodux ERP Features`;
  const description = fitDescription([v?.seoDescription, mod.description, "Part of the Vrodux ERP platform."]);
  return pageMeta({
    title,
    description,
    path: mod.href,
    image: v?.photo ? { url: `${SITE}${v.photo.src}`, alt: v.photo.alt } : undefined,
  });
}

export default async function ModuleFeaturePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  return <ModulePageLayout module={mod} />;
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModulePageLayout } from "@/components/features/module-page-layout";
import { allModules, getModuleBySlug } from "@/lib/modules-data";
import { moduleVisuals } from "@/lib/module-visuals";

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
  const description = v?.seoDescription ?? mod.description;
  const url = `https://vrodux.com${mod.href}`;
  return {
    title: { absolute: `${title} | Vrodux ERP` },
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | Vrodux ERP`, description, url, type: "website", siteName: "Vrodux ERP" },
  };
}

export default async function ModuleFeaturePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  return <ModulePageLayout module={mod} />;
}

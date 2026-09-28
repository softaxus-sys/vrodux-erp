import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModulePageLayout } from "@/components/features/module-page-layout";
import { allModules, getModuleBySlug } from "@/lib/modules-data";

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
  return {
    title: `${mod.name} — Vrodux ERP Features`,
    description: mod.description,
  };
}

export default async function ModuleFeaturePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) notFound();

  return <ModulePageLayout module={mod} />;
}

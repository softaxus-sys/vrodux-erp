import { Metadata } from "next";
import { CrmPage } from "@/components/features/crm-page";
import { getModuleGallery } from "@/lib/module-shots";
import { moduleVisuals } from "@/lib/module-visuals";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

// A dedicated route for this page: Next.js serves a static segment ahead of /features/[slug],
// so the shared feature template (and every other feature page) is untouched.

const TITLE = "CRM Software with Automatic Lead Capture & Import | Vrodux";
const DESCRIPTION =
  "Capture and import leads automatically from multiple sources with Vrodux CRM. Manage Property Finder, Bayut, Meta Ads and sales pipelines in one platform.";
const OG_TITLE = "CRM Software with Automatic Lead Capture & Lead Management | Vrodux";
const OG_DESCRIPTION =
  "Capture, import, assign and manage business leads from multiple channels. Vrodux CRM helps sales teams organize leads, track pipelines and manage customer relationships.";
const PAGE_URL = "https://vrodux.com/features/crm";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "Vrodux ERP",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: OG_TITLE, description: OG_DESCRIPTION, images: [DEFAULT_OG_IMAGE.url] },
};

export default async function CrmFeaturePage() {
  const visual = moduleVisuals.crm;
  const shots = await getModuleGallery([
    { slot: "crm", caption: "CRM leads and pipeline" },
    ...(visual?.shots?.filter((s) => s.doc) ?? []),
    { slot: "reports", caption: "Reports hub" },
  ]);
  return <CrmPage shots={shots} docsCategory={visual?.docsCategory ?? "crm"} />;
}

import { JsonLd } from "@/components/demos/json-ld";
import { BRAND, SITE, breadcrumbLd, type Crumb } from "@/lib/seo";

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

/** WebPage (or a more specific type) plus a BreadcrumbList for pages that have no structured data of their own. */
export function PageJsonLd({ type = "WebPage", name, description, path, crumbs }: {
  type?: PageType;
  name: string;
  description: string;
  path: string;
  crumbs: Crumb[];
}) {
  const url = `${SITE}${path}`;
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": type, "@id": `${url}#webpage`, url, name, description, isPartOf: { "@type": "WebSite", name: BRAND, url: SITE } },
          breadcrumbLd([{ name: "Home", path: "/" }, ...crumbs]),
        ],
      }}
    />
  );
}

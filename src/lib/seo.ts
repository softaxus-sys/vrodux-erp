import { Metadata } from "next";

const siteConfig = {
  name: "Vrodux ERP",
  description:
    "The Digital Axis of Your Enterprise. Complete ERP for Finance, HR, Inventory, Sales, CRM, POS, Hospitality, Real Estate, and more — all in one powerful platform.",
  url: "https://vrodux.com",
  ogImage: "https://vrodux.com/og-image.jpg",
  twitter: "@vroduxerp",
  company: "SoftAxis Technologies LLC",
};

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: fullTitle,
    description: metaDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
      creator: siteConfig.twitter,
      site: siteConfig.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
  };
}

export function generateJsonLd(type: "organization" | "product" | "faq", data?: object) {
  if (type === "organization") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.company,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/vrodux_logo.png`,
      description: siteConfig.description,
      contactPoint: {
        "@type": "ContactPoint",
        email: "vrodux@softaxis.ae",
        contactType: "customer support",
        availableLanguage: ["English", "Arabic"],
      },
      sameAs: [
        "https://x.com/AxusSoft",
        "https://www.facebook.com/profile.php?id=61593996783081",
        "https://www.youtube.com/channel/UCLjmPTXsvhowyfAMKSmTSCQ",
      ],
    };
  }

  if (type === "faq" && data) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      ...data,
    };
  }

  return {};
}

export { siteConfig };

// ---- Page-level metadata helpers (title/description fitting, canonical, Open Graph, breadcrumbs) ----

export const SITE = "https://vrodux.com";
export const BRAND = "Vrodux ERP";
export const DEFAULT_OG_IMAGE = { url: `${SITE}/og-image.jpg`, width: 1200, height: 630, alt: BRAND };

/** The root layout appends this to every page title, so titles are measured with it. */
const TITLE_SUFFIX = ` | ${BRAND}`;
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 160;

/** Words that read badly as the last word of a cut-off sentence. */
const DANGLING = new Set(["and", "or", "with", "the", "a", "an", "for", "to", "of", "in", "on", "&", "by", "your"]);

/**
 * Builds a 120-160 character meta description. Candidate sentences are joined until the minimum
 * is reached, then trimmed at a sentence or word boundary so it never ends mid-phrase.
 */
export function fitDescription(parts: (string | undefined)[], min = DESC_MIN, max = DESC_MAX): string {
  let text = "";
  for (const raw of parts) {
    const p = raw?.replace(/\s+/g, " ").trim();
    if (!p) continue;
    text = text ? `${text.replace(/[.\s]*$/, ".")} ${p}` : p;
    if (text.length >= min) break;
  }
  if (text.length <= max) return text;

  const window = text.slice(0, max);
  const sentenceEnd = Math.max(window.lastIndexOf(". "), window.lastIndexOf("! "), window.lastIndexOf("? "));
  if (sentenceEnd >= min - 1) return window.slice(0, sentenceEnd + 1);

  let cut = window.slice(0, window.lastIndexOf(" "));
  const words = cut.split(" ");
  while (words.length > 1 && DANGLING.has(words[words.length - 1].toLowerCase().replace(/[^a-z&]/g, ""))) words.pop();
  cut = words.join(" ").replace(/[\s,;:—–-]+$/, "");
  return /[.!?]$/.test(cut) ? cut : `${cut}.`;
}

/** Title as Next expects it: left to the "| Vrodux ERP" template when it fits in 60 characters, otherwise absolute. */
export function fitTitle(title: string, brand = true): Metadata["title"] {
  if (brand && title.length + TITLE_SUFFIX.length <= TITLE_MAX) return title;
  return { absolute: title };
}

/** The title exactly as it appears in search results (used for Open Graph and Twitter). */
export function displayTitle(title: string, brand = true): string {
  return brand && title.length + TITLE_SUFFIX.length <= TITLE_MAX ? `${title}${TITLE_SUFFIX}` : title;
}

interface PageMetaOptions {
  title: string;
  description: string;
  /** Path starting with "/", used for the canonical URL and og:url. */
  path: string;
  /** Set to false when the title already carries the brand (it is then never suffixed). */
  brand?: boolean;
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
  publishedTime?: string;
}

/** Title, description, canonical, Open Graph and Twitter metadata for one page, kept consistent. */
export function pageMeta({ title, description, path, brand = true, image, type = "website", publishedTime }: PageMetaOptions): Metadata {
  const url = `${SITE}${path === "/" ? "" : path}`;
  const shown = displayTitle(title, brand);
  const img = image ?? DEFAULT_OG_IMAGE;
  return {
    title: fitTitle(title, brand),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: shown,
      description,
      url,
      type,
      siteName: BRAND,
      images: [img],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: shown, description, images: [img.url] },
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path === "/" ? "" : c.path}`,
    })),
  };
}

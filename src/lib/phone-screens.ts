import { DEMO_BASE_URL } from "@/lib/demos";

/**
 * Phone screenshots for /mobile. Like the demo videos, the list is not hardcoded: it comes from
 * phone/manifest.json on Contabo object storage (cached 5 minutes). Any failure gives an empty list
 * and the page simply leaves the screenshots out.
 */
export const PHONE_MANIFEST_URL = `${DEMO_BASE_URL}/phone/manifest.json`;

export interface PhoneScreen {
  slug: string;
  order: number;
  title: string;
  caption: string;
  alt: string;
  imageUrl: string;
  width: number;
  height: number;
  /** Shown in the main gallery on /mobile. */
  featured: boolean;
  /** Module and industry pages that show this screen. */
  pages: string[];
}

function parse(raw: unknown): PhoneScreen | null {
  if (!raw || typeof raw !== "object") return null;
  const s = raw as Record<string, unknown>;
  if (typeof s.slug !== "string" || typeof s.title !== "string" || typeof s.image !== "string" || !s.image) return null;
  return {
    slug: s.slug,
    order: typeof s.order === "number" ? s.order : Number.MAX_SAFE_INTEGER,
    title: s.title,
    caption: typeof s.caption === "string" ? s.caption : "",
    alt: typeof s.alt === "string" && s.alt ? s.alt : `${s.title} screen of the Vrodux ERP mobile app (demo data)`,
    imageUrl: `${DEMO_BASE_URL}/${s.image.replace(/^\/+/, "")}`,
    width: typeof s.width === "number" ? s.width : 720,
    height: typeof s.height === "number" ? s.height : 1600,
    featured: s.featured === true,
    pages: Array.isArray(s.pages) ? s.pages.filter((p): p is string => typeof p === "string") : [],
  };
}

export async function getPhoneScreens(): Promise<PhoneScreen[]> {
  try {
    const res = await fetch(`${PHONE_MANIFEST_URL}?v=${Math.floor(Date.now() / 300000)}`, { next: { revalidate: 300 }, signal: AbortSignal.timeout(5000) });
    if (!res.ok) return [];
    const json = (await res.json()) as { screens?: unknown };
    if (!Array.isArray(json.screens)) return [];
    return json.screens.map(parse).filter((s): s is PhoneScreen => s !== null).sort((a, b) => a.order - b.order);
  } catch {
    return [];
  }
}

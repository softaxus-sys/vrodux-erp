import { DEMO_BASE_URL } from "@/lib/demos";

/**
 * Docs screenshots come from a manifest in the same bucket as the demo videos,
 * so new images can be uploaded without redeploying. Any failure resolves to an
 * empty list and the docs keep their "Screenshot goes here" placeholders.
 */
const MANIFEST_URL = `${DEMO_BASE_URL}/docs-screenshots/manifest.json`;

export interface DocsShot {
  index: number;
  caption: string;
  src: string;
  width?: number;
  height?: number;
}

/** Shots with a usable image for one article path, keyed by 1-based placeholder index. */
export async function getDocsShots(articlePath: string): Promise<Map<number, DocsShot>> {
  const shots = new Map<number, DocsShot>();
  try {
    const res = await fetch(MANIFEST_URL, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return shots;
    const json: unknown = await res.json();
    const items = (json as { items?: unknown })?.items;
    if (!Array.isArray(items)) return shots;

    for (const raw of items) {
      if (!raw || typeof raw !== "object") continue;
      const it = raw as Record<string, unknown>;
      if (it.article !== articlePath || typeof it.index !== "number") continue;
      if (typeof it.image !== "string" || !it.image) continue;
      shots.set(it.index, {
        index: it.index,
        caption: typeof it.caption === "string" ? it.caption : "",
        src: `${DEMO_BASE_URL}/${it.image.replace(/^\/+/, "")}`,
        width: typeof it.width === "number" ? it.width : undefined,
        height: typeof it.height === "number" ? it.height : undefined,
      });
    }
  } catch {
    /* keep placeholders */
  }
  return shots;
}

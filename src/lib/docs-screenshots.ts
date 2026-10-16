import { DEMO_BASE_URL } from "@/lib/demos";

/**
 * Docs screenshots come from a manifest in the same bucket as the demo videos,
 * so new images can be uploaded without redeploying. Any failure resolves to an
 * empty list and callers keep their existing placeholders / images.
 */
const MANIFEST_URL = `${DEMO_BASE_URL}/docs-screenshots/manifest.json`;

export interface DocsShot {
  index: number;
  caption: string;
  src: string;
  width?: number;
  height?: number;
}

interface ManifestShot extends DocsShot {
  article: string;
}

/** Raw manifest JSON (or null). fetch() is cached for 5 minutes and shared by all callers. */
async function fetchManifest(): Promise<{ items?: unknown; home?: unknown } | null> {
  try {
    const res = await fetch(MANIFEST_URL, {
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const json: unknown = await res.json();
    return json && typeof json === "object" ? (json as { items?: unknown; home?: unknown }) : null;
  } catch {
    return null;
  }
}

/** Every `items` entry that has a usable image. */
async function getManifestShots(): Promise<ManifestShot[]> {
  const shots: ManifestShot[] = [];
  try {
    const items = (await fetchManifest())?.items;
    if (!Array.isArray(items)) return shots;

    for (const raw of items) {
      if (!raw || typeof raw !== "object") continue;
      const it = raw as Record<string, unknown>;
      if (typeof it.article !== "string" || typeof it.index !== "number") continue;
      if (typeof it.image !== "string" || !it.image) continue;
      shots.push({
        article: it.article,
        index: it.index,
        caption: typeof it.caption === "string" ? it.caption : "",
        src: `${DEMO_BASE_URL}/${it.image.replace(/^\/+/, "")}`,
        width: typeof it.width === "number" ? it.width : undefined,
        height: typeof it.height === "number" ? it.height : undefined,
      });
    }
  } catch {
    /* keep existing images */
  }
  return shots;
}

/** Shots with a usable image for one article path, keyed by 1-based placeholder index. */
export async function getDocsShots(articlePath: string): Promise<Map<number, DocsShot>> {
  const map = new Map<number, DocsShot>();
  for (const { article, ...shot } of await getManifestShots()) {
    if (article === articlePath) map.set(shot.index, shot);
  }
  return map;
}

export interface ShotRef {
  src: string;
  width: number;
  height: number;
}

/** Looks up specific (article path, index) pairs; returns image + size for those that exist. */
export async function getShotRefs(
  refs: Record<string, { article: string; index: number }>,
): Promise<Record<string, ShotRef>> {
  const all = await getManifestShots();
  const out: Record<string, ShotRef> = {};
  for (const [key, ref] of Object.entries(refs)) {
    const hit = all.find((s) => s.article === ref.article && s.index === ref.index);
    if (hit && hit.width && hit.height) out[key] = { src: hit.src, width: hit.width, height: hit.height };
  }
  return out;
}

/** Top-level `home` entries (home-page-only screenshots), keyed by their `key`. */
export async function getHomeManifestShots(): Promise<Record<string, ShotRef>> {
  const out: Record<string, ShotRef> = {};
  const home = (await fetchManifest())?.home;
  if (!Array.isArray(home)) return out;
  for (const raw of home) {
    if (!raw || typeof raw !== "object") continue;
    const h = raw as Record<string, unknown>;
    if (
      typeof h.key === "string" &&
      typeof h.image === "string" &&
      h.image &&
      typeof h.width === "number" &&
      typeof h.height === "number"
    ) {
      out[h.key] = {
        src: `${DEMO_BASE_URL}/${h.image.replace(/^\/+/, "")}`,
        width: h.width,
        height: h.height,
      };
    }
  }
  return out;
}

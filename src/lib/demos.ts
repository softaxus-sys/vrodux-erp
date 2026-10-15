/**
 * Demo videos. The list is NEVER hardcoded: it comes from a manifest.json on
 * Contabo object storage, so adding a video = editing the manifest.
 * The manifest is fetched on the server and cached for 5 minutes; any failure
 * (network, bad JSON, bad shape) resolves to an empty list so pages simply
 * omit their demo sections instead of erroring.
 */

export const DEMO_BASE_URL =
  "https://sin1.contabostorage.com/5eebb73791834c68aa89cf1633f74425:demo-videos";
export const DEMO_MANIFEST_URL = `${DEMO_BASE_URL}/manifest.json`;
const REVALIDATE_SECONDS = 300;

export interface DemoChapter {
  start: number;
  title: string;
}

export interface DemoVideo {
  slug: string;
  order: number;
  title: string;
  category: string;
  description: string;
  durationSeconds: number;
  videoUrl: string;
  posterUrl: string;
  language: string;
  chapters: DemoChapter[];
}

export interface DemoCatalog {
  updated: string;
  videos: DemoVideo[];
}

const EMPTY: DemoCatalog = { updated: "", videos: [] };

function resolveUrl(path: unknown): string | null {
  if (typeof path !== "string" || !path) return null;
  return `${DEMO_BASE_URL}/${path.replace(/^\/+/, "")}`;
}

function parseVideo(raw: unknown): DemoVideo | null {
  if (!raw || typeof raw !== "object") return null;
  const v = raw as Record<string, unknown>;
  const videoUrl = resolveUrl(v.video);
  const posterUrl = resolveUrl(v.poster);
  if (typeof v.slug !== "string" || typeof v.title !== "string" || !videoUrl || !posterUrl) {
    return null;
  }
  const chapters = (Array.isArray(v.chapters) ? v.chapters : [])
    .filter(
      (c): c is DemoChapter =>
        !!c && typeof c.start === "number" && c.start >= 0 && typeof c.title === "string",
    )
    .map((c) => ({ start: c.start, title: c.title }))
    .sort((a, b) => a.start - b.start);

  return {
    slug: v.slug,
    order: typeof v.order === "number" ? v.order : Number.MAX_SAFE_INTEGER,
    title: v.title,
    category: typeof v.category === "string" && v.category ? v.category : "More demos",
    description: typeof v.description === "string" ? v.description : "",
    durationSeconds: typeof v.durationSeconds === "number" ? v.durationSeconds : 0,
    videoUrl,
    posterUrl,
    language: typeof v.language === "string" ? v.language : "en",
    chapters,
  };
}

export async function getDemoCatalog(): Promise<DemoCatalog> {
  try {
    const res = await fetch(DEMO_MANIFEST_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return EMPTY;
    const json: unknown = await res.json();
    if (!json || typeof json !== "object") return EMPTY;
    const manifest = json as { updated?: unknown; videos?: unknown };
    if (!Array.isArray(manifest.videos)) return EMPTY;

    const videos = manifest.videos
      .map(parseVideo)
      .filter((v): v is DemoVideo => v !== null)
      .sort((a, b) => a.order - b.order);
    return {
      updated: typeof manifest.updated === "string" ? manifest.updated : "",
      videos,
    };
  } catch {
    return EMPTY;
  }
}

/** Returns the catalog entry for a slug, or undefined (render nothing). */
export async function getDemoBySlug(slug: string) {
  const catalog = await getDemoCatalog();
  const video = catalog.videos.find((v) => v.slug === slug);
  return video ? { video, updated: catalog.updated } : undefined;
}

/** Groups videos by category, categories ordered by their first video's `order`. */
export function groupByCategory(videos: DemoVideo[]): { category: string; videos: DemoVideo[] }[] {
  const groups = new Map<string, DemoVideo[]>();
  for (const v of videos) {
    const list = groups.get(v.category) ?? [];
    list.push(v);
    groups.set(v.category, list);
  }
  return [...groups].map(([category, vs]) => ({ category, videos: vs }));
}

/** m:ss, e.g. 379 -> "6:19". */
export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

/** ISO 8601 duration for schema.org, e.g. 379 -> "PT6M19S". */
function isoDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds));
  return `PT${Math.floor(s / 60)}M${s % 60}S`;
}

export function videoObjectJsonLd(video: DemoVideo, uploadDate: string) {
  return {
    "@type": "VideoObject",
    name: `${video.title} — Vrodux ERP demo`,
    description: video.description || `${video.title} demo for Vrodux ERP.`,
    thumbnailUrl: video.posterUrl,
    contentUrl: video.videoUrl,
    duration: isoDuration(video.durationSeconds),
    ...(uploadDate ? { uploadDate } : {}),
    inLanguage: video.language,
  };
}

/** Docs category slug -> demo slug. Categories without a video are omitted. */
const DOCS_CATEGORY_TO_DEMO: Record<string, string> = {
  "start-here": "getting-started",
  crm: "crm",
  sales: "sales",
  pos: "pos",
  finance: "finance",
  hr: "hr",
  purchase: "purchase",
  inventory: "inventory",
  "real-estate": "real-estate",
  "visa-services": "visa-services",
};

export function demoSlugForDocsCategory(categorySlug: string): string | undefined {
  return DOCS_CATEGORY_TO_DEMO[categorySlug];
}

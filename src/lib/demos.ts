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

/**
 * What the visitor's browser loads. next.config.ts proxies this path to the bucket, so a network that
 * cannot reach the bucket's own host name can still load videos and posters from our domain.
 * The manifest itself is fetched on the server and keeps using DEMO_BASE_URL.
 */
export const DEMO_PUBLIC_PATH = "/demo-media";

export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@VroduxERP";

/**
 * YouTube copies of the demos, used when the site player cannot load a video.
 * `synced` means the YouTube cut is the same length as the site video, so chapter times and the
 * "open at" second line up. Where the cuts differ, chapters are hidden in YouTube mode.
 */
export const DEMO_YOUTUBE: Record<string, { id: string; synced: boolean }> = {
  "getting-started": { id: "CRIR3gfYiS0", synced: true },
  crm: { id: "0khQiXq2EXg", synced: true },
  sales: { id: "mt0jP4zgjfI", synced: true },
  pos: { id: "oxdibyOx43k", synced: false },
  restaurant: { id: "IAiQkahY2Qs", synced: false },
  finance: { id: "XAdeQPMXF_4", synced: false },
  hr: { id: "um1Wv_0hC88", synced: true },
  purchase: { id: "7dOgokdb4tg", synced: true },
  inventory: { id: "Pzo4fR_EY0I", synced: false },
  manufacturing: { id: "YUq2pyF-Lsw", synced: true },
  "import-export": { id: "V1bxa6F9uW4", synced: true },
  library: { id: "eTsWlsyL_54", synced: false },
  construction: { id: "bXba5w081n4", synced: true },
  healthcare: { id: "bnp1OkuySO4", synced: true },
  education: { id: "RJA-NEkODyk", synced: true },
  "master-data": { id: "epDxg8sIFo4", synced: true },
  calendar: { id: "e6U6WP6fx9o", synced: true },
};

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
  /** Same-origin URLs the browser plays and shows (proxied to the bucket). */
  videoUrl: string;
  posterUrl: string;
  /** Direct bucket URLs, kept for schema.org markup so search engines see the real files. */
  sourceVideoUrl: string;
  sourcePosterUrl: string;
  language: string;
  chapters: DemoChapter[];
  youtubeId?: string;
  /** True when the YouTube cut matches the site video, so chapter seeking is safe there. */
  youtubeSynced: boolean;
}

export interface DemoCatalog {
  updated: string;
  videos: DemoVideo[];
}

const EMPTY: DemoCatalog = { updated: "", videos: [] };

function resolveUrl(path: unknown, base: string): string | null {
  if (typeof path !== "string" || !path) return null;
  return `${base}/${path.replace(/^\/+/, "")}`;
}

function parseVideo(raw: unknown): DemoVideo | null {
  if (!raw || typeof raw !== "object") return null;
  const v = raw as Record<string, unknown>;
  const videoUrl = resolveUrl(v.video, DEMO_PUBLIC_PATH);
  const posterUrl = resolveUrl(v.poster, DEMO_PUBLIC_PATH);
  const sourceVideoUrl = resolveUrl(v.video, DEMO_BASE_URL);
  const sourcePosterUrl = resolveUrl(v.poster, DEMO_BASE_URL);
  if (
    typeof v.slug !== "string" ||
    typeof v.title !== "string" ||
    !videoUrl ||
    !posterUrl ||
    !sourceVideoUrl ||
    !sourcePosterUrl
  ) {
    return null;
  }
  const yt = DEMO_YOUTUBE[v.slug];
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
    sourceVideoUrl,
    sourcePosterUrl,
    language: typeof v.language === "string" ? v.language : "en",
    chapters,
    youtubeId: yt?.id,
    youtubeSynced: yt?.synced ?? false,
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
  // Chapters as schema.org Clip entries; each one ends where the next starts (the last at the video's end).
  const hasPart = video.chapters.map((c, i) => ({
    "@type": "Clip",
    name: c.title,
    startOffset: c.start,
    endOffset: video.chapters[i + 1]?.start ?? video.durationSeconds,
    url: `${video.sourceVideoUrl}#t=${c.start}`,
  }));
  return {
    "@type": "VideoObject",
    name: `${video.title} — Vrodux ERP demo`,
    description: video.description || `${video.title} demo for Vrodux ERP.`,
    thumbnailUrl: video.sourcePosterUrl,
    contentUrl: video.sourceVideoUrl,
    duration: isoDuration(video.durationSeconds),
    ...(uploadDate ? { uploadDate } : {}),
    inLanguage: video.language,
    ...(hasPart.length > 0 ? { hasPart } : {}),
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
  restaurant: "restaurant",
  manufacturing: "manufacturing",
  library: "library",
  "import-export": "import-export",
  "lead-generation": "lead-generation",
  ecommerce: "ecommerce",
  seo: "seo-ai-agent",
  "project-management": "project-management",
  hospitality: "hotel-management",
  "ai-assistant": "vrodux-ai",
  reports: "reports-file-manager",
  settings: "billing-connections-security",
};

export function demoSlugForDocsCategory(categorySlug: string): string | undefined {
  return DOCS_CATEGORY_TO_DEMO[categorySlug];
}

/** Docs article ("category/article") -> demo slug and the second the walkthrough should open at. */
const T = (m: number, s: number) => m * 60 + s;
const DOCS_ARTICLE_TO_DEMO: Record<string, { demo: string; startAt?: number }> = {
  "start-here/where-to-go-next": { demo: "help-support" },
  "pos/customer-credit-accounts": { demo: "pos", startAt: T(3, 38) },
  "pos/offline-mode-and-sync": { demo: "pos", startAt: T(4, 55) },
  "pos/pos-dashboard-and-reports": { demo: "pos", startAt: T(2, 43) },
  "restaurant/floors-tables-and-menu": { demo: "restaurant", startAt: T(0, 8) },
  "restaurant/take-orders-with-modifiers": { demo: "restaurant", startAt: T(3, 17) },
  "restaurant/kitchen-display": { demo: "restaurant", startAt: T(4, 25) },
  "restaurant/bills-split-payments-and-tips": { demo: "restaurant", startAt: T(5, 7) },
  "restaurant/delivery-and-riders": { demo: "restaurant", startAt: T(6, 59) },
  "restaurant/restaurant-roles-and-reports": { demo: "restaurant", startAt: T(10, 54) },
  "lead-generation/find-businesses-and-reveal-contacts": { demo: "lead-generation", startAt: T(0, 21) },
  "lead-generation/campaigns-and-the-reply-inbox": { demo: "lead-generation", startAt: T(2, 4) },
  "finance/tax-invoices-and-recurring-invoices": { demo: "finance", startAt: T(7, 31) },
  "finance/record-and-approve-expenses": { demo: "finance", startAt: T(1, 35) },
  "finance/reconcile-a-bank-account": { demo: "finance", startAt: T(4, 16) },
  "finance/prepare-a-uae-vat-return": { demo: "finance", startAt: T(11, 14) },
  "finance/integration-center-and-finance-posting": { demo: "finance", startAt: T(8, 2) },
  "inventory/set-up-warehouses-and-master-data": { demo: "inventory", startAt: T(0, 21) },
  "inventory/move-and-adjust-stock": { demo: "inventory", startAt: T(1, 48) },
  "inventory/online-listings-and-photos": { demo: "inventory", startAt: T(2, 55) },
  "inventory/import-stock-with-pictures": { demo: "inventory", startAt: T(2, 55) },
  "project-management/projects-teams-and-access": { demo: "project-management", startAt: T(0, 18) },
  "project-management/backlog-sprints-and-issues": { demo: "project-management", startAt: T(1, 31) },
  "library/build-the-catalogue-and-import-books": { demo: "library", startAt: T(2, 9) },
  "library/circulation-desk-issue-return-and-reserve": { demo: "library", startAt: T(0, 53) },
  "library/members-fines-and-reminders": { demo: "library", startAt: T(3, 27) },
  "library/member-portal": { demo: "library", startAt: T(3, 48) },
  "hospitality/front-desk-check-in-and-out": { demo: "hotel-management", startAt: T(1, 12) },
  "hospitality/rooms-room-types-and-rates": { demo: "hotel-management", startAt: T(0, 27) },
  "hospitality/folios-and-housekeeping": { demo: "hotel-management", startAt: T(2, 30) },
  "hospitality/tour-packages-departures-and-bookings": { demo: "travel-agency" },
  "industry-packs/insurance-policies-renewals-and-claims": { demo: "insurance" },
  "industry-packs/b2b-proposals-contracts-and-tickets": { demo: "b2b-services" },
  "settings/plans-trial-and-billing": { demo: "billing-connections-security", startAt: T(0, 7) },
  "settings/two-factor-authentication-and-security-settings": { demo: "billing-connections-security", startAt: T(0, 51) },
  "settings/users-security-plan": { demo: "billing-connections-security" },
  "settings/add-ons-and-credits": { demo: "billing-connections-security" },
  "settings/help-and-support": { demo: "help-support" },
};

/** The walkthrough to show on a docs page: an article rule wins over its category's default video. */
export function demoForDocsPage(categorySlug: string, articleSlug?: string): { slug: string; startAt?: number } | undefined {
  if (articleSlug) {
    const a = DOCS_ARTICLE_TO_DEMO[`${categorySlug}/${articleSlug}`];
    if (a) return { slug: a.demo, startAt: a.startAt };
  }
  const slug = DOCS_CATEGORY_TO_DEMO[categorySlug];
  return slug ? { slug } : undefined;
}

import { getDocsShots } from "@/lib/docs-screenshots";
import { getHomeShots, type ThemedShot } from "@/lib/home-shots";
import type { ModuleShot } from "@/lib/module-visuals";

export interface GalleryShot {
  id: string;
  caption: string;
  shot: ThemedShot;
}

/** Resolves a module's screenshot references to real images. Missing ones are skipped. */
export async function getModuleGallery(shots: ModuleShot[] | undefined): Promise<GalleryShot[]> {
  if (!shots?.length) return [];
  const needsHome = shots.some((s) => s.slot);
  const home = needsHome ? await getHomeShots() : {};
  const out: GalleryShot[] = [];

  for (const s of shots) {
    if (s.slot) {
      const t = home[s.slot];
      if (t && (t.light || t.dark)) out.push({ id: `slot-${s.slot}`, caption: s.caption ?? "", shot: t });
    } else if (s.doc) {
      const map = await getDocsShots(s.doc);
      for (const [index, d] of [...map.entries()].sort((a, b) => a[0] - b[0])) {
        if (s.index && s.index !== index) continue;
        if (!d.width || !d.height) continue;
        out.push({
          id: `${s.doc}#${index}`,
          caption: s.caption ?? d.caption,
          shot: { light: { src: d.src, width: d.width, height: d.height } },
        });
      }
    }
  }
  return out;
}

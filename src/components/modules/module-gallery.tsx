"use client";

import { useState } from "react";
import { BrowserFrame } from "@/components/home/panel-art";
import { ThemedShotImage } from "@/components/sections/themed-shot";
import type { GalleryShot } from "@/lib/module-shots";
import { cn } from "@/lib/utils";

/** Screenshot viewer: pick a caption, see the real screen in a browser frame, click to zoom. */
export function ModuleGallery({ shots, label, className }: { shots: GalleryShot[]; label: string; className?: string }) {
  const [active, setActive] = useState(0);
  const current = shots[active];
  if (!current) return null;

  return (
    <div className={className}>
      {shots.length > 1 && (
        <div role="tablist" aria-label={`${label} screenshots`} className="mb-5 flex flex-wrap gap-2">
          {shots.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full border px-4 py-2 text-left text-sm font-medium transition-colors",
                active === i
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-foreground/25 text-foreground hover:bg-foreground/5"
              )}
            >
              {s.caption || `Screen ${i + 1}`}
            </button>
          ))}
        </div>
      )}
      <div key={current.id} className="rise">
        <BrowserFrame url={`erp.vrodux.com / ${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="shadow-xl shadow-black/15">
          <ThemedShotImage
            shot={current.shot}
            alt={`${label}: ${current.caption || "screenshot"}`}
            sizes="(min-width: 1024px) 1000px, 100vw"
            zoomable
          />
        </BrowserFrame>
        {current.caption && <p className="mt-3 text-center text-sm text-muted-foreground">{current.caption}</p>}
      </div>
    </div>
  );
}

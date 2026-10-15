"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScreenshotPlaceholder } from "@/components/docs/screenshot-placeholder";
import type { DocsShot } from "@/lib/docs-screenshots";

/** Real screenshot with click-to-zoom. Falls back to the placeholder if the image fails. */
export function ScreenshotFigure({ shot, label }: { shot: DocsShot; label?: string }) {
  const [failed, setFailed] = useState(false);
  const caption = label || shot.caption;

  if (failed) return <ScreenshotPlaceholder label={label} />;

  return (
    <figure className="my-6">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={`Zoom: ${caption}`}
            className="block w-full cursor-zoom-in rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={caption}
              width={shot.width}
              height={shot.height}
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
              className="h-auto max-w-full rounded-2xl border border-border bg-white shadow-md ring-1 ring-white/10"
            />
          </button>
        </DialogTrigger>
        <DialogContent className="w-auto max-w-[95vw] gap-0 border-0 bg-transparent p-0 shadow-none sm:rounded-none">
          <DialogTitle className="sr-only">{caption}</DialogTitle>
          <DialogDescription className="sr-only">Enlarged screenshot. Press Escape to close.</DialogDescription>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shot.src} alt={caption} className="max-h-[90vh] max-w-[95vw] rounded-lg bg-white object-contain" />
        </DialogContent>
      </Dialog>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground/70">{caption}</figcaption>
      )}
    </figure>
  );
}

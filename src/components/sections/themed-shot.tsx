"use client";

import { useState, type CSSProperties } from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";
import { FallbackImage } from "@/components/sections/fallback-image";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { Shot, ThemedShot } from "@/lib/home-shots";

const ZOOM_STEPS = [1, 1.5, 2, 3, 4];

/** Full-size viewer: fits the screen at first, then zooms in steps; scroll to pan. */
function Viewer({ light, dark, alt }: { light: Shot; dark: Shot; alt: string }) {
  const [step, setStep] = useState(0);
  const zoom = ZOOM_STEPS[step];
  const toggle = () => setStep((s) => (s === 0 ? 2 : 0));
  const same = light.src === dark.src;
  const imgClass = "h-auto w-full select-none";

  return (
    <>
      <div className="flex items-center gap-2 border-b px-4 py-2.5 pr-12">
        <DialogTitle className="mr-auto truncate text-sm font-medium">{alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Enlarged screenshot. Use the zoom buttons or click the image to zoom, and Escape to close.
        </DialogDescription>
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          aria-label="Zoom out"
          className="rounded-md border p-1.5 hover:bg-muted disabled:opacity-40"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-12 text-center text-xs tabular-nums text-muted-foreground">{Math.round(zoom * 100)}%</span>
        <button
          type="button"
          onClick={() => setStep((s) => Math.min(ZOOM_STEPS.length - 1, s + 1))}
          disabled={step === ZOOM_STEPS.length - 1}
          aria-label="Zoom in"
          className="rounded-md border p-1.5 hover:bg-muted disabled:opacity-40"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setStep(0)}
          disabled={step === 0}
          aria-label="Reset zoom"
          className="rounded-md border p-1.5 hover:bg-muted disabled:opacity-40"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-auto bg-muted/40">
        <div style={{ width: `${zoom * 100}%` }} className="mx-auto">
          {/* Original (unoptimised) files so zoomed detail stays sharp. */}
          {/* eslint-disable @next/next/no-img-element */}
          {same ? (
            <img src={light.src} alt={alt} onClick={toggle} className={`${imgClass} ${step === 0 ? "cursor-zoom-in" : "cursor-zoom-out"}`} />
          ) : (
            <>
              <img src={light.src} alt={alt} onClick={toggle} className={`${imgClass} dark:hidden ${step === 0 ? "cursor-zoom-in" : "cursor-zoom-out"}`} />
              <img src={dark.src} alt={alt} onClick={toggle} className={`hidden ${imgClass} dark:block ${step === 0 ? "cursor-zoom-in" : "cursor-zoom-out"}`} />
            </>
          )}
          {/* eslint-enable @next/next/no-img-element */}
        </div>
      </div>
    </>
  );
}

/**
 * Theme-aware screenshot shown at its natural aspect ratio (never cropped).
 * A theme with no image of its own shows the other theme's image.
 * `zoomable` makes it open a full-size viewer with zoom on click.
 */
export function ThemedShotImage({
  shot,
  alt,
  sizes,
  priority,
  uniform,
  zoomable,
}: {
  shot?: ThemedShot;
  alt: string;
  sizes: string;
  priority?: boolean;
  /** Fixed frame (e.g. "4 / 3") with the whole image letterboxed inside, for tidy rows of tiles. */
  uniform?: string;
  zoomable?: boolean;
}) {
  const light = shot?.light ?? shot?.dark;
  const dark = shot?.dark ?? shot?.light;
  if (!light || !dark) return <div className="aspect-[1910/913] w-full bg-muted/40" />;

  const style = {
    "--ar-l": `${light.width} / ${light.height}`,
    "--ar-d": `${dark.width} / ${dark.height}`,
  } as CSSProperties;
  const frame = uniform
    ? "relative w-full bg-muted/40"
    : "relative w-full [aspect-ratio:var(--ar-l)] dark:[aspect-ratio:var(--ar-d)]";
  if (uniform) (style as Record<string, string>).aspectRatio = uniform;
  const fit = uniform ? "object-contain object-center" : "object-cover object-top";

  const image =
    light.src === dark.src ? (
      <div style={style} className={frame}>
        <FallbackImage src={light.src} fallbackSrc={light.src} alt={alt} fill sizes={sizes} priority={priority} className={fit} />
      </div>
    ) : (
      <div style={style} className={frame}>
        <FallbackImage src={light.src} fallbackSrc={dark.src} alt={alt} fill sizes={sizes} priority={priority} className={`${fit} dark:hidden`} />
        <FallbackImage src={dark.src} fallbackSrc={light.src} alt={alt} fill sizes={sizes} priority={priority} className={`hidden ${fit} dark:block`} />
      </div>
    );

  if (!zoomable) return image;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`View full size: ${alt}`}
          className="block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {image}
        </button>
      </DialogTrigger>
      <DialogContent className="flex h-[92vh] w-[96vw] max-w-[96vw] flex-col gap-0 overflow-hidden p-0 sm:rounded-xl">
        <Viewer light={light} dark={dark} alt={alt} />
      </DialogContent>
    </Dialog>
  );
}

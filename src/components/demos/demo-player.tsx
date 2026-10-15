"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { formatDuration, type DemoVideo } from "@/lib/demos";

/** Native player + chapter list. No autoplay; chapter clicks seek and play. */
export function DemoPlayer({ video }: { video: DemoVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const { chapters } = video;

  const syncActive = useCallback(() => {
    const t = ref.current?.currentTime ?? 0;
    let idx = -1;
    for (let i = 0; i < chapters.length; i++) {
      if (chapters[i].start <= t) idx = i;
      else break;
    }
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  }, [chapters]);

  const seekTo = (start: number, index: number) => {
    const el = ref.current;
    if (!el) return;
    el.currentTime = start;
    setActiveIndex(index);
    el.play().catch(() => {
      /* playback blocked or interrupted; controls remain available */
    });
  };

  return (
    <div>
      <video
        ref={ref}
        controls
        preload="metadata"
        playsInline
        poster={video.posterUrl}
        onTimeUpdate={syncActive}
        onSeeked={syncActive}
        className="w-full aspect-video rounded-lg bg-black"
      >
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {chapters.length > 0 && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">Chapters</h3>
          <ol className="max-h-56 overflow-y-auto rounded-lg border divide-y">
            {chapters.map((c, i) => (
              <li key={`${c.start}-${i}`}>
                <button
                  type="button"
                  onClick={() => seekTo(c.start, i)}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className={cn(
                    "flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    i === activeIndex && "bg-brand-500/10 font-medium text-brand-600 dark:text-brand-400",
                  )}
                >
                  <span className="w-10 shrink-0 tabular-nums text-xs text-muted-foreground">
                    {formatDuration(c.start)}
                  </span>
                  <span>{c.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

"use client";

import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DemoPlayer } from "@/components/demos/demo-player";
import { formatDuration, type DemoVideo } from "@/lib/demos";

/** Poster card (lazy image); clicking opens the player in a dialog. */
export function DemoCard({ video }: { video: DemoVideo }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="relative aspect-video w-full bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={video.posterUrl}
              alt={`${video.title} demo thumbnail`}
              width={640}
              height={360}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/25">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-600 shadow-lg">
                <Play className="ml-0.5 h-5 w-5 fill-current" />
              </span>
            </span>
            <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 py-0.5 text-xs font-medium tabular-nums text-white">
              {formatDuration(video.durationSeconds)}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="font-semibold">{video.title}</h3>
            {video.description && (
              <p className="mt-1 text-sm text-muted-foreground line-clamp-3">{video.description}</p>
            )}
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto p-3 sm:p-6">
        <DialogTitle className="pr-6 leading-snug">{video.title}</DialogTitle>
        <DialogDescription className="sr-only">
          {video.description || `${video.title} demo video`}
        </DialogDescription>
        <DemoPlayer video={video} />
      </DialogContent>
    </Dialog>
  );
}

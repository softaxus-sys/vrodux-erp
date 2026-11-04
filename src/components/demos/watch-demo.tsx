import { PlayCircle } from "lucide-react";
import { DemoCard } from "@/components/demos/demo-card";
import { JsonLd } from "@/components/demos/json-ld";
import { formatDuration, getDemoBySlug, videoObjectJsonLd } from "@/lib/demos";

/** "Watch the demo" block. Renders nothing when the manifest has no such slug. */
export async function WatchDemo({ slug, className, startAt }: { slug: string; className?: string; startAt?: number }) {
  const found = await getDemoBySlug(slug);
  if (!found) return null;
  const { video, updated } = found;

  return (
    <section id="demo" className={`scroll-mt-24 ${className ?? ""}`}>
      <JsonLd data={{ "@context": "https://schema.org", ...videoObjectJsonLd(video, updated) }} />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-4">
          <PlayCircle className="h-5 w-5 text-brand-500" />
          <h2 className="text-xl font-semibold">Watch the walkthrough ({formatDuration(video.durationSeconds)})</h2>
        </div>
        <div className="max-w-md">
          <DemoCard video={video} startAt={startAt} />
          {startAt ? (
            <p className="mt-2 text-xs text-muted-foreground">
              Opens at {formatDuration(startAt)}, the part of the video about this page.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

import { PlayCircle } from "lucide-react";
import { DemoCard } from "@/components/demos/demo-card";
import { JsonLd } from "@/components/demos/json-ld";
import { getDemoBySlug, videoObjectJsonLd } from "@/lib/demos";

/** "Watch the demo" block. Renders nothing when the manifest has no such slug. */
export async function WatchDemo({ slug, className }: { slug: string; className?: string }) {
  const found = await getDemoBySlug(slug);
  if (!found) return null;
  const { video, updated } = found;

  return (
    <section id="demo" className={`scroll-mt-24 ${className ?? ""}`}>
      <JsonLd data={{ "@context": "https://schema.org", ...videoObjectJsonLd(video, updated) }} />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-4">
          <PlayCircle className="h-5 w-5 text-brand-500" />
          <h2 className="text-xl font-semibold">Watch the demo</h2>
        </div>
        <div className="max-w-md">
          <DemoCard video={video} />
        </div>
      </div>
    </section>
  );
}

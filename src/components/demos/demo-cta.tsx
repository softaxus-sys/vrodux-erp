import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDuration, getDemoBySlug } from "@/lib/demos";

/** Hero CTA linking to the page's #demo block. Renders nothing without a video. */
export async function DemoCta({ slug }: { slug: string }) {
  const found = await getDemoBySlug(slug);
  if (!found) return null;
  return (
    <Button asChild variant="outline" size="lg">
      <a href="#demo">
        <PlayCircle className="mr-2 h-5 w-5" />
        Watch the demo ({formatDuration(found.video.durationSeconds)})
      </a>
    </Button>
  );
}

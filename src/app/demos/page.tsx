import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Button } from "@/components/ui/button";
import { DemoCard } from "@/components/demos/demo-card";
import { JsonLd } from "@/components/demos/json-ld";
import { getDemoCatalog, groupByCategory, videoObjectJsonLd } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Product Demos — Vrodux ERP",
  description:
    "Watch short Vrodux ERP demo videos: CRM, sales, POS, finance, HR, inventory, manufacturing and industry modules.",
  alternates: { canonical: "https://vrodux.com/demos" },
};

export default async function DemosPage() {
  const { videos, updated } = await getDemoCatalog();
  const groups = groupByCategory(videos);

  return (
    <>
      <PageHero
        badge="Product demos"
        title="See Vrodux ERP in action"
        description="Short walkthroughs of every module, from first sign-in to day-to-day workflows."
      />

      {videos.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": videos.map((v) => videoObjectJsonLd(v, updated)),
          }}
        />
      )}

      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {groups.length > 0 ? (
            <div className="space-y-14">
              {groups.map((g) => (
                <div key={g.category}>
                  <h2 className="text-2xl font-semibold mb-6">{g.category}</h2>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {g.videos.map((v) => (
                      <DemoCard key={v.slug} video={v} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-lg rounded-2xl border bg-card p-8 text-center">
              <h2 className="text-lg font-semibold mb-2">Demo videos are on their way</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Our video library isn&apos;t available right now. Book a live demo and we&apos;ll walk you
                through Vrodux ERP ourselves.
              </p>
              <Button asChild>
                <Link href="/book-demo">Book a live demo</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

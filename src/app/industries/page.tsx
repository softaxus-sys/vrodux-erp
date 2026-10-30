import { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageJsonLd } from "@/components/shared/page-jsonld";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { industries, statusMeta } from "@/lib/industries-data";
import { IndustryDemoButton } from "@/components/demos/industry-demo-button";
import { getDemoCatalog } from "@/lib/demos";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = pageMeta({
  title: "Industry Solutions — ERP for Every Sector",
  description:
    "Vrodux ERP delivers tailored solutions for retail, restaurants, hospitality, real estate, construction, healthcare, education, manufacturing and more.",
  path: "/industries",
});

/** Industry id -> demo video slug. Industries without a video get only the Book a Demo button. */
const DEMO_SLUG: Record<string, string> = {
  retail: "pos",
  restaurants: "restaurant",
  realestate: "real-estate",
  construction: "construction",
  healthcare: "healthcare",
  education: "education",
  "visa-services": "visa-services",
  manufacturing: "manufacturing",
  library: "library",
  "import-export": "import-export",
};

export default async function IndustriesPage() {
  const { videos } = await getDemoCatalog();
  return (
    <>
      <PageJsonLd type="CollectionPage" name="Vrodux ERP Industry Solutions" description={metadata.description as string} path="/industries" crumbs={[{ name: "Industries", path: "/industries" }]} />
      <PageHero
        badge="Industry Solutions"
        title="ERP Built for "
        highlightedWord="Your Industry"
        description="Choose your industry during onboarding and Vrodux automatically configures the right modules — from generic operations to deep, industry-specific functionality."
      />

      {/* Status legend */}
      <section className="pb-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto p-4 rounded-2xl border bg-muted/20 text-sm text-muted-foreground">
            <Badge variant="success">Available Now</Badge>
            <span>fully built and live</span>
            <span className="text-muted-foreground/40">·</span>
            <Badge variant="brand">Beta</Badge>
            <span>live, shipping new features regularly</span>
            <span className="text-muted-foreground/40">·</span>
            <Badge variant="warning">Early Access</Badge>
            <span>core groundwork available, expanding on our roadmap</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {industries.map((ind, i) => {
              const demo = videos.find((v) => v.slug === DEMO_SLUG[ind.id]);
              return (
              <div
                key={ind.id}
                id={ind.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-12 h-12 rounded-full bg-[#B5D6FF] dark:bg-[#17379B] flex items-center justify-center mb-4">
                    <ind.icon className="w-6 h-6 text-brand-700 dark:text-brand-300" strokeWidth={1.75} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{ind.name}</Badge>
                    <Badge variant={statusMeta[ind.status].variant}>{statusMeta[ind.status].label}</Badge>
                  </div>
                  <h2 className="text-3xl font-semibold mb-3">{ind.headline}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{ind.description}</p>

                  <div className="space-y-2 mb-6">
                    {ind.modules.map((mod) => (
                      <div key={mod} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {mod}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {demo && <IndustryDemoButton video={demo} label={`See Demo for ${ind.name}`} />}
                    <Button asChild variant={demo ? "outline" : "default"}>
                      <Link href="/book-demo">
                        Book a Demo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link href={ind.href}>
                        Explore {ind.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Stats / roadmap card */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-premium">
                  {ind.image && (
                    <div className="relative aspect-[5/4]">
                      <Image
                        src={ind.image.src}
                        alt={ind.image.alt}
                        fill
                        sizes="(min-width: 1024px) 560px, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                  <div className="p-8 bg-brand-700 text-white">
                    {ind.stats ? (
                      <>
                        <h3 className="text-lg font-semibold mb-6 opacity-90">What Our {ind.name} Clients Achieve</h3>
                        <div className="grid grid-cols-3 gap-4">
                          {ind.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                              <div className="text-3xl font-bold mb-1">{stat.value}</div>
                              <div className="text-xs opacity-80">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                          <div className="flex flex-wrap gap-2">
                            {ind.modules.map((m) => (
                              <span key={m} className="text-xs px-2 py-1 bg-white/20 rounded-full">{m}</span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : ind.roadmap ? (
                      <>
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-5 h-5 opacity-90" />
                          <h3 className="text-lg font-semibold opacity-90">Early Access Roadmap</h3>
                        </div>
                        <p className="text-sm opacity-80 mb-5">
                          The {ind.name} pack is available today with the core workflows below. We&apos;re actively
                          building out deeper functionality with early-access customers.
                        </p>
                        <div className="mb-5">
                          <div className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-2">Available Today</div>
                          <div className="flex flex-wrap gap-2">
                            {ind.modules.map((m) => (
                              <span key={m} className="text-xs px-2 py-1 bg-white/20 rounded-full">{m}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-2">Coming Next</div>
                          <div className="flex flex-wrap gap-2">
                            {ind.roadmap?.map((m) => (
                              <span key={m} className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-full">{m}</span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-lg font-semibold mb-6 opacity-90">What&apos;s Included</h3>
                        <div className="flex flex-wrap gap-2">
                          {ind.modules.map((m) => (
                            <span key={m} className="text-xs px-2 py-1 bg-white/20 rounded-full">{m}</span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

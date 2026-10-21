import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { FinalCTA } from "@/components/sections/final-cta";
import { DemoCta } from "@/components/demos/demo-cta";
import { WatchDemo } from "@/components/demos/watch-demo";
import { coreModules, getModuleBySlug, type ModuleTile } from "@/lib/modules-data";

function isCoreModule(id: string): boolean {
  return coreModules.some((m) => m.id === id);
}

function badgeFor(mod: ModuleTile): string {
  if (mod.status === "beta") return "Beta — Shipping New Features Regularly";
  if (mod.status === "early-access") return "Early Access";
  return isCoreModule(mod.id) ? "Core Module" : "Industry Module";
}

const moduleImages: Record<string, { src: string; alt: string }> = {
  pos: { src: "/images/industries/retail.jpg", alt: "Retail checkout counter running Vrodux POS with a barcode scanner" },
  restaurant: { src: "/images/industries/restaurant.jpg", alt: "Chefs plating dishes with a Vrodux restaurant POS and kitchen display" },
  "real-estate": { src: "/images/industries/real-estate.jpg", alt: "Real estate office with a property model and Vrodux on a tablet" },
  finance: { src: "/images/industries/finance.jpg", alt: "Executive desk with Vrodux finance and accounting on a tablet" },
  hr: { src: "/images/industries/hr.jpg", alt: "Team working in a modern office with Vrodux HR and payroll on screen" },
  crm: { src: "/images/industries/crm.jpg", alt: "Sales team meeting with Vrodux CRM and leads on screen" },
};

export async function ModulePageLayout({ module: mod }: { module: ModuleTile }) {
  const related = mod.related
    .map((slug) => getModuleBySlug(slug))
    .filter((m): m is ModuleTile => Boolean(m));

  const hasRoadmap = Boolean(mod.roadmap && mod.roadmap.length > 0);

  return (
    <>
      <PageHero badge={badgeFor(mod)} title={mod.name} description={mod.description}>
        <DemoCta slug={mod.id} />
      </PageHero>

      {moduleImages[mod.id] && (
        <section className="pt-4">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="relative aspect-square rounded-2xl overflow-hidden border shadow-premium">
              <Image
                src={moduleImages[mod.id].src}
                alt={moduleImages[mod.id].alt}
                fill
                sizes="(min-width: 672px) 672px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>
      )}

      <WatchDemo slug={mod.id} className="pt-12" />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            {hasRoadmap ? "Available Today" : "What's Included"}
          </h2>
          {mod.capabilities && mod.capabilities.length > 0 ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {mod.capabilities.map((cap) => (
                <div key={cap.title} className="flex items-start gap-2.5 p-4 rounded-xl border bg-card">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold">{cap.title}</p>
                    {cap.description && (
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{cap.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-3">
              {mod.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5 text-sm p-4 rounded-xl border bg-card">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {hasRoadmap && (
            <div className="mt-12">
              <div className="flex items-center gap-2 justify-center mb-6">
                <Sparkles className="w-4 h-4 text-brand-500" />
                <h3 className="text-lg font-semibold">Coming Next</h3>
              </div>
              <p className="text-sm text-muted-foreground text-center max-w-xl mx-auto mb-6">
                This module is available today with the core workflows above. We&apos;re actively building
                out deeper functionality with early-access customers.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {mod.roadmap!.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-center p-3 rounded-xl border border-dashed text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Related Modules</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={r.href}
                  className="group block p-5 rounded-2xl border bg-card hover:border-brand-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B5D6FF] dark:bg-[#17379B] flex items-center justify-center mb-3">
                    <r.icon className="w-5 h-5 text-brand-700 dark:text-brand-300" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-semibold mb-1.5">{r.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{r.description}</p>
                  <span className="text-xs font-medium text-brand-500 inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}

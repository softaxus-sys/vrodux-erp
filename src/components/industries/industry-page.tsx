import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { FinalCTA } from "@/components/sections/final-cta";
import { WatchDemo } from "@/components/demos/watch-demo";
import { JsonLd } from "@/components/demos/json-ld";
import { IndustryDemoButton } from "@/components/demos/industry-demo-button";
import { Badge } from "@/components/ui/badge";
import { FlowDiagram } from "@/components/modules/flow-diagram";
import { FeatureGroups } from "@/components/modules/feature-groups";
import { ModuleGallery } from "@/components/modules/module-gallery";
import { ModuleFaq } from "@/components/modules/module-faq";
import { SectionHeading, WRAP, pill, tone } from "@/components/home/ui";
import { getDemoBySlug } from "@/lib/demos";
import { industries, statusMeta, type Industry } from "@/lib/industries-data";
import { getModulePageData } from "@/lib/module-page-data";
import { getModuleGallery } from "@/lib/module-shots";
import { getModuleBySlug, type ModuleTile } from "@/lib/modules-data";
import { cn } from "@/lib/utils";

const SITE = "https://vrodux.com";

/** Industry id -> demo video slug (same mapping the industries index uses). */
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

function joinNames(names: string[]): string {
  if (names.length <= 1) return names.join("");
  return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

export async function IndustryPage({ industry }: { industry: Industry }) {
  const mods = industry.moduleSlugs.map((s) => getModuleBySlug(s)).filter((m): m is ModuleTile => Boolean(m));
  const primary = mods[0];
  const pdata = primary ? getModulePageData(primary) : undefined;
  const visual = pdata?.visual;
  const index = industries.findIndex((i) => i.id === industry.id);
  const t = tone(index);
  const gallery = await getModuleGallery(visual?.shots);
  const demoSlug = DEMO_SLUG[industry.id];
  const demo = demoSlug ? (await getDemoBySlug(demoSlug))?.video : undefined;
  const status = statusMeta[industry.status];
  const roadmap = "roadmap" in industry ? industry.roadmap : undefined;

  // A handful of concrete capabilities from the primary module's documentation.
  const items = (pdata?.groups ?? []).flatMap((g) => g.items).filter((i) => i.length > 20).slice(0, 6);

  const names = mods.map((m) => m.name);
  const lower = industry.name;
  const faqs: { q: string; a: string }[] = [
    {
      q: `Does Vrodux ERP have software for ${lower}?`,
      a: `Yes. ${industry.description} Vrodux brings ${joinNames(names)} together in one workspace, so ${lower} teams do not need separate systems.`,
    },
    {
      q: `Which Vrodux modules are used for ${lower}?`,
      a: `The core of the solution is ${primary?.name ?? "the industry module"}, supported by ${joinNames(names.slice(1))}. Every module is available on every plan.`,
    },
    {
      q: "Can I try it before buying?",
      a: "Yes. The free trial lasts 14 days with unlimited users and no credit card. You can also book a personalised demo.",
    },
  ];
  if (industry.status === "early-access" && roadmap) {
    faqs.push({
      q: `Is the ${lower} solution complete?`,
      a: `It is in early access: the core workflows are available today and the team is expanding it with early customers. Still on the roadmap: ${roadmap.join(", ")}.`,
    });
  }
  if (industry.status === "beta") {
    faqs.push({
      q: `Is the ${lower} solution ready to use?`,
      a: "It is live and in beta, with new features shipping regularly. Ask for a demo to see what is available today.",
    });
  }

  const url = `${SITE}${industry.href}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `ERP for ${industry.name}`,
        description: industry.description,
        url,
        isPartOf: { "@type": "WebSite", name: "Vrodux ERP", url: SITE },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE}/industries` },
          { "@type": "ListItem", position: 3, name: industry.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  const others = industries.filter((i) => i.id !== industry.id);

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="px-3 pb-4 pt-[4.5rem] sm:px-5 lg:px-6">
        <div className={cn("mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]", t.card)}>
          <div className="grid items-center gap-10 px-6 py-12 sm:px-12 lg:grid-cols-[1.05fr_1fr] lg:px-16 lg:py-16">
            <div className="rise">
              <nav aria-label="Breadcrumb" className="text-sm text-foreground/70">
                <Link href="/industries" className="hover:underline">Industries</Link>
                <span className="mx-2">/</span>
                <span className="font-medium text-foreground">{industry.name}</span>
              </nav>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                  <industry.icon className={cn("h-7 w-7", t.icon)} strokeWidth={1.75} />
                </span>
                <Badge variant={status.variant}>{status.label}</Badge>
              </div>
              <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">{industry.headline}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">{industry.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {demo ? <IndustryDemoButton video={demo} label={`See Demo for ${industry.name}`} /> : null}
                <Link href="/book-demo" className={cn(pill.base, demo ? pill.outline : pill.primary, "group")}>
                  Book a demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link href={visual?.docsCategory ? `/docs/${visual.docsCategory}` : "/docs"} className={cn(pill.base, pill.outline)}>
                  <BookOpen className="h-4 w-4" />
                  Read the docs
                </Link>
              </div>
            </div>
            <div className="rise relative aspect-[5/4] overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/20" style={{ ["--d" as string]: 2 }}>
              <Image src={industry.image.src} alt={industry.image.alt} fill priority sizes="(min-width: 1024px) 640px, 100vw" className="object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className={WRAP}>
          <SectionHeading
            eyebrow="Modules"
            title={`The Vrodux modules ${lower} teams use`}
            description="Each one is a complete module with its own page, and they all share one login, one set of customer records and one ledger."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mods.map((m, i) => {
              const mt = tone(i + index);
              return (
                <Link
                  key={m.id}
                  href={m.href}
                  className={cn("rise group rounded-3xl p-6 transition-transform hover:-translate-y-1", mt.card)}
                  style={{ ["--d" as string]: i + 1 }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                    <m.icon className={cn("h-5 w-5", mt.icon)} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-xl font-medium tracking-tight">{m.name}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-foreground/75">{m.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                    Explore the module <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {visual?.flow && visual.flow.length > 0 && (
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading eyebrow="How it works" title={visual.flowTitle ?? `How ${industry.name} runs on Vrodux`} />
            <div className="mt-12">
              <FlowDiagram steps={visual.flow} toneIndex={visual.tone} />
            </div>
          </div>
        </section>
      )}

      {items.length > 0 && (
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="Capabilities"
              title={`Built for ${lower}`}
              description={`Highlights from ${primary?.name}. See the module page for everything it includes.`}
            />
            <div className="mt-10">
              <FeatureGroups groups={[{ title: "Highlights", items }]} toneIndex={visual?.tone ?? 0} />
            </div>
            {primary && (
              <div className="mt-8">
                <Link href={primary.href} className={cn(pill.base, pill.outline, "group")}>
                  Everything in {primary.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading eyebrow="See it" title="On screen" description="Real screens from the product. Click any screenshot to zoom in." />
            <ModuleGallery shots={gallery} label={industry.name} className="mt-10" />
          </div>
        </section>
      )}

      {demoSlug && <WatchDemo slug={demoSlug} className="py-6" />}

      {roadmap && (
        <section className="py-10">
          <div className={cn(WRAP, "flex flex-wrap items-center gap-2")}>
            <span className="mr-2 text-sm font-semibold">Coming next:</span>
            {roadmap.map((r) => (
              <span key={r} className="rounded-full border border-dashed px-3 py-1 text-sm text-muted-foreground">
                {r}
              </span>
            ))}
          </div>
        </section>
      )}

      <section className="py-14 md:py-20">
        <div className={cn(WRAP, "grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20")}>
          <div>
            <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">FAQ</span>
            <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em]">ERP for {lower}: your questions</h2>
          </div>
          <ModuleFaq faqs={faqs} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className={WRAP}>
          <SectionHeading eyebrow="More industries" title="Vrodux fits other industries too" />
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {others.map((o) => (
              <li key={o.id}>
                <Link
                  href={o.href}
                  className="flex items-center gap-2 rounded-full border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-brand-500"
                >
                  <o.icon className="h-4 w-4 text-brand-600 dark:text-brand-300" strokeWidth={1.75} />
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

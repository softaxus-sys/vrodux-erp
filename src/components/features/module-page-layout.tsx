import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Bell, Fingerprint, Globe2, Lock, Smartphone, UserRound, Users } from "lucide-react";
import { FinalCTA } from "@/components/sections/final-cta";
import { WatchDemo } from "@/components/demos/watch-demo";
import { DemoCta } from "@/components/demos/demo-cta";
import { JsonLd } from "@/components/demos/json-ld";
import { BrowserFrame } from "@/components/home/panel-art";
import { ThemedShotImage } from "@/components/sections/themed-shot";
import { FlowDiagram } from "@/components/modules/flow-diagram";
import { FeatureGroups } from "@/components/modules/feature-groups";
import { ModuleGallery } from "@/components/modules/module-gallery";
import { ModuleFaq } from "@/components/modules/module-faq";
import { Rich } from "@/components/modules/rich";
import { SectionHeading, WRAP, pill, tone } from "@/components/home/ui";
import { getArticlesByCategory, getCategory } from "@/components/docs/docs-data";
import { getModulePageData, mentionedModules } from "@/lib/module-page-data";
import { getModuleGallery } from "@/lib/module-shots";
import { getModuleBySlug, type ModuleTile } from "@/lib/modules-data";
import { cn } from "@/lib/utils";

const SITE = "https://vrodux.com";

const PLATFORM = [
  { icon: Lock, title: "Your data stays yours", text: "Every customer's data is isolated from every other customer's, across every module and report." },
  { icon: Users, title: "Roles you control", text: "Fine-grained permissions per module and per action, custom roles, and per-user grants or denials." },
  { icon: Fingerprint, title: "Two-factor sign-in", text: "Optional authenticator-app two-factor authentication, enforceable for the whole workspace." },
  { icon: Bell, title: "Real-time alerts", text: "In-app notifications for approvals, assignments and deadlines, kept so you can read them later." },
  { icon: Smartphone, title: "Web, phone and till", text: "Use it in the browser, installed to your home screen, in the mobile app, or on a Windows till." },
  { icon: Globe2, title: "English and Arabic", text: "The main app supports English and Arabic. Some public pages and emails are English only." },
];

function genericFaqs(name: string, tagline: string, worksWith?: string, access?: string, docsHref?: string) {
  const faqs: { q: string; a: string }[] = [];
  if (tagline) faqs.push({ q: `What does ${name} do in Vrodux ERP?`, a: tagline });
  if (worksWith) faqs.push({ q: `Which other modules does ${name} work with?`, a: worksWith.replace(/\*\*/g, "") });
  if (access) faqs.push({ q: `Who can see and change ${name} data?`, a: access.replace(/\*\*/g, "") });
  faqs.push({
    q: `Is ${name} included in every Vrodux plan?`,
    a: "Yes. Every module is available on every plan. Plans differ only by the number of users (3, 10 or 50, with Enterprise through sales). You can try everything free for 14 days with unlimited users, no credit card.",
  });
  if (docsHref) faqs.push({ q: `Where can I learn how to use ${name}?`, a: `The Vrodux documentation has step-by-step guides for ${name}. Open the ${name} section in the docs at ${SITE}${docsHref}.` });
  return faqs;
}

export async function ModulePageLayout({ module: mod }: { module: ModuleTile }) {
  const data = getModulePageData(mod);
  const { visual } = data;
  const t = tone(visual.tone);
  const gallery = await getModuleGallery(visual.shots);
  const docsCategory = visual.docsCategory ? getCategory(visual.docsCategory) : undefined;
  const docsArticles = visual.docsCategory ? getArticlesByCategory(visual.docsCategory) : [];
  const docsHref = docsCategory ? `/docs/${docsCategory.slug}` : "/docs";

  const related = mod.related.map((s) => getModuleBySlug(s)).filter((m): m is ModuleTile => Boolean(m));
  const links = mentionedModules(data.worksWith, mod.id)
    .map((s) => getModuleBySlug(s))
    .filter((m): m is ModuleTile => Boolean(m));

  const faqs = [...(visual.faqs ?? []), ...genericFaqs(mod.name, data.tagline || data.headline, data.worksWith, data.access, docsCategory ? docsHref : undefined)];
  const hero = gallery[0];
  const url = `${SITE}${mod.href}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: `${mod.name} — Vrodux ERP`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: visual.seoDescription,
        url,
        publisher: { "@type": "Organization", name: "SoftAxis Technologies LLC", url: SITE },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Features", item: `${SITE}/features` },
          { "@type": "ListItem", position: 3, name: mod.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="px-3 pb-4 pt-[4.5rem] sm:px-5 lg:px-6">
        <div className={cn("mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]", t.card)}>
          <div className="grid items-center gap-10 px-6 py-12 sm:px-12 lg:grid-cols-[1.05fr_1fr] lg:px-16 lg:py-16">
            <div className="rise">
              <nav aria-label="Breadcrumb" className="text-sm text-foreground/70">
                <Link href="/features" className="hover:underline">Features</Link>
                <span className="mx-2">/</span>
                <span className="font-medium text-foreground">{mod.name}</span>
              </nav>
              <span className="mt-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                <mod.icon className={cn("h-7 w-7", t.icon)} strokeWidth={1.75} />
              </span>
              <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl">{data.headline}</h1>
              {data.tagline && <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/80">{data.tagline}</p>}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/book-demo" className={cn(pill.base, pill.primary, "group")}>
                  Book a demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <DemoCta slug={mod.id} />
                <Link href={docsHref} className={cn(pill.base, pill.outline)}>
                  <BookOpen className="h-4 w-4" />
                  Read the docs
                </Link>
              </div>
              <p className="mt-6 text-sm font-medium text-foreground/80">{mod.name} is included in every plan. Try it free for 14 days.</p>
            </div>

            <div className="rise relative" style={{ ["--d" as string]: 2 }}>
              {hero ? (
                <BrowserFrame url={`erp.vrodux.com / ${mod.id}`} className="shadow-2xl shadow-black/20">
                  <ThemedShotImage shot={hero.shot} alt={`${mod.name} in Vrodux ERP: ${hero.caption}`} sizes="(min-width: 1024px) 640px, 100vw" priority zoomable />
                </BrowserFrame>
              ) : visual.photo ? (
                <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/20">
                  <Image src={visual.photo.src} alt={visual.photo.alt} fill priority sizes="(min-width: 1024px) 640px, 100vw" className="object-cover object-top" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Overview and audience */}
      <section className="py-14 md:py-20">
        <div className={cn(WRAP, "grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14")}>
          <div className="rise">
            <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">Overview</span>
            <p className="mt-5 text-xl leading-relaxed text-foreground">{data.overview ?? mod.description}</p>
            {data.needs && <p className="mt-4 text-[15px] text-muted-foreground">Needs: {data.needs}</p>}
          </div>
          {data.who && (
            <div className={cn("rise rounded-3xl p-7", t.card)} style={{ ["--d" as string]: 2 }}>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                <UserRound className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
              </span>
              <h2 className="mt-4 text-xl font-medium tracking-tight">Who it&apos;s for</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{data.who}</p>
            </div>
          )}
        </div>
      </section>

      {/* Animated flow */}
      {visual.flow && visual.flow.length > 0 && (
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading eyebrow="How it works" title={visual.flowTitle ?? `How ${mod.name} works`} />
            <div className="mt-12">
              <FlowDiagram steps={visual.flow} toneIndex={visual.tone} />
            </div>
          </div>
        </section>
      )}

      {/* Screenshots */}
      {gallery.length > 0 && (
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="See it"
              title={`${mod.name} on screen`}
              description="Real screens from the product. Click any screenshot to zoom in."
            />
            <ModuleGallery shots={gallery} label={mod.name} className="mt-10" />
          </div>
        </section>
      )}

      <WatchDemo slug={mod.id} className="py-6" />

      {/* Features */}
      <section className="py-14 md:py-20">
        <div className={WRAP}>
          <SectionHeading
            eyebrow="Features"
            title={`What you get with ${mod.name}`}
            description={mod.status === "early-access" ? "Available today with the core workflows below." : undefined}
          />
          <div className="mt-10">
            <FeatureGroups groups={data.groups} toneIndex={visual.tone} />
          </div>
          {mod.roadmap && mod.roadmap.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              <span className="mr-2 text-sm font-semibold">Coming next:</span>
              {mod.roadmap.map((r) => (
                <span key={r} className="rounded-full border border-dashed px-3 py-1 text-sm text-muted-foreground">{r}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Connections and access */}
      {(data.worksWith || data.access) && (
        <section className="py-14 md:py-20">
          <div className={cn(WRAP, "grid gap-6 lg:grid-cols-2")}>
            {data.worksWith && (
              <div className="rounded-3xl border bg-card p-7">
                <h2 className="text-2xl font-medium tracking-tight">Works with the rest of Vrodux</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80"><Rich text={data.worksWith} /></p>
                {links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {links.map((m, i) => {
                      const mt = tone(i + 1);
                      return (
                        <Link key={m.id} href={m.href} className={cn("flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5", mt.card)}>
                          <m.icon className={cn("h-4 w-4", mt.icon)} strokeWidth={1.75} />
                          {m.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            {data.access && (
              <div className="rounded-3xl border bg-card p-7">
                <h2 className="text-2xl font-medium tracking-tight">Access control</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80"><Rich text={data.access} /></p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Built into every module */}
      <section className="py-14 md:py-20">
        <div className={WRAP}>
          <SectionHeading eyebrow="Built in" title="Security and platform, in every module" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM.map((p, i) => {
              const pt = tone(i + 2);
              return (
                <li key={p.title} className="rise flex gap-4 rounded-2xl border bg-card p-5" style={{ ["--d" as string]: (i % 6) + 1 }}>
                  <span className={cn("flex h-11 w-11 flex-none items-center justify-center rounded-full", pt.card)}>
                    <p.icon className={cn("h-5 w-5", pt.icon)} strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-medium">{p.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{p.text}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Docs */}
      {docsArticles.length > 0 && (
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading
              eyebrow="Learn"
              title={`Guides for ${mod.name}`}
              description="Step-by-step documentation for getting the most out of this module."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {docsArticles.slice(0, 6).map((a, i) => {
                const dt = tone(i);
                return (
                  <Link key={a.slug} href={`/docs/${a.categorySlug}/${a.slug}`} className="group rounded-2xl border bg-card p-6 transition-colors hover:border-brand-500/40">
                    <span className={cn("flex h-10 w-10 items-center justify-center rounded-full", dt.card)}>
                      <BookOpen className={cn("h-5 w-5", dt.icon)} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-medium leading-snug">{a.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{a.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                      Read the guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8">
              <Link href={docsHref} className={cn(pill.base, pill.outline, "group")}>
                All {mod.name} documentation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className={cn(WRAP, "grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20")}>
          <div>
            <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">FAQ</span>
            <h2 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em]">Questions about {mod.name}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-demo" className={cn(pill.base, pill.primary)}>Book a demo</Link>
              <Link href="/contact" className={cn(pill.base, pill.outline)}>Contact us</Link>
            </div>
          </div>
          <ModuleFaq faqs={faqs} />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-14 md:py-20">
          <div className={WRAP}>
            <SectionHeading eyebrow="Related" title="Works well with" />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {related.map((r, i) => {
                const rt = tone(i + 3);
                return (
                  <Link key={r.id} href={r.href} className={cn("group rounded-3xl p-6 transition-transform hover:-translate-y-1", rt.card)}>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                      <r.icon className={cn("h-5 w-5", rt.icon)} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 text-xl font-medium tracking-tight">{r.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-foreground/75">{r.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}


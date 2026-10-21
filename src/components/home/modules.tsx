import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { coreModules, industryModules, totalModuleCount } from "@/lib/modules-data";
import { SectionHeading, tone, WRAP } from "@/components/home/ui";
import { cn } from "@/lib/utils";

export function HomeModules() {
  return (
    <section className="py-16 md:py-24">
      <div className={WRAP}>
        <SectionHeading
          eyebrow={`${totalModuleCount} integrated modules`}
          title="Everything your business needs, in one platform"
          description="From finance to hospitality, retail to construction, Vrodux covers every part of your operations with deep, industry-specific functionality."
        />

        <h3 className="mb-5 mt-14 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Core business modules
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreModules.map((m, i) => {
            const t = tone(i);
            return (
              <Link
                key={m.id}
                href={m.href}
                className={cn("group flex min-h-[260px] flex-col rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1", t.card)}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                  <m.icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
                </span>
                <h4 className="mt-5 text-xl font-medium tracking-tight">{m.name}</h4>
                <ul className="mt-3 space-y-1.5">
                  {m.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm leading-snug text-foreground/75">
                      <Check className={cn("mt-0.5 h-3.5 w-3.5 flex-none", t.icon)} strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto flex items-center justify-between pt-5 text-sm font-medium">
                  Learn more
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white dark:bg-white dark:text-neutral-950 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>

        <h3 className="mb-5 mt-14 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Industry-specific modules
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {industryModules.map((m, i) => {
            const t = tone(i + 2);
            return (
              <Link
                key={m.id}
                href={m.href}
                className="group flex items-start gap-4 rounded-2xl border bg-white p-5 transition-colors hover:border-brand-500/50 dark:border-white/10 dark:bg-card"
              >
                <span className={cn("flex h-10 w-10 flex-none items-center justify-center rounded-xl", t.card)}>
                  <m.icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span className="font-medium">{m.name}</span>
                    <ArrowUpRight className="h-4 w-4 flex-none text-muted-foreground transition-colors group-hover:text-foreground" />
                  </span>
                  <span className="mt-1 line-clamp-2 block text-sm leading-snug text-muted-foreground">{m.description}</span>
                </span>
              </Link>
            );
          })}
          <Link
            href="/features"
            className="group flex items-center justify-between gap-3 rounded-2xl bg-brand-600 p-5 text-white transition-colors hover:bg-brand-700"
          >
            <span className="font-medium">Explore all features</span>
            <ArrowRight className="h-5 w-5 flex-none transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

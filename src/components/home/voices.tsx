"use client";

import { testimonials } from "@/components/sections/testimonials";
import { SectionHeading, tone, WRAP } from "@/components/home/ui";
import { cn } from "@/lib/utils";

export function HomeVoices() {
  return (
    <section className="py-16 md:py-24">
      <div className={WRAP}>
        <SectionHeading
          eyebrow="Customers"
          title="Loved by businesses across industries"
          description={
            <span className="flex flex-col gap-3">
              <span>Hear from the teams that have changed how they run their operations with Vrodux ERP.</span>
              {/* TODO(owner): "4.9/5 from 200+ reviews" removed until it can be backed by evidence. */}
            </span>
          }
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const c = tone(i);
            return (
              <figure key={t.name} className="flex flex-col rounded-3xl border bg-white p-7 dark:border-white/10 dark:bg-card">
                <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">{t.industry}</span>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/85">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t pt-5 dark:border-white/10">
                  <span className={cn("flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-semibold", c.card, c.icon)}>
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

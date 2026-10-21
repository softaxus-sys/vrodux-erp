"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardList, HeartHandshake, Rocket, Settings } from "lucide-react";
import { PricingPlans } from "@/components/sections/pricing-plans";
import { SectionHeading, WRAP, pill, tone } from "@/components/home/ui";
import { cn } from "@/lib/utils";

const steps = [
  { icon: ClipboardList, when: "Day 1", title: "Discovery & planning", text: "We learn how your business runs and agree what to set up and which data to bring across." },
  { icon: Settings, when: "Day 1", title: "Configuration & setup", text: "Vrodux is cloud-based, so your workspace is ready instantly. We set up your accounts, workflows, approvals and roles." },
  { icon: BookOpen, when: "1-2 days", title: "Data import & training", text: "Export from your current system, import into Vrodux and validate it. Your team gets role-based training." },
  { icon: Rocket, when: "Within days", title: "Go live", text: "You are ready to work. Our team stays on hand. On-premises installs take a few days because of installation and training." },
  { icon: HeartHandshake, when: "Ongoing", title: "Post-launch support", text: "Support, optimisation and regular updates keep your ERP running at its best." },
];

export function HomeGoLive() {
  return (
    <section className="py-16 md:py-24">
      <div className={WRAP}>
        <SectionHeading
          eyebrow="Implementation"
          title="From contract to go-live in days"
          description="Vrodux is cloud-based and works instantly. The only time involved is importing your data and adjusting settings."
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => {
            const t = tone(i);
            return (
              <li key={s.title} className={cn("flex flex-col rounded-3xl p-6", t.card)}>
                <span className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                    <s.icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold dark:bg-white/10">{s.when}</span>
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function HomePricing() {
  return (
    <section className="py-16 md:py-24">
      <div className={WRAP}>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="No per-module pricing and no hidden fees. The complete Vrodux ERP platform at one straightforward price."
        />
      </div>
      <div className="[&_.container]:max-w-[1400px] [&_.container]:px-9 sm:[&_.container]:px-[68px] lg:[&_.container]:px-[88px]">
        <PricingPlans />
      </div>
      <div className="mt-4 text-center">
        <Link href="/pricing" className={cn(pill.base, pill.outline, "group")}>
          View full pricing and feature comparison
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

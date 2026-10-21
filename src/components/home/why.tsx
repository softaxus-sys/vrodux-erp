import { Check, DollarSign, Globe2, Layers, Minus, ServerCog } from "lucide-react";
import { SectionHeading, tone, WRAP } from "@/components/home/ui";
import { cn } from "@/lib/utils";

const comparisons = [
  { feature: "All-in-One Platform", others: false },
  { feature: "Restaurant & KDS Module", others: false },
  { feature: "Hospitality Management", others: false },
  { feature: "Real Estate Module", others: false },
  { feature: "Construction Management", others: false },
  { feature: "Multi-Company & Branch", others: true },
  { feature: "Multi-Currency & Language", others: true },
  { feature: "RTL / Arabic Support", others: false },
  { feature: "VAT Compliance & Tax Reporting", others: false },
  { feature: "SaaS + On-Premise Options", others: false },
  { feature: "Affordable Pricing", others: false },
  { feature: "Dedicated Onboarding", others: false },
];

const advantages = [
  { icon: Layers, title: "Industry-specific depth", text: "Unlike generic ERPs, Vrodux has deep modules for restaurants, hotels, construction and real estate, not just add-ons." },
  { icon: Globe2, title: "Middle East ready", text: "Built for the UAE, Saudi Arabia and the wider MENA region, with Arabic RTL support, VAT compliance and local tax frameworks." },
  { icon: ServerCog, title: "Flexible deployment", text: "Choose SaaS for simplicity or On-Premise for control, with the same feature set and enterprise-grade security." },
  { icon: DollarSign, title: "All-inclusive pricing", text: "No module-by-module pricing. The complete platform at one transparent price, with no hidden fees." },
];

export function HomeWhy() {
  return (
    <section className="py-16 md:py-24">
      <div className={WRAP}>
        <SectionHeading
          eyebrow="Why Vrodux"
          title="Why businesses choose Vrodux over the others"
          description="We built Vrodux to close the gaps left by Oracle NetSuite, SAP and Odoo, especially for Middle East businesses and specialised industries."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="overflow-hidden rounded-3xl border bg-white dark:border-white/10 dark:bg-card">
            <div className="grid grid-cols-[1fr_5rem_5rem] items-center border-b px-5 py-4 text-sm font-semibold dark:border-white/10">
              <span>Feature</span>
              <span className="text-center text-brand-700 dark:text-white">Vrodux</span>
              <span className="text-center text-muted-foreground">Others</span>
            </div>
            {comparisons.map((row) => (
              <div key={row.feature} className="grid grid-cols-[1fr_5rem_5rem] items-center border-b px-5 py-3 text-sm last:border-0 dark:border-white/10">
                <span>{row.feature}</span>
                <span className="flex justify-center">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500/15 text-brand-700 dark:text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </span>
                <span className="flex justify-center text-muted-foreground">
                  {row.others ? <Check className="h-4 w-4" strokeWidth={2} /> : <Minus className="h-4 w-4 opacity-50" />}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((a, i) => {
              const t = tone(i);
              return (
                <div key={a.title} className={cn("rounded-3xl p-6", t.card)}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                    <a.icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-xl font-medium tracking-tight">{a.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/70">{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

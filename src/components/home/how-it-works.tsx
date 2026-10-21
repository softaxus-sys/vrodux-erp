import { Building2, Layers, Rocket, SlidersHorizontal } from "lucide-react";
import { SectionHeading, tone, WRAP } from "@/components/home/ui";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Building2,
    title: "Choose your industry",
    text: "Tell us about your business during onboarding: retail, restaurants, real estate, construction and more. Vrodux adapts from day one.",
  },
  {
    icon: Layers,
    title: "Get auto-configured",
    text: "The right mix of core modules (Finance, HR, Inventory, Sales) is switched on, plus the industry tools your sector needs.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customize your workspace",
    text: "Fine-tune workflows, roles, branches and branding to match how your team actually works.",
  },
  {
    icon: Rocket,
    title: "Go live and scale",
    text: "Launch with guided onboarding, then add modules, branches or users as you grow, with no rip-and-replace.",
  },
];

export function HomeHowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className={WRAP}>
        <SectionHeading
          eyebrow="How it works"
          title="From first login to a configured workspace"
          description="Vrodux adapts to your business, not the other way around."
        />
        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden border-t border-dashed border-foreground/20 lg:block" aria-hidden />
          {steps.map((s, i) => {
            const t = tone(i);
            return (
              <li key={s.title} className="relative">
                <span className={cn("relative flex h-12 w-12 items-center justify-center rounded-full ring-8 ring-background dark:ring-background", t.card)}>
                  <s.icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
                </span>
                <p className="mt-5 text-sm font-semibold tabular-nums text-muted-foreground">Step {i + 1}</p>
                <h3 className="mt-1 text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

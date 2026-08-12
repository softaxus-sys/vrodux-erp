import { Layers, Wallet, TrendingUp, Sparkles } from "lucide-react";

const values = [
  {
    icon: Layers,
    title: "Complete ERP",
    description: "Finance, HR, inventory, sales, CRM and operations in one platform.",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
  },
  {
    icon: Wallet,
    title: "Predictable Pricing",
    description: "No complicated per-module pricing.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description: "Start small and grow without replacing your ERP.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Sparkles,
    title: "30-Day Free Trial",
    description: "Explore Vrodux before committing.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function PricingValueProps() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          One ERP. <span className="text-gradient">One Predictable Price.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border bg-card hover:shadow-sm transition-shadow"
            >
              <div className={`w-11 h-11 rounded-xl ${v.bg} flex items-center justify-center`}>
                <v.icon className={`w-5 h-5 ${v.color}`} />
              </div>
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

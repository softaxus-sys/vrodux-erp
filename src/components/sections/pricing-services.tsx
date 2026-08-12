"use client";

import Link from "next/link";
import { Settings, Database, Plug, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/utils";

const services = [
  {
    icon: Settings,
    title: "Implementation",
    description: "ERP configuration and deployment.",
    color: "text-brand-500",
    bg: "bg-brand-500/10",
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Move your existing business data into Vrodux.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect Vrodux with your existing business systems.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description: "Build workflows and functionality specific to your organization.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export function PricingServices() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Need Help Getting Started?</h2>
          <p className="text-muted-foreground">
            Vrodux can help you configure your ERP, migrate your existing data, integrate third-party systems and
            build custom workflows for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border bg-card hover:shadow-sm transition-shadow">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link
              href="/contact?subject=Implementation+Services"
              onClick={() => trackEvent("talk_to_sales_click", { location: "services" })}
            >
              Talk to Sales
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

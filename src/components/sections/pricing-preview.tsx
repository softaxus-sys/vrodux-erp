"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { pricingTiers as tiers } from "@/lib/pricing-data";

export function PricingPreview() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No per-module pricing. No hidden fees. Get the complete Vrodux ERP platform
            at one straightforward price.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
          {tiers.map((tier, i) => {
            const isEnterprise = tier.monthly === null;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col p-7 rounded-2xl border transition-all duration-300",
                  tier.highlighted
                    ? "border-brand-500 bg-brand-500/5 shadow-glow lg:scale-[1.02]"
                    : "bg-card hover:shadow-md"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="gap-1 bg-brand-500 text-white px-4">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>

                  {isEnterprise ? (
                    <div className="mb-2">
                      <span className="text-4xl font-bold">Custom</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-bold">${tier.monthly}</span>
                        <span className="text-muted-foreground text-sm">/ month</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        or ${tier.annual}/mo billed annually
                      </p>
                    </>
                  )}

                  <p className="text-sm font-medium text-foreground/80 mb-1">{tier.users}</p>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={tier.highlighted ? "default" : "outline"}
                  className={cn("w-full", tier.highlighted && "bg-gradient-to-r from-brand-600 to-brand-500 shadow-glow-sm")}
                >
                  <Link href={isEnterprise ? "/contact?plan=enterprise" : "/pricing#plans"}>
                    {isEnterprise ? "Talk to Sales" : tier.highlighted ? "Start Free Trial" : "View Plan"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-center"
        >
          <Button variant="ghost" size="lg" asChild>
            <Link href="/pricing">
              View Full Pricing & Feature Comparison
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

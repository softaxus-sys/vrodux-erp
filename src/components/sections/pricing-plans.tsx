"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { cn, trackEvent } from "@/lib/utils";
import { type Billing, pricingTiers as tiers, savingsPercent } from "@/lib/pricing-data";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://erp.vrodux.com";

type Intent = "trial" | "buy";

function appHref(tierId: string, billing: Billing, intent: Intent) {
  return `${APP_URL}/trial?plan=${tierId}&billing=${billing}&intent=${intent}&utm_source=pricing`;
}

export function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("annual");

  function handleBillingChange(next: Billing) {
    setBilling(next);
    trackEvent("pricing_billing_toggle", { billing: next });
  }

  return (
    <section id="plans" className="py-12 scroll-mt-24">
      <div className="container mx-auto px-4">
        {/* Billing toggle */}
        <div className="flex justify-center mb-10">
          <fieldset className="inline-flex items-center gap-1 rounded-lg bg-muted p-1 border">
            <legend className="sr-only">Choose billing period</legend>
            <button
              type="button"
              aria-pressed={billing === "monthly"}
              onClick={() => handleBillingChange("monthly")}
              className={cn(
                "px-4 py-1.5 rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                billing === "monthly" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={billing === "annual"}
              onClick={() => handleBillingChange("annual")}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                billing === "annual" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Annual
              <span className="text-[11px] font-semibold text-emerald-500">Save with annual billing</span>
            </button>
          </fieldset>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
          {tiers.map((tier, i) => {
            const isEnterprise = tier.monthly === null;
            const price = billing === "annual" ? tier.annual : tier.monthly;
            const savings = !isEnterprise ? savingsPercent(tier.monthly as number, tier.annual as number) : 0;

            const trialHref = appHref(tier.id, billing, "trial");
            const buyHref = appHref(tier.id, billing, "buy");

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-7 transition-all duration-300 bg-card",
                  tier.highlighted
                    ? "border-brand-500 shadow-glow lg:scale-[1.03] bg-brand-500/5"
                    : "hover:shadow-md"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-brand-500 text-white gap-1 px-4">
                      <Zap className="w-3 h-3" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                    tier.highlighted ? "bg-brand-500/15" : "bg-muted"
                  )}
                >
                  <tier.icon className={cn("w-5 h-5", tier.highlighted ? "text-brand-500" : "text-foreground/70")} />
                </div>

                <h3 className="text-2xl font-semibold mb-1">{tier.name}</h3>

                {isEnterprise ? (
                  <div className="mb-1">
                    <span className="text-4xl font-bold">Custom Pricing</span>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                )}

                {!isEnterprise && (
                  <p className="text-xs text-muted-foreground mb-3">
                    {billing === "annual" ? (
                      <>
                        Billed annually · Save {savings}% vs. monthly (${tier.monthly}/mo)
                      </>
                    ) : (
                      <>With annual billing: ${tier.annual}/month</>
                    )}
                  </p>
                )}

                <p className="text-sm font-medium text-foreground/80 mb-1">{tier.users}</p>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <ul className="flex-1 space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {isEnterprise ? (
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/contact?plan=enterprise"
                      onClick={() => trackEvent("talk_to_sales_click", { location: "plan_card", plan: tier.id })}
                    >
                      Talk to Sales
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button
                      asChild
                      variant={tier.highlighted ? "default" : "outline"}
                      className={cn("w-full", tier.highlighted && "bg-gradient-to-r from-brand-600 to-brand-500 shadow-glow-sm")}
                    >
                      <a
                        href={trialHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent("start_free_trial_click", { location: "plan_card", plan: tier.id, billing })}
                      >
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>

                    <p className="text-xs text-center text-muted-foreground mt-2">No credit card required</p>

                    <a
                      href={buyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent("buy_now_click", { location: "plan_card", plan: tier.id, billing })}
                      className="block text-center text-xs font-medium text-brand-500 hover:underline mt-3"
                    >
                      Already decided? Buy Now →
                    </a>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

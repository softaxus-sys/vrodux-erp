"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/utils";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://erp.vrodux.com";

const points = [
  "30-day free trial",
  "No credit card required",
  "Full access to the selected plan",
  "Cancel anytime",
];

export function PricingTrialBanner() {
  return (
    <section className="py-10 border-y bg-brand-500/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-500 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Try Vrodux Free for 30 Days
            </div>
            <p className="text-muted-foreground max-w-xl">
              Explore the complete Vrodux ERP platform with no upfront commitment.
            </p>
            <ul className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-1.5 text-sm">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-1.5 text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-brand-600 to-brand-500 shadow-glow-sm flex-shrink-0"
            asChild
          >
            <a
              href={`${APP_URL}/trial?intent=trial&utm_source=pricing_trial_banner`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("start_free_trial_click", { location: "trial_banner" })}
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

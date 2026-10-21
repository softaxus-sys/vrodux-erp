"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { GRID_STYLE, PANEL, pill } from "@/components/home/ui";
import { cn, trackEvent } from "@/lib/utils";
import { TRIAL_DAYS } from "@/lib/trial";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://erp.vrodux.com";

export function PricingFinalCta() {
  return (
    <section className="px-3 pb-3 pt-6 sm:px-5 lg:px-6">
      <div className={PANEL}>
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-12 md:py-28">
          <h2 className="text-4xl font-medium leading-[1.06] tracking-[-0.035em] sm:text-6xl">
            Ready to run your business in one place?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Choose the plan that fits your team and bring your business operations together. Every module is included.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#plans"
              onClick={() => trackEvent("buy_now_click", { location: "final_cta" })}
              className={cn(pill.base, pill.light, "group")}
            >
              Buy Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/contact"
              onClick={() => trackEvent("talk_to_sales_click", { location: "final_cta" })}
              className={cn(pill.base, pill.outlineLight)}
            >
              <MessageSquare className="h-4 w-4" />
              Talk to Sales
            </Link>
          </div>
          <a
            href={`${APP_URL}/trial?intent=trial&utm_source=pricing_final_cta`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("start_free_trial_click", { location: "final_cta" })}
            className="mt-6 inline-block text-sm text-white/70 hover:text-white hover:underline"
          >
            or start a {TRIAL_DAYS}-day free trial – no credit card
          </a>
        </div>
      </div>
    </section>
  );
}

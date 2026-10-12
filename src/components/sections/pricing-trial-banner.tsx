"use client";

import { trackEvent } from "@/lib/utils";
import { TRIAL_DAYS } from "@/lib/trial";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://erp.vrodux.com";

export function PricingTrialBanner() {
  return (
    <section className="py-3 border-y bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs text-muted-foreground">
          Not ready to buy? Try everything free for {TRIAL_DAYS} days – all modules, unlimited users, no credit card.{" "}
          <a
            href={`${APP_URL}/trial?intent=trial&utm_source=pricing_trial_banner`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("start_free_trial_click", { location: "trial_banner" })}
            className="font-medium text-foreground hover:underline"
          >
            Start free trial
          </a>
        </p>
      </div>
    </section>
  );
}

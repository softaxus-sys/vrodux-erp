"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { trackEvent } from "@/lib/utils";
import { TRIAL_DAYS } from "@/lib/trial";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://erp.vrodux.com";

export function PricingHeroCtas() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" className="" asChild>
          <a href="#plans" onClick={() => trackEvent("buy_now_click", { location: "hero" })}>
            Buy Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link
            href="/contact?subject=Sales"
            onClick={() => trackEvent("talk_to_sales_click", { location: "hero" })}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Talk to Sales
          </Link>
        </Button>
      </div>
      <a
        href={`${APP_URL}/trial?intent=trial&utm_source=pricing_hero`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("start_free_trial_click", { location: "hero" })}
        className="text-xs text-muted-foreground hover:text-foreground hover:underline"
      >
        or start a {TRIAL_DAYS}-day free trial – no credit card
      </a>
    </div>
  );
}

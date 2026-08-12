"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { trackEvent } from "@/lib/utils";

export function PricingHeroCtas() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button size="lg" className="bg-gradient-to-r from-brand-600 to-brand-500 shadow-glow-sm" asChild>
        <a href="#plans" onClick={() => trackEvent("start_free_trial_click", { location: "hero" })}>
          Start Free Trial
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
  );
}

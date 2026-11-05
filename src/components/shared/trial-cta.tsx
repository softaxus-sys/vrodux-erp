"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/utils";

/** The trial destination for the UAE compliance landing page (Google Ads). */
export const COMPLIANCE_TRIAL_URL =
  "https://erp.vrodux.com/trial?utm_source=website&utm_medium=landing&utm_campaign=uae-compliance";

/** Primary call to action. Uses the site's existing gtag event helper; no new scripts are added. */
export function TrialCta({
  location,
  variant = "default",
  size = "lg",
  children = "Start your free 14-day trial",
}: {
  location: string;
  variant?: "default" | "outline";
  size?: "default" | "lg";
  children?: React.ReactNode;
}) {
  return (
    <Button asChild variant={variant} size={size}>
      <a
        href={COMPLIANCE_TRIAL_URL}
        rel="noopener"
        onClick={() => trackEvent("trial_click", { location, page: "uae-vat-payroll-e-invoicing" })}
      >
        {children}
      </a>
    </Button>
  );
}

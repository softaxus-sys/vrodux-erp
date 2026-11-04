import { AI_KEY_TEXT } from "@/lib/owner-flags";
import { Building2, Feather, LucideIcon, Rocket, Zap } from "lucide-react";

export type Billing = "monthly" | "annual";

export interface PricingTier {
  id: string;
  name: string;
  icon: LucideIcon;
  monthly: number | null;
  annual: number | null;
  users: string;
  description: string;
  highlighted: boolean;
  features: string[];
}

export function savingsPercent(monthly: number, annual: number) {
  return Math.round((1 - annual / monthly) * 100);
}

// TODO(owner): the tiering of multi-company (up to 3), multi-currency, advanced BI, API access, custom workflows and
// advanced reporting is unconfirmed. In the product they work on every plan (only seats and storage are limited),
// so they are shown as included on all plans and "up to 3 companies" is removed until you confirm.
export const pricingTiers: PricingTier[] = [
  {
    id: "micro",
    name: "Micro",
    icon: Feather,
    monthly: 159,
    annual: 129,
    users: "Up to 3 users",
    description: "For very small teams of up to 3 people who want the complete ERP without paying for seats they don't need.",
    highlighted: false,
    features: [
      "Up to 3 users",
      "Every module included",
      `Vrodux AI on every plan: ${AI_KEY_TEXT.charAt(0).toLowerCase()}${AI_KEY_TEXT.slice(1)}`, // see owner-flags.ts
      "Multi-currency, API access and reporting on every plan",
      "Cloud hosting & automatic updates",
      "Standard support",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    icon: Rocket,
    monthly: 299,
    annual: 249,
    users: "Up to 10 users",
    description: "For startups and small businesses ready to run their core operations in one place.",
    highlighted: false,
    features: [
      "Up to 10 users",
      "Every module included",
      `Vrodux AI on every plan: ${AI_KEY_TEXT.charAt(0).toLowerCase()}${AI_KEY_TEXT.slice(1)}`, // see owner-flags.ts
      "Multi-currency, API access and reporting on every plan",
      "Cloud hosting & automatic updates",
      "Standard support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    icon: Zap,
    monthly: 849,
    annual: 699,
    users: "Up to 50 users",
    description: "Everything growing businesses need to manage operations, customers, sales and financials in one platform.",
    highlighted: true,
    features: [
      "Up to 50 users",
      "Every module included",
      `Vrodux AI on every plan: ${AI_KEY_TEXT.charAt(0).toLowerCase()}${AI_KEY_TEXT.slice(1)}`, // see owner-flags.ts
      "Multi-currency, API access and reporting on every plan",
      "Cloud hosting & automatic updates",
      "Priority support", // OWNER DECISION
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building2,
    monthly: null,
    annual: null,
    users: "Unlimited",
    description: "For organizations that need advanced capabilities, integrations, infrastructure and dedicated support.",
    highlighted: false,
    features: [
      "Everything in Professional",
      "Unlimited users",
      "Advanced permissions",
      "Custom integrations",
      "Dedicated support",
      "SLA",
      "Dedicated infrastructure options",
      "On-premise deployment option",
      "Data migration assistance",
      "Custom development",
      "Enterprise security",
      "Enterprise onboarding",
      "Dedicated account management",
    ],
  },
];

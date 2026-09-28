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

export const pricingTiers: PricingTier[] = [
  {
    id: "micro",
    name: "Micro",
    icon: Feather,
    monthly: 159,
    annual: 129,
    users: "Up to 3 users",
    description: "For very small teams who want the complete ERP without paying for seats they don't need.",
    highlighted: false,
    features: [
      "Core ERP",
      "Accounting",
      "Finance",
      "HR & Payroll",
      "Inventory",
      "Sales",
      "Purchasing",
      "Basic CRM",
      "Basic reporting",
      "Basic analytics",
      "Standard support",
      "Cloud hosting",
      "Automatic updates",
      "30-day free trial",
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
      "Core ERP",
      "Accounting",
      "Finance",
      "HR & Payroll",
      "Inventory",
      "Sales",
      "Purchasing",
      "Basic CRM",
      "Basic reporting",
      "Basic analytics",
      "Standard support",
      "Cloud hosting",
      "Automatic updates",
      "30-day free trial",
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
      "Everything in Starter",
      "Advanced CRM",
      "Advanced sales management",
      "POS",
      "Restaurant POS / KDS",
      "Hospitality management",
      "Advanced inventory",
      "Multi-company — up to 3 companies",
      "Multi-currency",
      "Advanced analytics & BI",
      "API access",
      "Custom workflows",
      "Advanced reporting",
      "Priority support",
      "Cloud hosting",
      "Automatic updates",
      "30-day free trial",
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
      "Unlimited companies",
      "Advanced permissions",
      "Enterprise reporting",
      "Advanced BI",
      "Custom integrations",
      "Dedicated support",
      "SLA",
      "Dedicated infrastructure options",
      "On-premise deployment option",
      "Data migration assistance",
      "Custom workflows",
      "Custom development",
      "Enterprise security",
      "Enterprise onboarding",
      "Dedicated account management",
    ],
  },
];

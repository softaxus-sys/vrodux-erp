import { TRIAL_DAYS } from "@/lib/trial";

export const pricingFaqs = [
  {
    q: "Is there a free trial?",
    a: `Yes. Vrodux offers a ${TRIAL_DAYS}-day free trial.`,
  },
  {
    q: "Do I need a credit card to start?",
    a: `No. Users can start the ${TRIAL_DAYS}-day trial without entering a credit card.`,
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Customers should be able to upgrade or change plans as their business grows.",
  },
  {
    q: "What's the difference between \"Start Free Trial\" and \"Buy Now\"?",
    a: `Start Free Trial gives you ${TRIAL_DAYS} days of full access with no card required and no commitment. Buy Now skips the trial and activates your subscription immediately, billed right away on the plan and cycle you selected.`,
  },
  {
    q: "Is there a per-user fee?",
    a: "Micro, Starter and Professional plans each include a set number of users in the subscription price (3, 10 and 50 respectively). Enterprise supports unlimited users.",
  },
  {
    q: "Are there per-module fees?",
    a: "No. The pricing is designed around the complete ERP platform rather than charging separately for individual ERP modules.",
  },
  {
    q: "Can Vrodux support multiple companies?",
    a: "Yes. Professional supports up to 3 companies, while Enterprise supports unlimited companies.",
  },
  {
    q: "Does Vrodux support custom integrations?",
    a: "Professional supports API access and custom workflows. Enterprise includes advanced/custom integrations.",
  },
  {
    q: "Do you provide implementation services?",
    a: "Yes. Implementation, data migration, integrations and custom development can be provided separately.",
  },
  {
    q: "Can Vrodux be deployed on-premise?",
    a: "Enterprise customers can discuss on-premise deployment options with the Vrodux team.",
  },
];

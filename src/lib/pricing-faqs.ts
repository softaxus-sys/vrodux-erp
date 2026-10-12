import { TRIAL_DAYS } from "@/lib/trial";

export const pricingFaqs = [
  {
    q: "Is there a free trial?",
    a: `Yes. Every new account gets a ${TRIAL_DAYS}-day free trial with all modules and unlimited users, and no credit card is needed. When the trial ends, you pick the plan that fits your team size.`,
  },
  {
    q: "Do I need a credit card to start?",
    a: `Not for the trial: you can start the ${TRIAL_DAYS}-day trial without entering a card. Buying starts your subscription straight away, so payment details are taken at checkout.`,
  },
  {
    q: "Can I change plans later?",
    a: "Yes, you can move up any time. Moving to a smaller plan needs your active users to fit within it: if you have 42 users, choose the 50-user plan, or deactivate some users first.",
  },
  {
    q: "Should I buy now or try first?",
    a: `Buy Now takes you to checkout straight away. The free trial gives you ${TRIAL_DAYS} days with everything unlocked and no card. If you buy first, you can still claim the trial from the billing page if you change your mind and have never paid.`,
  },
  {
    q: "Is there a per-user fee?",
    a: "No. Pricing is by team size: pick the plan that covers your users (3, 10 or 50 on Micro, Starter and Professional; Enterprise supports unlimited users).",
  },
  {
    q: "Are there per-module fees?",
    a: "No. Every module is included on every plan.",
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

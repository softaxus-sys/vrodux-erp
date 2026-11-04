import { TRIAL_DAYS } from "@/lib/trial";
import { AI_KEY_TEXT } from "@/lib/owner-flags";

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
    q: "Is Vrodux AI included, and what does it cost?",
    // see owner-flags.ts: the shared allowance is only mentioned once the owner confirms it.
    a: `Vrodux AI is on every plan. ${AI_KEY_TEXT}.`,
  },
  {
    q: "Can Vrodux support multiple companies?",
    // TODO(owner): the multi-company limit per plan is unconfirmed, so no number is stated. Restore "up to 3" only once confirmed.
    a: "Talk to the Vrodux team about multi-company setups and we will confirm what fits your plan.",
  },
  {
    q: "Does Vrodux support custom integrations?",
    a: "API access and workflows are available on every plan. Enterprise adds custom integrations.",
  },
  {
    q: "Are there other costs besides the plan?",
    a: "There are no per-module fees. Add-ons such as SEO audits and Lead Generation reveals use credits you buy yourself in Settings, Billing, Add-ons and credits. Optional services such as data migration, implementation and custom development are quoted separately.",
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

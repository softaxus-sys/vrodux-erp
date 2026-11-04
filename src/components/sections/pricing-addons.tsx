import { Coins } from "lucide-react";

// TODO(owner): confirm the swap fee and the "not refundable" wording, then set this to true.
// Until then those two statements are not shown to visitors.
const ADDON_POLICY_CONFIRMED = false;

export function PricingAddons() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <Coins className="w-5 h-5 text-amber-600" aria-hidden="true" />
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold">Add-ons and credits</h2>
        </div>
        <p className="text-muted-foreground text-center mb-6">
          SEO audits and Lead Generation reveals use credits. They are separate from your plan, and prices are shown in Billing.
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-6">
          <li>Buy credits in <strong className="text-foreground">Settings, Billing, Add-ons and credits</strong> by card (Stripe or PayPal).</li>
          <li>Each add-on keeps its own balance, shown in credits. Bulk purchases get a discount.</li>
          <li>Credits do not expire{ADDON_POLICY_CONFIRMED ? " and are not refundable" : ""}.</li>
          {ADDON_POLICY_CONFIRMED && <li>You can swap credits from one add-on to another at their relative value (a small fee may apply).</li>}
          <li>Credits can be bought once your workspace has a subscription, not during the free trial.</li>
        </ul>
      </div>
    </section>
  );
}

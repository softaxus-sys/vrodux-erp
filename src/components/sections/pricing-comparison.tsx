import { Check, Minus } from "lucide-react";

type Row = { feature: string; micro: boolean; starter: boolean; professional: boolean; enterprise: boolean };
type Category = { name: string; rows: Row[] };

const categories: Category[] = [
  {
    name: "Platform",
    rows: [
      { feature: "Core ERP", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "Accounting", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "Finance", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "HR", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "Payroll", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "Inventory", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "Sales", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "Purchasing", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "CRM", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "POS", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Restaurant / KDS", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Hospitality", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Construction", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "Real Estate", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "Healthcare", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "Education", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "Insurance", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "B2B & Professional Services", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "Visa Services", micro: false, starter: false, professional: false, enterprise: true },
    ],
  },
  {
    name: "Business Management",
    rows: [
      { feature: "Multi-company", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Multi-currency", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Advanced workflows", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Advanced permissions", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "Advanced reporting", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Analytics", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "BI", micro: false, starter: false, professional: true, enterprise: true },
    ],
  },
  {
    name: "Integrations & Technology",
    rows: [
      { feature: "API", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Custom integrations", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "Cloud hosting", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "Automatic updates", micro: true, starter: true, professional: true, enterprise: true },
      { feature: "On-premise deployment", micro: false, starter: false, professional: false, enterprise: true },
    ],
  },
  {
    name: "Support",
    rows: [
      { feature: "Standard support", micro: true, starter: true, professional: false, enterprise: false },
      { feature: "Priority support", micro: false, starter: false, professional: true, enterprise: true },
      { feature: "Dedicated support", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "SLA", micro: false, starter: false, professional: false, enterprise: true },
      { feature: "Account management", micro: false, starter: false, professional: false, enterprise: true },
    ],
  },
];

function Cell({ included }: { included: boolean }) {
  return included ? (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 mx-auto">
      <Check className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-6 h-6 mx-auto">
      <Minus className="w-3.5 h-3.5 text-muted-foreground/30" aria-hidden="true" />
      <span className="sr-only">Not included</span>
    </span>
  );
}

export function PricingComparison() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-3">Compare Plans</h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-10">
          Every plan is built on the same complete ERP platform — higher tiers unlock more depth, scale and support.
        </p>

        <div className="max-w-6xl mx-auto rounded-2xl border overflow-x-auto">
          <table className="w-full text-sm min-w-[760px]">
            <caption className="sr-only">Feature comparison between Micro, Starter, Professional and Enterprise plans</caption>
            <thead>
              <tr className="border-b bg-muted/50 sticky top-0">
                <th scope="col" className="text-left p-4 font-semibold">
                  Feature
                </th>
                <th scope="col" className="text-center p-4 font-semibold">
                  Micro
                </th>
                <th scope="col" className="text-center p-4 font-semibold">
                  Starter
                </th>
                <th scope="col" className="text-center p-4 font-semibold text-brand-500">
                  Professional
                </th>
                <th scope="col" className="text-center p-4 font-semibold">
                  Enterprise
                </th>
              </tr>
            </thead>
            {categories.map((cat) => (
              <tbody key={cat.name}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={5}
                    className="text-left px-4 pt-6 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {cat.name}
                  </th>
                </tr>
                {cat.rows.map((row, i) => (
                  <tr key={row.feature} className={`border-b hover:bg-muted/20 ${i % 2 === 0 ? "bg-muted/5" : ""}`}>
                    <th scope="row" className="text-left p-4 font-normal">
                      {row.feature}
                    </th>
                    <td className="p-4">
                      <Cell included={row.micro} />
                    </td>
                    <td className="p-4">
                      <Cell included={row.starter} />
                    </td>
                    <td className="p-4">
                      <Cell included={row.professional} />
                    </td>
                    <td className="p-4">
                      <Cell included={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}

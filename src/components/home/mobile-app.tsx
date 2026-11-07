import Link from "next/link";
import { CheckCircle2, Smartphone } from "lucide-react";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { SectionHeading, WRAP } from "@/components/home/ui";

const points = [
  "Approvals in one inbox: leave, purchase, sales returns and payroll",
  "CRM leads and pipeline, and your own attendance, leave and payslips",
  "Camera barcode scanning, and the hotel front desk",
  "Push notifications when something needs you",
  "Vrodux AI from the Ask Vrodux button",
  "Same account, role and two-factor sign-in as the web app",
];

/** "Take Vrodux with you" band: used on the home page and the features page. */
export function HomeMobileApp({ location = "home" }: { location?: string }) {
  return (
    <section id="mobile-app" className="py-16 md:py-24" aria-labelledby="mobile-app-h">
      <div className={WRAP}>
        <SectionHeading
          eyebrow="Mobile app"
          title={<span id="mobile-app-h">Take Vrodux ERP with you</span>}
          description="A companion app for what makes sense away from a desk: approvals, lookups and quick actions. Heavier admin work stays on the web."
        />
        <div className="mt-12 grid items-center gap-10 rounded-3xl border bg-card p-8 md:p-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              See what is on your phone in the{" "}
              <Link href="/docs/mobile-app/whats-on-your-phone" className="underline underline-offset-4">
                mobile app guide
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 lg:items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10">
              <Smartphone className="h-8 w-8 text-brand-500" aria-hidden />
            </span>
            <p className="font-medium">Download the Vrodux ERP app</p>
            <AppStoreButtons location={location} />
          </div>
        </div>
      </div>
    </section>
  );
}

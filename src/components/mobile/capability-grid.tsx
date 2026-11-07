import Link from "next/link";
import { ArrowUpRight, Bell, CalendarCheck, ClipboardCheck, Hotel, ScanLine, ShoppingCart, UtensilsCrossed, Users } from "lucide-react";
import { Reveal } from "@/components/mobile/reveal";

const ITEMS = [
  { icon: Users, title: "Update leads and deals", text: "Work your CRM pipeline from your phone: update leads and move deals by stage.", href: "/features/crm" },
  { icon: CalendarCheck, title: "Attendance and leave", text: "Mark your attendance and apply for leave without a desk.", href: "/features/hr" },
  { icon: ClipboardCheck, title: "Approve requests", text: "Leave, purchase requests and payroll arrive in one inbox.", href: "/docs/mobile-app/whats-on-your-phone" },
  { icon: UtensilsCrossed, title: "Take restaurant orders", text: "Start a new order, and see tables, live orders and the kitchen.", href: "/features/restaurant" },
  { icon: ShoppingCart, title: "Run a checkout", text: "Open a shift and run a sale at the point of sale.", href: "/features/pos" },
  { icon: ScanLine, title: "Scan barcodes and QR codes", text: "Use the camera to look up stock or add it.", href: "/features/inventory" },
  { icon: Hotel, title: "Hotel front desk", text: "Arrivals, departures and payments at the front desk.", href: "/features/hospitality" },
  { icon: Bell, title: "Push notifications", text: "Get a notification when an approval needs you.", href: "/docs/mobile-app/whats-on-your-phone" },
];

export function CapabilityGrid() {
  return (
    <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {ITEMS.map((it, i) => (
        <li key={it.title}>
          <Reveal delay={(i % 4) * 0.07} className="h-full">
            <Link href={it.href} className="group flex h-full flex-col rounded-3xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 transition-colors group-hover:bg-brand-500">
                <it.icon className="h-6 w-6 text-brand-500 transition-colors group-hover:text-white" aria-hidden />
              </span>
              <p className="mt-5 text-lg font-medium leading-snug">{it.title}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-300">
                Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

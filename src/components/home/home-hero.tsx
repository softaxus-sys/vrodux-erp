import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cloud, Languages, Layers, PlayCircle, ShieldCheck } from "lucide-react";
import { ThemedShotImage } from "@/components/sections/themed-shot";
import { totalModuleCount } from "@/lib/modules-data";
import type { HomeShots } from "@/lib/home-shots";
import { GRID_STYLE, PANEL, pill } from "@/components/home/ui";
import { BrowserFrame, GridCells } from "@/components/home/panel-art";
import { cn } from "@/lib/utils";

const points = [
  { icon: Cloud, text: "Cloud-ready instantly" },
  { icon: Layers, text: `${totalModuleCount} integrated modules` },
  { icon: Languages, text: "Arabic, RTL and VAT" },
];

const tiles = [
  {
    title: "Finance & Accounting",
    text: "GL, AP/AR, bank reconciliation and live financial reports.",
    href: "/features/finance",
    color: "#7CE6B0",
  },
  {
    title: "Retail & Restaurant POS",
    text: "Fast checkout, tables and a kitchen display that stays in sync.",
    href: "/features/pos",
    color: "#C4A6FF",
  },
  {
    title: "HR & Payroll",
    text: "Employees, attendance, leave and payroll in one workspace.",
    href: "/features/hr",
    color: "#FFD86B",
  },
];

const trust = ["GDPR Compliant", "ISO 27001", "SOC 2 Type II — In Progress", "99.9% Uptime SLA"];

export function HomeHero({ shots }: { shots: HomeShots }) {
  return (
    <section className="px-3 pb-3 pt-[4.5rem] sm:px-5 lg:px-6">
      <div className={PANEL}>
        <div className="absolute inset-0" style={GRID_STYLE} aria-hidden />
        <GridCells
          cells={[
            { right: 2, top: 1, color: "yellow", opacity: 0.95 },
            { right: 9, top: 3, color: "violet", opacity: 0.85 },
            { right: 1, top: 8, color: "mint", opacity: 0.8 },
            { right: 12, top: 0, color: "sky", opacity: 0.7 },
          ]}
        />

        <div className="relative grid gap-14 px-6 pt-12 sm:px-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8 lg:px-16 lg:pt-20">
          <div className="pb-2 lg:pb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9CC6FF]">
              The Digital Axis of Your Enterprise
            </p>
            <h1 className="mt-6 text-5xl font-medium leading-[1.04] tracking-[-0.035em] sm:text-6xl xl:text-7xl">
              The Enterprise ERP That Scales With You
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              One unified platform for Finance, HR, Inventory, Sales, CRM, POS, Hospitality, Real Estate and
              more. SaaS or On-Premise. Multi-company. Multi-currency. Global-ready.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/book-demo" className={cn(pill.base, pill.light, "group")}>
                Schedule Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/demos" className={cn(pill.base, pill.outlineLight)}>
                <PlayCircle className="h-4 w-4" />
                Watch the demos
              </Link>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {points.map((p) => (
                <li key={p.text} className="flex items-center gap-2 text-sm font-medium text-white">
                  <p.icon className="h-[18px] w-[18px] text-[#7CE6B0]" strokeWidth={1.75} />
                  {p.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative pb-10 lg:pb-16">
            <BrowserFrame url="erp.vrodux.com" className="w-full sm:w-[92%] lg:-mr-4">
              <ThemedShotImage
                shot={shots.hero}
                alt="Vrodux ERP dashboard showing revenue, invoices, orders and customer KPIs"
                sizes="(min-width: 1024px) 620px, 100vw"
                priority
                zoomable
              />
            </BrowserFrame>
            <BrowserFrame
              url="erp.vrodux.com / finance"
              className="absolute -bottom-2 right-0 hidden w-[52%] sm:block lg:-right-6 lg:bottom-0"
            >
              <ThemedShotImage
                shot={shots.finance}
                alt="Vrodux ERP financial statements: profit and loss"
                sizes="(min-width: 1024px) 340px, 50vw"
                zoomable
              />
            </BrowserFrame>
          </div>
        </div>

        <div className="relative mt-4 grid gap-4 px-6 pb-8 sm:px-12 md:grid-cols-3 lg:mt-8 lg:px-16">
          {tiles.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group rounded-2xl border p-5 transition-colors hover:bg-white/10"
              style={{ borderColor: t.color, backgroundColor: `${t.color}1F` }}
            >
              <span className="flex items-center justify-between text-xl font-medium">
                {t.title}
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: t.color }} />
              </span>
              <span className="mt-2 block text-[15px] leading-snug" style={{ color: t.color }}>
                {t.text}
              </span>
            </Link>
          ))}
        </div>

        <div className="relative border-t border-white/15 px-6 py-4 sm:px-12 lg:px-16">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-white/85">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#7CE6B0]" strokeWidth={1.75} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

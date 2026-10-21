import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Building2, Factory, GraduationCap, HardHat, Home, Hotel, Library,
  ShieldCheck, ShoppingBag, Stamp, Stethoscope, Ship, UtensilsCrossed,
} from "lucide-react";
import { SectionHeading, pill, WRAP } from "@/components/home/ui";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Retail", icon: ShoppingBag, href: "/industries/retail" },
  { name: "Restaurants", icon: UtensilsCrossed, href: "/industries/restaurants" },
  { name: "Hospitality", icon: Hotel, href: "/industries/hospitality" },
  { name: "Real Estate", icon: Home, href: "/industries/real-estate" },
  { name: "Construction", icon: HardHat, href: "/industries/construction" },
  { name: "Healthcare", icon: Stethoscope, href: "/industries/healthcare" },
  { name: "Education", icon: GraduationCap, href: "/industries/education" },
  { name: "Insurance", icon: ShieldCheck, href: "/industries/insurance" },
  { name: "B2B Services", icon: Building2, href: "/industries/b2b-services" },
  { name: "Visa Services", icon: Stamp, href: "/industries/visa-services" },
  { name: "Manufacturing", icon: Factory, href: "/industries/manufacturing" },
  { name: "Library", icon: Library, href: "/industries/library" },
  { name: "Import & Export", icon: Ship, href: "/industries/import-export" },
];

const featured = [
  { name: "Retail", text: "POS, stock and loyalty across every store.", href: "/industries/retail", src: "/images/industries/retail.jpg", alt: "Retail checkout counter running Vrodux POS" },
  { name: "Restaurants", text: "Tables, kitchen display and recipe costing.", href: "/industries/restaurants", src: "/images/industries/restaurant.jpg", alt: "Restaurant kitchen using Vrodux POS and kitchen display" },
  { name: "Real Estate", text: "Listings, leads, contracts and collections.", href: "/industries/real-estate", src: "/images/industries/real-estate.jpg", alt: "Real estate office managing properties with Vrodux" },
];

export function HomeIndustries() {
  return (
    <section className="py-16 md:py-24">
      <div className={WRAP}>
        <SectionHeading
          eyebrow="Industries"
          title="Built for the way your industry works"
          description="Deep modules that understand your business model, not generic features with an industry label."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {featured.map((f) => (
            <Link key={f.name} href={f.href} className="group relative block aspect-square overflow-hidden rounded-3xl bg-[#0A0A0B]">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/70 to-transparent p-6 pt-24 text-white">
                <span className="flex items-center justify-between text-2xl font-medium tracking-tight">
                  {f.name}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0A0A0A]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </span>
                <span className="mt-1 block text-sm text-white/80">{f.text}</span>
              </div>
            </Link>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {industries.map((ind) => (
            <li key={ind.name}>
              <Link
                href={ind.href}
                className="flex items-center gap-2 rounded-full border bg-white px-4 py-2.5 text-sm font-medium transition-colors hover:border-brand-500 hover:text-brand-700 dark:border-white/10 dark:bg-card dark:hover:text-white"
              >
                <ind.icon className="h-4 w-4 text-brand-600 dark:text-white" strokeWidth={1.75} />
                {ind.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Link href="/industries" className={cn(pill.base, pill.outline, "group")}>
            View all industry solutions
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

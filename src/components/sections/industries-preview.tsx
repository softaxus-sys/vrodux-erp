"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, UtensilsCrossed, Hotel, Home, HardHat, Stethoscope, GraduationCap, ShieldCheck, Building2, Stamp, Factory, Library, Ship } from "lucide-react";

const industries = [
  { name: "Retail", icon: ShoppingBag, href: "/industries#retail", color: "from-pink-500 to-rose-600" },
  { name: "Restaurants", icon: UtensilsCrossed, href: "/industries#restaurants", color: "from-red-500 to-orange-600" },
  { name: "Hospitality", icon: Hotel, href: "/industries#hospitality", color: "from-cyan-500 to-blue-600" },
  { name: "Real Estate", icon: Home, href: "/industries#realestate", color: "from-violet-500 to-purple-600" },
  { name: "Construction", icon: HardHat, href: "/industries#construction", color: "from-yellow-500 to-amber-600" },
  { name: "Healthcare", icon: Stethoscope, href: "/industries#healthcare", color: "from-emerald-500 to-teal-600" },
  { name: "Education", icon: GraduationCap, href: "/industries#education", color: "from-blue-500 to-indigo-600" },
  { name: "Insurance", icon: ShieldCheck, href: "/industries#insurance", color: "from-indigo-500 to-blue-700" },
  { name: "B2B Services", icon: Building2, href: "/industries#b2bservices", color: "from-brand-500 to-indigo-600" },
  { name: "Visa Services", icon: Stamp, href: "/industries#visa-services", color: "from-fuchsia-500 to-purple-600" },
  { name: "Manufacturing", icon: Factory, href: "/industries#manufacturing", color: "from-zinc-500 to-slate-600" },
  { name: "Library", icon: Library, href: "/industries#library", color: "from-sky-500 to-indigo-600" },
  { name: "Import & Export", icon: Ship, href: "/industries#import-export", color: "from-blue-500 to-cyan-600" },
];

const featured = [
  {
    name: "Retail",
    href: "/industries#retail",
    src: "/images/industries/retail.jpg",
    alt: "Retail checkout counter running Vrodux POS",
  },
  {
    name: "Restaurants",
    href: "/industries#restaurants",
    src: "/images/industries/restaurant.jpg",
    alt: "Restaurant kitchen using Vrodux POS and kitchen display",
  },
  {
    name: "Real Estate",
    href: "/industries#realestate",
    src: "/images/industries/real-estate.jpg",
    alt: "Real estate office managing properties with Vrodux",
  },
];

export function IndustriesPreview() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Built for Your <span className="text-gradient">Industry</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Deep, industry-specific modules that understand your unique business model —
            not just generic features with an industry label.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {featured.map((f) => (
            <Link
              key={f.name}
              href={f.href}
              className="group relative block aspect-square rounded-2xl overflow-hidden border shadow-sm hover:shadow-glow-sm transition-shadow"
            >
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  {f.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                href={ind.href}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border bg-card hover:shadow-glow-sm hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                  <ind.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold">{ind.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/industries">
              View All Industry Solutions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

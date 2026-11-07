"use client";

import { motion, useReducedMotion } from "framer-motion";
import { KeyRound, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { PhoneShot } from "@/components/mobile/phone-shot";
import type { PhoneScreen } from "@/lib/phone-screens";

const CHIPS = [
  { icon: Smartphone, text: "Android, on Google Play" },
  { icon: KeyRound, text: "Same login as the web app" },
  { icon: ShieldCheck, text: "Two-factor supported" },
  { icon: Sparkles, text: "Included with every plan" },
];

function Float({ children, delay, className }: { children: React.ReactNode; delay: number; className: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 60 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div animate={reduce ? undefined : { y: [0, -8, 0] }} transition={{ duration: 5 + delay * 3, repeat: Infinity, ease: "easeInOut" }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export function MobileHero({ screens }: { screens: PhoneScreen[] }) {
  const pick = (slug: string, i: number) => screens.find((s) => s.slug === slug) ?? screens[i];
  const mid = pick("dashboard", 0);
  const left = pick("leads", 1);
  const right = pick("approvals", 2);
  const show = !!(mid && left && right);

  return (
    <section className="px-3 pb-4 pt-[4.5rem] sm:px-5 lg:px-6">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#B5D6FF] px-6 py-14 dark:bg-[#17379B] sm:rounded-[2.75rem] sm:px-12 md:py-20 lg:px-16">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 h-[30rem] w-[30rem] rounded-full bg-white/40 blur-3xl dark:bg-brand-400/20" />
        <div className={show ? "relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]" : "relative"}>
          <div>
            <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">Mobile app for Android</span>
            <h1 className="mt-5 text-4xl font-medium leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">Your whole business in your pocket.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              Check sales, people, stock and customers, and act on approvals from anywhere.
            </p>
            <div className="mt-8">
              <AppStoreButtons location="mobile_hero" />
            </div>
            <p className="mt-4 text-sm text-foreground/70">Android now on Google Play. The App Store version is coming soon.</p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {CHIPS.map((c) => (
                <li key={c.text} className="flex items-center gap-2 rounded-full border border-foreground/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium backdrop-blur dark:bg-white/10">
                  <c.icon className="h-3.5 w-3.5 text-brand-600 dark:text-brand-300" aria-hidden /> {c.text}
                </li>
              ))}
            </ul>
          </div>

          {show && (
            <div className="relative mx-auto h-[24rem] w-full max-w-[32rem] sm:h-[30rem]">
              <Float delay={0.45} className="absolute left-[3%] top-[16%] w-[30%] -rotate-6">
                <PhoneShot src={left.imageUrl} alt={left.alt} width={left.width} height={left.height} className="rounded-[1.5rem] border-[5px]" />
              </Float>
              <Float delay={0.6} className="absolute right-[3%] top-[22%] w-[30%] rotate-6">
                <PhoneShot src={right.imageUrl} alt={right.alt} width={right.width} height={right.height} className="rounded-[1.5rem] border-[5px]" />
              </Float>
              <Float delay={0.25} className="absolute left-1/2 top-0 z-10 w-[40%] -translate-x-1/2">
                <PhoneShot src={mid.imageUrl} alt={mid.alt} width={mid.width} height={mid.height} priority className="rounded-[2rem] border-[6px] shadow-2xl" />
              </Float>
            </div>
          )}
        </div>
        <p className="relative mt-8 text-xs text-foreground/60">Screenshots show demo data.</p>
      </div>
    </section>
  );
}

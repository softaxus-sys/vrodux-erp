"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { PhoneShot } from "@/components/mobile/phone-shot";
import { CORE_STEPS } from "@/components/mobile/module-copy";
import type { PhoneScreen } from "@/lib/phone-screens";
import { cn } from "@/lib/utils";


/**
 * Everyday screens: the steps scroll on the left while the phone stays pinned on the right,
 * tilting gently and changing screen with each step.
 */
export function StepsStory({ screens }: { screens: PhoneScreen[] }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const steps = CORE_STEPS.map((s) => ({ ...s, screen: screens.find((x) => x.slug === s.slug) })).filter((s): s is (typeof CORE_STEPS)[number] & { screen: PhoneScreen } => !!s.screen);
  const n = steps.length;
  const [active, setActive] = useState(0);

  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });
  const line = useTransform(p, [0, 1], [0, 1]);
  const sway = useSpring(useTransform(p, [0, 0.5, 1], [-16, -6, -14]), { stiffness: 80, damping: 20 });
  const tilt = useSpring(useTransform(p, [0, 1], [6, -4]), { stiffness: 80, damping: 20 });

  useMotionValueEvent(p, "change", (v) => {
    const i = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setActive((c) => (c === i ? c : i));
  });

  if (n < 2) return null;

  const header = (
    <div className="mx-auto max-w-[1400px] px-6 pt-20 sm:px-12 lg:px-20">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">The essentials</p>
      <h2 id="steps-h" className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
        From open to done, one screen at a time.
      </h2>
    </div>
  );

  if (reduce) {
    return (
      <section aria-labelledby="steps-h" className="bg-[#0b1026] pb-20 text-white">
        {header}
        <ol className="mx-auto mt-14 grid max-w-[1400px] gap-12 px-6 sm:px-12 lg:grid-cols-3 lg:px-20">
          {steps.map((s, i) => (
            <li key={s.slug}>
              <p className="font-mono text-sm tracking-widest"><span className="text-cyan-300">0{i + 1}</span> <span className="uppercase text-white/60">{s.tag}</span></p>
              <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.body}</p>
              <div className="mt-6 w-44"><PhoneShot src={s.screen.imageUrl} alt={s.screen.alt} width={s.screen.width} height={s.screen.height} /></div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <section aria-labelledby="steps-h" className="relative overflow-x-clip bg-[#0b1026] pb-24 text-white">
      {header}
      <div ref={ref} className="mx-auto mt-10 grid max-w-[1400px] px-6 sm:px-12 lg:mt-16 lg:grid-cols-2 lg:px-20">
        {/* phone: pinned (top on small screens, right on large) */}
        <div className="sticky top-16 z-10 order-first -mx-6 flex h-[44vh] items-center justify-center bg-[#0b1026] px-6 shadow-[0_18px_24px_-8px_#0b1026] sm:-mx-12 lg:order-last lg:mx-0 lg:h-[calc(100vh-6rem)] lg:bg-transparent lg:px-0 lg:shadow-none">
          <div aria-hidden className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,113,80,.35),rgba(34,211,238,.12)_55%,transparent_70%)] blur-2xl lg:h-[26rem] lg:w-[26rem]" />
          <div className="relative h-[85%] max-h-[34rem] [perspective:1600px] lg:h-[78%]" style={{ aspectRatio: "9 / 19.5" }}>
            <motion.div style={{ rotateY: sway, rotateX: tilt, transformStyle: "preserve-3d" }} className="relative h-full w-full">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative h-full w-full">
                <div className="absolute -inset-[3px] rounded-[2.4rem] bg-gradient-to-b from-white/50 via-cyan-300/40 to-orange-400/50" />
                {steps.map((s, i) => (
                  <motion.div
                    key={s.slug}
                    className="absolute inset-0"
                    initial={false}
                    animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 0.97, filter: i === active ? "blur(0px)" : "blur(8px)" }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden={i !== active}
                  >
                    <PhoneShot src={s.screen.imageUrl} alt={s.screen.alt} width={s.screen.width} height={s.screen.height} priority={i === 0} className="h-full rounded-[2.25rem] border-[7px] !border-neutral-950 shadow-2xl" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* steps */}
        <div className="relative lg:pr-10">
          <div aria-hidden className="absolute bottom-0 left-0 top-0 w-[2px] bg-white/10">
            <motion.div style={{ scaleY: line }} className="h-full origin-top bg-gradient-to-b from-cyan-300 to-orange-400" />
          </div>
          <ol>
            {steps.map((s, i) => (
              <li key={s.slug} className="flex min-h-[62vh] items-end pb-10 pl-8 sm:pl-12 lg:min-h-[70vh] lg:items-center lg:pb-0">
                <motion.div animate={{ opacity: i === active ? 1 : 0.3, x: i === active ? 0 : -8 }} transition={{ duration: 0.4 }} className="max-w-lg">
                  <p className="font-mono text-sm tracking-[0.2em]"><span className="text-cyan-300">0{i + 1}</span> <span className="uppercase text-white/60">{s.tag}</span></p>
                  <h3 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl">{s.title}</h3>
                  <p className={cn("mt-5 text-lg leading-relaxed text-white/70")}>{s.body}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-[1400px] px-6 text-sm text-white/50 sm:px-12 lg:px-20">Screenshots show demo data.</p>
    </section>
  );
}

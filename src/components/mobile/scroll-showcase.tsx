"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { PhoneShot } from "@/components/mobile/phone-shot";
import { TAGS } from "@/components/mobile/module-copy";
import type { PhoneScreen } from "@/lib/phone-screens";
import { cn } from "@/lib/utils";


/** Static swipe row, used for reduced motion and when there is only one screen. */
function StaticRow({ screens }: { screens: PhoneScreen[] }) {
  return (
    <ul
      className="-mx-9 flex snap-x snap-mandatory gap-6 overflow-x-auto px-9 pb-4 sm:-mx-[68px] sm:px-[68px] lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-8 lg:overflow-visible lg:px-0"
      aria-label="Vrodux ERP mobile app screenshots"
    >
      {screens.map((s) => (
        <li key={s.slug} className="w-[11.5rem] shrink-0 snap-center sm:w-[13rem] lg:w-auto">
          <PhoneShot src={s.imageUrl} alt={s.alt} width={s.width} height={s.height} />
          <p className="mt-4 font-medium">{s.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{s.caption}</p>
        </li>
      ))}
    </ul>
  );
}

function Brackets() {
  const c = "absolute h-6 w-6 border-white/70";
  return (
    <>
      <span aria-hidden className={cn(c, "-left-4 -top-4 rounded-tl-lg border-l-2 border-t-2")} />
      <span aria-hidden className={cn(c, "-right-4 -top-4 rounded-tr-lg border-r-2 border-t-2")} />
      <span aria-hidden className={cn(c, "-bottom-4 -left-4 rounded-bl-lg border-b-2 border-l-2")} />
      <span aria-hidden className={cn(c, "-bottom-4 -right-4 rounded-br-lg border-b-2 border-r-2")} />
    </>
  );
}

/**
 * Scroll-driven showcase in a dark stage: the panel stays pinned while you scroll. A numbered list on the
 * left lights up one step at a time, the phone in the middle changes screen, and short labels from that
 * screen slide in on the right.
 */
export function ScrollShowcase({ screens }: { screens: PhoneScreen[] }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const n = screens.length;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 26, mass: 0.4 });
  const rotateY = useTransform(smooth, [0, 0.5, 1], [-14, 0, 14]);
  const rotateX = useTransform(smooth, [0, 1], [6, -4]);
  const glowY = useTransform(smooth, [0, 1], ["-25%", "25%"]);
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(n - 1, Math.max(0, Math.floor(p * n)));
    setActive((cur) => (cur === i ? cur : i));
  });

  if (reduce || n < 2) return <StaticRow screens={screens} />;

  const cur = screens[active];
  const tags = TAGS[cur.slug] ?? [];

  function goTo(i: number) {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + span * ((i + 0.5) / n), behavior: "smooth" });
  }

  return (
    <div ref={ref} style={{ height: `${n * (n > 10 ? 40 : 75) + 60}vh` }} className="relative">
      <div className="sticky top-20 h-[min(44rem,calc(100vh-6rem))] min-h-[30rem]">
        <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#07080d] text-white shadow-2xl">
          {/* grid lines */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
              backgroundSize: "25% 100%, 100% 25%",
            }}
          />
          {/* glow that drifts as you scroll */}
          <motion.div
            aria-hidden
            style={{ y: glowY }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.45),rgba(236,72,153,.18)_45%,transparent_70%)] blur-2xl"
          />

          <div className="relative grid h-full grid-rows-[1fr_auto] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-1">
            {/* left: numbered steps (desktop) */}
            <div className="relative hidden overflow-hidden px-10 lg:block [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
              <motion.ol
                className="absolute inset-x-10 top-1/2"
                animate={{ y: -(active * 64 + 32) }}
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
                aria-label="Screens"
              >
                {screens.map((s, i) => {
                  const on = i === active;
                  return (
                    <li key={s.slug} style={{ minHeight: 64 }}>
                      <button type="button" onClick={() => goTo(i)} className="group flex w-full items-start gap-4 text-left" aria-current={on ? "step" : undefined}>
                        <span className={cn("mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-mono text-xs transition-colors duration-300", on ? "border-white/80 text-white" : "border-white/20 text-white/40")}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span className={cn("block text-xl font-medium leading-8 tracking-tight transition-colors duration-300", on ? "text-white" : "text-white/35 group-hover:text-white/60")}>{s.title}</span>
                          <motion.span initial={false} animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="block overflow-hidden text-sm leading-relaxed text-white/65">
                            <span className="block pb-4 pt-0.5">{s.caption}</span>
                          </motion.span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </motion.ol>
            </div>

            {/* centre: phone */}
            <div className="flex items-center justify-center px-6 py-4 lg:px-12 lg:py-8">
              <div className="relative h-full max-h-[34rem] [perspective:1400px]" style={{ aspectRatio: "9 / 19" }}>
                <Brackets />
                <motion.div style={{ rotateY, rotateX, transformStyle: "preserve-3d" }} className="relative h-full w-full">
                  <div className="absolute -inset-[3px] rounded-[2.4rem] bg-[conic-gradient(from_200deg,#22d3ee,#6366f1,#ec4899,#f59e0b,#22d3ee)] opacity-90" />
                  <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border-[6px] border-neutral-950 bg-neutral-950">
                    {screens.map((s, i) => (
                      <motion.div
                        key={s.slug}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                          opacity: i === active ? 1 : 0,
                          y: i === active ? 0 : i < active ? "-12%" : "12%",
                          scale: i === active ? 1 : 0.94,
                          filter: i === active ? "blur(0px)" : "blur(6px)",
                        }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        aria-hidden={i !== active}
                      >
                        <PhoneShot
                          src={s.imageUrl}
                          alt={s.alt}
                          width={s.width}
                          height={s.height}
                          priority={i === 0}
                          className="h-full rounded-none border-0 shadow-none"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* right: labels from the current screen */}
            <div className="flex flex-col justify-center px-6 pb-6 lg:px-10 lg:py-8 lg:pr-16">
              <p className="mb-3 text-center font-mono text-xs uppercase tracking-widest text-white/50 lg:hidden" aria-live="polite">
                {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} · {cur.title}
              </p>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={cur.slug}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={{ show: { transition: { staggerChildren: 0.06 } }, hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } } }}
                  className="flex flex-wrap justify-center gap-2 lg:flex-col lg:items-stretch lg:gap-0 lg:border-y lg:border-white/10"
                >
                  {tags.map((t) => (
                    <motion.li
                      key={t}
                      variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="rounded-md border border-white/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-white/80 lg:rounded-none lg:border-0 lg:border-b lg:border-white/10 lg:px-0 lg:py-3 lg:text-right lg:text-xs last:lg:border-b-0"
                    >
                      {t}
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
              <p className="mt-4 hidden text-right text-xs text-white/40 lg:block">Screenshots show demo data.</p>
            </div>
          </div>

          {/* progress dots (right edge) */}
          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-1.5 lg:flex" aria-hidden>
            {screens.map((s, i) => (
              <span key={s.slug} className={cn("block rounded-full transition-all duration-300", i === active ? "h-2.5 w-2.5 bg-white" : "h-1.5 w-1.5 bg-white/25")} />
            ))}
          </div>
          {/* progress bar (bottom) */}
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
            <motion.div style={{ scaleX: barScale }} className="h-full origin-left bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

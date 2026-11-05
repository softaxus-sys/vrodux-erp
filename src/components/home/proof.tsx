"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { clients } from "@/components/sections/clients";
import { Eyebrow, WRAP } from "@/components/home/ui";
import { totalModuleCount } from "@/lib/modules-data";

// TODO(owner): "500+ businesses powered", "40+ countries served" and "99.9% uptime SLA" were removed
// because nothing in the product repository backs them. Restore each one only with evidence.
const stats = [
  { value: totalModuleCount, suffix: "", label: "Integrated ERP modules" },
  { value: 14, suffix: "-day", label: "Free trial, unlimited users" },
  { value: 2, suffix: "", label: "Languages: English and Arabic" },
  { value: 300, suffix: "+", label: "Tools in Vrodux AI" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: setN });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {value % 1 !== 0 ? n.toFixed(1) : Math.round(n)}
      {suffix}
    </span>
  );
}

export function HomeProof() {
  return (
    <section className="py-16 md:py-20">
      <div className={WRAP}>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={i > 0 ? "lg:border-l lg:pl-8" : ""}>
              <dd className="text-5xl font-medium tracking-[-0.03em] tabular-nums sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 text-sm text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-16 md:mt-20">
          <Eyebrow>Live on Vrodux ERP</Eyebrow>
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {clients.map((c) => (
              <a
                key={c.domain}
                href={`https://${c.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-28 items-center justify-center rounded-2xl border bg-white px-6 transition-colors hover:border-brand-500/50 dark:border-white/10"
              >
                {c.dark ? (
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900">
                    <Image src={c.logo} alt={`${c.name} logo`} width={c.width} height={c.height} sizes="56px" className="h-8 w-auto object-contain" />
                  </span>
                ) : (
                  <Image src={c.logo} alt={`${c.name} logo`} width={c.width} height={c.height} sizes="(min-width: 1024px) 230px, 45vw" className="max-h-14 w-auto max-w-full object-contain" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

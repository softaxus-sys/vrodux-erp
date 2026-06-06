"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Globe, Users, Clock } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Businesses Powered", icon: Users, color: "text-brand-500" },
  { value: 40, suffix: "+", label: "Countries Served", icon: Globe, color: "text-cyan-500" },
  { value: 12, suffix: "", label: "ERP Modules", icon: TrendingUp, color: "text-purple-500" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", icon: Clock, color: "text-emerald-500" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {value % 1 !== 0 ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Numbers That <span className="text-gradient">Speak for Themselves</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vrodux ERP is trusted by hundreds of businesses worldwide to manage their critical operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group p-8 rounded-2xl border bg-card hover:shadow-glow-sm transition-all duration-300 text-center"
            >
              <div className={`w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`text-4xl lg:text-5xl font-extrabold mb-2 ${stat.color}`}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

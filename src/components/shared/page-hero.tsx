"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  centered?: boolean;
}

export function PageHero({
  badge,
  title,
  highlightedWord,
  description,
  className,
  children,
  centered = true,
}: PageHeroProps) {
  const parts = highlightedWord ? title.split(highlightedWord) : [title];

  return (
    <section className={cn("relative pt-28 pb-16 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-mesh-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={centered ? "text-center max-w-4xl mx-auto" : "max-w-4xl"}
        >
          {badge && (
            <Badge variant="brand" className="mb-6 px-4 py-1.5 text-sm">
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            {highlightedWord ? (
              <>
                {parts[0]}
                <span className="text-gradient">{highlightedWord}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

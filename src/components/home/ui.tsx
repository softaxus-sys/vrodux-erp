import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Bold solid card backgrounds: light tints in light mode, saturated deep colours in dark mode, with a matching icon colour. */
export const TONES = [
  { card: "bg-[#B5D6FF] dark:bg-[#1D4FD7]", icon: "text-brand-700 dark:text-white" },
  { card: "bg-[#D5C2FF] dark:bg-[#6A3DDB]", icon: "text-violet-700 dark:text-white" },
  { card: "bg-[#A8E6C3] dark:bg-[#047857]", icon: "text-emerald-700 dark:text-white" },
  { card: "bg-[#FFE08A] dark:bg-[#B45309]", icon: "text-amber-700 dark:text-white" },
  { card: "bg-[#FFC9A3] dark:bg-[#C2410C]", icon: "text-orange-700 dark:text-white" },
  { card: "bg-[#FFBFD0] dark:bg-[#BE185D]", icon: "text-rose-700 dark:text-white" },
] as const;

export const tone = (i: number) => TONES[i % TONES.length];

/** Page canvas: warm off-white in light mode, the normal dark background otherwise. */
export const CANVAS = "bg-background";

/** Content wrapper whose text edge lines up with the inside of the dark panels. */
export const WRAP = "mx-auto max-w-[1400px] px-9 sm:px-[68px] lg:px-[88px]";

/** Large rounded dark panel used for the hero, showcase and closing call to action. */
export const PANEL =
  "relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#0A2272] text-white dark:bg-[#0F2D96] sm:rounded-[2.75rem]";

/** Faint grid texture for dark panels. */
export const GRID_STYLE = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  backgroundPosition: "100% 0",
  maskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, black 20%, transparent 75%)",
  WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 70% 30%, black 20%, transparent 75%)",
} as const;

export const pill = {
  base: "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  primary: "bg-brand-600 text-white hover:bg-brand-700 focus-visible:ring-brand-500 dark:bg-brand-500 dark:text-[#040f35] dark:hover:bg-brand-400",
  light: "bg-white text-neutral-950 hover:bg-brand-50 focus-visible:ring-white",
  outline: "border border-foreground/25 text-foreground hover:bg-foreground/5 focus-visible:ring-brand-500",
  outlineLight: "border border-white/35 text-white hover:bg-white/10 focus-visible:ring-white",
};

/** Small label with an accent underline. */
export function Eyebrow({ children, onDark }: { children: ReactNode; onDark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold",
        onDark ? "text-white" : "text-foreground"
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  onDark,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16", className)}>
      <div>
        <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>
        <h2
          className={cn(
            "mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl",
            onDark ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p className={cn("text-lg leading-relaxed", onDark ? "text-white/90" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
}

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

/** Inner-page hero: a soft pastel panel with a plain, large headline. */
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
    <section className={cn("px-3 pb-4 pt-[4.5rem] sm:px-5 lg:px-6", className)}>
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] bg-[#B5D6FF] px-6 py-14 dark:bg-[#17379B] sm:rounded-[2.75rem] sm:px-12 md:py-20 lg:px-16">
        <div className={cn("max-w-4xl", centered && "mx-auto text-center")}>
          {badge && (
            <span className="inline-block border-b-[3px] border-brand-500 pb-1 text-sm font-semibold">{badge}</span>
          )}
          <h1 className="mt-5 text-4xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            {highlightedWord ? (
              <>
                {parts[0]}
                <span className="text-foreground">{highlightedWord}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className={cn("mt-6 text-lg leading-relaxed text-foreground/80 md:text-xl", centered && "mx-auto max-w-2xl")}>
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

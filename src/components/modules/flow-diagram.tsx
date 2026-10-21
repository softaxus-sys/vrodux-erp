import { iconByName } from "@/components/modules/icons";
import { tone } from "@/components/home/ui";
import type { FlowStep } from "@/lib/module-visuals";
import { cn } from "@/lib/utils";

/**
 * Animated "how it flows" diagram. Steps light up one after another and dashed connectors
 * move along the path (CSS only). Horizontal on desktop, vertical on phones.
 */
export function FlowDiagram({ steps, toneIndex = 0 }: { steps: FlowStep[]; toneIndex?: number }) {
  const t = tone(toneIndex);
  const n = steps.length;
  return (
    <div
      style={{
        ["--flow-step" as string]: "1.4s",
        ["--flow-total" as string]: `${n * 1.4 + 1.2}s`,
      }}
    >
      <ol className="hidden lg:grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`, gap: "1.5rem" }}>
        {steps.map((s, i) => {
          const Icon = iconByName(s.icon);
          return (
            <li key={s.title} className="rise relative" style={{ ["--d" as string]: i + 2 }}>
              <div className="flex items-center">
                <span
                  className={cn("flow-node relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full", t.card)}
                  style={{ ["--i" as string]: i }}
                >
                  <Icon className={cn("h-6 w-6", t.icon)} strokeWidth={1.75} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[11px] font-semibold text-background">
                    {i + 1}
                  </span>
                </span>
                {i < n - 1 && <span className="flow-line ml-2 h-[2px] flex-1" aria-hidden />}
              </div>
              <h3 className="mt-4 text-lg font-medium tracking-tight">{s.title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/75">{s.text}</p>
            </li>
          );
        })}
      </ol>

      <ol className="lg:hidden">
        {steps.map((s, i) => {
          const Icon = iconByName(s.icon);
          return (
            <li key={s.title} className="rise flex gap-4" style={{ ["--d" as string]: i + 1 }}>
              <div className="flex flex-col items-center">
                <span
                  className={cn("flow-node relative flex h-12 w-12 flex-none items-center justify-center rounded-full", t.card)}
                  style={{ ["--i" as string]: i }}
                >
                  <Icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
                </span>
                {i < n - 1 && <span className="flow-line-y my-1 w-[2px] flex-1 min-h-6" aria-hidden />}
              </div>
              <div className="pb-6">
                <h3 className="text-lg font-medium tracking-tight">
                  <span className="mr-2 text-sm font-semibold tabular-nums text-muted-foreground">{i + 1}</span>
                  {s.title}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-foreground/75">{s.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

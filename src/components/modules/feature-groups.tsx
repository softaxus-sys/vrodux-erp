import { Check } from "lucide-react";
import { iconForTitle } from "@/components/modules/icons";
import { Rich } from "@/components/modules/rich";
import { tone } from "@/components/home/ui";
import { splitItem, ucfirst } from "@/lib/module-page-data";
import type { ModuleContentGroup } from "@/lib/module-content.generated";
import { cn } from "@/lib/utils";

/**
 * Renders a module's feature groups. Several groups become coloured cards with an icon and a
 * bullet list; a single long group becomes a grid of small icon cards, one per capability.
 */
export function FeatureGroups({ groups, toneIndex = 0 }: { groups: ModuleContentGroup[]; toneIndex?: number }) {
  if (groups.length === 1) {
    const items = groups[0].items;
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const { title, text } = splitItem(item);
          const t = tone(toneIndex + i);
          const Icon = iconForTitle(title ?? text, i);
          return (
            <div key={i} className="rise rounded-3xl border bg-card p-6" style={{ ["--d" as string]: (i % 6) + 1 }}>
              <span className={cn("flex h-11 w-11 items-center justify-center rounded-full", t.card)}>
                <Icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
              </span>
              {title && <h3 className="mt-4 text-lg font-medium tracking-tight">{title}</h3>}
              <p className={cn("text-[15px] leading-relaxed text-foreground/75", title ? "mt-2" : "mt-4")}>
                <Rich text={text} />
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((g, i) => {
        const t = tone(toneIndex + i);
        const Icon = iconForTitle(g.title, i);
        return (
          <section key={g.title} className={cn("rise rounded-3xl p-7", t.card)} style={{ ["--d" as string]: (i % 6) + 1 }}>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 dark:bg-white/10">
                <Icon className={cn("h-5 w-5", t.icon)} strokeWidth={1.75} />
              </span>
              <h3 className="text-xl font-medium tracking-tight">{g.title}</h3>
            </div>
            <ul className="mt-5 space-y-2.5">
              {g.items.map((item, k) => (
                <li key={k} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-foreground/85">
                  <Check className={cn("mt-1 h-4 w-4 flex-none", t.icon)} strokeWidth={2.5} />
                  <span>
                    <Rich text={ucfirst(item)} />
                  </span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

import { moduleContent, type ModuleContentGroup } from "@/lib/module-content.generated";
import { moduleVisuals, type ModuleVisual } from "@/lib/module-visuals";
import { coreModules, type ModuleTile } from "@/lib/modules-data";

/** Everything a module page needs, merged from the module docs, the visual metadata and the tile data. */
export interface ModulePageData {
  mod: ModuleTile;
  kind: "core" | "industry";
  headline: string;
  tagline: string;
  overview?: string;
  who?: string;
  groups: ModuleContentGroup[];
  worksWith?: string;
  access?: string;
  needs?: string;
  visual: ModuleVisual;
}

export function getModulePageData(mod: ModuleTile): ModulePageData {
  const c = moduleContent[mod.id];
  const visual: ModuleVisual = moduleVisuals[mod.id] ?? {
    tone: 0,
    seoTitle: mod.name,
    seoDescription: mod.description,
  };

  let groups: ModuleContentGroup[] = c?.groups ?? [];
  if (groups.length === 0) {
    if (c?.summary) groups = [{ title: "What's included", items: [c.summary] }];
    else if (mod.capabilities?.length)
      groups = [
        {
          title: "What's included",
          items: mod.capabilities.map((cap) => (cap.description ? `**${cap.title}** — ${cap.description}` : cap.title)),
        },
      ];
    else groups = [{ title: "What's included", items: mod.features }];
  }

  return {
    mod,
    kind: coreModules.some((m) => m.id === mod.id) ? "core" : "industry",
    headline: c?.headline || mod.description,
    tagline: c?.tagline || "",
    overview: c?.overview,
    who: c?.who,
    groups,
    worksWith: c?.worksWith,
    access: c?.access,
    needs: c?.needs,
    visual,
  };
}

/** Split "**Title** — description" (or "Title: description") into parts for card rendering. */
export function splitItem(item: string): { title?: string; text: string } {
  const bold = item.match(/^\*\*(.+?)\*\*\s*(?:—|–|-|:)?\s*(.*)$/);
  if (bold) return { title: bold[1].trim().replace(/[:.]$/, ""), text: ucfirst(bold[2].trim()) };
  const dash = item.match(/^([^—:]{3,48}?)\s+—\s+(.*)$/);
  if (dash) return { title: dash[1].trim(), text: ucfirst(dash[2].trim()) };
  return { text: ucfirst(item) };
}

/** Capitalises the first letter of a sentence fragment (leaves leading **bold** alone). */
export function ucfirst(text: string): string {
  return text && !text.startsWith("**") ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

/** Plain text of an item with markdown bold markers removed. */
export function plain(text: string): string {
  return text.replace(/\*\*/g, "");
}

/** Module slugs mentioned in a "Works with" sentence, in order, for link chips. */
const MENTIONS: [RegExp, string][] = [
  [/\bCRM\b/i, "crm"],
  [/\bSales\b/i, "sales"],
  [/\bPurchase\b/i, "purchase"],
  [/\bInventory\b/i, "inventory"],
  [/\bFinance\b/i, "finance"],
  [/\bManufacturing\b/i, "manufacturing"],
  [/\bPOS\b/i, "pos"],
  [/\bRestaurant\b/i, "restaurant"],
  [/\bHR\b|payroll/i, "hr"],
  [/Import\/Export|\bTrade\b/i, "import-export"],
  [/\bLibrary\b/i, "library"],
  [/\bVisa\b/i, "visa-services"],
  [/Real Estate/i, "real-estate"],
  [/Hospitality|Hotel/i, "hospitality"],
  [/Lead Generation/i, "lead-generation"],
  [/Project/i, "project-management"],
  [/Reports hub/i, "reports"],
];

export function mentionedModules(text: string | undefined, self: string): string[] {
  if (!text) return [];
  const out: string[] = [];
  for (const [re, slug] of MENTIONS) if (slug !== self && re.test(text) && !out.includes(slug)) out.push(slug);
  return out;
}

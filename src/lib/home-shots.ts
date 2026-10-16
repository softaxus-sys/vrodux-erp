import { getHomeManifestShots, getShotRefs, type ShotRef } from "@/lib/docs-screenshots";

/**
 * Home-page screenshots, one slot per tab / marquee tile, each with an optional
 * light-theme and dark-theme image.
 *  - Images come from the Contabo manifest (docs `items` or top-level `home`;
 *    dark ones use the light key + "-dark").
 *  - Local screens are only a last-resort fallback if the manifest is unreachable.
 * A slot missing one theme falls back to the other at render time, so nothing
 * is ever blank. Candidates are tried in order; the first that exists wins.
 */
export type Shot = ShotRef;
export interface ThemedShot {
  light?: Shot;
  dark?: Shot;
}

type Ref =
  | { docs: [article: string, index: number] }
  | { home: string }
  | { local: string };

const LOCAL_DIR = "/Verdux-erp-app-ss/";
const LOCAL_SIZE = { width: 1910, height: 913 };

const docs = (article: string, index: number): Ref => ({ docs: [article, index] });
const home = (key: string): Ref => ({ home: key });
const local = (file: string): Ref => ({ local: file });

const SLOTS = {
  hero: { light: [docs("/docs/start-here/your-dashboard", 1), local("dashboard-light.png")], dark: [home("dashboard-dark"), local("dashboardDark.png")] },
  finance: { light: [docs("/docs/finance/invoicing-expenses-ledger", 3), local("finance-module-light.png")], dark: [home("finance-dark"), local("finance-module-dark.png")] },
  hr: { light: [home("hr"), local("hr-and-payrole-light.png")], dark: [home("hr-dark"), local("hr-and-payrole-dark.png")] },
  crm: { light: [docs("/docs/crm/leads-pipeline-customers", 2), local("crm-light.png")], dark: [home("crm-dark"), local("crm-dark.png")] },
  reports: { light: [home("reports"), local("module-wise-reports-light.png")], dark: [home("reports-dark"), local("module-wise-reports-dark.png")] },
  retail: { light: [home("retail-pos")], dark: [home("retail-pos-dark"), local("retail-system-rubust.png")] },
  restaurant: { light: [home("restaurant-pos"), docs("/docs/pos/retail-and-restaurant", 2)], dark: [home("restaurant-pos-dark"), local("resturant-point-of-sale.png")] },
  login: { light: [home("login-light"), local("login-light.png")], dark: [home("login-dark"), local("login-dark.png")] },
  "add-employee": { light: [home("add-employee")], dark: [home("add-employee-dark"), local("hr-add-employe.png")] },
  attendance: { light: [docs("/docs/hr/employees-attendance-leave-payroll", 2)], dark: [home("attendance-dark"), local("hr-attendance.png")] },
  "industry-modules": { light: [docs("/docs/start-here/creating-your-account", 2)], dark: [home("industry-dark"), local("industory-wise-modules.png")] },
  kitchen: { light: [home("kitchen")], dark: [home("kitchen-dark"), local("kds.png")] },
  recipe: { light: [home("recipes")], dark: [home("recipes-dark"), local("recipe.png")] },
  ingredients: { light: [home("ingredients")], dark: [home("ingredients-dark"), local("ingreadents.png")] },
  "master-data": { light: [home("master-data")], dark: [home("master-data-dark"), local("master-data.png")] },
  "general-settings": { light: [docs("/docs/settings/users-security-plan", 1)], dark: [home("general-settings-dark"), local("general-setting.png")] },
  "payment-methods": { light: [home("payment-methods")], dark: [home("payment-methods-dark"), local("region-wise-payment-methods.png")] },
  vouchers: { light: [home("vouchers")], dark: [home("vouchers-dark"), local("vocuhers-and-coupens.png")] },
  "user-management": { light: [docs("/docs/settings/users-security-plan", 2)], dark: [home("users-dark"), local("user-managments.png")] },
  "roles-permissions": { light: [docs("/docs/start-here/users-roles-teams-permissions", 1)], dark: [home("roles-dark"), local("roles-and-permissions.png")] },
  branches: { light: [home("branches")], dark: [home("branches-dark"), local("branch-managment.png")] },
  integrations: { light: [home("integrations")], dark: [home("integrations-dark"), local("integrations-comming-soon.png")] },
  "audit-logs": { light: [home("audit-logs")], dark: [home("audit-logs-dark"), local("complete-audit-logs.png")] },
} satisfies Record<string, { light: Ref[]; dark: Ref[] }>;

export type HomeSlot = keyof typeof SLOTS;
export type HomeShots = Partial<Record<HomeSlot, ThemedShot>>;

export async function getHomeShots(): Promise<HomeShots> {
  // Collect every docs ref once, then resolve against the (cached) manifest.
  const docRefs: Record<string, { article: string; index: number }> = {};
  for (const slot of Object.values(SLOTS)) {
    for (const r of [...slot.light, ...slot.dark]) {
      if ("docs" in r) docRefs[`${r.docs[0]}#${r.docs[1]}`] = { article: r.docs[0], index: r.docs[1] };
    }
  }
  const [docShots, homeShots] = await Promise.all([getShotRefs(docRefs), getHomeManifestShots()]);

  const resolve = (r: Ref): Shot | undefined => {
    if ("docs" in r) return docShots[`${r.docs[0]}#${r.docs[1]}`];
    if ("home" in r) return homeShots[r.home];
    return { src: LOCAL_DIR + r.local, ...LOCAL_SIZE };
  };
  const first = (refs: Ref[]) => {
    for (const r of refs) {
      const shot = resolve(r);
      if (shot) return shot;
    }
    return undefined;
  };

  const out: HomeShots = {};
  for (const [slot, def] of Object.entries(SLOTS) as [HomeSlot, { light: Ref[]; dark: Ref[] }][]) {
    out[slot] = { light: first(def.light), dark: first(def.dark) };
  }
  return out;
}

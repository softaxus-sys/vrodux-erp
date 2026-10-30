import { Metadata } from "next";
import { RestaurantErpPage } from "@/components/industries/restaurant-erp-page";
import { getIndustryBySlug } from "@/lib/industries-data";
import { moduleVisuals } from "@/lib/module-visuals";
import { getModuleGallery } from "@/lib/module-shots";

// A dedicated route for this page: Next.js serves a static segment ahead of /industries/[slug],
// so the shared industry template (and every other industry page) is untouched.

const TITLE = "Restaurant ERP Software for Restaurants & Cafes | Vrodux";
const OG_DESCRIPTION =
  "Run your restaurant operations from one platform. Manage POS, kitchen orders, inventory, recipes, purchasing and accounting with Vrodux ERP.";
const PAGE_URL = "https://vrodux.com/industries/restaurants";
const IMAGE = "https://vrodux.com/images/industries/restaurant.jpg";
const IMAGE_ALT = "Chefs plating dishes in a busy kitchen with a Vrodux restaurant POS and kitchen display";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Manage restaurant and cafe operations with Vrodux ERP. Integrated POS, kitchen display, inventory, recipe costing, purchasing and accounting. Book a demo.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "Vrodux ERP",
    images: [{ url: IMAGE, alt: IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [IMAGE],
  },
};

export default async function RestaurantsIndustryPage() {
  const industry = getIndustryBySlug("restaurants");
  const shots = await getModuleGallery([
    ...(moduleVisuals.restaurant?.shots ?? []),
    { slot: "finance", caption: "Finance and accounting" },
    { slot: "branches", caption: "Branch management" },
  ]);
  return <RestaurantErpPage shots={shots} image={industry?.image} />;
}

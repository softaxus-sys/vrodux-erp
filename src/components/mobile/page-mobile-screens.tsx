import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppStoreButtons } from "@/components/shared/app-store-buttons";
import { PhoneShot } from "@/components/mobile/phone-shot";
import { getPhoneScreens } from "@/lib/phone-screens";

/** "On your phone" block for a module or industry page. Renders nothing if no screenshot is mapped to the page. */
export async function PageMobileScreens({ path, name }: { path: string; name: string }) {
  const shots = (await getPhoneScreens()).filter((s) => s.pages.includes(path)).slice(0, 4);
  if (shots.length === 0) return null;

  return (
    <section aria-labelledby="page-mobile-h" className="py-14 md:py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 id="page-mobile-h" className="text-2xl font-semibold tracking-tight sm:text-3xl">{name} on your phone</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The Vrodux ERP Android app has a screen for this too, showing what your role has access to. Screenshots show demo data.
        </p>
        <ul className="mt-8 flex flex-wrap gap-6">
          {shots.map((s) => (
            <li key={s.slug} className="w-[10.5rem] sm:w-[12rem]">
              <PhoneShot src={s.imageUrl} alt={s.alt} width={s.width} height={s.height} className="rounded-[1.75rem] border-[5px]" />
              <p className="mt-3 text-sm font-medium">{s.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{s.caption}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <AppStoreButtons location={`page_${path.replace(/\W+/g, "_")}`} />
          <Link href="/mobile" className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 underline-offset-4 hover:underline dark:text-brand-300">
            About the mobile app <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

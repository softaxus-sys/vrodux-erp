import { KeyRound, LayoutGrid, LogOut, MoonStar, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/mobile/reveal";

const ITEMS = [
  { icon: KeyRound, title: "Same login as the web app", text: "No separate account. Sign in with the one you already use." },
  { icon: LayoutGrid, title: "Your role decides", text: "The app shows only the modules and permissions your role has." },
  { icon: ShieldCheck, title: "Two-factor sign-in", text: "Two-factor sign-in is supported, and sign-in is protected." },
  { icon: LogOut, title: "End sessions any time", text: "Sessions can be ended from Settings → Devices." },
  { icon: MoonStar, title: "Light and dark themes", text: "Choose a light or dark look." },
  { icon: Sparkles, title: "Included with every plan", text: "There is no separate charge for the app." },
];

export function PlanSecurity() {
  return (
    <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ITEMS.map((it, i) => (
        <li key={it.title}>
          <Reveal delay={(i % 3) * 0.08} className="h-full">
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition-colors hover:bg-white/10">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-indigo-400/30">
                <it.icon className="h-5 w-5 text-cyan-200" aria-hidden />
              </span>
              <p className="mt-5 text-lg font-medium text-white">{it.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{it.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

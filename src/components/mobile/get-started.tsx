import { Download, LogIn, Rocket } from "lucide-react";
import { Reveal } from "@/components/mobile/reveal";
import { TRIAL_DAYS } from "@/lib/trial";

const STEPS = [
  { icon: Rocket, title: "Start your free trial", text: `Sign up for the ${TRIAL_DAYS}-day free trial with unlimited users and no credit card.` },
  { icon: Download, title: "Install from Google Play", text: "Search for Vrodux ERP on Google Play, or use the button at the top of this page." },
  { icon: LogIn, title: "Sign in and get to work", text: "Use the same login as the web app and open the modules your role has." },
];

export function GetStarted() {
  return (
    <ol className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
      <div aria-hidden className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent md:block" />
      {STEPS.map((s, i) => (
        <li key={s.title}>
          <Reveal delay={i * 0.1} className="relative text-center">
            <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-500 bg-background">
              <s.icon className="h-6 w-6 text-brand-500" aria-hidden />
            </span>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">Step {i + 1}</p>
            <p className="mt-1 text-xl font-medium">{s.title}</p>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

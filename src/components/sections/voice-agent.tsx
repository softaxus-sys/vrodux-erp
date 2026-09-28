import { Mic, PhoneCall, Volume2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: PhoneCall,
    title: "Call in anytime",
    description: "Dial in and talk to the Vrodux AI Workforce the way you'd call a colleague — no app, no typing.",
  },
  {
    icon: Volume2,
    title: "Answers you can hear",
    description: "Ask for a number, a status, or a summary and get a spoken answer back in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Same guardrails as everywhere else",
    description: "Voice requests go through the same roles, permissions, and human-in-the-loop approvals as chat.",
  },
];

export function VoiceAgentSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 via-transparent to-brand-500/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-600 dark:text-violet-400 text-sm font-medium mb-5">
            <Mic className="w-3.5 h-3.5" />
            AI Voice Agent
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">
            Or Just <span className="text-gradient">Say It Out Loud</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything the Vrodux AI Workforce does over Telegram text, it can also do by voice. Call in, ask a
            question, or approve a pending request out loud — the same agents, the same live ERP data, the same
            guardrails, just hands-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-3 p-5 rounded-xl border bg-card hover:border-violet-500/40 hover:bg-violet-500/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                <f.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="font-semibold text-sm">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-violet-600 hover:bg-violet-700 text-white shadow-glow-sm">
            <Link href="/book-demo" className="flex items-center gap-2">
              See the Voice Agent in Action <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Talk to Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

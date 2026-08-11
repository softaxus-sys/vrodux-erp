"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Send,
  Smartphone,
  CheckCheck,
  BellRing,
  ShieldCheck,
  Zap,
  MessageSquare,
  ArrowRight,
  Paperclip,
  Mic,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TgMessage =
  | { from: "user"; text: string; time: string }
  | { from: "bot"; text: string; time: string; actions?: string[] };

const thread: TgMessage[] = [
  { from: "user", text: "/leads today", time: "09:12" },
  {
    from: "bot",
    text: "📊 CRM leads today: 47 new, up 18% on yesterday.\n🔥 12 hot · 🌐 7 from the website · 💬 5 from campaigns.",
    time: "09:12",
    actions: ["Assign to reps", "Draft follow-ups"],
  },
  { from: "user", text: "Approve PO-4471", time: "09:13" },
  {
    from: "bot",
    text: "✅ PO-4471 — AED 12,400, Al Noor Trading — approved and sent to the vendor. Logged in Vrodux under your name.",
    time: "09:13",
  },
  { from: "user", text: "Send me a sales summary every evening", time: "09:14" },
  {
    from: "bot",
    text: "🔔 Daily 6:00 PM digest scheduled. You'll get revenue, new leads and overdue invoices right here in Telegram.",
    time: "09:14",
  },
];

const features = [
  {
    icon: MessageSquare,
    title: "Ask anything, from anywhere",
    description:
      "Message the Vrodux Telegram bot the way you'd message a colleague — sales figures, stock levels, invoice status, leave balances.",
  },
  {
    icon: Zap,
    title: "Take action, not just read reports",
    description:
      "Approve purchase orders, sign off quotes, clear leave requests and trigger follow-ups without opening the ERP.",
  },
  {
    icon: BellRing,
    title: "Alerts and digests that come to you",
    description:
      "Schedule daily summaries and get pushed the things that matter — overdue payments, low stock, at-risk deals.",
  },
  {
    icon: ShieldCheck,
    title: "Linked to your Vrodux account",
    description:
      "The bot is tied to your ERP user, so it honours the same roles and permissions you already have. Nothing extra is exposed.",
  },
];

const REVEAL_DELAY = 1400;
const TYPING_TIME = 1200;
const LOOP_PAUSE = 3600;

export function TelegramBotSection() {
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = inView && !reduced;

  useEffect(() => {
    if (reduced) {
      setCount(thread.length);
      setTyping(false);
    }
  }, [reduced]);

  useEffect(() => {
    if (!running) return;

    if (count >= thread.length) {
      const loop = setTimeout(() => {
        setCount(0);
        setTyping(false);
      }, LOOP_PAUSE);
      return () => clearTimeout(loop);
    }

    const next = thread[count];

    if (next.from === "bot" && !typing) {
      setTyping(true);
      return;
    }

    const t = setTimeout(
      () => {
        setTyping(false);
        setCount((c) => c + 1);
      },
      next.from === "bot" ? TYPING_TIME : count === 0 ? 700 : REVEAL_DELAY
    );
    return () => clearTimeout(t);
  }, [count, typing, running, reduced]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [count, typing]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#229ED9]/5 via-transparent to-brand-500/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#229ED9]/10 border border-[#229ED9]/25 text-[#1c8ec0] dark:text-[#4db8e8] text-sm font-medium mb-5">
            <Send className="w-3.5 h-3.5" />
            Telegram Bot
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">
            Your ERP, <span className="text-gradient">In Your Pocket</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The Vrodux AI Workforce is connected to Telegram. Chat with your agents from your phone —
            ask questions, pull numbers and approve work remotely, without logging into the ERP.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
          {/* Phone mockup */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[330px]">
              <div className="rounded-[2.75rem] p-2.5 bg-charcoal-600 shadow-premium ring-1 ring-white/10">
                <div className="relative rounded-[2.25rem] overflow-hidden bg-background">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 rounded-full bg-charcoal-600 z-20" />

                  {/* Telegram header */}
                  <div className="flex items-center gap-3 px-4 pt-8 pb-3 bg-[#229ED9] text-white">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight">Vrodux AI</p>
                      <p className="text-[11px] text-white/80 leading-tight">
                        {typing ? "typing…" : "bot · online"}
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div
                    ref={scrollRef}
                    className="h-[400px] overflow-y-auto px-3 py-4 space-y-2.5 bg-gradient-to-b from-[#229ED9]/5 to-brand-500/5"
                  >
                    {thread.slice(0, count).map((msg, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex animate-fade-in",
                          msg.from === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[86%] px-3 py-2 text-[13px] leading-snug shadow-sm whitespace-pre-line",
                            msg.from === "user"
                              ? "bg-[#229ED9] text-white rounded-2xl rounded-br-md"
                              : "bg-card border rounded-2xl rounded-bl-md"
                          )}
                        >
                          {msg.text}

                          {msg.from === "bot" && msg.actions && (
                            <div className="mt-2 space-y-1">
                              {msg.actions.map((a) => (
                                <div
                                  key={a}
                                  className="text-center text-[11px] font-medium py-1.5 rounded-lg bg-[#229ED9]/10 text-[#1c8ec0] dark:text-[#4db8e8] border border-[#229ED9]/20"
                                >
                                  {a}
                                </div>
                              ))}
                            </div>
                          )}

                          <div
                            className={cn(
                              "flex items-center justify-end gap-1 mt-1 text-[10px]",
                              msg.from === "user" ? "text-white/70" : "text-muted-foreground"
                            )}
                          >
                            {msg.time}
                            {msg.from === "user" && <CheckCheck className="w-3 h-3" />}
                          </div>
                        </div>
                      </div>
                    ))}

                    {typing && (
                      <div className="flex justify-start animate-fade-in">
                        <div className="bg-card border px-3.5 py-2.5 rounded-2xl rounded-bl-md flex items-center gap-1 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" />
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Telegram input bar */}
                  <div className="flex items-center gap-2 px-3 py-3 border-t bg-card">
                    <Paperclip className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <p className="flex-1 text-[13px] text-muted-foreground">Message</p>
                    <Mic className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <div className="w-7 h-7 rounded-full bg-[#229ED9] flex items-center justify-center flex-shrink-0">
                      <Send className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-3 top-24 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-card border shadow-lg animate-float">
                <Smartphone className="w-4 h-4 text-[#229ED9]" />
                <span className="text-xs font-medium">No app to install</span>
              </div>

              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#229ED9]/15 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex gap-4 p-4 rounded-xl border bg-card hover:border-[#229ED9]/40 hover:bg-[#229ED9]/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#229ED9]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#229ED9]/20 transition-colors">
                    <f.icon className="w-5 h-5 text-[#229ED9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-[#229ED9] hover:bg-[#1c8ec0] text-white shadow-glow-sm"
              >
                <Link href="/book-demo" className="flex items-center gap-2">
                  See the Telegram Bot <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Bot,
  Sparkles,
  TrendingUp,
  DollarSign,
  FileText,
  Users,
  Package,
  ShoppingCart,
  ArrowRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AgentId = "crm" | "finance" | "inventory" | "hr";

const agents: Record<
  AgentId,
  { name: string; short: string; icon: typeof Bot; gradient: string; ring: string; tint: string }
> = {
  crm: {
    name: "Sales & CRM Agent",
    short: "CRM",
    icon: ShoppingCart,
    gradient: "from-orange-500 to-amber-600",
    ring: "ring-orange-500/50",
    tint: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  },
  finance: {
    name: "Finance Agent",
    short: "Finance",
    icon: DollarSign,
    gradient: "from-blue-500 to-indigo-600",
    ring: "ring-blue-500/50",
    tint: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  inventory: {
    name: "Inventory Agent",
    short: "Inventory",
    icon: Package,
    gradient: "from-emerald-500 to-teal-600",
    ring: "ring-emerald-500/50",
    tint: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  hr: {
    name: "HR & Payroll Agent",
    short: "HR",
    icon: Users,
    gradient: "from-purple-500 to-pink-600",
    ring: "ring-purple-500/50",
    tint: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
};

const agentOrder: AgentId[] = ["crm", "finance", "inventory", "hr"];

type ScriptItem =
  | { role: "user"; text: string }
  | {
      role: "agent";
      agent: AgentId;
      text: string;
      stats?: { value: string; label: string }[];
      think?: number;
      read?: number;
    };

const script: ScriptItem[] = [
  { role: "user", text: "How many CRM leads did we get today?" },
  {
    role: "agent",
    agent: "crm",
    text: "47 new leads today — 18% ahead of yesterday. 12 are already scored hot.",
    stats: [
      { value: "47", label: "New leads" },
      { value: "12", label: "Hot" },
      { value: "+18%", label: "vs yesterday" },
    ],
  },
  { role: "user", text: "Draft follow-ups for the hot ones." },
  {
    role: "agent",
    agent: "crm",
    text: "Done — 12 follow-up emails drafted from your best-performing template. They're waiting in your outbox for approval. ✍️",
  },
  { role: "user", text: "What's our cash position this month?" },
  {
    role: "agent",
    agent: "finance",
    text: "Cash in hand is AED 1.42M and net profit is AED 284,500, up 18.4% on last month. 7 invoices worth AED 34,800 are overdue.",
    stats: [
      { value: "AED 1.42M", label: "Cash in hand" },
      { value: "+18.4%", label: "Net profit" },
      { value: "7", label: "Overdue" },
    ],
  },
  { role: "user", text: "Anything running low in stock?" },
  {
    role: "agent",
    agent: "inventory",
    text: "3 SKUs are below reorder point: Steel Bracket M8 (42 left), Cable Tray 2m (17), LED Panel 60W (9). Shall I raise POs with your usual vendors?",
  },
  { role: "user", text: "Yes. And who's on leave next week?" },
  {
    role: "agent",
    agent: "hr",
    text: "POs drafted. 4 people are on approved leave next week — coverage is fine except Tuesday in Operations. 📅",
  },
];

const capabilities = [
  { icon: ShoppingCart, text: "CRM — lead counts, pipeline health & follow-ups" },
  { icon: DollarSign, text: "Finance — instant P&L, cash position & expenses" },
  { icon: FileText, text: "Invoice, purchase order & payment status" },
  { icon: TrendingUp, text: "Sales trends, forecasts & KPI insights" },
  { icon: Users, text: "HR queries — payroll, leaves & headcount" },
];

const TYPE_SPEED = 26;
const SEND_PAUSE = 420;
const THINK_TIME = 1500;
const READ_TIME = 1000;
const LOOP_PAUSE = 3400;

export function AiChatSection() {
  const [count, setCount] = useState(0);
  const [typed, setTyped] = useState("");
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Respect users who prefer reduced motion — show the full transcript at once.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Only animate while the widget is actually on screen.
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
      setCount(script.length);
      setTyped("");
    }
  }, [reduced]);

  useEffect(() => {
    if (!running) return;

    if (count >= script.length) {
      const loop = setTimeout(() => {
        setCount(0);
        setTyped("");
      }, LOOP_PAUSE);
      return () => clearTimeout(loop);
    }

    const current = script[count];

    if (current.role === "user") {
      if (typed.length < current.text.length) {
        // Hold on the previous answer for a beat before the next question types itself.
        const delay = typed.length === 0 && count > 0 ? READ_TIME : TYPE_SPEED;
        const t = setTimeout(() => setTyped(current.text.slice(0, 1 + typed.length)), delay);
        return () => clearTimeout(t);
      }
      const send = setTimeout(() => {
        setCount((c) => c + 1);
        setTyped("");
      }, SEND_PAUSE);
      return () => clearTimeout(send);
    }

    const think = setTimeout(() => setCount((c) => c + 1), current.think ?? THINK_TIME);
    return () => clearTimeout(think);
  }, [count, typed, running, reduced]);

  // Keep the newest message in view inside the chat panel.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [count, typed]);

  const pending = count < script.length ? script[count] : null;
  const thinkingAgent = pending?.role === "agent" ? pending.agent : null;

  const lastAnswered = [...script.slice(0, count)]
    .reverse()
    .find((m): m is Extract<ScriptItem, { role: "agent" }> => m.role === "agent")?.agent;

  const activeAgent: AgentId = thinkingAgent ?? lastAnswered ?? "crm";
  const answeredAgents = new Set(
    script
      .slice(0, count)
      .filter((m): m is Extract<ScriptItem, { role: "agent" }> => m.role === "agent")
      .map((m) => m.agent)
  );

  const restart = () => {
    setCount(0);
    setTyped("");
  };

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/5 via-transparent to-brand-500/5 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-500 text-sm font-medium mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered Chat
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-5">
            Ask Vrodux <span className="text-gradient">Anything</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One chat, a whole AI workforce. Ask in plain language and the right agent — Sales, Finance,
            Inventory or HR — answers from your live ERP data and gets the work done.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Chat Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl border bg-card shadow-premium overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b bg-muted/30">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-sm flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">Vrodux AI Workforce</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span className="truncate">
                      {thinkingAgent
                        ? `${agents[thinkingAgent].name} is working…`
                        : "4 agents connected to your live ERP data"}
                    </span>
                  </p>
                </div>

                {/* Agent roster — the active agent lights up */}
                <div className="flex items-center -space-x-1.5 flex-shrink-0">
                  {agentOrder.map((id) => {
                    const agent = agents[id];
                    const isActive = id === activeAgent;
                    return (
                      <div
                        key={id}
                        title={agent.name}
                        className={cn(
                          "w-6 h-6 rounded-full bg-gradient-to-br flex items-center justify-center border-2 border-card transition-all duration-500",
                          agent.gradient,
                          isActive
                            ? cn("scale-125 ring-2 z-10", agent.ring)
                            : answeredAgents.has(id)
                              ? "opacity-70"
                              : "opacity-40 grayscale"
                        )}
                      >
                        <agent.icon className="w-3 h-3 text-white" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="p-5 space-y-4 h-[380px] overflow-y-auto">
                {script.slice(0, count).map((msg, i) => {
                  if (msg.role === "user") {
                    return (
                      <div key={i} className="flex gap-2.5 justify-end animate-fade-in">
                        <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed bg-brand-500 text-white">
                          {msg.text}
                        </div>
                      </div>
                    );
                  }

                  const agent = agents[msg.agent];
                  return (
                    <div key={i} className="flex flex-col items-start gap-1.5 animate-fade-in">
                      <div
                        className={cn(
                          "inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-0.5 rounded-full border text-[11px] font-medium ml-9",
                          agent.tint
                        )}
                      >
                        <agent.icon className="w-3 h-3" />
                        {agent.name}
                      </div>
                      <div className="flex gap-2.5 w-full">
                        <div
                          className={cn(
                            "w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0 mt-0.5",
                            agent.gradient
                          )}
                        >
                          <agent.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div className="max-w-[82%] px-4 py-2.5 rounded-2xl rounded-tl-sm text-sm leading-relaxed bg-muted text-foreground">
                          {msg.text}
                          {msg.stats && (
                            <div className="mt-3 grid grid-cols-3 gap-2">
                              {msg.stats.map((s) => (
                                <div
                                  key={s.label}
                                  className="rounded-lg bg-background/70 border px-2 py-1.5 text-center"
                                >
                                  <div className="text-sm font-semibold leading-tight">{s.value}</div>
                                  <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">
                                    {s.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Routing + typing indicator for the agent picking up the question */}
                {thinkingAgent && (
                  <div className="flex flex-col items-start gap-1.5 animate-fade-in">
                    <div
                      className={cn(
                        "inline-flex items-center gap-1.5 pl-1.5 pr-2.5 py-0.5 rounded-full border text-[11px] font-medium ml-9",
                        agents[thinkingAgent].tint
                      )}
                    >
                      <ArrowRight className="w-3 h-3" />
                      Routed to {agents[thinkingAgent].name}
                    </div>
                    <div className="flex gap-2.5">
                      <div
                        className={cn(
                          "w-7 h-7 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0 mt-0.5",
                          agents[thinkingAgent].gradient
                        )}
                      >
                        <Bot className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Replay */}
                {count >= script.length && (
                  <div className="text-center pt-2 animate-fade-in">
                    <button
                      onClick={restart}
                      className="text-xs text-muted-foreground hover:text-brand-500 transition-colors underline underline-offset-2"
                    >
                      Replay demo ↺
                    </button>
                  </div>
                )}
              </div>

              {/* Input bar — the question types itself here before it's sent */}
              <div className="px-5 py-4 border-t bg-muted/20">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-background">
                  <p
                    className={cn(
                      "flex-1 text-sm truncate",
                      typed ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {typed || "Ask anything about your business…"}
                    {typed && (
                      <span className="inline-block w-px h-3.5 ml-0.5 align-middle bg-foreground animate-pulse" />
                    )}
                  </p>
                  <button
                    aria-hidden
                    tabIndex={-1}
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                      typed ? "bg-brand-500" : "bg-brand-500/40"
                    )}
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.text}
                  className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-brand-500/30 hover:bg-brand-500/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                    <cap.icon className="w-5 h-5 text-brand-500" />
                  </div>
                  <p className="text-sm font-medium">{cap.text}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 pl-1">
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-brand-500 mt-0.5">✓</span>
                Your question is routed to the right agent automatically
              </p>
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-brand-500 mt-0.5">✓</span>
                Talks directly to your live ERP data — always up to date
              </p>
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-brand-500 mt-0.5">✓</span>
                Respects user roles — only shows data you&apos;re allowed to see
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 shadow-glow-sm"
              >
                <Link href="/book-demo" className="flex items-center gap-2">
                  See it Live <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/ai-workforce">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

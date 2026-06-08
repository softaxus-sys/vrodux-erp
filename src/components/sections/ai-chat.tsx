"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bot, Sparkles, TrendingUp, DollarSign, FileText, Users, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const messages = [
  { role: "user", text: "What's our net profit this month?" },
  {
    role: "ai",
    text: "Your net profit for this month is AED 284,500 — up 18.4% vs last month. Revenue: AED 1.2M, Total Expenses: AED 915,500. 📈",
  },
  { role: "user", text: "Which department has the highest expenses?" },
  {
    role: "ai",
    text: "Operations leads at AED 142,000 (15.5% of revenue), followed by Sales at AED 89,300. Want a full department breakdown?",
  },
  { role: "user", text: "How many invoices are overdue?" },
  {
    role: "ai",
    text: "7 overdue invoices totalling AED 34,800. The oldest is 42 days past due. Shall I draft payment reminders for all of them?",
  },
];

const capabilities = [
  { icon: DollarSign, text: "Instant P&L, revenue & expense summaries" },
  { icon: TrendingUp, text: "Sales trends, forecasts & KPI insights" },
  { icon: FileText, text: "Invoice, purchase order & payment status" },
  { icon: Users, text: "HR queries — payroll, leaves & headcount" },
];

const DELAY_PER_MESSAGE = 1200;

export function AiChatSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= messages.length) return;

    const next = messages[visibleCount];
    const isAi = next?.role === "ai";

    if (isAi) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => {
        setIsTyping(false);
        setVisibleCount((c) => c + 1);
      }, DELAY_PER_MESSAGE);
      return () => clearTimeout(typingTimer);
    } else {
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, visibleCount === 0 ? 600 : DELAY_PER_MESSAGE);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  const restart = () => {
    setVisibleCount(0);
    setIsTyping(false);
  };

  return (
    <section className="section-padding relative overflow-hidden">
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
            Ask Vrodux{" "}
            <span className="text-gradient">Anything</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chat with your ERP in plain language. Get instant answers from your live business data — no dashboards, no reports, no waiting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Chat Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl border bg-card shadow-premium overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b bg-muted/30">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-sm">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Vrodux AI</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    Connected to your live ERP data
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-4 min-h-[340px]">
                {messages.slice(0, visibleCount).map((msg, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-2.5 animate-in",
                      msg.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {msg.role === "ai" && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                        msg.role === "user"
                          ? "bg-brand-500 text-white rounded-tr-sm"
                          : "bg-muted text-foreground rounded-tl-sm"
                      )}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex gap-2.5 justify-start animate-in">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="bg-muted px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                )}

                {/* Replay button */}
                {visibleCount >= messages.length && !isTyping && (
                  <div className="text-center pt-2 animate-in">
                    <button
                      onClick={restart}
                      className="text-xs text-muted-foreground hover:text-brand-500 transition-colors underline underline-offset-2"
                    >
                      Replay demo ↺
                    </button>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div className="px-5 py-4 border-t bg-muted/20">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-background">
                  <p className="flex-1 text-sm text-muted-foreground">Ask anything about your business…</p>
                  <button className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0">
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
            <div className="space-y-4">
              {capabilities.map((cap) => (
                <div key={cap.text} className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-brand-500/30 hover:bg-brand-500/5 transition-colors group">
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
                Talks directly to your live ERP data — always up to date
              </p>
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-brand-500 mt-0.5">✓</span>
                Works across all modules: Finance, HR, Sales, Inventory & more
              </p>
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-brand-500 mt-0.5">✓</span>
                Respects user roles — only shows data you're allowed to see
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 shadow-glow-sm">
                <Link href="/book-demo" className="flex items-center gap-2">
                  See it Live <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/features#ai-chat">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

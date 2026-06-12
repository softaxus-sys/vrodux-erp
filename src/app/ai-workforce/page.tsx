import { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { AiChatSection } from "@/components/sections/ai-chat";
import { FinalCTA } from "@/components/sections/final-cta";
import { CheckCircle2, DollarSign, Users, ShoppingCart, Package, Layers, BarChart3, ShieldCheck, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Vrodux AI Workforce — AI Agents Built Into Your ERP",
  description:
    "Meet the Vrodux AI Workforce: AI agents for Finance, HR, Sales, Inventory, and Operations that work inside your ERP — reconciling accounts, following up on invoices, flagging reorders, and answering questions in plain language.",
};

const agents = [
  {
    icon: DollarSign,
    name: "Finance AI Agent",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    tasks: [
      "Flags unreconciled bank transactions",
      "Drafts overdue-invoice reminders",
      "Summarizes P&L and cash flow on demand",
      "Categorizes expenses automatically",
    ],
  },
  {
    icon: Users,
    name: "HR & Payroll AI Agent",
    color: "from-purple-500 to-pink-600",
    bg: "bg-purple-500/10",
    tasks: [
      "Routes leave requests to the right approver",
      "Flags attendance anomalies",
      "Answers policy and leave-balance questions",
      "Prepares payroll run summaries, including WPS",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Sales & CRM AI Agent",
    color: "from-orange-500 to-amber-600",
    bg: "bg-orange-500/10",
    tasks: [
      "Scores and prioritizes incoming leads",
      "Drafts follow-up emails for stale deals",
      "Generates quotes from past pricing",
      "Summarizes pipeline health every week",
    ],
  },
  {
    icon: Package,
    name: "Inventory & Procurement AI Agent",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    tasks: [
      "Alerts before stock hits its reorder point",
      "Forecasts demand from recent sales trends",
      "Flags slow-moving and excess stock",
      "Compares vendor pricing on purchase orders",
    ],
  },
  {
    icon: Layers,
    name: "Operations AI Agent",
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-500/10",
    tasks: [
      "Routes restaurant orders to the right kitchen station",
      "Flags overdue housekeeping tasks",
      "Tracks construction milestones against the BOQ",
      "Surfaces at-risk projects early",
    ],
  },
  {
    icon: BarChart3,
    name: "Insights AI Agent",
    color: "from-brand-500 to-indigo-600",
    bg: "bg-brand-500/10",
    tasks: [
      "Answers questions in plain language — \"Ask Vrodux Anything\"",
      "Builds ad-hoc reports across modules",
      "Surfaces anomalies before they become problems",
      "Sends daily and weekly digest summaries",
    ],
  },
];

const guardrails = [
  {
    icon: ShieldCheck,
    title: "Role-Aware by Design",
    description: "Every AI agent respects your existing roles and permissions — it only sees and acts on data a user in that role could access.",
  },
  {
    icon: CheckCircle2,
    title: "Human-in-the-Loop",
    description: "Agents draft, suggest, and flag. Your team reviews and approves before anything is sent, posted, or finalized.",
  },
  {
    icon: Bot,
    title: "Built on Live Data",
    description: "No separate exports or syncs. Every agent reads and writes directly to your live Vrodux ERP data, in real time.",
  },
];

export default function AiWorkforcePage() {
  return (
    <>
      <PageHero
        badge="Vrodux AI Workforce"
        title="Meet Your New "
        highlightedWord="AI Workforce"
        description="A team of AI agents built into Vrodux ERP — working alongside Finance, HR, Sales, Inventory, and Operations to handle the busywork, flag what matters, and answer questions in plain language."
      />

      {/* AI Agents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              An AI Agent for Every <span className="text-gradient">Part of Your Business</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Each agent is purpose-built for its module, working directly on your live data —
              not a generic chatbot bolted on top.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {agents.map((agent) => (
              <div key={agent.name} className="p-6 rounded-2xl border bg-card hover:shadow-glow-sm transition-all duration-300 hover:-translate-y-1">
                <div className={`w-11 h-11 rounded-xl ${agent.bg} flex items-center justify-center mb-4`}>
                  <div className={`w-5 h-5 bg-gradient-to-br ${agent.color} rounded-md flex items-center justify-center`}>
                    <agent.icon className="w-3 h-3 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold mb-3">{agent.name}</h3>
                <ul className="space-y-1.5">
                  {agent.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-1.5 text-sm text-muted-foreground">
                      <div className={`w-1 h-1 mt-2 rounded-full bg-gradient-to-r ${agent.color} flex-shrink-0`} />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ask Vrodux Anything demo */}
      <div id="ai-chat">
        <AiChatSection />
      </div>

      {/* Guardrails */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              AI That Stays <span className="text-gradient">In Control</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The Vrodux AI Workforce is designed to assist your team, not replace your judgment
              or your existing access controls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {guardrails.map((g) => (
              <div key={g.title} className="p-5 rounded-2xl border bg-card hover:shadow-sm transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-3">
                  <g.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="font-semibold mb-1.5">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

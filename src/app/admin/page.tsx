import { Users, Calendar, Mail, FileText, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Admin Dashboard — Vrodux ERP" };

async function getStats() {
  try {
    const { prisma } = await import("@/lib/prisma");
    const [contacts, demos, subscribers, posts] = await Promise.all([
      prisma.contactMessage.count(),
      prisma.demoBooking.count(),
      prisma.newsletterSubscriber.count(),
      prisma.blogPost.count(),
    ]);
    return { contacts, demos, subscribers, posts };
  } catch {
    return { contacts: 0, demos: 0, subscribers: 0, posts: 0 };
  }
}

export default async function AdminPage() {
  const stats = await getStats();

  const cards = [
    { label: "Contact Messages", value: stats.contacts, icon: Mail, color: "text-blue-500", bg: "bg-blue-500/10", href: "/admin/contacts" },
    { label: "Demo Requests", value: stats.demos, icon: Calendar, color: "text-emerald-500", bg: "bg-emerald-500/10", href: "/admin/demos" },
    { label: "Newsletter Subscribers", value: stats.subscribers, icon: Users, color: "text-purple-500", bg: "bg-purple-500/10", href: "/admin/contacts" },
    { label: "Blog Posts", value: stats.posts, icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10", href: "/admin/blog" },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground text-sm">Manage your Vrodux ERP website content and leads.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="p-5 rounded-xl border bg-card hover:shadow-sm transition-shadow">
            <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center mb-3`}>
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>
            <div className="text-3xl font-bold mb-1">{card.value}</div>
            <div className="text-sm text-muted-foreground">{card.label}</div>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border bg-card">
          <h2 className="font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-500" />
            Quick Actions
          </h2>
          <div className="space-y-2">
            {[
              { label: "View Contact Messages", href: "/admin/contacts" },
              { label: "Review Demo Requests", href: "/admin/demos" },
              { label: "Create Blog Post", href: "/admin/blog" },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors text-sm"
              >
                {action.label}
                <span className="text-muted-foreground">→</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-xl border bg-card">
          <h2 className="font-semibold mb-4">System Status</h2>
          <div className="space-y-3">
            {[
              { label: "Website", status: "Online", color: "text-emerald-500" },
              { label: "Database", status: "Connected", color: "text-emerald-500" },
              { label: "Email Service", status: process.env.RESEND_API_KEY ? "Active" : "Not Configured", color: process.env.RESEND_API_KEY ? "text-emerald-500" : "text-amber-500" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{item.label}</span>
                <span className={`font-medium ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

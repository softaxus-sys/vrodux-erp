import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, Calendar, FileText, Settings, ArrowLeft } from "lucide-react";
import { AdminLogoutButton } from "@/components/shared/admin-logout-button";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Contact Messages", href: "/admin/contacts", icon: Users },
  { label: "Demo Requests", href: "/admin/demos", icon: Calendar },
  { label: "Blog Posts", href: "/admin/blog", icon: FileText },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="w-56 border-r bg-background flex flex-col">
        <div className="p-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center">
              <LayoutDashboard className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-sm">Vrodux Admin</span>
          </Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t space-y-1">
          <Link href="/" className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Site
          </Link>
          <AdminLogoutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Menu, Sun, Moon, ChevronDown, ExternalLink,
  LayoutDashboard, DollarSign, Users, Package, ShoppingCart,
  BarChart3, Building2, UtensilsCrossed, Hotel, Home as HomeIcon,
  HardHat, Stethoscope, GraduationCap, ShoppingBag, Truck,
  CreditCard, Zap, ArrowRight
} from "lucide-react";

const modules = [
  { name: "Finance & Accounting", href: "/features#finance", icon: DollarSign, desc: "GL, AP, AR, Bank Reconciliation" },
  { name: "HR & Payroll", href: "/features#hr", icon: Users, desc: "Employee, Payroll, Leave, Attendance" },
  { name: "Inventory & Procurement", href: "/features#inventory", icon: Package, desc: "Stock, Warehouse, Vendor Mgmt" },
  { name: "Sales Management", href: "/features#sales", icon: ShoppingCart, desc: "Quotations, Orders, Invoicing" },
  { name: "CRM", href: "/features#crm", icon: LayoutDashboard, desc: "Leads, Opportunities, Pipeline" },
  { name: "Point of Sale", href: "/features#pos", icon: CreditCard, desc: "Retail, Barcode, Multi-store" },
  { name: "Restaurant POS", href: "/features#restaurant", icon: UtensilsCrossed, desc: "Tables, KDS, Recipe Mgmt" },
  { name: "Hospitality", href: "/features#hospitality", icon: Hotel, desc: "Reservations, Room, Guest Svc" },
  { name: "Real Estate", href: "/features#realestate", icon: HomeIcon, desc: "Properties, Leasing, Contracts" },
  { name: "Construction", href: "/features#construction", icon: HardHat, desc: "Projects, Resources, Costs" },
  { name: "Analytics & BI", href: "/features#analytics", icon: BarChart3, desc: "Dashboards, KPIs, Reports" },
  { name: "Purchase Management", href: "/features#purchase", icon: Truck, desc: "RFQ, Purchase Orders, Evaluation" },
];

const industries = [
  { name: "Retail", href: "/industries#retail", icon: ShoppingBag },
  { name: "Restaurants", href: "/industries#restaurants", icon: UtensilsCrossed },
  { name: "Hospitality", href: "/industries#hospitality", icon: Hotel },
  { name: "Manufacturing", href: "/industries#manufacturing", icon: Zap },
  { name: "Distribution", href: "/industries#distribution", icon: Truck },
  { name: "Real Estate", href: "/industries#realestate", icon: HomeIcon },
  { name: "Construction", href: "/industries#construction", icon: HardHat },
  { name: "Healthcare", href: "/industries#healthcare", icon: Stethoscope },
  { name: "Education", href: "/industries#education", icon: GraduationCap },
  { name: "Professional Services", href: "/industries#services", icon: Building2 },
];

const navLinks = [
  { label: "Features", href: "/features", hasMega: "features" as const },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries", hasMega: "industries" as const },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

interface MegaMenuProps {
  type: "features" | "industries";
  onClose: () => void;
}

function MegaMenu({ type, onClose }: MegaMenuProps) {
  if (type === "features") {
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] mt-2 p-6 bg-background/95 backdrop-blur-xl border rounded-2xl shadow-premium z-50">
        <div className="mb-4 pb-4 border-b">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">ERP Modules</p>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {modules.map((mod) => (
            <Link
              key={mod.name}
              href={mod.href}
              onClick={onClose}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-500/5 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                <mod.icon className="w-4 h-4 text-brand-500" />
              </div>
              <div>
                <div className="text-sm font-medium">{mod.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{mod.desc}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t flex items-center justify-between">
          <p className="text-sm text-muted-foreground">12 fully integrated modules</p>
          <Link href="/features" onClick={onClose} className="text-sm font-medium text-brand-500 hover:underline flex items-center gap-1">
            View all features <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] mt-2 p-6 bg-background/95 backdrop-blur-xl border rounded-2xl shadow-premium z-50">
      <div className="mb-4 pb-4 border-b">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Industry Solutions</p>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {industries.map((ind) => (
          <Link
            key={ind.name}
            href={ind.href}
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-500/5 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
              <ind.icon className="w-4 h-4 text-brand-500" />
            </div>
            <span className="text-sm font-medium">{ind.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"features" | "industries" | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleMouseEnter = (type: "features" | "industries") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMega(type);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMega(null), 200);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="rounded-xl px-3 py-2 dark:bg-white/95 transition-colors">
            <Image
              src="/images/vrodux_logo.png"
              alt="Vrodux ERP"
              width={130}
              height={44}
              className="h-9 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1" ref={megaRef}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasMega && handleMouseEnter(link.hasMega)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-muted hover:text-foreground text-muted-foreground",
                  activeMega === link.hasMega && "bg-muted text-foreground"
                )}
              >
                {link.label}
                {link.hasMega && (
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      activeMega === link.hasMega && "rotate-180"
                    )}
                  />
                )}
              </Link>
              {link.hasMega && activeMega === link.hasMega && (
                <div onMouseEnter={() => handleMouseEnter(link.hasMega!)} onMouseLeave={handleMouseLeave}>
                  <MegaMenu type={link.hasMega} onClose={() => setActiveMega(null)} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <a href="https://erp.vrodux.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              Login <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
          <Button size="sm" asChild className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 shadow-glow-sm">
            <Link href="/book-demo">Book Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                    <div className="rounded-lg px-2 py-0.5 dark:bg-white/95 transition-colors">
                      <Image
                        src="/images/vrodux_logo.png"
                        alt="Vrodux ERP"
                        width={110}
                        height={36}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 text-muted-foreground -rotate-90" />
                    </Link>
                  ))}
                  <div className="pt-4 border-t space-y-2">
                    {industries.map((ind) => (
                      <Link
                        key={ind.name}
                        href={ind.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors text-muted-foreground"
                      >
                        <ind.icon className="w-4 h-4 text-brand-500" />
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://erp.vrodux.com" target="_blank" rel="noopener noreferrer">
                      Login to ERP <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link href="/book-demo" onClick={() => setMobileOpen(false)}>
                      Book a Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

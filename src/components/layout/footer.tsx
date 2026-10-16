import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, Youtube, Facebook, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://erp.vrodux.com";

const products = [
  { label: "Finance & Accounting", href: "/features/finance" },
  { label: "HR & Payroll", href: "/features/hr" },
  { label: "Inventory & Procurement", href: "/features/inventory" },
  { label: "Sales Management", href: "/features/sales" },
  { label: "CRM", href: "/features/crm" },
  { label: "Point of Sale", href: "/features/pos" },
  { label: "Purchase Management", href: "/features/purchase" },
  { label: "Analytics & BI", href: "/features/reports" },
  { label: "Restaurant POS & KDS", href: "/features/restaurant" },
  { label: "Hospitality Management", href: "/features/hospitality" },
  { label: "Real Estate Management", href: "/features/real-estate" },
  { label: "Construction Management", href: "/features/construction" },
];

const solutions = [
  { label: "Retail", href: "/industries#retail" },
  { label: "Restaurants & F&B", href: "/industries#restaurants" },
  { label: "Hospitality & Hotels", href: "/industries#hospitality" },
  { label: "Real Estate", href: "/industries#realestate" },
  { label: "Construction", href: "/industries#construction" },
  { label: "Healthcare", href: "/industries#healthcare" },
  { label: "Education", href: "/industries#education" },
  { label: "Insurance", href: "/industries#insurance" },
  { label: "B2B & Professional Services", href: "/industries#b2bservices" },
  { label: "Visa Services", href: "/industries#visa-services" },
  { label: "Manufacturing", href: "/industries#manufacturing" },
  { label: "Library", href: "/industries#library" },
  { label: "Import & Export", href: "/industries#import-export" },
  { label: "Implementation Services", href: "/implementation" },
  { label: "Partners & Resellers", href: "/partners" },
  { label: "Case Studies", href: "/case-studies" },
];

const resources = [
  { label: "Demos", href: "/demos" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book Demo", href: "/book-demo" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Security & Compliance", href: "/security" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Delete Account", href: "/delete-account" },
  { label: "Contact", href: "/contact" },
];

/** X (formerly Twitter) logo; lucide has no brand mark for it. */
function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const social = [
  { icon: XLogo, href: "https://x.com/AxusSoft", label: "X" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCLjmPTXsvhowyfAMKSmTSCQ", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61593996783081", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="rounded-xl px-3 py-2 dark:bg-white/95 transition-colors">
                <Image
                  src="/images/vrodux_logo.png"
                  alt="Vrodux ERP"
                  width={130}
                  height={44}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              The complete enterprise ERP platform for modern businesses. Built by SoftAxis Technologies LLC.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:vrodux@softaxis.ae" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-brand-500" />
                vrodux@softaxis.ae
              </a>
              <a href="tel:+971569383079" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-brand-500" />
                +971 56 938 3079
              </a>
              <a
                href="https://wa.me/971588383625"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-500" />
                +971 58 838 3625
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                Dubai, United Arab Emirates
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-muted hover:bg-brand-500/10 hover:text-brand-500 flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2.5">
              {products.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              {solutions.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {resources.map((r) => (
                <li key={r.label}>
                  <Link href={r.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Get Started</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl border bg-gradient-to-br from-brand-500/5 to-brand-600/10">
                <p className="text-sm font-medium mb-1">Start Free Consultation</p>
                <p className="text-xs text-muted-foreground mb-3">Get a personalized ERP roadmap for your business</p>
                <Link
                  href="/book-demo"
                  className="text-xs font-medium text-brand-500 hover:underline flex items-center gap-1"
                >
                  Book Demo →
                </Link>
              </div>
              <div className="p-4 rounded-xl border bg-muted/50">
                <p className="text-sm font-medium mb-1">Access Your ERP</p>
                <p className="text-xs text-muted-foreground mb-3">Log in to your Vrodux ERP instance</p>
                <a
                  href={`${APP_URL}/auth/login?utm_source=footer`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-brand-500 hover:underline flex items-center gap-1"
                >
                  Login to ERP <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} SoftAxis Technologies LLC. All rights reserved.
            <span className="mx-2">·</span>
            <a href="https://softaxis.ae" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              SoftAxis Technologies
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/delete-account" className="hover:text-foreground transition-colors">Delete Account</Link>
            <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
            <Link href="/sitemap.xml" className="hover:text-foreground transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

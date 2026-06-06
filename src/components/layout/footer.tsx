import Link from "next/link";
import { LayoutDashboard, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const products = [
  { label: "Finance & Accounting", href: "/features#finance" },
  { label: "HR & Payroll", href: "/features#hr" },
  { label: "Inventory & Procurement", href: "/features#inventory" },
  { label: "Sales & CRM", href: "/features#sales" },
  { label: "Point of Sale", href: "/features#pos" },
  { label: "Restaurant POS", href: "/features#restaurant" },
  { label: "Hospitality", href: "/features#hospitality" },
  { label: "Real Estate", href: "/features#realestate" },
  { label: "Construction", href: "/features#construction" },
  { label: "Analytics & BI", href: "/features#analytics" },
];

const solutions = [
  { label: "Retail", href: "/industries#retail" },
  { label: "Restaurants", href: "/industries#restaurants" },
  { label: "Manufacturing", href: "/industries#manufacturing" },
  { label: "Distribution", href: "/industries#distribution" },
  { label: "Healthcare", href: "/industries#healthcare" },
  { label: "Education", href: "/industries#education" },
  { label: "Professional Services", href: "/industries#services" },
  { label: "Implementation Services", href: "/implementation" },
  { label: "Partners & Resellers", href: "/partners" },
  { label: "Case Studies", href: "/case-studies" },
];

const resources = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book Demo", href: "/book-demo" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Security & Compliance", href: "/security" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { icon: Linkedin, href: "https://linkedin.com/company/vrodux", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/vroduxerp", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@vroduxerp", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com/vroduxerp", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center shadow-glow-sm">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">Vrodux ERP</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              The complete enterprise ERP platform for modern businesses. Built by SoftAxis Technologies LLC.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:info@vrodux.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-brand-500" />
                info@vrodux.com
              </a>
              <a href="tel:+97144000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-brand-500" />
                +971 4 400 0000
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
                  href="https://erp.vrodux.com"
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
            <Link href="/security" className="hover:text-foreground transition-colors">Security</Link>
            <Link href="/sitemap.xml" className="hover:text-foreground transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

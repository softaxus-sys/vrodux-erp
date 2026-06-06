"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al Rashidi",
    role: "CFO",
    company: "AlNoor Trading Group",
    content: "Vrodux ERP transformed our financial operations. We consolidated 5 systems into one and reduced month-end close from 15 days to 3 days. The multi-company and multi-currency support is excellent.",
    rating: 5,
    industry: "Trading",
    initials: "AR",
    color: "bg-blue-500",
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    company: "Sunrise Hospitality LLC",
    content: "The hospitality module is truly enterprise-grade. Reservations, room management, F&B — everything integrated. Our hotel chain now runs with 40% less manual work and far fewer errors.",
    rating: 5,
    industry: "Hospitality",
    initials: "PS",
    color: "bg-purple-500",
  },
  {
    name: "Mohammed Al Farsi",
    role: "CEO",
    company: "Gulf Construction Partners",
    content: "We evaluated SAP, Oracle, and Odoo before choosing Vrodux. The construction module with BOQ tracking and project cost management is exactly what we needed. Implementation was smooth and fast.",
    rating: 5,
    industry: "Construction",
    initials: "MF",
    color: "bg-emerald-500",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Finance",
    company: "Metro Pharma Distribution",
    content: "Inventory management and procurement workflows have been game-changing. Real-time stock visibility across 8 warehouses and automatic reorder points saved us from stockouts and overstocking.",
    rating: 5,
    industry: "Distribution",
    initials: "SJ",
    color: "bg-orange-500",
  },
  {
    name: "Khalid Al Mansoori",
    role: "Owner",
    company: "Spice Garden Restaurants",
    content: "The restaurant POS with KDS integration is outstanding. Table management, waiter ordering, kitchen display, recipe costing — all in one system. Our restaurant chain runs much more efficiently now.",
    rating: 5,
    industry: "F&B",
    initials: "KM",
    color: "bg-red-500",
  },
  {
    name: "Fatima Hassan",
    role: "HR Manager",
    company: "TechVision Technologies",
    content: "The HR and payroll module handles our complex payroll structure perfectly — including UAE labor law compliance, gratuity calculations, and leave management. Payroll that used to take a week now takes hours.",
    rating: 5,
    industry: "Technology",
    initials: "FH",
    color: "bg-cyan-500",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by Businesses{" "}
            <span className="text-gradient">Across Industries</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't take our word for it. Hear from the businesses that have transformed
            their operations with Vrodux ERP.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm font-medium ml-2">4.9/5 from 200+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative p-6 rounded-2xl border bg-card hover:shadow-md transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-brand-500/20 mb-4" />
              <div className="flex mb-3">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {t.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { demoBookingSchema, type DemoBookingFormData } from "@/lib/validations";
import { Calendar, CheckCircle2, Star } from "lucide-react";

const countries = [
  "United Arab Emirates", "Saudi Arabia", "Kuwait", "Qatar", "Bahrain", "Oman",
  "Egypt", "Jordan", "Pakistan", "India", "United Kingdom", "United States", "Other",
];

const employeeRanges = ["1-10", "11-50", "51-200", "201-500", "500+"];

const industries = [
  "Retail", "Restaurants & F&B", "Hospitality & Hotels", "Manufacturing",
  "Distribution & Wholesale", "Real Estate", "Construction", "Healthcare",
  "Education", "Professional Services", "Other",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/vrodux/demo";

export function DemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<DemoBookingFormData>({
    resolver: zodResolver(demoBookingSchema),
  });

  const onSubmit = async (data: DemoBookingFormData) => {
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        toast.success("Demo booked successfully! Check your email.");
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to book demo. Please try again.");
    }
  };

  return (
    <Tabs defaultValue="form" className="space-y-8">
      <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2">
        <TabsTrigger value="form">Request Demo</TabsTrigger>
        <TabsTrigger value="calendly">Quick Schedule</TabsTrigger>
      </TabsList>

      <TabsContent value="form">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Benefits */}
          <div className="space-y-4">
            <h2 className="font-semibold text-xl">What to Expect</h2>
            {[
              { title: "Personalized Walkthrough", desc: "We tailor the demo to your specific industry and business challenges." },
              { title: "Live Q&A", desc: "Ask any questions about features, pricing, or implementation." },
              { title: "No Commitment Required", desc: "Zero pressure. Explore Vrodux ERP at your own pace." },
              { title: "Follow-up Resources", desc: "You'll receive a detailed proposal and ROI analysis after the demo." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              </div>
            ))}
            <div className="mt-6 p-4 rounded-xl bg-brand-500/5 border border-brand-500/20">
              <div className="text-sm font-medium mb-1">Average demo rating</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm font-semibold ml-1">4.9/5</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">From 200+ demos</div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Demo Booked!</h2>
                <p className="text-muted-foreground max-w-sm">
                  Our team will confirm your demo time and send you a meeting link within 2 business hours.
                </p>
                <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
                  Book Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Smith" {...register("name")} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input id="email" type="email" placeholder="john@company.com" {...register("email")} />
                    {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" placeholder="Your Company" {...register("company")} />
                    {errors.company && <p className="text-xs text-destructive">{errors.company.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+971 50 000 0000" {...register("phone")} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label>Country</Label>
                    <Select onValueChange={(v) => setValue("country", v)}>
                      <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                      <SelectContent>
                        {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Number of Employees</Label>
                    <Select onValueChange={(v) => setValue("employees", v)}>
                      <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                      <SelectContent>
                        {employeeRanges.map((e) => <SelectItem key={e} value={e}>{e}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label>Industry</Label>
                  <Select onValueChange={(v) => setValue("industry", v)}>
                    <SelectTrigger><SelectValue placeholder="Select your industry" /></SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => <SelectItem key={ind} value={ind}>{ind}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input id="preferredDate" type="date" {...register("preferredDate")} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Preferred Time</Label>
                    <Select onValueChange={(v) => setValue("preferredTime", v)}>
                      <SelectTrigger><SelectValue placeholder="Select time (GST)" /></SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((t) => <SelectItem key={t} value={t}>{t} GST</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Tell us about your current system, specific challenges, or modules you're interested in..."
                    rows={3}
                    {...register("notes")}
                  />
                </div>

                <Button type="submit" size="lg" loading={isSubmitting} className="w-full bg-gradient-to-r from-brand-600 to-brand-500">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book My Demo
                </Button>
              </form>
            )}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="calendly">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border overflow-hidden" style={{ height: "600px" }}>
            <iframe
              src={CALENDLY_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule Demo"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

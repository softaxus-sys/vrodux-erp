"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        toast.success("Subscribed successfully!");
      } else {
        toast.error(result.error || "Subscription failed.");
      }
    } catch {
      toast.error("Failed to subscribe. Please try again.");
    }
  };

  return (
    <section className="py-16 border-t">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <div className="w-12 h-12 rounded-2xl bg-brand-500/10 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-brand-500" />
        </div>
        <h2 className="text-2xl font-semibold mb-2">Stay Ahead of the Curve</h2>
        <p className="text-muted-foreground mb-6">
          Get ERP insights, product updates, and industry trends delivered to your inbox.
        </p>
        {submitted ? (
          <p className="text-emerald-500 font-medium">You're subscribed! Welcome to the Vrodux community.</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
            <Input placeholder="Enter your email address" type="email" {...register("email")} className="flex-1" />
            <Button type="submit" loading={isSubmitting}>Subscribe</Button>
          </form>
        )}
        <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}

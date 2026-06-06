import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  country: z.string().max(100).optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(5000, "Message is too long"),
});

export const demoBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required").max(100),
  phone: z.string().max(20).optional(),
  country: z.string().max(100).optional(),
  employees: z.string().optional(),
  industry: z.string().max(100).optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  notes: z.string().max(1000).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().max(100).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type DemoBookingFormData = z.infer<typeof demoBookingSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

export interface Module {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  category: string;
  color: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  modules: string[];
  benefits: string[];
  caseStudy?: {
    company: string;
    result: string;
  };
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaHref: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  industry: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags: string[];
  author: string;
  authorImage?: string;
  publishedAt: string;
  readTime: number;
  views: number;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
  icon?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

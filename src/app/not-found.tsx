import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <div className="text-[10rem] font-bold text-brand-500/10 select-none leading-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-gradient">404</div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what
          you&apos;re looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <Search className="mr-2 h-4 w-4" />
              Get Help
            </Link>
          </Button>
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <Link href="/features" className="hover:text-primary transition-colors mr-4">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-primary transition-colors mr-4">
            Pricing
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

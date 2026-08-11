"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Lock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(
    searchParams.get("error") === "unconfigured"
      ? "Admin login is not configured on the server."
      : ""
  );
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await res.json();

      if (result.success) {
        router.replace(next.startsWith("/admin") ? next : "/admin");
        router.refresh();
      } else {
        setError(result.error || "Login failed.");
        setLoading(false);
      }
    } catch {
      setError("Could not reach the server. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-brand-400 flex items-center justify-center">
            <LayoutDashboard className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold">Vrodux Admin</span>
        </Link>

        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-4 h-4 text-brand-500" />
            <h1 className="font-semibold">Sign in</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            This area is restricted to Vrodux administrators.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 text-sm text-destructive">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" loading={loading}>
              Sign in
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            ← Back to vrodux.com
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "@/lib/storage";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = getAuth();

    if (isLoggedIn) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <p className="text-sm text-muted-foreground">Redirecting...</p>
    </div>
  );
}
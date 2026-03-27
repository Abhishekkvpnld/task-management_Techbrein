"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, User } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { setAuth, setUsername } from "@/lib/storage";

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }

    setError("");
    setAuth(true);
    setUsername(username);
    router.push("/dashboard");
  };

  return (
    <Card className="w-full max-w-md rounded-2xl border shadow-xl bg-white">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-bold tracking-tight">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Sign in to access your task dashboard
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        {/* Username */}
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 h-11"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Error */}
        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

        {/* Login Button */}
        <Button
          className="w-full h-11 text-base font-medium"
          onClick={handleLogin}
        >
          Login
        </Button>

        {/* Mock Credentials Info */}
        <div className="rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
          <p className="font-medium mb-1">Mock Login</p>
          <p>You can enter any username and password to continue.</p>
        </div>
      </CardContent>
    </Card>
  );
}

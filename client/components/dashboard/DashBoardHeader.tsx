"use client";

import { Button } from "@/components/ui/button";
import { clearAuth } from "@/lib/storage";
import { useRouter } from "next/navigation";
import TaskFormDialog from "./TaskFormDialog";
import { Task } from "@/types/task";
import { LayoutDashboard, LogOut } from "lucide-react";

interface Props {
  onAddTask: (task: Task) => void;
}

export default function DashboardHeader({ onAddTask }: Props) {
  const router = useRouter();

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left Side */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white">
            <LayoutDashboard className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-lg font-bold leading-tight sm:text-2xl">
              Task Management Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage your tasks efficiently
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <TaskFormDialog onSave={onAddTask} />

          <Button
            className="w-full cursor-pointer sm:w-auto"
            variant="outline"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
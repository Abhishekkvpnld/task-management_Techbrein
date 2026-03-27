"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "@/lib/storage";
import { useTasks } from "@/hooks/useTasks";
import DashboardHeader from "@/components/dashboard/DashBoardHeader";
import TaskFilters from "@/components/dashboard/TaskFilters";
import TaskTable from "@/components/dashboard/TaskTable";

export default function DashboardPage() {
  const router = useRouter();

  const {
    filteredTasks,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    sortOrder,
    setSortOrder,
    addTask,
    updateTask,
    deleteTask,
    changeStatus,
  } = useTasks();

  useEffect(() => {
    if (!getAuth()) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader onAddTask={addTask} />
      <main className="container mx-auto px-4 py-6 space-y-6">
        <TaskFilters
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <TaskTable
          tasks={filteredTasks}
          onDelete={deleteTask}
          onEdit={updateTask}
          onStatusChange={changeStatus}
        />
      </main>
    </div>
  );
}
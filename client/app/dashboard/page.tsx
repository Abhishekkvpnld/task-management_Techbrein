"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "@/lib/storage";
import { useTasks } from "@/hooks/useTasks";
import DashboardHeader from "@/components/dashboard/DashBoardHeader";
import TaskFilters from "@/components/dashboard/TaskFilters";
import TaskTable from "@/components/dashboard/TaskTable";
import PaginationControls from "@/components/dashboard/PaginationControls";

export default function DashboardPage() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

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

  // Reset page when search / filter / sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter, sortOrder]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTasks.length / tasksPerPage)
  );

  // Prevent invalid page after delete/filter
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);


  const paginatedTasks = useMemo(() => {
    return filteredTasks.slice(
      (currentPage - 1) * tasksPerPage,
      currentPage * tasksPerPage
    );
  }, [filteredTasks, currentPage]);

  
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardHeader onAddTask={addTask} />

      <main className="container mx-auto space-y-6 px-4 py-6">
        <TaskFilters
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <TaskTable
          tasks={paginatedTasks}
          onDelete={deleteTask}
          onEdit={updateTask}
          onStatusChange={changeStatus}
        />

        {filteredTasks?.length > 0 && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}
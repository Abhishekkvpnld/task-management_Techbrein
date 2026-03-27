"use client";

import { useEffect, useMemo, useState } from "react";
import { Task, TaskStatus } from "@/types/task";
import { getStoredTasks, saveTasks } from "@/lib/storage";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | TaskStatus>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    setTasks(getStoredTasks());
  }, []);

  useEffect(() => {
    if (tasks.length) saveTasks(tasks);
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks((prev) => [task, ...prev]);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const changeStatus = (id: string, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task))
    );
  };

  const filteredTasks = useMemo(() => {
    let filtered = [...tasks];

    if (search) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter((task) => task.status === statusFilter);
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime();
      const dateB = new Date(b.dueDate).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    return filtered;
  }, [tasks, search, statusFilter, sortOrder]);

  return {
    tasks,
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
  };
};
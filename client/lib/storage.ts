import { Task } from "@/types/task";
import { mockTasks } from "@/data/mockTasks";

const TASKS_KEY = "tasks";
const AUTH_KEY = "isLoggedIn";
const USER_KEY = "username";

export const getStoredTasks = (): Task[] => {
  if (typeof window === "undefined") return [];
  const tasks = localStorage.getItem(TASKS_KEY);

  if (!tasks) {
    localStorage.setItem(TASKS_KEY, JSON.stringify(mockTasks));
    return mockTasks;
  }

  return JSON.parse(tasks);
};

export const saveTasks = (tasks: Task[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const setAuth = (value: boolean) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(AUTH_KEY, JSON.stringify(value));
};

export const getAuth = (): boolean => {
  if (typeof window === "undefined") return false;
  return JSON.parse(localStorage.getItem(AUTH_KEY) || "false");
};

export const clearAuth = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(USER_KEY);
};

export const setUsername = (username: string) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, username);
};

export const getUsername = (): string => {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(USER_KEY) || "";
};
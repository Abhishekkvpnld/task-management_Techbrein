import { Task } from "@/types/task";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Build login page",
    description: "Create mock authentication UI",
    status: "Todo",
    dueDate: "2026-03-30",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Create dashboard layout",
    description: "Responsive dashboard with task cards",
    status: "In Progress",
    dueDate: "2026-03-29",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Implement CRUD",
    description: "Add task create, edit, delete functionality",
    status: "Completed",
    dueDate: "2026-03-28",
    createdAt: new Date().toISOString(),
  },
];
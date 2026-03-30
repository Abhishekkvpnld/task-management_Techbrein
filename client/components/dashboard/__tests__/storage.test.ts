import { describe, it, expect, beforeEach } from "vitest";
import type { Task } from "@/types/task";
import {
  setAuth,
  getAuth,
  clearAuth,
  saveTasks,
  getStoredTasks,
} from "@/lib/storage";

describe("storage utilities", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("stores and gets auth state", () => {
    setAuth(true);
    expect(getAuth()).toBe(true);

    clearAuth();
    expect(getAuth()).toBe(false);
  });

  it("stores and gets tasks", () => {
    const mockTasks: Task[] = [
      {
        id: "1",
        title: "Test Task",
        description: "Testing storage",
        status: "Todo",
        dueDate: "2026-04-01",
        createdAt: "2026-03-30T10:00:00.000Z",
      },
    ];

    saveTasks(mockTasks);
    const stored = getStoredTasks();

    expect(stored).toHaveLength(1);
    expect(stored[0].title).toBe("Test Task");
  });
});
"use client";

import { Task, TaskStatus } from "@/types/task";
import TaskTable from "./TaskTable";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
}

export default function TaskList({
  tasks,
  onDelete,
  onEdit,
  onStatusChange,
}: Props) {
  return (
    <>
      {/* Desktop Table */}
      <div className="hidden md:block">
        <TaskTable
          tasks={tasks}
          onDelete={onDelete}
          onEdit={onEdit}
          onStatusChange={onStatusChange}
        />
      </div>

      {/* Mobile Cards */}
      <div className="grid gap-4 md:hidden">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
              onStatusChange={onStatusChange}
            />
          ))
        ) : (
          <div className="text-center py-10 text-muted-foreground">
            No tasks found.
          </div>
        )}
      </div>
    </>
  );
}
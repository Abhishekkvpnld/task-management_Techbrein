"use client";

import { useEffect, useState } from "react";
import { Task, TaskStatus } from "@/types/task";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Plus, Pencil, CalendarDays, ListTodo } from "lucide-react";

interface Props {
  onSave: (task: Task) => void;
  task?: Task;
}

export default function TaskFormDialog({ onSave, task }: Props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("Todo");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStatus(task.status);
      setDueDate(task.dueDate);
    } else {
      setTitle("");
      setDescription("");
      setStatus("Todo");
      setDueDate("");
    }
  }, [task, open]);

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || !dueDate) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    const newTask: Task = {
      id: task?.id || crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      status,
      dueDate,
      createdAt: task?.createdAt || new Date().toISOString(),
    };

    onSave(newTask);
    setOpen(false);

    if (!task) {
      setTitle("");
      setDescription("");
      setStatus("Todo");
      setDueDate("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={`inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
          task
            ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            : "bg-black text-white hover:bg-black/90"
        }`}
      >
        {task ? <Pencil className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        {task ? "Edit" : "Add Task"}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[560px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {task ? "Edit Task" : "Create New Task"}
          </DialogTitle>
          <DialogDescription>
            {task
              ? "Update the task details below."
              : "Fill in the details to create a new task."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Task Title</label>
            <Input
              placeholder="e.g. Build dashboard UI"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-11"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Textarea
              placeholder="Describe the task details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[110px] resize-none"
            />
          </div>

          {/* Status + Due Date */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select
                value={status}
                onValueChange={(value) => setStatus(value as TaskStatus)}
              >
                <SelectTrigger className="h-11">
                  <div className="flex items-center gap-2">
                    <ListTodo className="h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Select status" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todo">Todo</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Due Date</label>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="h-11 pl-10"
                />
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </p>
          )}

          {/* Submit */}
          <Button className="h-11 w-full" onClick={handleSubmit}>
            {task ? "Update Task" : "Save Task"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
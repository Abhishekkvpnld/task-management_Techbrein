"use client";

import { Task, TaskStatus } from "@/types/task";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TaskFormDialog from "./TaskFormDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
}

export default function TaskCard({
  task,
  onDelete,
  onEdit,
  onStatusChange,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm border">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg">{task?.title}</CardTitle>
          <Badge variant="outline">{task?.status}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{task?.description}</p>

        <div className="text-sm">
          <span className="font-medium">Due Date:</span> {task?.dueDate}
        </div>

        <div className="space-y-3">
          <Select
            value={task?.status}
            onValueChange={(value) =>
              onStatusChange(task?.id, value as TaskStatus)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Change status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Todo">Todo</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <TaskFormDialog task={task} onSave={onEdit} />
            <Button
              variant="destructive"
              className="flex-1"
              onClick={() => onDelete(task?.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
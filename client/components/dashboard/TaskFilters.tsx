"use client";

import { Search, Filter, ArrowUpDown } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { TaskStatus } from "@/types/task";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: "All" | TaskStatus;
  setStatusFilter: (value: "All" | TaskStatus) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
}

export default function TaskFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  sortOrder,
  setSortOrder,
}: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 pl-10"
        />
      </div>

      {/* Filter by Status */}
      <div className="relative">
        <Filter className="pointer-events-none absolute left-3 top-1/3 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Select
          value={statusFilter}
          onValueChange={(value) =>
            setStatusFilter(value as "All" | TaskStatus)
          }
        >
          <SelectTrigger className="h-11 pl-10">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Todo">Todo</SelectItem>
            <SelectItem value="In Progress">In Progress</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Sort by Due Date */}
      <div className="relative sm:col-span-2 xl:col-span-1">
        <ArrowUpDown className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Select
          value={sortOrder}
          onValueChange={(value) => setSortOrder(value as "asc" | "desc")}
        >
          <SelectTrigger className="h-11 pl-10">
            <SelectValue placeholder="Sort by due date" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Due Date: Earliest</SelectItem>
            <SelectItem value="desc">Due Date: Latest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

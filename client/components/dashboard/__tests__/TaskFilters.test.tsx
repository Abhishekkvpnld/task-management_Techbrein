import { render, screen } from "@testing-library/react";
import TaskFilters from "../TaskFilters";
import { describe, it, expect } from "vitest";

describe("TaskFilters", () => {
  it("renders search input", () => {
    render(
      <TaskFilters
        search=""
        setSearch={() => {}}
        statusFilter="All"
        setStatusFilter={() => {}}
        sortOrder="asc"
        setSortOrder={() => {}}
      />,
    );

    expect(screen.getByPlaceholderText(/search by title/i)).toBeInTheDocument();
  });

  it("renders filter and sort controls", () => {
    render(
      <TaskFilters
        search=""
        setSearch={() => {}}
        statusFilter="All"
        setStatusFilter={() => {}}
        sortOrder="asc"
        setSortOrder={() => {}}
      />,
    );

    expect(screen.getAllByRole("combobox")).toHaveLength(2);
  });
});

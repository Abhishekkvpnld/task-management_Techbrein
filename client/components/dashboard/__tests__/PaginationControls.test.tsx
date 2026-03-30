import { render, screen } from "@testing-library/react";
import PaginationControls from "../PaginationControls";
import { expect, it,describe } from "vitest";


describe("PaginationControls", () => {
  it("renders pagination controls when more than one page exists", () => {
    render(
      <PaginationControls
        currentPage={1}
        totalPages={3}
        onPageChange={() => {}}
      />
    );

    expect(screen.getByText(/showing page/i)).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("does not render if totalPages is 1", () => {
    const { container } = render(
      <PaginationControls
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
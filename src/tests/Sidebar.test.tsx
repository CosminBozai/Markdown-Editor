import { describe, it, vi } from "vitest";
import Sidebar from "../components/Sidebar";
import { render, screen } from "@testing-library/react";
import { DocumentType } from "../utils/types";

const mockDocuments: DocumentType[] = [
  { id: "a", date: "01 April 2023", title: "My first document", content: "" },
  { id: "b", date: "02 April 2023", title: "My second document", content: "" },
];

const setActiveDoc = vi.fn();

describe("Sidebar", () => {
  it("should render with the correct class name when show prop is true", () => {
    render(
      <Sidebar
        show={true}
        documents={mockDocuments}
        activeDoc={"a"}
        setActiveDoc={setActiveDoc}
      />
    );
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toHaveClass("show");
  });

  it("should render with the correct class name when show prop is false", () => {
    render(
      <Sidebar
        show={false}
        documents={mockDocuments}
        activeDoc={"a"}
        setActiveDoc={setActiveDoc}
      />
    );
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).not.toHaveClass("show");
  });

  it("should render documents", () => {
    render(
      <Sidebar
        show={true}
        documents={mockDocuments}
        activeDoc={"a"}
        setActiveDoc={setActiveDoc}
      />
    );
    const documentList = screen.getAllByRole("listitem");
    expect(documentList.length).toEqual(mockDocuments.length);
  });
});

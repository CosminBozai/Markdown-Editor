import { describe, it } from "vitest";
import Sidebar from "../components/Sidebar";
import { render, screen } from "@testing-library/react";
import { DocumentType } from "../utils/types";

const mockDocuments: DocumentType[] = [
  {
    date: "01 April 2023",
    title: "My first document",
    content: "",
  },
  {
    date: "02 April 2023",
    title: "My second document",
    content: "",
  },
];

describe("Sidebar", () => {
  it("should render with the correct class name when show prop is true", () => {
    render(<Sidebar show={true} documents={mockDocuments} />);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toHaveClass("show");
  });

  it("should render with the correct class name when show prop is false", () => {
    render(<Sidebar show={false} documents={mockDocuments} />);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).not.toHaveClass("show");
  });

  it("should render documents", () => {
    render(<Sidebar show={true} documents={mockDocuments} />);
    const documentList = screen.getAllByRole("listitem");
    expect(documentList.length).toEqual(mockDocuments.length);
  });
});

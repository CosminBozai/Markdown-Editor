import { fireEvent, render, screen } from "@testing-library/react";
import Document from "../components/Document";
import { vi } from "vitest";
import { useState } from "react";

function MockComponent() {
  const [activeDoc, setActiveDoc] = useState<string | null>(null);
  const docId = "123";
  return (
    <Document
      date={"12 April 2020"}
      title={"doc"}
      active={activeDoc === docId}
      id="123"
      setActiveDoc={setActiveDoc}
    />
  );
}

describe("Document", () => {
  it("renders date and title of the document", () => {
    const date = "April 12, 2023";
    const title = "Test Document";
    render(
      <Document
        date={date}
        title={title}
        active={false}
        id="a"
        setActiveDoc={vi.fn()}
      />
    );
    const dateElement = screen.getByText(date);
    const titleElement = screen.getByText(title);
    expect(dateElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });

  it("renders with class active if active is true", () => {
    render(
      <Document
        date={"12 April 2020"}
        title={"doc"}
        active={true}
        id="a"
        setActiveDoc={vi.fn()}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement).toHaveClass("active");
  });

  it("should change active component to document id", () => {
    render(<MockComponent />);
    const liElement = screen.getByRole("listitem");

    fireEvent.click(liElement);
    expect(liElement).toHaveClass("active");
  });
});

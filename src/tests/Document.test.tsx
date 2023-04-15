import { render, screen } from "@testing-library/react";
import Document from "../components/Document";

describe("Document", () => {
  it("renders date and title of the document", () => {
    const date = "April 12, 2023";
    const title = "Test Document";
    render(<Document date={date} title={title} />);
    const dateElement = screen.getByText(date);
    const titleElement = screen.getByText(title);
    expect(dateElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});

import { render, renderHook, screen } from "@testing-library/react";
import { beforeEach, it, describe, expect } from "vitest";
import App from "../App";
import "vitest-localstorage-mock";

describe("Color theme", () => {
  beforeEach(() => window.localStorage.clear());

  it("should render with light theme when there is no saved theme", () => {
    render(<App />);
    const appElement = screen.getByTestId("app-element");
    expect(appElement).toHaveClass("lightTheme");
  });

  it("should render with dark theme when dark theme is saved", () => {
    window.localStorage.setItem("colorTheme", "darkTheme");
    render(<App />);
    const appElement = screen.getByTestId("app-element");
    expect(appElement).toHaveClass("darkTheme");
  });
});

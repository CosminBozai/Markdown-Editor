import { renderHook, act } from "@testing-library/react";
import useTheme from "../hooks/useTheme";

describe("useTheme", () => {
  afterEach(() => {
    localStorage.removeItem("colorTheme");
  });

  it("should set the initial theme to lightTheme if no saved theme exists", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.colorTheme).toEqual("lightTheme");
  });

  it("should set the initial theme to the saved theme in localStorage", () => {
    localStorage.setItem("colorTheme", "darkTheme");
    const { result } = renderHook(() => useTheme());
    expect(result.current.colorTheme).toEqual("darkTheme");
  });

  it("should toggle the theme when toggleTheme is called", () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.colorTheme).toEqual("darkTheme");
  });
});

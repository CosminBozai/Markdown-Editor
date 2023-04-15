import { useEffect, useState } from "react";
import { ColorTheme } from "../utils/types";

function useTheme() {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("lightTheme");

  useEffect(() => {
    if (localStorage.getItem("colorTheme"))
      setColorTheme(localStorage.getItem("colorTheme") as ColorTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = colorTheme === "lightTheme" ? "darkTheme" : "lightTheme";
    localStorage.setItem("colorTheme", nextTheme);
    setColorTheme(nextTheme);
  };

  return { colorTheme, toggleTheme };
}

export default useTheme;

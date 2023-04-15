import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import "./styles/App.scss";
import "./styles/colorThemes.scss";
import { ColorTheme } from "./utils/types";

function App() {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("lightTheme");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("colorTheme"))
      setColorTheme(localStorage.getItem("colorTheme") as ColorTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = colorTheme === "lightTheme" ? "darkTheme" : "lightTheme";
    localStorage.setItem("colorTheme", nextTheme);
    setColorTheme(nextTheme);
  };

  return (
    <div className={"App " + colorTheme} data-testid="app-element">
      <Sidebar
        colorTheme={colorTheme}
        toggleTheme={toggleTheme}
        show={showSidebar}
      />
      <div className="components-wrapper">
        <button onClick={() => setShowSidebar(!showSidebar)}>
          toggleSidebar
        </button>
      </div>
    </div>
  );
}

export default App;

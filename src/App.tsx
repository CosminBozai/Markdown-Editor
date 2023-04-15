import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { ColorTheme, DocumentType } from "./utils/types";
import { getDocuments } from "./utils/documents";
import "./styles/App.scss";
import "./styles/colorThemes.scss";

function App() {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("lightTheme");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [documents, setDocuments] = useState<DocumentType[]>([]);

  useEffect(() => {
    if (localStorage.getItem("colorTheme"))
      setColorTheme(localStorage.getItem("colorTheme") as ColorTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = colorTheme === "lightTheme" ? "darkTheme" : "lightTheme";
    localStorage.setItem("colorTheme", nextTheme);
    setColorTheme(nextTheme);
  };

  useEffect(() => {
    getDocuments().then((documents) => setDocuments(documents));
  }, []);

  return (
    <div className={"App " + colorTheme} data-testid="app-element">
      <Sidebar
        colorTheme={colorTheme}
        toggleTheme={toggleTheme}
        show={showSidebar}
        documents={documents}
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

import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { DocumentType } from "./utils/types";
import { getDocuments } from "./utils/documents";
import "./styles/App.scss";
import { atom, useAtom } from "jotai";
import useTheme from "./hooks/useTheme";
import "./styles/colorThemes.scss";

export const documentsAtom = atom<DocumentType[]>([]);

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [documents, setDocuments] = useAtom(documentsAtom);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);
  const { colorTheme, toggleTheme } = useTheme();

  useEffect(() => {
    getDocuments().then((documents) => setDocuments(documents));
  }, []);

  return (
    <div className={"App " + colorTheme} data-testid="app-element">
      <Sidebar
        show={showSidebar}
        documents={documents}
        activeDoc={activeDoc}
        setActiveDoc={setActiveDoc}
        colorTheme={colorTheme}
        toggleTheme={toggleTheme}
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

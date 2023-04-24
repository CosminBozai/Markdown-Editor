import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { DocumentType } from "./utils/types";
import { getDocuments } from "./utils/documents";
import "./styles/App.scss";
// import "./styles/colorThemes.scss";

//TODO logic for adding documents

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [documents, setDocuments] = useState<DocumentType[]>([]);
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  useEffect(() => {
    getDocuments().then((documents) => setDocuments(documents));
  }, []);

  return (
    <div className="App" data-testid="app-element">
      <Sidebar
        show={showSidebar}
        documents={documents}
        activeDoc={activeDoc}
        setActiveDoc={setActiveDoc}
        setDocuments={setDocuments}
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

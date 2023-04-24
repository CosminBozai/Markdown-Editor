import { useState } from "react";
import { ReactComponent as DarkIcon } from "../assets/icon-dark-mode.svg";
import { ReactComponent as LightIcon } from "../assets/icon-light-mode.svg";
import { DocumentType } from "../utils/types";
import Document from "./Document";
import useTheme from "../hooks/useTheme";
import Overlay from "./Overlay";
import "../styles/Sidebar.scss";
import NewDocModal from "./NewDocModal";

type Props = {
  show: boolean;
  documents: DocumentType[];
  activeDoc: string | null;
  setActiveDoc: React.Dispatch<React.SetStateAction<string | null>>;
};

function Sidebar({ show, documents, activeDoc, setActiveDoc }: Props) {
  const [showOverlay, setShowOverlay] = useState(false);
  const closeOverlay = () => setShowOverlay(false);

  const { colorTheme, toggleTheme } = useTheme();

  const documentsList = documents.map((doc) => {
    if (activeDoc === doc.id) {
      return (
        <Document
          key={doc.id}
          id={doc.id}
          date={doc.date}
          title={doc.title}
          setActiveDoc={setActiveDoc}
          active={true}
        />
      );
    } else {
      return (
        <Document
          key={doc.id}
          id={doc.id}
          date={doc.date}
          title={doc.title}
          setActiveDoc={setActiveDoc}
          active={false}
        />
      );
    }
  });

  return (
    <>
      <div
        className={`sidebar ${colorTheme} ${show ? "show" : ""}`}
        data-testid="sidebar"
      >
        <h1>MARKDOWN</h1>
        <p className="my-documents">MY DOCUMENTS</p>
        <button className="new-doc-btn" onClick={() => setShowOverlay(true)}>
          + New Document
        </button>
        <ul className="document-list">{documentsList}</ul>
        <div className="theme-toggle-container">
          <DarkIcon
            fill={colorTheme === "darkTheme" ? "white" : "#7c8187"}
            scale={1.1}
          />
          <div className="toggle-wrapper">
            <input
              type="checkbox"
              id="toggle"
              onChange={toggleTheme}
              checked={colorTheme === "lightTheme"}
            />
            <label className="toggle-label" htmlFor="toggle"></label>
          </div>
          <LightIcon
            fill={colorTheme === "lightTheme" ? "white" : "#7c8187"}
            scale={1.1}
          />
        </div>
      </div>
      {showOverlay && (
        <Overlay
          onClose={closeOverlay}
          children={<NewDocModal onClose={closeOverlay} />}
        />
      )}
    </>
  );
}

export default Sidebar;

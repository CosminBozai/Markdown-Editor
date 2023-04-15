import { ReactComponent as DarkIcon } from "../assets/icon-dark-mode.svg";
import { ReactComponent as LightIcon } from "../assets/icon-light-mode.svg";
import { ColorTheme, DocumentType } from "../utils/types";
import Document from "./Document";
import "../styles/Sidebar.scss";

type Props = {
  colorTheme: ColorTheme;
  toggleTheme: () => void;
  show: boolean;
  documents: DocumentType[];
};

function Sidebar({ colorTheme, toggleTheme, show, documents }: Props) {
  const documentsList = documents.map((doc, i) => (
    <Document key={i} date={doc.date} title={doc.title} />
  ));

  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <h1>MARKDOWN</h1>
      <p className="my-documents">MY DOCUMENTS</p>
      <button className="new-doc-btn">+ New Document</button>
      <ul>{documentsList}</ul>
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
  );
}

export default Sidebar;

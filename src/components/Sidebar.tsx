import { ReactComponent as FileIcon } from "../assets/icon-document.svg";
import { ReactComponent as DarkIcon } from "../assets/icon-dark-mode.svg";
import { ReactComponent as LightIcon } from "../assets/icon-light-mode.svg";

import "../styles/Sidebar.scss";
import { ColorTheme } from "../utils/types";

//TODO: add the colors, themes, slider and theme toggling

type Props = {
  colorTheme: ColorTheme;
  toggleTheme: () => void;
  show: boolean;
};

function Sidebar({ colorTheme, toggleTheme, show }: Props) {
  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <h1>MARKDOWN</h1>
      <p className="my-documents">MY DOCUMENTS</p>
      <button className="new-doc-btn">+ New Document</button>
      <div className="document-wrapper">
        <FileIcon className="file-icon" />
        <div className="doc-details">
          <p className="doc-date">01 April 2022</p>
          <p className="doc-title">untitled-document.md</p>
        </div>
      </div>
      <div className="document-wrapper">
        <FileIcon className="file-icon" />
        <div className="doc-details">
          <p className="doc-date">01 April 2022</p>
          <p className="doc-title">welcome.md</p>
        </div>
      </div>
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

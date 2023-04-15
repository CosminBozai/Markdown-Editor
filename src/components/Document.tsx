import { ReactComponent as FileIcon } from "../assets/icon-document.svg";
import "../styles/Document.scss";

type Props = {
  date: string;
  title: string;
  active: boolean;
  id: string;
  setActiveDoc: React.Dispatch<React.SetStateAction<string | null>>;
};

function Document({ date, title, active, id, setActiveDoc }: Props) {
  return (
    <li
      className={`document-wrapper ${active && "active"}`}
      onClick={() => setActiveDoc(id)}
    >
      <FileIcon className="file-icon" />
      <div className="doc-details">
        <p className="doc-date">{date}</p>
        <p className="doc-title">{title}</p>
      </div>
    </li>
  );
}

export default Document;

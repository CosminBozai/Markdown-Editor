import { ReactComponent as FileIcon } from "../assets/icon-document.svg";
import "../styles/Document.scss";

type Props = {
  date: string;
  title: string;
};

function Document({ date, title }: Props) {
  return (
    <li className="document-wrapper">
      <FileIcon className="file-icon" />
      <div className="doc-details">
        <p className="doc-date">{date}</p>
        <p className="doc-title">{title}</p>
      </div>
    </li>
  );
}

export default Document;

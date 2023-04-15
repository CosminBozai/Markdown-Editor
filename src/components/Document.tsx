import { ReactComponent as FileIcon } from "../assets/icon-document.svg";
import "../styles/Document.scss";

type Props = {
  date: object;
  title: string;
};

function Document({ date, title }: Props) {
  return (
    <div className="document-wrapper">
      <FileIcon className="file-icon" />
      <div className="doc-details">
        <p className="doc-date">{String(date)}</p>
        <p className="doc-title">{title}</p>
      </div>
    </div>
  );
}

export default Document;

import { ReactComponent as FileIcon } from "../assets/icon-document.svg";
import { MdEdit } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import "../styles/Document.scss";
import React, { useState } from "react";
import { editDocTitle } from "../utils/documents";

type Props = {
  date: string;
  title: string;
  active: boolean;
  id: string;
  setActiveDoc: React.Dispatch<React.SetStateAction<string | null>>;
};

function Document({ date, title, active, id, setActiveDoc }: Props) {
  const [editingTitle, setEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = async () => {
    if (newTitle !== title) await editDocTitle(id, newTitle);
    setEditingTitle(false);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setNewTitle(target.value);
  };

  const button = editingTitle ? (
    <button className="doc-btn" onClick={handleSave}>
      <AiOutlineCheck className="save-icon" />
    </button>
  ) : (
    <button className="doc-btn" onClick={() => setEditingTitle(true)}>
      <MdEdit className="edit-icon" />
    </button>
  );

  const inputOrTitle = editingTitle ? (
    <input value={newTitle} className="doc-input" onChange={handleChange} />
  ) : (
    <p className="doc-title">{title}</p>
  );

  return (
    <li
      className={`document-wrapper ${active && "active"}`}
      onClick={() => setActiveDoc(id)}
    >
      <FileIcon className="file-icon" />
      <div className="doc-details">
        <p className="doc-date">{date}</p>
        {inputOrTitle}
      </div>
      {button}
    </li>
  );
}

export default Document;

import { useRef, useState } from "react";
import createFile from "../utils/createFile";
import { CreatedDocument } from "../utils/types";
import { addNewDocument } from "../utils/documents";
import "../styles/NewDocModal.scss";
import { Timestamp } from "firebase/firestore";
import { getDocuments } from "../utils/documents";
import { documentsAtom } from "../App";
import { useAtom } from "jotai";

type Props = {
  onClose: () => void;
};

function NewDocModal({ onClose }: Props) {
  const [newFile, setNewFile] = useState<CreatedDocument>();
  const [, setDocuments] = useAtom(documentsAtom);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const nextFile = await createFile(file);
      setNewFile(nextFile);
    }
  };

  const handleSubmit = async () => {
    if (newFile) {
      await addNewDocument(newFile);
    }

    await getDocuments().then((documents) => setDocuments(documents));

    onClose();
  };

  const handleClick = async () => {
    await addNewDocument({
      title: "New Document",
      date: Timestamp.now(),
      content: "",
    });

    await getDocuments().then((documents) => setDocuments(documents));

    onClose();
  };

  return (
    <div className="new-doc-modal-container">
      <p>Add new document</p>
      <button className="modal-btn" onClick={handleClick}>
        Create new document
      </button>
      <span>or add an existing document</span>
      <div className="file-wrapper">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleUpload}
          accept=".md"
        />
        <button className="modal-submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewDocModal;

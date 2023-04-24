import { Timestamp } from "firebase/firestore";
import { CreatedDocument, DocumentType } from "./types";

const createFile = (file: File): Promise<CreatedDocument> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      const title = file.name.split(".md")[0];
      const date = Timestamp.now();
      const data = { content, title, date };
      resolve(data);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsText(file);
  });
};

export default createFile;

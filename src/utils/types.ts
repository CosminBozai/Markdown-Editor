import { Timestamp } from "firebase/firestore";

type ColorTheme = "lightTheme" | "darkTheme";

type DocumentType = {
  id: string;
  title: string;
  content: string;
  date: string;
};

type CreatedDocument = {
  title: string;
  content: string | ArrayBuffer | null | undefined;
  date: Timestamp;
};

export type { ColorTheme, DocumentType, CreatedDocument };

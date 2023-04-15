import { DocumentData } from "firebase/firestore";

type ColorTheme = "lightTheme" | "darkTheme";

type DocumentType = {
  title: string;
  content: string;
  date: string;
};

export type { ColorTheme, DocumentType };

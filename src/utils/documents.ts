import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { DocumentType } from "./types";

const getDocuments = async () => {
  try {
    const documents: DocumentType[] = [];
    const querySnapshot = await getDocs(collection(db, "documents"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      data.date = data.date
        .toDate()
        .toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
        .replace(",", ""); // example: 12 April 2023

      documents.push(data as DocumentType);
    });
    return documents;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export { getDocuments };

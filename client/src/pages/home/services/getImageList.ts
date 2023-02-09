import { doc, onSnapshot } from "firebase/firestore";
import { dbService } from "services";

export function getImageList() {
  const TEST_DOCUMENT_ID = "oCo3iiCdSBI0TNf7Nk43";
  const images: string[] = [];
  onSnapshot(doc(dbService, `RenderTest`, TEST_DOCUMENT_ID), (data: any) => {
    data.forEach((document: any) => {
      images.push(document.data().images);
    });
  });
  return images;
}

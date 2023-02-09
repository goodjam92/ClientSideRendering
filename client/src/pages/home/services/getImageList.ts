import { doc, getDoc } from "firebase/firestore";
import { dbService } from "services";

export async function getImageList() {
  const TEST_DOCUMENT_ID = "oCo3iiCdSBI0TNf7Nk43";
  const docRef = doc(dbService, `RenderTest`, TEST_DOCUMENT_ID);
  const docSnap: any = (await getDoc(docRef)).data();
  return docSnap.images;
}

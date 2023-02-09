import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { dbService, storageService } from "services";

export async function getImageUrl(imageString: string, userUid: string) {
  const fileName = Math.random().toString(36).substring(2, 11);

  const imageRef = ref(storageService, `${userUid}/${fileName}`);
  const attachmentImgUpload = await uploadString(
    imageRef,
    imageString,
    "data_url"
  );
  const attachmentUrl = await getDownloadURL(attachmentImgUpload.ref);
  return attachmentUrl;
}

export async function setImageDoc(imageDataUrl: string, docId: string) {
  const docRef = doc(dbService, `RenderTest`, docId);
  setDoc(
    docRef,
    {
      images: arrayUnion(imageDataUrl)
    },
    { merge: true }
  );
}

export async function imageFileUpload(imageFile: string, userUid: string) {
  const TEST_DOCUMENT_ID = "oCo3iiCdSBI0TNf7Nk43";

  const imageFileUrl = await getImageUrl(imageFile, userUid);
  setImageDoc(imageFileUrl, TEST_DOCUMENT_ID);
}

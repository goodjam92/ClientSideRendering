import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABzKvSLDXNqaZj-7JHuMq0LFZN3mGCUjQ",
  authDomain: "serversiderendering-e21f6.firebaseapp.com",
  projectId: "serversiderendering-e21f6",
  storageBucket: "serversiderendering-e21f6.appspot.com",
  messagingSenderId: "784435517380",
  appId: "1:784435517380:web:a7ff8edbc979246796b691"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const authService = getAuth(firebaseApp);
export const dbService = getFirestore(firebaseApp);
export const storageService = getStorage(firebaseApp);

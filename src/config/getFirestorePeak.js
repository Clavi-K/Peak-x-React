import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjmIQz8jFOqlY6DGcl8AIEXh-7M1d0ff8",
  authDomain: "peakstreetwearxreact.firebaseapp.com",
  projectId: "peakstreetwearxreact",
  storageBucket: "peakstreetwearxreact.appspot.com",
  messagingSenderId: "938140676000",
  appId: "1:938140676000:web:dafb0be0a0100a88d53ec5"
};

const app = initializeApp(firebaseConfig);

export const getFirestorePeak = () => {
    return app;
}

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
import firebaseConfig from "./secret"
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
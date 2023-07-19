import firebase_app from "../firebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(phone, password) {
    let mEmail = `s${phone}@sunnybutt.com`
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, mEmail, password);
        console.log("Storing data in storage = "+phone);
        localStorage.setItem("PHONE",phone);
     
        
    } catch (e) {
        error = e;
    }

    return { result, error };
}
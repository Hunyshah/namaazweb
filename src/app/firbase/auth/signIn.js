import firebase_app from "../firebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
    let mEmail = `s${email}@sunnybutt.com`
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, mEmail, password);
        
    } catch (e) {
        error = e;
    }

    return { result, error };
}
import firebase_app from "../firebaseConfig";
import { signInWithEmailAndPassword, getAuth, } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(phone, password) {
  let mEmail = `s${phone}@sunnybutt.com`
  let result = null,
      error = null;
  try {
    result = await signInWithEmailAndPassword(auth, mEmail, password);
    console.log("Storing data in storage = "+phone);
    localStorage.setItem("PHONE", phone);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

// Check if user is signed in on page load
// window.onload = function() {
//   onAuthStateChanged(auth, function(user) {
//     if (user) {
//       console.log("User is signed in");
//       // Do something if user is signed in
//     } else {
//       console.log("No user is signed in");
//       // Do something if no user is signed in
//     }
//   });
// };

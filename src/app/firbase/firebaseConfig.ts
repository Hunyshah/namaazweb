// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { initializeApp, getApps } from "firebase/app";
import "firebase/messaging";


export const firebaseConfig = {
    apiKey: "AIzaSyBqTv2U83TbCf6ylw9U2_p0v0pvvdn7oaA",
  authDomain: "prayer-times-9dc39.firebaseapp.com",
  projectId: "prayer-times-9dc39",
  storageBucket: "prayer-times-9dc39.appspot.com",
  messagingSenderId: "863992076944",
  appId: "1:863992076944:web:585eb289153945eede5615",
  measurementId: "G-XYKZSJ6YGG"
};


// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/firebase-messaging-sw.js") // Path to your service worker file
//     .then((registration) => {
//       firebase.messaging().useServiceWorker(registration);
//     })
//     .catch((err) => {
//       console.error("Service worker registration failed", err);
//     });
// }
// export const messaging = getMessaging(firebase_app);
export default firebase_app;

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export default firebase;
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Export Firestore if you're using it
// export const firestore = firebase.firestore();

// // You can also export other Firebase services if needed (e.g., authentication)

// export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBqTv2U83TbCf6ylw9U2_p0v0pvvdn7oaA",
  authDomain: "prayer-times-9dc39.firebaseapp.com",
  projectId: "prayer-times-9dc39",
  storageBucket: "prayer-times-9dc39.appspot.com",
  messagingSenderId: "863992076944",
  appId: "1:863992076944:web:585eb289153945eede5615",
  measurementId: "G-XYKZSJ6YGG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firestore if you're using it
export const firestore = firebase.firestore();

// You can also export other Firebase services if needed (e.g., authentication)

export default firebase;

import firebase_app from "../firbase/firebaseConfig";
import { getFirestore, doc, getDoc, collectionGroup,orderBy, query, where, getDocs, collection } from "firebase/firestore";
const db = getFirestore(firebase_app);

export default async function getDocument(email) {
//   email = email.substring(1, email.indexOf('@'));
  console.log(`Email = ${email}`);
  let q = query(collectionGroup(db, "User"), where('mobileNumber', '==', email));
  let querySnapshot = await getDocs(q);
  console.log("Length of query = " + querySnapshot.docs.length);

   let data = querySnapshot.docs[0].data();
  
  let docRef = doc(db,`Mosque/${data.mosqueId}/`)
  let docSnap = await getDoc(docRef);
  let cRef = collection(docSnap.ref,'Prayers');
  const namazOrderQuery = query(cRef,orderBy('ID','desc'))
  let pSnap = await getDocs(namazOrderQuery);

   
  console.log(pSnap.docs.length+"   yeh length he");
   return pSnap.docs;



//   let docId = data.id;
//   let docRef = doc(db, "Mosque", data.mosqueId );
//   let docSnapshot = await getDoc(docRef);

//   if (docSnapshot.exists()) {
//     let retrievedData = docSnapshot.data();
//     console.log(`Retrieved Data = ${JSON.stringify(retrievedData)}`);
//     return retrievedData;
//   } else {
//     console.log(`Document at path Mosque/${docId}/prayers does not exist.`);
//     return null;
//   }
}





// import firebase_app from "../firbase/firebaseConfig";
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   collectionGroup,
//   query,
//   where,
// } from "firebase/firestore";

// const db = getFirestore(firebase_app);

// export default function subscribeToPrayers(email, onPrayersChange) {
//   // Subscribe to real-time changes in the "Prayers" collection
//   const unsubscribe = subscribeToPrayersCollection(email, onPrayersChange);

//   // Return the unsubscribe function to allow stopping the real-time listener when needed
//   return unsubscribe;
// }

// async function subscribeToPrayersCollection(email, onPrayersChange) {
//   // Query the "User" collection to find the user document based on the email
//   let q = query(collectionGroup(db, "User"), where("mobileNumber", "==", email));
//   let querySnapshot = await getDocs(q);

//   if (querySnapshot.docs.length > 0) {
//     let data = querySnapshot.docs[0].data();
//     let docRef = doc(db, `Mosque/${data.mosqueId}/Prayers`);

//     // Set up the real-time listener using onSnapshot
//     return docRef.onSnapshot((snapshot) => {
//       let prayersData = [];
//       snapshot.forEach((doc) => {
//         prayersData.push({ id: doc.id, ...doc.data() });
//       });

//       // Call the callback function with the updated prayers data
//       onPrayersChange(prayersData);
//     });
//   } else {
//     console.log(`User with email "${email}" not found.`);
//     return () => {}; // Return an empty function for unsubscribe if user not found
//   }
// }

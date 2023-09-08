import firebase_app from "../firbase/firebaseConfig";
import { getFirestore, doc, getDoc, collectionGroup,orderBy, query, where, getDocs, collection } from "firebase/firestore";
const db = getFirestore(firebase_app);
export const getAnnouncement = async(email)  =>{
  let q = query(collectionGroup(db, "User"), where('mobileNumber', '==', email));
  let querySnapshot = await getDocs(q);
  console.log("Length of query = " + querySnapshot.docs.length);

   let data = querySnapshot.docs[0].data();
  
  let docRef = doc(db,`Mosque/${data.mosqueId}/`)
  let snapshot = await getDoc(docRef);
  
  return snapshot.data().Announcement;
}
export const getcolor = async(email)  =>{
  let q = query(collectionGroup(db, "User"), where('mobileNumber', '==', email));
  let querySnapshot = await getDocs(q);
  console.log("Length of query = " + querySnapshot.docs.length);

   let data = querySnapshot.docs[0].data();
  
  let docRef = doc(db,`Mosque/${data.mosqueId}/`)
  let snapshot = await getDoc(docRef);
  console.log(snapshot.data().color)
  return snapshot.data().color;
}
export default async function getDocument(email,dynamic) {
//   email = email.substring(1, email.indexOf('@'));
  let q = query(collectionGroup(db, "User"), where('mobileNumber', '==', email));
  let querySnapshot = await getDocs(q);

   let data = querySnapshot.docs[0].data();
  
  let docRef = doc(db,`Mosque/${data.mosqueId}/`)
  let docSnap = await getDoc(docRef);
  if (dynamic === 'Prayers'){

    let cRef = collection(docSnap.ref,dynamic);  //'Prayers'
  const namazOrderQuery = query(cRef,orderBy('ID','desc'))
  let pSnap = await getDocs(namazOrderQuery);

   
   return pSnap.docs;
  }
  else {

    let cRef = collection(docSnap.ref,dynamic);  //'Prayers'
  
  let pSnap = await getDocs(cRef);

   
   return pSnap.docs;

  }
 
  



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


export const getMosqueId = async (email)=>{
  let q = query(collectionGroup(db, "User"), where('mobileNumber', '==', email));
  let querySnapshot = await getDocs(q);
   let data = querySnapshot.docs[0].data();
   return data.mosqueId;
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

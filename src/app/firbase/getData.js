import firebase_app from "../firbase/firebaseConfig";
import { getFirestore, doc, getDoc, collectionGroup, query, where, getDocs, collection } from "firebase/firestore";
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
  let pSnap = await getDocs(cRef);
   
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

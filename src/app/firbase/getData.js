import firebase_app from "../firbase/firebaseConfig";
import { getFirestore, doc, getDoc, collectionGroup, query, where, getDocs } from "firebase/firestore";
const db = getFirestore(firebase_app)
export default async function getDoument( email) {
     
     email = email.substring(1,email.indexOf('@'));
     console.log(`Email = ${email}`);
     let q = query(collectionGroup(db,"User"),where('mobileNumber','==',email))
     let querySnapshot = await getDocs(q)
     console.log("Length of query = "+querySnapshot.docs.length);
    //  if(querySnapshot.exists){
    //     console.log(querySnapshot.toString());
    //  }
    let data = querySnapshot.docs[0];
    console.log(`Data = ${JSON.stringify(data)}`);
    return data;
    // querySnapshot.forEach((doc) => {
    //     // results.push({ id: doc.id, ...doc.data() });
    //     console.log(doc.data())
    //     // userSingleton.setUser(doc.data())
    //   });
    // try {
    //     results = await getDoc(docRef);
    //     console.log(results)
    // } catch (e) {
    //     error = e;
    // }
}

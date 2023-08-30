'use client';
import firebase_app from "@/app/firbase/firebaseConfig"; // Import your firebase_app object
import { useEffect, useState } from "react";
import { useAuthContext } from "../components/context/authContext";
import { useRouter } from "next/navigation";
import getDoument from "../firbase/getData";
import NavBar from "../components/nav";
import HeroSection from "../components/hero";
import Herofooter from "../components/herofooter";
import { getMessaging } from "firebase/messaging";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";


function Page() {
  const [jammatTime, setJammatTime] = useState<any>();
  const { user }: any = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    async function getJammatdata() {
      let phone = localStorage.getItem("PHONE");
      console.log("Phone retrieved = " + phone);
      let allDocs: any = await getDoument(phone);
      setJammatTime(allDocs);
      console.log(allDocs[0].mosqueId)
      
//  let q = query(collectionGroup(db, "User"), where('mobileNumber', '==', email));
//    let querySnapshot = await getDocs(q);
//    console.log("Length of query = " + querySnapshot.docs.length);

//    let data = querySnapshot.docs[0].data();
  //  let docRef = doc(db,`Mosque/${data.mosqueId}/`)
      // Optional: Listen for new data updates using Firebase Cloud Messaging (FCM)
      const messaging = getMessaging(firebase_app);
      const db = getFirestore(firebase_app);
    const collectionRef = collection(db, `Mosque/${allDocs.id}/Prayers`);

    // Set up the real-time listener using onSnapshot
    const unsubscribe = onSnapshot(collectionRef, (snapshot:any) => {
      console.log("update in data");
      // The snapshot contains the data from the collection at this moment
      const updatedData = snapshot.docs.map((doc:any) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      
    }
    );
  }
    getJammatdata();

    if (user == null) router.push("/");
  }, [user]);

  return (
    <>
      <NavBar />
      <HeroSection jammattime={jammatTime} />
      <Herofooter />
    </>
  );
}

export default Page;

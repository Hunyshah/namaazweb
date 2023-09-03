'use client';
import firebase_app from "@/app/firbase/firebaseConfig"; // Import your firebase_app object
import { useEffect, useState } from "react";
import { useAuthContext } from "../components/context/authContext";
import { useRouter } from "next/navigation";
import getDoument, { getAnnouncement, getcolor } from "../firbase/getData";
import NavBar from "../components/nav";
import HeroSection from "../components/hero";
import Herofooter from "../components/herofooter";
import { getMessaging } from "firebase/messaging";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:'500',
  preload:false
})

function Page() {
  const [jammatTime, setJammatTime] = useState<any>();

  const [alaan, setalaan] = useState<any>();

  const [color, setcolor] = useState<any>();

  const [slideImage, setSlideImages] = useState<string|undefined>();
  const { user }: any = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    async function getJammatdata() {
      let phone = localStorage.getItem("PHONE");
      let alan = getAnnouncement(phone);
      setalaan(alan)
      let color = await getcolor(phone)
      setcolor(color)
      console.log("Phone retrieved = " + phone);
      let allDocs: any = await getDoument(phone,'Prayers');
      let slidedocs:any = await getDoument(phone,'SlideImages')
      setJammatTime(allDocs);
      console.log(`slide images = ${slidedocs.length}`)
      setSlideImages(slidedocs)
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
  }, [user,color]);

  return (
    <>
    <div  className={`${roboto.className} h-screen `} >
      <NavBar color = {color} />
      <HeroSection color = {color} jammattime={jammatTime} />
      {slideImage&&<Herofooter color={color} imageslider = {slideImage} alan={alaan} />}
      </div>
    </>
  );
}

export default Page;

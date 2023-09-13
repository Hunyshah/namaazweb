"use client";
import firebase_app from "@/app/firbase/firebaseConfig"; // Import your firebase_app object
import { useEffect, useState } from "react";
import { useAuthContext } from "../components/context/authContext";
import { useRouter } from "next/navigation";
import getDoument, {
  getAnnouncement,
  getMosqueId,
  getcolor,
} from "../firbase/getData";
import NavBar from "../components/nav";
import HeroSection from "../components/hero";
import Herofooter from "../components/herofooter";
import { getMessaging } from "firebase/messaging";
import {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  QuerySnapshot,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
} from "firebase/firestore";
import { Roboto } from "next/font/google";
let mosqueId: string = "";
const roboto = Roboto({
  weight: "500",
  preload: false,
});

function Page() {
  const db = getFirestore(firebase_app);

  const [jammatTime, setJammatTime] = useState<any>();

  const [alaan, setalaan] = useState<string>("");

  const [color, setcolor] = useState<string>("#00000");

  const [slideImage, setSlideImages] = useState<string | undefined>();
  const { user }: any = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    let phone = localStorage.getItem("PHONE");
    getMosqueId(phone).then((mosqueId) => {
      const docRef = doc(db,'Mosque',mosqueId);
      onSnapshot(docRef,(doc)=>{
        console.log("Mosque document cahnge")
        let color  = doc.get("color");
        let alan = doc.get("Announcement");
        setcolor(color);
        setalaan(alan)
      })
     
      
      const pryersUpdateQuery = query(
        collection(db, "Mosque/" + mosqueId + "/Prayers")
      );
      onSnapshot(pryersUpdateQuery, (pSnap: any) => {
        setJammatTime(pSnap.docs);
      });
      const slideImagesQuery = query(
        collection(db, "Mosque/" + mosqueId + "/SlideImages")
      );
      onSnapshot(slideImagesQuery, (pSnap: any) => {
        console.log("Images changed " +pSnap.docs.length);
        setSlideImages(pSnap.docs);
      });
    });
  }, []);

  useEffect(() => {
    async function getJammatdata() {
      let phone = localStorage.getItem("PHONE");

      console.log("Phone retrieved = " + phone);
      // let allDocs: any = await getDoument(phone, "Prayers");
      // let slidedocs: any = await getDoument(phone, "SlideImages");
      // // console.log("this is 2nd prayers data " + JSON.stringify(allDocs.data().TimeIn))
      // setJammatTime(allDocs);
      // console.log(`slide images = ${slidedocs.length}`);
      // // setSlideImages(slidedocs);
      // mosqueId = allDocs[0].id
    }
    getJammatdata();

    if (user == null) router.push("/");
  }, [user, color]);
const jammatExactTime = jammatTime?.map((item:any)=>{
return item.data().JamatTime
})
// console.log(jammatExactTime)
  return (
    <>
      <div className={`${roboto.className} h-screen `}>
        <NavBar color={color} jammattime={jammatExactTime}/>
        <HeroSection color={color} jammattime={jammatTime} />
        {slideImage && (
          <Herofooter color={color} imageslider={slideImage} alan={alaan} />
        )}
      </div>
    </>
  );
}

export default Page;

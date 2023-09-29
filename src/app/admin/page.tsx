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
  orderBy,
  query,
} from "firebase/firestore";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Carousel from "react-multi-carousel";
let mosqueId: string = "";
const roboto = Roboto({
  weight: "500",
  preload: false,
});

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Page() {
  const db = getFirestore(firebase_app);

  const [jammatTime, setJammatTime] = useState<any>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreenCarousel, setShowFullScreenCarousel] = useState(false);

  const [alaan, setalaan] = useState<string>("");

  const [color, setcolor] = useState<string>("#00000");
  const [fontColor,setFontColor] = useState<string>('#000000')

  const [slideImage, setSlideImages] = useState<any>();
  const { user }: any = useAuthContext();
  const router = useRouter();
  const currentDate = new Date();
  const dayOfMonth = currentDate.getDate();
  useEffect(() => {
    let phone = localStorage.getItem("PHONE");
    getMosqueId(phone).then((mosqueId) => {
      const docRef = doc(db, "Mosque", mosqueId);
      onSnapshot(docRef, (doc) => {
        console.log("Mosque document cahnge");
        let color = doc.get("color");
        let alan = doc.get("Announcement");
        let fontColor = doc.get("FontColor");
        setFontColor(fontColor)
        setcolor(color);
        setalaan(alan);
      });

      const pryersUpdateQuery = query(
        collection(
          db,
          "Mosque/" + mosqueId + "/Prayers/Day_" + dayOfMonth + "/Prayers"
        ),
        orderBy("ID", "desc")
      );
      onSnapshot(pryersUpdateQuery, (pSnap: any) => {
        setJammatTime(pSnap.docs);
      });
      const slideImagesQuery = query(
        collection(db, "Mosque/" + mosqueId + "/SlideImages")
      );
      onSnapshot(slideImagesQuery, (pSnap: any) => {
        console.log("Images changed " + pSnap.docs.length);
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
  }, [user, color,fontColor]);

  // Full Screen carasoel Logic Added Here <><><><><><><>

  // useEffect(() => {
  //   const startTimer = setTimeout(() => {
  //     setShowFullScreenCarousel(true);
  //     const interval = setInterval(() => {
  //       if (slideImage?.length){
  //         setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImage?.length);
  //       }

  //     }, 10000);

  //     return () => clearInterval(interval);
  //   }, 60000);

  //   return () => clearTimeout(startTimer);
  // }, [slideImage]);

  // Full Screen Carousel Logic (updated)
  // const toggleFullScreenCarousel = () => {
  //   setShowFullScreenCarousel(true); // Set the flag to show full-screen carousel
  //   const interval = setInterval(() => {
  //     if(slideImage){
  //       console.log(slideImage.length)
  //     if (slideImage?.length) {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImage?.length);
  //     }
  //   }
  //   }, 10000);

  //   // Clear the full-screen carousel after 10 seconds
  //   setTimeout(() => {
  //     setShowFullScreenCarousel(false);
  //     clearInterval(interval); // Clear the interval

  //     // Recursively toggle the full-screen carousel
  //     setTimeout(toggleFullScreenCarousel, 30000);

  //   }, 30000); /// this is time to show full caresol
  // };

  // useEffect(() => {
  //   const startTimer = setTimeout(toggleFullScreenCarousel, 1000000);
  //  console.log("this use effect working in recursion useeffect")
  //   return () => clearTimeout(startTimer);
  // }, [slideImage]);

  const jammatExactTime = jammatTime?.map((item: any) => {
    return item.data().JamatTime;
  });
  // console.log(jammatExactTime)
  return (
    <>
      <div style={{ width: "100vw",height:'100vh',color:fontColor,background:color }}>
        <NavBar color={color} jammattime={jammatExactTime} />
        <HeroSection color={color} jammattime={jammatTime} />

        <Herofooter color={color} imageslider={slideImage} alan={alaan} />
      </div>
    </>
  );
}

export default Page;

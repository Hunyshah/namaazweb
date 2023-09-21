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

  const [slideImage, setSlideImages] = useState<string | undefined >();
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
  }, [user, color]);


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
  const toggleFullScreenCarousel = () => {
    setShowFullScreenCarousel(true); // Set the flag to show full-screen carousel
    const interval = setInterval(() => {
      if (slideImage?.length) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImage?.length);
      }
    }, 10000);

    // Clear the full-screen carousel after 10 seconds
    setTimeout(() => {
      setShowFullScreenCarousel(false);
      clearInterval(interval); // Clear the interval

      // Recursively toggle the full-screen carousel
      setTimeout(toggleFullScreenCarousel, 60000);

    }, 10000);
  };

  useEffect(() => {
    const startTimer = setTimeout(toggleFullScreenCarousel, 60000);

    return () => clearTimeout(startTimer);
  }, [slideImage]);



  const jammatExactTime = jammatTime?.map((item: any) => {
    return item.data().JamatTime;
  });
  // console.log(jammatExactTime)
  return   (
    <>
      <div className={`${roboto.className} h-screen `}>
        <div>
          <NavBar color={color} jammattime={jammatExactTime} />
          <HeroSection color={color} jammattime={jammatTime} />
        </div>
        {slideImage && !showFullScreenCarousel && (
          <Herofooter color={color} imageslider={slideImage} alan={alaan} />
        )}
        {showFullScreenCarousel && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' ,zIndex:100}}>
            <Carousel
              // Add your full-screen carousel props here
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={5000}
              rewind={true}
              arrows={false}
              transitionDuration={5000}
            >
              {slideImage?.map((item: any, index: any) => {
                return (
                  <div className="w-full h-full bg-white text-white" key={index}>
                    <Image
                     width={500}
                     height={500}
                      alt="slides"
                      src={item?.data()?.IMAGE_URL}
                    />
                    {/* <h2 className="text-black">
                      hloooo
                    </h2> */}
                  </div>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>
    </>
  );
}

export default Page;

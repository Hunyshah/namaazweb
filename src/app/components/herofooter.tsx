"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import qrcode from "../../../public/images/qr.png";

type Props = {};

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

const imageList = [
  { id: "e1", image: "/images/slide.jpg" },
  {
    id: "e2",
    image: "/images/slideimg.jpg",
  },
];

const Herofooter = ({ imageslider, alan, color }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // console.log(imageslider?.length +"<><><><><><><><><><>><><><><><>")
    const startTimer = setTimeout(() => {
      console.log(
        imageslider?.length + "<><><><><><><><><><>><><><><><> after 10 minutes"
      );
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageslider?.length);
      }, 10000); // Change 10000 to the desired interval in milliseconds (10 seconds)

      return () => clearInterval(interval);
    }, 60000); // 10 minutes in milliseconds

    return () => clearTimeout(startTimer);
  }, [imageslider]);
  // bg-slate-950
  return (
    <div
      style={{
        backgroundColor: color,
        height: "21vh",
        width: "100vw",
        display:'flex',
        justifyContent:'center'
      }}
    >
      <div style={{width:"98%"}}>
        <p style={{fontSize:"2vw"}}>Note</p>
        <div style={{ border: "1px solid black", padding: 3, margin: 0 }}>
          <p style={{fontSize:'1.5vw'}}>{alan}</p>
        </div>
      </div>
    </div>
  );
};

export default Herofooter;

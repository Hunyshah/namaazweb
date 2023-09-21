"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import qrcode from '../../../public/images/qr.png'

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

const Herofooter = ({imageslider,alan,color}:any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // console.log(imageslider?.length +"<><><><><><><><><><>><><><><><>")
    const startTimer = setTimeout(() => {
      console.log(imageslider?.length +"<><><><><><><><><><>><><><><><> after 10 minutes")
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageslider?.length);
        
      }, 10000); // Change 10000 to the desired interval in milliseconds (10 seconds)

      return () => clearInterval(interval);
    }, 60000); // 10 minutes in milliseconds

    return () => clearTimeout(startTimer);
  }, [imageslider]);
  // bg-slate-950
  return (
    <div style={{backgroundColor:color}} className={`main-parent flex justify-between  text-white pt-3  h-[53.5%]`} >
      <div className="flex flex-col items-center ml-5  " style={{width:'40vw'}}>
        <div style={{ height:'68%' }} className={'border-2 border-gray-300 rounded-md p-4  w-[100%]  '}>
          <div className=" text-5xl font-bold text-yellow-600"> Note !</div>
          <div className=" mt-10   p-2 m-2  indent-4 bg-black text-yellow-500">
            <p className="text-4xl font-serif">
              {alan}
            </p>
          </div>
        </div>
      </div>

      <div style={{width:'12vw',height:'auto',marginTop:'4%'}}>
        <Image src={qrcode} alt="qrCode" height={350} width={250}/>
      </div>

      <div
        style={{
          marginBottom: 10,
        
          width: "40vw",
          borderColor: "gray",
          borderWidth: 1,
          borderRadius:10,
          padding: 10,
          height:'68%',
          marginRight:'20px'
          
          
        }}
      >
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          rewind={true}
          arrows={false}
          transitionDuration={5000}
        >
          {imageslider?.map((item:any, index:any) => {
            return (
              <div   className="  w-[50%]  mb-12" key={index}>
                <Image  fill={true}  layout='fill'    alt="slides" src={item?.data()?.IMAGE_URL}   />

              </div>
            );
          })}
        </Carousel>
      </div>

      {/* <div className=' border-2 p-10 mr-1 border-white rounded-l-xl'>
    <div className='flex justify-between '>
        <p className='text-2xl mr-8 font-mono'> ashraq  </p>
        <p className='text-2xl text-red-600'> 4: 35 </p>
    </div>
    <div className='flex justify-between '>
        <p className='text-2xl'> sunrise</p>
        <p className='text-2xl'>4: 35</p>
    </div>
    <div className='flex justify-between '>
        <p className='text-2xl'>sunset</p>
        <p className='text-2xl'>4: 35</p>
    </div>
    <div className='flex justify-between '>
        <p className='text-2xl'>zawal</p>
        <p className='text-2xl'>4: 35</p>
    </div>
 </div> */}
 
    </div>
  );
};

export default Herofooter;

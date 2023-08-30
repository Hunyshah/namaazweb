"use client";
import React from "react";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EmblaCarousel from "embla-carousel/components/EmblaCarousel";

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

const Herofooter = (props: Props) => {
  return (
    <div className="main-parent flex justify-between bg-slate-950 text-white mt-10 ">
      <div className="flex flex-col items-center">
        <div style={{ marginLeft: 50 }}>
          <div className="text-5xl font-bold "> Note </div>
          <div className=" mt-10">
            <p className="text-4xl font-serif">
              Please turn off or put your cell phone on silent
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          marginBottom: 10,
          marginRight: "5%",
          width: "42%",
          borderColor: "gray",
          borderWidth: 1,
          borderRadius:10,
          padding: 10,
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
          {imageList.map((item, index) => {
            return (
              <div key={index}>
                <Image alt="slides" src={item.image} width={800} height={500} />
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

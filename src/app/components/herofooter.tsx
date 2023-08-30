'use client'
import React from 'react'

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




type Props = {}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const imageList = [
    { id:'e1',
image: '/images/slider1.jpeg'},
{
    id:'e2',
    image:'/images/slider2.jpeg'
},
{
    id:'e3',
    image:'/images/slider3.jpeg'
},
{
    id:'e4',
    image:'/images/slider4.jpeg'
},
]


const Herofooter = (props: Props) => {
  return (
    <div className='main-parent flex justify-between bg-slate-950 text-white mt-10 '>
 <div className='flex flex-col items-center'>
    <div className='text-5xl font-bold '
    > Note </div>
    <div className=' mt-10'> 
         <p className='text-4xl font-serif'>
            Admin Note ....
         </p>
        </div>
 </div>



 <div className='m-10'>
 <Image src={'/images/slide.jpg'} alt='ist' height={400} width={600}/>
    
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
  )
}

export default Herofooter
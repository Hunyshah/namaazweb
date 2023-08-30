'use client'

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
export default function CarouselDefault() {
  return (
    <div>
    <Carousel  ssr={true}  responsive={responsive}  swipeable={false}
  draggable={false}
  showDots={true} autoPlay={true} autoPlaySpeed={1000}   customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container">
  {imageList.map((item,index)=>{
return <div  key={index}>
    <Image src={item.image} alt={item.id} width={300}height={200}/>
    
</div>
  })}
</Carousel>
</div>
  );
}
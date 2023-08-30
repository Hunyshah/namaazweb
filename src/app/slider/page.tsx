'use client'

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const imageList = [
    { id:'e1',
image: 'https://images.unsplash.com/photo-1593591141073-615d455c4b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80'},
{
    id:'e2',
    image:'https://images.unsplash.com/photo-1593591141073-615d455c4b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80'
},
{
    id:'e3',
    image:'https://images.unsplash.com/photo-1593591141073-615d455c4b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80'
},
{
    id:'e4',
    image:'https://images.unsplash.com/photo-1593591141073-615d455c4b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80'
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
    <div className="bg-white">
    <Carousel infinite={true} responsive={responsive} swipeable={true} autoPlay={true} autoPlaySpeed={1000}>
  {imageList.map((item,index)=>{
return <div key={index}>
    <Image src={item.image} alt={item.id} width={300}height={200}/>
</div>
  })}
</Carousel>
</div>
  );
}
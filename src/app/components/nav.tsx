'use client';
import React from 'react'
import Clock from './clock'
import {Noto_Sans_Arabic,Roboto} from '@next/font/google'

type Props = {
  color:string
}

const arabic = Noto_Sans_Arabic({
  weight:'700',
  preload:false
})
const roboto = Roboto({
  weight:'700',
  preload:false
})

const NavBar = ({color}: Props) => {
  console.log(color)
  
  const datehijri = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());
  function formatDate(date:any) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${dayName},${monthName},${day},${year}`;
  }
  
  // Example usage:
  const today = new Date();
  const formattedDate = formatDate(today);
  
  // bg-slate-900
  return (
    <div style={{backgroundColor:color}}  className={` flex flex-row justify-between items-center   text-white   ${roboto.className}`}>
       <div className='flex justify-evenly items-center  w-[22%]'>
        <div className={`ml-8 text-4xl text-gray-200  ${arabic.className}`}>{datehijri} </div>
        
        </div>
        <div className=' bg-slate-50 h-24 w-1'></div>
        {/* <div className='flex justify-between items-center '> */}
            <div className='flex flex-col items-center '>
                <h3 className='text-6xl text-red-600'>____</h3>
                <h5 className={`text-[190%] text-gray-200 `}>Until</h5>
                </div>        
            {/* </div> */}
    
        <span className='block bg-slate-50 h-24 w-1'></span>
            <div className='text-[300%] font-mono  min-w-[320px] '><Clock/></div>
            
        <span className='block bg-slate-50 h-24 w-1'></span>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col items-center'>
                <div className='text-4xl text-green-600' >
                ____
            </div>
            <div className='text-4xl text-gray-200'>
            Remaing Time
                </div></div>
        </div>
        

        <span className='block bg-slate-50 h-24 w-1'></span>
        <div className='text-3xl  w-[16%]'> {formattedDate}</div>
    </div>
  )
}

export default NavBar
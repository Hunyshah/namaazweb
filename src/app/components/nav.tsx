'use client';
import React from 'react'
import Clock from './clock'

type Props = {}

const NavBar = (props: Props) => {
  
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
  

  return (
    <div className='flex justify-between items-center bg-slate-900 text-white w-[100vw]  '>
       <div className='flex justify-evenly items-center '>
        <div className=' text-3xl text-gray-200 w-[25vw] font-bold'>{datehijri} </div>
        
        </div>
        <div className=' bg-slate-50 h-24 w-1'></div>
        {/* <div className='flex justify-between items-center '> */}
            <div className='flex flex-col items-center w-[18vw]'>
                <h3 className='text-6xl text-red-600'>04: 35 </h3>
                <h5 className='text-4xl text-gray-200'>Until</h5>
                </div>        
            {/* </div> */}
    
        <span className='block bg-slate-50 h-24 w-1'></span>
            <div className='text-5xl font-mono  min-w-[320px] '><Clock/></div>
            
        <span className='block bg-slate-50 h-24 w-1'></span>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col items-center'>
                <div className='text-4xl text-green-600' >
                09
            </div>
            <div className='text-4xl text-gray-200'>
            Remaing Time
                </div></div>
        </div>
        

        <span className='block bg-slate-50 h-24 w-1'></span>
        <div className='text-3xl w-[25vw] font-bold'> {formattedDate}</div>
    </div>
  )
}

export default NavBar
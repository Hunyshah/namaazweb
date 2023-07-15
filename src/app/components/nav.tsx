'use client';
import React from 'react'
import Clock from './clock'

type Props = {}

const NavBar = (props: Props) => {
  
  const datehijri = new Intl.DateTimeFormat('ar-TN-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());


  return (
    <div className='flex justify-around items-center bg-slate-900 text-white  '>
       <div className='flex justify-evenly items-center'>
        <div className=' text-2xl text-gray-200 '>{datehijri} </div>
        
        </div>
        <span className='block bg-slate-50 h-24 w-1'></span>
        <div className='flex justify-between items-center '>
            <div className='flex flex-col items-center '>
                <h3 className='text-6xl text-red-600'>04: 35 </h3>
                <h5 className='text-4xl text-gray-200'>Until</h5>
            </div>
            <div className='text-6xl mx-12 min-w-[320px]'><Clock/></div>
            <div className='flex flex-col items-center'>
                <div className='text-4xl text-green-600' >
                09
            </div>
            <div className='text-4xl text-gray-200'>
            Remaing Time
                </div></div>
        </div>

        <span className='block bg-slate-50 h-24 w-1'></span>
        <div className='text-4xl '> 22/6/2023</div>
    </div>
  )
}

export default NavBar
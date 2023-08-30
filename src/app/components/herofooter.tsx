import React from 'react'




type Props = {}

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



 <div>
    
    
     </div>
 
 
 
 
 <div className=' border-2 p-10 mr-1 border-white rounded-l-xl'>
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
 </div>

    </div>
  )
}

export default Herofooter
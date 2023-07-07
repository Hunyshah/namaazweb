import React from 'react'
import {FaLaptopMedical} from 'react-icons/fa'

type Props = {}

const Herofooter = (props: Props) => {
  return (
    <div className='main-parent flex justify-between bg-slate-950 text-white '>
 <div className='flex flex-col items-center'>
    <div className='text-5xl font-bold'> Note </div>
    <div className='max-w-xl p-5'> <p>
         lines......
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae minima debitis inventore adipisci veniam obcaecati dolor rem, animi excepturi accusamus deserunt expedita atque, quaerat doloremque suscipit corrupti eveniet id.
         Dolorum, illo! Sunt porro dolores accusamus! Consectetur atque, voluptatum inventore, beatae fugit voluptas earum nesciunt, adipisci eaque repellat temporibus maxime eum assumenda saepe enim quis quidem. Quidem nostrum quod recusandae.
        </p>
        </div>
 </div>



 <div>
    <div className='flex flex-col items-center'>
        <FaLaptopMedical size={60}/>
        <p>ADD Image</p>
    </div>
    <h4>
        this is for your Knowledge
    </h4>
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
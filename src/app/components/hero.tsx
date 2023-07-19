import React from 'react'

type Props = {}

const HeroSection = ({jammattime}:any) => {
  return (
    <div className='bg-slate-950 text-white pt-14 pb-5'>

        <div className='1stparent flex justify-evenly items-center  '>
        {jammattime?.map((item:any)=>{
    return (
        <div key={item.id} className='2ndParent flex flex-col items-center'>
            <div className='border-8 border-slate-800 rounded-lg'>

   
                <div className='border-8 border-white rounded-lg py-4 px-2 flex flex-col items-center'>
   
                <div className='text-3xl mb-7'>{item.id}</div>
                <div className='text-3xl text-red-600'>{item.data().JamatTime}</div>
                <div className='text-3xl'>JAMAt</div>
                </div>
            </div>
            <div className='border-2 border-green-600 my-2 rounded-xl px-5'>
                <h4>Time In</h4>
                <h2>{item.data().TimeIn}</h2>
            </div>
            </div>
    )
})}
            

            {/* <div>
                <h2>صلاة الفجر</h2>
                <h3>04 : 35</h3>
                <h4>JAMAt</h4>
            </div>
            <div>
                <h4>Time In</h4>
                <h2>04 : 35</h2>
            </div>

            <div>
                <h2>صلاة الفجر</h2>
                <h3>04 : 35</h3>
                <h4>JAMAt</h4>
            </div>
            <div>
                <h4>Time In</h4>
                <h2>04 : 35</h2>
            </div>

            <div>
                <h2>صلاة الفجر</h2>
                <h3>04 : 35</h3>
                <h4>JAMAt</h4>
            </div>
            <div>
                <h4>Time In</h4>
                <h2>04 : 35</h2>
            </div>

            <div>
                <h2>صلاة الفجر</h2>
                <h3>04 : 35</h3>
                <h4>JAMAt</h4>
            </div>
            <div>
                <h4>Time In</h4>
                <h2>04 : 35</h2>
            </div>

            <div>
                <h2>صلاة الفجر</h2>
                <h3>04 : 35</h3>
                <h4>JAMAt</h4>
            </div>
            <div>
                <h4>Time In</h4>
                <h2>04 : 35</h2>
            </div> */}
        </div>
    </div>
  )
}

export default HeroSection
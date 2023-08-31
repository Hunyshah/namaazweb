'use client';
import React, { useState, useEffect } from 'react';
import {Orbitron} from '@next/font/google'

const orbriton = Orbitron({
  weight:"400",
preload:false
})
function Clock() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <><div className='max-w-[22vw]'>
      {currentTime && <p className={orbriton.className}>{currentTime}</p>}
      </div>
    </>
  );
}

export default Clock;
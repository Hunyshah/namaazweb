'use client';
import React, { useState, useEffect } from 'react';
import {Wallpoet} from '@next/font/google'


const orbriton = Wallpoet({
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
    <>
      {currentTime && <p  className={` ${orbriton.className} `}>{currentTime}</p>}
    
    </>
  );
}

export default Clock;
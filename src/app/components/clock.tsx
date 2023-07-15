'use client';
import React, { useState, useEffect } from 'react';

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
    <><div className='max-w-[300px]'>
      {currentTime && <p>{currentTime}</p>}
      </div>
    </>
  );
}

export default Clock;
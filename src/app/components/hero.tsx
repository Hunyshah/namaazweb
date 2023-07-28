import React, { useEffect, useState } from 'react';

type Props = {
  jammattime: any[]; // Update the type of jammattime as per your data structure
};

const HeroSection: React.FC<Props> = ({ jammattime }) => {
  const [light, setLight] = useState(false);

  // Function to convert time in '12:28 pm' format to 24-hour format
  //function to convert time in '12:28 pm' format to 24-hour format
  function convertTo24Hour(time12h: string) {
    const [time, period] = time12h.split(' ');
    const [hour, minute] = time.split(':').map(Number);
    let hour24h = hour;

    if (period?.toLowerCase() === 'pm' && hour !== 12) {
      hour24h += 12;
    }

    return {
      hour: hour24h,
      minute: minute,
    };
  }

  // Function to compare two times and trigger an alert
  function compareTimes(time1: string, time2: string) {
    const currentDate = new Date();
    const { hour: hour3, minute: minute3 } = {
      hour: currentDate.getHours(),
      minute: currentDate.getMinutes(),
    };

    const { hour: hour1, minute: minute1 } = convertTo24Hour(time1);
    const { hour: hour2, minute: minute2 } = convertTo24Hour(time2);
    const currentTimeMinutes = hour3 * 3600 + minute3 * 60;
    const time1Minutes = hour1 * 3600 + minute1 * 60;
    const time2Minutes = hour2 * 3600 + minute2 * 60;
    console.log(currentTimeMinutes,time1Minutes,time2Minutes)

    if (currentTimeMinutes >= time1Minutes && currentTimeMinutes < time2Minutes) {
      return true;
    }

    return false;
  }
  // 
  useEffect(() => {
    // Function to check if any jammat time is currently active
    function isLightOnNow() {
      if (!jammattime || !Array.isArray(jammattime)) {
        return false;
      }
      for (const item of jammattime) {
        if (compareTimes(item.data().TimeIn, item.data().JamatTime)) {
          return true;
        }
      }
      return false;
    }
    


    // Call the function to check if the light should be on now
    setLight(isLightOnNow());

    // Create an interval to update the state every 1 minute
    const intervalId = setInterval(() => {
      setLight(isLightOnNow());
    }, 60000); // 1 minute interval (adjust as needed)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [jammattime]);

  return (
    <div className='bg-slate-950 text-white pt-14 pb-5'>
      <div className='1stparent flex justify-evenly items-center'>
        {light ? <h1 className='text-white bg-red-700'>Light is on</h1> : null}

        {jammattime?.map((item: any) => {
          return (
            <div key={item.id} className='2ndParent flex flex-col items-center'>
              <div className='border-8 border-slate-800 rounded-lg'>
                <div className='border-8 border-white rounded-lg py-4 px-2 flex flex-col items-center'>
                  <div className='text-3xl mb-7'>{item.id}</div>
                  <div className='text-3xl text-red-600'>{item.data().JamatTime}</div>
                  <div className='text-3xl'>JAMAT</div>
                  {light ? (
                    <h1 className='text-white bg-red-700'>Light is on</h1>
                  ) : (
                    <h1 className='text-white bg-red-700'>Light is off</h1>
                  )}
                </div>
              </div>
              <div className='border-2 border-green-600 my-2 rounded-xl px-5'>
                <h4>Time In</h4>
                <h2>{item.data().TimeIn}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;

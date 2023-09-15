import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "../redux/features/hooks";
import { timerChange } from "../redux/features/timer";
// import {} from '@/app/components'
type Props = {
  jammattime: any[];
  color: string; // Update the type of jammattime as per your data structure
};

const HeroSection: React.FC<Props> = ({ jammattime, color }) => {
  const [light, setLight] = useState(false);
  const [activePrayer, setActivePrayer] = React.useState<any>(undefined);
  const dispatch = useAppDispatch();
  // Function to convert time in '12:28 pm' format to 24-hour format
  //function to convert time in '12:28 pm' format to 24-hour format
  function convertTo24Hour(time12h: string) {
    const [time, period] = time12h.split(" ");
    const [hour, minute] = time.split(":").map(Number);
    let hour24h = hour;

    if (period?.toLowerCase() === "pm" && hour !== 12) {
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

    if (
      currentTimeMinutes >= time1Minutes &&
      currentTimeMinutes < time2Minutes
    ) {
      return true;
    }

    return false;
  }
  const convertStringToTime = (timeString: string): any => {
    const [time, ampm]: string[] = timeString.split(" "); // Split the time string into time and AM/PM

    let [hours, minutes]: number[] = time
      .split(":")
      .map((value) => parseInt(value, 10)); // Split the time into hours and minutes

    if (ampm === "PM" && hours !== 12) {
      // If it's PM and not 12 PM, add 12 to the hours
      hours += 12;
    }

    const dateObject: Date = new Date();
    dateObject.setHours(hours, minutes, 0, 0);
    type optionsgType = {
      hour: string;
      minute: string;
      second: string;
      hour12: boolean;
  }
    const options:optionsgType = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
   
    // const formatter = new Intl.DateTimeFormat("en-US", options );
    // const formattedTime = formatter.format(dateObject);

    return dateObject;
  };
  //
  useEffect(() => {
    let isCountDownStared: boolean = false;
    let i = 0;

    const intervalId = setInterval(() => {
      console.log("Intervling running "+(++i));
      jammattime?.map((item) => {
        if (compareTimes(item.data().TimeIn, item.data().JamatTime)) {
          setActivePrayer(item.data());
          isCountDownStared = true;
        }
      });
      console.log(`Active Prayer = ${activePrayer?.ID} AND isCountDown = ${isCountDownStared}`);
      const now: any = new Date();
      let activeJamatTime = activePrayer?.JamatTime;
      if (activeJamatTime && isCountDownStared) {
        isCountDownStared = true;
        const timeDiff = convertStringToTime(activeJamatTime) - now;
        const minutes = Math.floor(timeDiff / 60000);
        const seconds = Math.floor((timeDiff % 60000) / 1000);

        const paddedMinutes: string = minutes.toString().padStart(2, "0");
        const paddedSeconds: string = seconds.toString().padStart(2, "0");
        const timeString = `${paddedMinutes}:${paddedSeconds}`;
        console.log(`Formated Time = ${timeString}`);
        dispatch(timerChange(timeString))
        if (timeString.trim() === "00:00") {
          setActivePrayer(undefined);
          isCountDownStared = false;
        }
      }
    }, 1000);





    return () => clearInterval(intervalId);
  }, [jammattime,activePrayer]);

  return (
    <div
      style={{ backgroundColor: color }}
      className={` text-white pt-14 pb-5`}
    >
      <div className="1stparent flex justify-evenly items-center">
        {jammattime?.map((item: any) => {
          const isHighlighted = item.data().ID === activePrayer?.ID;
          return (
            <div
              key={item.id}
              className={`2ndParent flex flex-col items-center ${
                isHighlighted ? "scale-125" : ""
              }`}
            >
              <div className={`border-8 border-slate-800 rounded-lg`}>
                <div
                  className={`border-8 ${
                    isHighlighted ? "border-green-400" : null
                  } 'border-white'  rounded-lg py-4 px-2 flex flex-col items-center`}
                >
                  {/* {isHighlighted ? (
                
                // <Image className='bg-transparent' src='/images/lightgs.png' alt='no pic' width={25} height={25} />
              ) : null} */}
                  <div className="text-5xl mb-7"> {item.id}</div>
                  <div className="text-5xl text-red-600">
                    {item.data().JamatTime}
                  </div>
                  <div className="text-3xl"> JAMAT</div>
                </div>
              </div>
              <div className="border-2 border-green-600 my-2 rounded-xl px-5">
                <h4 className="text-3xl  text-center">Time In</h4>
                <h2 className="text-3xl">{item.data().TimeIn}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;

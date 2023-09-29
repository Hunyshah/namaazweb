"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Noto_Sans_Arabic, Roboto } from "@next/font/google";
import { Wallpoet } from "@next/font/google";
import { useAppSelector } from "../redux/features/hooks";
import localFont from "@next/font/local";
const digitFonts = localFont({
  src: [{ path: "../../../public/fonts/digi_font.ttf", weight: "400" }],
  variable: "--digit-font",
});
type Props = {
  color: string;
  jammattime: "";
};
const orbriton = Wallpoet({
  weight: "400",
  preload: false,
});

const arabic = Noto_Sans_Arabic({
  weight: "700",
  preload: false,
});
const roboto = Roboto({
  weight: "700",
  preload: false,
});

// const fixedTime:any = new Date();
// fixedTime.setMinutes(fixedTime.getMinutes() + 15);
const NavBar = ({ color, jammattime }: Props) => {
  const [currentTime, setCurrentTime] = useState("");
  // const [remainingMinutes, setRemainingMinutes] = useState(0);
  // const [remainingTimes, setRemainingTimes] = useState([]); // console.log("Remainig Time" + remainingMinutes)

  const timer = useAppSelector((state) => state.mReducers.currentValue);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  const isMidnight = () => {
    const now = new Date();
    return now.getHours() === 0 && now.getMinutes() === 0;
  };

  // Function to refresh the page
  const refreshPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      if (isMidnight()) {
        refreshPage();
      }
    }, 60000); // Check every minute

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);
  // const fixedTimes: any = jammattime;

  // function convertTo12HourFormat(date: any) {
  //   const options = {
  //     hour: "numeric",
  //     minute: "numeric",
  //     second: "numeric",
  //     hour12: true,
  //   };

  //   return date.toLocaleTimeString([], options);
  // }

  // Get the eventFixDate from the database (assuming it's already a Date object)
  const eventFixDate = new Date("2023-09-10T15:30:00"); // Example 12-hour format date

  // Get the current date in 24-hour format
  const currentDate = new Date();

  // Convert the current date to 12-hour format
  // const current12HourFormat = convertTo12HourFormat(currentDate);

  // Now, you can compare eventFixDate and current12HourFormat

  // function convertTimeStringToDate(timeString: any) {
  //   console.log(timeString);
  //   // Split the time string into its components
  //   const [time, period] = timeString.split(" ");

  //   // Split the time into hours, minutes, and seconds
  //   const [hours, minutes, seconds] = time.split(":").map(Number);

  //   // Adjust hours for the 12-hour format (AM/PM)
  //   const adjustedHours = period === "PM" ? hours + 12 : hours;

  //   // Create a new Date object with the extracted values
  //   const date = new Date();
  //   date.setHours(adjustedHours, minutes, seconds, 0);

  //   return date;
  // }

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       const nowtime:any = new Date(); // Get the current date and time
  //       // const nowtime = now.getMinutes();
  //       const now = nowtime.getTime()

  //       const updatedRemainingTimes = fixedTimes?.map((timeString:any) => {
  //         const [time, period] = timeString.split(" ");
  //         const [hours, minutes] = time.split(":").map(Number);

  //         const fixedTime:any = new Date();

  //         fixedTime.setHours(Number(hours));
  //         fixedTime.setMinutes(Number(minutes));
  //         const newhours = fixedTime.getHours();
  // const newminutes = fixedTime.getMinutes();
  // const seconds = fixedTime.getSeconds();
  // const newperiod = newhours >= 12 ? 'AM' : 'PM';
  // const formattedHours = newhours % 12 || 12; // Convert to 12-hour format

  // const formattedTime:any = `${formattedHours.toString().padStart(2, '0')}:${newminutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${newperiod}`;

  // const fixednewTime:any = convertTimeStringToDate(formattedTime)
  // // const nownewTime:any = convertTimeStringToDate(now)
  //         // const fixedMinutes = fixedTime.getTime()
  //         // console.log("fixed time "+ now)
  //         let timeDifference:any =  fixednewTime - now ;
  //         timeDifference = timeDifference / 60000
  //         console.log("database time => " + fixednewTime.getTime() + " nowTime => "+ now + "time diferrence => " + timeDifference )

  //         if (timeDifference <= 15 && timeDifference > 0 ){
  //           const decimalConvert = Math.floor(timeDifference)
  //           setRemainingMinutes(decimalConvert)
  //           console.log(timeDifference)

  //         }
  //         // else {
  //         //   setRemainingMinutes(0)
  //         // }

  //         // if (timeDifference <= 0) {
  //         //   return 'Time has passed';
  //         // }

  //         const minutesRemaining = Math.floor(timeDifference / (1000 * 60));
  //         const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

  //         return `${minutesRemaining} minutes and ${secondsRemaining} seconds remaining`;
  //       });

  //       setRemainingTimes(updatedRemainingTimes);
  //     }, 1000); // Update every second

  //     return () => clearInterval(interval); // Clean up on component unmount
  //   }, [remainingMinutes]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now:any = new Date(); // Get the current date and time
  //     const timeDifference = fixedTime - now;

  //     // Calculate remaining minutes and seconds
  //     const minutes = Math.floor(timeDifference / (1000 * 60));
  //     setRemainingMinutes(minutes);

  //     if (timeDifference <= 0) {
  //       clearInterval(interval);
  //       setRemainingMinutes(0);
  //     }
  //   }, 1000); // Update every second

  //   return () => clearInterval(interval); // Clean up on component unmount
  // }, []);

  const datehijri = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(Date.now());
  function formatDate(date: any) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayName = days[date.getDay()];
    const monthName = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayName}-${monthName}-${day}-${year}`;
  }

  // Example usage:
  const today = new Date();
  const formattedDate = formatDate(today);

  // bg-slate-900
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <div
      style={{
        width: "100%",
        height: "30vh",
        flexDirection: "row",
        display: "flex",
        background: color,
      }}
    >
       <div
        style={{
   
          display: "flex",
          flexDirection:'column',
          flex: "1", 
          marginTop:'1rem',
          alignItems:'center'

        }}
      >
        <p style={{ fontSize: "2.7vw"}}>
          {datehijri}
        </p>
        <div style={{width:"100%",height:'2px',background:'white'}}/>


        
      </div>
      {/*divider**/}
      <div style={{background:'white',width:'2px',height:'100%'}}/>
      <div
        style={{
          display: "flex",
          flex: "1",
  
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p
          className={`${digitFonts.className} font-sans`}
          style={{
            fontSize: "6vw",
            textAlign: "center",
          }}
        >
          {currentTime}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{fontSize:'2.2vw'}}>Remaning Time</p>
          <p style={{fontSize:'3vw'}}>{timer}</p>
        </div>
        {/*divider**/}
        <div style={{width:'100%',height:'2px',background:'white'}}/>

      </div>
      {/*divider**/}
      <div style={{background:'white',width:'2px',height:'100%'}}/>

      <div
        style={{
   
          display: "flex",
          flexDirection:'column',
          flex: "1", 
          marginTop:'1rem',
          alignItems:'center'

        }}
      >
        <p style={{ fontSize: "3.5vw"}}>
          {formattedDate}
        </p>
        <div style={{width:"100%",height:'2px',background:'white'}}/>


        
      </div>
    </div>

    </div>
  );
  // return (
  //   <div
  //     style={{ backgroundColor: color }}
  //     className={` flex flex-row  items-center   text-white border-b-2 pb-4  ${roboto.className}`}
  //   >
  //     <div className="flex  items-center  ml-5">
  //       <div className={` text-5xl text-gray-200  ${arabic.className}`}>
  //         {datehijri}
  //       </div>
  //     </div>
  //     <div className=" bg-slate-50 h-24 w-0.5 ml-5"></div>
  //     {/* <div className='flex justify-between items-center '> */}
  //     {/* <div className="flex flex-col items-center ">
  //       <h3 className="text-6xl text-red-600"></h3>
  //       <h5 className={`text-[190%] text-gray-200 `}>Until</h5>
  //     </div> */}
  //     {/* </div> */}

  //     {/* <span className="block bg-slate-50 h-24 w-0.5"></span> */}
  //     <div className="text-[400%] font-mono  min-w-[320px] ml-5">
  //       {currentTime && (
  //         <p className={`${digitFonts.className} font-sans`}>{currentTime}</p>
  //       )}
  //     </div>

  //     <span className="block bg-slate-50 h-24 w-0.5 ml-5"></span>
  //     <div className="flex justify-between items-center ml-5">
  //       <div className="flex flex-col items-center">
  //         <div className="text-6xl text-green-600">{timer}</div>
  //         <div className="text-2xl text-gray-200 ">Remaing Time</div>
  //       </div>
  //     </div>

  //     <span className="block bg-slate-50 h-24 w-0.5 ml-5"></span>
  //     <div className="text-5xl  ml-5" > {formattedDate}</div>
  //   </div>
  // );
};

export default NavBar;

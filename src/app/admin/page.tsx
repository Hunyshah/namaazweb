'use client'
import React, { useState } from "react";
import { useAuthContext } from "../components/context/authContext";
import { useRouter } from "next/navigation";
import getDoument from '../firbase/getData'
import NavBar from "../components/nav";
import HeroSection from "../components/hero";
import Herofooter from "../components/herofooter";

  function Page () {
    const[jammatTime,setJammatTime]=useState<any>()
    const { user }:any = useAuthContext()
    const router = useRouter()
    React.useEffect(() => {
        async function getJammatdata(){
            let phone = localStorage.getItem("PHONE");
            console.log("Phone retrevied = "+phone);
            let allDocs:any = await getDoument(phone)
            setJammatTime(allDocs)
             
            // return (<h1>Only logged in users can view this page</h1>);
            } 
            // const intervalId = setInterval(() => {
            //     getJammatdata()
            //   }, 60000);
            //   if (user == null) router.push("/")  
            //   // Cleanup function to clear the interval when the component unmounts
            //   return () => clearInterval(intervalId);
            getJammatdata()
        
    }, [user])
    // async function getJammatdata(){
    // let phone = localStorage.getItem("PHONE");
    // console.log("Phone retrevied = "+phone);
    // let allDocs = await getDoument(phone)
    // console.log(allDocs[0].data().JamatTime)
    // // return (<h1>Only logged in users can view this page</h1>);
    // }
    return (
        <>
        
        <NavBar/>
        <HeroSection jammattime={jammatTime}/>
        <Herofooter/>
                </>
    )
}

export default Page 

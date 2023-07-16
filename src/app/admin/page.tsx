'use client'
import React from "react";
import { useAuthContext } from "../components/context/authContext";
import { useRouter } from "next/navigation";
import getDoument from '../firbase/getData'

 function Page () {
    const { user }:any = useAuthContext()
    const router = useRouter()
    
    React.useEffect(() => {
      
        if (user == null) router.push("/")
    }, [user])
    const dataemail = localStorage.getItem("email")
    console.log("<><><>"+ JSON.stringify( getDoument (dataemail))) 
    return (<h1>Only logged in users can view this page</h1>);
}

export default Page 

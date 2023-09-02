'use client'
import React from "react";
import signIn from "./firbase/auth/signIn"
import { useRouter } from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, seterror] = React.useState('')
    const [loading,setloading] = React.useState(false)
    
    const router = useRouter()

    const handleForm = async (event:any) => {
        event.preventDefault()
        setloading(true)
        const { result, error } = await signIn(email, password);
        localStorage.setItem("d",'dd')
        
        if (error) {
          setloading(false)
            seterror('invalid credintials! Please inter Correct userName and Password'+error)
        }

        // else successful
        if (result){
          setloading(false)
        return router.push("/admin")}
    }
    


    return (
        <>
          {/*
            This example requires updating your template:
    
            ```
            <html class="h-full bg-white">
            <body class="h-full">
            ```
          */}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              {/* <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              /> */}
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleForm} className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    
                  </div>
                  <div className="mt-2">
                    <input
                    onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  {loading ?<h2 className="bg-white text-red-600"> loading....</h2> : null}
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                  <h3 className="text-white" >{error}</h3>
                </div>
              </form>
    
              
            </div>
          </div>
        </>
      )

}

export default Page;


// export default function Home() {
//   return (
//     <>
//     <LoginPage/>
//     {/* <NavBar/>
//     <HeroSection/>
//     <Herofooter/> */}
//     </>  )
// }

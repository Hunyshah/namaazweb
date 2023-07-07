import Image from 'next/image'
import NavBar from './components/nav'
import HeroSection from './components/hero'
import Herofooter from './components/herofooter'

export default function Home() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Herofooter/>
    </>  )
}

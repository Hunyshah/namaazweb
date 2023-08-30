import './globals.css'
import type { Metadata } from 'next'
// import 'react-multi-carousel/lib/styles.css';
import { Inter } from 'next/font/google'
import {AuthContextProvider} from './components/context/authContext'
import {Roboto} from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Namaaz App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`h-screen bg-slate-950 `}><AuthContextProvider>{children}</AuthContextProvider></body>
    </html>
  )
}

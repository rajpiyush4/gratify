import type { Metadata } from 'next'
import { Poppins, IBM_Plex_Sans_Hebrew} from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'
import './globals.css'
import React from 'react'

// const playfair = Playfair_Display({subsets:['latin']})
const poppins = Poppins({subsets:['latin'], weight:['300', '400']})
const ibm_hebrew = IBM_Plex_Sans_Hebrew({subsets:['latin'], weight:['300', '400', '600', '700']})

export const metadata: Metadata = {
  title: 'Gratify',
  description: 'Embrace the power of thankfulness',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode,

}) {

  return (
    <html lang="en">
      <body className={ibm_hebrew.className} >
        <AuthProvider>
          {children}
        </AuthProvider>
    
      </body>
    </html>
  )
}

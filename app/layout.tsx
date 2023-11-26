import type { Metadata } from 'next'
import {  IBM_Plex_Sans_Hebrew, Lilita_One} from 'next/font/google'
import AuthProvider from '@/components/AuthProvider'
import './globals.css'
import React from 'react'

// const playfair = Playfair_Display({subsets:['latin']})
// const poppins = Poppins({subsets:['latin'], weight:['300', '400']})
const ibm_hebrew = IBM_Plex_Sans_Hebrew({subsets:['latin'], weight:['300', '400', '600', '700']})
const lilita = Lilita_One({subsets:['latin'], weight:[ '400'], variable: '--font-lilita'})

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
      {/* <Head>
      <link href="https://www.dafontfree.net/embed/Z2lsbC1zYW5zLXVsdHJhLWJvbGQtY29uZGVuc2VkLXJlZ3VsYXImZGF0YS8xMy9nLzY0ODUxL0dJTExVQkNELlRURg" rel="stylesheet" type="text/css"/>
      </Head> */}
      <body className={` ${lilita.variable}`} >
        <AuthProvider>
          {children}
        </AuthProvider>
    
      </body>
    </html>
  )
}

// import Signin from "@/components/Signin"
import Header from "@/components/header"
import HeroSection from '@/components/HeroSection'
import { checkAuth } from "@/actions/checkAuth"
import {redirect} from 'next/navigation'

export default async function Home() {
  const user = await checkAuth()
  if (user) {
    redirect('/home')
  }
  return (
    <main className="max-w-5xl max-md:px-4 h-screen m-auto">
        <Header/>
        <HeroSection/>
    </main>
  )
}

// import Signin from "@/components/Signin"
import MainHeader from "@/components/MainHeader"
import HeroSection from '@/components/HeroSection'
import { checkAuth } from "@/actions/checkAuth"
import {redirect} from 'next/navigation'

export default async function Home() {
  const user = await checkAuth()
  if (user) {
    redirect('/home')
  }

  return (
    <main className=" h-screen m-auto">
        <MainHeader/>
        <HeroSection/>
    </main>
  )
}

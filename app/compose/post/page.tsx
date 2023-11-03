import MainHeader from "@/components/MainHeader"
import GratitudeForm from "@/components/GratitudeForm"
import { checkAuth } from "@/actions/checkAuth"
import { redirect } from "next/navigation"


async function page() {
  const check = await checkAuth()
  if(!check){
    redirect('/api/auth/signin')
  }

  return (
    <main className="p-4 h-screen">
      <MainHeader/>
      <div className="text-3xl font-fantasy font-bold p-4">ScratchPad</div>
      <GratitudeForm/>
      
    </main>

  )
}

export default page
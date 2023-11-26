import MainHeader from "@/components/MainHeader"
import GratitudeForm from "@/components/GratitudeForm"
import { checkAuth } from "@/actions/checkAuth"
import { redirect } from "next/navigation"
import Link from "next/link"


async function page({ searchParams }: { searchParams: { public: string } }) {
  const id = JSON.parse(searchParams?.public || 'false')
  const check = await checkAuth()
  if (!check) {
    redirect('/api/auth/signin')
  }

  return (
    <main className=" h-screen">
      <MainHeader />
      <div className="text-3xl flex items-center gap-8 font-fantasy font-bold p-8">
        <span className="font-lilita">ScratchPad</span>
        <div className="font-mono text-xs">
          <Link className={`${id ? 'bg-black text-white border border-black' : 'bg-none'} p-2 rounded-[25px]`} href={`/compose/post?public=true`}>Public</Link>/<Link className={`${!id ? 'bg-black text-white border border-black' : 'bg-none'} p-2 rounded-[25px]`} href={`/compose/post?public=false`}>Private</Link>
        </div>
      </div>
      <GratitudeForm isPublic={id} />


    </main>

  )
}

export default page

import GratitudeForm from "@/components/GratitudeForm"
import { checkAuth } from "@/actions/checkAuth"
import { redirect } from "next/navigation"
import Link from "next/link"

async function page({ params, searchParams }: { params: { post: string }, searchParams: { public: string } }) {

  const id = JSON.parse(searchParams?.public || 'false')
  console.log(id)
  const check = await checkAuth()
  if (!check) {
    redirect('/api/auth/signin')
  }

  return (
    <main className="p-4 h-screen">
      <div className="text-3xl flex justify-between font-fantasy font-bold p-4">
        <div className="text-3xl font-fantasy font-bold">ScratchPad</div>
        <div className="font-mono text-sm">
          <Link className={`${id ? 'bg-purple-300 border border-black' : 'bg-none'} p-2 rounded-md`} href={`/challenges/daily-challenge/${params?.post}/?public=true`}>Public</Link>/<Link className={`${!id ? 'bg-purple-300 border border-black' : 'bg-none'} p-2 rounded-md`} href={`/challenges/daily-challenge/${params?.post}/?public=false`}>Private</Link>
        </div>
      </div>

      <GratitudeForm challengeId={params?.post} isPublic={id} />

    </main >

  )
}

export default page
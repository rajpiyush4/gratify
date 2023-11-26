import ButtonCloseModal from "@/components/ButtonCloseModal"
import GratitudeForm from "@/components/GratitudeForm"
import { X } from "lucide-react"
import Link from "next/link"

function page({ searchParams }: { searchParams: { public: string } }) {
  const id = JSON.parse(searchParams?.public || 'false')


  return (
    <main className="fixed z-50 top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center">
      <section className="shadow-static-custom min-w-[300px] flex flex-col gap-4 w-1/3 bg-white p-4 border border-amber-50 rounded-3xl relative">
        <div className="text-3xl flex items-center gap-8 font-fantasy font-bold ">
          <ButtonCloseModal className='w-fit px-4 py-2 rounded-full font-sans'><X /></ButtonCloseModal>
          <div className="font-mono text-xs">
            <Link className={`${id ? 'bg-black text-white border border-black' : 'bg-none'} p-2 rounded-[25px]`} href={`/compose/post?public=true`}>Public</Link>/<Link className={`${!id ? 'bg-black text-white border border-black' : 'bg-none'} p-2 rounded-[25px]`} href={`/compose/post?public=false`}>Private</Link>
          </div>
        </div>
        <GratitudeForm isPublic={id} />
      </section>
    </main>
  )
}

export default page
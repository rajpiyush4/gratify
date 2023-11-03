import Link from "next/link"
import { getPublicEntries } from "@/actions/gratitudeActions"
import { getUserByEmail } from "@/actions/userActions"
import { Plus } from 'lucide-react'
import Post from "@/components/PostLayout/Post"

async function home() {
  const entries = await getPublicEntries()
  const user = await getUserByEmail()

  //find all public feeds -- gratitude enteries that are public
  return (
      <div className="w-full relative bg-white-l ">
        <div className="fixed z-10 bottom-5 right-10 px-4 py-4 rounded-md bg-pink-d">
          <Link href={'/compose/post'}><Plus color="black" /></Link>
        </div>
        <div className="text-center">
          <span className=" my-2 w-full block text-blue-l font-bold text-3xl font-fantasy ">Neighbourhood Nexus </span>
          <span className="w-full block text-pink-d font-semibold ">Discover the positive contributions of others in this community.</span>
        </div>

        <article className="h-screen pb-4 bg-white-l flex relative flex-col gap-4 overflow-y-scroll scroll_none mt-12">

          {entries?.map((entry, key: number) => {
            if (entry.isPublic) {
              return (
                <Post entry={entry} key={key} user={user} />
              )
            }
          })
          }

        </article>


      </div>

    

  )
}

export default home
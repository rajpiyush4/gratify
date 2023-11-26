import Link from "next/link"
import { getPublicEntries } from "@/actions/gratitudeActions"
import { Plus } from 'lucide-react'
import Post from "@/components/PostLayout/Post"

async function home() {
  const entries = await getPublicEntries()
  // const user = await getUserByEmail()  // problem1 check if entries null or empty if so doesn't need to call getUserById . problem2 that entries an array and i have to fetch user data for every single element in the arr

  //find all public feeds -- gratitude enteries that are public
  return (
      <div className="w-full relative ">
        <div className="fixed z-10 bottom-5 right-10 px-4 py-4 rounded-md bg-pink-d">
          <Link href={'/compose/post?public=false'}><Plus color="black" /></Link>
        </div>
        <div className="text-center">
          <span className=" my-2 w-full block text-blue-l font-bold text-3xl font-lilita ">Neighbourhood Nexus </span>
          <span className="w-full block text-pink-d font-semibold ">Discover the positive contributions of others in this community.</span>
        </div>

        <article className="h-screen pb-4  flex relative flex-col gap-4 overflow-y-scroll scroll_none mt-12">

          {entries?.map((entry, key: number) => {
              return (
                <Post entry={entry} key={key} />
              )})
          }

        </article>


      </div>

    

  )
}

export default home
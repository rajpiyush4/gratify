import { getUserByEmail, getUserByUsername } from "@/actions/userActions"
import { getAllGratitudesByUserId, getPublicGratitudesByUserId } from "@/actions/gratitudeActions"
import Image from "next/image"
import { MessageCircle, Heart } from 'lucide-react'
import Link from "next/link"

type User = {
  name?: string | null | undefined,
  image?: string | null | undefined,
  email?: string | null | undefined
}
async function AddPost({ username }: { username: string }) {
  //get username if user is same as the logged one then show both public and private otherwise only public
  let userByUsername;
  let user: any;
  let entries;
  try {

    userByUsername = await getUserByUsername(username)
    user = await getUserByEmail()

    if (userByUsername == null) {
      return <div>no such user exist</div>
    }

    if (userByUsername?.username == user?.username) {
      //get gratitudes which are private and public both
      let id = userByUsername._id.toString()
      entries = await getAllGratitudesByUserId(id)
    }
    else {
      //get only public gratitudes
      let id = userByUsername._id.toString()
      entries = await getPublicGratitudesByUserId(id)

    }
  } catch (err) {
    console.log(err)
  }

  return (
    <div className="relative w-3/4 h-screen">

      <div className="text-center ">
        <span className="px-4 py-2 w-full text-blue-l font-bold font-fantasy">Posts</span>
      </div>

      <div className=" flex h-screen relative flex-col items-center gap-4 overflow-y-scroll scroll_none">
        {entries?.map((entry, key: number) => {
          if (entry.isPublic) {

            return <div className="w-[90%] m-0 border-2 flex flex-col gap-8 p-4 rounded-md bg-blue-l/10" key={key}>
              <div className="flex justify-between">
                <div className="flex gap-4 ">
                  <Image className="rounded-full border border-black" src={user.profileImg} width={60} height={60} alt='user' />
                  <div className="flex flex-col">
                    <span>{user?.name}</span>
                    <Link className="opacity-50" href={`/${user.username}`}>@{user.username}</Link>
                  </div>
                </div>
                <div className="text-black/50">
                  {new Date(entry.createdAt).getDate()}/{new Date(entry.createdAt).getMonth() + 1}/{new Date(entry.createdAt).getFullYear()}
                </div>
              </div>
              <p>{entry?.content}</p>
              <div className="flex gap-4 justify-end">
                <div className="py-2 px-4 border bg-white border-blue-l shadow-custom w-fit rounded-full"> <MessageCircle color="#4562E9" /> </div>
                <div className="py-2 px-4 bg-white border border-blue-l shadow-custom w-fit rounded-full"> <Heart color="#4562E9" /> </div>

              </div>


            </div>
          }
        })}


      </div>
    </div>
  )
}

export default AddPost
import { getUserByEmail, getUserByUsername } from "@/actions/userActions"
import { getAllGratitudesByUsername, getPublicGratitudesByUsername } from "@/actions/gratitudeActions"
import Image from "next/image"
import { MessageCircle } from 'lucide-react'
import Link from "next/link"
import { User } from "@/lib/types"
import Likes from "./PostLayout/Likes"


async function AddPost({ username }: { username: string }) {
  //get username if user is same as the logged one then show both public and private otherwise only public
  let userByUsername: User;
  let user: User;
  let entries;
  try {

    userByUsername = await getUserByUsername(username)

    if (userByUsername == null) {
      return <div>no such user exist</div>
    }

    user = await getUserByEmail()

  

    if (userByUsername?.username == user?.username) {
      //get gratitudes which are private and public both
      entries = await getAllGratitudesByUsername(username)
    }
    else {
      //get only public gratitudes
      entries = await getPublicGratitudesByUsername(username)

    }
  } catch (err) {
    console.log(err)
  }

  return (
    <div className="relative w-3/4 h-screen">

      <div className="text-center ">
        <span className="px-4 py-2 w-full text-blue-l font-bold font-lilita">Posts</span>
      </div>

      <div className=" flex h-screen relative flex-col items-center gap-4 overflow-y-scroll scroll_none">
        {entries?.map((entry, key: number) => {

            return <div className="w-[90%] m-0 border-2 flex flex-col gap-8 p-4 rounded-md bg-white" key={key}>
              <div className="flex justify-between">
                <div className="flex gap-4 ">
                  <Image className="rounded-full border border-black" src={`${userByUsername.profileImg || ''} `} width={60} height={60} alt='user' />
                  <div className="flex flex-col">
                    <span>{userByUsername?.name}</span>
                    <Link className="opacity-50" href={`/${userByUsername.username}`}>@{userByUsername.username}</Link>
                  </div>
                </div>
                <div className="text-black/50">
                  {!entry.isPublic && <span className="mr-2">private</span>}
                  {new Date(entry.createdAt).getDate()}/{new Date(entry.createdAt).getMonth() + 1}/{new Date(entry.createdAt).getFullYear()}
                </div>
              </div>
              <p>{entry?.content}</p>
              <div className="flex justify-end">
                <Link href={`/${userByUsername.username}/status/${entry._id.toString()}`} className="py-2 px-4 shadow-custom w-fit rounded-full"> <MessageCircle color="#4562E9" /> </Link>
              <Likes id={entry._id?.toString()} />

              </div>


            </div>
          
        })}


      </div>
    </div>
  )
}

export default AddPost
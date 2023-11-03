import Image from "next/image"
import Link from "next/link"
import {MessageCircle, Heart} from 'lucide-react'

type User={
    name:string,
    profileImg: string,
    username: string,
    bio:string
}

type Entry={
    _id: string
    content: string,
    isPublic: boolean,
    createdAt: string,
    userId: string,
    challengeId: string
}

function Post({user, entry}:{user:User, entry:Entry}) {
  return (
    <div className="w-[90%] m-auto border-2 flex flex-col gap-8  p-4 rounded-md bg-blue-l/10 ">
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

    <p>{entry.content}</p>
    <div className="flex gap-4 justify-end">
      <Link href={`/${user?.username}/status/${entry?._id.toString()}`} className="py-2 px-4 border border-blue-l shadow-custom bg-white w-fit rounded-full"> <MessageCircle color="#4562E9" /> </Link>
      <Link href={`/`} className="py-2 bg-white px-4 border border-blue-l shadow-custom w-fit rounded-full"> <Heart color="#4562E9" /> </Link>

    </div>


  </div>
  )
}

export default Post
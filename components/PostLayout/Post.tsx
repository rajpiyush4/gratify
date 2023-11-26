import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Heart } from 'lucide-react'
import { Entry } from '@/lib/types'
import Likes from "./Likes"
import Block from "./Block"

function Post({ entry }: { entry: Entry }) {
  return (
    <div className="w-[90%] mx-auto border-2 flex flex-col gap-8  p-4 rounded-md bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 ">
          <Image className="rounded-full border border-black" src={entry?.userImg} width={50} height={50} alt='user' />
          <div className="flex flex-col justify-center">
            {/* <span>{entry?.username}</span> */}
            <Link className="opacity-50" href={`/${entry?.username}`}>@{entry?.username}</Link>
          </div>
        </div>
        <div className="text-black/50 text-sm flex gap-2">
          {new Date(entry.createdAt).getDate()}/{new Date(entry.createdAt).getMonth() + 1}/{new Date(entry.createdAt).getFullYear()}
          <Block />
        </div>
      </div>

      <p>{entry.content}</p>
      <div className="flex  justify-end">
        <Link href={`/${entry?.username}/status/${entry?._id.toString()}`} className="py-2 px-4 shadow-custom bg-white w-fit rounded-md"> <MessageCircle color="#4562E9" /> </Link>
        <Likes id={entry._id.toString()} />
      </div>


    </div>
  )
}

export default Post
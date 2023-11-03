import { getUserByUsername } from "@/actions/userActions"
import Image from "next/image"
import Link from "next/link"

async function Profile({ username }: { username: string }) {
  const user = await getUserByUsername(username)
  if (user == null) return <></>;

  return (
    <div className="w-1/4 h-screen shadow-static-custom flex justify-center items-center bg-yellow-d">

      <div className="p-4  shadow-custom transition flex flex-col gap-3 items-center justify-around w-[50%] rounded-md m-auto">

        <div className="flex flex-col items-center">
          <Image className="w-fit h-fit rounded-full border border-black" src={user?.profileImg} width={60} height={60} alt='user' />
          <div className="flex flex-col items-center">
            <span>{user?.name}</span>
            <Link className="opacity-50" href={`/${user?.username}`}>@{user?.username}</Link>
          </div>

        </div>

        <div className="flex flex-col items-center gap-1">
          <span>"{user?.bio}"</span>
          <span className="opacity-50">Edit</span>
        </div>
        {/* <Link className="px-4 py-2 bg-white-l rounded-[50px] border" href={'/#'}>Edit Profile</Link> */}

      </div>


    </div>
  )
}

export default Profile
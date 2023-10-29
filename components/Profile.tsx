import { getUser } from "@/actions/userActions"

type User = {
    name?: string | null | undefined,
    image?: string | null | undefined,
    email?: string | null | undefined
}

async function Profile({username}:{ username: string}) {
    const userData = await getUser(username)


  return (
    <section>
        {userData?.name}
        {userData?.bio}
       
    </section>
  )
}

export default Profile
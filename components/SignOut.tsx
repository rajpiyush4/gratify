'use client'
import { disconnectDB } from '@/lib/db'
import { useSession, signOut } from 'next-auth/react'

function SignOut() {
    const { data: session } = useSession()

    const SignOut = async () => {
        try {
            await disconnectDB()

        } catch (err) {
            console.log("err couldn't disconnect")
        }

        signOut();
    }

    if (session?.user) {
         return   <button className=' font-mono px-4 py-2 border border-black shadow-custom bg-pink-d transition text-black' onClick={() => SignOut()}>Signout</button>
    }

}

export default SignOut
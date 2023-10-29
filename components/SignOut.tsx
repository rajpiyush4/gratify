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
        return <div className='flex gap-3 items-center'>
            <button className='bg-pink-500 font-mono text-sm transition border border-black py-2 px-4 text-black shadow-custom' onClick={() => SignOut()}>signout</button>
        </div>
    }

}

export default SignOut
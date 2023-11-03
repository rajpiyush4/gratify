'use client'
import { User2 } from 'lucide-react'
import { signIn } from 'next-auth/react'

function Signin() {
    return (
            <button className='font-mono flex gap-2 transition ' onClick={() => { signIn() }}><User2 color='none' fill='#212121'/> <span className='text-black'>Signin</span></button>
    )
}

export default Signin
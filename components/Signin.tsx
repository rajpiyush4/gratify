'use client'

import { signIn } from 'next-auth/react'

function Signin() {
    return (
        <button className='py-2 px-4 font-mono bg-pink-500 text-sm text-black border border-black transition shadow-custom' onClick={() => { signIn() }}>Join us</button>
    )
}

export default Signin
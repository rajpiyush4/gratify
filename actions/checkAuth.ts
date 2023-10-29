

import {getServerSession} from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
// import {redirect} from 'next/navigation'
export const checkAuth = async() =>{
    const session = await getServerSession(authOptions)

    if(!session)return false
    return session?.user;
}
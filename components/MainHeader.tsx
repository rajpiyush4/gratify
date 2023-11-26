
import Link from "next/link"
import { checkAuth } from "../actions/checkAuth"
import Signin from "./Signin"
import SignOut from "./SignOut"
import { Globe, User2, Zap, BadgePlus } from 'lucide-react'
import { getUserByEmail } from "@/actions/userActions"
import Image from 'next/image'


async function MainHeader() {
    const user = await checkAuth()
    const username = await getUserByEmail()

    return (
        <header className="flex justify-between md:h-[70px] items-center w-full flex-nowrap  ">

            <div className="h-full flex gap-8 items-center">

                <div className="h-full">
                    <Link className="text-lg h-full px-8 flex gap-1 items-center text-blue-l" href='/home'><span className="text-3xl font-extrabold font-abff text-blue-l"><Image src={'/logo.png'} width={50} height={50} alt="hero" /></span></Link>

                </div>


            </div>
            {user &&<nav>
                <ul className="flex gap-8 items-center">
                    <li><Link href={`/home`}><Globe fill="#21121" color="#FCEEE3" /></Link> </li>
                    <li><Link href={`/${username?.username}`}><User2 fill="#21121" color="#FCEEE3" /></Link> </li>
                    <li><Link href={'/compose/post'}><BadgePlus fill="#21121" color="#FCEEE3" /></Link> </li>
                    <li><Link href={'/challenges/daily-challenge'}><Zap fill="#21121" color="#FCEEE3"   /></Link> </li>
                </ul>
            </nav>}

            <div className="flex w-fit h-full">

                <div className="flex justify-center items-center px-4 text-white w-fit h-full">

                    {user ? <SignOut /> : <Signin />}
                </div>
            </div>

        </header>
    )
}

export default MainHeader
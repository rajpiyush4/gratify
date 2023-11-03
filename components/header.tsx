
import Link from "next/link"
import { checkAuth } from "../actions/checkAuth"
import Signin from "./Signin"
import SignOut from "./SignOut"
import { Search } from 'lucide-react'
import { getUserByEmail } from "@/actions/userActions"

async function Header() {
    const user = await checkAuth()
    const username = await getUserByEmail()

    return (
        <header className="flex justify-between md:h-[70px] items-center w-full flex-nowrap border-b-2 border-r border-black">

            <div className="h-full flex gap-8 items-center">

                <div className="h-full border-r-2 border-black ">
                    <Link className="text-lg h-full px-8 flex gap-1 items-center" href='/home'><span className="text-5xl font-bold">G</span>ratify</Link>

                </div>
                <nav>
                    <ul className="flex gap-8 items-center">
                        <li><Link href={`/home`}>Home</Link> </li>
                        <li><Link href={`/${username?.username}`}>Profile</Link> </li>
                        <li><Link href={'/challenges/daily-challenge'}>Challenge</Link> </li>
                    </ul>
                </nav>

            </div>

            <div className="flex w-fit h-full">
                <div className="border-l-2 border-r-2 px-4 flex items-center border-black"><Search /></div>

                <div className="bg-black flex justify-center items-center px-4 text-white w-fit h-full">

                    {user ? <SignOut /> : <Signin />}
                </div>
            </div>

        </header>
    )
}

export default Header
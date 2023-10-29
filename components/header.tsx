
import Link from "next/link"
import { checkAuth } from "../actions/checkAuth"
import Signin from "./Signin"
import SignOut from "./SignOut"

async function Header() {
    const user = await checkAuth()


    return (
        <header className="flex justify-between w-full py-4">
            <Link className="text-lg" href='/'>Gratify</Link>
            {user ? <nav>
                <ul className="flex gap-4">
                    <img className="rounded-full" src={user?.image as string} width={80} height={80} alt="" />
                    <SignOut />
                </ul>
            </nav> :

                <Signin />
            }

        </header>
    )
}

export default Header
import { checkAuth } from "@/actions/checkAuth"
import { redirect } from "next/navigation"
import MainHeader from "@/components/MainHeader"

async function layout({ children }:{
    children: React.ReactNode
}) {
    const check = await checkAuth()
    if(!check){
        redirect('/api/auth/signin')
    }
    return (
        <main className="m-auto">
            <MainHeader/>
            {children}
        </main>
    )
}

export default layout
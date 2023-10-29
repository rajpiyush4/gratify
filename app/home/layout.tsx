import Header from '@/components/header'
import { checkAuth } from '@/actions/checkAuth'
import { redirect } from 'next/navigation'

async function layout({ children, modal }: {
    children: React.ReactNode,
    modal: React.ReactNode
}) {
    const user = await checkAuth()
    if (!user) {
        redirect('/')
    }

    return (
        <main className="max-w-5xl max-md:px-4 h-screen m-auto">
            <Header />
            {modal}
            {children}
        </main>
    )
}

export default layout 
import MainHeader from '@/components/MainHeader'
import { checkAuth } from '@/actions/checkAuth'
import { redirect } from 'next/navigation'


async function layout({ children, modal, status }: {
    children: React.ReactNode,
    modal: React.ReactNode,
    status: React.ReactNode,
}) {
    const user = await checkAuth()
    if (!user) {
        redirect('/')
    }

    return (
        <main className="m-auto">
            <MainHeader />
            {modal}
            <section className='flex w-full'>
                {children}
                {status}
            </section>
        </main>
    )
}

export default layout 
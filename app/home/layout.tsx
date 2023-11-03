import MainHeader from '@/components/MainHeader'
import { checkAuth } from '@/actions/checkAuth'
import { redirect } from 'next/navigation'


async function layout({ children, modal, status, comment }: {
    children: React.ReactNode,
    modal: React.ReactNode,
    status: React.ReactNode,
    comment: React.ReactNode
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
                {comment}
            </section>
        </main>
    )
}

export default layout 
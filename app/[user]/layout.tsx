import MainHeader from "@/components/MainHeader"


function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="m-auto">
            <MainHeader/>
            {children}
        </main>
    )
}

export default layout 

function Modal({children}:{children:React.ReactNode}) {
    return (
      <main className="w-screen h-screen bg-black/5 flex justify-center items-center">
            <section className="min-w-[300px] w-1/3 bg-amber-200 h-1/2 border border-amber-50 rounded-md">
              {children}
            </section>
      </main>
    )
  }
  
  export default Modal
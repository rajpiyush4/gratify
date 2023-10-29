import ButtonCloseModal from "@/components/ButtonCloseModal"
import GratitudeForm from "@/components/GratitudeForm"

function page() {

    return (
      <main className="fixed top-0 left-0 w-screen h-screen bg-black/5 flex justify-center items-center">
        <ButtonCloseModal className='px-4 py-2 rounded-full font-sans bg-black text-white' >X</ButtonCloseModal>
            <section className="min-w-[300px] w-1/3 bg-amber-200 h-1/2 border border-amber-50 rounded-md relative">
              <GratitudeForm />
            </section>
      </main>
    )
  }
  
  export default page
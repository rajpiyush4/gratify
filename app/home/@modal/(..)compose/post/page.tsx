import ButtonCloseModal from "@/components/ButtonCloseModal"
import GratitudeForm from "@/components/GratitudeForm"

function page() {

    return (
      <main className="fixed z-50 top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center">
            <section className="shadow-static-custom min-w-[300px] flex flex-col gap-4 w-1/3 bg-white p-4 border border-amber-50
             rounded-3xl relative">
              <div className="flex justify-between items-center">
               <ButtonCloseModal className='w-fit px-4 py-2 rounded-full font-sans'>X</ButtonCloseModal>
                public/private
              </div>
              <GratitudeForm/>
            </section>
      </main>
    )
  }

export default page
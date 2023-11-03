import Image from "next/image"

function page() {
  return (
    <>
    <section className="h-screen bg-white">
         <div className="bg-white p-4 flex flex-col items-center gap-4">
          <div className="font-bold font-fantasy text-center text-4xl text-pink-d">Daily Dare !!</div>
          <p className="text-center font-semibold">Show Appreciation to a Colleague or Friend!!</p>
          <button className="px-8 py-2 w-fit rounded-[50px]  bg-yellow-d font-mono border border-black shadow-custom">Get Started</button>
         </div>

    </section>
    </>
  )
}

export default page
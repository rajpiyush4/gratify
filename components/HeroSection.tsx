import Link from "next/link"
import Image from 'next/image'


const buttonStyle = 'px-6 py-4 font-bold font-mono shadow-custom transition border border-black rounded-[50px] grid place-content-center'

function HeroSection() {
  return (
    <section className='flex h-[90%] p-4 '>
      <div className="w-1/2 max-md:w-full max-md:h-[120vh] flex gap-12 flex-col px-8 h-full justify-center">
        <h1 className="text-5xl font-bold font-lilita ">Embrace the power of thankfulness</h1>
        <p className="font-sans font-semibold">Discover Gratify, your haven for daily gratitude and reflection.
          In a fast-paced world, we offer you a space to slow down and appreciate life's simple joys. Share your daily moments of thankfulness, from the ordinary to the extraordinary. Join our positive community, inspire others, and cultivate a brighter outlook on life. Start your journey of gratitude today with Gratify.
        </p>

        <div className="flex gap-8">
          <Link href='/api/auth/signin' className={`${buttonStyle} bg-yellow-d`}>Start writing now</Link>
          <Link href='/api/auth/signin' className={`${buttonStyle} bg-transparent` }>Explore community</Link>
        </div>

      </div>

      <div className="md:w-1/2 grid place-content-center translate-y-[-5%] ">
           <Image src={'/heroPng.png'} width={400} height={400} alt="hero" />
      </div>
    </section>
  )
}

export default HeroSection
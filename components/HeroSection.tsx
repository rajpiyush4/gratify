import Link from "next/link"


const buttonStyle = 'px-4 font-bold font-mono shadow-custom transition bg-amber-300 py-2 border border-black rounded-3xl'

function HeroSection() {
  return (
    <section className='flex h-4/5 items-center'>
        <div className="w-1/2 flex gap-8 flex-col">
          <h1 className="text-5xl font-bold font-fantasy">Embrace the power of thankfulness</h1>
          <p className="font-sans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ex placeat, repellat non dolorem tenetur nostrum laborum rem veritatis quidem modi deleniti accusamus esse illum aliquam vel doloribus doloremque minus.</p>

          <div className="flex gap-8">
            <Link href='/api/auth/signin' className={buttonStyle}>Start writing now</Link>
            <Link href='/api/auth/signin' className={buttonStyle}>Explore community</Link>
          </div>

        </div>

        <div className="w-1/2">

        </div>
    </section>
  )
}

export default HeroSection
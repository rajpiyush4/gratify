'use client'
import { experimental_useFormStatus as useFormStatus } from "react-dom"



function ButtonPost() {
    const {pending} = useFormStatus()
  return (
    <>
       <button className="px-8 py-2 font-semibold shadow-custom-1 transition border-black border bg-pink-d rounded-[50px]"  disabled={pending?true: false} type="submit">{pending? 'pending' : 'Publish :)'}</button>
    </>
  )
}

export default ButtonPost
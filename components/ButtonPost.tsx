'use client'
import { experimental_useFormStatus as useFormStatus } from "react-dom"



function ButtonPost() {
    const {pending} = useFormStatus()
  return (
    <>
       <button disabled={pending?true: false} type="submit">{pending? 'pending' : 'Post'}</button>
    </>
  )
}

export default ButtonPost
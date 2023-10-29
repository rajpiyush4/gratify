'use client'
import { useRouter } from "next/navigation"

type ButtonProps<T> ={
    children: React.ReactNode,
    className: string,
    props?: T

}

const ButtonCloseModal = <T,>({children, className, ...props}: ButtonProps<T>) =>{
    const router = useRouter()

    return (
        <button {...props} className={`${className} grid place-content-center`} onClick={()=>router.back()}>{children}</button>
    )
}

export default ButtonCloseModal
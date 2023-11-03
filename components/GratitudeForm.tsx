import { addGratitude } from "@/actions/gratitudeActions"
import { redirect } from 'next/navigation'
import ButtonPost from "./ButtonPost"

function GratitudeForm() {

    const handleForm = async (formData: FormData) => {
        'use server'
        const content = formData.get('gratitude')
        console.log(content)
        if (content) {
            const entry = await addGratitude(content, '')
        }

        redirect('/')
    }

    return (
        <form action={handleForm} className="flex flex-col h-[70%] py-4 justify-between gap-4">
            <textarea autoFocus={true} className="resize-none  decoration-none w-[100%] h-full bg-transparent outline-none p-4" placeholder="Start writing!!!"  />
            <div className="flex justify-end w-full">
                <ButtonPost />
            </div>
        </form>
    )
}

export default GratitudeForm
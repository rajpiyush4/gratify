import { addGratitude } from "@/actions/gratitudeActions"
import {redirect} from 'next/navigation'
import ButtonPost from "./ButtonPost"

function GratitudeForm() {

    const handleForm = async (formData: FormData) => {
        'use server'
        const content = formData.get('gratitude') 
        console.log(content)
        if (content) {
            const entry = await addGratitude(content, '')
        }
        
        redirect('/user/piyush')
    }

    return (
        <form action={handleForm} className="flex flex-col justify-between gap-4">
            <textarea className="bg-amber-200" name="gratitude" id="" cols={30} rows={10} />
            <div>
                <ButtonPost/>
            </div>
        </form>
    )
}

export default GratitudeForm
"use client";

import ButtonPost from "./ButtonPost"
import Dictaphone from "./SpeechToText"
import Keypad from "./Keypad"
import {useState} from 'react'
import { handleGratitudeForm } from "@/server-actions/handle-gratitude-form";

function GratitudeForm({ challengeId, isPublic }: { challengeId?: string, isPublic: boolean }) {
    const [input, setInput] = useState('')

    return (
        <>
            {/* <Keypad/> */}
            <form action={( formData ) => handleGratitudeForm({
                formData,
                challengeId,
                isPublic,
                input
            })} className="flex flex-col h-[70%] p-4 justify-between gap-4">
                <Dictaphone setInput = {setInput} /> 
                <textarea autoFocus={true} className="resize-none  decoration-none w-[100%] h-full bg-transparent outline-none p-4" name="gratitude" placeholder="Start writing!!!" />
                <div className="flex justify-end w-full">
                    <ButtonPost />
                </div>
            </form>

        </>
    )
}

export default GratitudeForm
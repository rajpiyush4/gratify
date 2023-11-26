"use server";

import { addGratitude } from "@/actions/gratitudeActions"
import { redirect } from "next/navigation";

interface Args {
    formData: FormData,
    challengeId?: string,
    isPublic: boolean,
    input?: string | null
}

export const handleGratitudeForm = async (args: Args) => {
    const { formData, isPublic, challengeId, input } = args;

    const content = input ? input : formData.get('gratitude')


    if (content) {
        const entry = await addGratitude(content, isPublic, challengeId);
        redirect('/')
    }


}

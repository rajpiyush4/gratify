import Gratitude from "@/models/gratitude_enteries";
import { getUserByEmail } from "./userActions";


export const addGratitude =async (content: FormDataEntryValue | null, challengeId: string) => {
    const {_id} = await getUserByEmail()
    console.log(_id)
    try{
        const entry = Gratitude.create({
            content,
            userId: _id,
            isPublic: true,
            createdAt: new Date(Date.now()).toISOString(),
            challengeId: challengeId
        })
        return entry
    }catch(err){
        console.log(err)
    }

}

export const getPublicEntries=async()=>{
     try{
        const entries = await Gratitude.find()
        return entries;
     }catch(err){
        console.log(err)
     }
}
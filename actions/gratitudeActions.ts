import Gratitude from "@/models/gratitude_enteries";
import { getUserByEmail } from "./userActions";
import { ObjectId } from "mongoose";


export const addGratitude =async (content: FormDataEntryValue | null, challengeId: string) => {

    try{
        const {_id=''}:{_id:string | null}= await getUserByEmail()
        if(_id == '') {
            throw new Error("wtf");
        }
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

export const getAllGratitudesByUserId =async(_id:string)=>{

    try{
        const entries = await Gratitude.find({userId: _id})
        return entries

    }catch(err){
        console.log(err)
    }
    
}

export const getPublicGratitudeById =async(_id:string)=>{

    try{
        // let objectId = new ObjectId(_id)
        // console.log("objectId", Object)
        const entry = await Gratitude.findOne({_id})
        return entry

    }catch(err){
        console.log(err)
    }
    
}

export const getPublicGratitudesByUserId =async(_id:string)=>{
     try{
        const enteries = await Gratitude.find({
            userId: _id,
            isPublic: true
        })
        console.log(enteries, )
        return enteries;

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
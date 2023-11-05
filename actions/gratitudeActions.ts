import Gratitude from "@/models/gratitude_enteries";
import { getUserByEmail } from "./userActions";


export const addGratitude = async (content: FormDataEntryValue | null, isPublic:Boolean) => {
    try {
        const user = await getUserByEmail();
        if (!user || !user._id) {
            throw new Error("User not found or _id is missing.");
        }

        const entry = await Gratitude.create({
            content,
            username: user.username,
            userImg: user.profileImg,
            isPublic: isPublic,
            createdAt: new Date(),
            challengeId: null,
            likes: 0
        });

        return entry;
    } catch (err) {
        console.error(err);
        throw new Error("Error adding gratitude entry.");
    }
}


export const getAllGratitudesByUsername =async(username:string)=>{

    try{
        const entries = await Gratitude.find({username})
        return entries

    }catch(err){
        console.log(err)
    }
    
}

export const getPublicGratitudeById =async(_id:string)=>{
    console.log(_id)

    try{
        const entry = await Gratitude.findOne({
            _id,
            isPublic: true
        })
        return entry

    }catch(err){
        console.log(err)
    }
    
}

export const getPublicGratitudesByUsername =async(username:string)=>{
     try{
        const enteries = await Gratitude.find({
            username,
            isPublic: true
        })
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

export const updateLikes = async(id: string) =>{
    try {
        const updatedLike = await Gratitude.findOneAndUpdate(
          { _id: id },
          { $inc: { likes: 1 } }, // Increment the 'likes' field by 1
          { new: true } // Return the updated document
        );
    
        return updatedLike;
      } catch (err) {
        console.error(err);
        throw new Error("Error incrementing likes.");
      }
    
}
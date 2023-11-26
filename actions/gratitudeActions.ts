import Gratitude from "@/models/gratitude_enteries";
import { getUserByEmail } from "./userActions";
import { ObjectId } from "mongodb";
import User from "@/models/users";


export const addGratitude = async (content: FormDataEntryValue | null, isPublic: Boolean, challengeId?: string | null) => {
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
            challengeId: challengeId == null || undefined ? null : new ObjectId(challengeId),
            likes: 0
        });

        if ( challengeId){ 
            // update streaks
            const userupdated = await User.updateOne(
                { username: user.username }, 
                { $inc: { streakCount: 1 } } 
              );
        }


        return entry;
    } catch (err) {
        console.error(err);
        throw new Error("Error adding gratitude entry.");
    }
}




export const getAllGratitudesByUsername = async (username: string) => {

    try {
        const entries = await Gratitude.find({ username })
        return entries

    } catch (err) {
        console.log(err)
    }

}

export const getPublicGratitudeById = async (_id: string) => {

    try {
        const entry = await Gratitude.findOne({
            _id,
            isPublic: true
        })
        return entry

    } catch (err) {
        console.log(err)
    }

}

export const getPublicGratitudesByUsername = async (username: string) => {
    try {
        const enteries = await Gratitude.find({
            username,
            isPublic: true
        })
        return enteries;

    } catch (err) {
        console.log(err)
    }
}

export const getPublicEntries = async () => {
    try {
        const entries = await Gratitude.find({
          isPublic: true
        })
        return entries;
    } catch (err) {
        console.log(err)
    }
}

export const updateLikes = async (id: string) => {
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

export const getChallengedGratitudes = async (challengeId:string) => {
    try {
        const entries = Gratitude.find({
            challengeId
        })

        return entries
    } catch (err) {
        console.log(err)
    }

}
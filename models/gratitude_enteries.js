import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

const GratitudeSchema = new Schema({
    content:{
        type: String
    },
    isPublic:{
        type: Boolean
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    username:{
        type: String
    },
    userImg:{
        type: String
    },
    challengeId:{
        type: ObjectId, 
        default: null 
    },
    likes:{
        type: Number
    }
})

const Gratitude = models.gratitude_enteries || model("gratitude_enteries", GratitudeSchema)


export default Gratitude;
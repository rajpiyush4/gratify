import { Schema, model, models } from "mongoose";

const GratitudeSchema = new Schema({
    content:{
        type: String
    },
    isPublic:{
        type: Boolean
    },
    createdAt:{
        type: String
    },
    userId:{
        type: String,
    },
    challengeId:{
        type: String
    }
})

const Gratitude = models.gratitude_enteries || model("gratitude_enteries", GratitudeSchema)


export default Gratitude;
import { Schema, model, models } from "mongoose";

const ChallengeSchema = new Schema({
    description:{
        type: String
    },
    date:{
        type: Date
    }

})


const Challenge = models.challenges || model("challenges", ChallengeSchema)


export default Challenge;
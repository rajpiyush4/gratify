import { Schema, model, models } from "mongoose";

const ChallengeSchema = new Schema({
    discription:{
        type: String
    },
    date:{
        type: String
    }

})


const Challenge = models.Challenges || model("challenges", ChallengeSchema)


export default Challenge;
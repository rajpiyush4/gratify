import { Schema, model, models } from "mongoose";

const LikeSchema = new Schema({
    entryId:{
        type: String
    },
    userId:{
        type: String
    }

})

const Like = models.likes || model("likes", LikeSchema)


export default Like;
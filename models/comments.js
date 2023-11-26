import { ObjectId } from "mongodb";
import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
    //change ids type to ObjectId
    entryId:{
        type: ObjectId
    },
    username:{
        type: String
    },
    userImg:{
       type: String
    },
    content:{
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    parentId:{
        type: ObjectId,
        default: null 
    },
    likes:{
        type:Number
    }

})

const Comment = models.comments || model("comments", CommentSchema)



export default Comment;
import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
    //change ids type to ObjectId
    entryId:{
        type: String
    },
    userId:{
        type: String
    },
    content:{
        type: String
    },
    createdAt:{
        type: String //change it to Date type
    },
    parentId:{
        type: String
    }

})

const Comment = models.comments || model("comments", CommentSchema)



export default Comment;
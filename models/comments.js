import { Schema, model, models } from "mongoose";

const CommentSchema = new Schema({
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
        type: String
    },
    parentId:{
        type: String
    }

})

const Comment = models.comments || model("comments", CommentSchema)



export default Comment;
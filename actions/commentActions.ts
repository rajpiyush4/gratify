import Comment from "@/models/comments";
import { ObjectId } from "mongodb";


type Comment = {
   username: string,
   userImg: string,
   entryId: string,
   content: FormDataEntryValue | null,
   parentId: string | null | undefined
}


export async function addComment({comment}:{comment: Comment}){
         try{
            const add = await Comment.create({
                content: comment.content,
                username: comment.username,
                userImg: comment.userImg,
                parentId: comment.parentId==null ? null : new ObjectId(comment.parentId),
                entryId: comment.entryId,
                createdAt: Date.now(),
                likes: 0
            })
            return add;
         }catch(err){
            console.log(err)
         }
}

export async function getFirstLevelCommentByEntryId(id:string){
    try{
        const comment = await Comment.find({
            entryId: id,
            parentId: null
        })
        return comment;
    }catch(err){
        console.log(err)
    }
        
}

export async function getCommentByParentId(id:string){
    try{
        const comment = await Comment.find({parentId: id})
        return comment;
    }catch(err){
        console.log(err)
    }
        
}

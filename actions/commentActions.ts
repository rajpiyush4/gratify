import Comment from "@/models/comments";


type Comment = {
   userId: string,
   entryId: string,
   content: FormDataEntryValue | null,
   parentId?: string | null
}

export async function getCommentByEntryId(id:string){
    try{
        const comment = await Comment.find({entryId:id})
        return comment;
    }catch(err){
        console.log(err)
    }
        
}


export async function addComment({comment}:{comment: Comment}){
         try{
            const add = await Comment.create({
                content: comment.content,
                userId: comment.userId,
                parentId: comment.parentId,
                entryId: comment.entryId,
                createdAt: Date.now.toString()
            })
            return add;
         }catch(err){
            console.log(err)
         }
}